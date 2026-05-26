'use client'
import React from 'react';
import { Check, ArrowRight, PackageCheck } from 'lucide-react';
import { LuClock } from 'react-icons/lu';

interface IOrderStatus {
    delivaryStatus: string[]; 
}

const DeliveredStatus = ({ delivaryStatus }: IOrderStatus) => {
    const steps = [
        { title: 'pending', icon: LuClock },
        { title: 'confirm', icon: Check },
        { title: 'shipping', icon: ArrowRight },
        { title: 'delivered', icon: PackageCheck },
    ];

    return (
        <div className="flex justify-between items-start mt-8 w-full max-w-2xl mx-auto">
            {steps.map((item, index) => {
                const active = delivaryStatus?.some(
                    (status) => status.toLowerCase() === item.title.toLowerCase()
                );

                return (
                    <div key={index} className="flex flex-col items-center flex-1 relative">
                        
                        {index < steps.length - 1 && (
                            <div className={`absolute top-4 left-[60%] w-full h-[2px] ${active ? 'bg-primary' : 'bg-gray-200'}`} />
                        )}

                       
                        <span
                            className={`w-8 h-8 rounded-full flex items-center justify-center border z-10 transition-colors duration-300 ${
                                active 
                                    ? 'border-primary bg-primary text-white' 
                                    : 'border-gray-300 bg-white text-gray-400'
                            }`}
                        >
                            <item.icon size={16} />
                        </span>

                        {/* টাইটেল */}
                        <p className={`text-[10px] mt-2 uppercase font-semibold ${active ? 'text-primary' : 'text-gray-400'}`}>
                            {item.title}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default DeliveredStatus;