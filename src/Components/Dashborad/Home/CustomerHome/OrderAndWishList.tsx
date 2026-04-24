
import React from 'react'
import HomePageRecentOrders from './HomePageRecentOrders'

const OrderAndWishList = () => {
    return (
        <div className='flex flex-col md:flex-row w-full gap-6'>
            <div className='basis-3/5 bg-base-100 p-5 rounded-xl'>
                <div className='flex justify-between items-center text-lg lg:text-base font-semibold  mb-6'>
                    <span>Recent Orders</span>
                    <span className='text-primary'>View All</span>
                </div>
                {/* Orders Info card*/}
                <div className='grid grid-cols-1 gap-4'>
                <HomePageRecentOrders />
                <HomePageRecentOrders />
                <HomePageRecentOrders />
                <HomePageRecentOrders />
                </div>
            </div>
            <div className='basis-2/5 border border-gray-900 p-5'></div>
        </div>
    )
}

export default OrderAndWishList