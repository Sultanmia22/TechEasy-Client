import { ArrowRight, Link, Package } from 'lucide-react'
import React from 'react'

const ProductManageBanner = () => {
  return (
     <div className="relative overflow-hidden bg-base-100 dark:bg-base-200 border border-base-300 rounded-3xl shadow-sm p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      
      {/* 🔹 Background Glowing Effect (Changed to primary for visual distinction) */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

      {/* 🔹 Left Section */}
      <div className="relative flex flex-col gap-4">
        <div className="flex items-start gap-4 md:gap-6">
          <div className="p-4 md:p-5 rounded-2xl bg-secondary text-white shrink-0">
            <Package className="w-6 h-6 md:w-8 md:h-8" />
          </div>

          <div className="space-y-1">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-base-content">
              Product <span className="text-secondary">Management</span>
            </h2>
            <p className="text-sm md:text-base text-neutral max-w-sm leading-relaxed opacity-80">
              Manage your inventory, update stock levels, and organize your product catalog with ease.
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Right Section */}
      <div className="relative flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
        
        {/* Stats Card */}
        <div className="bg-base-200/50 dark:bg-base-300/50 backdrop-blur-sm px-6 py-4 rounded-2xl border border-base-300 flex flex-col items-center sm:items-start min-w-35 w-full sm:w-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral/60">Total Products</p>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black text-base-content">30</span>
            <span className="text-xs font-medium text-neutral">Items</span>
          </div>
        </div>

        {/* Action Button */}
        <Link href="/admin/products" className="w-full sm:w-auto group">
          <button className="btn btn-primary h-auto py-4 px-8 rounded-2xl w-full sm:w-auto shadow-lg shadow-primary/25 group-hover:scale-105 transition-all duration-300 text-white">
            <span className="flex items-center gap-2">
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProductManageBanner