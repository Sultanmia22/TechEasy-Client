'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'

import TextLoader from '../Loading/TextLoader'
import { toast } from 'react-toastify'
import { useState } from 'react'

const GoogleSignIn = () => {

  const router = useRouter()

  const [loading,setLoading] = useState<boolean>(false)

  const { status } = useSession()

  const handleGoolgSignIn = async () => {
    setLoading(true)
     try{
        const res = await signIn('google',{
          redirect: false,
        })

        if(res?.ok){
          setLoading(false)
          router.push('/')
          router.refresh()
        }

        if (res?.error) {
        setLoading(false);
        toast.error(res.error)  
        console.error("Login Error:", res.error);
        return;
      }
     }

     catch(er:any){
      setLoading(false);
      toast.error('Something went wrong!')
     }
  }

  if(loading){
    return <TextLoader />
  }

  return (
     <button
            onClick={() => handleGoolgSignIn()}
            type="button" 
            className="btn btn-outline w-full h-12 gap-3 text-base font-semibold hover:bg-base-200 transition-all mb-6"
          >
            <FcGoogle size={24} />
            Continue with Google
          </button>
  )
}

export default GoogleSignIn