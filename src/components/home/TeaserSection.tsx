'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export const TeaserSection = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-eggplant-dark/70 via-dark-bg/95 to-dark-bg" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.15]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-sage-green/10 to-transparent blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-eggplant/10 to-transparent blur-[120px] animate-float-delayed" />
      </div>
      
      <div 
        ref={textRef}
        className="relative z-10 container mx-auto px-4 opacity-0 transform translate-x-[-100px]"
      >
        {/* Enhanced Glass Card */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden">
          <div className="relative p-12 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            {/* Inner glow */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(255,255,255,0.02)]" />
            
            {/* Content */}
            <div className="relative space-y-8">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white text-center">
                3 Simple Steps to Your Website
              </h2>
              
              {/* Steps */}
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-sage-green/20 text-sage-green flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 pl-6">Share Your Vision</h3>
                  <p className="text-white/80 pl-6">Tell us about your goals and preferences through our guided wizard</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-sage-green/20 text-sage-green flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 pl-6">AI Creates</h3>
                  <p className="text-white/80 pl-6">Our AI team analyzes, designs, and builds your complete website</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-sage-green/20 text-sage-green flex items-center justify-center font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 pl-6">Launch & Evolve</h3>
                  <p className="text-white/80 pl-6">Your site goes live and continuously improves based on real data</p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <Link
                  href="/get-started"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-sage-green to-sage-green-light rounded-lg text-white font-semibold shadow-lg hover:from-sage-green-light hover:to-sage-green transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10">Start Building Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-px h-24">
          <div className="w-full h-full bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};
