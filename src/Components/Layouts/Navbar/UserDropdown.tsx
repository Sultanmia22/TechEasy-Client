import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface UserDropdownProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

const UserDropdown = ({ user }: UserDropdownProps) => {
  return (
    <div className="absolute right-0 top-full mt-3 z-50 w-60 bg-base-100 rounded-2xl shadow-xl border border-base-200 overflow-hidden animate-in fade-in zoom-in duration-200">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-4 bg-primary/5 border-b border-base-200/50">
        {user?.image && (
          <Image 
            src={user.image} 
            width={48} 
            height={48} 
            className="rounded-full object-cover w-12 h-12 border-2 border-primary/20" 
            alt="Profile" 
          />
        )}
        <div className="flex flex-col overflow-hidden">
          <p className="text-sm font-bold text-neutral truncate">{user?.name}</p>
          <p className="text-[11px] opacity-60 truncate">{user?.email}</p>
        </div>
      </div>

      {/* Nav Links */}
      <ul className="flex flex-col p-2 text-sm gap-0.5">
        {[
          { label: "Dashboard", href: "/dashboard" },
          { label: "My Profile", href: "/dashboard/profile" },
          { label: "Settings", href: "/dashboard/settings" }
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-center px-3 py-2.5 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium"
            >
              {item.label}
            </Link>
          </li>
        ))}

        <div className="my-1 border-t border-base-200/50"></div>

        <li>
          <button 
            onClick={() => signOut()} 
            className="flex w-full items-center gap-2 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 transition-all duration-200 font-medium"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;