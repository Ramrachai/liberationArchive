'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroData from '@/lib/data/heroData.json';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroData.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroData.slides.length) % heroData.slides.length);
  };

  return (
    <section id="hero" className="relative h-[500px] w-full overflow-hidden">
      <div className="relative h-full w-full">
        {heroData.slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </section>
  );
} 