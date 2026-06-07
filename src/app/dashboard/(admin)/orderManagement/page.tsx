'use client'
import AllOrder from '@/Components/Dashborad/(Admin)/OrderManagement/AllOrder'
import Banner from '@/Components/Dashborad/(Admin)/OrderManagement/Banner'
import RecentOrders from '@/Components/Dashborad/DashboradHome/AdminHome/RecentOrders/RecentOrders'
import TextLoader from '@/Components/Loading/TextLoader'
import useAxiosSecure from '@/hook/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const OrderManagement = () => {

  const axiosSecure = useAxiosSecure()

    const {data: allOrders = [], isLoading,refetch} = useQuery({
        queryKey: ['allOrder'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order/allOrderByAdminRequest')

            return res.data.data
        }
    })

    const totalOrderNumber = allOrders.length || 0;

    if(isLoading){
        return <TextLoader />
    }


  return (
    <div className='flex flex-col gap-10'>
        {/* Banner  */}
        <div>
            <Banner totalOrderNumber={totalOrderNumber}  />
        </div>

        {/* All Orders */}
        <div>
            <RecentOrders recentOrders={allOrders} refetch={refetch} />
        </div>
    </div>
  )
}

export default OrderManagement