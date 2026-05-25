import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useDashboardData = () => {
    const { user, token, isLoading: isAuthLoading } = useAuth()
    const axiosSecure = useAxiosSecure()
    
     return useQuery({
        queryKey: ['dashboard-data', user?.email, user?.role],
        queryFn: async () => {
            const res = await axiosSecure.get(`/dashboard/getDashboradSummary?email=${user?.email}`)
            return res.data.data;
        },
        enabled: !!user?.email && !!token && !isAuthLoading,
    })
}

export default useDashboardData