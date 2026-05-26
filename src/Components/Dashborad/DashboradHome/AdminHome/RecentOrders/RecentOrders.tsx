import { IRecentOrder } from '@/types/dashboardAdmin.interface';
import React from 'react'
import OrderActionDropdown from './OrderActionDropdown';

type OrderStatus = 'Delivered' | 'Shipped' | 'Pending' | 'Cancelled'

interface Order {
  id: string
  customer: string
  initial: string
  avatarColor: string
  product: string
  amount: string
  status: OrderStatus
  date: string
}

const orders: Order[] = [
  {
    id: '#TE-2048',
    customer: 'Rahat Hossain',
    initial: 'R',
    avatarColor: 'bg-primary',
    product: 'MacBook Air M3',
    amount: '৳1,45,000',
    status: 'Shipped',
    date: 'Apr 15',
  },
  {
    id: '#TE-2047',
    customer: 'Nadia Akter',
    initial: 'N',
    avatarColor: 'bg-accent',
    product: 'Sony WH-1000XM5',
    amount: '৳32,000',
    status: 'Delivered',
    date: 'Apr 14',
  },
  {
    id: '#TE-2046',
    customer: 'Karim Uddin',
    initial: 'K',
    avatarColor: 'bg-secondary',
    product: 'iPhone 16 Pro Max',
    amount: '৳1,75,000',
    status: 'Pending',
    date: 'Apr 14',
  },
  {
    id: '#TE-2045',
    customer: 'Sumaiya Islam',
    initial: 'S',
    avatarColor: 'bg-primary',
    product: 'Apple Watch Series 9',
    amount: '৳55,000',
    status: 'Delivered',
    date: 'Apr 13',
  },
  {
    id: '#TE-2044',
    customer: 'Tanvir Ahmed',
    initial: 'T',
    avatarColor: 'bg-accent',
    product: 'Logitech MX Master 3',
    amount: '৳12,500',
    status: 'Cancelled',
    date: 'Apr 12',
  },
]

const statusStyle: Record<OrderStatus, string> = {
  Delivered: 'bg-green-100 text-green-700',
  Shipped:   'bg-blue-100 text-blue-700',
  Pending:   'bg-yellow-100 text-yellow-700',
  Cancelled: 'bg-red-100 text-red-600',
}



const RecentOrders = ({recentOrders}:{recentOrders:IRecentOrder[]}) => {
  const handleStatusChange =  async () => {

  }
  return (
    <div className='bg-base-100 border border-base-300 rounded-2xl overflow-hidden'>

      {/* Header */}
      <div className='flex items-center justify-between px-5 py-4 border-b border-base-300'>
        <h3 className='text-sm font-semibold text-base-content'>Recent Orders</h3>
        <button className='text-xs font-medium text-primary hover:underline'>
          View all →
        </button>
      </div>

      {/* Table */}
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='bg-base-200'>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>No.</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Customer</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Product</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Amount</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Status</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Date</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr
                key={i}
                className='border-t border-base-300 hover:bg-base-200 transition-colors'
              >
                {/* Order ID */}
                <td className='px-5 py-3 text-sm font-medium text-primary'>
                  {i}
                </td>

                {/* Customer */}
                <td className='px-5 py-3'>
                  <div className='flex items-center gap-2'>
                    <div className={`w-7 h-7 rounded-full ${order.avatarColor} flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0`}>
                      {order.initial}
                    </div>
                    <span className='text-sm text-base-content'>{order.customer}</span>
                  </div>
                </td>

                {/* Product */}
                <td className='px-5 py-3 text-sm text-base-content'>
                  {order.product}
                </td>

                {/* Amount */}
                <td className='px-5 py-3 text-sm font-medium text-base-content'>
                  {order.amount}
                </td>

                {/* Status */}
                <td className='px-5 py-3'>
                  <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${statusStyle[order.status]}`}>
                    {order.status}
                  </span>
                </td>

                {/* Date */}
                <td className='px-5 py-3 text-sm text-neutral'>
                  {order.date}
                </td>

                {/* Date */}
                <td className='px-5 py-3 text-sm text-neutral'>
                <OrderActionDropdown  
  
                />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default RecentOrders