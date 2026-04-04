import Link from 'next/link'
import React from 'react'

 interface ITotalPrice  {
  totalPrice :  number
}

const OrderSummary : React.FC<ITotalPrice> = ({totalPrice}) => {
 
  return (
<div className="w-full max-w-sm p-6 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-2xl border border-gray-100 dark:bg-gray-900 dark:border-primary">
      
      {/* শিরোনাম (Title) */}
      <h2 className="text-[20px] font-bold text-gray-950 dark:text-white mb-6">
        Order Summary
      </h2>

      {/* সাব-টোটাল সেকশন (মাঝখানের ডিভাইডার লাইন সহ) */}
      <div className="flex justify-between items-center mb-5 pb-5 border-b border-gray-100 dark:border-primary">
        <span className="text-gray-700 dark:text-gray-300 text-[16px]">
          Sub-Total:
        </span>
        <span className="text-gray-950 dark:text-white text-[18px] font-semibold">
         {totalPrice}
        </span>
      </div>

      {/* টোটাল সেকশন */}
      <div className="flex justify-between items-center mb-8">
        <span className="text-gray-950 dark:text-white text-[18px] font-bold">
          Total:
        </span>
        {/* কালার পরিবর্তন: #FF5252 এর জায়গায় আপনার text-primary */}
        <span className="text-primary text-[22px] font-bold">
        {totalPrice}
        </span>
      </div>

      {/* অ্যাকশন বাটন সেকশন (লেআউট ১০০% ছবির মতো) */}
      <div className="flex gap-4">
        
        {/* + Add More বাটন - লেআউট ছবির মতো, কালার আপনার primary */}
        <Link href={'/all-product'} className="flex-1 flex items-center justify-center gap-2.5 btn btn-primary btn-outline">
          <span className="text-[24px] font-medium leading-none">+</span>
          Add More
        </Link>

        {/* Checkout বাটন - লেআউট ছবির মতো, কালার আপনার btn-accent */}
        <button className="flex-1 btn btn-accent  text-[16px] font-semibold">
          Checkout
        </button>
      </div>
    </div>
  )
}

export default OrderSummary