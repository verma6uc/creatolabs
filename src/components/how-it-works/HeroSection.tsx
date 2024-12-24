'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { AnimatedBackground } from '../shared/AnimatedBackground';

export function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center relative">
      <AnimatedBackground 
        variant="gradient"
        opacity="opacity-40"
        showFloatingElements={true}
      />

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-20 container mx-auto px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-8">
            <Image
              src="/icons/design-bot.svg"
              alt="Design Bot"
              width={80}
              height={80}
              className="animate-float"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6">
            How CreatorLabs Works
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-12">
            Experience the future of website creation with our AI-driven platform that evolves with your needs.
          </p>
          <button className="btn-primary text-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
