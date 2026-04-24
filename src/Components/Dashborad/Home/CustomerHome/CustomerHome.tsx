"use client";
import useAuth from "@/hook/useAuth";
import Link from "next/link";
import { FaHandshake } from "react-icons/fa";
import { PiRocketLaunchBold } from "react-icons/pi";
import CustomerSummaryCard from "./CustomerSummaryCard";
const CustomerHome = () => {
  const {user} = useAuth()

  return (
  <div className="flex flex-col gap-10 min-h-screen">
      {/* Banner */}
    <div className="w-full rounded-2xl p-5 md:p-8 bg-linear-to-r from-primary/90 to-primary text-primary-content shadow-lg hover:shadow-xl transition duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-lg md:text-2xl font-bold tracking-tight">
            <span className="flex text-white dark:text-gray-300"> Welcome, Mr. {user?.name} </span> <span className="flex"> <FaHandshake className="text-white"/> </span>
          </div>
          <p className="text-white dark:text-gray-300 opacity-90 mt-1">
            Here’s what’s happening with your TechEasy account today.
          </p>
        </div>
           
        <Link href={''} className="flex items-center justify-center gap-2 w-40 mx-auto md:mx-0 text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-medium">
          <span className=""> Total Orders </span> <span className=""> <PiRocketLaunchBold size={20} /> </span>
        </Link>
      </div>
    </div>

    <div>
      <CustomerSummaryCard/>
    </div>
    
  </div>
  );
};

export default CustomerHome;
