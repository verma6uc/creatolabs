'use client';

import { useEffect, useRef } from 'react';

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      heroRef.current.style.transform = `scale(${1 + scrolled * 0.0005})`;
      heroRef.current.style.filter = `brightness(${1 - scrolled * 0.001})`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        ref={heroRef}
        className="absolute inset-0 bg-gradient-to-br from-eggplant via-eggplant-dark to-sage-green-dark transition-transform duration-300"
      >
        <div className="absolute inset-0 pattern-bg opacity-20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 text-center">
        <div className="glass-card p-8 md:p-12 rounded-2xl backdrop-blur-lg bg-white/10">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-up">
            Meet Your AI Crew for Website Creation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 animate-fade-up animate-delay-100">
            From Captain SiteBuilder to Lieutenant SEO, our AI crew works tirelessly to create, evolve, and optimize your website in real-time.
          </p>
        </div>
      </div>
    </section>
  );
};
