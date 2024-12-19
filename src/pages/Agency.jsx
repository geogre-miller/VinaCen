import BreadcrumbsWithIcon from "@/components/BreadcrumbsWithIcon";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const Agency = () => {
  return (
    <>
      <Header />
      <BreadcrumbsWithIcon />
      <div className="w-full min-h-screen px-[15px] pb-24">
        <div className="w-full md:px-8 ">
          <h1 className="text-5xl font-bold font-roboto text-center py-[84px] animate-fade-up">
            Đại lý
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Agency;
