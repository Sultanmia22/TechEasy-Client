'use client'
import React, { useRef, useState } from 'react'
import { Briefcase, Edit3, Home, MapPinOff, Phone, Plus, Trash2 } from 'lucide-react'
import AddressModalUI from './AddressModalUI'
import { useQuery } from '@tanstack/react-query'
import useAuth from '@/hook/useAuth'
import useAxiosSecure from '@/hook/useAxiosSecure'
import TextLoader from '@/Components/Loading/TextLoader'
import type { IAddressFields } from '@/types/customerProfile.interface'
import { toast } from 'react-toastify'


const SavedAddresses = () => {

  const { user } = useAuth()

  const axiosSecure = useAxiosSecure()

  const addressmodalRef = useRef<HTMLDialogElement>(null);

  const [selectedAddress, setSelectedAddress] = useState<IAddressFields | null>(null);

  const handleOpenModal = (addr: IAddressFields | null = null) => {
    setSelectedAddress(addr)
    addressmodalRef.current?.showModal();
  }

  const { data: address = [], isLoading, refetch } = useQuery<IAddressFields[]>({
    queryKey: ['address', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/getAddress?customerEmail=${user?.email}`)
      return res?.data?.data
    }
  })

  const initialAddressData: IAddressFields = selectedAddress || {
    type: 'Home',
    name: user?.name || '',
    phone: '',
    address: '',
    city: '',
    country: 'Bangladesh',
    isDefault: false,
  };

  // console.log('selectedAddress', selectedAddress)

  const handleDeleteAddress = async (type: string) => {
    try {
      const res = await axiosSecure.delete(`/users/deleteAddress?customerEmail=${user?.email}&type=${type}`)

      if (res.status === 200 && res.data.success === true) {
        refetch()
        toast.success(res.data.message)
      }
    }
    catch (er: any) {
      console.log(er)
      const errorMessage =er.response?.data?.message ||er.message ||"Something went wrong!"
      toast.error(errorMessage)
    }

    
  }


  return (
    <div className='bg-base-100 rounded-2xl shadow-sm p-5 sm:p-6'>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-lg font-semibold text-base-content'>Saved Addresses</h2>
        <button onClick={() => handleOpenModal(null)} className='btn btn-sm btn-ghost text-primary gap-1.5'>
          <Plus size={15} /> Add New
        </button>
      </div>
      {
        address.length === 0 ? (
          <div className='flex flex-col items-center justify-center py-10 text-center'>
            <div className='p-4 rounded-full bg-base-200 mb-4'>
              <MapPinOff className='w-8 h-8 text-neutral' />
            </div>
            <p className='text-sm font-medium text-base-content'>No saved addresses</p>
            <p className='text-xs text-neutral mt-1'>Add an address for faster checkout</p>
            <button onClick={() => handleOpenModal(null)} className='btn btn-sm btn-primary mt-4 gap-2'>
              <Plus size={15} /> Add Address
            </button>
          </div>
        )
          :
          <div className='space-y-3'>
            {
              address.map((addr, index) => {
                const AddressIcon = addr.type === 'Office' ? Briefcase : Home;

                return (
                  <div key={addr.id || index} className='flex items-start gap-4 p-4 rounded-xl bg-base-200 group'>
                    <div className='p-2.5 rounded-lg bg-primary/10 shrink-0'>
                      <AddressIcon className='w-4 h-4 text-primary' />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <div className='flex items-center gap-2 mb-1'>
                        <span className='text-sm font-semibold text-base-content'>{addr.type} Address</span>
                        {addr.isDefault && (
                          <span className='badge badge-xs bg-secondary/10 text-secondary border-0'>Default</span>
                        )}
                      </div>
                      <p className='text-sm font-medium text-base-content'>{addr.name}</p>
                      <p className='text-sm text-neutral'>{addr.address}</p>
                      <p className='text-sm text-neutral'>{addr.city}, {addr.country}</p>
                      <p className='text-sm text-neutral flex items-center gap-1 mt-1'>
                        <Phone size={13} /> {addr.phone}
                      </p>
                    </div>
                    <div className='flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity'>

                      <button
                        onClick={() => handleOpenModal(addr)}
                        className='btn btn-sm btn-ghost text-neutral hover:text-primary p-1.5'
                        title="Edit Address"
                      >
                        <Edit3 size={15} />
                      </button>


                      <button
                        onClick={() => handleDeleteAddress(addr.type)}
                        className='btn btn-sm btn-ghost text-neutral hover:text-error hover:bg-error/10 p-1.5'
                        title="Delete Address"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                )
              })
            }
          </div>
      }


      <AddressModalUI
        key={selectedAddress?.id || selectedAddress?.type || 'new'}
        initialData={initialAddressData} ref={addressmodalRef} 
        refetch={refetch}
        />
    </div>
  )
}

export default SavedAddresses