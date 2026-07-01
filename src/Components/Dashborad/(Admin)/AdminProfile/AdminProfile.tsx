import React from 'react'
import AdminProfileHeader from './AdminProfileHeader'
import AccountOverview from './AccountOverview'
import QuickAction from './QuickAction'

const AdminProfile = () => {
  return (
    <div className='flex flex-col gap-10'>
      <section>
        <AdminProfileHeader />
      </section>

      <section>
        <AccountOverview />
      </section>

      <section>
        <QuickAction />
      </section>
    </div>
  )
}

export default AdminProfile