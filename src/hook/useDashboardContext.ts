'use clinet'
import { DashboardContext } from '@/Providers/DashboardProvider'
import { use } from 'react'

const useDashboardContent = () => {

  const dashboardContent = use(DashboardContext)

  return dashboardContent
}

export default useDashboardContent