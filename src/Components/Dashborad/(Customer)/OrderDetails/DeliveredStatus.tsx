import React from 'react'
import { Check, ArrowRight, MoveUpRight, PackageCheck } from 'lucide-react'
interface IorderStatus {
    orderStatus: [string]
}
const DeliveredStatus = ({orderStatus}:IorderStatus) => {
    const deliverIconAndTitle = [
        { title: 'Confirmed', icon: Check },
        { title: 'Paid', icon: Check },
        { title: 'Pending', icon: ArrowRight },
        { title: 'Shipped', icon: MoveUpRight },
        { title: 'Delivered', icon: PackageCheck },
    ]    

    return (
        
            <div className='grid grid-cols-5 gap-5 mt-5'>
            {deliverIconAndTitle.map((item, index) => {
                const active = orderStatus?.includes(item.title.toLowerCase());
                
                return (
                    <div key={index} className='flex flex-col items-center'>
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                            active ? 'border-primary bg-primary text-white' : 'border-gray-300 text-gray-400'
                        }`}>
                            <item.icon size={16} />
                        </span>
                        <p className={`text-xs mt-1 ${active ? 'text-primary font-bold' : 'text-gray-500'}`}>
                            {item.title}
                        </p>
                    </div>
                );
            })}
        </div>
    )
}

export default DeliveredStatus