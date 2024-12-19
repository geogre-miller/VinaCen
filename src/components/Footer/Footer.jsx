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
      <div className="container mx-auto py-6 sm:py-8 lg:py-[45px] px-4 sm:px-6 lg:px-[15px] min-h-[100px] sm:min-h-[120px] lg:min-h-[140px]">
        <div className="flex flex-col md:flex-row justify-between items-center h-full gap-4 md:gap-6">
          {/* Logo */}
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <img
              src="https://vinacen.vn/frontend/images/vinacen.png"
              alt="Vinacen Logo"
              className="w-auto h-8 sm:h-9 lg:h-10"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center items-center font-nunito px-2 sm:px-4 lg:px-[10px] text-center md:text-left">
            <div className="flex flex-col sm:flex-row mb-2 sm:mb-3 gap-2 sm:gap-0">
              <h1 className="sm:border-r-2 border-gray-300 px-2 sm:px-4 lg:px-[20px] font-bold text-sm sm:text-base">
                Tel: [0236] 27 28 27
              </h1>
              <h1 className="sm:border-r-2 border-gray-300 px-2 sm:px-4 lg:px-[20px] font-bold text-sm sm:text-base">
                04 Nhon Hoa 22, Cam Le District, Da Nang City, Viet Nam
              </h1>
              <h1 className="px-2 sm:px-4 lg:px-[20px] font-bold text-sm sm:text-base">
                contact@vinacen.vn
              </h1>
            </div>
            <div className="text-sm sm:text-base"> Copyright © 2024 </div>
          </div>

          {/* Social Icons */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <div className="flex gap-3 sm:gap-4 lg:gap-5">
              <a
                href="https://www.facebook.com/vinacen3dwallpanel"
                className="hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]" />
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]" />
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]" />
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]" />
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                <FaTelegram className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
