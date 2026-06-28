'use client'
import React from 'react'
import UserActionDropdown from './UserActionDropdown'
import Image from 'next/image'

interface RecentUser {
  _id: string
  name: string
  email: string
  image: string
  createdAt: string
  status: string
}

interface IRecentOrderProps {
  recentUsers: RecentUser[]
  refetch: () => void
}

const avatarColors = [
  'bg-primary',
  'bg-accent',
  'bg-secondary',
  'bg-primary/70',
  'bg-accent/70',
]

const RecentUser = ({ recentUsers ,refetch}: IRecentOrderProps) => {

  return (
    <div className='bg-base-100 border border-base-300 rounded-2xl '>

      {/* Header */}
      <div className='flex items-center justify-between px-5 py-4 border-b border-base-300'>
        <h3 className='text-sm font-semibold text-base-content'>Recent Customers</h3>
        <button className='text-xs font-medium text-primary hover:underline'>
          View all →
        </button>
      </div>

      {/* ── Desktop Table ── */}
      <div className='hidden md:block overflow-x-visible'>
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
                        className='w-8 h-8 rounded-full object-cover shrink-0'
                      />
                    ) : (
                      <div className={`w-8 h-8 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-[11px] font-bold text-white shrink-0`}>
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
                  <UserActionDropdown email={user?.email} currentStatus={user?.status} refetch={refetch}/>
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
                <UserActionDropdown email={user?.email} currentStatus={user?.status} refetch={refetch}/>
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