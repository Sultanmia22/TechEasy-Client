import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import MobileNavLink from "@/Components/NavLink/MobileNavlink";
import { LucideIcon } from "lucide-react";

type NavLinkType = {
  name: string;
  path: string;
  icon: LucideIcon;
};

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLinkType[];
}

const MobileSidebar = ({ isOpen, onClose, navLinks }: MobileSidebarProps) => {
  return (
    <div className={`fixed inset-0 z-50 transition-visibility duration-300 md:hidden  ${isOpen ? "visible" : "invisible"}`}>
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} 
        onClick={onClose} 
      />

      {/* Sidebar Content */}
      <aside className={`absolute left-0 top-0 h-full w-[280px] bg-base-100 p-6 shadow-2xl transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between border-b pb-6">
          <Link href="/" onClick={onClose} className="text-xl font-black">
            <span className="text-neutral">Tech</span>
            <span className="text-primary">Easy</span>
          </Link>
          <button onClick={onClose} className="rounded-full bg-base-200 p-2">
            <RxCross1 size={18} />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-3">
          {navLinks.map((link) => (
            <MobileNavLink onClick={onClose} key={link.path} href={link.path}>
              {link.name}
            </MobileNavLink>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default MobileSidebar;