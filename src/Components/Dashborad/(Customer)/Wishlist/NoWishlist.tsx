import Link from 'next/link'
import React from 'react'
import { FiHeart } from 'react-icons/fi'

const NoWishlist = () => {
  return (
   <div className="col-span-full flex flex-col items-center justify-center py-12 px-4">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <FiHeart size={32} className="text-primary opacity-60" />
                            </div>
                            <h3 className="text-lg font-bold text-neutral">Your Wishlist is Empty</h3>
                            <p className="text-sm text-neutral opacity-60 mt-1 mb-6 max-w-50 text-center">
                                You haven't added anything to your wishlist yet!
                            </p>


                            <Link href={'/all-product'} className="btn btn-primary btn-sm rounded-lg px-6 font-bold">
                                Explore Products
                            </Link>
                        </div>
  )
}

export default NoWishlist