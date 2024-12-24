'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { AnimatedBackground } from '../shared/AnimatedBackground';

export function FinalCTA() {
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
    <section className="relative py-24 overflow-hidden">
      <AnimatedBackground 
        variant="solid"
        opacity="opacity-40"
        showFloatingElements={true}
      />

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-20 container mx-auto px-6"
      >
        <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-700">
          {/* Content */}
          <div className="relative z-30 text-center">
            <div className="w-16 h-16 mx-auto mb-6">
              <Image
                src="/icons/launch.svg"
                alt="Launch Icon"
                width={64}
                height={64}
                className="animate-float"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
              Ready to Create Your Website?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-12">
              Join CreatorLabs and let our AI build and evolve your site in minutes.
            </p>
            <button className="btn-primary text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
