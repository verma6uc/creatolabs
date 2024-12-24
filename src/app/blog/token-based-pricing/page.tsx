'use client';

import Image from 'next/image';

const PricingComparisonSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Subscription Model */}
    <g className="opacity-70">
      <rect x="50" y="50" width="300" height="300" rx="8" className="stroke-white/40" strokeWidth="2" />
      <text x="200" y="80" className="fill-white text-lg font-medium" textAnchor="middle">Traditional Subscriptions</text>
      
      {/* Monthly Cost Bar */}
      <rect x="100" y="120" width="200" height="40" className="fill-white/20" />
      <text x="200" y="145" className="fill-white text-sm" textAnchor="middle">Fixed Monthly Cost</text>
      
      {/* Usage Pattern */}
      <path d="M100 250 L300 250" className="stroke-white/40" strokeWidth="2" />
      <path d="M100 200 L300 200" className="stroke-white/40" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M100 300 L300 300" className="stroke-white/40" strokeWidth="2" strokeDasharray="4 4" />
      <text x="80" y="200" className="fill-white/60 text-xs" textAnchor="end">High</text>
      <text x="80" y="250" className="fill-white/60 text-xs" textAnchor="end">Usage</text>
      <text x="80" y="300" className="fill-white/60 text-xs" textAnchor="end">Low</text>
      
      {/* Usage Line */}
      <path d="M100 280 Q200 180 300 290" className="stroke-white/60" strokeWidth="2" fill="none" />
    </g>

    {/* Token Model */}
    <g className="opacity-100">
      <rect x="450" y="50" width="300" height="300" rx="8" className="stroke-sage-green" strokeWidth="2" />
      <text x="600" y="80" className="fill-sage-green text-lg font-medium" textAnchor="middle">Token-Based Model</text>
      
      {/* Token Visualization */}
      <g className="animate-pulse">
        <circle cx="525" cy="150" r="20" className="fill-sage-green/20 stroke-sage-green" strokeWidth="1" />
        <text x="525" y="155" className="fill-white text-xs" textAnchor="middle">5</text>
        
        <circle cx="575" cy="150" r="20" className="fill-sage-green/20 stroke-sage-green" strokeWidth="1" />
        <text x="575" y="155" className="fill-white text-xs" textAnchor="middle">10</text>
        
        <circle cx="625" cy="150" r="20" className="fill-sage-green/20 stroke-sage-green" strokeWidth="1" />
        <text x="625" y="155" className="fill-white text-xs" textAnchor="middle">20</text>
        
        <circle cx="675" cy="150" r="20" className="fill-sage-green/20 stroke-sage-green" strokeWidth="1" />
        <text x="675" y="155" className="fill-white text-xs" textAnchor="middle">50</text>
      </g>
      
      {/* Usage Pattern */}
      <path d="M500 250 L700 250" className="stroke-sage-green" strokeWidth="2" />
      <path d="M500 200 L700 200" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M500 300 L700 300" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4" />
      <text x="480" y="200" className="fill-white text-xs" textAnchor="end">High</text>
      <text x="480" y="250" className="fill-white text-xs" textAnchor="end">Usage</text>
      <text x="480" y="300" className="fill-white text-xs" textAnchor="end">Low</text>
      
      {/* Usage Steps */}
      <path d="M500 280 L550 280 L550 240 L600 240 L600 260 L650 260 L650 290 L700 290" 
        className="stroke-sage-green" strokeWidth="2" fill="none" />
    </g>
  </svg>
);

const TokenUsageSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Feature Grid */}
    <g>
      {/* Headers */}
      <text x="200" y="50" className="fill-white text-sm" textAnchor="middle">Feature</text>
      <text x="600" y="50" className="fill-sage-green text-sm" textAnchor="middle">Token Cost</text>

      {/* Content Generation */}
      <rect x="100" y="70" width="200" height="40" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="95" className="fill-white text-sm" textAnchor="middle">Content Generation</text>
      <rect x="500" y="70" width="200" height="40" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="95" className="fill-white text-sm" textAnchor="middle">5 tokens/page</text>

      {/* SEO Analysis */}
      <rect x="100" y="130" width="200" height="40" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="155" className="fill-white text-sm" textAnchor="middle">SEO Analysis</text>
      <rect x="500" y="130" width="200" height="40" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="155" className="fill-white text-sm" textAnchor="middle">3 tokens/analysis</text>

      {/* Design Updates */}
      <rect x="100" y="190" width="200" height="40" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="215" className="fill-white text-sm" textAnchor="middle">Design Updates</text>
      <rect x="500" y="190" width="200" height="40" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="215" className="fill-white text-sm" textAnchor="middle">2 tokens/update</text>
    </g>
  </svg>
);

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-dark-bg text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <time className="text-sage-green text-sm font-medium">October 22, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            A Deep Dive into Token-Based Pricing: Pay for What You Need
          </h1>
          <p className="text-xl text-white/80">
            Why we chose a flexible token system over traditional subscriptions
          </p>
        </header>

        <div className="prose prose-lg prose-invert mx-auto space-y-12">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20 shadow-lg">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Rethinking Pricing Models</h2>
            <p className="text-white/90 leading-relaxed">
              "At Microsoft," I (Vaibhav) share, "I saw how enterprise customers struggled 
              with rigid subscription models. Some months they'd barely use the service, 
              other months they'd hit their limits. It never quite matched their actual needs."
            </p>
            
            <PricingComparisonSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, "When designing CreatorLabs' pricing, we wanted to create something 
              that truly aligned with value. Tokens provide that flexibility – you only pay 
              for the AI operations you actually use."
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">How Tokens Work</h2>
            <TokenUsageSVG />
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Transparent Value</h3>
                <p className="text-white/90 leading-relaxed">
                  "Each token represents a specific AI operation," I explain. "Whether it's 
                  generating content, analyzing competitors, or optimizing your design, you 
                  always know exactly what you're paying for. No hidden costs, no unused 
                  subscription fees."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Flexible Usage</h3>
                <p className="text-white/90 leading-relaxed">
                  "The beauty of tokens," Sahil notes, "is that they never expire. You can 
                  use them intensively during a website redesign, then space them out for 
                  maintenance and optimization. It's completely aligned with your workflow."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Real-World Benefits</h2>
            <p className="text-white/90 leading-relaxed">
              "One of our early users, a marketing agency," I share, "found that tokens 
              perfectly matched their project-based workflow. They could bulk-buy tokens 
              during their annual budget and use them flexibly across different client 
              projects throughout the year."
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              Sahil explains, "We've also seen solo entrepreneurs appreciate the control. 
              They can start small, experiment with different features, and scale up their 
              token usage as their business grows. It's growth-friendly pricing that puts 
              you in control."
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Start Your Token Journey</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Experience the flexibility of token-based pricing for yourself. Start with a 
              small package to explore our features, then scale up as you see the results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/pricing" 
                className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold text-center"
              >
                View Token Packages
              </a>
              <a 
                href="/features" 
                className="inline-block bg-transparent text-sage-green px-8 py-4 rounded-lg border border-sage-green hover:bg-sage-green/10 transition-all duration-300 font-semibold text-center"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
