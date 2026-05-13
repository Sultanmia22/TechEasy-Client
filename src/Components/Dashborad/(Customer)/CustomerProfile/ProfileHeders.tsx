import React from 'react'
import { Calendar, Heart, Mail, MapPin, Medal, PackageOpen, Settings, SquarePen, WalletCards } from 'lucide-react'
const ProfileHeaders = () => {
  return (
    <div>
        <header className=' relative bg-base-100 w-full h-120 sm:h-100 xl:h-120 rounded-2xl'>
        <div className='h-1/4 xl:h-2/4 bg-primary bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.1)_0px,rgba(255,255,255,0.1)_1px,transparent_1px,transparent_20px)] rounded-t-2xl '></div>

        <div className='sm:relative h-3/4 xl:h-2/4 mt-20 sm:mt-0 px-10'>
          {/* Profile About */}
          <div className='flex flex-col gap-3 sm:absolute sm:left-35 sm:mt-1'>

            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-3 '>
              <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>MD Sultan Mia</h2>
              <div className='flex items-center gap-2'>
                <div className='h-2.5 w-2.5 bg-green-600 rounded-full'></div>
                <div className='flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full text-green-600 text-sm'>
                  <span><Medal size={18} /></span>
                  <span>Premium Customer</span>
                </div>
              </div>
            </div>

            {/* Information and action button */}
            <div className='flex flex-col sm:flex-row  sm:items-end xl:items-center xl:justify-between gap-5'>
              {/* BASIC INFO */}
              <div className='flex sm:flex-col xl:flex-row items-center sm:items-start  justify-center  gap-3'>
                <div className='text-sm text-neutral font-semibold flex items-center  gap-1'>
                  <span><Mail size={16} /></span>
                  <span>sultanmia5732@gmail.com</span>
                </div>

                <div className='text-sm text-neutral font-semibold flex items-center gap-1'>
                  <span><MapPin size={16} /></span>
                  <span>Dhaka, Banglades</span>
                </div>

                <div className='text-sm text-neutral font-semibold flex items-center gap-1'>
                  <span><Calendar size={16} /></span>
                  <span>Since Jan 2026</span>
                </div>
              </div>
              {/* EDIT AND SETTING BUTTON */}
              <div className='flex items-center justify-center gap-3 font-semibold'>
                <button className='flex items-center gap-2 btn btn-sm'> <span>  <SquarePen size={18} /></span> <span>Edit Profile</span> </button>
                <button className='flex items-center gap-2 btn btn-sm'> <span>  <Settings size={18} /></span> <span>Settings </span> </button>
              </div>
            </div>

            {/* Stats */}
            <div className='flex items-center justify-center sm:justify-between gap-3 my-4'>
              {/* Orders Stats */}
              <div className='bg-gray-50 flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 rounded-lg'>
                <div className='bg-green-100 px-1  py-0.5 md:py-1 md:px-2 rounded-lg text-green-600'>
                  <span><PackageOpen /></span>
                </div>
                <div className='flex flex-col font-semibold'>
                  <span className=''>45</span>
                  <span className='text-neutral text-sm'>Orders</span>
                </div>
              </div>
              {/* Wishlist Stats */}
              <div className='bg-gray-50 flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 rounded-lg'>
                <div className='bg-red-100 px-1 py-0.5 md:py-1 md:px-2 rounded-lg text-red-600'>
                  <span><Heart /></span>
                </div>
                <div className='flex flex-col font-semibold'>
                  <span className=''>12</span>
                  <span className='text-neutral text-sm'>Wishlis</span>
                </div>
              </div>
              {/* Spent Stats */}
              <div className='bg-gray-50 flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 rounded-lg'>
                <div className='bg-fuchsia-100 px-1 py-0.5 md:py-1 md:px-2 rounded-lg text-fuchsia-600'>
                  <span><WalletCards /></span>
                </div>
                <div className='flex flex-col font-semibold'>
                  <span className=''>Tk2043</span>
                  <span className='text-neutral text-sm'>Spent</span>
                </div>
              </div>
              {/* Delivered Stats */}
              <div className='bg-gray-50 flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 rounded-lg'>
                <div className='bg-green-100 px-1 py-0.5 md:py-1 md:px-2 rounded-lg text-green-600'>
                  <span><PackageOpen /></span>
                </div>
                <div className='flex flex-col font-semibold'>
                  <span className=''>45</span>
                  <span className='text-neutral text-sm'>Orders</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className=' absolute bg-amber-400 w-25 h-25 rounded-full top-16 left-1/2 -translate-x-1/2  sm:left-19 xl:top-50'>

        </div>
      </header>
    </div>
  )
}

export default ProfileHeaders