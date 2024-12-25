'use client';

const ChecklistSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Checklist Sections */}
    <g>
      {/* Technical */}
      <rect x="50" y="50" width="200" height="200" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="150" y="80" className="fill-white text-sm font-medium" textAnchor="middle">Technical</text>
      
      <circle cx="80" cy="120" r="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="1" />
      <text x="180" y="125" className="fill-white text-xs" textAnchor="middle">Performance Checks</text>
      
      <circle cx="80" cy="160" r="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="1" />
      <text x="180" y="165" className="fill-white text-xs" textAnchor="middle">Security Setup</text>
      
      <circle cx="80" cy="200" r="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="1" />
      <text x="180" y="205" className="fill-white text-xs" textAnchor="middle">Analytics Integration</text>
    </g>

    {/* Content */}
    <g>
      <rect x="300" y="50" width="200" height="200" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="400" y="80" className="fill-white text-sm font-medium" textAnchor="middle">Content</text>
      
      <circle cx="330" cy="120" r="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="1" />
      <text x="430" y="125" className="fill-white text-xs" textAnchor="middle">AI Content Review</text>
      
      <circle cx="330" cy="160" r="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="1" />
      <text x="430" y="165" className="fill-white text-xs" textAnchor="middle">SEO Optimization</text>
      
      <circle cx="330" cy="200" r="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="1" />
      <text x="430" y="205" className="fill-white text-xs" textAnchor="middle">Brand Consistency</text>
    </g>

    {/* AI Systems */}
    <g>
      <rect x="550" y="50" width="200" height="200" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="650" y="80" className="fill-white text-sm font-medium" textAnchor="middle">AI Systems</text>
      
      <circle cx="580" cy="120" r="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="1" />
      <text x="680" y="125" className="fill-white text-xs" textAnchor="middle">Neural Training</text>
      
      <circle cx="580" cy="160" r="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="1" />
      <text x="680" y="165" className="fill-white text-xs" textAnchor="middle">Evolution Rules</text>
      
      <circle cx="580" cy="200" r="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="1" />
      <text x="680" y="205" className="fill-white text-xs" textAnchor="middle">Monitoring Setup</text>
    </g>
  </svg>
);

const LaunchProcessSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Launch Stages */}
    <g>
      {/* Pre-Launch */}
      <circle cx="200" cy="150" r="60" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
        <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="200" y="140" className="fill-white text-sm" textAnchor="middle">Pre-Launch</text>
      <text x="200" y="160" className="fill-white text-sm" textAnchor="middle">Checks</text>

      {/* Launch */}
      <circle cx="400" cy="150" r="60" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
        <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="400" y="140" className="fill-white text-sm" textAnchor="middle">Launch</text>
      <text x="400" y="160" className="fill-white text-sm" textAnchor="middle">Sequence</text>

      {/* Post-Launch */}
      <circle cx="600" cy="150" r="60" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
        <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="600" y="140" className="fill-white text-sm" textAnchor="middle">Post-Launch</text>
      <text x="600" y="160" className="fill-white text-sm" textAnchor="middle">Monitoring</text>
    </g>

    {/* Connecting Lines */}
    <path d="M260 150 L340 150" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" values="8;0;8" dur="2s" repeatCount="indefinite" />
    </path>
    <path d="M460 150 L540 150" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" values="8;0;8" dur="2s" repeatCount="indefinite" />
    </path>
  </svg>
);

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-dark-bg text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <time className="text-sage-green text-sm font-medium">December 3, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            The Ultimate Pre-Launch Checklist for AI-Optimized Websites
          </h1>
          <p className="text-xl text-white/80 mb-8">
            A comprehensive guide to launching websites powered by neural evolution
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
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The New Launch Paradigm</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;During my time at Microsoft,&quot; I (Vaibhav) explain, &quot;website launches were 
              complex, multi-month projects. With our 
              <a href="/blog/website-blueprint-creation" className="text-sage-green hover:text-sage-green-light ml-1">
                AI-driven blueprint system
              </a>, 
              we&apos;ve streamlined this process while adding sophisticated AI readiness checks.&quot;
            </p>
            
            <ChecklistSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, &quot;The key is our 
              <a href="/blog/dynamic-evolution-websites" className="text-sage-green hover:text-sage-green-light ml-1">
                neural evolution system
              </a>. 
              Unlike traditional launches where the site is static, our AI begins learning 
              and optimizing from day one.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Launch Process</h2>
            <LaunchProcessSVG />
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Pre-Launch Checks</h3>
                <p className="text-white/90 leading-relaxed">
                  &quot;Our 
                  <a href="/blog/competitor-research-seo" className="text-sage-green hover:text-sage-green-light ml-1">
                    competitive analysis
                  </a> 
                  and 
                  <a href="/blog/nlp-website-copy" className="text-sage-green hover:text-sage-green-light ml-1">
                    content optimization
                  </a> 
                  systems run comprehensive checks,&quot; I explain. &quot;This ensures your site 
                  launches with a competitive edge from day one.&quot;
                </p>
              </div>

              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Launch Sequence</h3>
                <p className="text-white/90 leading-relaxed">
                  Sahil notes, &quot;Our AI orchestrates a gradual rollout, monitoring key metrics 
                  and making real-time adjustments. This approach, combined with our 
                  <a href="/blog/conversion-insights" className="text-sage-green hover:text-sage-green-light ml-1">
                    analytics system
                  </a>, 
                  ensures optimal performance from the start.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Technical Essentials</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Performance Baseline:</strong>
                  <span className="text-white/90 ml-2">
                    AI-driven performance optimization across devices and networks
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Security Setup:</strong>
                  <span className="text-white/90 ml-2">
                    Enterprise-grade security with AI threat detection
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Analytics Integration:</strong>
                  <span className="text-white/90 ml-2">
                    Neural tracking system for comprehensive insights
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Evolution Rules:</strong>
                  <span className="text-white/90 ml-2">
                    Configuration of AI learning parameters and optimization bounds
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Post-Launch Success</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;The launch is just the beginning,&quot; I share. &quot;Our system continues to learn 
              and optimize, applying insights from our network of sites while maintaining 
              your unique brand identity and goals.&quot;
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, &quot;With our 
              <a href="/blog/token-based-pricing" className="text-sage-green hover:text-sage-green-light ml-1">
                token-based system
              </a>, 
              you can easily scale your optimization efforts as your site grows. The AI 
              automatically focuses resources where they&apos;ll have the most impact.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Ready for Launch?</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Experience the future of website launches with our AI-powered platform. From 
              initial setup to continuous optimization, we&apos;ve automated and enhanced every 
              step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/get-started" 
                className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold text-center"
              >
                Start Your Launch
              </a>
              <a 
                href="/features" 
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
