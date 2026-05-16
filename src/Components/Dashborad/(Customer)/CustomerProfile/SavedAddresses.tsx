'use client'
import React, { useRef } from 'react'
import { MapPinOff, Plus } from 'lucide-react'
import AddressModalUI from './AddressModalUI'

const SavedAddresses = () => {

  const addressmodalRef = useRef<HTMLDialogElement>(null);

   const handleOpenModal = () => {
    addressmodalRef.current?.showModal();
  }

  return (
    <div className='bg-base-100 rounded-2xl shadow-sm p-5 sm:p-6'>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-lg font-semibold text-base-content'>Saved Addresses</h2>
        <button className='btn btn-sm btn-ghost text-primary gap-1.5'>
          <Plus size={15} /> Add New
        </button>
      </div>

      <div className='flex flex-col items-center justify-center py-10 text-center'>
        <div className='p-4 rounded-full bg-base-200 mb-4'>
          <MapPinOff className='w-8 h-8 text-neutral' />
        </div>
        <p className='text-sm font-medium text-base-content'>No saved addresses</p>
        <p className='text-xs text-neutral mt-1'>Add an address for faster checkout</p>
        <button onClick={handleOpenModal} className='btn btn-sm btn-primary mt-4 gap-2'>
          <Plus size={15} /> Add Address
        </button>
      </div>

      <AddressModalUI  ref={addressmodalRef} />
    </div>
  )
}

export default SavedAddresses