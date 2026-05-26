'use client'
import React from 'react';
import { MoreVertical, CheckCircle2, Truck, XCircle, Clock } from 'lucide-react';



const OrderActionDropdown = () => {

    const actions = [
        { label: 'Pending', value: 'pending', icon: Clock },
        { label: 'Confirm', value: 'confirm', icon: CheckCircle2 },
        { label: 'Shipping', value: 'shipping', icon: Truck },
        { label: 'Delivered', value: 'delivered', icon: CheckCircle2 },
        { label: 'Cancelled', value: 'cancelled', icon: XCircle },
    ];

    return (
        <div className='dropdown dropdown-bottom dropdown-end'>
            <div tabIndex={0} role="button" className={`btn btn-sm btn-ghost`}>
                <MoreVertical size={18} />
            </div>

            <ul className='dropdown-content z-20 menu p-2 shadow bg-base-100 rounded-box w-40 border border-base-200'>
                {
                    actions.map((action) => 
                        <li key={action.value}>
                            <button
                            type='button'
                            className={`flex items-center gap-2 w-full text-left`}
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