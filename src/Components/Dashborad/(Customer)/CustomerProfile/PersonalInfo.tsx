import React, { useRef } from 'react'
import {
  User, Mail, Phone, Briefcase, Flag, Calendar, ShieldCheck, Edit3,
  UserPlus,
  Plus,
} from 'lucide-react'
import InfoModal from './InfoModal';


const personalInfo = [
  { icon: User, label: 'Full Name', value: 'MD Sultan Mia' },
  { icon: Mail, label: 'Email', value: 'sultanmia5732@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+880 1712-345678' },
  { icon: Briefcase, label: 'Occupation', value: 'Software Engineer' },
  { icon: Flag, label: 'Gender', value: 'Male' },
  { icon: Calendar, label: 'Member Since', value: 'January 2026' },
]

const PersonalInfo = () => {

  const modalRef = useRef(null);

  const handleOpenModal = () => {
    modalRef.current?.showModal();
  }

  return (
    <div className='bg-base-100 rounded-2xl shadow-sm p-5 sm:p-6'>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-lg font-semibold text-base-content'>Personal Information</h2>
        <button className='btn btn-sm btn-ghost text-primary gap-1.5'>
          <Edit3 size={15} /> Edit
        </button>
      </div>

      <div className='flex flex-col items-center justify-center py-10 text-center'>
        <div className='p-4 rounded-full bg-base-200 mb-4'>
          <UserPlus className='w-8 h-8 text-neutral' />
        </div>
        <p className='text-sm font-medium text-base-content'>No personal information added</p>
        <p className='text-xs text-neutral mt-1'>Add your details to complete your profile</p>
        <button onClick={handleOpenModal} className='btn btn-sm btn-primary mt-4 gap-2'>
          <Plus size={15} /> Add Information
        </button>
      </div>
      
      <InfoModal  ref={modalRef}/>
    </div>
  )
}

export default PersonalInfo