"use client";
import LogOut from "@/Components/Auth/LogOut";
import Logo from "@/Components/Logo/Logo";
import NavLink from "@/Components/NavLink/DesktopNavlink";
import MobileNavLink from "@/Components/NavLink/MobileNavlink";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

type NavLinkType = {
  name: string;
  path: string;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openProfileMenu, setOpenProfileMenu] = useState<boolean>(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const { data, status } = useSession();

  //  console.log(data)

  const isAuthenticate: boolean = status === "authenticated";

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setOpenProfileMenu(false);
      }
    };

    if (openProfileMenu) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openProfileMenu]);

  // console.log(data)

  const user = {
    name: data?.user?.name,
    email: data?.user?.email,
    image: data?.user?.image,
    role: data?.user?.role,
  };

  const getNavLink = (role: string): NavLinkType[] => {
    const adminLink = [
      { name: "Home", path: "/" },
      { name: "All Products", path: "/all-products" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
    ];

    const CustomerLinks = [
      { name: "Home", path: "/" },
      { name: "All Products", path: "/all-product" },
      { name: "Cart", path: "/cart" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
    ];

    if (role === "admin") {
      return adminLink;
    }

    return CustomerLinks;
  };

  const navLinks = getNavLink(user.role || 'customer');

  const toggleMenu = (
    e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>,
  ) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`sticky top-0 z-40 bg-base-100 py-5 w-full border-b border-primary `}
    >
      <nav className="w-11/12 md:w-10/12 mx-auto flex justify-between items-center ">
        {/* Logo */}
        <div>
          <div className="flex items-center gap-3">
            <div onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? (
                <RxCross1 className="text-primary" size={20} />
              ) : (
                <FaBars className="text-primary" size={20} />
              )}
            </div>

            <Logo />
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="md:gap-6 text-neutral items-center hidden md:flex font-medium">
          {navLinks.map((link) => (
            <NavLink key={link.path} href={link.path}>
              {link.name}
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <div>
            <Link href={""}>
              {" "}
              <FaShoppingCart size={24} className="text-accent" />{" "}
            </Link>
          </div>

          {/* Profile / Auth */}
          <div className="flex items-center gap-5" ref={profileMenuRef}>
            {isAuthenticate ? (
              <div className="relative">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenProfileMenu(!openProfileMenu);
                  }}
                  className="cursor-pointer border-2 border-primary rounded-full p-0.5 hover:shadow-lg transition-all w-12 h-12 flex items-center justify-center"
                >
                  {user?.image ? (
                    <img
                      src={user.image}
                      alt="profile"
                      className="rounded-full object-cover w-11 h-11"
                    />
                  ) : (
                    <FaUser className="text-primary text-lg" />
                  )}
                </div>

                {openProfileMenu && (
                  <div 
                    className="absolute right-0 top-full mt-3 z-50 w-56 bg-base-100 rounded-2xl shadow-2xl border border-base-200 overflow-hidden"
                  >
                    {/* profile header */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-primary/5 border-b border-base-200">
                      {user?.image && (
                        <img
                          src={user.image}
                          alt="profile"
                          className="w-10 h-10 rounded-full object-cover border border-transparent"
                        />
                      )}

                      <div className="flex flex-col">
                        <p className="text-sm font-semibold text-neutral">
                          {user.name}
                        </p>
                        <p className="text-xs opacity-60 truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    <ul className="flex flex-col p-2 text-sm">
                      <li>
                        <Link
                          href="/dashboard"
                          className="flex items-center px-3 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
                        >
                          Dashboard
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/profile"
                          className="flex items-center px-3 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
                        >
                          My Profile
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/settings"
                          className="flex items-center px-3 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
                        >
                          Settings
                        </Link>
                      </li>

                      <div className="my-1 border-t-2 border-base-300"></div>

                      <li>
                        <LogOut />
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg bg-primary text-base-100 font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* --- Mobile Sidebar --- */}
        <div
          className={`fixed inset-0 z-[100] transition-visibility duration-300 md:hidden ${isMenuOpen ? "visible" : "invisible"}`}
        >
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-neutral/40 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar Content */}
          <aside
            className={`absolute left-0 top-0 h-full w-[280px] bg-base-100 p-6 shadow-2xl transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="flex items-center justify-between border-b pb-6">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-black"
              >
                <span className="text-neutral">Tech</span>
                <span className="text-primary">Easy</span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full bg-base-200 p-2"
              >
                <RxCross1 size={18} />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-3">
              {navLinks.map((link) => (
                <MobileNavLink
                  onClick={() => setIsMenuOpen(false)}
                  key={link.path}
                  href={link.path}
                >
                  {link.name}
                </MobileNavLink>
              ))}
            </nav>
          </aside>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
