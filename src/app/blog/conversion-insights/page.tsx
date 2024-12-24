'use client';

const AnalyticsDashboardSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dashboard Frame */}
    <rect x="50" y="50" width="700" height="300" rx="8" className="stroke-sage-green" strokeWidth="2" />
    
    {/* Metrics Grid */}
    <g>
      {/* Visitors */}
      <rect x="80" y="80" width="150" height="80" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="155" y="110" className="fill-white text-sm" textAnchor="middle">Visitors</text>
      <text x="155" y="140" className="fill-sage-green text-lg font-bold" textAnchor="middle">12,458</text>

      {/* Engagement */}
      <rect x="250" y="80" width="150" height="80" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="325" y="110" className="fill-white text-sm" textAnchor="middle">Avg. Time</text>
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
          <p className="text-xl text-white/80">
            How AI transforms raw analytics into actionable improvements
          </p>
        </header>

        <div className="prose prose-lg prose-invert mx-auto space-y-12">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20 shadow-lg">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Beyond Basic Analytics</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;At Microsoft,&quot; I (Vaibhav) share, &quot;we had access to incredible amounts of 
              data, but turning that into actionable insights was a constant challenge. 
              Teams would spend weeks analyzing reports, only to find that the insights 
              were already outdated.&quot;
            </p>
            
            <AnalyticsDashboardSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, &quot;That&apos;s why we built our analytics engine differently. It doesn&apos;t 
              just collect data – it actively interprets patterns and suggests optimizations 
              in real-time. It&apos;s like having a team of analysts working 24/7.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Visual Behavior Analysis</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Heatmaps & Click Tracking</h3>
                <p className="text-white/90 leading-relaxed">
                  &quot;Understanding user behavior isn&apos;t just about numbers,&quot; I explain. &quot;Our 
                  AI creates dynamic heatmaps that show exactly how users interact with 
                  your content. But more importantly, it identifies patterns that humans 
                  might miss.&quot;
                </p>
              </div>

              <HeatmapVisualizationSVG />

              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Funnel Optimization</h3>
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

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Continuous Improvement</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;One of our e-commerce clients,&quot; I share, &quot;was struggling with cart 
              abandonment. Our AI identified that users were dropping off at shipping 
              information. By automatically testing different form layouts and copy, we 
              reduced abandonment by 35% in just two weeks.&quot;
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              Sahil explains, &quot;The system learns from every interaction across our entire 
              platform. When it discovers an optimization that works well for one site, 
              it can suggest similar improvements to others in the same industry. It&apos;s 
              like having the collective wisdom of thousands of websites working for you.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Start Optimizing Today</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Experience the power of AI-driven analytics and optimization. Our platform 
              turns complex data into clear, actionable insights that continuously improve 
              your website&apos;s performance.
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
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
