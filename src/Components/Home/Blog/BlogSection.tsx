// components/BlogSection.tsx
import React from "react";

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  author: string;
  date: string;
  image: string;
  link?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 5 Smartphones of 2026",
    summary:
      "Discover the best smartphones of this year with advanced features and performance benchmarks.",
    author: "TechGuru",
    date: "March 10, 2026",
    image: "https://source.unsplash.com/400x300/?smartphone",
    link: "#",
  },
  {
    id: 2,
    title: "Laptop Buying Guide for Professionals",
    summary:
      "Everything you need to know before buying a laptop suitable for work and gaming.",
    author: "LaptopWorld",
    date: "March 12, 2026",
    image: "https://source.unsplash.com/400x300/?laptop",
    link: "#",
  },
  {
    id: 3,
    title: "Top Smartwatches to Track Your Fitness",
    summary:
      "Explore the best smartwatches that help you monitor your health and daily activity.",
    author: "WearableTech",
    date: "March 15, 2026",
    image: "https://source.unsplash.com/400x300/?smartwatch",
    link: "#",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-12 bg-base-100 dark:bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-base-content text-center mb-10">
          Latest from Our Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-base-200 dark:bg-base-300 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-base-content">
                  {post.title}
                </h3>
                <p className="text-gray-500 dark:text-neutral mt-2 text-sm">
                  {post.summary}
                </p>
                <div className="mt-4 flex justify-between items-center text-sm text-gray-400 dark:text-neutral">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                {post.link && (
                  <a
                    href={post.link}
                    className="mt-4 inline-block bg-primary text-primary-content rounded-lg px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
                  >
                    Read More
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;