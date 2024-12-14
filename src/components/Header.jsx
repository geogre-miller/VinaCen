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
    <header className="z-50 bg-[#f1fcf3] border-b-2 shadow-md w-full h-[80px] sticky top-0 bg-background/40 backdrop-blur-xl">
      <div className="flex items-center justify-between mx-auto px-8 md:px-20 py-4 font-roboto max-w-screen-xl">
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
            className="transition duration-300 ease-in-out transform hover:scale-105"
          />
          <NavLink
            href="/blogs"
            label="Tin Tức"
            className="transition duration-300 ease-in-out transform hover:scale-105"
          />
        </nav>
        <div className="flex items-center justify-center">
          <a href="/">
            <img
              src="https://vinacen.vn/frontend/images/vinacen.png"
              alt="Vinacen Logo"
              className="w-auto max-h-10"
            />
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink
            href="/products"
            label="Sản Phẩm"
            className="transition duration-300 ease-in-out transform hover:scale-105"
          />
          <NavLink
            href="/agency"
            label="Đại Lý"
            className="transition duration-300 ease-in-out transform hover:scale-105"
          />
          <NavLink
            href="/contacts"
            label="Liên Hệ"
            className="transition duration-300 ease-in-out transform hover:scale-105"
          />
        </nav>
        <div className="md:hidden flex items-center">
          <button
            className="p-2 bg-gray-100 rounded-md hover:bg-gray-200"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t-2">
          <nav className="flex flex-col space-y-2 px-8 py-4">
            <NavLink href="/" icon={HomeIcon} label="Trang Chủ" />
            <NavLink href="/about-us" label="Giới Thiệu" />
            <NavLink href="/blogs" label="Tin Tức" />
            <NavLink href="/products" label="Sản Phẩm" />
            <NavLink href="/agency" label="Đại Lý" />
            <NavLink href="/contacts" label="Liên Hệ" />
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
