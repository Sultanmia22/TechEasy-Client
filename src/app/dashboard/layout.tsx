"use client";
import { signOut } from "next-auth/react";
import Logo from "@/Components/Logo/Logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  X,
  LogOut,
  Bell,
  ShoppingBag,
  Heart,
  ShoppingCart,
  User,
  Package,
  Users,
  UserCog,
  FolderKanban,
  PanelLeftOpen,
} from "lucide-react";
import Image from "next/image";
import useAuth from "@/hook/useAuth";
import Theme from "@/Components/Theme/Theme";
import DashboardNav from "@/Components/NavLink/DashboardNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const [isDark, setIsDark] = useState<boolean>(false);

  const { user, role } = useAuth();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setIsDark(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getDashboradNav = (role: string) => {
    const customerNav = [
      {
        navName: "Overview",
        navIcon: FolderKanban,
        href: "/dashboard",
      },
      {
        navName: "My Orders",
        navIcon: ShoppingBag,
        href: "/dashboard/myOrders",
      },
      {
        navName: "Wishlist",
        navIcon: Heart,
        href: "/dashboard/wishlist",
      },
      {
        navName: "Cart",
        navIcon: ShoppingCart,
        href: "/cart",
      },
      {
        navName: "Profile",
        navIcon: User,
        href: "/dashboard/profile",
      },
    ];

    const adminNav = [
      {
        navName: "Overview",
        navIcon: FolderKanban,
        href: "/dashboard",
      },
      {
        navName: "Orders Management",
        navIcon: ShoppingBag,
        href: "/dashboard/orderManagement",
      },
      {
        navName: "Product Management",
        navIcon: Package,
        href: "/dashboard/productManagement",
      },
      {
        navName: "Customers Management",
        navIcon: Users,
        href: "/dashboard/customerManagement",
      },
      {
        navName: "Profile",
        navIcon: UserCog,
        href: "/dashboard/profile",
      },
    ];

    if (role === "customer") {
      return customerNav;
    }

    return adminNav;
  };
  const navItem = getDashboradNav(role || "customer");

  return (
    <div className="flex  w-full  min-h-screen bg-gray-100 dark:bg-black">
      {/* Sidebar */}
      <div
        className={` max-lg:fixed lg:sticky lg:top-0 bg-base-100 shadow-md transition-all duration-300 ease-in-out ${isCollapsed ? "w-24" : "w-64"} min-h-screen lg:h-screen z-70 ${sidebarOpen === true ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0 `}
      >
        <div className="flex flex-col justify-between h-screen">
          {/* Logo,Cross bar and nav Items */}
          <div className="felx-1">
            <div
              className={`flex items-center ${isCollapsed ? "lg:justify-center" : "justify-between"} h-20 p-3 border-b border-gray-100`}
            >
              <div
                className={`flex items-center justify-between ${isCollapsed ? "lg:opacity-0 lg:scale-0 w-0" : "opacity-100 scale-100"}`}
              >
                <Logo />
              </div>
              <div className="flex lg:hidden">
                <button onClick={() => setSidebarOpen(false)}>
                  <X className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </button>
              </div>
              <div className="hidden lg:flex lg:justify-center items-center">
                <span
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className=" cursor-pointer "
                >
                  <PanelLeftOpen className="text-primary font-bold " />
                </span>
              </div>
            </div>

            {/* Nav Items */}
            <div className="p-3 space-y-3">
              {navItem.map((item, index) => (
                <DashboardNav
                  key={index}
                  href={item.href}
                  icon={item.navIcon}
                  isCollapsed={isCollapsed} 
                >
                  {item.navName}
                </DashboardNav>
              ))}
            </div>
          </div>

          <div className="px-3 pb-10 md:pb-20 space-y-3">
            <div className="bg-gray-100 dark:bg-gray-800 h-0.5 w-full"></div>

            {/* Theme Toggle Section */}
            <div
              className={`w-full bg-gray-50 dark:bg-gray-800 p-2 rounded-lg font-semibold flex items-center transition-all duration-300
    ${isCollapsed ? "lg:justify-center tooltip tooltip-right" : "justify-between"} text-neutral`}
              data-tip={
                isCollapsed ? (isDark ? "Dark Mode" : "Light Mode") : ""
              }
            >
              <span
                className={`whitespace-nowrap ${isCollapsed ? "lg:hidden" : "block"}`}
              >
                {isDark ? "Dark Mode" : "Light Mode"}
              </span>
              <Theme isDark={isDark} setIsDark={setIsDark} />
            </div>

            {/* Logout Button */}
            <button
              onClick={() => signOut()}
              className={`flex items-center shadow-sm bg-gray-50 dark:bg-gray-800 p-2 rounded-lg font-semibold cursor-pointer text-red-600 transition-all duration-300 w-full
      ${isCollapsed ? "lg:justify-center tooltip tooltip-right" : "gap-3"}`}
              data-tip={isCollapsed ? "Logout" : ""}
            >
              <LogOut size={20} className="shrink-0" />
              <span
                className={`whitespace-nowrap ${isCollapsed ? "lg:hidden" : "block"}`}
              >
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="flex-1">
        <header className="flex justify-between items-center h-20 p-3  shadow-md dark:border-b bg-base-100 sticky top-0 z-50">
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

            <div className=" hidden lg:flex items-center ">
              <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-50">
                Dashborad
              </h2>
            </div>
          </div>
          {/* Profile Menu */}
          <div className="flex items-center gap-2">
            <div className="flex">
              <button>
                <Bell className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>

            <div className="flex">
              <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full">
                {user?.image ? (
                  <Image
                    className="w-8 h-8 sm:w-14 sm:h-14 rounded-full"
                    src={
                      user?.image ||
                      "https://i.pinimg.com/474x/4c/1d/a0/4c1da05326a6d32d124df246038df53d.jpg"
                    }
                    width={50}
                    height={50}
                    alt="Profile"
                  />
                ) : (
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full"></div>
                )}
              </div>
            </div>
          </div>
        </header>
        <div className="m-3 md:m-5">{children}</div>
      </main>
    </div>
  );
}
