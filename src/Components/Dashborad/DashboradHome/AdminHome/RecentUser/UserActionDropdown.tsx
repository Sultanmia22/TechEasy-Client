import React from 'react'
import { MoreVertical, ShieldCheck, User } from 'lucide-react'

const UserActionDropdown = () => {

    const roles = [
        { label: 'Admin', value: 'admin', icon: ShieldCheck },
        { label: 'Customer', value: 'customer', icon: User },
    ];

    return (
        <div className='flex items-center gap-2'>
            <div className='dropdown  dropdown-end'>
                <div tabIndex={0} role="button" className={`btn btn-sm btn-ghost `}>
                    <MoreVertical size={18} />
                </div>

                <ul className='dropdown-content space-y-1 z-20 menu p-2 shadow bg-base-100 rounded-box w-40 border border-base-200'>
                    <div className='border-b border-gray-200 pb-2'>
                        <h5 className='font-semibold'>Change Role</h5>
                    </div>
                    {
                        roles.map((role) =>
                            <li key={role.value}>
                                <button
                                    type='button'
                                    className={`flex items-center gap-2 w-full text-left}`}
                                >
                                    <role.icon size={16} />
                                    {role.label}
                                </button>
                            </li>
                        )
                    }
                </ul>
            </div>

            <div>
                <button onClick={() => alert('Delete Button Clicked')} className='text-sm text-red-500 cursor-pointer '>Delete</button>
            </div>
        </div>
    )
}

export default UserActionDropdown