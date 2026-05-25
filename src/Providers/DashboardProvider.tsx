'use client'
import useDashboardData from "@/hook/useDashboardData";
import { IDashboardAdminData } from "@/types/dashboardAdmin.interface";
import { IDashboradCustomerData } from "@/types/dashboradCustomer.interface";
import { createContext,  type ReactNode} from "react"

type DashboardData = IDashboardAdminData | IDashboradCustomerData;

interface IDashboardContextValue {
    dashboardData: DashboardData | undefined;
    isLoading: boolean; 
}

export const DashboardContext = createContext<IDashboardContextValue | undefined>(undefined)

const DashboardProvider = ({ children }: { children: ReactNode }) => {

    const { data: dashboardData, isLoading } = useDashboardData()

    console.log('Dashborad Data',dashboardData)

    const dashboardContextValue: IDashboardContextValue = {
        dashboardData,
        isLoading
    };;

    return (
        <DashboardContext value={dashboardContextValue}>
            {children}
        </DashboardContext>
    )
}

export default DashboardProvider