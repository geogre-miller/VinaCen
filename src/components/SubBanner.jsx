import React from "react";

const SubBanner = () => {
  return (
    <div className="relative w-full bg-gray-900 text-white py-16 px-8 md:px-20">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage:
            "url('https://vinacen.vn/frontend/images/3dindex2.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-screen-xl mx-auto z-10">
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <a href="/" className="hover:opacity-90 transition">
            <img
              src="https://vinacen.vn/frontend/images/vinacen.png"
              alt="Vinacen Logo"
              className="w-auto max-h-24"
            />
          </a>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold font-roboto tracking-wide uppercase">
            Vinacen - Thương Hiệu Vượt Thời Gian
          </h1>
          <div className="border-b-4 border-teal-500 w-64 mx-auto md:mx-0"></div>
          <p className="text-base md:text-lg text-gray-300 font-roboto">
            Là doanh nghiệp đầu tiên tại Việt Nam ứng dụng công nghệ trang trí
            nội thất 3D, VinaCen hướng tới là{" "}
            <span className="font-roboto font-bold text-white ">
              nhà cung cấp tấm ốp tường 3D số 1
            </span>{" "}
            tại thị trường Việt Nam và các nước Đông Nam Á.
          </p>
          <p className="text-base md:text-lg font-roboto text-gray-300">
            Sản phẩm được sản xuất trên dây chuyền công nghệ tiên tiến, hiện đại
            bậc nhất Châu Âu, chúng tôi cam kết cung cấp cho khách hàng những
            sản phẩm chất lượng cùng dịch vụ hậu mãi hoàn hảo nhất.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
