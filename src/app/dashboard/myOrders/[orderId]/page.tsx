import OrdersDetails from '@/Components/Dashborad/OrderDetails/OrdersDetails'
import { ArrowLeft,  } from 'lucide-react'
import React from 'react'

const OrderDetailsPage = () => {
  return (
    <div>
        <div className='flex items-center gap-5 my-5'>
          <button className='bg-base-100 flex items-center gap-2 px-2 py-1 rounded-lg outline-1 outline-gray-300'> <span> <ArrowLeft /> </span> <span className='font-semibold'>Back</span> </button>
          <div className='flex items-center gap-2'>
            <h2 className='text-xl font-semibold'>Order Details</h2>
            <span className='text-neutral bg-base-100 px-2 py-1 rounded-lg'>#69ee4d7219a982464da76bee</span>
          </div>
        </div>

        <div className='py-5'>
          <OrdersDetails />
        </div>
    </div>
  )
}

export default OrderDetailsPage  