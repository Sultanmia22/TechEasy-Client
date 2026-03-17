import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface NavLinkProps {
    children: string;
    href: string;

}

const NavLink = ({ children, href }: NavLinkProps) => {

    const pathName = usePathname()

    const isActive = href === '/'
        ? pathName === '/'
        : pathName === href;

    return (
        <Link
            className={` ${isActive && 'bg-primary/20 px-3 py-1 rounded-lg text-primary'} text-neutral hover:text-primary`}
            href={href}
        >
            {children}
            
        </Link>
    )
}

export default NavLink