
import React from 'react'
import DeliveredStatus from './DeliveredStatus'
import ShippingInfo from './ShippingInfo'
import OrderItems from './OrderItems'
import PriceInfo from './PriceInfo'

const OrdersDetails = () => {
    
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex justify-between items-center gap-5 w-full'>
                <div className='bg-base-100 w-[50%] h-28 p-4 rounded-lg space-y-1'>
                    <h2 className='text-xl text-neutral font-semibold'>Order Date</h2>
                    <div className='font-semibold'>
                        <h2 className='text-xl font-bold'>Apr 28, 2026</h2>
                        <span className='text-sm text-neutral'>14:00 UTC</span>
                    </div>
                </div>
                <div className='bg-base-100 w-[50%] h-28 p-4 rounded-lg space-y-1'>
                    <h2 className='text-xl text-neutral font-semibold'>Payment</h2>
                    <span className='bg-secondary/20  px-5 py-0.5 rounded-full text-sm font-semibold text-primary'>Paid</span>
                </div>
            </div>

            <div className='bg-base-100 w-full p-5 rounded-lg'>
                <h2 className='text-xl font-semibold text-neutral'>Order Status</h2>
               <div>
                <DeliveredStatus/>
               </div>
            </div>

            <div>
                <ShippingInfo />
            </div>

            <div>
                <OrderItems />
            </div>

            <div>
                <PriceInfo />
            </div>
        </div>
    )
}

export default OrdersDetails