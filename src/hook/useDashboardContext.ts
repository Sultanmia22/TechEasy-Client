'use client'
import { DashboardContext } from '@/Providers/DashboardProvider'
import { use } from 'react'

const useDashboardContent = () => {

  const dashboardContent = use(DashboardContext)

  if (!dashboardContent) {
    throw new Error('useDashboardContent must be used within a DashboardProvider');
  }

  return dashboardContent
}

export default useDashboardContent