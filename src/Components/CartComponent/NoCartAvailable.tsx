"use client";
import React from "react";
import Link from "next/link";

const NoCartAvailable = () => {
  return (
    <div className="w-full flex items-center justify-center py-16 px-4">
      
      <div className="bg-base-100 dark:bg-base-200 border border-base-300 rounded-2xl shadow-lg px-8 py-12 text-center max-w-md w-full">

        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="bg-primary/10 text-primary p-4 rounded-full">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L5.4 5M7 13l-1.5 6h11M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-base-content">
          Your Cart is Empty
        </h2>

        {/* Description */}
        <p className="text-neutral mt-2 text-sm">
          Looks like you haven’t added anything to your cart yet. Start shopping to fill it up!
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">

          <Link
            href="/all-product"
            className="btn btn-primary rounded-xl px-5"
          >
            Shop Now
          </Link>

          <Link
            href="/"
            className="btn btn-outline border-base-300 text-base-content hover:bg-base-200 rounded-xl px-5"
          >
            Go Home
          </Link>

        </div>

      </div>

    </div>
  );
};

export default NoCartAvailable;