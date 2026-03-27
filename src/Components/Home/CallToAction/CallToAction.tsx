"use client"; // Client component

import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-primary dark:bg-primary text-primary-content dark:text-base-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Upgrade Your Tech Today
        </h2>
        <p className="text-lg mb-8">
          Discover the latest gadgets, smartphones, laptops, and smartwatches at unbeatable prices. Don’t miss out!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="btn btn-accent flex items-center gap-2 hover:scale-105 transition-transform duration-300">
            Shop Now <FaShoppingCart />
          </button>
          <button className="btn btn-secondary hover:scale-105 transition-transform duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;