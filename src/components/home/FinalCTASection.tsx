'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export const FinalCTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-dark-bg">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-surface to-dark-bg opacity-50" />
        <div className="absolute inset-0 bg-noise opacity-[0.15]" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="max-w-4xl mx-auto text-center opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="bg-dark-surface border border-white/10 rounded-xl p-12 transition-all duration-500 hover:border-sage-green/20">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6">
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join the future of web development. Let our AI create, optimize, and 
              evolve your website while you focus on growing your business.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <Link
                href="/get-started"
                className="inline-block px-8 py-4 bg-sage-green hover:bg-sage-green-light rounded-lg text-white font-semibold shadow-lg transition-all duration-300"
              >
                Start Building Now
              </Link>
              <Link
                href="/how-it-works"
                className="inline-block px-8 py-4 bg-dark-bg border border-white/10 hover:border-sage-green/20 rounded-lg text-white font-semibold transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
