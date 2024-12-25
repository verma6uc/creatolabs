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
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-eggplant via-dark-bg to-dark-surface" />
      <div className="absolute inset-0 pattern-bg opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-sage-green/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-eggplant/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-montserrat font-bold text-white mb-8 opacity-0 translate-y-8 transition-all duration-700"
        >
          Enterprise Power,<br />AI Innovation
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 opacity-0 translate-y-8 transition-all duration-700 delay-200"
        >
          Transform your web presence with AI-driven evolution powered by enterprise-grade 
          architecture and cutting-edge neural networks.
        </p>

        <div 
          ref={buttonsRef}
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 opacity-0 translate-y-8 transition-all duration-700 delay-400"
        >
          <Link
            href="/get-started"
            className="btn-primary relative overflow-hidden group"
          >
            <span className="relative z-10">Start Your Evolution</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Link>

          <Link
            href="/features"
            className="btn-secondary relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Link>
        </div>
      </div>
    </section>
  );
};
