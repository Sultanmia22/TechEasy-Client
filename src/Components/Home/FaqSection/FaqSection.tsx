'use client'
import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is the warranty period for your products?",
    answer:
      "All our tech products come with a standard 1-year warranty. Extended warranty options are also available for select products.",
  },
  {
    id: 2,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide. Shipping fees and delivery times vary based on your location.",
  },
  {
    id: 3,
    question: "Can I return or exchange a product?",
    answer:
      "Absolutely! We offer a 30-day return and exchange policy for products in original condition.",
  },
  {
    id: 4,
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email to monitor your delivery.",
  },
];

const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 bg-base-100 dark:bg-base-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-base-content text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-base-200 dark:bg-base-300 rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 flex justify-between items-center text-left text-gray-900 dark:text-base-content font-medium focus:outline-none hover:bg-base-300 dark:hover:bg-base-200 transition-colors duration-300"
              >
                <span>{faq.question}</span>
                <span className="ml-4">{openId === faq.id ? "−" : "+"}</span>
              </button>
              {openId === faq.id && (
                <div className="px-6 py-4 border-t border-base-300 dark:border-base-200 text-gray-500 dark:text-neutral text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;