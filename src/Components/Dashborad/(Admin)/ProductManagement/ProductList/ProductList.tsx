'use client'
import React, { useEffect } from 'react'
import ProductListTable from './ProductListTable'
import ProductToolbar from './ProductToolbar'
import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '@/hook/useAxiosSecure'

const ProductList =  () => {

  const axiosSecure = useAxiosSecure()

  const searchParams = useSearchParams()

  const queryString = searchParams.toString()

  const {data:product=[],isLoading,isError} = useQuery({
    queryKey: ['produst',queryString],
    queryFn: async () => {
      const res = await axiosSecure.get(`/product/productList?${queryString}`)
      return res.data.data
    }
  })

  console.log('Product List Data:',product)

  return (
    <div>
      {/* Header Section */}
      <section>
        <div className='flex items-center justify-between mb-6 flex-wrap gap-3'>
          <div>
            <h2 className='text-xl font-bold text-base-content'>Product List</h2>
            <p className='text-sm text-neutral mt-1'>20 products found</p>
          </div>
          <button className='px-4 py-2.5 bg-primary text-primary-content text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity'>
            + Add Product
          </button>
        </div>
      </section>

      {/* Toolbar */}
      <section>
        <ProductToolbar />
      </section>
      
      {/* Poroduct List Table */}
     <section>
       <ProductListTable />
     </section>
    </div>
  )
}

export default ProductList