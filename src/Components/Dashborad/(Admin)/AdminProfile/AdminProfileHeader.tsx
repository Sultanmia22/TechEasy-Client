'use client'
import React from 'react'
import { Calendar, Mail, MapPin, Package, Settings, ShoppingCart, SquarePen, TrendingUp, UserCog, Users } from 'lucide-react'
import useAuth from '@/hook/useAuth'
import useAxiosSecure from '@/hook/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import type { IadminProfileStats } from '@/types/profile.interface'
import { formatCompact } from '@/lib/format'

const AdminProfileHeader = () => {

    const {user,role} = useAuth()

    const axiosSecure = useAxiosSecure()

    const {data: adminProfileStats} = useQuery<IadminProfileStats>({
      queryKey: ['adminProfileStats',role],
      queryFn: async () => {
        const res = await axiosSecure.get('/profile/adminStats')
        return res.data.data
      }
    })

    // console.log('Admin profile stats:',adminProfileStats?.totalOrders)

  return (
    <div>
        <header className=' relative bg-base-100 w-full h-120 sm:h-100 xl:h-120 rounded-2xl'>
        <div className='h-1/4 xl:h-2/4 bg-secondary bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.3)_0px,rgba(255,255,255,0.3)_1px,transparent_1px,transparent_20px)] rounded-t-2xl '></div>

        <div className='sm:relative h-3/4 xl:h-2/4 mt-20 sm:mt-0 px-10'>
          {/* Profile About */}
          <div className='flex flex-col gap-3 sm:absolute sm:left-35 sm:mt-1'>

            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-3 '>
              <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-100'> {user?.name} </h2>
              <div className='flex items-center gap-2'>
                <div className='h-2.5 w-2.5 bg-green-600 rounded-full'></div>
                <div className='flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full text-green-600 text-sm'>
                  <span><UserCog size={18} /></span>
                  <span>{user?.role}</span>
                </div>
              </div>
            </div>

            {/* Information and action button */}
            <div className='flex flex-col sm:flex-row  sm:items-end xl:items-center xl:justify-between gap-5'>
              {/* BASIC INFO */}
              <div className='flex sm:flex-col xl:flex-row items-center sm:items-start  justify-center  gap-3'>
                <div className='text-sm text-neutral font-semibold flex items-center  gap-1'>
                  <span><Mail size={16} /></span>
                  <span> {user?.email} </span>
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
            <div className='flex items-center justify-center sm:justify-between gap-3 my-4 w-full'>
              {/* Orders Stats */}
              <div className='bg-gray-50 dark:bg-gray-900 flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 rounded-lg'>
                <div className='bg-green-100 px-1  py-0.5 md:py-1 md:px-2 rounded-lg text-green-600'>
                  <span><ShoppingCart /></span>
                </div>
                <div className='flex flex-col font-semibold'>
                  <span className=''>{adminProfileStats?.totalOrders}</span>
                  <span className='text-neutral text-sm'>Total Orders</span>
                </div>
              </div>
              {/* Wishlist Stats */}
              <div className='bg-gray-50 dark:bg-gray-900 flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 rounded-lg'>
                <div className='bg-red-100 px-1 py-0.5 md:py-1 md:px-2 rounded-lg text-red-600'>
                  <span><Package /></span>
                </div>
                <div className='flex flex-col font-semibold'>
                  <span className=''>{adminProfileStats?.totalProducts}</span>
                  <span className='text-neutral text-sm'>Products</span>
                </div>
              </div>
              {/* Spent Stats */}
              <div className='bg-gray-50 dark:bg-gray-900 flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 rounded-lg'>
                <div className='bg-fuchsia-100 px-1 py-0.5 md:py-1 md:px-2 rounded-lg text-fuchsia-600'>
                  <span><Users /></span>
                </div>
                <div className='flex flex-col font-semibold'>
                  <span className=''>{adminProfileStats?.totalUsers}</span>
                  <span className='text-neutral text-sm'>Customers</span>
                </div>
              </div>
              {/* Delivered Stats */}
              <div className='bg-gray-50 dark:bg-gray-900 flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 rounded-lg'>
                <div className='bg-green-100 px-1 py-0.5 md:py-1 md:px-2 rounded-lg text-green-600'>
                  <span><TrendingUp /></span>
                </div>
                <div className='flex flex-col font-semibold'>
                  <span className=''>{formatCompact(adminProfileStats?.totalRevenue ?? 0)}</span>
                  <span className='text-neutral text-sm'>Revenue</span>
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

export default AdminProfileHeader