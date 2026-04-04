'use client';
import React, { useEffect } from 'react'
import useAuth from './useAuth';
import axiosInstance from '@/lib/axiosInstance';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const useAxiosSecure = () => {
    const {isLoading,isUnauthenticated,token} = useAuth()
    const router = useRouter()
    useEffect(() => {

        if(isLoading) return

        const reqInterceptor = axiosInstance.interceptors.request.use((config) => {
            if(token){
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        })

         const resInterceptor = axiosInstance.interceptors.response.use(
      (res) => res,
      async (err) => {
        const status = err?.response?.status;

        if ((status === 401 || status === 403) && !isUnauthenticated) {
         await signOut({ redirect: false });
          router.push('/login');
        }
        return Promise.reject(err);
      }
    );

         return () => {
        axiosInstance.interceptors.request.eject(reqInterceptor);
        axiosInstance.interceptors.response.eject(resInterceptor);
            
    }; 

    },[isLoading,token,isUnauthenticated,router])

    return axiosInstance;
}

export default useAxiosSecure