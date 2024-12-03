import React from "react";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import provider from "../assets/icons/puzzle.svg";
import NumberTicker from "@/components/ui/number-ticker";
import company from "../assets/icons/company.svg";
import province from "../assets/icons/state.svg";
import soldOut from "../assets/icons/sold-out.svg";

const Statistic = () => {
  const { theme } = useTheme();
  const data = [
    { value: 1, icon: provider, text: "Nhà cung cấp số 1 tại Đông Nam Á" },
    { value: 236, icon: company, text: "Đại lý trên toàn quốc" },
    { value: 63, icon: province, text: "Tỉnh thành có mặt sản phấm" },
    {
      value: 168.54,
      icon: soldOut,
      decimalPlaces: 3,
      text: "Sản phẩm tiêu thụ hàng tháng",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center mb-28 mx-4 px-4 lg:px-20 ">
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-nunito uppercase mt-6 mb-2 text-black dark:text-white">
          Thống Kê
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          VinaCen với những con số
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-lg">
        {data.map((item, index) => (
          <MagicCard
            key={index}
            className="relative flex flex-col items-center justify-between gap-4 p-8 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 hover:scale-110 transform transition duration-300"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="absolute top-0 left-0 w-full h-1" />
            <img
              src={item.icon}
              alt="icon"
              className="w-16 h-16 mb-4 mt-4 mx-auto"
            />
            <p className="text-4xl font-bold tracking-tight font-mono text-gray-800 dark:text-white">
              <NumberTicker
                value={item.value}
                decimalPlaces={item.decimalPlaces || 0}
              />
            </p>
            <p className="text-center text-gray-600 dark:text-gray-400">
              {item.text}
            </p>
          </MagicCard>
        ))}
      </div>
    </div>
  );
};

export default Statistic;
