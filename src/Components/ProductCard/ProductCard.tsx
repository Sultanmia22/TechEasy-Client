import { IProduct } from '@/types/products.interface'
import React from 'react'

interface ProductCardProps {
  product: IProduct;
}

const ProductCard : React.FC<ProductCardProps> = async ({product}) => {

  return (
    <div className="bg-base-100 dark:bg-base-200 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-base-content dark:text-base-content">{product.name}</h3>
        <p className="text-sm text-neutral dark:text-neutral">{product.brand}</p>
        <p className="mt-2 font-bold text-primary dark:text-primary">৳{product.price.toLocaleString()}</p>
        <div className="mt-2 flex items-center">
          <span className="text-yellow-500 font-semibold">{product.rating} ★</span>
          <span className="ml-2 text-gray-400 dark:text-neutral">({product.stock} in stock)</span>
        </div>
        {/* View Details Button */}
        <button className="mt-4 w-full py-2 rounded-lg bg-accent text-accent-content hover:bg-accent/90 transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  )
}

export default ProductCard