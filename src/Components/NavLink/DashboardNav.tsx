'use client' // যেহেতু usePathname ব্যবহার করছেন, তাই এটি 'use client' হওয়া জরুরি
import { LucideIcon } from "lucide-react";
import Link from "next/link"; // এই লাইনটি মিসিং ছিল
import { usePathname } from "next/navigation";

interface NavLinkProps {
    children: string;
    href: string;
    icon: LucideIcon;
    isCollapsed: boolean; 
}

const DashboardNav = ({ children, href, icon: Icon, isCollapsed }: NavLinkProps) => {
    const pathName = usePathname();
    
    
    const isActive = href === '/'
        ? pathName === '/'
        : pathName === href;


    return (
        <Link
            href={href}
            className={`flex items-center px-3 py-2 rounded-xl transition-all duration-300 group border
                ${isCollapsed ? "lg:justify-center tooltip tooltip-right" : "justify-start gap-2.5"}
                ${isActive
                    ? 'bg-primary/10 text-primary font-medium border-primary/20 shadow-sm shadow-primary/5'
                    : 'text-neutral-600 dark:text-neutral-200 border-transparent hover:border-primary/30 hover:bg-primary/5 hover:text-primary'
                }`}
            data-tip={isCollapsed ? children : ""}
        >
            <Icon
                size={18}
                className={`transition-colors duration-300 shrink-0 ${isActive
                    ? 'text-primary'
                    : 'text-neutral-400 group-hover:text-primary'
                }`}
            />

            <span className={`text-[14px] tracking-wide whitespace-nowrap transition-all duration-300 
                ${isCollapsed ? "lg:hidden opacity-0" : "opacity-100"}`}
            >
                {children}
            </span>
        </Link>
    );
};

export default DashboardNav;