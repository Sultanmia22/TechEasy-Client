"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa'; // react-icons install করা থাকলে
import type { IRecentOrder } from '@/types/dashborad.interface';

const HomePageRecentOrders = ({ order }: { order: IRecentOrder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const items = order?.items || [];
  const firstItem = items[0];

  return (
    <div className='bg-base-100 rounded-xl border border-gray-100 dark:border-primary/10 overflow-hidden transition-all duration-300'>
      {/* Main Order Row */}
      <div 
        className='flex justify-between items-center p-4 cursor-pointer hover:bg-base-200'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex items-center gap-3'>
          <div className='relative w-12 h-12 flex-shrink-0'>
            <Image
              src={firstItem?.image}
              alt={firstItem?.name}
              fill
              className='object-cover rounded-lg'
            />
          </div>
          <div>
            <h4 className='font-bold text-sm md:text-base flex items-center gap-2'>
              {firstItem?.name}
              {items.length > 1 && (
                <span className='badge badge-primary badge-sm'>+{items.length - 1} more</span>
              )}
            </h4>
            <p className='text-xs opacity-60'>Order ID: #{order._id.slice(-6).toUpperCase()}</p>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='text-right'>
            <p className='font-bold text-sm'>Tk {order.totalPrice.toLocaleString()}</p>
            <span className='text-sm uppercase font-semibold text-warning'>{order.devliveredStatus}</span>
          </div>
          {/* Arrow Icon */}
          <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>

      {/* Hidden Items List (Accordion Content) */}
      {isOpen && (
        <div className='bg-base-200/50 p-4 border-t border-gray-100 dark:border-primary/5'>
          <p className='text-xs font-semibold mb-3 opacity-70'>Items in this order:</p>
          <div className='flex flex-col gap-3'>
            {items.map((item, index) => (
              <div key={index} className='flex items-center justify-between bg-base-100 p-2 rounded-lg'>
                <div className='flex items-center gap-2'>
                  <Image src={item.image} alt={item.name} width={40} height={40} className='rounded-md' />
                  <div>
                    <p className='text-xs font-medium'>{item.name}</p>
                    <p className='text-[10px] opacity-60'>Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className='text-xs font-bold'>Tk {item.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePageRecentOrders;