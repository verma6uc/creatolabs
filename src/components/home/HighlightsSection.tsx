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
    title: 'Instant Creation',
    description: 'Watch your site take shape in minutes—no coding required.',
    icon: '/icons/design-bot.svg'
  },
  {
    title: 'Smart Competitor Analysis',
    description: 'Stay ahead with data-driven insights from top players in your niche.',
    icon: '/icons/analytics.svg'
  },
  {
    title: 'Continuous Improvement',
    description: 'Real-time analytics guide automatic updates for ongoing optimization.',
    icon: '/icons/evolution.svg'
  },
  {
    title: 'SEO & Content',
    description: 'Our AI optimizes your copy and structure to climb search rankings.',
    icon: '/icons/seo-bot.svg'
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
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/95 to-dark-surface" />
        <div className="absolute inset-0 bg-noise opacity-[0.15]" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6">
            How Our AI Builds Your Website
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            From design to launch, our AI agents collaborate to create and continuously 
            refine your site.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="group relative"
            >
              {/* Compact Glass Card */}
              <div className="relative p-6 rounded-xl bg-white/[0.02] backdrop-blur-lg border border-white/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-500 hover:bg-white/[0.04] h-full">
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_45px_rgba(255,255,255,0.02)]" />
                
                {/* Hover gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5" />
                </div>

                {/* Icon with glow */}
                <div className="relative w-12 h-12 mb-4 transform transition-transform duration-500 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage-green/20 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 w-full h-full bg-white/5 rounded-lg p-2.5 backdrop-blur-sm border border-white/10">
                    <Image
                      src={highlight.icon}
                      alt={highlight.title}
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-montserrat font-bold text-white mb-2 group-hover:text-sage-green-light transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-white/80 text-sm group-hover:text-white/90 transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
