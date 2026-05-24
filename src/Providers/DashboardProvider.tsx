'use client'
import useDashboardData from "@/hook/useDashboardData";
import { IDashboradData } from "@/types/dashborad.interface";
import { createContext,  type ReactNode} from "react"

interface IDashboardContextValue {
    dashboardData: IDashboradData | undefined;
}

export const DashboardContext = createContext<IDashboardContextValue | undefined>(undefined)

const DashboardProvider = ({ children }: { children: ReactNode }) => {

    const {data:dashboardData={},isLoading} = useDashboardData()

    console.log('Dashboard Data',dashboardData)

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