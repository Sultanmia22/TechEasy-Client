"use client"; 

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <section className="py-16 bg-base-100 dark:bg-base-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-base-content mb-4">
          Stay Updated
        </h2>
        <p className="text-gray-500 dark:text-neutral mb-8">
          Subscribe to our newsletter for the latest tech products, deals, and updates.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full sm:w-auto flex-1 bg-base-200 dark:bg-base-300 text-gray-900 dark:text-base-content"
            required
          />
          <button
            type="submit"
            className="btn bg-primary text-primary-content hover:bg-primary-focus flex items-center gap-2"
          >
            Subscribe <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;