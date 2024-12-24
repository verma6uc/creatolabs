'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const milestones = [
  {
    year: '2023',
    title: 'The Spark',
    description: 'Conceptualized the idea of a living, AI-powered website platform.',
    icon: '/icons/content-bot.svg'
  },
  {
    year: '2024 Q1',
    title: 'Early Development',
    description: 'Assembled our core team and began building the AI-driven evolution engine.',
    icon: '/icons/design-bot.svg'
  },
  {
    year: '2024 Q2',
    title: 'Private Beta',
    description: 'Launched with 50 select users, refining our Dynamic Evolution features.',
    icon: '/icons/evolution.svg'
  },
  {
    year: 'Present',
    title: 'Public Launch',
    description: 'Released to the public with full AI Agents and growing global user base.',
    icon: '/icons/launch.svg'
  }
];

export function CompanyTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

    const nodes = timelineRef.current?.children;
    if (nodes) {
      Array.from(nodes).forEach((node, index) => {
        if (node instanceof HTMLElement) {
          node.style.transitionDelay = `${index * 200}ms`;
          observer.observe(node);
        }
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-dark-surface/50">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-surface to-dark-bg" />
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
            Our Milestones
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            From initial concept to public launch, follow our journey of innovation and growth.
          </p>
        </div>

        <div 
          ref={timelineRef}
          className="max-w-4xl mx-auto relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sage-green/80 via-sage-green-light/60 to-eggplant/80 blur-[0.5px] shadow-timeline animate-glow" />

          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`
                relative flex items-center mb-12 opacity-0 translate-y-8
                ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
              `}
            >
              {/* Left/Right Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <h3 className="text-2xl font-montserrat font-bold text-white mb-2 group-hover:text-sage-green-light transition-colors duration-300">
                  {milestone.title}
                </h3>
                <p className="text-white/90 group-hover:text-white transition-colors duration-300">{milestone.description}</p>
              </div>

              {/* Center Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 glass-card rounded-full flex items-center justify-center group hover:scale-110 transition-all duration-300 shadow-card animate-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-green/30 to-eggplant/30 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-sage-green/50 to-eggplant/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-10 h-10 animate-float">
                  <Image
                    src={milestone.icon}
                    alt={milestone.title}
                    fill
                    className="object-contain brightness-125 group-hover:brightness-150 transition-all duration-300"
                  />
                </div>
                <div className="absolute -top-10 text-sage-green-light font-montserrat font-bold text-lg group-hover:text-white transition-colors duration-300 animate-float-delayed">
                  {milestone.year}
                </div>
              </div>

              {/* Empty Space for Right/Left Side */}
              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
