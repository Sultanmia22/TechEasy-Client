'use client'
import { FaTruck, FaShieldAlt, FaHeadset, FaCheckCircle } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck size={22} />,
    title: "Fast Delivery",
    desc: "Get your tech products delivered quickly anywhere in Bangladesh.",
  },
  {
    icon: <FaShieldAlt size={22} />,
    title: "Secure Payment",
    desc: "100% safe and secure payment system with trusted gateways.",
  },
  {
    icon: <FaHeadset size={22} />,
    title: "24/7 Support",
    desc: "We are here to help you anytime with your tech needs.",
  },
  {
    icon: <FaCheckCircle size={22} />,
    title: "Verified Products",
    desc: "Only genuine and verified products from trusted sellers.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-14 md:py-20">
      <div className="w-11/12 md:w-10/12 mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-base-content">
            Why Choose <span className="text-primary">TechEasy</span>?
          </h2>
          <p className="text-neutral mt-2 text-sm md:text-base">
            We give you best tech shopping experience 🚀
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-base-100 border border-base-300 rounded-2xl p-6 hover:shadow-2xl hover:border-primary transition-all duration-300 cursor-pointer"
            >

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-base-content mb-1">
                {feature.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-neutral leading-relaxed">
                {feature.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;