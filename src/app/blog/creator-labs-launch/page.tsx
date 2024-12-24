'use client';

import Image from 'next/image';

const JourneySVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Journey Timeline */}
    <path d="M100 100 L700 100" className="stroke-sage-green/30" strokeWidth="2" />
    
    {/* Microsoft Experience */}
    <circle cx="200" cy="100" r="20" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="200" y="150" className="fill-white text-sm" textAnchor="middle">Microsoft Years</text>
    
    {/* AI Research */}
    <circle cx="400" cy="100" r="20" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="400" y="150" className="fill-white text-sm" textAnchor="middle">AI Innovation</text>
    
    {/* CreatorLabs Launch */}
    <circle cx="600" cy="100" r="30" className="fill-sage-green/30 stroke-sage-green" strokeWidth="3">
      <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" />
    </circle>
    <text x="600" y="150" className="fill-sage-green text-sm font-bold" textAnchor="middle">CreatorLabs Launch</text>
  </svg>
);

const PlatformCapabilitiesSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Platform */}
    <rect x="300" y="150" width="200" height="100" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="400" y="200" className="fill-white text-lg font-medium" textAnchor="middle">CreatorLabs</text>
    
    {/* Capabilities */}
    <g className="opacity-90">
      {/* AI Design */}
      <circle cx="200" cy="100" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="200" y="105" className="fill-white text-sm" textAnchor="middle">AI Design</text>
      <path d="M200 140 L300 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      
      {/* Evolution Engine */}
      <circle cx="600" cy="100" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="600" y="105" className="fill-white text-sm" textAnchor="middle">Evolution Engine</text>
      <path d="M500 150 L600 140" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      
      {/* Analytics */}
      <circle cx="200" cy="300" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="200" y="305" className="fill-white text-sm" textAnchor="middle">Analytics</text>
      <path d="M200 260 L300 250" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      
      {/* Optimization */}
      <circle cx="600" cy="300" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="600" y="305" className="fill-white text-sm" textAnchor="middle">Optimization</text>
      <path d="M500 250 L600 260" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
    </g>

    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" className="fill-sage-green" />
      </marker>
    </defs>
  </svg>
);

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-dark-bg text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <time className="text-sage-green text-sm font-medium">December 20, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            Introducing CreatorLabs: The Future of Web Design is Here
          </h1>
          <p className="text-xl text-white/80">
            After years of development, we're proud to announce the launch of CreatorLabs
          </p>
        </header>

        <div className="prose prose-lg prose-invert mx-auto space-y-12">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20 shadow-lg">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Journey to Launch</h2>
            <p className="text-white/90 leading-relaxed">
              "Today marks a milestone in our journey," I (Vaibhav) share with excitement. "What 
              started as a frustration with traditional web development at Microsoft has evolved 
              into something revolutionary. Together with Sahil, we've transformed our vision of 
              AI-powered web design into reality."
            </p>
            
            <JourneySVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, "The launch of CreatorLabs represents more than just a new platform – 
              it's the culmination of our combined experiences in enterprise software and AI 
              research. We've built something that we believe will fundamentally change how 
              websites are created and maintained."
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">What Sets CreatorLabs Apart</h2>
            <PlatformCapabilitiesSVG />
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">AI-Driven Design:</strong>
                  <span className="text-white/90 ml-2">Intelligent design decisions based on your business needs</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Dynamic Evolution:</strong>
                  <span className="text-white/90 ml-2">Continuous optimization based on real user behavior</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Enterprise-Grade Analytics:</strong>
                  <span className="text-white/90 ml-2">Deep insights powered by advanced AI</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Competitive Edge:</strong>
                  <span className="text-white/90 ml-2">Automated market analysis and adaptation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Early Access Success Stories</h2>
            <p className="text-white/90 leading-relaxed">
              During our beta phase, we've had the privilege of working with innovative businesses 
              across various sectors. "The results have been incredible," I note. "We've seen 
              websites not just launch faster, but continuously improve their performance over time."
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              "One of our early users saw a 300% increase in engagement after implementing our 
              AI-driven optimizations," Sahil shares. "This is exactly the kind of impact we 
              envisioned when we started this journey."
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Join the Revolution</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              CreatorLabs is now officially open for business. We invite you to be part of this 
              revolution in web design. Experience the power of AI-driven website creation and 
              evolution firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/get-started" 
                className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold text-center"
              >
                Start Creating Now
              </a>
              <a 
                href="/how-it-works" 
                className="inline-block bg-transparent text-sage-green px-8 py-4 rounded-lg border border-sage-green hover:bg-sage-green/10 transition-all duration-300 font-semibold text-center"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
