'use client'
import useAuth from '@/hook/useAuth';
import Link from 'next/link';
import React from 'react'
import { FaUserShield } from 'react-icons/fa';
import { PiShieldCheckBold } from 'react-icons/pi';
import SummaryCard from './SummaryCard/SummaryCard';
import useDashboardContent from '@/hook/useDashboardContext';
import { IDashboardAdminData } from '@/types/dashboardAdmin.interface';
import RecentOrders from './RecentOrders/RecentOrders';
import TextLoader from '@/Components/Loading/TextLoader';
import TopProducts from './TopProducts/TopProducts';

const AdminHome = () => {
  const {user} = useAuth()

  const {dashboardData,isLoading,refetch} = useDashboardContent()

  const adminData = dashboardData as IDashboardAdminData;

  console.log( 'DashboardData', dashboardData)

  const stats = adminData?.stats
  const recentOrders = adminData?.recentOrders || []
  const topProducts = adminData?.topProducts
  const recentUsers = adminData?.recentUsers 

  console.log("Top Selling Product:", topProducts);

  if(isLoading){
    return <TextLoader />
  }

  return (
    <div className="flex flex-col gap-10 min-h-screen">
      {/* Banner */}
      <div className="w-full rounded-2xl p-5 md:p-8 bg-linear-to-r from-primary/90 to-primary text-primary-content shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-lg md:text-2xl font-bold tracking-tight">
              <span className="flex text-white dark:text-gray-300"> Welcome, Mr. {user?.name} </span> <span className="flex"> <FaUserShield className="text-white" /> </span>
            </div>
            <p className="text-white dark:text-gray-300 opacity-90 mt-1">
              Here’s what’s happening with your TechEasy account today.
            </p>
          </div>

          <Link href={''} className="flex items-center justify-center gap-2 w-40 mx-auto md:mx-0 text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-medium">
            <span className=""> View All Orders </span> <span className=""> <PiShieldCheckBold size={20} /> </span>
          </Link>
        </div>
      </div>

      <div>
        <SummaryCard stats={stats} />
      </div>

      <div>
       <RecentOrders  recentOrders={recentOrders} refetch={refetch} />
      </div>

      <div className="flex flex-col md:flex-row gap-5 w-full">
        <div className="w-full">
          <TopProducts  topProducts={topProducts}/>
        </div>
        <div className="w-full border border-2"></div>
      </div>
    </div>
  )
}

export default AdminHome