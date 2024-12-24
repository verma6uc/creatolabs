'use client';

import { useEffect, useRef, Fragment } from 'react';

const features = [
  {
    name: 'AI-Driven Design',
    base: '✓',
    pro: '✓',
    business: '✓',
    enterprise: '✓',
    category: 'Core Features'
  },
  {
    name: 'Dynamic Evolution',
    base: '10k visits',
    pro: '50k visits',
    business: 'Unlimited',
    enterprise: 'Unlimited',
    category: 'Core Features'
  },
  {
    name: 'Competitor Insights',
    base: 'Basic',
    pro: 'Advanced',
    business: 'Deep',
    enterprise: 'Custom',
    category: 'Core Features'
  },
  {
    name: 'Analytics Integration',
    base: 'Basic',
    pro: 'Advanced',
    business: 'Premium',
    enterprise: 'Enterprise',
    category: 'Analytics'
  },
  {
    name: 'Custom Domain',
    base: '✗',
    pro: '✓',
    business: '✓',
    enterprise: '✓',
    category: 'Customization'
  },
  {
    name: 'White Labeling',
    base: '✗',
    pro: '✗',
    business: '✓',
    enterprise: '✓',
    category: 'Customization'
  },
  {
    name: 'Support',
    base: 'Email',
    pro: 'Priority Email',
    business: '24/7 Chat',
    enterprise: 'Dedicated Manager',
    category: 'Support'
  },
  {
    name: 'Team Members',
    base: '1',
    pro: '3',
    business: '10',
    enterprise: 'Unlimited',
    category: 'Collaboration'
  },
  {
    name: 'Custom Integrations',
    base: '✗',
    pro: '✗',
    business: 'Limited',
    enterprise: 'Full Access',
    category: 'Advanced'
  }
];

const categories = Array.from(new Set(features.map(f => f.category)));

export function ComparisonTable() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);

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

    const rows = tableRef.current?.querySelectorAll('tr');
    if (rows) {
      Array.from(rows).forEach((row, index) => {
        row.style.transitionDelay = `${index * 50}ms`;
        observer.observe(row);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute inset-0 pattern-bg opacity-10" />
      
      <div 
        ref={sectionRef}
        className="relative z-10 container mx-auto px-6"
      >
        <div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6">
            The Grand Tally
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A detailed comparison of features across all plans to help you make the perfect choice.
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto glass-card rounded-xl">
          <table 
            ref={tableRef}
            className="w-full min-w-[800px]"
          >
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-6 text-left text-lg font-montserrat font-bold text-white">Features</th>
                <th className="p-6 text-center text-lg font-montserrat font-bold text-white">Base Warp</th>
                <th className="p-6 text-center text-lg font-montserrat font-bold text-white">Warp Speed</th>
                <th className="p-6 text-center text-lg font-montserrat font-bold text-white">Interstellar</th>
                <th className="p-6 text-center text-lg font-montserrat font-bold text-white">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <Fragment key={category}>
                  <tr className="border-t border-white/10 bg-white/5">
                    <td 
                      colSpan={5}
                      className="p-4 text-sm font-bold text-sage-green uppercase tracking-wider"
                    >
                      {category}
                    </td>
                  </tr>
                  {features
                    .filter(f => f.category === category)
                    .map((feature) => (
                      <tr 
                        key={feature.name}
                        className="border-t border-white/10 opacity-0 translate-y-4 hover:bg-white/5 transition-colors duration-300"
                      >
                        <td className="p-4 text-white">{feature.name}</td>
                        <td className="p-4 text-center text-white/80">{feature.base}</td>
                        <td className="p-4 text-center text-white/80">{feature.pro}</td>
                        <td className="p-4 text-center text-white/80">{feature.business}</td>
                        <td className="p-4 text-center text-white/80">{feature.enterprise}</td>
                      </tr>
                    ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
