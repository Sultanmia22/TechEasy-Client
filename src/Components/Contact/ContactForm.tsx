"use client";
import type { ContactFormData } from "@/types/contact.interface";
import axios from "axios";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import { toast } from "react-toastify";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    const emailData = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      template_params: {
        user_name: data.fullName,
        user_email: data.emailAddreess,
        subject: data.subject,
        message: data.message,
      },
    };

    try{
      const response = await axios.post(
                'https://api.emailjs.com/api/v1.0/email/send',
                emailData
            );

            if (response.status === 200) {
                toast.success("Message sent successfully!");
                reset(); 
            }
    }
    catch(error:any){
      console.error("EmailJS Error Response:", error.response?.data);
    toast.error(error.response?.data || "Something went wrong!");
    }
  };

  return (
    <div className="lg:col-span-2 bg-base-200 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-base-300">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Full Name</span>
            </label>
            <input
              {...register("fullName", { required: true })}
              type="text"
              placeholder="MD Sultan"
              className="input input-bordered bg-base-100 focus:border-primary transition-all w-full"
              required
            />
            {errors.fullName && (
              <span className="text-sm text-red-600">
                This field is required
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email Address</span>
            </label>
            <input
              {...register("emailAddreess", { required: true })}
              type="email"
              placeholder="sultan@example.com"
              className="input input-bordered bg-base-100 focus:border-primary transition-all w-full"
              required
            />
            {errors.emailAddreess && (
              <span className="text-sm text-red-600">
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Subject</span>
          </label>
          <select
            {...register("subject", { required: true })}
            className="select select-bordered bg-base-100 focus:border-primary w-full"
          >
            <option disabled selected>
              How can we help?
            </option>
            <option>Order Status</option>
            <option>Product Inquiry</option>
            <option>Technical Support</option>
            <option>Partnership</option>
          </select>
          {errors.subject && (
            <span className="text-sm text-red-600">This field is required</span>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Message</span>
          </label>
          <textarea
            {...register("message", { required: true })}
            className="textarea textarea-bordered bg-base-100 focus:border-primary h-40 transition-all w-full"
            placeholder="Tell us more about your hurdle..."
          ></textarea>
          {errors.message && (
            <span className="text-sm text-red-600">This field is required</span>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block rounded-xl group"
        >
          <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
