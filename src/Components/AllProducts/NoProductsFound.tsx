"use client";
import React from "react";
import Link from "next/link";

const NoProductsFound = () => {
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
                d="M9 14l2-2 4 4m0 0l-4-4m4 4V10a6 6 0 10-6 6"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-base-content">
          No Products Found
        </h2>

        {/* Description */}
        <p className="text-neutral mt-2 text-sm">
          We couldn’t find any products matching your filters. Try adjusting your search or filters.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">

          <button className="btn btn-primary rounded-xl px-5">
            Clear Filters
          </button>

          <Link
            href="/all-product"
            className="btn btn-outline border-base-300 text-base-content hover:bg-base-200 rounded-xl px-5"
          >
            Browse All
          </Link>

        </div>

      </div>

    </div>
  );
};

export default NoProductsFound;