"use client";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlinePendingActions } from "react-icons/md";
import { LuPackageCheck } from "react-icons/lu";
import { TbCurrencyTaka } from "react-icons/tb";
import { IDashboardStats } from "@/types/dashboardAdmin.interface";

const SummaryCard = ({stats}:{stats:IDashboardStats}) => {


  const summaryData = [
    {
      title: "Total Orders",
      value: stats?.totalOrder,
      icon: <FiShoppingBag size={22} />,
      color: "primary",
    },
    {
      title: "Total Revenue",
      value: stats?.totalRevenue,
      icon: <TbCurrencyTaka size={22} />,
      color: "secondary",
    },
    {
      title: "Pending Orders",
      value: stats?.totalPendingOrder,
      icon: <MdOutlinePendingActions size={22} />,
      color: "accent",
    },
    {
      title: "Complete Orders",
      value: stats?.totalDeliveredOrder,
      icon: <LuPackageCheck size={22} />,
      color: "primary",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {summaryData.map((item, i) => (
        <div
          key={i}
          className="group p-6 flex flex-col sm:flex-row items-center gap-3 bg-base-100 dark:bg-base-200 border border-base-300 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div
            className={`p-3 rounded-lg bg-${item.color}/10 text-${item.color} group-hover:bg-${item.color} group-hover:text-white transition`}
          >
            {item.icon}
          </div>

          <div className="flex flex-col text-center sm:text-left">
            <span className="text-xl font-bold text-base-content">
              {item.value}
            </span>
            <span className="text-sm text-neutral">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCard;
