import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { useState, useEffect, useRef } from "react";

export default function HeroVideo() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger BlurIn when section is visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center mt-5"
    >
      {/* Light mode thumbnail */}
      <HeroVideoDialog
        className="dark:hidden block w-full h-[650px] brightness-75 object-cover"
        animationStyle="from-top"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://vinacen.vn/frontend/images/video.jpg"
        thumbnailAlt="Hero Video"
        onVideoToggle={setIsVideoOpen}
      />

      {/* Overlay text */}
      <div
        className={`font-roboto absolute z-10 text-center text-white px-6 max-w-3xl transition-opacity duration-300 pb-8 ${
          isVideoOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <h1
          className={`text-4xl md:text-6xl font-bold mb-6 transform transition-all duration-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          VinaCen
        </h1>
        <p
          className={`text-base md:text-xl leading-relaxed mb-8 transform transition-all duration-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Con người là giá trị cốt lõi tạo nên giá trị của doanh nghiệp. Xây
          dựng môi trường làm việc năng động, sáng tạo và nhân văn; tạo điều
          kiện thu nhập cao cùng cơ hội phát triển công bằng cho tất cả nhân
          viên là sứ mệnh mà chúng tôi luôn hướng tới.
        </p>
      </div>
    </div>
  );
}
