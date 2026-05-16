
import ProfileHeaders from './ProfileHeders'
import PersonalInfo from './PersonalInfo'
import SavedAddresses from './SavedAddresses'

const CustomerProfile = () => {


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