import Checkoutform from '@/Components/Checkoutform/Checkoutform'
import React from 'react'

const checkOutPage = () => {
  return (
    <div className='min-h-full'>
        <h2 className='text-xl font-semibold'>Checkout</h2>

        <div className='my-10'>
           <Checkoutform />
        </div>
    </div>
  )
}

export default checkOutPage