'use client';

const SuccessMetricsSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Success Hub */}
    <circle cx="400" cy="150" r="60" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
      <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" />
    </circle>
    <text x="400" y="140" className="fill-white text-sm" textAnchor="middle">Success</text>
    <text x="400" y="160" className="fill-white text-sm" textAnchor="middle">Stories</text>

    {/* Case Studies */}
    <g>
      {/* E-commerce */}
      <path d="M200 80 L340 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="200" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="75" className="fill-white text-xs" textAnchor="middle">E-commerce</text>
      <text x="200" y="90" className="fill-white text-xs" textAnchor="middle">+40% Sales</text>

      {/* SaaS */}
      <path d="M200 220 L340 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="200" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="215" className="fill-white text-xs" textAnchor="middle">SaaS</text>
      <text x="200" y="230" className="fill-white text-xs" textAnchor="middle">-60% Bounce</text>
    </g>

    {/* Results */}
    <g>
      {/* Engagement */}
      <path d="M460 150 L600 80" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="75" className="fill-white text-xs" textAnchor="middle">2x</text>
      <text x="600" y="90" className="fill-white text-xs" textAnchor="middle">Engagement</text>

      {/* Conversion */}
      <path d="M460 150 L600 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="150" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="145" className="fill-white text-xs" textAnchor="middle">3x</text>
      <text x="600" y="160" className="fill-white text-xs" textAnchor="middle">Conversion</text>

      {/* ROI */}
      <path d="M460 150 L600 220" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="215" className="fill-white text-xs" textAnchor="middle">5x</text>
      <text x="600" y="230" className="fill-white text-xs" textAnchor="middle">ROI</text>
    </g>

    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" className="fill-sage-green" />
      </marker>
    </defs>
  </svg>
);

const TimelineComparisonSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Traditional Timeline */}
    <g className="opacity-70">
      <path d="M100 100 L700 100" className="stroke-white/40" strokeWidth="2" />
      <text x="400" y="80" className="fill-white text-sm" textAnchor="middle">Traditional Website</text>
      
      <circle cx="200" cy="100" r="8" className="fill-white/20" />
      <text x="200" y="130" className="fill-white/60 text-xs" textAnchor="middle">Month 1</text>
      <text x="200" y="145" className="fill-white/60 text-xs" textAnchor="middle">Launch</text>
      
      <circle cx="400" cy="100" r="8" className="fill-white/20" />
      <text x="400" y="130" className="fill-white/60 text-xs" textAnchor="middle">Month 3</text>
      <text x="400" y="145" className="fill-white/60 text-xs" textAnchor="middle">Manual Updates</text>
      
      <circle cx="600" cy="100" r="8" className="fill-white/20" />
      <text x="600" y="130" className="fill-white/60 text-xs" textAnchor="middle">Month 6</text>
      <text x="600" y="145" className="fill-white/60 text-xs" textAnchor="middle">Redesign</text>
    </g>

    {/* CreatorLabs Timeline */}
    <g>
      <path d="M100 200 L700 200" className="stroke-sage-green" strokeWidth="2" />
      <text x="400" y="180" className="fill-sage-green text-sm" textAnchor="middle">CreatorLabs Website</text>
      
      <circle cx="200" cy="200" r="8" className="fill-sage-green/20" />
      <text x="200" y="230" className="fill-white text-xs" textAnchor="middle">Week 1</text>
      <text x="200" y="245" className="fill-white text-xs" textAnchor="middle">AI Launch</text>
      
      <circle cx="400" cy="200" r="8" className="fill-sage-green/20" />
      <text x="400" y="230" className="fill-white text-xs" textAnchor="middle">Month 1</text>
      <text x="400" y="245" className="fill-white text-xs" textAnchor="middle">Auto-Optimized</text>
      
      <circle cx="600" cy="200" r="8" className="fill-sage-green/20" />
      <text x="600" y="230" className="fill-white text-xs" textAnchor="middle">Month 3</text>
      <text x="600" y="245" className="fill-white text-xs" textAnchor="middle">2x Performance</text>
    </g>
  </svg>
);

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-dark-bg text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <time className="text-sage-green text-sm font-medium">November 26, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            Real Businesses, Real Results: AI-Powered Website Success Stories
          </h1>
          <p className="text-xl text-white/80 mb-8">
            How our neural evolution system is transforming businesses across industries
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
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Measurable Impact</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;When we launched CreatorLabs,&quot; I (Vaibhav) explain, &quot;we knew our 
              <a href="/blog/dynamic-evolution-websites" className="text-sage-green hover:text-sage-green-light ml-1">
                dynamic evolution system
              </a> 
              would transform how websites perform. But even we were surprised by the 
              magnitude of improvement our early adopters experienced.&quot;
            </p>
            
            <SuccessMetricsSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, &quot;The key difference is our 
              <a href="/blog/conversion-insights" className="text-sage-green hover:text-sage-green-light ml-1">
                neural analytics engine
              </a>. 
              It doesn&apos;t just track metrics – it understands why certain changes drive 
              results and automatically applies those insights across our platform.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Case Study: E-commerce Revolution</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">The Challenge</h3>
                <p className="text-white/90 leading-relaxed">
                  &quot;A luxury fashion retailer came to us struggling with cart abandonment,&quot; 
                  I share. &quot;Their traditional website builder couldn&apos;t adapt to changing 
                  customer behaviors, leading to a steady decline in conversions.&quot;
                </p>
              </div>

              <TimelineComparisonSVG />

              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">The Transformation</h3>
                <p className="text-white/90 leading-relaxed">
                  &quot;Our system identified multiple optimization opportunities,&quot; Sahil explains. 
                  &quot;Using our 
                  <a href="/blog/nlp-website-copy" className="text-sage-green hover:text-sage-green-light ml-1">
                    NLP-driven content system
                  </a> 
                  and 
                  <a href="/blog/web-design-trends-2024" className="text-sage-green hover:text-sage-green-light ml-1">
                    modern design patterns
                  </a>, 
                  we created a more engaging and intuitive shopping experience.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Case Study: SaaS Transformation</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">The Problem:</strong>
                  <span className="text-white/90 ml-2">
                    High bounce rates on product pages and low trial conversions
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">AI Solution:</strong>
                  <span className="text-white/90 ml-2">
                    Dynamic content adaptation based on user behavior patterns
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Results:</strong>
                  <span className="text-white/90 ml-2">
                    60% reduction in bounce rates, 3x increase in trial signups
                  </span>
                </div>
              </div>
            </div>

            <p className="text-white/90 leading-relaxed mt-6">
              &quot;The SaaS company&apos;s success demonstrates the power of our 
              <a href="/blog/competitor-research-seo" className="text-sage-green hover:text-sage-green-light ml-1">
                competitive analysis system
              </a>,&quot; 
              I note. &quot;By understanding how visitors interacted with competitor sites, we 
              could optimize the messaging and user flow for maximum impact.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Network Effect</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;What&apos;s particularly exciting,&quot; Sahil shares, &quot;is how these successes 
              compound. Every optimization discovered for one site helps improve others 
              through our neural network. It&apos;s a virtuous cycle of continuous improvement.&quot;
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              I add, &quot;And with our 
              <a href="/blog/token-based-pricing" className="text-sage-green hover:text-sage-green-light ml-1">
                token-based pricing
              </a>, 
              businesses of all sizes can access these enterprise-grade optimizations. The 
              results speak for themselves.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Join the Success Story</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Ready to transform your website with the power of AI? Our neural evolution 
              system is helping businesses across industries achieve unprecedented results. 
              Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/get-started" 
                className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold text-center"
              >
                Transform Your Site
              </a>
              <a 
                href="/features" 
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
