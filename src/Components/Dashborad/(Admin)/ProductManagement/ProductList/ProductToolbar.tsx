'use client'
import useAxiosSecure from '@/hook/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { Search, SlidersHorizontal } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const ProductToolbar = () => {

  const axiosSecure = useAxiosSecure()

  const searchParams = useSearchParams()

  const { replace } = useRouter()

  const pathname = usePathname()

  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')


   const {data:filterData={}} = useQuery({
    queryKey : ['filters'],
    queryFn: async () => {
      const res = await axiosSecure.get('/product/filters')
      return res.data.data
    },
    staleTime: 1000 * 60 * 30,
  })

  console.log('Filter Data:',filterData) 


  useEffect(() => {

    const delayDebounceFn = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString())
      
      if (searchTerm) {
        params.set('search', searchTerm)
      } else {
        params.delete('search')
      }
      
      replace(`${pathname}?${params.toString()}`)
    }, 1000) 

   
    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm,pathname, replace,searchParams])
  


  const handleFilterChange = async (key: string, value: string) => {

    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set(key, value)
    }
    else {
      params.delete(key)
    }
    if (key !== 'page') params.set('page', '1')
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div>
      <div className='flex items-center  gap-3 mb-5 flex-wrap w-full'>

        {/* Search Input */}
        <div className='flex items-center gap-2  bg-base-100 border border-base-300 rounded-xl px-4 py-2.5 flex-1 min-w-45'>
          <Search size={14} className='text-neutral shrink-0' />
          <input
            value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
            type='text'
            placeholder='Search products...'
            className='bg-transparent outline-none ring-0 focus:outline-none focus:ring-0 border-none w-full text-sm text-base-content placeholder:text-neutral'
          />
        </div>

        {/* Category Filter */}
        <select
          defaultValue={searchParams.get('category') || ''}
          onChange={(e) => handleFilterChange('category', e.target.value)}
          className='bg-base-100 border border-base-300 rounded-xl px-4 py-2.5 text-sm text-base-content outline-none focus:border-primary transition-colors'>
          <option value=''>All Categories</option>
          <option value='Mac'>Mac</option>
          <option value='iPhone'>iPhone</option>
          <option value='Audio'>Audio</option>
          <option value='Wearable'>Wearable</option>
        </select>

        {/* Sort Dropdown */}
        <select
          defaultValue={searchParams.get('sort') || 'newest'}
          onChange={(e) => handleFilterChange('sort', e.target.value)}
          className='bg-base-100 border border-base-300 rounded-xl px-4 py-2.5 text-sm text-base-content outline-none focus:border-primary transition-colors'>
          <option value='newest'>Sort: Newest</option>
          <option value='price_asc'>Price: Low to High</option>
          <option value='price_desc'>Price: High to Low</option>
          <option value='rating'>Top Rated</option>
        </select>

        {/* Filter Icon Button */}
        <button className='w-10 h-10 flex items-center justify-center bg-base-100 border border-base-300 rounded-xl text-neutral hover:border-primary hover:text-primary transition-colors'>
          <SlidersHorizontal size={15} />
        </button>

      </div>
    </div>
  )
}

export default ProductToolbar