
import BlogSection from "@/Components/Home/Blog/BlogSection";
import CategoriesSection from "@/Components/Home/CategoriesSection/CategoriesSection";
import FaqSection from "@/Components/Home/FaqSection/FaqSection";

import FeatureSection from "@/Components/Home/Feature/FeatureSection";
import HeroSection from "@/Components/Home/HeroSection/HeroSection";
import PopularProducts from "@/Components/Home/PopularItemSection/PopularItemSection";
import ServicesSection from "@/Components/Home/ServiceSection/ServiceSection";
import Statistics from "@/Components/Home/Statistics/Statistics";
import Testimonials from "@/Components/Home/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 w-11/12 md:w-10/12 mx-5 md:mx-auto">
     <section>
      <HeroSection />
     </section>

     <section>
      <FeatureSection />
     </section>

     <section>
      <ServicesSection />
     </section>

     <section>
      <CategoriesSection />
     </section>

     <section>
      <PopularProducts />
     </section>

     <section>
      <Statistics/>
     </section>

     <section>
      <Testimonials />
     </section>

     <section>
      <BlogSection />
     </section>

     <section>
      <FaqSection />
     </section>
    </div>
  );
}
