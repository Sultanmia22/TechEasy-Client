'use client'
import React from 'react'
import FileUpload from './FileUpload'
import Category from './Category'
import AddProductButton from './AddProductButton'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { IProduct, ProductSpecs } from '@/types/products.interface'
import { uploadImage } from '@/lib/imageUpload'
import { toast } from 'react-toastify'
import useAxiosSecure from '@/hook/useAxiosSecure'

type ProductFormInput = Omit<IProduct, '_id' | 'image'> & {
    image: FileList;
    specs: ProductSpecs;
}

const AddProduct = () => {

    const axiosSecure = useAxiosSecure()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ProductFormInput>()

    const onSubmit: SubmitHandler<ProductFormInput> = async (data) => {

        const imageFile = data.image?.[0]

        const image = await uploadImage(imageFile as File)

        try {

            const productData = {
                ...data,
                image,
            }

            const res = await axiosSecure.post('/product/addProduct',productData)

            if(res.status === 201 && res.data.success === true){
                toast.success(res.data.message)
                reset()
            }

        }

        catch (er: unknown) {
            if (er instanceof Error) {
                console.log('Add Product Error:', er.message)
                toast.error(er.message)
            } else {
                alert("An unexpected error occurred.");
            }
        }

    }

    return (
        <div className='w-full bg-base-200 min-h-screen p-6'>
            <div className='max-w-3xl mx-auto'>

                {/* Header */}
                <div className='mb-6'>
                    <h2 className='text-xl font-bold text-base-content'>Add New Product</h2>
                    <p className='text-sm text-neutral mt-1'>Fill in the details to add a new product</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='bg-base-100 border border-base-300 rounded-2xl p-6'>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                            {/* Product Name */}
                            <div className='md:col-span-2'>
                                <label className='block text-[11px] font-semibold text-neutral uppercase tracking-wider mb-2'>
                                    Product Name
                                </label>
                                <input
                                    {...register('name', { required: true })}
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
                                    {...register('brand', { required: true })}
                                    type='text'
                                    placeholder='e.g. Apple'
                                    className='w-full border border-base-300 rounded-xl px-4 py-2.5 text-sm text-base-content bg-base-100 outline-none focus:border-primary transition-colors'
                                />
                            </div>

                            {/* Category */}
                            <Category register={register} />

                            {/* Price */}
                            <div>
                                <label className='block text-[11px] font-semibold text-neutral uppercase tracking-wider mb-2'>
                                    Price tk
                                </label>
                                <input
                                    {...register('price', { required: true })}
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
                                    {...register("stock", { required: true })}
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
                                    {...register('rating', { required: true })}
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
                                    {...register('specs.processor', { required: true })}
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
                                    {...register('specs.ram', { required: true })}
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
                                    {...register('specs.processor', { required: true })}
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
                                    {...register('specs.display', { required: true })}
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
                                    {...register("description", { required: true })}
                                    rows={4}
                                    placeholder='Write a short product description...'
                                    className='w-full border border-base-300 rounded-xl px-4 py-2.5 text-sm text-base-content bg-base-100 outline-none focus:border-primary transition-colors resize-none'
                                />
                            </div>

                            {/* Image Upload */}
                            <FileUpload register={register} />

                            {/* Buttons */}
                            <AddProductButton />

                            <div>
                                <button className='w-full py-2.5 bg-base-100 text-base-content text-sm font-medium rounded-xl border border-base-300 hover:bg-base-200 transition-colors'>
                                    Cancel
                                </button>
                            </div>

                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AddProduct