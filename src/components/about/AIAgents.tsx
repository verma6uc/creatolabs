'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const agents = [
  {
    name: 'Captain SiteBuilder',
    role: 'Core Structure & Design',
    description: 'Oversees your site&apos;s core structure and design. Helps chart the initial blueprint and ensures your site remains on the right course.',
    icon: '/icons/design-bot.svg'
  },
  {
    name: 'Commander Content',
    role: 'Content Strategy',
    description: 'Specializes in crafting high-impact copy and text prompts. Handles your website&apos;s voice, tone, and messaging like a pro.',
    icon: '/icons/content-bot.svg'
  },
  {
    name: 'Lieutenant SEO',
    role: 'Search Optimization',
    description: 'Keeps a watchful eye on search rankings, competitor moves, and keywords. Optimizes your content for maximum visibility.',
    icon: '/icons/seo-bot.svg'
  },
  {
    name: 'Analytics Officer',
    role: 'Performance Tracking',
    description: 'Monitors user behavior, engagement metrics, and site performance. Provides actionable insights for continuous improvement.',
    icon: '/icons/analytics.svg'
  }
];

export function AIAgents() {
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
          card.style.transitionDelay = `${index * 150}ms`;
          observer.observe(card);
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
            Meet the AI Crew
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our resident AI &quot;officers&quot; guide you through every stage of building and evolving your website. 
            Each plays a distinct role—just like a starship&apos;s crew.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="glass-card p-8 rounded-xl opacity-0 translate-y-8 group hover:bg-white/5 transition-all duration-700"
            >
              {/* Background Gradients */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5 rounded-xl" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 relative group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={agent.icon}
                    alt={agent.name}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-sage-green/10 to-eggplant/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text */}
                <h3 className="text-2xl font-montserrat font-bold text-white mb-2 group-hover:text-sage-green-light transition-colors duration-300">
                  {agent.name}
                </h3>
                <p className="text-sage-green font-bold mb-4">
                  {agent.role}
                </p>
                <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                  {agent.description}
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
