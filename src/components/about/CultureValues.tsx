'use client';

import { useEffect, useRef } from 'react';

const values = [
  {
    title: 'Innovation',
    description: 'We push boundaries, merging art and science in everything we build.',
    gradient: 'from-sage-green/20 to-eggplant/20'
  },
  {
    title: 'Collaboration',
    description: 'Everyone\'s voice matters—our product thrives on shared ideas.',
    gradient: 'from-eggplant/20 to-sage-green/20'
  },
  {
    title: 'User-Centric',
    description: 'We exist to empower creators, from novices to seasoned pros.',
    gradient: 'from-sage-green/20 to-eggplant/20'
  },
  {
    title: 'Transparency',
    description: 'Clear pricing, honest communication, and ethical AI usage guide our path.',
    gradient: 'from-eggplant/20 to-sage-green/20'
  }
];

export function CultureValues() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

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

    const values = valuesRef.current?.children;
    if (values) {
      Array.from(values).forEach((value, index) => {
        if (value instanceof HTMLElement) {
          value.style.transitionDelay = `${index * 150}ms`;
          observer.observe(value);
        }
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute inset-0 pattern-bg opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-sage-green/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-eggplant/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Our Culture & Values
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            The principles that guide us in building the future of web development.
          </p>
        </div>

        <div 
          ref={valuesRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {values.map((value) => (
            <div
              key={value.title}
              className="glass-card p-8 rounded-xl opacity-0 translate-y-8 group hover:bg-white/5 transition-all duration-700"
            >
              {/* Background Gradients */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${value.gradient} rounded-xl`} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-montserrat font-bold text-white mb-4 group-hover:text-sage-green-light transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                  {value.description}
                </p>
              </div>

              {/* Card Border Glow */}
              <div className="absolute inset-0 border border-white/5 rounded-xl group-hover:border-white/20 transition-colors duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
