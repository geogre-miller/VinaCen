import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const ProductsDetails = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-12 p-6 bg-white shadow-lg rounded-lg">
      <Typography
        variant="h6"
        className="text-start font-bold font-nunito mb-4"
      >
        Thông số kỹ thuật:
      </Typography>
      <Card className="overflow-hidden px-6">
        <table className="w-full min-w-max table-auto text-left">
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-4 border-b border-gray-300">
                <Typography variant="small" className="font-bold">
                  Tên sp:
                </Typography>
              </td>
              <td className="py-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  {product.name}
                </Typography>
              </td>
              <td className="py-4 border-b border-gray-300">
                <Typography variant="small" className="font-bold">
                  Mã SP:
                </Typography>
              </td>
              <td className="py-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  {product.code}
                </Typography>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-4 border-b border-gray-300">
                <Typography variant="small" className="font-bold">
                  Chất liệu:
                </Typography>
              </td>
              <td className="py-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  {product.material}
                </Typography>
              </td>
              <td className="py-4 border-b border-gray-300">
                <Typography variant="small" className="font-bold">
                  Công nghệ:
                </Typography>
              </td>
              <td className="py-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  {product.technology}
                </Typography>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-4 border-b border-gray-300">
                <Typography variant="small" className="font-bold">
                  Màu sẵn có:
                </Typography>
              </td>
              <td className="py-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  {product.color}
                </Typography>
              </td>
              <td className="py-4 border-b border-gray-300">
                <Typography variant="small" className="font-bold">
                  Kích thước:
                </Typography>
              </td>
              <td className="py-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  {product.dimensions}
                </Typography>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-4 border-b border-gray-300">
                <Typography variant="small" className="font-bold">
                  Bảo hành:
                </Typography>
              </td>
              <td className="py-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  {product.warranty}
                </Typography>
              </td>
              <td className="py-4 border-b border-gray-300">
                <Typography variant="small" className="font-bold">
                  Vận chuyển:
                </Typography>
              </td>
              <td className="py-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  {product.transport}
                </Typography>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-4 border-b border-gray-300">
                <Typography variant="small" className="font-bold">
                  Đặc tính:
                </Typography>
              </td>
              <td colSpan="3" className="py-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  {product.characteristic}
                </Typography>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-4 border-b border-gray-300">
                <Typography variant="small" className="font-bold">
                  Ưu điểm:
                </Typography>
              </td>
              <td colSpan="3" className="py-4 border-b border-gray-300">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
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
      <div className="mt-6">
        <Typography variant="h6" className="text-red-500 font-bold">
          Hướng dẫn sử dụng:
        </Typography>
        <ul className="list-disc pl-5">
          <li>Bước 1: Chuẩn bị bề mặt bức tường đảm bảo sạch, khô ráo</li>
          <li>
            Bước 2: Dùng keo silicol hoặc keo P66 bôi vào mặt sau tấm ốp sau đó
            ốp lên tường
          </li>
          <li>
            Bước 3: Dùng silicol hoặc bột bả để trít vào khe hở (nếu có) giữa
            các tấm ghép
          </li>
          <li>Bước 4: Vệ sinh sạch sẽ và chiêm ngưỡng tác phẩm nghệ thuật</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductsDetails;
