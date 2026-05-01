'use client'
import React, { useEffect, useState } from 'react'
import OrdersBanner from '@/Components/Dashborad/Order/OrdersBanner';
import useAxiosSecure from '@/hook/useAxiosSecure';
import type { IRecentOrder } from '@/types/dashborad.interface';
import useAuth from '@/hook/useAuth';
import Order from '@/Components/Dashborad/Order/Order';
import EmptyOrder from '@/Components/Dashborad/Order/EmptyOrder';
import TextLoader from '@/Components/Loading/TextLoader';

const MyOrderPage = () => {

    const axiosSecure = useAxiosSecure()

    const {user} = useAuth()

    const [orderData,setOrderData] = useState<IRecentOrder[] | []>([])

    const [loading,setLoading] = useState<boolean>(false)

    const totalCount = orderData.length || 0

    console.log('Order Data =', orderData)

    useEffect(() => {
        
        const getOrderData = async () => {

          setLoading(true); 
            try {
                const res = await axiosSecure.get(`/dashboard/orders?customerEmail=${user?.email}`);
                setOrderData(res.data?.data || []);
            } catch (error) {
                console.error("Error fetching orders:", error);
            } finally {
                setLoading(false); 
            }

        };

        getOrderData()

    },[user?.email,axiosSecure])
    

    if(loading){
        return <TextLoader />
    }


    return (
        <div>
            {/* ====== Modern Professional Banner Section ====== */}
            <OrdersBanner totalCount={totalCount} />
            <div className='mt-15 space-y-3'>
                {
                    orderData.length > 0 ? (
                        orderData.map((order) => 
                        <Order key={order?._id} order={order} />
                        )
                    ) : 
                    <EmptyOrder />
                }
            </div>
        </div>
    )
}

export default MyOrderPage