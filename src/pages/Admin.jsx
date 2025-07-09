import { useState } from "react";
import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/Sidebar";
import { Outlet } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Admin() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminNavbar onSidebarToggle={() => setCollapsed(!collapsed)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}