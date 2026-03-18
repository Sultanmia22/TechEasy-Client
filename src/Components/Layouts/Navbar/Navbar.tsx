'use client'
import Logo from '@/Components/Logo/Logo'
import NavLink from '@/Components/NavLink/DesktopNavlink'
import MobileNavLink from '@/Components/NavLink/MobileNavlink'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'

type NavLinkType = {
  name: string
  path: string
}

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [openProfileMenu, setOpenProfileMenu] = useState<boolean>(false)


  // dummy auth state
  const isAuthenticate: boolean = false;

  // dummy user
  const user = {
    name: "John Doe",
    email: "john@example.com",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    role: 'admin'
  }

  const getNavLink = (role:string): NavLinkType[] => {
    const baseLinks = [
      { name: 'Home', path: '/' },
      { name: 'All Products', path: '/all-products' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ];

    if (role === 'user') {
      return [
        ...baseLinks,
        {name : 'Cart',path: '/cart'}
      ]
    };

    return baseLinks
  }

 

 const navLinks = getNavLink(user.role)

  const toggleMenu = (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
    e.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
  }





  return (
    <div className={`sticky top-0 z-40 bg-base-100 py-5 w-full border-b border-primary`}>

      <nav className='w-11/12 md:w-10/12 mx-auto flex justify-between items-center '>

        {/* Logo */}
        <div>
          <div className='flex items-center gap-3'>

            <div onClick={toggleMenu} className='md:hidden'>
              {isMenuOpen
                ? <RxCross1 className='text-primary' size={20} />
                : <FaBars className='text-primary' size={20} />
              }
            </div>

            <Logo />

          </div>

        </div>

        {/* Desktop Nav */}
        <ul className='md:gap-6 text-neutral items-center hidden md:flex font-medium'>
          {navLinks.map((link) => (
            <NavLink key={link.path} href={link.path}>
              {link.name}
            </NavLink>
          ))}
        </ul>

        {/* Profile / Auth */}
        <div className='flex items-center gap-5'>

          {isAuthenticate ? (
            <div className='relative'>
              <div
                onClick={() => setOpenProfileMenu(!openProfileMenu)}
                className="cursor-pointer border-2 border-primary rounded-full p-0.5 hover:shadow-lg transition-all"
              >
                <img
                  src={user.image}
                  alt='profile-picture'
                  className='rounded-full object-cover w-11 h-11'
                />

              </div>

              {openProfileMenu && (

                <div className='absolute right-0 mt-6 z-50 w-56 bg-base-100 rounded-2xl shadow-2xl border border-base-200 overflow-hidden'>

                  {/* profile header */}
                  <div className='flex items-center gap-3 px-4 py-3 bg-primary/5 border-b border-base-200'>

                    <img
                      src={user.image}
                      alt="profile"
                      className="w-10 h-10 rounded-full object-cover border border-transparent bg-linear-to-r from-primary to-secondary bg-clip-border"
                    />

                    <div className="flex flex-col">
                      <p className='text-sm font-semibold text-neutral'>
                        {user.name}
                      </p>
                      <p className='text-xs opacity-60 truncate'>
                        {user.email}
                      </p>
                    </div>

                  </div>

                  <ul className='flex flex-col p-2 text-sm'>

                      <li>
                      <Link
                        href="/dashboard"
                        className='flex items-center px-3 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-200'
                      >
                       Dashboard
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/profile"
                        className='flex items-center px-3 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-200'
                      >
                        My Profile
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/settings"
                        className='flex items-center px-3 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-200'
                      >
                        Settings
                      </Link>
                    </li>

                    <div className="my-1 border-t-2 border-base-300"></div>

                    <li>
                      <button className='flex items-center px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-all duration-200 w-full'>
                        Logout
                      </button>
                    </li>

                  </ul>

                </div>

              )}

            </div>

          ) : (

            <Link
              href='/login'
              className="px-4 py-2 rounded-lg bg-primary text-base-100 font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Login
            </Link>

          )}

        </div>


        {/* --- Mobile Sidebar --- */}
      <div 
        className={`fixed inset-0 z-[100] transition-visibility duration-300 md:hidden ${isMenuOpen ? 'visible' : 'invisible'}`}
      >
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-neutral/40 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sidebar Content */}
        <aside 
          className={`absolute left-0 top-0 h-full w-[280px] bg-base-100 p-6 shadow-2xl transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex items-center justify-between border-b pb-6">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-black">
              <span className="text-neutral">Tech</span><span className="text-primary">Easy</span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="rounded-full bg-base-200 p-2">
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
  )
}

export default Navbar