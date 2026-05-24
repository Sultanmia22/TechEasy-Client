import React from 'react'
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useDashboardData = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    
     return useQuery({
        queryKey: ['dashboard-data', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/dashboard/getDashboradSummary?customerEmail=${user?.email}`)
            return res.data.data;
        },
        enabled: !!user?.email,
    })
}

export default useDashboardData