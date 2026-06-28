'use client'
import React from 'react'
import CustomerManageBanner from './CustomerManageBanner'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '@/hook/useAxiosSecure'
import TextLoader from '@/Components/Loading/TextLoader'
import RecentUser from '../../DashboradHome/AdminHome/RecentUser/RecentUser'

const ManageCustomer = () => {

  const axiosSecure = useAxiosSecure()

  const {data:allUsers=[],refetch,isLoading} = useQuery({

    queryKey: ['allUsers'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users/allUser')
      return res.data.data
    }

  })

  console.log('All Users:',allUsers)

  if(isLoading){
    return <TextLoader />
  }

  return (
    <div className='flex flex-col gap-10'>
        <section>
            <CustomerManageBanner />
        </section>

        <section>
           <RecentUser recentUsers={allUsers} refetch={refetch}/>
        </section>
    </div>
  )
}

export default ManageCustomer