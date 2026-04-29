'use client'
import useAuth from "@/hook/useAuth";
import useAxiosSecure from "@/hook/useAxiosSecure";
import { IDashboradData } from "@/types/dashborad.interface";
import { createContext, useEffect, useState, type ReactNode, useCallback } from "react"

interface IDashboardContextValue {
    dashboardData: IDashboradData | undefined;
}

export const DashboardContext = createContext<IDashboardContextValue | undefined>(undefined)

const DashboardProvider = ({ children }: { children: ReactNode }) => {

    const { user } = useAuth()

    const axiosSecure = useAxiosSecure()

    const [dashboardData, setDashboardData] = useState<IDashboradData>()
    const [isLoading, setIsLoading] = useState<boolean>(true);


    const getDashboradData = useCallback(async () => {
        if (!user?.email) {
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            const res = await axiosSecure.get(`/dashboard/getDashboradSummary?customerEmail=${user?.email}`);
            const data = res.data.data || {};
            setDashboardData(data);
        } catch (er: any) {
            console.error(er);
        } finally {
            setIsLoading(false);
        }
    }, [user?.email, axiosSecure]);


    useEffect(() => {
        getDashboradData();
    }, [getDashboradData]);

    const DashboradDataInfo = {
        dashboardData,
        isLoading
    };

    return (
        <DashboardContext value={DashboradDataInfo as any}>
            {children}
        </DashboardContext>
    )
}

export default DashboardProvider