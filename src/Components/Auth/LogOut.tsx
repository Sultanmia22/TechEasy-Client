import React from 'react'
import { signOut } from "next-auth/react"
import { toast } from 'react-toastify'

const handleLogOut = async () => {
  try{
    const res = await signOut()
    toast.success('Logout Successfully!')
  }
  catch(er:any){
  toast.error(er.message)
  }
}

const LogOut = () => {
  return (
    <button onClick={() => handleLogOut()} className='flex items-center px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-all duration-200 w-full'>
    Logout
    </button>
  )
}

export default LogOut