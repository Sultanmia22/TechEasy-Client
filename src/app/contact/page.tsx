import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import ContactForm from '@/Components/Contact/ContactForm';

const ContactPage = () => {


  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-base-200 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-neutral max-w-xl mx-auto text-lg leading-relaxed">
            Have a question about a product or need technical support? We're here to help you debug your hurdles.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">Contact Info</h2>
              <p className="text-neutral mb-8">
                Feel free to reach out to us through any of these channels. Our team typically responds within 2 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
                  <FiMail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase opacity-60">Email Us</h3>
                  <p className="text-lg font-medium">support@techeasy.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-secondary/10 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-secondary-content transition-all duration-300">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase opacity-60">Call Us</h3>
                  <p className="text-lg font-medium">+880 1234 567 890</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-accent-content transition-all duration-300">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase opacity-60">Location</h3>
                  <p className="text-lg font-medium">Khilkhet, Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-base-300 rounded-2xl text-neutral group-hover:bg-neutral group-hover:text-base-100 transition-all duration-300">
                  <FiClock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase opacity-60">Working Hours</h3>
                  <p className="text-lg font-medium">Sat - Thu: 10 AM - 8 PM</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="font-bold mb-4 uppercase text-xs tracking-widest">Follow Our Journey</h3>
              <div className="flex gap-4">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>

      {/* Map or Locations Placeholder */}
      <section className="container mx-auto px-4 pb-20">
        <div className="h-96 w-full bg-base-300 rounded-[3rem] overflow-hidden relative group">
            <div className="absolute inset-0 flex items-center justify-center bg-base-300/50 backdrop-blur-sm z-10 group-hover:backdrop-blur-none transition-all duration-500">
                <div className="text-center">
                    <FiMapPin className="text-primary text-5xl mx-auto mb-4 animate-bounce" />
                    <h3 className="text-2xl font-black italic">Find us in Dhaka</h3>
                </div>
            </div>
            {/* Google Map embed code can go here */}
            <div className="w-full h-full bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;