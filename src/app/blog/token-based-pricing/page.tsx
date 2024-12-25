'use client';

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

const TokenEconomySVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Token Flow */}
    <g>
      {/* Token Pool */}
      <circle cx="400" cy="150" r="60" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
        <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="400" y="140" className="fill-white text-sm" textAnchor="middle">Token</text>
      <text x="400" y="160" className="fill-white text-sm" textAnchor="middle">Pool</text>

      {/* Input Streams */}
      <path d="M200 80 L340 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="200" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="85" className="fill-white text-xs" textAnchor="middle">Purchase</text>

      <path d="M200 220 L340 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="200" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="225" className="fill-white text-xs" textAnchor="middle">Rewards</text>

      {/* Output Streams */}
      <path d="M460 150 L600 80" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="75" className="fill-white text-xs" textAnchor="middle">Content</text>
      <text x="600" y="90" className="fill-white text-xs" textAnchor="middle">Generation</text>

      <path d="M460 150 L600 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="150" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="145" className="fill-white text-xs" textAnchor="middle">Design</text>
      <text x="600" y="160" className="fill-white text-xs" textAnchor="middle">Updates</text>

      <path d="M460 150 L600 220" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="215" className="fill-white text-xs" textAnchor="middle">Analytics</text>
      <text x="600" y="230" className="fill-white text-xs" textAnchor="middle">Operations</text>
    </g>

    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" className="fill-sage-green" />
      </marker>
    </defs>
  </svg>
);

const TokenUsageSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Feature Grid */}
    <g>
      {/* Headers */}
      <text x="200" y="50" className="fill-white text-sm" textAnchor="middle">AI Operation</text>
      <text x="600" y="50" className="fill-sage-green text-sm" textAnchor="middle">Token Cost</text>

      {/* Content Generation */}
      <rect x="100" y="70" width="200" height="40" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="95" className="fill-white text-sm" textAnchor="middle">Page Generation</text>
      <rect x="500" y="70" width="200" height="40" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="95" className="fill-white text-sm" textAnchor="middle">5 tokens/page</text>

      {/* SEO Analysis */}
      <rect x="100" y="130" width="200" height="40" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="155" className="fill-white text-sm" textAnchor="middle">SEO Analysis</text>
      <rect x="500" y="130" width="200" height="40" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="155" className="fill-white text-sm" textAnchor="middle">3 tokens/analysis</text>

      {/* Design Updates */}
      <rect x="100" y="190" width="200" height="40" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="215" className="fill-white text-sm" textAnchor="middle">Design Evolution</text>
      <rect x="500" y="190" width="200" height="40" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="215" className="fill-white text-sm" textAnchor="middle">2 tokens/update</text>

      {/* Analytics */}
      <rect x="100" y="250" width="200" height="40" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="275" className="fill-white text-sm" textAnchor="middle">Analytics Processing</text>
      <rect x="500" y="250" width="200" height="40" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="275" className="fill-white text-sm" textAnchor="middle">1 token/analysis</text>
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
          <p className="text-xl text-white/80 mb-8">
            How we reimagined SaaS pricing for the AI era
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-white/80">
              By <span className="text-sage-green">Vaibhav Verma</span>
            </div>
            <span className="text-white/40">|</span>
            <div className="text-white/80">
              Co-authored by <span className="text-sage-green">Sahil Gupta</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-invert mx-auto space-y-12">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20 shadow-lg">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Enterprise Pricing Challenge</h2>
            <p className="text-white/90 leading-relaxed">
              As the former head of enterprise pricing at Microsoft, I (Vaibhav) witnessed 
              firsthand how traditional subscription models failed to align with modern business 
              needs. &quot;The problem was clear,&quot; I explain. &quot;Companies were either overpaying 
              for features they rarely used or hitting arbitrary limits during critical 
              projects.&quot;
            </p>
            
            <PricingComparisonSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, &quot;When designing CreatorLabs&apos; pricing, we wanted to create something 
              that truly aligned with our 
              <a href="/blog/dynamic-evolution-websites" className="text-sage-green hover:text-sage-green-light ml-1">
                dynamic evolution approach
              </a>. 
              Tokens provide that flexibility – you only pay for the AI operations you actually use.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Token Economy</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;Our token system is designed around the actual computational cost of AI 
              operations,&quot; Sahil explains. &quot;This allows us to offer enterprise-grade features 
              while keeping costs predictable and transparent.&quot;
            </p>

            <TokenEconomySVG />

            <p className="text-white/90 leading-relaxed mt-4">
              This approach integrates seamlessly with our 
              <a href="/blog/nlp-website-copy" className="text-sage-green hover:text-sage-green-light ml-1">
                NLP content generation
              </a> 
              and 
              <a href="/blog/competitor-research-seo" className="text-sage-green hover:text-sage-green-light ml-1">
                competitive analysis
              </a> 
              systems.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Token Usage Breakdown</h2>
            <TokenUsageSVG />
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Transparent Value</h3>
                <p className="text-white/90 leading-relaxed">
                  &quot;Each token represents a specific AI operation,&quot; I explain. &quot;This granular 
                  approach means you can precisely track ROI for different aspects of your 
                  website optimization. It&apos;s particularly valuable for agencies managing 
                  multiple client projects.&quot;
                </p>
              </div>

              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Flexible Scaling</h3>
                <p className="text-white/90 leading-relaxed">
                  &quot;The beauty of tokens,&quot; Sahil notes, &quot;is that they scale naturally with your 
                  needs. Our 
                  <a href="/blog/conversion-insights" className="text-sage-green hover:text-sage-green-light ml-1">
                    analytics system
                  </a> 
                  helps you optimize token usage based on what drives the most value for your 
                  business.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Enterprise Benefits</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Budget Control:</strong>
                  <span className="text-white/90 ml-2">
                    Precise allocation and tracking of AI resource usage
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Resource Optimization:</strong>
                  <span className="text-white/90 ml-2">
                    AI-powered suggestions for maximizing token value
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Project Management:</strong>
                  <span className="text-white/90 ml-2">
                    Allocate tokens across teams and projects
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">ROI Tracking:</strong>
                  <span className="text-white/90 ml-2">
                    Measure the impact of every AI operation
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Experience Token-Based Pricing</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Transform how you think about website optimization costs. Start with our 
              introductory token package and scale as you see results.
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
