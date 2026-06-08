import React from 'react'

const Category = () => {
    return (
        <div>
            <fieldset className="fieldset w-full">
                <legend className="block text-[11px] font-semibold text-neutral uppercase tracking-wider mb-2">Category</legend>
                <select value="select category" className="select w-full" onChange={() => { }}>
                    <option value="select category" disabled>Select Category</option>
                    <option>Chrome</option>
                    <option>FireFox</option>
                    <option>Safari</option>
                </select>
            </fieldset>
        </div>
    )
}

export default Category