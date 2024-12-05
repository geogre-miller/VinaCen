"use client";

import { useTheme } from "next-themes";
import findAgency from "@/assets/icons/findAgency.svg";
import vietnamAgency from "@/assets/icons/vietnamAgency.svg";
import interior from "@/assets/icons/interior.svg";
import gypsumBoard from "@/assets/icons/gypsumBoard.svg";
import ServicesCards from "./ServicesCards";

const Services = () => {
  const serviceItems = [
    {
      icon: findAgency,
      title: "Tìm đại lý",
      description: "Sàn thương mại điện tử Tìm Đại Lý hàng đầu VN",
      href: "https://timdaily.com.vn/",
    },
    {
      icon: vietnamAgency,
      title: "Đại lý Việt",
      description: "Cộng đồng đại lý Việt",
      href: "https://dailyviet.vn/",
    },
    {
      icon: interior,
      title: "Gia dụng nội thất",
      description: "Nội thất gia dụng lắp ghép thông minh Vinacen Store",
      href: "https://timdaily.com.vn/can-tim-dai-ly/14748-tim-dai-ly-tong-si-cong-tac-vien-san-pham-gia-dung-lap-ghep-thong-minh",
    },
    {
      icon: gypsumBoard,
      title: "Tấm ốp tường 3D xuất khẩu",
      description: "Xuất khẩu sang hơn 10 quốc gia trên thế giới",
      href: "#",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center mb-28 mx-4 pt-10 px-4 lg:px-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-2xl font-bold font-nunito uppercase mb-6 text-black dark:text-white">
        Dịch Vụ
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-lg">
        {serviceItems.map((item, index) => (
          <ServicesCards
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
