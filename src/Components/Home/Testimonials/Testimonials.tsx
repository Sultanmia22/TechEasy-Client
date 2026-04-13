
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sadia Rahman",
    role: "Verified Buyer",
    message:
      "Great product quality and fast delivery! Totally satisfied with my purchase.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Rafiq Hossain",
    role: "Happy Customer",
    message:
      "Amazing customer service. The team helped me choose the perfect product easily.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Frequent Shopper",
    message:
      "Love the variety and quality! Highly recommend this store to everyone.",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-base-100 dark:bg-base-200">
      <div className=" px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-base-content text-center mb-10">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-base-200 dark:bg-base-300 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <FaQuoteLeft className="text-3xl text-primary mb-4" />
              <p className="text-gray-700 dark:text-base-content mb-4">
                "{testimonial.message}"
              </p>
              {testimonial.avatar && (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-2 object-cover"
                />
              )}
              <p className="font-semibold text-gray-900 dark:text-base-content">
                {testimonial.name}
              </p>
              <p className="text-gray-500 dark:text-neutral text-sm">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;