'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Step {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const steps: Step[] = [
  {
    title: "Share Your Vision & Brand",
    description: "Tell us your goals, inspirations, and competitor sites. We'll gather the essentials to guide our AI.",
    icon: "/icons/content-bot.svg",
    features: [
      "Basic project details",
      "Competitor analysis",
      "Brand voice & style"
    ]
  },
  {
    title: "AI Blueprint & Content",
    description: "Our AI analyzes your inputs and competitor insights to propose pages, layouts, and initial copy—ready in minutes.",
    icon: "/icons/blueprint.svg",
    features: [
      "Site structure",
      "Page layouts",
      "Initial content"
    ]
  },
  {
    title: "Refine & Preview",
    description: "Tweak the layout, adjust colors, or request fresh copy. You stay in control of the final design.",
    icon: "/icons/design-bot.svg",
    features: [
      "Live preview",
      "Quick adjustments",
      "Content refinement"
    ]
  },
  {
    title: "Launch & Evolve",
    description: "Your site goes live, then grows with each visitor interaction. From design tweaks to fresh content, our AI keeps you optimized.",
    icon: "/icons/evolution.svg",
    features: [
      "Instant publishing",
      "Visitor analytics",
      "Auto-optimization"
    ]
  },
  {
    title: "Content Calendar",
    description: "Let AI handle your content strategy with automated blog posts and articles, perfectly timed for maximum impact.",
    icon: "/icons/content.svg",
    features: [
      "Auto-scheduling",
      "Topic generation",
      "Content creation"
    ]
  },
  {
    title: "Backlink Building",
    description: "Our AI identifies relevant forums and communities, creating engaging responses that naturally link back to your site.",
    icon: "/icons/share.svg",
    features: [
      "Forum discovery",
      "Answer generation",
      "Link tracking"
    ]
  }
];

export const StepsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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

    const steps = stepsRef.current?.children;
    if (steps) {
      Array.from(steps).forEach((step, index) => {
        if (step instanceof HTMLElement) {
          step.classList.add('opacity-0', 'translate-y-8');
          step.style.transitionDelay = `${index * 150}ms`;
          observer.observe(step);
        }
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-dark-surface">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg to-dark-surface opacity-50" />
        <div className="absolute inset-0 bg-noise opacity-[0.15]" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6">
            How CreatorLabs Builds & Grows Your Website
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            From vision to reality in six powerful steps. Our AI handles the complexity 
            while you stay in control.
          </p>
        </div>

        {/* Steps Grid */}
        <div 
          ref={stepsRef}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto"
        >
          {/* Connecting Lines */}
          <div className="absolute hidden lg:block">
            {/* Horizontal Lines */}
            <div className="absolute top-[4.5rem] left-[calc(33.33%-4rem)] w-[calc(66.67%+8rem)] h-1 bg-gradient-to-r from-sage-green/30 via-sage-green/20 to-sage-green/30 animate-pulse-slow" />
            <div className="absolute top-[calc(50%+4.5rem)] left-[calc(33.33%-4rem)] w-[calc(66.67%+8rem)] h-1 bg-gradient-to-r from-sage-green/30 via-sage-green/20 to-sage-green/30 animate-pulse-slow" />
            
            {/* Vertical Lines */}
            <div className="absolute top-[4.5rem] left-[33.33%] w-1 h-[calc(50%)] bg-gradient-to-b from-sage-green/30 via-sage-green/20 to-sage-green/30 animate-pulse-slow" />
            <div className="absolute top-[4.5rem] left-[66.67%] w-1 h-[calc(50%)] bg-gradient-to-b from-sage-green/30 via-sage-green/20 to-sage-green/30 animate-pulse-slow" />

            {/* Corner Dots */}
            <div className="absolute top-[4.5rem] left-[33.33%] w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-sage-green animate-pulse" />
            <div className="absolute top-[4.5rem] left-[66.67%] w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-sage-green animate-pulse" />
            <div className="absolute top-[calc(50%+4.5rem)] left-[33.33%] w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-sage-green animate-pulse" />
            <div className="absolute top-[calc(50%+4.5rem)] left-[66.67%] w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-sage-green animate-pulse" />
          </div>

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              {/* Step Card */}
              <div className="relative bg-dark-bg border border-white/10 rounded-xl p-8 transition-all duration-500 hover:border-sage-green/20 h-full">
                {/* Step Number */}
                <div className="absolute -left-8 -top-8 w-16 h-16 rounded-full bg-gradient-to-br from-sage-green to-sage-green-light text-white flex items-center justify-center font-bold text-2xl shadow-lg transform transition-transform duration-500 group-hover:scale-110">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="relative w-12 h-12 mb-6">
                  <div className="w-full h-full bg-sage-green/10 rounded-lg p-2.5 transition-colors duration-500 group-hover:bg-sage-green/20">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain brightness-0 invert"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-white mb-3 transition-colors duration-300 group-hover:text-sage-green-light">
                    {step.title}
                  </h3>
                  <p className="text-white/90 mb-6 transition-colors duration-300 group-hover:text-white">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-white/80 transition-colors duration-300 group-hover:text-white/90">
                        <span className="w-1.5 h-1.5 bg-sage-green rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage-green/5 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/get-started"
            className="inline-block px-8 py-4 bg-sage-green hover:bg-sage-green-light rounded-lg text-white font-semibold shadow-lg transition-all duration-300"
          >
            Start Building Now
          </Link>
        </div>
      </div>
    </section>
  );
};
