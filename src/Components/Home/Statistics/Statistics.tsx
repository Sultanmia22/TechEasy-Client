// components/Statistics.tsx
import React from "react";
import { FaBoxOpen, FaSmile, FaTruck, FaStar } from "react-icons/fa";

interface StatItem {
  id: number;
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

const statsData: StatItem[] = [
  {
    id: 1,
    title: "Products Sold",
    value: "1,240",
    icon: <FaBoxOpen className="text-4xl text-primary" />,
  },
  {
    id: 2,
    title: "Happy Customers",
    value: "980",
    icon: <FaSmile className="text-4xl text-secondary" />,
  },
  {
    id: 3,
    title: "Orders Delivered",
    value: "1,120",
    icon: <FaTruck className="text-4xl text-accent" />,
  },
  {
    id: 4,
    title: "5-Star Reviews",
    value: "430",
    icon: <FaStar className="text-4xl text-yellow-400" />,
  },
];

const Statistics: React.FC = () => {
  return (
    <section className="py-12 bg-base-100 dark:bg-base-200">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-base-content text-center mb-10">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="bg-base-200 dark:bg-base-300 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4">{stat.icon}</div>
              <p className="text-2xl font-bold text-gray-900 dark:text-base-content">
                {stat.value}
              </p>
              <p className="text-gray-500 dark:text-neutral mt-1">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;