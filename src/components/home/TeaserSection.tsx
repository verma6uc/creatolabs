'use client';

import { useEffect, useRef } from 'react';

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
      <div className="absolute inset-0 bg-gradient-to-b from-eggplant-dark/70 via-dark-bg/95 to-dark-bg" />
      <div className="absolute inset-0 pattern-bg opacity-20" />
      
      <div 
        ref={textRef}
        className="relative z-10 container mx-auto px-4 opacity-0 transform translate-x-[-100px]"
      >
        <div className="glass-card relative max-w-4xl mx-auto p-8 md:p-12 rounded-2xl text-center backdrop-blur-lg bg-gradient-to-br from-white/[0.15] to-white/[0.08] border border-white/20 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)] shadow-black/40">
          {/* Inner Glow */}
          <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgba(255,255,255,0.08)]" />
          
          {/* Gradient Orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-sage-green/30 via-sage-green/10 to-transparent rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-eggplant/30 via-eggplant/10 to-transparent rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6">
              The Summon
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              You bring the vision. We bring the AI-driven architecture, competitor insights, and dynamic evolution—so your website grows before your eyes.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-white/40 to-transparent" />
          
          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-sage-green/10 via-transparent to-eggplant/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </section>
  );
};
