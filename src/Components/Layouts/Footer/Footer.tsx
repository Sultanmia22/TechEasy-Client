"use client"; // Client component

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-base-100  text-neutral py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Navigation Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <p>TechEasy Ltd.</p>
          <p>123 Tech Street, Dhaka, Bangladesh</p>
          <p>Email: info@techeasy.com</p>
          <p>Phone: +880 123 456 789</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-primary transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-secondary transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-accent transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 dark:text-neutral">
        &copy; {new Date().getFullYear()} TechEasy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;