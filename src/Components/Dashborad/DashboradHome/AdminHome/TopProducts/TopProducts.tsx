import React from 'react'
import Image from 'next/image'
import type { TopProduct } from '@/types/dashboardAdmin.interface'

interface TopProductsProps {
  topProducts: TopProduct[] 
}

const rankStyle: Record<number, string> = {
  1: 'text-yellow-500 font-bold',
  2: 'text-slate-400 font-bold',
  3: 'text-amber-600 font-bold',
}

const TopProducts = ({topProducts}: TopProductsProps ) => {


  return (
    <div className='bg-base-100 border border-base-300 rounded-2xl overflow-hidden'>

      {/* Header */}
      <div className='flex items-center justify-between px-5 py-4 border-b border-base-300'>
        <h3 className='text-sm font-semibold text-base-content'>Top Selling Products</h3>
        <button className='text-xs font-medium text-primary hover:underline'>
          View all →
        </button>
      </div>

      {/* ── Desktop Table ── */}
      <div className='hidden md:block overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='bg-base-200'>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Rank</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Product</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Total Qty</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((product, i) => (
              <tr
                key={product._id}
                className='border-t border-base-300 hover:bg-base-200 transition-colors'
              >
                {/* Rank */}
                <td className='px-5 py-3'>
                  <span className={`text-sm ${rankStyle[i + 1] ?? 'text-neutral'}`}>
                    {i + 1}
                  </span>
                </td>

                {/* Product */}
                <td className='px-5 py-3'>
                  <div className='flex items-center gap-3'>
                    <div className='w-9 h-9 rounded-xl overflow-hidden bg-base-200 flex-shrink-0 border border-base-300'>
                      <Image
                      width={100}
                      height={100}
                        src={product.productImage}
                        alt={product.productName}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <span className='text-sm font-medium text-base-content'>
                      {product.productName}
                    </span>
                  </div>
                </td>

                {/* Total Qty */}
                <td className='px-5 py-3'>
                  <span className='text-sm font-medium text-base-content'>
                    {product.totalQty} pcs
                  </span>
                </td>

                {/* Total Amount */}
                <td className='px-5 py-3'>
                  <span className='text-sm font-semibold text-primary'>
                    ৳{product.totalAmount.toLocaleString()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Mobile Cards ── */}
      <div className='md:hidden divide-y divide-base-300'>
        {topProducts.map((product, i) => (
          <div key={product._id} className='flex items-center gap-3 px-4 py-3'>
            {/* Rank */}
            <span className={`text-sm w-5 text-center shrink-0 ${rankStyle[i + 1] ?? 'text-neutral'}`}>
              {i + 1}
            </span>

            {/* Image */}
            <div className='w-9 h-9 rounded-xl overflow-hidden bg-base-200 shrink-0 border border-base-300'>
              <Image
              width={100}
              height={100}
                src={product.productImage}
                alt={product.productName}
                className='w-full h-full object-cover'
              />
            </div>

            {/* Info */}
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium text-base-content truncate'>{product.productName}</p>
              <p className='text-[11px] text-neutral mt-0.5'>{product.totalQty} pcs sold</p>
            </div>

            {/* Amount */}
            <span className='text-sm font-semibold text-primary shrink-0'>
              ৳{product.totalAmount.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default TopProducts