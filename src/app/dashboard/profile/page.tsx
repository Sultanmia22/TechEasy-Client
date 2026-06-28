'use client'
import AdminProfile from '@/Components/Dashborad/(Admin)/AdminProfile/AdminProfile'
import CustomerProfile from '@/Components/Dashborad/(Customer)/CustomerProfile/CustomerProfile'
import TextLoader from '@/Components/Loading/TextLoader'
import useAuth from '@/hook/useAuth'
import React from 'react'

const Profile = () => {

  const { role ,isLoading} = useAuth()

  if(isLoading){
    return <TextLoader />
  }

  return (
    <div className='w-full min-h-screen'>
      {
        role === 'customer' ?
          <>
            <section>
              <CustomerProfile />
            </section>

          </>

          :

          <>
            <section>
              <AdminProfile />
            </section>
          </>
      }

    </div>
  )
}

export default Profile