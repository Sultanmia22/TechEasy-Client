'use client'
import React from 'react'
import CustomerHome from './CustomerHome/CustomerHome';
import useAuth from '@/hook/useAuth';
import AdminHome from './AdminHome/AdminHome';

const DashboardHome = () => {
  const {user} = useAuth()

  const isRole = user?.role || 'customer'
 
  return (
    <div>
      {
        isRole === 'customer' ? 
        (
          <CustomerHome />
        )
        :
        (
          <AdminHome />
        )
      }
        
    </div>
  )
}

export default DashboardHome