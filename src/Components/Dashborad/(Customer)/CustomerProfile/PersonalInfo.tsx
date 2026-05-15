'use client'
import React, { useRef, useState } from 'react'
import InfoModal from './InfoModal';
import type { IPersonalInfoFields } from '@/types/customerProfile.interface';
import { Edit3, Plus, UserPlus } from 'lucide-react';
import useAuth from '@/hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '@/hook/useAxiosSecure';

const PersonalInfo = () => {

  const axiosSecure = useAxiosSecure()

  const { user } = useAuth()

  const modalRef = useRef<HTMLDialogElement>(null);

  const [personalInfoData, setPersonalInfoData] = useState<IPersonalInfoFields | null>(null)

  const {data} = useQuery({

    queryKey: ['personalInfo',user?.email],

    queryFn: async () => {
      const res = await axiosSecure.get(`/users/getPersonalInfo?customerEmail=${user?.email}`)
      setPersonalInfoData(res.data.data)
      return res.data.data
    }
  })

  console.log( 'Personal Data', personalInfoData)

  const handleOpenModal = () => {
    modalRef.current?.showModal();
  }

  const initialDataForModal: IPersonalInfoFields = {
    fullName: personalInfoData?.profile?.fullName || user?.name || '',
    email: personalInfoData?.email || user?.email || '',
    phone: personalInfoData?.phone || '',
    altPhone: personalInfoData?.altPhone || '',
    dateOfBirth: personalInfoData?.dateOfBirth || '',
    gender: personalInfoData?.gender || 'Male',
    nidNumber: personalInfoData?.nidNumber || '',
    occupation: personalInfoData?.occupation || '',
    location: personalInfoData?.location || '',
  };

  return (
    <div className='bg-base-100 rounded-2xl shadow-sm p-5 sm:p-6'>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-lg font-semibold text-base-content'>Personal Information</h2>
        <button onClick={handleOpenModal} className='btn btn-sm btn-ghost text-primary gap-1.5'>
          <Edit3 size={15} /> Edit
        </button>
      </div>

      <div className='flex flex-col items-center justify-center py-10 text-center'>
        <div className='p-4 rounded-full bg-base-200 mb-4'>
          <UserPlus className='w-8 h-8 text-neutral' />
        </div>
        <p className='text-sm font-medium text-base-content'>No personal information added</p>
        <p className='text-xs text-neutral mt-1'>Add your details to complete your profile</p>
        <button onClick={handleOpenModal} className='btn btn-sm btn-primary text-base-100 mt-4 gap-2'>
          <Plus size={15} /> Add Information
        </button>
      </div>

      <InfoModal initialData={initialDataForModal} ref={modalRef} />
    </div>
  )
}

export default PersonalInfo