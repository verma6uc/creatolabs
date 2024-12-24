'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Creator Lab simplified everything. My site launched in days and keeps improving on its own!",
    author: "Alex C.",
    role: "Entrepreneur",
    avatar: "/avatars/avatar-1.jpg"
  },
  {
    quote: "The AI suggestions saved me hours each week—I can't imagine going back to a normal builder.",
    author: "Priya K.",
    role: "Blogger",
    avatar: "/avatars/avatar-1.jpg"
  },
  {
    quote: "The real-time evolution concept is pure genius. My bounce rates dropped by 30% in the first month.",
    author: "Marcus V.",
    role: "Startup Founder",
    avatar: "/avatars/avatar-1.jpg"
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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface to-dark-bg" />
      <div className="absolute inset-0 pattern-bg opacity-10" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6">
            The Chorus
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Hear how our early adopters unlocked their next-level presence.
          </p>
        </div>

        <div 
          ref={carouselRef}
          className="max-w-4xl mx-auto opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="relative h-[400px]">
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
                <div className="glass-card p-8 md:p-12 rounded-2xl text-center backdrop-blur-lg bg-white/5 group hover:bg-white/10 transition-all duration-700 relative overflow-hidden">
                  {/* Background Gradients */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5" />
                  </div>

                  {/* Avatar */}
                  <div className="relative w-20 h-20 mx-auto mb-6 transform transition-transform duration-500 group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-br from-sage-green/20 to-eggplant/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover rounded-full relative z-10"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl text-white/90 mb-8 italic group-hover:text-white transition-colors duration-300">
                      "{testimonial.quote}"
                    </p>
                    <div className="text-white">
                      <p className="font-montserrat font-semibold group-hover:text-sage-green-light transition-colors duration-300">
                        {testimonial.author}
                      </p>
                      <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Card Border Glow */}
                  <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-white/20 transition-colors duration-700" />
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
