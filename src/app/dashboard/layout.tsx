"use client";
import { signOut } from "next-auth/react"
import Logo from "@/Components/Logo/Logo";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose, IoMdLogOut, IoMdNotificationsOutline } from "react-icons/io";
import {
  FaShoppingBag,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBox,
  FaUsers,
  FaUserCog
} from "react-icons/fa";
import Image from "next/image";
import useAuth from "@/hook/useAuth";
import Theme from "@/Components/Theme/Theme";

export default function DashboardLayout({ children, }: { children: React.ReactNode; }) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const { user, role } = useAuth()

  const getDashboradNav = (role: string) => {
    const customerNav = [
      {
        navName: "My Orders",
        navIcon: FaShoppingBag,
        href: "/dashboard/orders",
      },
      {
        navName: "Wishlist",
        navIcon: FaHeart,
        href: "/dashboard/wishlist"
      },
      {
        navName: "Cart",
        navIcon: FaShoppingCart,
        href: "/cart"
      },
      {
        navName: "Profile",
        navIcon: FaUser,
        href: "/profile"
      },
    ];

    const adminNav = [
      {
        navName: "Orders Management",
        navIcon: FaShoppingBag,
        href: "/dashboard/orders_management",
      },
      {
        navName: "Product Management",
        navIcon: FaBox,
        href: "/dashboard/product_management"
      },
      {
        navName: "Customers Management",
        navIcon: FaUsers,
        href: "/customer_management"
      },
      {
        navName: "Profile",
        navIcon: FaUserCog,
        href: "/profile"
      },
    ];

    if (role === "customer") {
      return customerNav;
    }

    return adminNav;
  };

  const navItem = getDashboradNav(role || 'customer');

  return (
    <div className="flex  w-full  min-h-screen bg-gray-100 dark:bg-black">
      {/* Sidebar */}
      <div
        className={` max-lg:fixed lg:sticky lg:top-0 bg-base-100 shadow-md  w-64 min-h-screen lg:h-screen z-50 ${sidebarOpen === true ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0 `}
      >

        <div className="flex flex-col justify-between h-screen">
          {/* Logo,Cross bar and nav Items */}
          <div className="felx-1">
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
              {
                navItem.map((item, index) => {
                  const Icon = item.navIcon;
                  return (
                    <Link
                      href={item?.href}
                      key={index}
                      className="flex items-center gap-1 text-neutral shadow-sm bg-gray-50 dark:bg-gray-800 hover:bg-primary/20 hover:text-primary p-2 rounded-lg font-semibold"
                    >
                      <Icon />
                      <span>{item.navName}</span>
                    </Link>
                  );
                })
              }
            </div>
          </div>

          <div className="px-3 pb-10 md:pb-20 space-y-3">
            <div className=" bg-gray-100 h-0.5 w-full"></div>
            <div className="w-full bg-gray-50 dark:bg-gray-800  p-2 rounded-lg font-semibold space-x-2">
              <span className="text-neutral">Dark Mode</span> <Theme />
            </div>
            <button
              onClick={() => signOut()}
              className="flex items-center gap-1 w-full text-red-600 shadow-sm bg-gray-50 dark:bg-gray-800  p-2 rounded-lg font-semibold cursor-pointer ">
              <IoMdLogOut size={20} /> <span>Logout</span>
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
              <h2 className="text-xl font-semibold text-neutral">Dashborad</h2>
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
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full">
                {
                  user?.image ? (
                    <Image
                      className="rounded-full"
                      src={user?.image || 'https://i.pinimg.com/474x/4c/1d/a0/4c1da05326a6d32d124df246038df53d.jpg'}
                      width={50}
                      height={50}
                      alt="Profile" />
                  )
                    :
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full"></div>
                }

              </div>
            </div> 
          </div>
        </header>
        <div className="">{children}</div>
      </main>
    </div>
  );
}
