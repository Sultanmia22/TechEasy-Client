
import React from 'react'
import FileUpload from './FileUpload'
import Category from './Category'
import AddProductButton from './AddProductButton'

const AddProduct = () => {
    return (
        <div className='w-full bg-base-200 min-h-screen p-6'>
            <div className='max-w-3xl mx-auto'>

                {/* Header */}
                <div className='mb-6'>
                    <h2 className='text-xl font-bold text-base-content'>Add New Product</h2>
                    <p className='text-sm text-neutral mt-1'>Fill in the details to add a new product</p>
                </div>

                <div className='bg-base-100 border border-base-300 rounded-2xl p-6'>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                        {/* Product Name */}
                        <div className='md:col-span-2'>
                            <label className='block text-[11px] font-semibold text-neutral uppercase tracking-wider mb-2'>
                                Product Name
                            </label>
                            <input
                                type='text'
                                placeholder='e.g. MacBook Pro 14 M3'
                                className='w-full border border-base-300 rounded-xl px-4 py-2.5 text-sm text-base-content bg-base-100 outline-none focus:border-primary transition-colors'
                            />
                        </div>

                        {/* Brand */}
                        <div>
                            <label className='block text-[11px] font-semibold text-neutral uppercase tracking-wider mb-2'>
                                Brand
                            </label>
                            <input
                                type='text'
                                placeholder='e.g. Apple'
                                className='w-full border border-base-300 rounded-xl px-4 py-2.5 text-sm text-base-content bg-base-100 outline-none focus:border-primary transition-colors'
                            />
                        </div>

                        {/* Category */}
                        {/* <div>
                            <fieldset className="fieldset w-full">
                                <legend className="block text-[11px] font-semibold text-neutral uppercase tracking-wider mb-2">Category</legend>
                                <select value="select category" className="select w-full" onChange={() => { }}>
                                    <option value="select category" disabled>Select Category</option>
                                    <option>Chrome</option>
                                    <option>FireFox</option>
                                    <option>Safari</option>
                                </select>
                            </fieldset>
                        </div> */}
                        <Category />

                        {/* Price */}
                        <div>
                            <label className='block text-[11px] font-semibold text-neutral uppercase tracking-wider mb-2'>
                                Price (৳)
                            </label>
                            <input
                                type='number'
                                placeholder='0'
                                className='w-full border border-base-300 rounded-xl px-4 py-2.5 text-sm text-base-content bg-base-100 outline-none focus:border-primary transition-colors'
                            />
                        </div>

                        {/* Stock */}
                        <div>
                            <label className='block text-[11px] font-semibold text-neutral uppercase tracking-wider mb-2'>
                                Stock Quantity
                            </label>
                            <input
                                type='number'
                                placeholder='0'
                                className='w-full border border-base-300 rounded-xl px-4 py-2.5 text-sm text-base-content bg-base-100 outline-none focus:border-primary transition-colors'
                            />
                        </div>

                        {/* Rating */}
                        <div>
                            <label className='block text-[11px] font-semibold text-neutral uppercase tracking-wider mb-2'>
                                Rating (0–5)
                            </label>
                            <input
                                type='number'
                                placeholder='4.5'
                                step='0.1'
                                min='0'
                                max='5'
                                className='w-full border border-base-300 rounded-xl px-4 py-2.5 text-sm text-base-content bg-base-100 outline-none focus:border-primary transition-colors'
                            />
                        </div>

                        {/* Divider — Specs */}
                        <div className='md:col-span-2'>
                            <p className='text-[11px] font-semibold text-neutral uppercase tracking-wider pb-3 border-b border-base-300'>
                                Specifications
                            </p>
                        </div>

                        {/* Processor */}
                        <div>
                            <label className='block text-[11px] font-semibold text-neutral uppercase tracking-wider mb-2'>
                                Processor
                            </label>
                            <input
                                type='text'
                                placeholder='e.g. Apple M3 Chip'
                                className='w-full border border-base-300 rounded-xl px-4 py-2.5 text-sm text-base-content bg-base-100 outline-none focus:border-primary transition-colors'
                            />
                        </div>

                        {/* RAM */}
                        <div>
                            <label className='block text-[11px] font-semibold text-neutral uppercase tracking-wider mb-2'>
                                RAM
                            </label>
                            <input
                                type='text'
                                placeholder='e.g. 16GB'
                                className='w-full border border-base-300 rounded-xl px-4 py-2.5 text-sm text-base-content bg-base-100 outline-none focus:border-primary transition-colors'
                            />
                        </div>

                        {/* Storage */}
                        <div>
                            <label className='block text-[11px] font-semibold text-neutral uppercase tracking-wider mb-2'>
                                Storage
                            </label>
                            <input
                                type='text'
                                placeholder='e.g. 512GB SSD'
                                className='w-full border border-base-300 rounded-xl px-4 py-2.5 text-sm text-base-content bg-base-100 outline-none focus:border-primary transition-colors'
                            />
                        </div>

                        {/* Display */}
                        <div>
                            <label className='block text-[11px] font-semibold text-neutral uppercase tracking-wider mb-2'>
                                Display
                            </label>
                            <input
                                type='text'
                                placeholder='e.g. 14.2-inch Liquid Retina XDR'
                                className='w-full border border-base-300 rounded-xl px-4 py-2.5 text-sm text-base-content bg-base-100 outline-none focus:border-primary transition-colors'
                            />
                        </div>

                        {/* Description */}
                        <div className='md:col-span-2'>
                            <label className='block text-[11px] font-semibold text-neutral uppercase tracking-wider mb-2'>
                                Description
                            </label>
                            <textarea
                                rows={4}
                                placeholder='Write a short product description...'
                                className='w-full border border-base-300 rounded-xl px-4 py-2.5 text-sm text-base-content bg-base-100 outline-none focus:border-primary transition-colors resize-none'
                            />
                        </div>

                        {/* Image Upload */}
                        <FileUpload />

                        {/* Buttons */}
                        <AddProductButton />

                        <div>
                            <button className='w-full py-2.5 bg-base-100 text-base-content text-sm font-medium rounded-xl border border-base-300 hover:bg-base-200 transition-colors'>
                                Cancel
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddProduct