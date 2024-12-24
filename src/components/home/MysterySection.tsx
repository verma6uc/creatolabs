'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export const MysterySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

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

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      if (buttonRef.current) {
        buttonRef.current.classList.add('animate-pulse');
        setTimeout(() => {
          buttonRef.current?.classList.remove('animate-pulse');
        }, 1000);
      }
    }, 3000);

    return () => clearInterval(pulseInterval);
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface to-dark-bg" />
      <div className="absolute inset-0 pattern-bg opacity-10" />
      
      <div 
        ref={sectionRef}
        className="relative z-10 container mx-auto px-4 opacity-0 translate-y-8"
      >
        <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 rounded-2xl text-center backdrop-blur-lg bg-white/5 group hover:bg-white/10 transition-all duration-700 relative overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6 group-hover:text-sage-green-light transition-colors duration-300">
              The Mystery Beckons
            </h2>
            <p className="text-xl text-white/90 mb-10 group-hover:text-white transition-colors duration-300">
              Behind every great performance lies a seamless backstage. Curious how we orchestrate it all?
            </p>
            <Link
              ref={buttonRef}
              href="/how-it-works"
              className="btn-secondary relative overflow-hidden group inline-block"
            >
              <span className="relative z-10">Explore Our Process</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </div>

          {/* Hover Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-sage-green/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-eggplant/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-1/2 translate-y-1/2" />
          </div>

          {/* Card Border Glow */}
          <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-white/20 transition-colors duration-700" />

          {/* Decorative Elements */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};
