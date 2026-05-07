'use client'
import React, { useEffect, useState } from 'react'
import WishlistBanner from './WishlistBanner'
import useAxiosSecure from '@/hook/useAxiosSecure'
import useAuth from '@/hook/useAuth'
import TextLoader from '@/Components/Loading/TextLoader'
import type { IProduct } from '@/types/products.interface'
import Wishlist from './Wishlist'

const AllWishlist = () => {
    const axiosSecure = useAxiosSecure()

    const {user} = useAuth()

    const [wislist,setWishlist] = useState<IProduct []>()
    
    const [loading,setLoading] = useState<boolean>(true)

    useEffect(() => {
        const getOrder = async () => {
            setLoading(true)
            try{
                const res = await axiosSecure.get(`/wishlist/getwishlist?customerEmail=${user?.email}`)

                setWishlist(res.data.data.wishListItem)
            }
            catch(er:any){
                console.log(er)
            }
            finally{
                setLoading(false)  
            }
        }
        getOrder()
    },[user?.email,axiosSecure])

    console.log('WishList Items',wislist)

    if(loading){
        return <TextLoader />
    }


  return (
    <div>
        <WishlistBanner />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10'>
            {
                wislist?.map((item) => 
                <Wishlist key={item._id} item={item} />
                )
            }
        </div>
    </div>
  )
}

export default AllWishlist