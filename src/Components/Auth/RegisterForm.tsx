import React from 'react'
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Logo from '../Logo/Logo';

const RegisterForm = () => {
    return (
        <div className="w-full max-w-[420px] relative z-10">

       <div className="text-center mb-8">
         <Logo />
          <p className="text-xs text-neutral font-semibold tracking-widest uppercase mt-1">
            Premium Tech Marketplace
          </p>
        </div>

        {/* Card */}
        <div className="card bg-base-100 border border-base-300 shadow-2xl">
          <div className="card-body p-8 gap-0">

            <h1 className="text-xl font-bold text-base-content mb-1">Create an account</h1>
            <p className="text-sm text-neutral mb-6">Join our growing community of tech lovers</p>

            {/* Google Button */}
            <button className="btn btn-outline w-full h-12 gap-3 text-base font-semibold hover:bg-base-200 hover:border-base-content/20 transition-all mb-6">
             <FcGoogle size={24} />
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-base-300" />
              <span className="text-xs font-semibold text-neutral uppercase tracking-wider">or</span>
              <div className="flex-1 h-px bg-base-300" />
            </div>

            {/* Full Name */}
            <fieldset className="fieldset mb-4">
              <legend className="fieldset-legend text-[11px] font-bold text-base-content/60 uppercase tracking-wider">
                Full Name
              </legend>
              <label className="input input-bordered w-full flex items-center gap-2 focus-within:input-primary transition-all">
                <svg className="w-4 h-4 text-neutral shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input type="text" className="grow text-sm" placeholder="John Doe" />
              </label>
            </fieldset>

            {/* Profile Image */}
            <fieldset className="fieldset mb-4">
              <legend className="fieldset-legend text-[11px] font-bold text-base-content/60 uppercase tracking-wider">
                Profile Photo
              </legend>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-base-300 border-2 border-dashed border-base-content/20 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-neutral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <label className="flex-1 cursor-pointer">
                  <div className="border border-dashed border-base-content/20 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-base-200 hover:border-primary/40 transition-all">
                    <svg className="w-4 h-4 text-neutral shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-base-content">Upload photo</p>
                      <p className="text-xs text-neutral">JPG, PNG up to 2MB</p>
                    </div>
                  </div>
                  <input type="file" accept="image/*" className="hidden" />
                </label>
              </div>
            </fieldset>

            {/* Email */}
            <fieldset className="fieldset mb-4">
              <legend className="fieldset-legend text-[11px] font-bold text-base-content/60 uppercase tracking-wider">
                Email Address
              </legend>
              <label className="input input-bordered w-full flex items-center gap-2 focus-within:input-primary transition-all">
                <svg className="w-4 h-4 text-neutral shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input type="email" className="grow text-sm" placeholder="you@example.com" />
              </label>
            </fieldset>

            {/* Password */}
            <fieldset className="fieldset mb-5">
              <legend className="fieldset-legend text-[11px] font-bold text-base-content/60 uppercase tracking-wider">
                Password
              </legend>
              <label className="input input-bordered w-full flex items-center gap-2 focus-within:input-primary transition-all">
                <svg className="w-4 h-4 text-neutral shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input type="password" className="grow text-sm" placeholder="••••••••" />
              </label>
            </fieldset>

            {/* Terms checkbox */}
            <label className="flex items-start gap-3 cursor-pointer mb-6">
              <input type="checkbox" className="checkbox checkbox-primary checkbox-sm mt-0.5" />
              <span className="text-sm text-neutral leading-relaxed">
                I agree to TechEasy&apos;s{" "}
                <Link href="/terms" className="text-primary font-semibold hover:underline">Terms of Service</Link>
                {" "}and{" "}
                <Link href="/privacy" className="text-primary font-semibold hover:underline">Privacy Policy</Link>
              </span>
            </label>

            {/* Submit */}
            <button className="btn btn-primary w-full h-12 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Create Account
            </button>

            {/* Login link */}
            <p className="text-center text-sm text-neutral mt-5">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-bold hover:underline">
                Sign in
              </Link>
            </p>

          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-neutral mt-5">
          🔒 Your data is encrypted and never shared
        </p>

      </div>
    )
}

export default RegisterForm
