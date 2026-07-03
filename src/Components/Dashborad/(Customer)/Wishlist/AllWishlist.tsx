'use client'
import WishlistBanner from './WishlistBanner'
import useAxiosSecure from '@/hook/useAxiosSecure'
import useAuth from '@/hook/useAuth'
import TextLoader from '@/Components/Loading/TextLoader'

import Wishlist from './Wishlist'
import { useQuery } from '@tanstack/react-query'
import NoWishlist from './NoWishlist'
import type { IWishlist } from '@/types/dashboradCustomer.interface'

const AllWishlist = () => {
    const axiosSecure = useAxiosSecure()

    const { user } = useAuth()

    const { data: wishlist = [], isLoading, refetch } = useQuery<IWishlist[]>({

        queryKey: ['Wishlist', user?.email, axiosSecure],

        queryFn: async () => {
            const res = await axiosSecure.get(`/wishlist/getwishlist?customerEmail=${user?.email}`)

            return res.data.data.wishListItem
        }
    })


    if (isLoading) {
        return <TextLoader />
    }


    return (
        <div>
            <WishlistBanner />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10'>
                {
                    wishlist?.length > 0 ? 
                    (
                        wishlist?.map((item) =>
                        <Wishlist
                            key={item._id}
                            item={item}
                            refetch={refetch}
                        />
                    )
                    ):

                    <NoWishlist />
                }
            </div>
        </div>
    )
}

export default AllWishlist