'use client';

const CompetitorAnalysisSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Website */}
    <circle cx="400" cy="200" r="60" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="400" y="190" className="fill-white text-lg font-medium" textAnchor="middle">Your</text>
    <text x="400" y="210" className="fill-white text-lg font-medium" textAnchor="middle">Website</text>

    {/* Competitor Analysis Rays */}
    <g className="animate-pulse">
      {/* Competitor 1 */}
      <path d="M460 200 L700 100" className="stroke-sage-green/30" strokeWidth="1" />
      <circle cx="700" cy="100" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="700" y="95" className="fill-white text-sm" textAnchor="middle">Market</text>
      <text x="700" y="115" className="fill-white text-sm" textAnchor="middle">Leader</text>
      
      {/* Competitor 2 */}
      <path d="M460 200 L700 200" className="stroke-sage-green/30" strokeWidth="1" />
      <circle cx="700" cy="200" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="700" y="195" className="fill-white text-sm" textAnchor="middle">Direct</text>
      <text x="700" y="215" className="fill-white text-sm" textAnchor="middle">Competitor</text>
      
      {/* Competitor 3 */}
      <path d="M460 200 L700 300" className="stroke-sage-green/30" strokeWidth="1" />
      <circle cx="700" cy="300" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="700" y="295" className="fill-white text-sm" textAnchor="middle">Emerging</text>
      <text x="700" y="315" className="fill-white text-sm" textAnchor="middle">Player</text>

      {/* Analysis Points */}
      <circle cx="550" cy="150" r="15" className="fill-sage-green/20" />
      <text x="550" y="180" className="fill-white text-xs" textAnchor="middle">Keywords</text>
      
      <circle cx="580" cy="200" r="15" className="fill-sage-green/20" />
      <text x="580" y="230" className="fill-white text-xs" textAnchor="middle">Content</text>
      
      <circle cx="550" cy="250" r="15" className="fill-sage-green/20" />
      <text x="550" y="280" className="fill-white text-xs" textAnchor="middle">Structure</text>
    </g>

    {/* AI Analysis Zone */}
    <g>
      <circle cx="250" cy="200" r="100" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="r" values="100;105;100" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="250" y="190" className="fill-white text-sm" textAnchor="middle">Neural</text>
      <text x="250" y="210" className="fill-white text-sm" textAnchor="middle">Analysis</text>
    </g>
  </svg>
);

const SEOMetricsSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Metrics Dashboard */}
    <rect x="50" y="50" width="700" height="200" rx="8" className="stroke-sage-green" strokeWidth="2" />
    
    {/* Metrics Grid */}
    <g>
      {/* Keyword Rankings */}
      <rect x="100" y="80" width="150" height="60" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="175" y="100" className="fill-white text-sm" textAnchor="middle">Keyword</text>
      <text x="175" y="120" className="fill-white text-sm" textAnchor="middle">Rankings</text>
      <text x="175" y="140" className="fill-sage-green text-sm font-bold" textAnchor="middle">+45%</text>

      {/* Traffic Growth */}
      <rect x="325" y="80" width="150" height="60" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="400" y="100" className="fill-white text-sm" textAnchor="middle">Organic</text>
      <text x="400" y="120" className="fill-white text-sm" textAnchor="middle">Traffic</text>
      <text x="400" y="140" className="fill-sage-green text-sm font-bold" textAnchor="middle">+68%</text>

      {/* Conversion Rate */}
      <rect x="550" y="80" width="150" height="60" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="625" y="100" className="fill-white text-sm" textAnchor="middle">Conversion</text>
      <text x="625" y="120" className="fill-white text-sm" textAnchor="middle">Rate</text>
      <text x="625" y="140" className="fill-sage-green text-sm font-bold" textAnchor="middle">+32%</text>

      {/* Timeline */}
      <path d="M100 180 L700 180" className="stroke-sage-green" strokeWidth="1" strokeDasharray="4 4" />
      <text x="100" y="200" className="fill-white/60 text-xs" textAnchor="start">Day 1</text>
      <text x="400" y="200" className="fill-white/60 text-xs" textAnchor="middle">Day 15</text>
      <text x="700" y="200" className="fill-white/60 text-xs" textAnchor="end">Day 30</text>
    </g>
  </svg>
);

const AIPipelineSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Data Collection Layer */}
    <rect x="100" y="50" width="600" height="60" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="400" y="85" className="fill-white text-sm" textAnchor="middle">Real-time Data Collection</text>
    <text x="200" y="85" className="fill-white/60 text-xs" textAnchor="middle">Competitor Data</text>
    <text x="400" y="85" className="fill-white/60 text-xs" textAnchor="middle">Market Trends</text>
    <text x="600" y="85" className="fill-white/60 text-xs" textAnchor="middle">User Behavior</text>

    {/* Analysis Layer */}
    <rect x="100" y="120" width="600" height="60" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="400" y="155" className="fill-white text-sm" textAnchor="middle">Neural Network Analysis</text>
    <text x="200" y="155" className="fill-white/60 text-xs" textAnchor="middle">Pattern Recognition</text>
    <text x="400" y="155" className="fill-white/60 text-xs" textAnchor="middle">Semantic Analysis</text>
    <text x="600" y="155" className="fill-white/60 text-xs" textAnchor="middle">Trend Prediction</text>

    {/* Optimization Layer */}
    <rect x="100" y="190" width="600" height="60" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="400" y="225" className="fill-white text-sm" textAnchor="middle">Automated Optimization</text>
    <text x="200" y="225" className="fill-white/60 text-xs" textAnchor="middle">Content Updates</text>
    <text x="400" y="225" className="fill-white/60 text-xs" textAnchor="middle">Structure Changes</text>
    <text x="600" y="225" className="fill-white/60 text-xs" textAnchor="middle">Keyword Targeting</text>

    {/* Connecting Lines */}
    <path d="M400 110 L400 120" className="stroke-sage-green" strokeWidth="2" />
    <path d="M400 180 L400 190" className="stroke-sage-green" strokeWidth="2" />
  </svg>
);

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-dark-bg text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <time className="text-sage-green text-sm font-medium">October 15, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            How Competitor Research Fuels AI-Optimized SEO
          </h1>
          <p className="text-xl text-white/80 mb-8">
            A deep dive into how AI transforms competitor insights into actionable SEO strategies
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
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Beyond Traditional SEO</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;During my time building enterprise systems at Microsoft,&quot; I share, &quot;I noticed 
              that most SEO tools were reactive rather than proactive. They&apos;d tell you what 
              happened, but not what to do next. This limitation became particularly evident 
              when working with large-scale e-commerce platforms that needed to compete in 
              rapidly changing markets.&quot;
            </p>
            
            <CompetitorAnalysisSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, &quot;By applying advanced AI algorithms to competitor analysis, we&apos;ve 
              created a system that doesn&apos;t just track competitors – it predicts their next 
              moves and automatically adapts your site to stay ahead. This builds on our core 
              <a href="/blog/dynamic-evolution-websites" className="text-sage-green hover:text-sage-green-light ml-1">
                dynamic evolution technology
              </a>.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The AI SEO Pipeline</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;Our AI pipeline represents a fundamental shift in how SEO is done,&quot; Sahil explains. 
              &quot;Instead of periodic manual analysis, we&apos;ve created a continuous learning system 
              that processes competitor data in real-time.&quot;
            </p>

            <AIPipelineSVG />

            <p className="text-white/90 leading-relaxed mt-4">
              This technology is part of our broader 
              <a href="/blog/ai-transforming-web-design" className="text-sage-green hover:text-sage-green-light ml-1">
                AI-driven web design approach
              </a>, 
              ensuring that SEO is integrated into every aspect of your website.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Measurable Results</h2>
            <SEOMetricsSVG />
            <p className="text-white/90 leading-relaxed">
              &quot;The results speak for themselves,&quot; I share. &quot;One of our early users, an 
              e-commerce platform competing in a saturated market, saw their keyword rankings 
              improve by 45% in just 30 days. But what&apos;s more impressive is how these 
              improvements compound over time as our AI learns and adapts.&quot;
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              Sahil explains, &quot;Each optimization creates a feedback loop that enhances our 
              <a href="/blog/nlp-website-copy" className="text-sage-green hover:text-sage-green-light ml-1">
                NLP-driven content system
              </a>. 
              As we track the results, the AI becomes even better at predicting which changes 
              will have the biggest impact.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Enterprise-Grade Features</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Predictive Analysis:</strong>
                  <span className="text-white/90 ml-2">
                    Neural networks trained on millions of data points to anticipate market trends
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Automated Optimization:</strong>
                  <span className="text-white/90 ml-2">
                    Real-time adjustments to content, structure, and keywords based on competitor moves
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Content Strategy:</strong>
                  <span className="text-white/90 ml-2">
                    AI-driven recommendations for content gaps and opportunities
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Performance Tracking:</strong>
                  <span className="text-white/90 ml-2">
                    Detailed analytics with our 
                    <a href="/blog/conversion-insights" className="text-sage-green hover:text-sage-green-light ml-1">
                      advanced conversion tracking
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Start Optimizing Today</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Experience the power of AI-driven SEO optimization. Our 
              <a href="/blog/token-based-pricing" className="text-sage-green hover:text-sage-green-light ml-1">
                flexible pricing model
              </a> 
              makes enterprise-grade SEO accessible to businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/get-started" 
                className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold text-center"
              >
                Analyze Your Competition
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
