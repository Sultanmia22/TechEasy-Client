
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

export default function Home() {
  return (
    <div className="">
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

     <section>
      <Newsletter />
     </section>

     <section>
      <CallToAction />
     </section>
    </div>
  );
}
