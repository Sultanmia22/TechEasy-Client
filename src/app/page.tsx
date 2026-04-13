
import BlogSection from "@/Components/Home/Blog/BlogSection";
import CallToAction from "@/Components/Home/CallToAction/CallToAction";
import CategoriesSection from "@/Components/Home/CategoriesSection/CategoriesSection";
import FaqSection from "@/Components/Home/FaqSection/FaqSection";

import FeatureSection from "@/Components/Home/Feature/FeatureSection";
import HeroSection from "@/Components/Home/HeroSection/HeroSection";
import Newsletter from "@/Components/Home/Newsletter/Newsletter";
import PopularProducts from "@/Components/Home/PopularItemSection/PopularItemSection";
import ServicesSection from "@/Components/Home/ServiceSection/ServiceSection";
import Statistics from "@/Components/Home/Statistics/Statistics";
import Testimonials from "@/Components/Home/Testimonials/Testimonials";
import TextLoader from "@/Components/Loading/TextLoader";
import { Suspense } from "react";

export default function Home() {
  return (
   <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>

      {/* Categories Section */}
      <section>
        <CategoriesSection />
      </section>

      {/* ৩. Popular Section */}
      <section>
        <Suspense fallback={<TextLoader />}>
          <PopularProducts />
        </Suspense>
      </section>

      {/* Feature Section */}
      <section>
        <FeatureSection />
      </section>

      {/* Statistics Section */}
      <section>
        <Statistics />
      </section>

      {/* Services Section */}
      <section>
        <ServicesSection />
      </section>

      {/* Call to Action */}
      <section>
        <CallToAction />
      </section>

      {/* Testimonials */}
      <section>
        <Testimonials />
      </section>

      {/* Blog Section */}
      <section>
        <BlogSection />
      </section>

      {/* FAQ */}
      <section>
        <FaqSection />
      </section>

      {/* Newsletter */}
      <section>
        <Newsletter />
      </section>
    </div>
  );
}
