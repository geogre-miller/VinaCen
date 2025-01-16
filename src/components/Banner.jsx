import { Button } from "./ui/button";
import { useScroll } from "@/hooks/useScroll";

const Banner = () => {
  const { scrollToElement } = useScroll();

  return (
    <div className="relative  ">
      {/* Background Image */}
      <img
        src="https://vinacen.vn/frontend/images/tam-op-3d.jpg"
        alt="Banner"
        className="w-full h-[650px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-30">
        <h1 className="text-white text-4xl font-bold font-nunito mb-2 uppercase animate-fade-down animate-ease-linear">
          Tấm Trần - Tường 3D VinaCen
        </h1>
        <p className="text-white font-nunito font-semibold text-lg mb-6 animate-fade-down animate-ease-linear">
          DUY TRÌ UY TÍN - ĐẢM BẢO CHẤT LƯỢNG - DỊCH VỤ HOÀN HẢO!
        </p>
        <Button
          onClick={() => scrollToElement("info-section")}
          className="px-6 py-2 bg-transparent border border-white text-white text-sm font-medium uppercase hover:bg-white hover:text-black transition duration-600 rounded-md animate-fade-down animate-ease-linear"
        >
          Tham Quan
        </Button>
      </div>
    </div>
  );
};

export default Banner;
