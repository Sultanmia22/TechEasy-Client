import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center p-4 relative overflow-hidden">

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-base-300)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-base-300)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
        <div className="absolute -top-52 -left-52 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -bottom-52 -right-52 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="w-full max-w-105 relative z-10">

        {/* Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex flex-col items-center gap-2 group">
            <span className="text-2xl font-black tracking-tight text-neutral">
              Tech<span className="text-primary">Easy</span>
            </span>
          </Link>
          <p className="text-xs text-neutral font-semibold tracking-widest uppercase mt-1">
            Buy &amp; Sell Tech Products
          </p>
        </div>

        {/* Card */}
        <div className="card bg-base-100 border border-base-300 shadow-2xl">
          <div className="card-body p-8 gap-0">

            <h1 className="text-xl font-bold text-base-content mb-1">Welcome back</h1>
            <p className="text-sm text-neutral mb-6">Sign in to your account to continue</p>

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

            {/* Email field */}
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

            {/* Password field */}
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

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                <span className="text-sm text-neutral">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-primary font-semibold hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button className="btn btn-primary w-full h-12 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              Sign In
            </button>

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
    </main>
  );
}