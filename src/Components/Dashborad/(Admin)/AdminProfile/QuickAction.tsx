import { ArrowRight, Package, ShoppingCart, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const QuickAction = () => {
  return (
      <div className='p-4 md:p-8 bg-base-100 rounded-xl'>
       <h4 className='text-xl font-medium'> Quick Actions </h4> 
       
       <div className='space-y-5 md:space-y-10 mt-10'>

         <section>
            <Link href={'/dashboard/customerManagement'} className='flex items-center gap-3 group'>
                <div className='bg-blue-50 p-2.5 rounded-lg shrink-0 group-hover:bg-blue-100 transition-colors'>
                    <Users className='w-5 h-5 text-blue-500' />
                </div>
                <span className='font-medium flex-1'>Users Manage</span>
                <ArrowRight className='w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform' />
            </Link>
        </section>

        <section>
            <Link href={'/dashboard/orderManagement'} className='flex items-center gap-3 group'>
                <div className='bg-purple-50 p-2.5 rounded-lg shrink-0 group-hover:bg-purple-100 transition-colors'>
                    <ShoppingCart className='w-5 h-5 text-purple-500' />
                </div>
                <span className='font-medium flex-1'>Order Manage</span>
                <ArrowRight className='w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform' />
            </Link>
        </section>

        <section>
            <Link href={'/dashboard/productManagement'} className='flex items-center gap-3 group'>
                <div className='bg-amber-50 p-2.5 rounded-lg shrink-0 group-hover:bg-amber-100 transition-colors'>
                    <Package className='w-5 h-5 text-amber-500' />
                </div>
                <span className='font-medium flex-1'>Product Manage</span>
                <ArrowRight className='w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform' />
            </Link>
        </section>
       </div>
    </div>
  )
}

export default QuickAction