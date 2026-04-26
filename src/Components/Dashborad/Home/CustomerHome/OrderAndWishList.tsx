
import React from 'react'
import HomePageRecentOrders from './HomePageRecentOrders'
import HomeWihslist from './HomeWihslist'

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
            <div className='basis-2/5 bg-base-100 p-5 rounded-xl '>
                 <div className='flex justify-between items-center text-lg lg:text-base font-semibold  mb-6'>
                    <span>Wishlist</span>
                    <span className='text-primary'>View All</span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3'>
                    <HomeWihslist />
                      <HomeWihslist />
                </div>
            </div>
        </div>
    )
}

export default OrderAndWishList