'use client'
import Link from 'next/link'
import React from 'react'
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const HeroSection = () => {

      const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

    const slides = [
  {
    name: "MacBook Pro",
    image: "https://img.freepik.com/free-photo/laptop-with-sun-background_1232-429.jpg?w=740&q=80",
  },
  {
    name: "iPhone 15 Pro",
    image: "https://birchtree.me/content/images/size/w1920/2024/09/IMG_0575.3800638ec3544e7ea23ba746cbe36f54.jpg",
  },
  {
    name: "Gaming Laptop",
    image: "https://i.rtings.com/assets/pages/6dRuEBex/best-gaming-laptops-20242028-medium.jpg?format=auto",
  },
  {
    name: "Apple Watch",
    image: "https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large.jpg",
  },
];

    return (
        <div className='flex flex-col-reverse md:flex-row gap-10 mt-10'>
            {/* Hero Left side */}
            <div className='flex-1 space-y-5'>

                <div>
                    <span className='text-sm font-bold text-primary tracking-wide  border border-primary/25 bg-primary/8 px-4 py-3 rounded-full'>12,000+ verified listings live now</span>
                </div>

                <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.05] tracking-tight text-base-content mb-4 md:mb-5">
                        Bangladesh's <span className="text-primary">Smartest</span> Tech
                        Marketplace
                    </h1>

                    <p className='text-neutral'> Discover laptops, phones, gadgets and more — curated by TechEasy, delivered to your door at unbeatable prices.</p>
                </div>

                <div>
                    <Link
                        href="/products"
                        className="btn btn-primary px-6 sm:px-7 h-11 sm:h-12 text-sm font-bold shadow-lg shadow-primary/25 w-full sm:w-auto"
                    >
                        Browse Products
                    </Link>
                </div>
            </div>

            {/* Hero Right Side */}
             <div className="overflow-hidden flex-1" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide) => (
          <div key={slide.name} className="relative min-w-full rounded-2xl">
 
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.name}
              className="w-full h-60 md:h-100 object-cover rounded-2xl"
            />
 
            {/* Color overlay */}
            <div className="absolute inset-0 bg-primary/20 rounded-2xl" />
 
            {/* Product name */}
            <div className="absolute bottom-5 left-5">
              <span className="bg-base-100/80 text-base-content text-sm font-bold px-4 py-2 rounded-full">
                {slide.name}
              </span>
            </div>
 
          </div>
        ))}
      </div>
    </div>
        </div>
    )
}

export default HeroSection