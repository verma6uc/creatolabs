'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export interface TimelineStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  extraInfo: string;
}

interface VerticalTimelineProps {
  steps: TimelineStep[];
}

export default function VerticalTimeline({ steps }: VerticalTimelineProps) {
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

    const stepElements = timelineRef.current?.children;
    if (stepElements) {
      Array.from(stepElements).forEach((step, index) => {
        if (step instanceof HTMLElement) {
          step.style.transitionDelay = `${index * 150}ms`;
          observer.observe(step);
        }
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mb-24">
      <div ref={timelineRef} className="relative pl-8 border-l-2 border-gradient-to-b from-sage-green/50 to-eggplant/50">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative mb-12 opacity-0 translate-y-8"
          >
            {/* Step Number */}
            <div className="absolute -left-[3.25rem] w-16 h-16 glass-card rounded-full flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-sage-green/10 to-eggplant/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-8 h-8">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute -top-8 text-sage-green font-montserrat font-bold">
                {step.number.toString().padStart(2, '0')}
              </div>
            </div>

            {/* Content */}
            <div className="glass-card p-6 rounded-xl ml-4 group hover:bg-white/5 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-montserrat font-bold text-white mb-2 group-hover:text-sage-green-light transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-white/80 mb-4 group-hover:text-white transition-colors duration-300">
                  {step.description}
                </p>
                <p className="text-white/60 italic group-hover:text-white/80 transition-colors duration-300">
                  {step.extraInfo}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
