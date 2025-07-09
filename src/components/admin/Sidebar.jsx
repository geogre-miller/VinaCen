import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  Settings,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

const links = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/admin" },
  { label: "Products", icon: Package, to: "/admin/products" },
  { label: "Users", icon: Users, to: "/admin/users" },
  { label: "Settings", icon: Settings, to: "/admin/settings" },
];

export default function AdminSidebar({ collapsed = false, onToggle }) {
  const location = useLocation();
  
  return (
    <div className={`bg-white dark:bg-gray-800 h-full shadow-md transition-transform duration-300 ${
      collapsed ? "w-20" : "w-64"
    }`}>
      {/* Header with logo */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <Package className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-gray-800 dark:text-white">Vinacen Admin</span>
          </div>
        )}
        {collapsed && <Package className="h-6 w-6 text-indigo-600 mx-auto" />}
        
        {/* Toggle button */}
        <button 
          onClick={onToggle}
          className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
        >
          {collapsed ? 
            <ChevronRight className="h-5 w-5" /> : 
            <ChevronLeft className="h-5 w-5" />
          }
        </button>
      </div>
      
      {/* Navigation links */}
      <nav className="p-2 mt-4">
        <ul className="space-y-2">
          {links.map(({ label, icon: Icon, to }) => {
            const isActive = location.pathname === to;
            
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`flex items-center p-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-indigo-600 dark:text-indigo-400" : ""}`} />
                  {!collapsed && <span className="ml-3">{label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full border-t border-gray-100 dark:border-gray-700 p-4">
        {!collapsed && (
          <span className="text-xs text-gray-500 dark:text-gray-400">© 2025 Vinacen</span>
        )}
      </div>
    </div>
  );
}