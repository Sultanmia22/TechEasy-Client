import Image from 'next/image'
import React from 'react'

const HomeWihslist = () => {
    return (
        <div className='p-5 gap-2 shadow-md rounded-lg'>
            <div>
                <Image
                    src={'https://i.ibb.co.com/bRCrXKf3/Sony-Xperia-1-V.jpg'}
                    alt='Product Image'
                    width={100}
                    height={100}
                    className='w-full h-24 object-cover rounded-lg'
                />
            </div>

            <div className='space-y-2 font-semibold my-2'>
                <h5>LG UltraWide 34</h5>
                <span className='text-neutral'>tk 68,000</span>
            </div>

            <div className='flex justify-center'>
                <button className='btn btn-accent btn-sm'>Add to Cart</button>
            </div>
        </div>
    )
}

export default HomeWihslist