import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OrderItems = () => {
  return (
    <div className='bg-base-100 p-5 rounded-lg'>
        <div className='flex justify-between items-center text-neutral font-semibold mb-5'>
            <span>Items(0)</span>
            <span>Price</span>
        </div>

        <div className='flex justify-between border border-gray-200 p-3 rounded-lg'>
            <div className='flex gap-2'>
                <div>
                    <Image 
                    src={'https://i.ibb.co.com/zTQ4dR5W/HP-Spectre-x360.jpg'} 
                    alt='image' 
                    width={100}
                    height={100}
                    className='object-cover w-20 h-20 rounded-lg'
                    />
                </div>

                <div>
                    <h2 className='text-lg font-semibold text-gray-800 dark:text-gray-50'>MacBook Pro 14 M3</h2>
                    <span className='text-neutral font-semibold'>Qty: 1</span>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='text-neutral font-semibold'>Tk1,59,900</span>
                <Link href={''}>
                    <button className='btn btn-sm btn-outline btn-accent '>View Details</button> 
                </Link>
            </div>
        </div>
    </div>
  )
}

export default OrderItems