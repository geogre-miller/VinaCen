"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "next-themes";
import findAgency from "@/assets/icons/findAgency.svg";
import vietnamAgency from "@/assets/icons/vietnamAgency.svg";
import interior from "@/assets/icons/interior.svg";
import gypsumBoard from "@/assets/icons/gypsumBoard.svg";
import NotFoundPage from "@/pages/NotFoundPage";

const Services = () => {
  const { theme } = useTheme();

  const serviceItems = [
    {
      href: "https://timdaily.com.vn/",
      icon: findAgency,
      title: "Tìm đại lý",
      description: "Sàn thương mại điện tử Tìm Đại Lý hàng đầu VN",
    },
    {
      href: "https://dailyviet.vn/",
      icon: vietnamAgency,
      title: "Đại lý Việt",
      description: "Cộng đồng đại lý Việt",
    },
    {
      href: "https://timdaily.com.vn/can-tim-dai-ly/14748-tim-dai-ly-tong-si-cong-tac-vien-san-pham-gia-dung-lap-ghep-thong-minh",
      icon: interior,
      title: "Gia dụng nội thất",
      description: "Nội thất gia dụng lắp ghép thông minh Vinacen Store",
    },
    {
      href: <NotFoundPage />,
      icon: gypsumBoard,
      title: "Tấm ốp tường 3D xuất khẩu",
      description: "Xuất khẩu sang hơn 10 quốc gia trên thế giới",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center mb-28 mx-4 pt-10   px-4 lg:px-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 ">
      <h1 className="text-2xl font-bold font-nunito uppercase mb-6 text-black dark:text-white">
        Dịch Vụ
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-lg">
        {serviceItems.map((item, index) => (
          <a
            href={item.href}
            key={index}
            target="blank"
            className="focus:outline-none"
          >
            <MagicCard
              className="relative flex flex-col items-center justify-between gap-4 p-8 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 hover:scale-110 transform transition duration-300"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <div className="absolute top-0 left-0 w-full h-1" />
              <img
                src={item.icon}
                alt="icon"
                className="w-16 h-16 mb-4 mt-4 mx-auto"
              />
              <h2 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-2">
                {item.title}
              </h2>
              <p className="text-center text-pretty text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </MagicCard>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;
