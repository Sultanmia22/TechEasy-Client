'use client'
import React from 'react';
import { MoreVertical, CheckCircle2, Truck, XCircle, Clock } from 'lucide-react';
import { toast } from 'react-toastify';
import useAuth from '@/hook/useAuth';
import useAxiosSecure from '@/hook/useAxiosSecure';
import { useQueryClient } from '@tanstack/react-query';


interface orderActionDropdownProps {
    status: string;
    orderId: string;
    customerEmail: string;
    refetch: () => Promise<unknown>;
}

type OrderStatus = 'pending' | 'confirm' | 'shipping' | 'delivered' | 'cancelled';

interface UpdateStatusParams {
    orderId: string;
    status: OrderStatus;
    email: string;
}

const OrderActionDropdown = ({ status, orderId, customerEmail, refetch }: orderActionDropdownProps) => {

    const { role } = useAuth()

    const axisoSecure = useAxiosSecure()
    const queryClient = useQueryClient()

    // console.log('Role', role)

    const actions = [
        { label: 'Pending', value: 'pending', icon: Clock },
        { label: 'Confirm', value: 'confirm', icon: CheckCircle2 },
        { label: 'Shipping', value: 'shipping', icon: Truck },
        { label: 'Delivered', value: 'delivered', icon: CheckCircle2 },
        { label: 'Cancelled', value: 'cancelled', icon: XCircle },
    ];

    // handle action click
    const handleActionClick = async ({ orderId, status, email }: UpdateStatusParams) => {
        console.log('🔵 Dropdown clicked:', { orderId, status, email })
       
        try {
            if (role !== 'admin') {
                toast.error('Your are not authorized update this role')
                return
            }

            const actionData = {
                orderId,
                deliveryStatus: status,
                email
            }

            const res = await axisoSecure.patch(`/order/updateDeliveryStatus`,actionData)


            if (res.status === 200 && res.data.success === true) {

                await queryClient.invalidateQueries({ 
                    queryKey: ['dashboard-data'] 
                })

                await refetch()

                toast.success('Status updated successfully!')
            }
               
        }
        catch (err: unknown) {
            console.log('💥 Error caught:', err)
            toast.error('Failed to update delivery status')
        }
    }


    return (
        <div className='dropdown dropdown-top  dropdown-end'>
            <div tabIndex={0} role="button" className={`btn btn-sm btn-ghost `}>
                <MoreVertical size={18} />
            </div>

            <ul className='dropdown-content space-y-1 z-20 menu p-2 shadow bg-base-100 rounded-box w-40 border border-base-200'>
                {
                    actions.map((action) =>
                        <li key={action.value}>
                            <button
                               onClick={() => {
                                handleActionClick({
                                  orderId: orderId,
                                  status: action.value as OrderStatus,
                                  email: customerEmail,
                                });
                                (document.activeElement as HTMLElement)?.blur();
                              }}
                                type='button'
                                className={`flex items-center gap-2 w-full text-left ${status === action.value ? 'bg-primary text-primary-content' : ''}`}
                            >
                                <action.icon size={16} />
                                {action.label}
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default OrderActionDropdown;