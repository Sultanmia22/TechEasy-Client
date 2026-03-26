
import CategoriesSection from "@/Components/Home/CategoriesSection/CategoriesSection";
import FeatureSection from "@/Components/Home/Feature/FeatureSection";
import HeroSection from "@/Components/Home/HeroSection/HeroSection";
import ServicesSection from "@/Components/Home/ServiceSection/ServiceSection";

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
    </div>
  );
}
