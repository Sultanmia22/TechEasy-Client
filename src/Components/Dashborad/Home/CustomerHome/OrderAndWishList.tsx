import React from 'react'
import type { IRecentOrder, IWishlist } from '@/types/dashborad.interface'
import { FaBoxOpen } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Link from 'next/link';
import Order from '../../Order/Order';
import Wishlist from '../../Wishlist/Wishlist';
import EmptyOrder from '../../Order/EmptyOrder';
interface IProps {
    recentOrders: IRecentOrder[];
    wishListItems: IWishlist[];
}

const OrderAndWishList = ({ recentOrders, wishListItems }: IProps) => {

    return (
        <div className='flex flex-col md:flex-row w-full gap-6'>
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
                <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-3'>
                    {wishListItems.length > 0 ? (
                        wishListItems?.map(item => (
                            <Wishlist key={item?.productId._id} item={item} />
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center justify-center py-12 px-4">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <FiHeart size={32} className="text-primary opacity-60" />
                            </div>
                            <h3 className="text-lg font-bold text-neutral-content">Your Wishlist is Empty</h3>
                            <p className="text-sm text-neutral opacity-60 mt-1 mb-6 max-w-[200px] text-center">
                                You haven't added anything to your wishlist yet!
                            </p>


                            <button className="btn btn-primary btn-sm rounded-lg px-6 font-bold">
                                Explore Products
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default OrderAndWishList