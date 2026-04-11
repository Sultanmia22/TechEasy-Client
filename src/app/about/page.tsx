import React from 'react';
import { FiCpu, FiShield, FiZap, FiGlobe } from 'react-icons/fi';
import { HiOutlineLightBulb } from 'react-icons/hi2';

const AboutPage = () => {
  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-base-200">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block p-2 px-4 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
            Since 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Welcome to <span className="text-primary">Tech</span>Easy
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-neutral leading-relaxed">
            Your ultimate destination for cutting-edge technology. We bridge the gap between innovation and your everyday life.
          </p>
        </div>
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]"></div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-primary">
              <HiOutlineLightBulb className="text-2xl" />
              <h2 className="text-sm font-black uppercase tracking-[0.2em]">Our Mission</h2>
            </div>
            <h3 className="text-4xl font-bold leading-tight">
              Empowering your digital journey through <span className="text-secondary">innovation.</span>
            </h3>
            <p className="text-lg text-neutral italic border-l-4 border-primary pl-6 py-2">
              "To provide the most reliable, high-performance gadgets and components at an affordable price for every tech enthusiast."
            </p>
            <p className="leading-relaxed opacity-80">
              We believe technology should be a tool for progress, not a hurdle. At TechEasy, we curate products that meet 
              rigorous standards of quality and performance, ensuring your setup is always ahead of the curve.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Products', value: '50k+', color: 'text-primary', bg: 'bg-primary/5' },
              { label: 'Users', value: '10k+', color: 'text-secondary', bg: 'bg-secondary/5' },
              { label: 'Support', value: '24/7', color: 'text-accent', bg: 'bg-accent/5' },
              { label: 'Rating', value: '4.9/5', color: 'text-primary', bg: 'bg-base-300' },
            ].map((stat, i) => (
              <div key={i} className={`${stat.bg} p-10 rounded-3xl border border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}>
                <h4 className={`text-4xl font-black ${stat.color}`}>{stat.value}</h4>
                <p className="text-xs font-bold uppercase tracking-widest mt-2 opacity-60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values with React Icons */}
      <section className="py-24 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 tracking-tight uppercase">Why TechEasy?</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Authentic Gear', icon: FiCpu, desc: 'Sourced directly from official brands for 100% originality.', border: 'hover:border-primary' },
              { title: 'Secure Payment', icon: FiShield, desc: 'Encrypted transactions powered by Stripe global standards.', border: 'hover:border-secondary' },
              { title: 'Fast Delivery', icon: FiZap, desc: 'Lightning-fast shipping across the city with real-time tracking.', border: 'hover:border-accent' },
              { title: 'Global Tech', icon: FiGlobe, desc: 'Bringing the latest worldwide innovations to your doorstep.', border: 'hover:border-primary' },
            ].map((feature, i) => (
              <div key={i} className={`card bg-base-100 border border-base-300 transition-all duration-300 ${feature.border} group`}>
                <div className="card-body items-center text-center p-10">
                  <div className="text-4xl mb-6 text-neutral group-hover:text-primary transition-colors">
                    <feature.icon />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-primary text-primary-content rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-8 opacity-20">
              <FiCpu size={80} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 italic tracking-tighter leading-tight uppercase">
              "Life is like code, we just need to <span className="underline decoration-secondary decoration-8 underline-offset-4">debug</span> the hurdles."
            </h2>
            <p className="text-xl opacity-90 max-w-2xl font-medium leading-relaxed">
              TechEasy was built on the belief that technology should simplify life. We aren't just selling gadgets; 
              we are your partners in building a more efficient, innovative future.
            </p>
          </div>
          {/* Abstract background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;