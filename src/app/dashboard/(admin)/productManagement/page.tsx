import ManageProduct from '@/Components/Dashborad/(Admin)/ProductManagement/ManageProduct'
import ProductManageBanner from '@/Components/Dashborad/(Admin)/ProductManagement/ProductManageBanner'
import React from 'react'

const ProductManagement = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div>
           <ProductManageBanner />
        </div>

        <div>
          <ManageProduct />
        </div>
    </div>
  )
}

export default ProductManagement