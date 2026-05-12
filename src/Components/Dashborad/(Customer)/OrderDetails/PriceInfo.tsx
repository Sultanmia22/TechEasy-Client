import React from 'react'

interface IPriceInfo {
    priceandItemInfo:{
         price:number,
         deliveryCharge: number,
         totalItems: number
    }
}

const PriceInfo = ({priceandItemInfo}:IPriceInfo) => {
    const totalPrice = priceandItemInfo?.price + priceandItemInfo?.deliveryCharge
  return (
    <div className='bg-base-100 p-5 rounded-lg space-y-3'>
        <div className='flex justify-between items-center font-semibold text-neutral'>
            <h3>Subtotal ({priceandItemInfo?.totalItems})</h3>
            <span>Tk{priceandItemInfo?.price}</span>
        </div>

        <div className='flex justify-between items-center font-semibold text-neutral'>
            <h3>Shipping</h3>
            <span className='text-green-400 font-normal'>Tk{priceandItemInfo?.deliveryCharge}</span>
        </div>
       
       <div className='h-px w-full bg-gray-300'></div>
        
        <div className='flex justify-between items-center font-semibold'>
            <h3 className='text-neutral'>Total</h3>
            <span className='text-primary font-bold'>Tk{totalPrice}</span>
        </div>
    </div>
  )
}

export default PriceInfo