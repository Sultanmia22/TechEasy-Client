'use client'
import { IProduct } from '@/types/products.interface';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface ProductDetailsProps {
  singleProduct: IProduct;
}

const ProductDetails = ({ singleProduct }: ProductDetailsProps) => {

  const { data } = useSession()



  const [quantity, setQuantity] = useState<number>(1)

  const product = singleProduct || {}

  // handle Product Quantiy Increase Decrease 
  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1)
    }
    else {
      setQuantity(prev => prev > 1 ? prev - 1 : 1)
    }
  }

  const handleAddToCart = async () => {
    try {
      const cartData = {
        userEmail: data?.user?.email,
        productId: product?._id,
        quantity: quantity
      }

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/cart/addToCart`,cartData)

      if(res.data.success){
        toast.success(res.data.message)
      }
    }

    catch (er: any) {
      console.log(er)

    }
  }

  // Generate star rating visually
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating - fullStars >= 0.5;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* Back Link */}
      <Link href="/all-product" className="text-primary hover:underline mb-6 inline-block">
        ← Back to All Products
      </Link>

      <div className="flex flex-col md:flex-row gap-10 bg-base-100 dark:bg-base-200 rounded-xl p-6 shadow-md">

        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center ">
          <img
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-base-content">{product.name}</h1>
          <p className="text-gray-500 dark:text-neutral">{product.description}</p>

          {/* Price */}
          <p className="text-2xl font-extrabold text-primary">
            ${product?.price?.toLocaleString()}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {Array.from({ length: fullStars }).map((_, idx) => (
              <FaStar key={idx} className="text-yellow-400" />
            ))}
            {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
            <span className="ml-2 text-gray-500 dark:text-neutral">{product.rating}</span>
          </div>

          {/* Product Details */}
          <div className="mt-4 flex flex-col gap-2 text-base-content">
            <p><span className="font-semibold">Brand:</span> {product.brand}</p>
            <p><span className="font-semibold">Category:</span> {product.category}</p>
            <p><span className="font-semibold">Stock:</span> {product.stock > 0 ? 'In stock' : 'Out of stock'}</p>
          </div>

          {/* Specifications */}
          <div className="mt-4">
            <h2 className="font-semibold text-lg mb-2">Specifications:</h2>
            <ul className="list-disc list-inside text-base-content">
              <li><span className="font-semibold">Processor:</span> {product?.specs?.processor}</li>
              <li><span className="font-semibold">RAM:</span> {product?.specs?.ram}</li>
              <li><span className="font-semibold">Storage:</span> {product?.specs?.storage}</li>
              <li><span className="font-semibold">Display:</span> {product?.specs?.display}</li>
            </ul>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-2.5 md:gap-5 mt-6'>
            <div className='flex items-center'>
              <button onClick={() => handleQuantityChange('decrease')} className='btn text-lg'>-</button>
              <button className='btn text-lg'>{quantity}</button>
              <button onClick={() => handleQuantityChange('increase')} className='btn text-lg'>+</button>
            </div>
            <div>
              <button
                onClick={handleAddToCart}
                className="btn btn-accent w-full transition-colors duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;