import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const ProductsDetails = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-8 sm:mt-12 p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-lg">
      <Typography
        variant="h6"
        className="text-start font-bold font-nunito mb-4 text-base sm:text-lg lg:text-xl"
      >
        Thông số kỹ thuật:
      </Typography>
      <Card className="overflow-x-auto sm:overflow-hidden px-4 sm:px-6">
        <table className="w-full min-w-[640px] table-auto text-left">
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-bold text-sm sm:text-base"
                >
                  Tên sp:
                </Typography>
              </td>
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600 text-sm sm:text-base"
                >
                  {product.name}
                </Typography>
              </td>
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-bold text-sm sm:text-base"
                >
                  Mã SP:
                </Typography>
              </td>
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600 text-sm sm:text-base"
                >
                  {product.code}
                </Typography>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-bold text-sm sm:text-base"
                >
                  Chất liệu:
                </Typography>
              </td>
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600 text-sm sm:text-base"
                >
                  {product.material}
                </Typography>
              </td>
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-bold text-sm sm:text-base"
                >
                  Công nghệ:
                </Typography>
              </td>
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600 text-sm sm:text-base"
                >
                  {product.technology}
                </Typography>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-bold text-sm sm:text-base"
                >
                  Màu sẵn có:
                </Typography>
              </td>
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600 text-sm sm:text-base"
                >
                  {product.color}
                </Typography>
              </td>
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-bold text-sm sm:text-base"
                >
                  Kích thước:
                </Typography>
              </td>
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600 text-sm sm:text-base"
                >
                  {product.dimensions}
                </Typography>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-bold text-sm sm:text-base"
                >
                  Bảo hành:
                </Typography>
              </td>
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600 text-sm sm:text-base"
                >
                  {product.warranty}
                </Typography>
              </td>
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-bold text-sm sm:text-base"
                >
                  Vận chuyển:
                </Typography>
              </td>
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600 text-sm sm:text-base"
                >
                  {product.transport}
                </Typography>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-bold text-sm sm:text-base"
                >
                  Đặc tính:
                </Typography>
              </td>
              <td
                colSpan="3"
                className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300"
              >
                <Typography
                  variant="small"
                  className="font-normal text-gray-600 text-sm sm:text-base"
                >
                  {product.characteristic}
                </Typography>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-bold text-sm sm:text-base"
                >
                  Ưu điểm:
                </Typography>
              </td>
              <td
                colSpan="3"
                className="py-3 sm:py-4 px-2 sm:px-4 border-b border-gray-300"
              >
                <Typography
                  variant="small"
                  className="font-normal text-gray-600 text-sm sm:text-base"
                >
                  - Mẫu mã đa dạng, màu sắc phong phú <br />- Dễ dàng thi công,
                  bạn có thể tự lắp ghép và phối màu theo ý muốn <br />- Dễ dàng
                  tháo dỡ, thay đổi mẫu mã khi bạn muốn
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
      <div className="mt-4 sm:mt-6 lg:mt-8">
        <Typography
          variant="h6"
          className="text-red-500 font-bold text-base sm:text-lg mb-3 sm:mb-4"
        >
          Hướng dẫn sử dụng:
        </Typography>
        <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
          <li className="text-gray-700">
            Bước 1: Chuẩn bị bề mặt bức tường đảm bảo sạch, khô ráo
          </li>
          <li className="text-gray-700">
            Bước 2: Dùng keo silicol hoặc keo P66 bôi vào mặt sau tấm ốp sau đó
            ốp lên tường
          </li>
          <li className="text-gray-700">
            Bước 3: Dùng silicol hoặc bột bả để trít vào khe hở (nếu có) giữa
            các tấm ghép
          </li>
          <li className="text-gray-700">
            Bước 4: Vệ sinh sạch sẽ và chiêm ngưỡng tác phẩm nghệ thuật
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductsDetails;
