"use client";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlinePendingActions } from "react-icons/md";
import { LuHeart, LuPackageCheck } from "react-icons/lu";
import type { Istats } from "@/types/dashborad.interface";

const CustomerSummaryCard = ({ stats }: { stats: Istats | undefined }) => {
  const {
    totalOrder = 0,
    totalPendingOrder = 0,
    totalDeliveredOrder = 0,
    totalWishList = 0,
  } = stats || {};

  // 🔥 Data Driven
  const summaryData = [
    {
      title: "Total Orders",
      value: totalOrder,
      icon: <FiShoppingBag size={22} />,
      color: "primary",
    },
    {
      title: "Pending Orders",
      value: totalPendingOrder,
      icon: <MdOutlinePendingActions size={22} />,
      color: "accent",
    },
    {
      title: "Delivered",
      value: totalDeliveredOrder,
      icon: <LuPackageCheck size={22} />,
      color: "secondary",
    },
    {
      title: "Wishlist",
      value: totalWishList,
      icon: <LuHeart size={22} />,
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
          {/* Icon */}
          <div
            className={`p-3 rounded-lg bg-${item.color}/10 text-${item.color} group-hover:bg-${item.color} group-hover:text-white transition`}
          >
            {item.icon}
          </div>

          {/* Text */}
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

export default CustomerSummaryCard;