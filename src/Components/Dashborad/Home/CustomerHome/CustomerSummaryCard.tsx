'use client'
import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { MdOutlinePendingActions } from "react-icons/md";
import { LuHeart, LuPackageCheck } from "react-icons/lu";

interface ICustomerSummaryCardProps{
  dashboradContent: {
    stats?: {
      totalOrder: number;
      totalPendingOrder: number;
      totalDeliveredOrder: number;
      totalWishList: number;
    };
    wishListItems?: any[];
    recentOrders?: any[];
  } | null;
}

const CustomerSummaryCard = () => {


  return (
    <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-5'>
        <div className='p-8 flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 bg-base-100 shadow-sm rounded-lg  dark:border dark:border-primary'>
            <div className='bg-amber-600 p-3 text-neutral-200 rounded-lg'> <FiShoppingBag className='' size={24}/> </div>
            <div className='flex flex-col font-semibold text-neutral'> <span>40</span> <span>Total Orders</span> </div>
        </div>

        <div className='p-8 flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 bg-base-100 shadow-sm rounded-lg dark:border dark:border-primary'>
            <div className='bg-yellow-500 p-3 text-neutral-200 rounded-lg'> <MdOutlinePendingActions className='' size={24}/> </div>
            <div className='flex flex-col font-semibold text-neutral'> <span>20</span> <span>Pending Orders</span> </div>
        </div>
       
        <div className='p-8 flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 bg-base-100 shadow-sm rounded-lg dark:border dark:border-primary'>
            <div className='bg-green-600 p-3 text-neutral-200 rounded-lg'> <LuPackageCheck className='' size={24}/> </div>
            <div className='flex flex-col font-semibold text-neutral'> <span>50</span> <span>Delivered Orders</span> </div>
        </div>
        
        <div className='p-8 flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 bg-base-100 shadow-sm rounded-lg dark:border dark:border-primary'>
            <div className='bg-red-600 p-3 text-neutral-200 rounded-lg'> <LuHeart className='' size={24}/> </div>
            <div className='flex flex-col font-semibold text-neutral'> <span>23</span> <span>Wishlist</span> </div>
        </div>
    </div>
  )
}

export default CustomerSummaryCard