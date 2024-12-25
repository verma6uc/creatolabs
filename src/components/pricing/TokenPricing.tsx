'use client';

import { useEffect, useRef, useState } from 'react';

const tokenBundles = [
  {
    amount: 300,
    price: 30,
    popular: false,
    pricePerToken: '0.10'
  },
  {
    amount: 600,
    price: 50,
    popular: true,
    pricePerToken: '0.08'
  },
  {
    amount: 1200,
    price: 90,
    popular: false,
    pricePerToken: '0.075'
  }
];

const tokenUsage = [
  {
    feature: 'Content Calendar AI',
    tokens: 15,
    description: 'AI-generated content topics and scheduling',
    icon: '/icons/content-bot.svg'
  },
  {
    feature: 'Link Building Bot',
    tokens: 20,
    description: 'Automated forum posts and community engagement',
    icon: '/icons/share.svg'
  },
  {
    feature: 'Connected Landing Pages',
    tokens: 25,
    description: 'Dynamic data integration and optimization',
    icon: '/icons/evolution.svg'
  },
  {
    feature: 'Deep Competitor Analysis',
    tokens: 25,
    description: 'Comprehensive market positioning insights',
    icon: '/icons/analytics.svg'
  },
  {
    feature: 'Advanced AI Rewrite',
    tokens: 10,
    description: 'Deep learning-powered content optimization',
    icon: '/icons/content-bot.svg'
  }
];

export function TokenPricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedBundle, setSelectedBundle] = useState<number>(1);

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

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute inset-0 pattern-bg opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-sage-green/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-eggplant/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      <div 
        ref={sectionRef}
        className="relative z-10 container mx-auto px-6"
      >
        <div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6">
            The Power Modules
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Need more AI horsepower? Our token-based system lets you scale specific features 
            without upgrading your whole plan. Buy only what you need, when you need it.
          </p>
        </div>

        {/* Token Bundles */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tokenBundles.map((bundle, index) => (
              <div
                key={bundle.amount}
                className={`
                  relative glass-card p-8 rounded-xl cursor-pointer transition-all duration-500 group
                  ${selectedBundle === index ? 'bg-white/10 scale-105' : 'hover:bg-white/5'}
                  ${bundle.popular ? 'border-2 border-sage-green' : ''}
                `}
                onClick={() => setSelectedBundle(index)}
              >
                {bundle.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-sage-green text-dark-bg px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                    Best Value
                  </div>
                )}

                {/* Background Gradients */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5 rounded-xl" />
                </div>

                <div className="text-center relative z-10">
                  <h3 className="text-2xl font-montserrat font-bold text-white mb-4 group-hover:text-sage-green-light transition-colors duration-300">
                    {bundle.amount} Tokens
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white group-hover:text-sage-green-light transition-colors duration-300">${bundle.price}</span>
                  </div>
                  <p className="text-white/60 mb-6">
                    ${bundle.pricePerToken} per token
                  </p>
                  <button className="w-full btn-primary relative overflow-hidden group">
                    <span className="relative z-10">Buy Tokens</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>
                </div>

                {/* Card Border Glow */}
                <div className="absolute inset-0 border border-white/5 rounded-xl group-hover:border-white/20 transition-colors duration-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Token Usage Examples */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-montserrat font-bold text-white mb-8 text-center">
            How Tokens Power Your Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tokenUsage.map((usage) => (
              <div
                key={usage.feature}
                className="glass-card p-6 rounded-xl hover:bg-white/5 transition-all duration-500 group"
              >
                {/* Background Gradients */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5 rounded-xl" />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-montserrat font-bold text-white group-hover:text-sage-green-light transition-colors duration-300">
                    {usage.feature}
                  </h4>
                  <span className="text-sage-green font-bold group-hover:scale-110 transition-transform duration-300">
                    {usage.tokens} tokens
                  </span>
                </div>
                <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                  {usage.description}
                </p>

                {/* Card Border Glow */}
                <div className="absolute inset-0 border border-white/5 rounded-xl group-hover:border-white/20 transition-colors duration-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
