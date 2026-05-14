'use client'
import type { InfoModalProps, IPersonalInfoFields } from '@/types/customerProfile.interface';
import React, { forwardRef, useEffect } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form';

const InfoModal = forwardRef<HTMLDialogElement, InfoModalProps>((props, ref) => {

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IPersonalInfoFields>({
    defaultValues:props?.initialData
  })

  useEffect(() => {
    if (props.initialData) {
      reset(props.initialData);
    }
  }, [props.initialData, reset]);

  const onSubmit: SubmitHandler<IPersonalInfoFields> = (data) => {
    console.log(data)
  }

  return (
    <dialog ref={ref} id="personal_info_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-lg text-base-content">Personal Information</h3>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          </form>
        </div>

        {/* Form Content */}
        <div className="space-y-4">
          {/* Row 1: First Name + Last Name */}
          <div className="grid grid-cols-1 gap-3">
            <div>
              <label className="label">
                <span className="label-text text-sm font-medium">Full Name <span className="text-red-500">*</span></span>
              </label>
              <input 
                {...register('fullName')}
                readOnly
               type="text" name="firstName" placeholder="First name" className="input input-bordered w-full" />
            </div>
           
          </div>

          {/* Row 2: Email */}
          <div>
            <label className="label">
              <span className="label-text text-sm font-medium">Email <span className="text-red-500">*</span></span>
            </label>
            <input 
            {...register('email')}
            readOnly
            type="email" name="email" placeholder="example@email.com" className="input input-bordered w-full" />
          </div>

          {/* Row 3: Phone + Alt Phone */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label">
                <span className="label-text text-sm font-medium">Phone <span className="text-red-500">*</span></span>
              </label>
              <input 
              {...register('phone')}
              type="tel" name="phone" placeholder="+880 1XXX-XXXXXX" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-sm font-medium">Alt Phone</span>
              </label>
              <input 
              {...register('altPhone')}
              type="tel" name="altPhone" placeholder="+880 1XXX-XXXXXX" className="input input-bordered w-full" />
            </div>
          </div>

          {/* Row 4: Date of Birth + Gender */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label">
                <span className="label-text text-sm font-medium">Date of Birth</span>
              </label>
              <input 
               {...register('dateOfBirth')}
              type="date" name="dob" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-sm font-medium">Gender <span className="text-red-500">*</span></span>
              </label>
              <select 
               {...register('gender')}
              name="gender" className="select select-bordered w-full" defaultValue="Select">
                <option disabled>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Row 5: Occupation */}
          <div>
            <label className="label">
              <span className="label-text text-sm font-medium">Occupation</span>
            </label>
            <input 
            {...register('occupation')}
            type="text" name="occupation" placeholder="e.g. Software Engineer" className="input input-bordered w-full" />
          </div>

          {/* Row 6: NID + Location */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label">
                <span className="label-text text-sm font-medium">NID Number</span>
              </label>
              <input 
              {...register('nidNumber')}
              type="text" name="nid" placeholder="e.g. 1234567890" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-sm font-medium">Location <span className="text-red-500">*</span></span>
              </label>
              <input 
              {...register('location')}
              type="text" name="location" placeholder="e.g. Dhaka, Bangladesh" className="input input-bordered w-full" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-ghost">Cancel</button>
          </form>
          <button className="btn btn-primary" onClick={() => ref?.current?.close()}>
            Save Information
          </button>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
})

InfoModal.displayName = 'InfoModal'

export default InfoModal