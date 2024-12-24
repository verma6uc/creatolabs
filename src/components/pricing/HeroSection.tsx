'use client';

import { useEffect, useRef } from 'react';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

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
    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-eggplant via-dark-bg to-dark-surface" />
      <div className="absolute inset-0 pattern-bg opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-sage-green/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-eggplant/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 rounded-2xl text-center backdrop-blur-lg bg-white/5 group hover:bg-white/10 transition-all duration-700">
          {/* Background Gradients */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5 rounded-2xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 opacity-0 translate-y-8 transition-all duration-700"
            >
              Choose Your Path
            </h1>
            <p 
              ref={textRef}
              className="text-xl text-white/90 max-w-2xl mx-auto opacity-0 translate-y-8 transition-all duration-700 delay-200"
            >
              Whether you're just beginning your journey or you're ready to harness AI at scale, 
              our plans offer powerful features—and our token system ensures you only pay for what you need.
            </p>
          </div>

          {/* Card Border Glow */}
          <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-white/20 transition-colors duration-700" />
        </div>
      </div>
    </section>
  );
}
