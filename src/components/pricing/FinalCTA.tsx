'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export function FinalCTA() {
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
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute inset-0 pattern-bg opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-sage-green/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-eggplant/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div 
        ref={sectionRef}
        className="relative z-10 container mx-auto px-6"
      >
        <div className="max-w-4xl mx-auto glass-card p-12 rounded-2xl text-center backdrop-blur-lg bg-white/5 group hover:bg-white/10 transition-all duration-700 opacity-0 translate-y-8">
          {/* Background Gradients */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5 rounded-2xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6">
              Step Into the Future
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Your next chapter awaits—pick a plan, grab some tokens if you need extra AI magic, 
              and let CreatorLabs redefine your online presence.
            </p>
            <Link
              href="/get-started"
              className="inline-block btn-primary text-lg px-12 py-4 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </div>

          {/* Card Border Glow */}
          <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-white/20 transition-colors duration-700" />
        </div>
      </div>
    </section>
  );
}
