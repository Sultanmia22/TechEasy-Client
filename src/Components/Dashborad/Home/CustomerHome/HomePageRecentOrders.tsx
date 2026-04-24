import Image from 'next/image'
import React from 'react'

const HomePageRecentOrders = () => {
  return (
  <div className='border-b border-gray-200 dark:border-primary pb-4'>
                    {/* Recent Single Product */}
                    <div className='flex justify-between items-center bg-base-100 p-5 rounded-lg'>
                        <div className='flex items-center gap-2'>
                            <div className='w-12 h-12'>
                                <Image
                                    src={'https://i.ibb.co.com/bRCrXKf3/Sony-Xperia-1-V.jpg'}
                                    alt='Product Image'
                                    width={100}
                                    height={100}
                                    className='w-12 h-12 object-cover rounded-lg'
                                />
                            </div>
                            <div>
                                <h4 className='font-semibold'>MacBook Air M3</h4>
                                <span className='text-neutral'>02:30 AM 25 April 2026</span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <span className='font-semibold'>Tk 143424</span>
                            <button className='btn-sm bg-yellow-200 rounded-full font-semibold text-neutral'>Pending</button>
                        </div>
                    </div>
                </div>
  )
}

export default HomePageRecentOrders