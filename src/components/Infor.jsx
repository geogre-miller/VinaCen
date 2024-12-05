import { motion } from "framer-motion";

const Infor = () => {
  return (
    <div className="bg-[#f1fcf3]">
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 pb-5 p-2 md:p-10 mx-5 md:mx-20 indent-4">
          <motion.div
            className=""
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://vinacen.vn/frontend/images/index.jpg"
              alt="Banner"
              className="w-full h-[300px] md:h-[600px] rounded-lg object-cover object-center shadow-2xl shadow-gray-900/50"
            />
          </motion.div>
          <motion.div
            className="m-3 md:m-7 p-3 md:p-7 text-justify text-wrap font-nunito"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-center text-2xl font-bold font-nunito pb-5">
              TẤM TRẦN - TƯỜNG 3D
            </h1>
            <p className="pb-5 text-base md:text-md">
              Tấm ốp 3d là xu hướng trang trí nội thất mới đang rất được ưa
              chuộng trên thị trường toàn thế giới bởi vì nó mang đến cho ngôi
              nhà của gia chủ độ sang trọng, đẹp mắt, chi phí hợp lý cũng như
              bền bỉ với thời gian
            </p>
            <p>
              Tự hào là doanh nghiệp đầu tiên tại Việt Nam ứng dụng công nghệ
              sản xuất hàng đầu từ Thụy Sỹ, sản phẩm tấm ốp 3d do Vinacen sản
              xuất luôn được khách hàng trong và ngoài nước tin tưởng sử dụng vì
              có độ bền cao, chống ẩm mốc, chống cháy, kháng khuẩn, cách âm,
              cách nhiệt cũng như giá cả rất hợp lý và được ứng dụng trong mọi
              không gian: phòng khách, phòng ngủ, nhà hàng, khách sạn, caffe,
              bar, spa…
            </p>
            <h2 className="text-lg md:text-xl font-bold mt-5">Sứ mệnh</h2>
            <ul>
              <li>
                <span>
                  - Với khách hàng: Chúng tôi luôn ý thức được sứ mệnh cung cấp
                  sản phẩm có chất lượng cùng dịch vụ hậu mãi hoàn hảo nhất !
                </span>
              </li>
              <li>
                <span>- Với đối tác:</span> VinaCen luôn đề cao tinh thần hợp
                tác với các đối tác trên phương diện “hợp tác song phương – đôi
                bên cùng phát triển”
              </li>
              <li>
                <span>
                  - Với nhân viên: Con người là giá trị cốt lõi tạo nên giá trị
                  của doanh nghiệp. Xây dựng môi trường làm việc chuyên nghiệp,
                  năng động, sáng tạo và nhân văn.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Infor;
