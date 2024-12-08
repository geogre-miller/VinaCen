import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProductsCharacteristic = () => {
  const features = [
    {
      id: 1,
      title: "Siêu bền, siêu nhẹ",
      description:
        "Với cấu trúc hình lập thể, tấm ốp tường 3d bền bỉ với thời gian, có thể chịu được áp lực lên đến 200kg.",
    },
    {
      id: 2,
      title: "Chống ồn, chống cháy",
      description:
        "Sản phẩm được sản xuất trên dây chuyền công nghệ tiên tiến với các thành phần chống cháy được các nhà khoa học nghiên cứu.",
    },
    {
      id: 3,
      title: "Cách âm, cách nhiệt",
      description:
        "Tấm ốp tường 3d với độ nổi từ 2-5cm được sản xuất trên vật liệu nhẹ, xốp, có tính đàn hồi cao đảm bảo tiêu chuẩn.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-4">
          <h2 className="text-3xl font-bold mb-4">Đặc Tính Sản Phẩm</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            Sản phẩm được sản xuất trên dây chuyền tiên tiến, hiện đại bậc nhất
            Châu Âu cùng với chất liệu PVC tổng hợp siêu bền, siêu nhẹ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              key={feature.id}
            >
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {feature.title}
                </Typography>
                <Typography className="text-gray-600 text-sm">
                  {feature.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
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
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCharacteristic;
