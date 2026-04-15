'use client'
import Logo from "@/Components/Logo/Logo";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function DashboardLayout({children,}: {
  children: React.ReactNode;
}) {

  const [sidebarOpen,setSidebarOpen] = useState<boolean>(false)

  return (
    <div className="flex bg-base-100 w-full  min-h-screen">
      {/* Sidebar */}
      <div className={`fixed bg-base-100 border-r-2 border-primary shadow-md w-42 sm:w-64 min-h-screen ${sidebarOpen === true ? 'translate-x-0' : '-translate-x-64'} lg:translate-x-0 lg:static`}></div>

      {/* Main */}
      <main className="flex-1">
        <header className="flex justify-between items-center p-3 border-b border-primary">
          {/* Logo and bar icon */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center lg:hidden">
              <button onClick={() => setSidebarOpen(true)} className="hover:bg-gray-100 rounded-lg transition-colors">
                <FaBars className="text-xl text-gray-600" />
              </button>
            </div>

            <div className="flex items-center">
              <Logo />
            </div>
          </div>
          {/* Profile Menu */}
          <div className="flex items-center gap-2">
            <div className="flex">
              <button>
                <IoMdNotificationsOutline className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>

            <div className="flex">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </header>
        <div>{children}</div>
      </main>
    </div>
  );
}
