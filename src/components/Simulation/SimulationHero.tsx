'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function SimulationHero({ onStart }: { onStart: () => void }) {
  const [isInitializing, setIsInitializing] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const agents = [
    { icon: '/icons/dashboard.svg', name: 'Admiral Planner', delay: '0ms' },
    { icon: '/icons/design-bot.svg', name: 'Captain SiteBuilder', delay: '100ms' },
    { icon: '/icons/content-bot.svg', name: 'Commander Content', delay: '200ms' },
    { icon: '/icons/analytics.svg', name: 'Research Officer', delay: '300ms' },
    { icon: '/icons/seo-bot.svg', name: 'Lieutenant SEO', delay: '400ms' },
    { icon: '/icons/share.svg', name: 'Social Commander', delay: '500ms' },
    { icon: '/icons/blueprint.svg', name: 'UX Engineer', delay: '600ms' },
    { icon: '/icons/evolution.svg', name: 'Security Officer', delay: '700ms' }
  ];

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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleStart = () => {
    setIsInitializing(true);
    setTimeout(() => {
      setIsInitializing(false);
      onStart();
    }, 3000);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-eggplant via-dark-bg to-dark-surface opacity-90" />
      <div className="absolute inset-0 pattern-bg opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Gradients */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-sage-green/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-eggplant/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 container mx-auto px-6"
      >
        <div className="glass-card max-w-5xl mx-auto p-8 md:p-12 rounded-2xl backdrop-blur-lg bg-white/5 group hover:bg-white/10 transition-all duration-700 opacity-0 translate-y-8">
          {/* Background Gradients */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5 rounded-2xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 text-center">
              Your AI Command Center
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12 text-center">
              Experience how our elite team of AI agents works in perfect harmony to transform your vision 
              into a dynamic, evolving web presence. Each agent brings specialized expertise to create 
              something truly extraordinary.
            </p>

            {/* AI Agents Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              {agents.map((agent) => (
                <div 
                  key={agent.name}
                  className="flex flex-col items-center group/agent"
                  style={{ 
                    animationDelay: agent.delay,
                    animation: 'fadeIn 0.5s ease-out forwards'
                  }}
                >
                  <div className="relative w-16 h-16 mb-3">
                    <Image
                      src={agent.icon}
                      alt={agent.name}
                      fill
                      className="object-contain group-hover/agent:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-sage-green/10 to-transparent rounded-full opacity-0 group-hover/agent:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-white/80 text-sm text-center group-hover/agent:text-sage-green transition-colors duration-300">
                    {agent.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="text-center">
              <button
                onClick={handleStart}
                disabled={isInitializing}
                className="btn-primary relative overflow-hidden group min-w-[200px]"
              >
                <span className="relative z-10">
                  {isInitializing ? 'Initializing Command Center...' : 'Start Simulation'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
              {!isInitializing && (
                <p className="text-white/60 text-sm mt-4">
                  Watch our AI agents collaborate in real-time
                </p>
              )}
            </div>
          </div>

          {/* Card Border Glow */}
          <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-white/20 transition-colors duration-700" />
        </div>
      </div>
    </section>
  );
}
