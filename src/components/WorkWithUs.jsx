import { Link } from "react-router-dom";
import greenWall from "../assets/images/greenWall.jpg";

const WorkWithUs = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={greenWall}
          alt="Modern glass house"
          className="w-full h-full object-fit object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col sm:flex-row justify-center items-center px-4 sm:px-6 lg:px-8 gap-2 sm:gap-3">
        <h1 className="text-white text-center">
          <span className="block sm:inline text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Đã tìm thấy sản phẩm ưng ý?{" "}
          </span>
          <a
            href="/contacts"
            className="inline-block mt-4 md:mt-0 text-xl  sm:text-2xl md:text-3xl lg:text-4xl font-bold 
              underline decoration-2 underline-offset-4 hover:text-gray-900
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
