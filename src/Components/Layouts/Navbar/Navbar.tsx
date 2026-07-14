"use client";
import LogOut from "@/Components/Auth/LogOut";
import Logo from "@/Components/Logo/Logo";
import NavLink from "@/Components/NavLink/DesktopNavlink";
import MobileNavLink from "@/Components/NavLink/MobileNavlink";
import { Home, ShoppingBag, ShoppingCart, Info, Headset, LucideIcon} from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import UserDropdown from "./UserDropdown";
import MobileSidebar from "./MobileSidebar";
import Theme from "@/Components/Theme/Theme";

type NavLinkType = {
  name: string;
  path: string;
  icon: LucideIcon
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openProfileMenu, setOpenProfileMenu] = useState<boolean>(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const { data, status } = useSession();

   const [isDark, setIsDark] = useState<boolean>(false);

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

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setIsDark(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isDark,setIsDark]);

  // console.log(data)

  const user = {
    name: data?.user?.name,
    email: data?.user?.email,
    image: data?.user?.image,
    role: data?.user?.role,
  };

  const getNavLink = (role: string): NavLinkType[] => {
    const adminLink = [
      { name: "Home", path: "/", icon: Home },
      { name: "All Products", path: "/all-product", icon: ShoppingBag },
      { name: "About", path: "/about", icon: Info },
      { name: "Contact", path: "/contact", icon: Headset },
    ];

    const CustomerLinks = [
      { name: "Home", path: "/", icon: Home },
      { name: "All Products", path: "/all-product", icon: ShoppingBag }, 
      { name: "Cart", path: "/cart", icon: ShoppingCart },
      { name: "About", path: "/about", icon: Info },
      { name: "Contact", path: "/contact", icon: Headset },
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
      className="sticky top-0 z-40 w-full bg-base-100 border-b border-base-200 py-4 transition-all duration-300"
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
            <NavLink key={link.path} href={link.path} icon={link.icon}>
              {link.name}
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center gap-6">

          {/* Theme */}
          <div>
            <Theme isDark={isDark} setIsDark={setIsDark} />
          </div>

          <div>
            <Link href={"/cart"}>
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
                  {user?.image? (
                   
                    <Image src={user?.image} width={100} height={100} className="rounded-full object-cover w-11 h-11" alt="profile" />
                  ) : (
                    <FaUser className="text-primary text-lg" />
                  )}
                </div>

                {openProfileMenu && (
                 <div>
                  <UserDropdown user={user} />
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
        <MobileSidebar
           isOpen={isMenuOpen} 
           onClose={() => setIsMenuOpen(false)} 
           navLinks={navLinks} 
        />
      </nav>

      <div className="w-full py-3 bg-[#DBD6E7] text-center mt-4"> 
        <h5 className="text-[#0F172A] font-medium text-xs sm:text-sm md:text-sm lg:text-base">TechEasy is under active development! New features and updates are being added regularly</h5>
      </div>
    </div>
  );
};

export default Navbar;
