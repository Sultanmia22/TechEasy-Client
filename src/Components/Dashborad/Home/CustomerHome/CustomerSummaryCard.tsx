'use client'
import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { MdOutlinePendingActions } from "react-icons/md";
import { LuHeart, LuPackageCheck } from "react-icons/lu";
import type { Istats } from '@/types/dashborad.interface';



const CustomerSummaryCard = ({stats}: {stats: Istats | undefined}) => {

  console.log(stats)

const {
    totalOrder = 0,
    totalPendingOrder = 0,
    totalDeliveredOrder = 0,
    totalWishList = 0
  } = stats || {};

  return (
    <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-5'>
        <div className='p-8 flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 bg-base-100 shadow-sm rounded-lg  dark:border dark:border-primary'>
            <div className='bg-amber-600 p-3 text-neutral-200 rounded-lg'> <FiShoppingBag className='' size={24}/> </div>
            <div className='flex flex-col font-semibold text-neutral'> <span>{totalOrder}</span> <span>Total Orders</span> </div>
        </div>

        <div className='p-8 flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 bg-base-100 shadow-sm rounded-lg dark:border dark:border-primary'>
            <div className='bg-yellow-500 p-3 text-neutral-200 rounded-lg'> <MdOutlinePendingActions className='' size={24}/> </div>
            <div className='flex flex-col font-semibold text-neutral'> <span> {totalPendingOrder} </span> <span>Pending Orders</span> </div>
        </div>
       
        <div className='p-8 flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 bg-base-100 shadow-sm rounded-lg dark:border dark:border-primary'>
            <div className='bg-green-600 p-3 text-neutral-200 rounded-lg'> <LuPackageCheck className='' size={24}/> </div>
            <div className='flex flex-col font-semibold text-neutral'> <span> {totalDeliveredOrder} </span> <span>Delivered Orders</span> </div>
        </div>
        
        <div className='p-8 flex flex-col sm:flex-row text-center sm:text-start items-center gap-3 bg-base-100 shadow-sm rounded-lg dark:border dark:border-primary'>
            <div className='bg-red-600 p-3 text-neutral-200 rounded-lg'> <LuHeart className='' size={24}/> </div>
            <div className='flex flex-col font-semibold text-neutral'> <span> {totalWishList} </span> <span>Wishlist</span> </div>
        </div>
    </div>
  )
}

export default CustomerSummaryCard