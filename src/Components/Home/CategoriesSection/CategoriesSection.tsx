'use client'
import { FaLaptop, FaMobileAlt, FaHeadphones, FaClock, FaGamepad, FaCamera } from "react-icons/fa";
import Link from "next/link";

const categories = [
  {
    name: "Laptops",
    icon: <FaLaptop size={22} />,
    count: "120+ Products",
    slug: "laptops",
  },
  {
    name: "Smartphones",
    icon: <FaMobileAlt size={22} />,
    count: "200+ Products",
    slug: "phones",
  },
  {
    name: "Accessories",
    icon: <FaHeadphones size={22} />,
    count: "300+ Products",
    slug: "accessories",
  },
  {
    name: "Smart Watch",
    icon: <FaClock size={22} />,
    count: "80+ Products",
    slug: "smart-watch",
  },
  {
    name: "Gaming",
    icon: <FaGamepad size={22} />,
    count: "150+ Products",
    slug: "gaming",
  },
  {
    name: "Cameras",
    icon: <FaCamera size={22} />,
    count: "60+ Products",
    slug: "camera",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="w-11/12 md:w-10/12 mx-auto">

        {/* Heading */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-base-content">
            Browse <span className="text-primary">Categories</span>
          </h2>

          <Link
            href="/categories"
            className="text-sm font-bold text-primary hover:text-accent transition-colors"
          >
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">

          {categories.map((cat, index) => (
            <Link
              href={`/category/${cat.slug}`}
              key={index}
              className="group bg-base-100 border border-base-300 rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-2xl hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {cat.icon}
              </div>

              {/* Name */}
              <h3 className="font-bold text-sm text-base-content">
                {cat.name}
              </h3>

              {/* Count */}
              <p className="text-xs text-neutral mt-1">
                {cat.count}
              </p>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;