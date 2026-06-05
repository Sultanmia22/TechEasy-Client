import React from 'react'
import { MoreVertical, ShieldCheck, User } from 'lucide-react'
import axios from 'axios';
import { toast } from 'react-toastify';
import useAuth from '@/hook/useAuth';
import useAxiosSecure from '@/hook/useAxiosSecure';

const roles = [
    { label: 'Admin', value: 'admin', icon: ShieldCheck },
    { label: 'Customer', value: 'customer', icon: User },
];

const UserActionDropdown = ({ email }: { email: string }) => {

    const {role} = useAuth()

    const axiosSecure = useAxiosSecure()

    // HanldeChange Role by Admin 
    const handleChangeRole = async ({ email, newRole }: { email: string, newRole: string }) => {
        try {
            if(role !== 'admin') {
                toast.error('You are unauthorized update this role')
                return
            }

            const requestData = {
                email,
                newRole
            }

            const res = await axiosSecure.patch('/users/updateRole',requestData)

            if(res.status === 200 && res.data.success === true){

                toast.success(res.data.message);

            }
        }
        catch (er: unknown) {
            if (axios.isAxiosError(er)) {
                const errorMessage = er.response?.data?.message || "Something went wrong!";
                toast.error(errorMessage);
                console.log('Handle Change Role ERRROR:', errorMessage)
            }
            else if (er instanceof Error) {
                toast.error(er.message);
                console.log('Handle Change Role ERRROR:', er.message)
            }

            else {
                toast.error("An unexpected error occurred.");
                console.log('An unexpected error occurred.')
            }
        }
    }

    return (
        <div className='flex items-center gap-2'>
            <div className='dropdown dropdown-top  dropdown-end'>
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
                                    onClick={() => {
                                        handleChangeRole({
                                            email: email,
                                            newRole: role?.value
                                        });
                                        (document.activeElement as HTMLElement)?.blur();                                        
                                    }}
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