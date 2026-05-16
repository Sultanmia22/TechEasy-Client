'use client'
import React, { forwardRef, useState } from 'react';
import { X, Plus, Home, BriefcaseBusiness, ShoppingBag, } from 'lucide-react';

const AddressModalUI = forwardRef<HTMLDialogElement>((props, ref) => {

  const [activeType, setActiveType] = useState<string>('Home');


  return (
    <dialog
      ref={ref}
      id="address_modal_ui"
      className="modal modal-bottom sm:modal-middle transition-all duration-300 ease-in-out"
    >

      <div className="modal-box backdrop-blur-sm transform transition-all duration-300 scale-95 opacity-0 [dialog[open]_&]:scale-100 [dialog[open]_&]:opacity-100 max-w-lg p-5 sm:p-6 bg-base-100 rounded-2xl shadow-xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-bold text-lg text-base-content">Add New Address</h3>
            <p className="text-xs text-neutral mt-0.5">Configure your shipping or billing location</p>
          </div>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost text-neutral hover:bg-base-200">
              <X size={16} />
            </button>
          </form>
        </div>

        {/* Pure UI Form Fields */}
        <div className="space-y-4">

          {/* Address Type Select */}
          <div>
            <label className="label py-1">
              <span className="label-text text-xs font-semibold text-base-content/80 uppercase tracking-wide">Address Type</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button onClick={() => setActiveType('Home')} className={`btn btn-sm h-10 rounded-xl gap-1.5 justify-center transition-all ${activeType === 'Home'
                  ? 'btn-primary text-base-100 shadow-sm shadow-primary/20'
                  : 'btn-outline bg-base-200/50 border-base-300 text-base-content hover:bg-base-200'
                }`}>
                <Home size={14} /> Home
              </button>
              <button onClick={() => setActiveType('Work')} className={`btn btn-sm h-10 rounded-xl gap-1.5 justify-center transition-all ${activeType === 'Work'
                  ? 'btn-primary text-base-100 shadow-sm shadow-primary/20'
                  : 'btn-outline bg-base-200/50 border-base-300 text-base-content hover:bg-base-200'
                }`}>
                <BriefcaseBusiness size={14} /> Work
              </button>
              <button onClick={() => setActiveType('Shipping')} className={`btn btn-sm h-10 rounded-xl gap-1.5 justify-center transition-all ${activeType === 'Shipping'
                  ? 'btn-primary text-base-100 shadow-sm shadow-primary/20'
                  : 'btn-outline bg-base-200/50 border-base-300 text-base-content hover:bg-base-200'
                }`}>
                <ShoppingBag size={14} /> Shipping
              </button>
            </div>
          </div>

          {/* Receiver Name */}
          <div>
            <label className="label py-1">
              <span className="label-text text-xs font-semibold text-base-content/80 uppercase tracking-wide">Receiver Name</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Md Sultan Mia"
              className="input input-bordered w-full h-11 text-sm rounded-xl focus:outline-none focus:border-primary bg-base-200/30"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="label py-1">
              <span className="label-text text-xs font-semibold text-base-content/80 uppercase tracking-wide">Phone Number</span>
            </label>
            <input
              type="tel"
              placeholder="+880 1XXX-XXXXXX"
              className="input input-bordered w-full h-11 text-sm rounded-xl focus:outline-none focus:border-primary bg-base-200/30"
            />
          </div>

          {/* Street Address */}
          <div>
            <label className="label py-1">
              <span className="label-text text-xs font-semibold text-base-content/80 uppercase tracking-wide">Street Address</span>
            </label>
            <input
              type="text"
              placeholder="House no, Road no, Area..."
              className="input input-bordered w-full h-11 text-sm rounded-xl focus:outline-none focus:border-primary bg-base-200/30"
            />
          </div>

          {/* City & Country */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label py-1">
                <span className="label-text text-xs font-semibold text-base-content/80 uppercase tracking-wide">City</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Dhaka"
                className="input input-bordered w-full h-11 text-sm rounded-xl focus:outline-none focus:border-primary bg-base-200/30"
              />
            </div>
            <div>
              <label className="label py-1">
                <span className="label-text text-xs font-semibold text-base-content/80 uppercase tracking-wide">Country</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Bangladesh"
                className="input input-bordered w-full h-11 text-sm rounded-xl focus:outline-none focus:border-primary bg-base-200/30"
              />
            </div>
          </div>

          {/* Set Default Checkbox */}
          <div className="form-control pt-1">
            <label className="label cursor-pointer justify-start gap-3 pl-0 select-none">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm rounded-md transition-all"
              />
              <span className="label-text text-sm font-medium text-base-content/90">Set as default address</span>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="modal-action gap-2 mt-6">
          <form method="dialog">
            <button className="btn btn-ghost h-10 min-h-0 rounded-xl text-sm">Cancel</button>
          </form>
          <button className="btn btn-primary text-base-100 h-10 min-h-0 px-6 rounded-xl text-sm font-medium shadow-sm shadow-primary/20 gap-1.5">
            <Plus size={16} /> Save Address
          </button>
        </div>
      </div>


      <form method="dialog" className="modal-backdrop bg-neutral-focus/30 backdrop-blur-[2px] transition-all duration-300">
        <button>close</button>
      </form>
    </dialog>
  );
});

AddressModalUI.displayName = 'AddressModalUI';
export default AddressModalUI;