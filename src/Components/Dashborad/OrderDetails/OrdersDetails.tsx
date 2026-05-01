'use client'
import React, { useEffect, useState } from 'react'
import DeliveredStatus from './DeliveredStatus'
import ShippingInfo from './ShippingInfo'
import OrderItems from './OrderItems'
import PriceInfo from './PriceInfo'
import type { IRecentOrder } from '@/types/dashborad.interface'
import useAxiosSecure from '@/hook/useAxiosSecure'
import useAuth from '@/hook/useAuth'
import TextLoader from '@/Components/Loading/TextLoader'
import { ArrowLeft } from 'lucide-react'

interface IorderId {
    orderId: string
}

const OrdersDetails = ({ orderId }: IorderId) => {

    const axiosSecure = useAxiosSecure()

    const { user } = useAuth()

    const [singleOrder, setSingleOrder] = useState<IRecentOrder>()

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const getSingleOrders = async (orderId: string) => {
            setLoading(true)
            try {
                const res = await axiosSecure.get(`/order/getSignleOrder?customerEmail=${user?.email}&orderId=${orderId}`)
                setSingleOrder(res.data.data)
            }
            catch (er) {
                console.log(er)
            }
            finally {
                setLoading(false)
            }
        }
        getSingleOrders(orderId)
    }, [user?.email, orderId, axiosSecure])

    const formattedDate = singleOrder?.orderDate ? new Date(singleOrder.orderDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }) : "N/A";

const formattedTime = singleOrder?.orderDate ? new Date(singleOrder?.orderDate).toLocaleTimeString('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true, 
  timeZone: 'Asia/Dhaka'
}): "N/A"

const orderStatus = singleOrder?.orderStatus

const shippingInfo = singleOrder?.shippingInfo

const items = singleOrder?.items;


    if (loading) {
        return <TextLoader />
    }

    return (
        <div className='flex flex-col gap-5'>

            <div className='flex items-center gap-5 my-5'>
                <button className='bg-base-100 flex items-center gap-2 px-2 py-1 rounded-lg outline-1 outline-gray-300'> <span> <ArrowLeft /> </span> <span className='font-semibold'>Back</span> </button>
                <div className='flex items-center gap-2'>
                    <h2 className='text-xl font-semibold'>Order Details</h2>
                    <span className='text-neutral bg-base-100 px-2 py-1 rounded-lg'>#{singleOrder?._id}</span>
                </div>
            </div>

            <div className='flex justify-between items-center gap-5 w-full'>
                <div className='bg-base-100 w-[50%] h-28 p-4 rounded-lg space-y-1'>
                    <h2 className='text-xl text-neutral font-semibold'>Order Date</h2>
                    <div className='font-semibold'>
                        <h2 className='text-xl font-bold'>{formattedDate}</h2>
                        <span className='text-sm text-neutral'>{formattedTime}</span>
                    </div>
                </div>
                <div className='bg-base-100 w-[50%] h-28 p-4 rounded-lg space-y-1'>
                    <h2 className='text-xl text-neutral font-semibold'>Payment</h2>
                    <span className='bg-secondary/20  px-5 py-0.5 rounded-full text-sm font-semibold text-primary'>{singleOrder?.paymentStatus?.toUpperCase()}</span>
                </div>
            </div>

            <div className='bg-base-100 w-full p-5 rounded-lg'>
                <h2 className='text-xl font-semibold text-neutral'>Order Status</h2>
                <div>
                    <DeliveredStatus  orderStatus={orderStatus}/>
                </div>
            </div>

            <div>
                <ShippingInfo  shippingInfo={shippingInfo}/>
            </div>

            <div>
                <OrderItems items={items}/>
            </div>

            <div>
                <PriceInfo />
            </div>
        </div>
    )
}

export default OrdersDetails