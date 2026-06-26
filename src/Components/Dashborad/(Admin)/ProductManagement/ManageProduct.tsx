'use client'
import {List, Plus } from 'lucide-react'
import React, { useState } from 'react'
import AddProduct from './AddProduct/AddProduct'
import ProductList from './ProductList/ProductList'


const ManageProduct = () => {

  const [manage, setManage] = useState('addProduct')

  const toggleManage =  (type:string) => {
    setManage(type)
  }

  return (
    <div className='flex flex-col gap-10'>
    <div className="flex items-center gap-3">
      {/* Add Product Button */}
      <button 
      onClick={() =>  toggleManage('addProduct')}
      className={`flex items-center gap-2 border ${manage === 'addProduct' ? 'border-primary text-primary' : 'border-base-content/20 text-base-content hover:bg-base-200'}  hover:bg-primary/10 font-medium py-2.5 px-5 rounded-xl transition-all duration-300 active:scale-95`}>
        <Plus className="w-4 h-4" />
        Add Product
      </button>

      {/* Product List Button */}
      <button onClick={() =>  toggleManage('productList')} className={`flex items-center gap-2 border ${manage === 'productList' ? 'border-primary text-primary' : 'border-base-content/20 text-base-content hover:bg-base-200'}  font-medium py-2.5 px-5 rounded-xl transition-all duration-300 active:scale-95`}>
        <List className="w-4 h-4" />
        Product List
      </button>
    </div>

      {
        manage === 'addProduct' ? 
        (
          <AddProduct />
        )
        : 
        (
          <ProductList />
        )
      }
    </div>
  )
}

export default ManageProduct