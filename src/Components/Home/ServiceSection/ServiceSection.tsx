'use client'
import { FaLaptop, FaTools, FaShippingFast, FaUndoAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptop size={24} />,
    title: "Tech Product Selling",
    desc: "Latest laptops, phones, and gadgets at the best prices in Bangladesh.",
  },
  {
    icon: <FaTools size={24} />,
    title: "Repair & Support",
    desc: "Professional repair services for your devices by expert technicians.",
  },
  {
    icon: <FaShippingFast size={24} />,
    title: "Fast Home Delivery",
    desc: "Quick and reliable delivery system across the country.",
  },
  {
    icon: <FaUndoAlt size={24} />,
    title: "Easy Return Policy",
    desc: "Hassle-free return and replacement within 7 days.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-14 md:py-20 bg-base-200">
      <div className="px-5 md:px-10">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-base-content">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-neutral mt-2 text-sm md:text-base">
            TechEasy isn't just a product — it's a complete solution.          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-base-100 border border-base-300 rounded-3xl p-6 hover:shadow-2xl hover:border-primary transition-all duration-300 cursor-pointer"
            >

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg text-base-content mb-2">
                {service.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-neutral leading-relaxed mb-4">
                {service.desc}
              </p>

              {/* CTA */}
              <button className="text-sm font-bold text-primary group-hover:text-accent transition-colors">
                Learn More →
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;