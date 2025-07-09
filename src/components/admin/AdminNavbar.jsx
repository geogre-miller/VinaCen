import { MagnifyingGlassIcon, BellIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Avatar, Menu, MenuHandler, MenuList, MenuItem, IconButton } from "@material-tailwind/react";
import { useAuth } from "@/components/auth/AuthContext";

export default function AdminNavbar({ onSidebarToggle }) {
  const { user } = useAuth();
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-sm flex items-center justify-between px-4 py-3 md:px-8">
      <div className="flex items-center gap-2">
        <IconButton variant="text" className="md:hidden" onClick={onSidebarToggle}>
          <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </IconButton>
        <div className="relative">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 w-48 md:w-64 bg-gray-100 dark:bg-gray-800 rounded-md border-none text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <IconButton variant="text">
          <BellIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </IconButton>
        <Menu>
          <MenuHandler>
            <Avatar src={user?.avatar_url || "https://i.pravatar.cc/40?img=3"} alt="admin" className="cursor-pointer" />
          </MenuHandler>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </header>
  );
}