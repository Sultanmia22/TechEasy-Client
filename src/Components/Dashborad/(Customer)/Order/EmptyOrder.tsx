import React from 'react'
import { FaBoxOpen } from 'react-icons/fa'

const EmptyOrder = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10 opacity-50">
            <span className="text-4xl mb-2"> <FaBoxOpen size={24} /> </span>
            <p className="">You haven't placed any orders yet.!</p>
        </div>
    )
}

export default EmptyOrder