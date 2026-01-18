'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "elegant home decor",
      subtitle: "Transform your space with cultural aesthetics.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop",
          alt: "Modern living room decor"
        },
        {
          src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=600&fit=crop",
          alt: "Stylish home interior"
        },
        {
          src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=600&fit=crop",
          alt: "Contemporary furniture"
        }
      ]
    },
    {
      title: "cultural artifacts",
      subtitle: "Celebrate heritage through beautiful design.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop",
          alt: "Cultural home accessories"
        },
        {
          src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=600&fit=crop",
          alt: "Traditional decor elements"
        },
        {
          src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop",
          alt: "Artistic home pieces"
        }
      ]
    },
    {
      title: "modern lifestyle",
      subtitle: "Contemporary pieces for today's living.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=600&fit=crop",
          alt: "Modern home setup"
        },
        {
          src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=600&fit=crop",
          alt: "Contemporary living space"
        },
        {
          src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop",
          alt: "Stylish furniture"
        }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-slate-50 dark:bg-slate-800/50 py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-4 z-10">
            <h2 className="font-serif text-5xl lg:text-7xl mb-6 leading-tight">
              {slides[currentSlide].title}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 text-lg font-medium">
              {slides[currentSlide].subtitle}
            </p>
            <button 
              onClick={nextSlide}
              className="inline-flex items-center space-x-3 text-accent hover:underline font-bold group"
            >
              <span className="material-icons-outlined text-4xl group-hover:translate-x-1 transition-transform">
                arrow_circle_right
              </span>
            </button>
          </div>

          {/* Image Slider */}
          <div className="lg:col-span-8 relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-800/90 flex items-center justify-center text-slate-800 dark:text-white hover:bg-white dark:hover:bg-slate-800 transition-all shadow-lg"
            >
              <span className="material-icons-outlined">chevron_left</span>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-800/90 flex items-center justify-center text-slate-800 dark:text-white hover:bg-white dark:hover:bg-slate-800 transition-all shadow-lg"
            >
              <span className="material-icons-outlined">chevron_right</span>
            </button>

            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-4">
              {slides[currentSlide].images.map((image, index) => (
                <div 
                  key={index} 
                  className={`aspect-[3/4] overflow-hidden rounded-2xl shadow-xl transition-all duration-700 ${
                    index === 1 ? 'translate-y-8' : ''
                  }`}
                >
                  <Image
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    src={image.src}
                    width={300}
                    height={400}
                  />
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-accent scale-125' 
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}