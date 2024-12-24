'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const highlights: Feature[] = [
  {
    title: 'AI-Driven Creation',
    description: 'Get instant layouts and personalized copy—no coding, no stress.',
    icon: '/icons/design-bot.svg'
  },
  {
    title: 'Continuous Evolution',
    description: 'Each click refines your site in real time, adapting layouts and content effortlessly.',
    icon: '/icons/evolution.svg'
  },
  {
    title: 'Competitor Insights',
    description: 'Stay on top by leveraging industry data and automated SEO suggestions.',
    icon: '/icons/seo-bot.svg'
  },
  {
    title: 'Instant Analytics',
    description: 'Built-in tracking and reporting—no extra plugins or setup needed.',
    icon: '/icons/analytics.svg'
  }
];

export const HighlightsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

    const cards = cardsRef.current?.children;
    if (cards) {
      Array.from(cards).forEach((card, index) => {
        if (card instanceof HTMLElement) {
          card.classList.add('opacity-0', 'translate-y-8');
          card.style.transitionDelay = `${index * 150}ms`;
          observer.observe(card);
        }
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/95 to-dark-surface" />
      <div className="absolute inset-0 pattern-bg opacity-20" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6">
            The Revelation
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A glimpse into the powers that make Creator Lab an unstoppable force in web design.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="group glass-card p-8 rounded-xl transform transition-all duration-700 hover:scale-105 bg-gradient-to-br from-white/[0.35] to-white/[0.25] relative overflow-hidden shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3),0_0_24px_rgba(255,255,255,0.15)] shadow-black/40"
            >
              {/* Pattern Background */}
              <div className="absolute inset-0 opacity-5 pattern-bg" />
              
              {/* Inner Glow */}
              <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_45px_rgba(255,255,255,0.15)]" />

              {/* Background Gradients */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-green/30 via-transparent to-eggplant/30 bg-400% animate-gradient" />
              </div>

              {/* Icon */}
              <div className="relative w-16 h-16 mb-6 mx-auto transform transition-all duration-500 group-hover:scale-110 group-hover:brightness-125 animate-pulse-slow">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-green/70 via-sage-green/60 to-eggplant/60 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
                <Image
                  src={highlight.icon}
                  alt={highlight.title}
                  fill
                  className="object-contain relative z-10 drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)] brightness-110"
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-montserrat font-bold text-white mb-4 transition-colors duration-300 group-hover:text-sage-green-light">
                  {highlight.title}
                </h3>
                <p className="text-white/90 transition-colors duration-300 group-hover:text-white">
                  {highlight.description}
                </p>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-sage-green/50 via-sage-green/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-eggplant/50 via-eggplant/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-1/2 translate-y-1/2" />
              </div>

              {/* Card Border */}
              <div className="absolute inset-0 border border-white/50 rounded-xl group-hover:border-sage-green/70 transition-colors duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
