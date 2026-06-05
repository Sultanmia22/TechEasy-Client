import React from 'react'
import UserActionDropdown from './UserActionDropdown'
import Image from 'next/image'

interface RecentUser {
  _id: string
  name: string
  email: string
  image: string
  createdAt: string
}

const recentUsers: RecentUser[] = [
  {
    _id: '6a08c5f9e638b229c50cb903',
    name: 'Sultan Mia',
    email: 'sultanmia5732@gmail.com',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocImQLBsAinNarWUCssNZlncQE_qpY_sIThLlDOLzAGHzq77-TQ=s96-c',
    createdAt: '2026-05-16T19:31:05.634Z',
  },
  {
    _id: '6a08c5f9e638b229c50cb904',
    name: 'Nadia Akter',
    email: 'nadia.akter@gmail.com',
    image: '',
    createdAt: '2026-05-15T10:22:14.123Z',
  },
  {
    _id: '6a08c5f9e638b229c50cb905',
    name: 'Rahat Hossain',
    email: 'rahat.hossain@gmail.com',
    image: '',
    createdAt: '2026-05-14T08:45:30.000Z',
  },
  {
    _id: '6a08c5f9e638b229c50cb906',
    name: 'Karim Uddin',
    email: 'karim.uddin@gmail.com',
    image: '',
    createdAt: '2026-05-13T15:10:55.400Z',
  },
  {
    _id: '6a08c5f9e638b229c50cb907',
    name: 'Sumaiya Islam',
    email: 'sumaiya.islam@gmail.com',
    image: '',
    createdAt: '2026-05-12T09:00:00.000Z',
  },
]

const avatarColors = [
  'bg-primary',
  'bg-accent',
  'bg-secondary',
  'bg-primary/70',
  'bg-accent/70',
]

const RecentUser = () => {
  return (
    <div className='bg-base-100 border border-base-300 rounded-2xl overflow-hidden'>

      {/* Header */}
      <div className='flex items-center justify-between px-5 py-4 border-b border-base-300'>
        <h3 className='text-sm font-semibold text-base-content'>Recent Customers</h3>
        <button className='text-xs font-medium text-primary hover:underline'>
          View all →
        </button>
      </div>

      {/* ── Desktop Table ── */}
      <div className='hidden md:block overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='bg-base-200'>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>No.</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Customer</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Email</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Joined</th>
              <th className='text-left text-[11px] font-semibold text-neutral uppercase tracking-wider px-5 py-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {recentUsers.map((user, i) => (
              <tr
                key={user._id}
                className='border-t border-base-300 hover:bg-base-200 transition-colors'
              >
                {/* No. */}
                <td className='px-5 py-3 text-sm font-medium text-primary'>
                  {i + 1}
                </td>

                {/* Customer */}
                <td className='px-5 py-3'>
                  <div className='flex items-center gap-3'>
                    {user.image ? (
                      <Image
                        width={100}
                        height={100}
                        src={user.image}
                        alt={user.name}
                        className='w-8 h-8 rounded-full object-cover flex-shrink-0'
                      />
                    ) : (
                      <div className={`w-8 h-8 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0`}>
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <span className='text-sm font-medium text-base-content'>
                      {user.name}
                    </span>
                  </div>
                </td>

                {/* Email */}
                <td className='px-5 py-3 text-sm text-neutral'>
                  {user.email}
                </td>

                {/* Joined */}
                <td className='px-5 py-3 text-sm text-neutral'>
                  {new Date(user.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </td>

                {/* Joined */}
                 <td className='px-5 py-3 relative overflow-visible'>
                  <UserActionDropdown />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Mobile Cards ── */}
      <div className='md:hidden divide-y divide-base-300'>
  {recentUsers.map((user, i) => (
    <div key={user._id} className='flex items-center gap-3 px-4 py-3'>
      
      {/* Avatar */}
      {user.image ? (
        <Image
         width={100}
         height={100}
          src={user.image}
          alt={user.name}
          className='w-9 h-9 rounded-full object-cover shrink-0'
        />
      ) : (
        <div className={`w-9 h-9 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-sm font-bold text-white flex-shrink-0`}>
          {user.name.charAt(0).toUpperCase()}
        </div>
      )}

      {/* Info */}
      <div className='flex-1 min-w-0'>
        <p className='text-sm font-medium text-base-content'>{user.name}</p>
        <p className='text-[11px] text-neutral truncate mt-0.5'>{user.email}</p>
      </div>

      {/* Action (বাটন অথবা আইকন) */}
      <div className='flex items-center gap-2'>
        <span className='text-[10px] text-neutral hidden sm:block'>
          {new Date(user.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}
        </span>
        
        <div className='flex items-center gap-2'>
          <UserActionDropdown />
           <button className='text-sm text-red-500 '>Delete</button> 
        </div>
      </div>
      
    </div>
  ))}
</div>

    </div>
  )
}

export default RecentUser