import React from "react";
import notFound from "../assets/images/notFound.png";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center max-h-svh p-5	m-36">
      <img
        src={notFound}
        alt="404"
        width={312}
        height={160}
        className="mb-10"
      />
      <h1 className="text-6xl font-nunito">Page Not Found</h1>
      <p className="text-2xl text-wrap my-[10px] w-[700px] ">
        Trang bạn đang tìm kiếm có thể đã bị xóa do đã thay đổi tên hoặc tạm
        thời không khả dụng.
      </p>
      <p className="">
        Vui lòng kiểm tra lại đường dẫn hoặc quay về{" "}
        <a href="/" className="text-green-400">
          Trang chủ.
        </a>
      </p>
    </div>
  );
};

export default NotFoundPage;
