'use client'
import React, { useState } from 'react'
import ProfileHeaders from './ProfileHeders'
import PersonalInfo from './PersonalInfo'
import SavedAddresses from './SavedAddresses'

const CustomerProfile = () => {

  const [personalInfo, setPersonalInfo] = useState(null)
  const [addresses, setAddresses] = useState([])

  return (
    <div className='flex flex-col gap-10'>
      {/* Profile Header */}
      <ProfileHeaders 
      
      />

      <PersonalInfo 
      />

      <SavedAddresses 
      />
    </div>
  )
}

export default CustomerProfile