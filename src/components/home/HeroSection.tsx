'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (subtitleRef.current) {
      observer.observe(subtitleRef.current);
    }
    if (buttonsRef.current) {
      observer.observe(buttonsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Glassmorphism Background */}
      <div className="absolute inset-0">
        {/* Base gradient with subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-eggplant via-dark-bg to-dark-surface opacity-90 animate-gradient bg-[length:400%_400%]" />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.15]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-sage-green/20 to-transparent blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-eggplant/20 to-transparent blur-[120px] animate-float-delayed" />
        
        {/* Enhanced glass overlay */}
        <div className="absolute inset-0 backdrop-blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        {/* Enhanced Glass Card Container */}
        <div className="max-w-4xl mx-auto p-12 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)] relative overflow-hidden">
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_100px_rgba(255,255,255,0.03)]" />
          
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5 opacity-50 animate-pulse-slow" />
          
          {/* Content inside glass card */}
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-montserrat font-bold text-white mb-8 opacity-0 translate-y-8 transition-all duration-700"
          >
            AI That Builds Your Website—<br />
            <span className="text-sage-green">No Code, No Hassle</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 opacity-0 translate-y-8 transition-all duration-700 delay-200"
          >
            Meet our intelligent AI agents that analyze your goals, competitors, and 
            audience to create a website that continuously evolves to meet your needs.
          </p>

          <div 
            ref={buttonsRef}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 opacity-0 translate-y-8 transition-all duration-700 delay-400"
          >
            <Link
              href="/get-started"
              className="btn-primary relative overflow-hidden group bg-gradient-to-r from-sage-green to-sage-green-light hover:from-sage-green-light hover:to-sage-green transition-all duration-300 px-8 py-4 rounded-lg text-lg font-semibold"
            >
              <span className="relative z-10">Build My Website</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>

            <Link
              href="/how-it-works"
              className="btn-secondary relative overflow-hidden group border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold"
            >
              <span className="relative z-10">Watch Demo</span>
              <div className="relative z-10 w-5 h-5 rounded-full bg-sage-green/20 flex items-center justify-center group-hover:bg-sage-green/30 transition-colors duration-300">
                <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent ml-0.5" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
