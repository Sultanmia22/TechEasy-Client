'use client'
import React, { useRef } from 'react'
import InfoModal from './InfoModal';
import type { IPersonalInfoFields } from '@/types/customerProfile.interface';
import { Edit3, Plus, ShieldCheck, UserPlus, Phone, MapPin, Briefcase, Calendar, CreditCard, User } from 'lucide-react';
import useAuth from '@/hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '@/hook/useAxiosSecure';
import TextLoader from '@/Components/Loading/TextLoader';

const PersonalInfo = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth()
  const modalRef = useRef<HTMLDialogElement>(null);

  const { data: personalInfoData, refetch, isLoading } = useQuery({
    queryKey: ['personalInfo', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/getPersonalInfo?customerEmail=${user?.email}`)
      return res.data.data
    },
    enabled: !!user?.email
  })

  const handleOpenModal = () => {
    modalRef.current?.showModal();
  }

  const initialDataForModal: IPersonalInfoFields = {
    fullName: personalInfoData?.fullName || user?.name || '',
    email: personalInfoData?.email || user?.email || '',
    phone: personalInfoData?.phone || '',
    altPhone: personalInfoData?.altPhone || '',
    dateOfBirth: personalInfoData?.dateOfBirth || '',
    gender: personalInfoData?.gender || 'Male',
    nidNumber: personalInfoData?.nidNumber || '',
    occupation: personalInfoData?.occupation || '',
    location: personalInfoData?.location || '',
  };

  const hasProfileData = personalInfoData?.phone || personalInfoData?.location;



  const infoItems = [
    { label: 'Full Name', value: personalInfoData?.fullName, icon: User },
    { label: 'Email', value: personalInfoData?.email, icon: User },
    { label: 'Phone', value: personalInfoData?.phone, icon: Phone },
    ...(personalInfoData?.altPhone ? [{ label: 'Alt Phone', value: personalInfoData?.altPhone, icon: Phone }] : []),
    { label: 'Location', value: personalInfoData?.location, icon: MapPin },
    { label: 'Occupation', value: personalInfoData?.occupation || 'Not Specified', icon: Briefcase },
    { label: 'Date of Birth', value: personalInfoData?.dateOfBirth || 'Not Specified', icon: Calendar },
    { label: 'Gender', value: personalInfoData?.gender, icon: User },
    ...(personalInfoData?.nidNumber ? [{ label: 'NID Number', value: personalInfoData?.nidNumber, icon: CreditCard }] : []),
  ];

  return (
    <div className='bg-base-100 rounded-2xl shadow-sm p-5 sm:p-6'>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-lg font-semibold text-base-content'>Personal Information</h2>
        {hasProfileData && (
          <button onClick={handleOpenModal} className='btn btn-sm btn-ghost text-primary gap-1.5'>
            <Edit3 size={15} /> Edit
          </button>
        )}
      </div>

      {hasProfileData ? (
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            {infoItems.map((item) => (
              <div key={item.label} className='flex items-center gap-3 p-3 rounded-xl bg-base-200'>
                <div className='p-2 rounded-lg bg-primary/10 shrink-0'>
                  <item.icon className='w-4 h-4 text-primary' />
                </div>
                <div className='min-w-0'>
                  <p className='text-[11px] text-neutral uppercase tracking-wide font-medium'>{item.label}</p>
                  <p className='text-sm font-medium text-base-content truncate'>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Verification */}
          <div className='flex items-center gap-3 mt-4 pt-4 border-t border-base-300'>
            <ShieldCheck className='w-5 h-5 text-secondary' />
            <div className='flex-1'>
              <p className='text-sm font-medium text-base-content'>Account Verification</p>
              <p className='text-xs text-neutral'>Email and phone number are verified</p>
            </div>
            <span className='badge badge-sm bg-secondary/10 text-secondary border-0'>Verified</span>
          </div>
        </div>
      ) : (
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
      )}

      <InfoModal refetch={refetch} initialData={initialDataForModal} ref={modalRef} />
    </div>
  )
}

export default PersonalInfo;