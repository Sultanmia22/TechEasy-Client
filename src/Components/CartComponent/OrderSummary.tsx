import React from 'react'

const OrderSummary = () => {
  return (
    <div className='w-full shadow-md p-4 rounded-lg'>
        <h2 className='text-2xl md:text-xl font-bold mb-4'>Order Summary</h2>  
        <div className='flex flex-col'>
            <div>
                <p className='flex justify-between mb-2'><span>Subtotal</span> <span>TK 148000</span></p>
                <p className='flex justify-between mb-2'><span>Shipping</span> <span>TK 100</span></p>
            </div>

             <div className='h-0.5 w-full bg-gray-100 my-2'></div>

             <div>
                <p className='flex justify-between mb-2'><span className='font-bold'>Total</span> <span className='font-bold text-lg text-primary'>TK 148100</span></p>
             </div>

             <div className='flex justify-center items-center'>
                <button className='btn btn-accent'>Confirm Order</button>
             </div>
        </div>      
    </div>
  )
}

export default OrderSummary