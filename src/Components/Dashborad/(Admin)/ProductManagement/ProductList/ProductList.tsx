'use client'
import ProductListTable from './ProductListTable'
import ProductToolbar from './ProductToolbar'
import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '@/hook/useAxiosSecure'
import TextLoader from '@/Components/Loading/TextLoader'
import ProductListPagination from './ProductListPagination'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

const ProductList =  () => {

  const axiosSecure = useAxiosSecure()

  const searchParams = useSearchParams()

  const queryString = searchParams.toString()

  const {data:apiResponse=[],isLoading,isError} = useQuery({
    queryKey: ['produst',queryString],
    queryFn: async () => {
      const res = await axiosSecure.get(`/product/productList?${queryString}`)
      return res.data.data
    }
  })

  const products = apiResponse?.products || []
  const totalProducts = apiResponse?.total || 0
  const totalPages = apiResponse?.totalPages || 1
  const currentPage = apiResponse?.page || 1

  
  if(isLoading){
    return <TextLoader />
  }

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
       <ProductListTable  products={products}/>
     </section>

     <section>
      <ProductListPagination  totalPages={totalPages} currentPage={currentPage}/>
     </section>
    </div>
  )
}

export default ProductList