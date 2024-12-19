import { HomeIcon, Menu } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS_LEFT = [
  { href: "/", label: "Trang Chủ", icon: HomeIcon },
  { href: "/about-us", label: "Giới Thiệu" },
  { href: "/blogs", label: "Tin Tức" },
];

const NAV_ITEMS_RIGHT = [
  { href: "/products", label: "Sản Phẩm" },
  { href: "/agency", label: "Đại Lý" },
  { href: "/contacts", label: "Liên Hệ" },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-50 bg-[#f1fcf3] border-b-2 shadow-md w-full h-[80px] supports-backdrop-blur:bg-background/90 sticky top-0 bg-background/40 backdrop-blur-xl">
      <div className="flex items-center justify-between mx-auto px-8 sm:px-8 lg:px-20 py-4 font-roboto">
        {/* Left Section: Main Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {NAV_ITEMS_LEFT.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </nav>

        {/* Center Section: Logo */}
        <div className="flex items-center justify-center pt-1 pr-[80px]">
          <a
            href="/"
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://vinacen.vn/frontend/images/vinacen.png"
              alt="Vinacen Logo"
              className="w-auto h-8 sm:h-9 lg:h-10"
            />
          </a>
        </div>

        {/* Right Section: Additional Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 ">
          {NAV_ITEMS_RIGHT.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </nav>

        {/* Mobile Menu: Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Optional: Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t-2">
          <nav className="flex flex-col space-y-2 px-8 py-4">
            <NavLink href="/" icon={HomeIcon} label="Trang Chủ" />
            <NavLink href="/about-us" label="Giới Thiệu" />
            {/* <NavLink href="#" label="Video" /> */}
            <NavLink href="/blogs" label="Tin Tức" />
            <NavLink href="/products" label="Sản Phẩm" />
            <NavLink href="/agency" label="Đại Lý" />
            {/* <NavLink href="#" label="Thực Tập" /> */}
            <NavLink href="/contacts" label="Liên Hệ" />
          </nav>
        </div>
      )}
    </header>
  );
}
const NavLink = ({ href, icon: Icon, label, className }) => (
  <a
    href={href}
    className={`flex items-center text-gray-700 hover:text-green-600 duration-300 ease-in-out transform hover:scale-105
 transition-all ${className}`}
  >
    {Icon && <Icon className="mr-2 w-5 h-5 sm:w-5 sm:h-5" />}
    {label}
  </a>
);
