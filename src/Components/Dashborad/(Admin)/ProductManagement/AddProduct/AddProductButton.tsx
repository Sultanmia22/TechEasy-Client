import { CirclePlus } from 'lucide-react'
import React from 'react'

const AddProductButton = () => {
    return (
        <div>
            <button className='flex justify-center items-center gap-2 w-full py-2.5 bg-primary text-primary-content text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity'>
                <span><CirclePlus /> </span> <span>Add Product</span>
            </button>
        </div>
    )
}

export default AddProductButton