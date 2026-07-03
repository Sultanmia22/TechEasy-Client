import React from 'react'
import type { IRecentOrder, IWishlist } from '@/types/dashboradCustomer.interface'
import { FaBoxOpen } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Link from 'next/link';
import Order from '../../(Customer)/Order/Order';
import Wishlist from '../../(Customer)/Wishlist/Wishlist';
import EmptyOrder from '../../(Customer)/Order/EmptyOrder';
import NoWishlist from '../../(Customer)/Wishlist/NoWishlist';
interface IProps {
    recentOrders: IRecentOrder[];
    wishListItems: IWishlist[];
    refetch: () => void;
}

const OrderAndWishList = ({ recentOrders, wishListItems, refetch }: IProps) => {

    return (
        <div className='flex flex-col 2xl:flex-row w-full gap-6'>
            <div className='w-full md:basis-3/5 bg-base-100 p-5 rounded-xl self-start'>
                <div className='flex justify-between items-center text-lg lg:text-base font-semibold  mb-6'>
                    <span>Recent Orders</span>
                    <Link href={''} className='text-primary'>View All</Link>
                </div>
                {/* Orders Info card*/}

                <div className='grid grid-cols-1 gap-4'>
                    {recentOrders.length > 0 ? (
                        recentOrders?.map(order => (
                            <Order key={order._id} order={order} />
                        ))
                    ) : (
                       <EmptyOrder />
                    )}
                </div>
            </div>


            <div className='w-full md:basis-2/5 bg-base-100 p-5 rounded-xl self-start'>
                <div className='flex justify-between items-center text-lg lg:text-base font-semibold  mb-6'>
                    <span>Wishlist</span>
                    <span className='text-primary'>View All</span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3'>
                    {wishListItems.length > 0 ? (
                        wishListItems?.map(item => (
                            <Wishlist key={item?.productId._id} item={item} refetch={refetch} />
                        ))
                    ) : (
                        <NoWishlist/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default OrderAndWishList