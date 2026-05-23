import { LucideIcon } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface NavLinkProps {
    children: string;
    href: string;
    icon: LucideIcon
}

const NavLink = ({ children, href, icon: Icon }: NavLinkProps) => {

    const pathName = usePathname()

    const isActive = href === '/'
        ? pathName === '/'
        : pathName === href;

    return (
        <Link
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all duration-300 group border ${isActive
                    ? 'bg-primary/10 text-primary font-medium border-primary/20 shadow-sm shadow-primary/5'
                    : 'text-neutral/80 border-transparent hover:border-primary/30 hover:bg-primary/5 hover:text-primary'
                }`}
            href={href}
        >
            <Icon
                size={18}
                className={`transition-colors duration-300 ${isActive
                        ? 'text-primary'
                        : 'text-neutral-400 group-hover:text-primary'
                    }`}
            />

            <span className="text-[14px] tracking-wide">{children}</span>
        </Link>
    )
}

export default NavLink