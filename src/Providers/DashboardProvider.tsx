'use client'
import useAuth from "@/hook/useAuth";
import useAxiosSecure from "@/hook/useAxiosSecure";
import { createContext, useEffect, useState, type ReactNode } from "react"

export const DashboardContext = createContext(null)

const DashboardProvider = ({ children }: { children: ReactNode }) => {

    const { user } = useAuth()

    const axiosSecure = useAxiosSecure()

     const [dashboardData, setDashboardData] = useState(null)

    useEffect(() => {
        const getDashboradData = async () => {
            try {
                const res = await axiosSecure.get(`/dashboard/getDashboradSummary?customerEmail=${user?.email}`)
                const data = res.data.data || {}
                setDashboardData(data)
            }
            catch (er: any) {
                console.log(er)
            }

        }
        getDashboradData()
    }, [user?.email,axiosSecure])


    const DashboradDataInfo = {
        dashboardData,
    };

   return (
        <DashboardContext value={DashboradDataInfo as any}>
            {children}
        </DashboardContext>
    )
}

export default DashboardProvider