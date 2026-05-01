import React from 'react'
interface IShipping{
  shippingInfo: {
    firstName: string;
    lastName: string;
    address: string;
    upazila: string;
    district: string;
    mobile: string;
    email: string;
    comment: string;
  };
}
const ShippingInfo = ({shippingInfo}:IShipping) => {
  const{firstName,lastName,upazila,address,district} = shippingInfo || {}
  return (
    <div className='bg-base-100 p-5 rounded-lg space-y-2'>
        <h2 className='text-xl font-semibold text-neutral'>SHIPPING ADDRESS</h2>

        <div className=''>
            <h2 className='text-xl text-gray-800 dark:text-gray-50 font-semibold'>{firstName} {lastName}</h2>
            <p className='text-neutral font-semibold'>{address}</p>
            <p className='text-neutral font-semibold'>Upazila: {upazila}  ·  District: {district}</p>
        </div>
    </div>
  )
}

export default ShippingInfo