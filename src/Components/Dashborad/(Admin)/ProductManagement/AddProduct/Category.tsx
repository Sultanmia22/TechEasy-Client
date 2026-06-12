import React from 'react'
import type { UseFormRegister } from 'react-hook-form';

type productInput = {
    category : string;
}

interface CategoryProps {
    register: UseFormRegister<productInput>
}

const Category = ({register}:CategoryProps) => {

    const brands = [
  { value: "phone", label: "Phone" },
  { value: "laptop", label: "Laptop" },
  { value: "watch", label: "Watch" },
  { value: "mac", label: "Mac" },
  { value: "camera", label: "Camera" },
  { value: "monitor", label: "Monitor" },
  { value: "headphone", label: "Headphone" },
  { value: "airbuds", label: "Aribuds" },
];

    return (
        <div>
            <fieldset className="fieldset w-full">
                <legend className="block text-[11px] font-semibold text-neutral uppercase tracking-wider mb-2">Category</legend>
                <select
                 {...register('category',{required: true})}
                 defaultValue={''} 
                 className="select w-full">
                    <option value="" disabled>Select Category</option>
                   {
                    brands.map((val) =>
                    <option key={val.value} value={val?.value}>{val?.label}</option>
                    )
                   }
                </select>
            </fieldset>
        </div>
    )
}

export default Category