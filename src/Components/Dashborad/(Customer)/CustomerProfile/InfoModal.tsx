'use client'
import useAxiosSecure from '@/hook/useAxiosSecure';
import type { InfoModalProps, IPersonalInfoFields } from '@/types/customerProfile.interface';
import React, { forwardRef, useEffect } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

const InfoModal = forwardRef<HTMLDialogElement, InfoModalProps>((props, ref) => {
  const axiosSecure = useAxiosSecure()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IPersonalInfoFields>({
    defaultValues: props?.initialData
  })

  useEffect(() => {
    if (props.initialData) {
      reset(props.initialData);
    }
  }, [props.initialData, reset]);


  const handleCloseModal = () => {
    if (ref && 'current' in ref && ref.current) {
      ref.current.close();
    }
  };

  const onSubmit: SubmitHandler<IPersonalInfoFields> = async (data) => {
    const personalData = {
      phone: data.phone,
      altPhone: data.altPhone,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      nidNumber: data.nidNumber,
      occupation: data.occupation,
      location: data.location,
    }

    try {
      const res = await axiosSecure.patch(`/users/savedPersonalInfo`, personalData)

      if (res.status === 200 && res.data.success === true) {
        toast.success(res.data.message || "Information updated successfully!");
        handleCloseModal();
      }

      if (props.refetch) {
          props.refetch(); 
        }
    }
    catch (er: any) {
      console.log(er)
      toast.error(er?.response?.data?.message || "Something went wrong!")
    }
  }

  return (
    <dialog ref={ref} id="personal_info_modal" className="modal modal-bottom sm:modal-middle transform transition-all duration-300 ">
      <div className="modal-box">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-lg text-base-content">Personal Information</h3>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          </form>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          
          {/* Form Content */}
          <div className="space-y-4">
            {/* Row 1: Full Name */}
            <div>
              <label className="label">
                <span className="label-text text-sm font-medium">Full Name <span className="text-red-500">*</span></span>
              </label>
              <input
                {...register('fullName')}
                readOnly
                type="text" 
                placeholder="First name" 
                className="input input-bordered w-full bg-base-100 dark:bg-gra cursor-not-allowed" 
              />
            </div>

            {/* Row 2: Email */}
            <div>
              <label className="label">
                <span className="label-text text-sm font-medium">Email <span className="text-red-500">*</span></span>
              </label>
              <input
                {...register('email')}
                readOnly
                type="email" 
                placeholder="example@email.com" 
                className="input input-bordered w-full bg-base-100 cursor-not-allowed" 
              />
            </div>

            {/* Row 3: Phone + Alt Phone */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">
                  <span className="label-text text-sm font-medium">Phone <span className="text-red-500">*</span></span>
                </label>
                <input
                  {...register('phone', { required: true })}
                  type="tel" 
                  placeholder="+880 1XXX-XXXXXX" 
                  className="input input-bordered w-full" 
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-sm font-medium">Alt Phone</span>
                </label>
                <input
                  {...register('altPhone')}
                  type="tel" 
                  placeholder="+880 1XXX-XXXXXX" 
                  className="input input-bordered w-full" 
                />
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
                  type="date" 
                  className="input input-bordered w-full" 
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-sm font-medium">Gender <span className="text-red-500">*</span></span>
                </label>
                <select
                  {...register('gender')}
                  className="select select-bordered w-full" 
                  defaultValue="Select"
                >
                  <option disabled>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
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
                type="text" 
                placeholder="e.g. Software Engineer" 
                className="input input-bordered w-full" 
              />
            </div>

            {/* Row 6: NID + Location */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">
                  <span className="label-text text-sm font-medium">NID Number</span>
                </label>
                <input
                  {...register('nidNumber')}
                  type="text" 
                  placeholder="e.g. 1234567890" 
                  className="input input-bordered w-full" 
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-sm font-medium">Location <span className="text-red-500">*</span></span>
                </label>
                <input
                  {...register('location')}
                  type="text" 
                  placeholder="e.g. Dhaka, Bangladesh" 
                  className="input input-bordered w-full" 
                />
              </div>
            </div>
          </div>

          <div className="modal-action">

            <button type="button" className="btn btn-ghost" onClick={handleCloseModal}>
              Cancel
            </button>
            
            <button type="submit" className="btn btn-primary">
              Save Information
            </button>
          </div>
        </form>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
})

InfoModal.displayName = 'InfoModal'

export default InfoModal