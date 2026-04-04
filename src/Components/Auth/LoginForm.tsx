"use client";

import { ILoginData } from "@/types/user.interface";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import GoogleSignIn from "./GoogleSignIn";
import { useState } from "react";
import TextLoader from "../Loading/TextLoader";

const LoginForm = () => {

  const router = useRouter()

  const [loading,setLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginData>();


  // Login Function
  const onSubmit: SubmitHandler<ILoginData> = async (data) => {
    setLoading(true)
    try {

      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (result?.ok) {
        toast.success("Login Successful!");
        reset()
        router.push("/");
        router.refresh()
      } else {
        setLoading(false)
        toast.error(result?.error || "Invalid Credentials");
      }
    }

    catch (er:any) {
      setLoading(false)
      toast.error(er.message)
    }

  };

  if(loading){
    return <TextLoader />
  }

  return (
    <div className="w-full max-w-105 relative z-10">
      {/* Brand */}
      <div className="text-center mb-8">
        <Link href="/" className="inline-flex flex-col items-center gap-2 group">
          <span className="text-2xl font-black tracking-tight text-neutral">
            Tech<span className="text-primary">Easy</span>
          </span>
        </Link>
        <p className="text-xs text-neutral font-semibold tracking-widest uppercase mt-1">
          Premium Tech Marketplace
        </p>
      </div>

      {/* Card */}
      <div className="card bg-base-100 border border-base-300 shadow-2xl">
        <div className="card-body p-8 gap-0">
          <h1 className="text-xl font-bold text-base-content mb-1">Welcome back</h1>
          <p className="text-sm text-neutral mb-6">Sign in to your account to continue</p>

          {/* Google Button */}
          <GoogleSignIn />

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-base-300" />
            <span className="text-xs font-semibold text-neutral uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-base-300" />
          </div>


          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email field */}
            <fieldset className="fieldset mb-4">
              <legend className="fieldset-legend text-[11px] font-bold text-base-content/60 uppercase tracking-wider">
                Email Address
              </legend>
              <label className={`input input-bordered w-full flex items-center gap-2 focus-within:input-primary transition-all ${errors.email ? 'input-error' : ''}`}>
                <svg className="w-4 h-4 text-neutral shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  className="grow text-sm"
                  placeholder="you@example.com"
                  {...register("email", { required: "Email is required" })}
                />
              </label>
              {errors.email && <span className="text-error text-xs mt-1">{errors.email.message}</span>}
            </fieldset>

            {/* Password field */}
            <fieldset className="fieldset mb-5">
              <legend className="fieldset-legend text-[11px] font-bold text-base-content/60 uppercase tracking-wider">
                Password
              </legend>
              <label className={`input input-bordered w-full flex items-center gap-2 focus-within:input-primary transition-all ${errors.password ? 'input-error' : ''}`}>
                <svg className="w-4 h-4 text-neutral shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  type="password"
                  className="grow text-sm"
                  placeholder="••••••••"
                  {...register("password", { required: "Password is required" })}
                />
              </label>
              {errors.password && <span className="text-error text-xs mt-1">{errors.password.message}</span>}
            </fieldset>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                
                <input {...register("rememberMe")} type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                <span className="text-sm text-neutral">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-primary font-semibold hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full h-12 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
            >
              Sign In
            </button>
          </form>


          {/* Register link */}
          <p className="text-center text-sm text-neutral mt-5">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary font-bold hover:underline">
              Create one free
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-neutral mt-5">
        By signing in, you agree to our{" "}
        <Link href="/terms" className="underline hover:text-base-content transition-colors">Terms</Link>
        {" "}&amp;{" "}
        <Link href="/privacy" className="underline hover:text-base-content transition-colors">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default LoginForm;