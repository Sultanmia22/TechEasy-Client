'use client'
import useDashboardData from "@/hook/useDashboardData";
import { IDashboardAdminData } from "@/types/dashboardAdmin.interface";
import { IDashboradCustomerData } from "@/types/dashboradCustomer.interface";
import { createContext,  type ReactNode} from "react"

type DashboardData = IDashboardAdminData | IDashboradCustomerData;

interface IDashboardContextValue {
    dashboardData: DashboardData | undefined;
    isLoading: boolean; 
    refetch: () => Promise<unknown>
}

export const DashboardContext = createContext<IDashboardContextValue | undefined>(undefined)

const DashboardProvider = ({ children }: { children: ReactNode }) => {

    const { data: dashboardData, isLoading , refetch} = useDashboardData()

    const dashboardContextValue: IDashboardContextValue = {
        dashboardData,
        isLoading,
        refetch
    }

    return (
        <DashboardContext.Provider value={dashboardContextValue}>
            {children}
        </DashboardContext.Provider>
    )
}

export default DashboardProvider