"use client";
import Logo from "@/Components/Logo/Logo";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose, IoMdNotificationsOutline } from "react-icons/io";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const getDashboradNav = (role: string) => {
    const customerNav = [
      { navName: "User-1", navIcon: "1" },
      { navName: "User-1", navIcon: "1" },
      { navName: "User-1", navIcon: "1" },
      { navName: "User-1", navIcon: "1" },
    ];

    const adminNav = [
      { navName: "Admin-1", navIcon: "1" },
      { navName: "Admin-1", navIcon: "1" },
      { navName: "Admin-1", navIcon: "1" },
      { navName: "Admin-1", navIcon: "1" },
    ];

    if (role === "customer") {
      return customerNav;
    }

    return adminNav;
  };

  const navItem = getDashboradNav("customer");

  console.log(navItem);

  return (
    <div className="flex  w-full  min-h-screen bg-gray-100 dark:bg-black">
      {/* Sidebar */}
      <div
        className={`fixed bg-base-100 shadow-md  w-42 sm:w-64 min-h-screen ${sidebarOpen === true ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0 lg:static dark:border-r`}
      >
        {/* Logo and Cross bar */}
        <div className="flex items-center justify-between h-20 p-3 border-b border-gray-100">
          <div className="flex">
            <Logo />
          </div>
          <div className="flex lg:hidden">
            <button onClick={() => setSidebarOpen(false)}>
              <IoMdClose className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </button>
          </div>
        </div>

        {/* Nav Items */}
        <div className="p-3 space-y-3">
          {navItem.map((item) => (
            <div key={item.navName} className="flex items-center gap-1 text-neutral bg-gray-200 hover:bg-primary/20 hover:text-primary p-2 rounded-lg font-semibold">
              <Link href={''} className="">{item.navIcon}</Link>
               <Link href={''} className="">{item.navName}</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <main className="flex-1">
        <header className="flex justify-between items-center h-20 p-3  shadow-md dark:border-b bg-base-100">
          {/* Logo and bar icon */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center lg:hidden">
              <button
                onClick={() => setSidebarOpen(true)}
                className="hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FaBars className="text-xl text-gray-600" />
              </button>
            </div>

            <div className="flex items-center lg:hidden">
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
        <div className="">
          {children}
        </div>
      </main>
    </div>
  );
}
