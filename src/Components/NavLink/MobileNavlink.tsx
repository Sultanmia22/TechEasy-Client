'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface MobileNavLinkProps {
    children: string
    href: string
    
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const MobileNavLink = ({ children, href, onClick}: MobileNavLinkProps) => {

    const pathName = usePathname()

    const isActive = href === '/'
        ? pathName === '/'
        : pathName === href;


    return (
        <Link
            href={href}
            onClick={onClick}
        >
            {children}
        </Link>
    )
}

export default MobileNavLink