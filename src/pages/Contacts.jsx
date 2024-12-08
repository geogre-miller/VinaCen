import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WorkWithUs from "@/components/WorkWithUs";
import React from "react";

const Contacts = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen px-[15px]">
        <div className="w-full min-h-screen md:px-8 ">
          <h1 className="text-5xl font-bold font-roboto text-center py-[84px] animate-fade-up">
            Liên hệ
          </h1>
        </div>
      </div>
      <WorkWithUs />
      <Footer />
    </>
  );
};

export default Contacts;
