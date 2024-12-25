'use client';

const UnifiedApproachSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Enterprise Experience */}
    <g>
      <circle cx="200" cy="150" r="80" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
        <animate attributeName="r" values="80;85;80" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="200" y="140" className="fill-white text-sm" textAnchor="middle">Enterprise</text>
      <text x="200" y="160" className="fill-white text-sm" textAnchor="middle">Experience</text>
    </g>

    {/* AI Innovation */}
    <g>
      <circle cx="600" cy="150" r="80" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
        <animate attributeName="r" values="80;85;80" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="600" y="140" className="fill-white text-sm" textAnchor="middle">AI</text>
      <text x="600" y="160" className="fill-white text-sm" textAnchor="middle">Innovation</text>
    </g>

    {/* Connecting Bridge */}
    <path d="M280 150 L520 150" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" values="8;0;8" dur="2s" repeatCount="indefinite" />
    </path>

    {/* Key Features */}
    <g>
      <circle cx="400" cy="80" r="30" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="400" y="85" className="fill-white text-xs" textAnchor="middle">Scalability</text>

      <circle cx="400" cy="150" r="30" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="400" y="155" className="fill-white text-xs" textAnchor="middle">Evolution</text>

      <circle cx="400" cy="220" r="30" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="400" y="225" className="fill-white text-xs" textAnchor="middle">Intelligence</text>
    </g>
  </svg>
);

const CompetitiveAnalysisSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Traditional Website Builders */}
    <g className="opacity-70">
      <rect x="50" y="50" width="200" height="300" rx="8" className="stroke-white/40" strokeWidth="2" />
      <text x="150" y="80" className="fill-white text-lg font-medium" textAnchor="middle">Traditional Builders</text>
      
      <circle cx="150" cy="140" r="15" className="fill-white/20" />
      <text x="150" y="170" className="fill-white/60 text-sm" textAnchor="middle">Static Templates</text>
      
      <circle cx="150" cy="220" r="15" className="fill-white/20" />
      <text x="150" y="250" className="fill-white/60 text-sm" textAnchor="middle">Manual Updates</text>
      
      <circle cx="150" cy="300" r="15" className="fill-white/20" />
      <text x="150" y="330" className="fill-white/60 text-sm" textAnchor="middle">Basic Analytics</text>
    </g>

    {/* AI Website Tools */}
    <g className="opacity-70">
      <rect x="300" y="50" width="200" height="300" rx="8" className="stroke-white/40" strokeWidth="2" />
      <text x="400" y="80" className="fill-white text-lg font-medium" textAnchor="middle">AI Tools</text>
      
      <circle cx="400" cy="140" r="15" className="fill-white/20" />
      <text x="400" y="170" className="fill-white/60 text-sm" textAnchor="middle">Generated Content</text>
      
      <circle cx="400" cy="220" r="15" className="fill-white/20" />
      <text x="400" y="250" className="fill-white/60 text-sm" textAnchor="middle">Static AI Models</text>
      
      <circle cx="400" cy="300" r="15" className="fill-white/20" />
      <text x="400" y="330" className="fill-white/60 text-sm" textAnchor="middle">Limited Learning</text>
    </g>

    {/* CreatorLabs */}
    <g className="opacity-100">
      <rect x="550" y="50" width="200" height="300" rx="8" className="stroke-sage-green" strokeWidth="2" />
      <text x="650" y="80" className="fill-sage-green text-lg font-medium" textAnchor="middle">CreatorLabs</text>
      
      <circle cx="650" cy="140" r="15" className="fill-sage-green/20" />
      <text x="650" y="170" className="fill-white text-sm" textAnchor="middle">Neural Evolution</text>
      
      <circle cx="650" cy="220" r="15" className="fill-sage-green/20" />
      <text x="650" y="250" className="fill-white text-sm" textAnchor="middle">Adaptive AI</text>
      
      <circle cx="650" cy="300" r="15" className="fill-sage-green/20" />
      <text x="650" y="330" className="fill-white text-sm" textAnchor="middle">Enterprise Analytics</text>
    </g>
  </svg>
);

const FeatureComparisonSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Feature Grid */}
    <g>
      {/* Headers */}
      <text x="200" y="50" className="fill-white/60 text-sm" textAnchor="middle">Others</text>
      <text x="600" y="50" className="fill-sage-green text-sm" textAnchor="middle">CreatorLabs</text>

      {/* Row 1: AI Integration */}
      <text x="100" y="100" className="fill-white text-sm" textAnchor="start">AI Integration</text>
      <rect x="150" y="80" width="100" height="30" rx="4" className="fill-white/10 stroke-white/20" />
      <text x="200" y="100" className="fill-white/60 text-sm" textAnchor="middle">Template-based</text>
      <rect x="550" y="80" width="100" height="30" rx="4" className="fill-sage-green/20 stroke-sage-green" />
      <text x="600" y="100" className="fill-white text-sm" textAnchor="middle">Neural Core</text>

      {/* Row 2: Evolution */}
      <text x="100" y="150" className="fill-white text-sm" textAnchor="start">Evolution</text>
      <rect x="150" y="130" width="100" height="30" rx="4" className="fill-white/10 stroke-white/20" />
      <text x="200" y="150" className="fill-white/60 text-sm" textAnchor="middle">Manual</text>
      <rect x="550" y="130" width="100" height="30" rx="4" className="fill-sage-green/20 stroke-sage-green" />
      <text x="600" y="150" className="fill-white text-sm" textAnchor="middle">Autonomous</text>

      {/* Row 3: Analytics */}
      <text x="100" y="200" className="fill-white text-sm" textAnchor="start">Analytics</text>
      <rect x="150" y="180" width="100" height="30" rx="4" className="fill-white/10 stroke-white/20" />
      <text x="200" y="200" className="fill-white/60 text-sm" textAnchor="middle">Reports</text>
      <rect x="550" y="180" width="100" height="30" rx="4" className="fill-sage-green/20 stroke-sage-green" />
      <text x="600" y="200" className="fill-white text-sm" textAnchor="middle">Predictive</text>

      {/* Row 4: Learning */}
      <text x="100" y="250" className="fill-white text-sm" textAnchor="start">Learning</text>
      <rect x="150" y="230" width="100" height="30" rx="4" className="fill-white/10 stroke-white/20" />
      <text x="200" y="250" className="fill-white/60 text-sm" textAnchor="middle">Static</text>
      <rect x="550" y="230" width="100" height="30" rx="4" className="fill-sage-green/20 stroke-sage-green" />
      <text x="600" y="250" className="fill-white text-sm" textAnchor="middle">Network Effect</text>
    </g>
  </svg>
);

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-dark-bg text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <time className="text-sage-green text-sm font-medium">December 22, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            Why CreatorLabs Stands Apart: The Fusion of Enterprise Experience and AI Innovation
          </h1>
          <p className="text-xl text-white/80 mb-8">
            How we combined decades of enterprise expertise with cutting-edge AI research to 
            revolutionize website creation
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-white/80">
              By <span className="text-sage-green">Vaibhav Verma</span>
            </div>
            <span className="text-white/40">|</span>
            <div className="text-white/80">
              and <span className="text-sage-green">Sahil Gupta</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-invert mx-auto space-y-12">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20 shadow-lg">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">A Unique Convergence</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;Our journey to create CreatorLabs began with a shared frustration,&quot; I (Vaibhav) 
              explain. &quot;At Microsoft, I saw enterprise clients struggling with website solutions 
              that were either too basic or overwhelmingly complex. Meanwhile, Sahil was 
              pioneering adaptive AI systems that could revolutionize how websites evolve.&quot;
            </p>
            
            <UnifiedApproachSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Sahil continues, &quot;The breakthrough came when we combined our expertise. My research 
              in 
              <a href="/blog/dynamic-evolution-websites" className="text-sage-green hover:text-sage-green-light ml-1">
                neural evolution systems
              </a> 
              perfectly complemented Vaibhav&apos;s understanding of enterprise needs. We realized we 
              could create something unprecedented.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Beyond the Status Quo</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;The current market is fragmented,&quot; I share. &quot;Traditional builders prioritize 
              simplicity over capability, while AI tools focus on generating content without 
              understanding the broader context of business success.&quot;
            </p>
            
            <CompetitiveAnalysisSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Our platform integrates 
              <a href="/blog/competitor-research-seo" className="text-sage-green hover:text-sage-green-light ml-1">
                competitive analysis
              </a>, 
              <a href="/blog/nlp-website-copy" className="text-sage-green hover:text-sage-green-light ml-1">
                content optimization
              </a>, 
              and 
              <a href="/blog/conversion-insights" className="text-sage-green hover:text-sage-green-light ml-1">
                conversion tracking
              </a> 
              into a unified system that evolves with your business.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Enterprise Power, Startup Agility</h2>
            <FeatureComparisonSVG />
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Neural Core Technology</h3>
                <p className="text-white/90 leading-relaxed">
                  &quot;Our neural core is unique,&quot; Sahil explains. &quot;Unlike basic AI that simply 
                  generates content, our system understands business context, user behavior, 
                  and market dynamics. It&apos;s the same technology I developed for adaptive 
                  systems in autonomous vehicles, now applied to website evolution.&quot;
                </p>
              </div>

              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Enterprise-Grade Analytics</h3>
                <p className="text-white/90 leading-relaxed">
                  I add, &quot;We&apos;ve taken enterprise analytics capabilities that typically require 
                  teams of experts and made them accessible through our 
                  <a href="/blog/token-based-pricing" className="text-sage-green hover:text-sage-green-light ml-1">
                    flexible pricing model
                  </a>. 
                  The system doesn&apos;t just track metrics – it predicts trends and suggests 
                  optimizations automatically.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Real-World Impact</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">E-commerce Success:</strong>
                  <span className="text-white/90 ml-2">
                    40% conversion increase through autonomous optimization
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">SaaS Platform:</strong>
                  <span className="text-white/90 ml-2">
                    Reduced bounce rates by 60% using neural UX adaptation
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Content Site:</strong>
                  <span className="text-white/90 ml-2">
                    2x engagement through AI-driven content optimization
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Enterprise Portal:</strong>
                  <span className="text-white/90 ml-2">
                    90% reduction in maintenance overhead with autonomous updates
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Join the Evolution</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              CreatorLabs represents the convergence of enterprise experience and AI innovation. 
              We&apos;ve created what we wished existed during our years at Microsoft and in AI 
              research – a platform that grows with your business and learns from every 
              interaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/get-started" 
                className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold text-center"
              >
                Start Your Evolution
              </a>
              <a 
                href="/features" 
                className="inline-block bg-transparent text-sage-green px-8 py-4 rounded-lg border border-sage-green hover:bg-sage-green/10 transition-all duration-300 font-semibold text-center"
              >
                Compare Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
