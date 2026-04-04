'use client'
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

const useAuth = () => {
    const {data:session,status} = useSession()

    return {
        session,
        user : session?.user,
        token: session?.user?.accessToken || null,
        isLoading : status === 'loading',
        isAuthenticated : status === 'authenticated',
        isUnauthenticated : status === 'unauthenticated',
        signOut
    }
}

export default useAuth