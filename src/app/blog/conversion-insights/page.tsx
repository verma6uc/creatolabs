'use client';

const AnalyticsDashboardSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dashboard Frame */}
    <rect x="50" y="50" width="700" height="300" rx="8" className="stroke-sage-green" strokeWidth="2" />
    
    {/* Metrics Grid */}
    <g>
      {/* Visitors */}
      <rect x="80" y="80" width="150" height="80" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="155" y="110" className="fill-white text-sm" textAnchor="middle">Unique Users</text>
      <text x="155" y="140" className="fill-sage-green text-lg font-bold" textAnchor="middle">12,458</text>

      {/* Engagement */}
      <rect x="250" y="80" width="150" height="80" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="325" y="110" className="fill-white text-sm" textAnchor="middle">Session Time</text>
      <text x="325" y="140" className="fill-sage-green text-lg font-bold" textAnchor="middle">2:45</text>

      {/* Conversion Rate */}
      <rect x="420" y="80" width="150" height="80" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="495" y="110" className="fill-white text-sm" textAnchor="middle">Conversion</text>
      <text x="495" y="140" className="fill-sage-green text-lg font-bold" textAnchor="middle">4.8%</text>

      {/* Revenue */}
      <rect x="590" y="80" width="150" height="80" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="665" y="110" className="fill-white text-sm" textAnchor="middle">Revenue</text>
      <text x="665" y="140" className="fill-sage-green text-lg font-bold" textAnchor="middle">$24.5K</text>
    </g>

    {/* Trend Graph */}
    <g>
      <path d="M80 250 L730 250" className="stroke-white/20" strokeWidth="1" />
      <path d="M80 200 L730 200" className="stroke-white/20" strokeWidth="1" />
      <path d="M80 300 L730 300" className="stroke-white/20" strokeWidth="1" />
      
      {/* Trend Line */}
      <path d="M80 280 Q200 260 300 240 T500 220 T730 180" 
        className="stroke-sage-green" strokeWidth="2" fill="none">
        <animate attributeName="d" 
          values="M80 280 Q200 260 300 240 T500 220 T730 180;
                  M80 260 Q200 240 300 220 T500 200 T730 160;
                  M80 280 Q200 260 300 240 T500 220 T730 180" 
          dur="4s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

const AIAnalyticsPipelineSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Data Collection Layer */}
    <rect x="100" y="50" width="600" height="60" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="400" y="85" className="fill-white text-sm" textAnchor="middle">Real-time Data Collection</text>
    <text x="200" y="85" className="fill-white/60 text-xs" textAnchor="middle">User Events</text>
    <text x="400" y="85" className="fill-white/60 text-xs" textAnchor="middle">Interactions</text>
    <text x="600" y="85" className="fill-white/60 text-xs" textAnchor="middle">Conversions</text>

    {/* Processing Layer */}
    <rect x="100" y="120" width="600" height="60" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="400" y="155" className="fill-white text-sm" textAnchor="middle">Neural Network Analysis</text>
    <text x="200" y="155" className="fill-white/60 text-xs" textAnchor="middle">Pattern Detection</text>
    <text x="400" y="155" className="fill-white/60 text-xs" textAnchor="middle">Behavior Analysis</text>
    <text x="600" y="155" className="fill-white/60 text-xs" textAnchor="middle">Predictive Models</text>

    {/* Optimization Layer */}
    <rect x="100" y="190" width="600" height="60" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="400" y="225" className="fill-white text-sm" textAnchor="middle">Automated Optimization</text>
    <text x="200" y="225" className="fill-white/60 text-xs" textAnchor="middle">Layout Changes</text>
    <text x="400" y="225" className="fill-white/60 text-xs" textAnchor="middle">Content Updates</text>
    <text x="600" y="225" className="fill-white/60 text-xs" textAnchor="middle">UX Improvements</text>

    {/* Connecting Lines */}
    <path d="M400 110 L400 120" className="stroke-sage-green" strokeWidth="2" />
    <path d="M400 180 L400 190" className="stroke-sage-green" strokeWidth="2" />
  </svg>
);

const HeatmapVisualizationSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Website Layout */}
    <rect x="50" y="50" width="700" height="200" rx="8" className="fill-white/5 stroke-white/20" strokeWidth="1" />
    
    {/* Navigation */}
    <rect x="70" y="70" width="660" height="40" className="fill-white/10 stroke-white/20" strokeWidth="1" />
    
    {/* Hero Section */}
    <g>
      <rect x="70" y="130" width="300" height="100" className="fill-sage-green/30" strokeWidth="0">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
      </rect>
      <text x="220" y="180" className="fill-white text-sm" textAnchor="middle">High Engagement</text>
    </g>

    {/* CTA Button */}
    <g>
      <rect x="400" y="150" width="120" height="40" rx="4" className="fill-sage-green/50" strokeWidth="0">
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
      </rect>
      <text x="460" y="175" className="fill-white text-sm" textAnchor="middle">CTA</text>
    </g>

    {/* Click Points */}
    <g className="animate-pulse">
      <circle cx="220" cy="180" r="5" className="fill-sage-green" />
      <circle cx="460" cy="170" r="5" className="fill-sage-green" />
      <circle cx="650" cy="85" r="5" className="fill-sage-green" />
    </g>
  </svg>
);

const FunnelAnalysisSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Funnel Stages */}
    <g>
      {/* Visit */}
      <path d="M200 50 L600 50 L550 100 L250 100 Z" className="fill-sage-green/30 stroke-sage-green" strokeWidth="1" />
      <text x="400" y="85" className="fill-white text-sm" textAnchor="middle">Visits: 10,000</text>

      {/* Engagement */}
      <path d="M250 120 L550 120 L500 170 L300 170 Z" className="fill-sage-green/40 stroke-sage-green" strokeWidth="1" />
      <text x="400" y="155" className="fill-white text-sm" textAnchor="middle">Engagement: 5,000</text>

      {/* Consideration */}
      <path d="M300 190 L500 190 L450 240 L350 240 Z" className="fill-sage-green/50 stroke-sage-green" strokeWidth="1" />
      <text x="400" y="225" className="fill-white text-sm" textAnchor="middle">Consideration: 2,000</text>

      {/* Conversion */}
      <path d="M350 260 L450 260 L425 290 L375 290 Z" className="fill-sage-green/60 stroke-sage-green" strokeWidth="1" />
      <text x="400" y="280" className="fill-white text-sm" textAnchor="middle">Conversion: 500</text>
    </g>

    {/* Flow Indicators */}
    <g>
      <path d="M400 100 L400 120" className="stroke-sage-green/60" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="8;0;8" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M400 170 L400 190" className="stroke-sage-green/60" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="8;0;8" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M400 240 L400 260" className="stroke-sage-green/60" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="8;0;8" dur="2s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-dark-bg text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <time className="text-sage-green text-sm font-medium">November 19, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            Measuring What Matters: Turning Clicks into Conversion Insights
          </h1>
          <p className="text-xl text-white/80 mb-8">
            A deep dive into how AI transforms raw analytics into actionable improvements
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
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Beyond Basic Analytics</h2>
            <p className="text-white/90 leading-relaxed">
              As the former lead of enterprise analytics at Microsoft, I (Vaibhav) experienced 
              firsthand the limitations of traditional analytics. &quot;We had access to incredible 
              amounts of data,&quot; I explain, &quot;but turning that into actionable insights was a 
              constant challenge. Teams would spend weeks analyzing reports, only to find that 
              the insights were already outdated.&quot;
            </p>
            
            <AnalyticsDashboardSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, &quot;That&apos;s why we built our analytics engine differently. It doesn&apos;t 
              just collect data – it actively interprets patterns and suggests optimizations 
              in real-time. This builds on our core 
              <a href="/blog/dynamic-evolution-websites" className="text-sage-green hover:text-sage-green-light ml-1">
                dynamic evolution technology
              </a>.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The AI Analytics Pipeline</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;Our analytics system represents a fundamental shift in how we process user 
              data,&quot; Sahil explains. &quot;We&apos;ve built a neural network that doesn&apos;t just track 
              metrics – it understands user behavior patterns and predicts future trends.&quot;
            </p>

            <AIAnalyticsPipelineSVG />

            <p className="text-white/90 leading-relaxed mt-4">
              This advanced pipeline integrates with our 
              <a href="/blog/nlp-website-copy" className="text-sage-green hover:text-sage-green-light ml-1">
                NLP system
              </a> 
              to optimize both content and user experience based on real user behavior.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Visual Behavior Analysis</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Advanced Heatmapping</h3>
                <p className="text-white/90 leading-relaxed">
                  &quot;Understanding user behavior isn&apos;t just about numbers,&quot; I explain. &quot;Our 
                  AI creates dynamic heatmaps that show exactly how users interact with your 
                  content. This data feeds directly into our 
                  <a href="/blog/competitor-research-seo" className="text-sage-green hover:text-sage-green-light ml-1">
                    competitive analysis system
                  </a>.&quot;
                </p>
              </div>

              <HeatmapVisualizationSVG />

              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Intelligent Funnel Analysis</h3>
                <p className="text-white/90 leading-relaxed">
                  &quot;The real magic happens in the optimization,&quot; Sahil notes. &quot;Our AI 
                  doesn&apos;t just show you where users drop off – it proactively suggests 
                  changes to improve conversion rates, backed by data from successful 
                  patterns across our platform.&quot;
                </p>
              </div>

              <FunnelAnalysisSVG />
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Enterprise-Grade Features</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Real-time Processing:</strong>
                  <span className="text-white/90 ml-2">
                    Advanced stream processing for instant insights on user behavior
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Predictive Analytics:</strong>
                  <span className="text-white/90 ml-2">
                    Machine learning models that anticipate user needs and behavior patterns
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Automated Optimization:</strong>
                  <span className="text-white/90 ml-2">
                    AI-driven improvements based on our 
                    <a href="/blog/ai-transforming-web-design" className="text-sage-green hover:text-sage-green-light ml-1">
                      neural design system
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Cross-Platform Learning:</strong>
                  <span className="text-white/90 ml-2">
                    Insights shared across our platform for faster optimization
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Transform Your Analytics</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Experience enterprise-grade analytics made accessible. With our 
              <a href="/blog/token-based-pricing" className="text-sage-green hover:text-sage-green-light ml-1">
                flexible pricing model
              </a>, 
              advanced analytics and optimization are available to businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/get-started" 
                className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold text-center"
              >
                Start Analyzing
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
