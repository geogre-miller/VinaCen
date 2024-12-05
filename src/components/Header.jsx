import {
  Heart,
  HomeIcon,
  Search,
  ShoppingCart,
  Phone,
  Menu,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-50 bg-[#f1fcf3] border-b-2 shadow-md w-full h-[80px] supports-backdrop-blur:bg-background/90 sticky top-0 bg-background/40 backdrop-blur-xl">
      <div className="flex items-center justify-between mx-auto px-8 md:px-20 py-4 font-roboto">
        {/* Left Section: Main Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink
            href="/"
            icon={HomeIcon}
            label="Trang Chủ"
            className="transition duration-300 ease-in-out transform hover:scale-105"
          />
          <NavLink
            href="/about-us"
            label="Giới Thiệu"
            className="transition  duration-300 ease-in-out transform hover:scale-105"
          />
          {/* <NavLink href="/video" label="Video" className="transition duration-300 ease-in-out transform hover:scale-105" /> */}
          <NavLink
            href="/blog"
            label="Tin Tức"
            className="transition duration-300 ease-in-out transform hover:scale-105"
          />
        </nav>

        {/* Center Section: Logo */}
        <div className="flex items-center justify-center pt-1">
          <a href="/">
            <img
              src="https://vinacen.vn/frontend/images/vinacen.png"
              alt="Vinacen Logo"
              className="w-auto max-h-10"
            />
          </a>
        </div>

        {/* Right Section: Additional Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink
            href="#"
            label="Sản Phẩm"
            className="transition duration-300 ease-in-out transform hover:scale-105"
          />
          <NavLink
            href="#"
            label="Đại Lý"
            className="transition duration-300 ease-in-out transform hover:scale-105"
          />
          <NavLink
            href="#"
            label="Thực Tập"
            className="transition duration-300 ease-in-out transform hover:scale-105"
          />
          <NavLink
            href="#"
            label="Liên Hệ"
            className="transition duration-300 ease-in-out transform hover:scale-105"
          />
        </nav>

        {/* Mobile Menu: Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 bg-gray-100 rounded-md hover:bg-gray-200"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Optional: Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t-2">
          <nav className="flex flex-col space-y-2 px-8 py-4">
            <NavLink href="#" icon={HomeIcon} label="Trang Chủ" />
            <NavLink href="#" label="Giới Thiệu" />
            <NavLink href="#" label="Video" />
            <NavLink href="#" label="Tin Tức" />
            <NavLink href="#" label="Sản Phẩm" />
            <NavLink href="#" label="Đại Lý" />
            <NavLink href="#" label="Thực Tập" />
            <NavLink href="#" label="Liên Hệ" />
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, icon: Icon, label, className }) {
  return (
    <a
      href={href}
      className={`flex items-center text-gray-700 hover:text-green-600 transition-all ${className}`}
    >
      {Icon && <Icon className="mr-2 w-5 h-5" />}
      {label}
    </a>
  );
}
