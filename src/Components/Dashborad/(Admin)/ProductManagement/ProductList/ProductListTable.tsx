import { Eye, Pencil, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const products: Product[] = [
    {
        id: 1,
        name: 'MacBook Pro 14 M3',
        brand: 'Apple',
        category: 'Mac',
        price: 159900,
        stock: 12,
        rating: 4.9,
        image: 'https://i.ibb.co.com/7xjGRb7k/Mac-Book-Pro-14-M3.jpg',
    },
    {
        id: 2,
        name: 'iPhone 16 Pro Max',
        brand: 'Apple',
        category: 'iPhone',
        price: 175000,
        stock: 24,
        rating: 4.8,
        image: '',
    },
    {
        id: 3,
        name: 'Sony WH-1000XM5',
        brand: 'Sony',
        category: 'Audio',
        price: 32000,
        stock: 4,
        rating: 4.7,
        image: '',
    },
    {
        id: 4,
        name: 'Apple Watch Series 9',
        brand: 'Apple',
        category: 'Wearable',
        price: 55000,
        stock: 18,
        rating: 4.6,
        image: '',
    },
    {
        id: 5,
        name: 'Mac Mini M2',
        brand: 'Apple',
        category: 'Mac',
        price: 144000,
        stock: 2,
        rating: 4.8,
        image: '',
    },
]

const ProductListTable = () => {
    return (
        <div>
            <div className='hidden md:block bg-base-100 border border-base-300 rounded-2xl overflow-hidden'>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-base-200'>
                            <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Product</th>
                            <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Category</th>
                            <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Price</th>
                            <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Stock</th>
                            <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Rating</th>
                            <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className='border-t border-base-300 hover:bg-base-200 transition-colors'>

                                {/* Product */}
                                <td className='px-5 py-3'>
                                    <div className='flex items-center gap-3'>
                                        {product.image ? (
                                            <Image
                                                width={100}
                                                height={100}
                                                src={product.image}
                                                alt={product.name}
                                                className='w-10 h-10 rounded-xl object-cover border border-base-300 flex-shrink-0'
                                            />
                                        ) : (
                                            <div className='w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg flex-shrink-0 border border-base-300'>
                                                💻
                                            </div>
                                        )}
                                        <div>
                                            <p className='text-sm font-medium text-base-content'>{product.name}</p>
                                            <p className='text-[11px] text-neutral mt-0.5'>{product.brand}</p>
                                        </div>
                                    </div>
                                </td>

                                {/* Category */}
                                <td className='px-5 py-3'>
                                    <span className='text-xs px-2.5 py-1 rounded-full bg-base-200 text-neutral font-medium'>
                                        {product.category}
                                    </span>
                                </td>

                                {/* Price */}
                                <td className='px-5 py-3 text-sm font-semibold text-base-content'>
                                    ৳{product.price.toLocaleString()}
                                </td>

                                {/* Stock */}
                                <td className='px-5 py-3'>
                                    {product.stock <= 5 ? (
                                        <span className='text-[11px] font-medium px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-700'>
                                            {product.stock} left
                                        </span>
                                    ) : (
                                        <span className='text-[11px] font-medium px-2.5 py-1 rounded-full bg-green-100 text-green-700'>
                                            {product.stock} in stock
                                        </span>
                                    )}
                                </td>

                                {/* Rating */}
                                <td className='px-5 py-3'>
                                    <div className='flex items-center gap-1'>
                                        <span className='text-yellow-400 text-sm'>★</span>
                                        <span className='text-sm text-base-content font-medium'>{product.rating}</span>
                                    </div>
                                </td>

                                {/* Actions */}
                                <td className='px-5 py-3'>
                                    <div className='flex items-center gap-2'>
                                        <button className='w-8 h-8 flex items-center justify-center rounded-lg border border-base-300 bg-base-100 text-neutral hover:border-primary hover:text-primary transition-colors'>
                                            <Eye size={13} />
                                        </button>
                                        <button className='w-8 h-8 flex items-center justify-center rounded-lg border border-base-300 bg-base-100 text-neutral hover:border-primary hover:text-primary transition-colors'>
                                            <Pencil size={13} />
                                        </button>
                                        <button className='w-8 h-8 flex items-center justify-center rounded-lg border border-base-300 bg-base-100 text-neutral hover:border-red-400 hover:text-red-500 transition-colors'>
                                            <Trash2 size={13} />
                                        </button>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='md:hidden flex flex-col gap-3'>
                {products.map((product) => (
                    <div key={product.id} className='bg-base-100 border border-base-300 rounded-2xl p-4'>

                        {/* Card Top — Image + Name + Stock Badge */}
                        <div className='flex items-center gap-3'>
                            {product.image ? (
                                <Image
                                    width={100}
                                    height={100}
                                    src={product.image}
                                    alt={product.name}
                                    className='w-12 h-12 rounded-xl object-cover border border-base-300 shrink-0'
                                />
                            ) : (
                                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl shrink-0 border border-base-300'>
                                    💻
                                </div>
                            )}
                            <div className='flex-1 min-w-0'>
                                <p className='text-sm font-semibold text-base-content truncate'>{product.name}</p>
                                <p className='text-[11px] text-neutral mt-0.5'>{product.brand} · {product.category}</p>
                            </div>
                            {product.stock <= 5 ? (
                                <span className='text-[10px] font-medium px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 shrink-0'>
                                    {product.stock} left
                                </span>
                            ) : (
                                <span className='text-[10px] font-medium px-2 py-1 rounded-full bg-green-100 text-green-700 shrink-0'>
                                    In stock
                                </span>
                            )}
                        </div>
                            <div className="w-full h-px bg-base-300 my-4" />
                        {/* Card Bottom — Price + Rating + Action Buttons */}
                        <div className='flex items-center justify-between mt-3 pt-5'>
                            <div className='flex items-center gap-3'>
                                <span className='text-sm font-bold text-primary'>৳{product.price.toLocaleString()}</span>
                                <div className='flex items-center gap-1'>
                                    <span className='text-yellow-400 text-xs'>★</span>
                                    <span className='text-xs text-neutral'>{product.rating}</span>
                                </div>
                            </div>

                            <div className='flex items-center gap-2'>
                                <button className='w-8 h-8 flex items-center justify-center rounded-lg border border-base-300 text-neutral hover:border-primary hover:text-primary transition-colors'>
                                    <Eye size={13} />
                                </button>
                                <button className='w-8 h-8 flex items-center justify-center rounded-lg border border-base-300 text-neutral hover:border-primary hover:text-primary transition-colors'>
                                    <Pencil size={13} />
                                </button>
                                <button className='w-8 h-8 flex items-center justify-center rounded-lg border border-base-300 text-neutral hover:border-red-400 hover:text-red-500 transition-colors'>
                                    <Trash2 size={13} />
                                </button>
                            </div>
                        </div>
                        {/* Card Bottom End */}

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductListTable