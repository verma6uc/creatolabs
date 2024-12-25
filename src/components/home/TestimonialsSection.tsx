'use client';

import { useEffect, useRef, useState } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  metric: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "CreatorLabs cut our setup time in half. We launched a modern site in just a day!",
    author: "Sarah W.",
    role: "Startup Founder",
    metric: "50% faster launch"
  },
  {
    quote: "Our online store saw a 30% boost in conversions within the first month. The AI suggestions are gold.",
    author: "Mike P.",
    role: "E-commerce Owner",
    metric: "30% more sales"
  },
  {
    quote: "I was skeptical about an &lsquo;AI-built&rsquo; site, but it nailed our brand voice perfectly. Zero coding needed!",
    author: "Lena K.",
    role: "Blogger",
    metric: "100% code-free"
  }
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-dark-surface">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg to-dark-surface opacity-50" />
        <div className="absolute inset-0 bg-noise opacity-[0.15]" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6">
            What Users Are Saying
          </h2>
        </div>

        <div 
          ref={carouselRef}
          className="max-w-4xl mx-auto opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="relative h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`
                  absolute inset-0 transition-all duration-700 transform
                  ${index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
                `}
                style={{ 
                  position: index === activeIndex ? 'relative' : 'absolute',
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div className="bg-dark-bg border border-white/10 rounded-xl p-8 transition-all duration-500 hover:border-sage-green/20">
                  {/* Content */}
                  <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-block px-4 py-1 rounded-full bg-sage-green text-white text-sm font-semibold mb-6">
                      {testimonial.metric}
                    </div>
                    <p className="text-2xl md:text-3xl text-white mb-8 italic font-light">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="space-y-1">
                      <p className="font-montserrat font-semibold text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-sage-green text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-sage-green scale-125' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
