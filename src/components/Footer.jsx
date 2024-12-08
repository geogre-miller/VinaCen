import React from "react";
import {
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 relative">
      <div className="container mx-auto py-[45px] px-[15px] h-[140px]">
        <div className="flex justify-between items-center h-full ">
          <div>
            <img
              src="https://vinacen.vn/frontend/images/vinacen.png"
              alt="Vinacen Logo"
              className="w-auto max-h-10"
            />
          </div>
          <div className="flex flex-col justify-center items-center font-nunito  px-[10px]">
            <div className="flex mb-2">
              <h1 className="border-r-2 border-gray-300 px-[20px] font-bold">
                Tel: [0236] 27 28 27
              </h1>
              <h1 className="border-r-2 border-gray-300 px-[20px] font-bold">
                04 Nhon Hoa 22, Cam Le District, Da Nang City, Viet Nam
              </h1>
              <h1 className="px-[20px] font-bold">contact@vinacen.vn</h1>
            </div>
            <div> Copyright © 2024 </div>
          </div>
          <div>
            <div className="flex gap-5">
              <a
                href="https://www.facebook.com/vinacen3dwallpanel"
                className="hover:text-gray-900 transition-colors"
                target="_blank"
              >
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                <FaTelegram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
