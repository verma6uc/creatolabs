'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  metrics: string[];
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "As a Fortune 500 e-commerce platform, we needed enterprise-grade reliability with cutting-edge innovation. CreatorLabs delivered both. Their neural optimization engine has transformed how we approach digital presence.",
    metrics: [
      "40% increase in conversions",
      "90% reduction in maintenance overhead",
      "2.5x improvement in page load times"
    ],
    author: "Sarah Chen",
    role: "Chief Digital Officer",
    company: "Global Retail Solutions",
    avatar: "/avatars/avatar-1.jpg"
  },
  {
    quote: "The autonomous evolution capabilities are a game-changer. Our B2B SaaS platform saw immediate improvements in user engagement, and the AI continues to optimize our funnel without manual intervention.",
    metrics: [
      "60% reduction in bounce rates",
      "45% increase in trial signups",
      "3x improvement in user retention"
    ],
    author: "Michael Rodriguez",
    role: "Head of Product",
    company: "TechFlow Solutions",
    avatar: "/avatars/avatar-1.jpg"
  },
  {
    quote: "The enterprise-grade architecture and neural network's ability to understand market context and adapt in real-time is unprecedented. It's like having an entire optimization team working 24/7.",
    metrics: [
      "85% faster deployment cycles",
      "2x increase in team productivity",
      "30% boost in market share"
    ],
    author: "Dr. James Wilson",
    role: "CTO",
    company: "Enterprise AI Systems",
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
    }, 8000); // Increased duration to give more time to read detailed testimonials

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
            Enterprise Success Stories
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            See how leading companies are transforming their digital presence with our 
            AI-driven evolution platform.
          </p>
        </div>

        <div 
          ref={carouselRef}
          className="max-w-5xl mx-auto opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="relative h-[500px]">
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
                <div className="glass-card p-8 md:p-12 rounded-2xl backdrop-blur-lg bg-white/5 group hover:bg-white/10 transition-all duration-700 relative overflow-hidden">
                  {/* Background Gradients */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5" />
                  </div>

                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Avatar and Author Info */}
                    <div className="flex flex-col items-center text-center md:w-48">
                      <div className="relative w-24 h-24 mb-4 transform transition-transform duration-500 group-hover:scale-110">
                        <div className="absolute inset-0 bg-gradient-to-br from-sage-green/20 to-eggplant/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          fill
                          className="object-cover rounded-full relative z-10"
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="font-montserrat font-semibold text-white group-hover:text-sage-green-light transition-colors duration-300">
                          {testimonial.author}
                        </p>
                        <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                          {testimonial.role}
                        </p>
                        <p className="text-sage-green text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 relative z-10">
                      <p className="text-xl md:text-2xl text-white/90 mb-8 italic group-hover:text-white transition-colors duration-300">
                        {`"${testimonial.quote}"`}
                      </p>
                      
                      {/* Metrics */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {testimonial.metrics.map((metric, i) => (
                          <div 
                            key={i}
                            className="bg-white/5 p-4 rounded-lg group-hover:bg-white/10 transition-all duration-300"
                          >
                            <p className="text-sage-green font-semibold text-lg">
                              {metric.split(' ')[0]}
                            </p>
                            <p className="text-white/80 text-sm">
                              {metric.split(' ').slice(1).join(' ')}
                            </p>
                          </div>
                        ))}
                      </div>
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
