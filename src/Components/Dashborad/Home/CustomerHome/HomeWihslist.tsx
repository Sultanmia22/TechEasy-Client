import Image from 'next/image'
import React from 'react'

// ডামি ডাটার জন্য ইন্টারফেস (আপনার IWishlist এর সাথে মিল রেখে)
interface IWishlistDummy {
    _id: string;
    name: string;
    price: number;
    image: string;
}

interface IProps {
    item: IWishlistDummy;
}

const HomeWihslist = ({ item }: IProps) => {
    return (
        <div className='group relative bg-base-100 dark:bg-base-200 border border-gray-100 dark:border-primary/10 p-3 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden'>
            
            {/* Product Image Section */}
            <div className='relative w-full h-32 md:h-28 lg:h-36 overflow-hidden rounded-xl bg-gray-50 dark:bg-neutral/20'>
                <Image
                    src={item?.image || 'https://i.ibb.co.com/bRCrXKf3/Sony-Xperia-1-V.jpg'}
                    alt={item?.name || 'Product'}
                    fill
                    className='object-contain p-2 group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-2 left-2 bg-primary/90 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm'>
                    Wishlist
                </div>
            </div>

            {/* Product Details */}
            <div className='mt-3 space-y-1'>
                <h5 className='font-bold text-sm text-neutral line-clamp-1 group-hover:text-primary transition-colors'>
                      {item?.name || 'LG UltraWide 34'}
                </h5>
                <p className='text-primary font-black text-sm'>
                    Tk 64564
                </p>
            </div>

            {/* Action Button */}
            <div className='mt-4'>
                <button className='w-full py-2 bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn'>
                    <span>Add to Cart</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default HomeWihslist