import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface IItems {
    items: {
        productId: string;
        name: string;
        price: number;
        quantity: number;
        image: string;
    }[];
}
const OrderItems = ({ items }: IItems) => {
    return (
        <div className='bg-base-100 p-5 rounded-lg'>
            <div className='flex justify-between items-center text-neutral font-semibold mb-5'>
                <span>Items(0)</span>
                <span>Price</span>
            </div>

            {
                items?.map((item, index) => (
                    <div key={index} className='flex justify-between border border-gray-200 p-3 rounded-lg'>
                        <div className='flex gap-2'>
                            <div>
                                <Image
                                    src={item?.image}
                                    alt='image'
                                    width={100}
                                    height={100}
                                    className='object-cover w-20 h-20 rounded-lg'
                                />
                            </div>

                            <div>
                                <h2 className='text-lg font-semibold text-gray-800 dark:text-gray-50'>{item?.name}</h2>
                                <span className='text-neutral font-semibold'>Qty: {item?.quantity}</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-neutral font-semibold'>Tk{item?.price}</span>
                            <Link href={`/all-product/${item?.productId}`}>
                                <button className='btn btn-sm btn-outline btn-accent '>View Details</button>
                            </Link>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default OrderItems