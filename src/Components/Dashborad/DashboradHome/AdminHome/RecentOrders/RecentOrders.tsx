import { IRecentOrder } from '@/types/dashboardAdmin.interface'
import React, { useState, useEffect } from 'react'
import OrderActionDropdown from './OrderActionDropdown'
import Image from 'next/image';


const statusStyle: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-700',
  Confirm: 'bg-sky-100 text-sky-700',
  Shipping: 'bg-blue-100 text-blue-700',
  delivered: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-600',
}

const getStatusClass = (status: string) =>
  statusStyle[status] ?? statusStyle[status?.toLowerCase()] ?? 'bg-base-200 text-neutral'

const RecentOrders = ({ recentOrders ,refetch}: { recentOrders: IRecentOrder[];refetch: () => Promise<unknown> }) => {


  return (
    <div className='bg-base-100 border border-base-300 rounded-2xl'>

      {/* Header */}
      <div className='flex items-center justify-between px-5 py-4 border-b border-base-300'>
        <h3 className='text-sm font-semibold text-base-content'>Recent Orders</h3>
        <button className='text-xs font-medium text-primary hover:underline'>
          View all →
        </button>
      </div>

      {/* ── Desktop Table (md and above) ── */}
      <div className='hidden md:block overflow-x-visible'>
        <table className='w-full'>
          <thead>
            <tr className='bg-base-200'>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>No.</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Customer</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Product</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Quantity</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Amount</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Status</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Date</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, i) => (
              <tr
                key={i}
                className='border-t border-base-300 hover:bg-base-200 transition-colors'
              >
                <td className='px-5 py-3 text-sm font-medium text-primary'>
                  {i + 1}
                </td>
                <td className='px-5 py-3'>
                  <div className='flex items-center gap-2'>
                    <div className='w-7 h-7 rounded-full bg-primary/50 flex items-center justify-center text-[11px] font-bold text-white shrink-0'>
                      {order.customerName.charAt(0).toUpperCase()}
                    </div>
                    <span className='text-sm text-base-content'>{order?.customerName}</span>
                  </div>
                </td>

                <td className='px-5 py-3'>
                  <div className='flex items-center gap-3'>
                    {/* প্রোডাক্ট ইমেজ */}
                    <div className='w-9 h-9 rounded-lg overflow-hidden border border-base-200 shrink-0 bg-base-200'>
                      <Image
                        width={100}
                        height={100}
                        src={order?.products[0]?.image}
                        alt={order?.products[0]?.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    {/* প্রোডাক্ট নাম */}
                    <span className='text-sm font-medium text-base-content'>
                      {order?.products[0]?.name}
                    </span>
                  </div>
                </td>

                <td className='px-5 py-3 text-sm text-base-content'>
                  {order?.products[0]?.quantity}
                </td>

                <td className='px-5 py-3 text-sm font-medium text-base-content'>
                  {order.amount}
                </td>
                <td className='px-5 py-3'>
                  <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full capitalize ${getStatusClass(order?.status)}`}>
                    {order?.status}
                  </span>
                </td>
                <td className='px-5 py-3 text-sm text-neutral'>
                  {new Date(order.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </td>
                <td className='px-5 py-3 relative overflow-visible'>
                  <OrderActionDropdown status={order?.status} orderId={order.orderId} customerEmail={order.customerEmail} refetch={refetch} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Mobile Cards (below md) ── */}
      <div className='md:hidden divide-y divide-base-300'>
        {recentOrders.map((order, i) => (
          <div key={i} className='px-4 py-4 flex flex-col gap-3'>

            {/* Top row: avatar + name + date */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='w-8 h-8 rounded-full bg-primary/50 flex items-center justify-center text-xs font-bold text-white shrink-0'>
                  {order.customerName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className='text-sm font-medium text-base-content'>{order.customerName}</p>
                  <p className='text-[11px] text-neutral'>
                    {new Date(order.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
              <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full capitalize ${getStatusClass(order?.status)}`}>
                {order?.status}
              </span>
            </div>

            {/* Product + Amount (Updated) */}
            <div className='flex items-center justify-between bg-base-200 rounded-xl px-3 py-2'>
              <div className='flex items-center gap-3 overflow-hidden'>
                {/* Product Image */}
                <div className='w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-base-300'>
                  <Image
                    src={order.products[0]?.image}
                    alt={order.products[0]?.name}
                    width={40}
                    height={40}
                    className='w-full h-full object-cover'
                  />
                </div>
                {/* Name + Qty */}
                <div className='flex flex-col truncate'>
                  <p className='text-sm font-medium text-base-content truncate'>{order.products[0]?.name}</p>
                  <p className='text-[11px] text-neutral'>Qty: {order.products[0]?.quantity}</p>
                </div>
              </div>

              {/* Amount */}
              <p className='text-sm font-semibold text-base-content shrink-0 ml-2'>{order.amount}</p>
            </div>

            {/* Action */}
            <div className='flex items-center justify-between'>
              <span className='text-[11px] text-neutral'>#{i + 1}</span>
              <OrderActionDropdown status={order?.status} orderId={order.orderId} customerEmail={order.customerEmail} refetch={refetch} />
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default RecentOrders