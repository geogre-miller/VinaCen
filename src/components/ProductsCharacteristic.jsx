import React from "react";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Đặc Tính Sản Phẩm</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Sản phẩm được sản xuất trên dây chuyền tiên tiến, hiện đại bậc nhất
            Châu Âu cùng với chất liệu PVC tổng hợp siêu bền, siêu nhẹ.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.id * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCharacteristic;
