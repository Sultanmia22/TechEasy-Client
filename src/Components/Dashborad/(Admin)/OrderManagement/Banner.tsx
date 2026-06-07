import Link from "next/link";
import { ArrowRight, ClipboardList } from "lucide-react";

interface IOrderManagementStats {
  totalOrderNumber: number;
}

const Banner = ({totalOrderNumber}: IOrderManagementStats) => {
  return (
    <div className="relative overflow-hidden bg-base-100 dark:bg-base-200 border border-base-300 rounded-3xl shadow-sm p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      
      {/* 🔹 Background Glowing Effect */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

      {/* 🔹 Left Section */}
      <div className="relative flex flex-col gap-4">
        <div className="flex items-start gap-4 md:gap-6">
          <div className="p-4 md:p-5 rounded-2xl bg-secondary to-secondary/80 text-white  shrink-0">
            <ClipboardList className="w-6 h-6 md:w-8 md:h-8" />
          </div>

          <div className="space-y-1">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-base-content">
              Order <span className="text-secondary">Management</span>
            </h2>
            <p className="text-sm md:text-base text-neutral max-w-sm leading-relaxed opacity-80">
              Oversee all customer orders, track processing status, and manage shipments efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Right Section */}
      <div className="relative flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
        
        {/* Stats Card */}
        <div className="bg-base-200/50 dark:bg-base-300/50 backdrop-blur-sm px-6 py-4 rounded-2xl border border-base-300 flex flex-col items-center sm:items-start min-w-35 w-full sm:w-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral/60">Total Pending</p>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black text-base-content">{totalOrderNumber}</span>
            <span className="text-xs font-medium text-neutral">Orders</span>
          </div>
        </div>

        {/* Action Button */}
        <Link href="/admin/orders" className="w-full sm:w-auto group">
          <button className="btn btn-secondary h-auto py-4 px-8 rounded-2xl w-full sm:w-auto shadow-lg shadow-secondary/25 group-hover:scale-105 transition-all duration-300">
            <span className="flex items-center gap-2 text-white">
              View All Orders
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;