import { Link } from "react-router-dom";
import greenWall from "../assets/images/greenWall.jpg";

const WorkWithUs = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={greenWall}
          alt="Modern glass house"
          className="w-full h-full object-fit object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex justify-center items-center px-4">
        <h1 className="text-white text-center">
          <span className="text-xl md:text-4xl lg:text-4xl font-bold">
            Đã tìm thấy sản phẩm ưng ý?{" "}
          </span>
          <a
            href="/contacts"
            className="inline-block mt-4 md:mt-0 text-3xl md:text-4xl lg:text-4xl font-bold 
              underline decoration-2 underline-offset-auto hover:text-gray-900
              transition-colors duration-300"
          >
            Liên hệ ngay!
          </a>
        </h1>
      </div>
    </div>
  );
};

export default WorkWithUs;
