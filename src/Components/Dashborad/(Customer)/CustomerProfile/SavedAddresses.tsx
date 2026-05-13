import React from 'react'
import { Home, Building2, Phone, Edit3, Plus } from 'lucide-react'

const addresses = [
  {
    id: 1,
    type: 'Home',
    icon: Home,
    name: 'MD Sultan Mia',
    phone: '+880 1712-345678',
    address: 'House 12, Road 5, Dhanmondi',
    city: 'Dhaka - 1205',
    country: 'Bangladesh',
    isDefault: true,
  },
  {
    id: 2,
    type: 'Office',
    icon: Building2,
    name: 'MD Sultan Mia',
    phone: '+880 1712-345678',
    address: 'Level 8, ABC Tower, Gulshan-2',
    city: 'Dhaka - 1212',
    country: 'Bangladesh',
    isDefault: false,
  },
]

const SavedAddresses = () => {
  return (
    <div className='bg-base-100 rounded-2xl shadow-sm p-5 sm:p-6'>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-lg font-semibold text-base-content'>Saved Addresses</h2>
        <button className='btn btn-sm btn-ghost text-primary gap-1.5'>
          <Plus size={15} /> Add New
        </button>
      </div>

      
    </div>
  )
}

export default SavedAddresses