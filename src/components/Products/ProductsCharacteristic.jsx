import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import shieldIcon from "@/assets/icons/shield.svg";
import fireProof from "@/assets/icons/fireproof.svg";
import heatInsulation from "@/assets/icons/heatInsulating.svg";
const ProductsCharacteristic = () => {
  const features = [
    {
      id: 1,
      Icon: shieldIcon,
      title: "Siêu bền, siêu nhẹ",
      description:
        "Với cấu trúc hình lập thể, tấm ốp tường 3d bền bỉ với thời gian, có thể chịu được áp lực lên đến 200kg.",
    },
    {
      id: 2,
      Icon: fireProof,
      title: "Chống ồn, chống cháy",
      description:
        "Sản phẩm được sản xuất trên dây chuyền công nghệ tiên tiến với các thành phần chống cháy được các nhà khoa học nghiên cứu.",
    },
    {
      id: 3,
      Icon: heatInsulation,
      title: "Cách âm, cách nhiệt",
      description:
        "Tấm ốp tường 3d với độ nổi từ 2-5cm được sản xuất trên vật liệu nhẹ, xốp, có tính đàn hồi cao đảm bảo tiêu chuẩn.",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Đặc điểm sản phẩm
        </h2>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          Khám phá những tính năng độc đáo và ưu điểm vượt trội của sản phẩm
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {features.map((feature) => (
          <Card
            className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            key={feature.id}
          >
            <CardBody>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#f4511e]/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <img
                  className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#f4511e]"
                  src={feature.Icon}
                />
              </div>
              <Typography
                variant="h5"
                className="text-lg sm:text-xl lg:text-xl font-bold mb-2 sm:mb-3"
              >
                {feature.title}
              </Typography>
              <Typography className="text-gray-600 text-sm sm:text-base text-justify">
                {feature.description}
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-2"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </CardFooter> */}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsCharacteristic;
