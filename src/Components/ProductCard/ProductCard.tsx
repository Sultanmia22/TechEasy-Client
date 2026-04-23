import { IProduct } from '@/types/products.interface'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ProductCardProps {
  product: IProduct;
}

const ProductCard : React.FC<ProductCardProps> =  ({product}) => {

  return (
    <div className="bg-base-100 dark:bg-base-200 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
     <Image
        className="w-full h-70 rounded-t-xl object-cover"
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        placeholder='blur'
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
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
        <Link href={`all-product/${product?._id}`} className="btn btn-accent w-full mt-4 transition-colors duration-200">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default ProductCard