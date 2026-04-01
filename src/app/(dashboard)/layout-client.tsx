"use client";
import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashNavbar from "@/components/dashboard/DashNavbar";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:fixed z-30 top-0 left-0 h-screen w-64
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>

      {/* Main */}
      <div className="flex flex-col flex-1 w-full lg:ml-64">
        
        <div className="max-w-7xl mx-auto w-full sm:px-6 lg:px-6">
          <DashNavbar openSidebar={() => setSidebarOpen(true)} />
          <main className="mt-4 px-4 sm:px-6 lg:px-8">{children}</main>
        </div>

      </div>
    </div>
  );
}