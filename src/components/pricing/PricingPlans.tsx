'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const plans = [
  {
    name: 'Base Warp',
    price: '$50',
    period: '/month',
    features: [
      'AI-Driven Layouts',
      'Dynamic Evolution (up to 10,000 visits/mo)',
      'Competitor Snapshot',
      'Basic Analytics Integration'
    ],
    cta: 'Choose Base Warp',
    href: '/get-started?plan=base'
  },
  {
    name: 'Warp Speed',
    price: '$99',
    period: '/month',
    features: [
      'All Base Warp Features',
      'Dynamic Evolution (up to 50,000 visits/mo)',
      'Advanced Competitor Tracking',
      'Custom Domain & Branding',
      'Premium Support'
    ],
    cta: 'Choose Warp Speed',
    href: '/get-started?plan=pro',
    popular: true
  },
  {
    name: 'Interstellar',
    price: '$199',
    period: '/month',
    features: [
      'All Warp Speed Features',
      'Unlimited Visits',
      'Deep Competitor Analytics',
      'Priority AI Customization',
      'Dedicated Account Manager'
    ],
    cta: 'Go Interstellar',
    href: '/get-started?plan=business'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    features: [
      'All Interstellar Features',
      'Multi-Brand Management',
      'Custom Integrations',
      'Unlimited Collaboration',
      'On-Site Training & Support'
    ],
    cta: 'Contact Us',
    href: '/contact'
  }
];

export function PricingPlans() {
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
            The Grand Array
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Select the plan that fuels your ambitions. All tiers come with core AI-driven design, 
            dynamic evolution, and competitor insights—scaled to your needs.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative glass-card p-8 rounded-xl transform transition-all duration-700 
                hover:scale-105 hover:bg-white/10 opacity-0 translate-y-8 group
                ${plan.popular ? 'border-2 border-sage-green' : ''}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-sage-green text-dark-bg px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                  Most Popular
                </div>
              )}

              {/* Background Gradients */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5 rounded-xl" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-montserrat font-bold text-white mb-4 group-hover:text-sage-green-light transition-colors duration-300">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white group-hover:text-sage-green-light transition-colors duration-300">{plan.price}</span>
                  <span className="text-white/60">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-white/80 group-hover:text-white transition-colors duration-300">
                      <span className="mr-2 text-sage-green">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className="block w-full btn-primary text-center relative overflow-hidden group"
                >
                  <span className="relative z-10">{plan.cta}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
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
