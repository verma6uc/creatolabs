'use client';

import Image from 'next/image';

const BlueprintStepsSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Steps Timeline */}
    <path d="M100 200 L700 200" className="stroke-sage-green/30" strokeWidth="2" />
    
    {/* Step 1: Basic Info */}
    <g className="animate-pulse">
      <circle cx="100" cy="200" r="30" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="100" y="205" className="fill-white text-sm" textAnchor="middle">1</text>
      <text x="100" y="250" className="fill-white text-xs" textAnchor="middle">Basic Info</text>
    </g>

    {/* Step 2: Purpose */}
    <g className="animate-pulse">
      <circle cx="250" cy="200" r="30" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="250" y="205" className="fill-white text-sm" textAnchor="middle">2</text>
      <text x="250" y="250" className="fill-white text-xs" textAnchor="middle">Purpose</text>
    </g>

    {/* Step 3: Competitors */}
    <g className="animate-pulse">
      <circle cx="400" cy="200" r="30" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="400" y="205" className="fill-white text-sm" textAnchor="middle">3</text>
      <text x="400" y="250" className="fill-white text-xs" textAnchor="middle">Research</text>
    </g>

    {/* Step 4: Structure */}
    <g className="animate-pulse">
      <circle cx="550" cy="200" r="30" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="550" y="205" className="fill-white text-sm" textAnchor="middle">4</text>
      <text x="550" y="250" className="fill-white text-xs" textAnchor="middle">Structure</text>
    </g>

    {/* Step 5: Design */}
    <g className="animate-pulse">
      <circle cx="700" cy="200" r="30" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="700" y="205" className="fill-white text-sm" textAnchor="middle">5</text>
      <text x="700" y="250" className="fill-white text-xs" textAnchor="middle">Design</text>
    </g>

    {/* AI Analysis Indicators */}
    <g>
      <path d="M100 150 Q400 50 700 150" className="stroke-sage-green/40" strokeWidth="1" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="8;0;8" dur="2s" repeatCount="indefinite" />
      </path>
      <circle cx="400" cy="80" r="20" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="400" y="85" className="fill-white text-xs" textAnchor="middle">AI</text>
    </g>
  </svg>
);

const AIAnalysisSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Analysis Hub */}
    <circle cx="400" cy="150" r="60" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
      <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" />
    </circle>
    <text x="400" y="155" className="fill-white text-sm" textAnchor="middle">AI Analysis</text>

    {/* Analysis Branches */}
    <g>
      {/* Competitor Analysis */}
      <path d="M460 150 L600 80" className="stroke-sage-green" strokeWidth="1" />
      <circle cx="600" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="85" className="fill-white text-xs" textAnchor="middle">Competitors</text>

      {/* Content Strategy */}
      <path d="M460 150 L600 150" className="stroke-sage-green" strokeWidth="1" />
      <circle cx="600" cy="150" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="155" className="fill-white text-xs" textAnchor="middle">Content</text>

      {/* Design Optimization */}
      <path d="M460 150 L600 220" className="stroke-sage-green" strokeWidth="1" />
      <circle cx="600" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="225" className="fill-white text-xs" textAnchor="middle">Design</text>

      {/* User Input */}
      <path d="M340 150 L200 80" className="stroke-sage-green" strokeWidth="1" />
      <circle cx="200" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="85" className="fill-white text-xs" textAnchor="middle">User Input</text>

      {/* Market Trends */}
      <path d="M340 150 L200 220" className="stroke-sage-green" strokeWidth="1" />
      <circle cx="200" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="225" className="fill-white text-xs" textAnchor="middle">Trends</text>
    </g>
  </svg>
);

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-dark-bg text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <time className="text-sage-green text-sm font-medium">November 5, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            From Idea to Blueprint: Crafting Your Website Roadmap in Minutes
          </h1>
          <p className="text-xl text-white/80">
            How AI transforms complex website planning into an intuitive journey
          </p>
        </header>

        <div className="prose prose-lg prose-invert mx-auto space-y-12">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20 shadow-lg">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Reimagining Website Planning</h2>
            <p className="text-white/90 leading-relaxed">
              "At Microsoft," I (Vaibhav) recall, "website planning meetings could drag on 
              for weeks. The process was fragmented, with different teams handling design, 
              content, and technical requirements separately. We knew there had to be a 
              better way."
            </p>
            
            <BlueprintStepsSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, "By applying AI to the planning process, we've condensed what 
              used to take weeks into a guided journey that takes minutes. But it's not 
              just about speed – it's about making better decisions through data-driven 
              insights."
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The AI-Guided Journey</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Smart Foundations</h3>
                <p className="text-white/90 leading-relaxed">
                  "Each question in our onboarding process," I explain, "is carefully crafted 
                  based on years of enterprise experience. But what makes it special is how 
                  our AI adapts the journey based on your responses, ensuring every decision 
                  builds toward your specific goals."
                </p>
              </div>

              <AIAnalysisSVG />

              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Real-Time Intelligence</h3>
                <p className="text-white/90 leading-relaxed">
                  "The magic happens behind the scenes," Sahil notes. "While you're answering 
                  questions, our AI is analyzing competitor websites, market trends, and user 
                  behavior patterns to provide contextual suggestions that give you a 
                  competitive edge."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Beyond Templates</h2>
            <p className="text-white/90 leading-relaxed">
              "Traditional website builders force you into rigid templates," I share. "Our 
              blueprint process is different. It creates a unique foundation based on your 
              goals, audience, and competitive landscape. Every suggestion is tailored to 
              your specific needs."
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              Sahil explains, "The AI doesn't just look at what's working now – it 
              anticipates future trends and user needs. Your blueprint becomes a living 
              document that evolves with your business and your users."
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Start Your Journey</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Experience our revolutionary website planning process. In just minutes, 
              you'll have a comprehensive blueprint for a website that's uniquely yours, 
              backed by AI-driven insights and years of enterprise expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/get-started" 
                className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold text-center"
              >
                Create Your Blueprint
              </a>
              <a 
                href="/how-it-works" 
                className="inline-block bg-transparent text-sage-green px-8 py-4 rounded-lg border border-sage-green hover:bg-sage-green/10 transition-all duration-300 font-semibold text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
