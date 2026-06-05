'use client'
import { DashboardContext } from '@/Providers/DashboardProvider'
import { useContext } from 'react'

const useDashboardContent = () => {

  const dashboardContent = useContext(DashboardContext)

  if (!dashboardContent) {
    throw new Error('useDashboardContent must be used within a DashboardProvider');
  }

  return dashboardContent
}

export default useDashboardContent