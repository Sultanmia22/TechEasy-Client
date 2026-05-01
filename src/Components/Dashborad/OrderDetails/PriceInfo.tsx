import React from 'react'

const PriceInfo = () => {
  return (
    <div className='bg-base-100 p-5 rounded-lg space-y-3'>
        <div className='flex justify-between items-center font-semibold text-neutral'>
            <h3>Subtotal (2 items)</h3>
            <span>Tk2,64,900</span>
        </div>

        <div className='flex justify-between items-center font-semibold text-neutral'>
            <h3>Shipping</h3>
            <span className='text-green-400 font-normal'>Tk80</span>
        </div>
       
       <div className='h-px w-full bg-gray-300'></div>
        
        <div className='flex justify-between items-center font-semibold'>
            <h3 className='text-neutral'>Total</h3>
            <span className='text-primary font-bold'>Tk2,64,980</span>
        </div>
    </div>
  )
}

export default PriceInfo