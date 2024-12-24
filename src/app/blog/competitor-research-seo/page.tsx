'use client';

import Image from 'next/image';

const CompetitorAnalysisSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Website */}
    <circle cx="400" cy="200" r="60" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="400" y="205" className="fill-white text-lg font-medium" textAnchor="middle">Your Site</text>

    {/* Competitor Analysis Rays */}
    <g className="animate-pulse">
      {/* Competitor 1 */}
      <path d="M460 200 L700 100" className="stroke-sage-green/30" strokeWidth="1" />
      <circle cx="700" cy="100" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="700" y="105" className="fill-white text-sm" textAnchor="middle">Competitor 1</text>
      
      {/* Competitor 2 */}
      <path d="M460 200 L700 200" className="stroke-sage-green/30" strokeWidth="1" />
      <circle cx="700" cy="200" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="700" y="205" className="fill-white text-sm" textAnchor="middle">Competitor 2</text>
      
      {/* Competitor 3 */}
      <path d="M460 200 L700 300" className="stroke-sage-green/30" strokeWidth="1" />
      <circle cx="700" cy="300" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="700" y="305" className="fill-white text-sm" textAnchor="middle">Competitor 3</text>

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
      <text x="250" y="190" className="fill-white text-sm" textAnchor="middle">AI Analysis</text>
      <text x="250" y="210" className="fill-white text-sm" textAnchor="middle">Engine</text>
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
      <text x="175" y="110" className="fill-white text-sm" textAnchor="middle">Keyword Rankings</text>
      <text x="175" y="130" className="fill-sage-green text-sm font-bold" textAnchor="middle">+45%</text>

      {/* Traffic Growth */}
      <rect x="325" y="80" width="150" height="60" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="400" y="110" className="fill-white text-sm" textAnchor="middle">Traffic Growth</text>
      <text x="400" y="130" className="fill-sage-green text-sm font-bold" textAnchor="middle">+68%</text>

      {/* Conversion Rate */}
      <rect x="550" y="80" width="150" height="60" rx="4" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="625" y="110" className="fill-white text-sm" textAnchor="middle">Conversion Rate</text>
      <text x="625" y="130" className="fill-sage-green text-sm font-bold" textAnchor="middle">+32%</text>

      {/* Timeline */}
      <path d="M100 180 L700 180" className="stroke-sage-green" strokeWidth="1" strokeDasharray="4 4" />
      <text x="100" y="200" className="fill-white/60 text-xs" textAnchor="start">Day 1</text>
      <text x="400" y="200" className="fill-white/60 text-xs" textAnchor="middle">Day 15</text>
      <text x="700" y="200" className="fill-white/60 text-xs" textAnchor="end">Day 30</text>
    </g>
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
          <p className="text-xl text-white/80">
            Leveraging AI to transform competitor insights into actionable SEO strategies
          </p>
        </header>

        <div className="prose prose-lg prose-invert mx-auto space-y-12">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20 shadow-lg">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Beyond Traditional SEO</h2>
            <p className="text-white/90 leading-relaxed">
              "During my time building enterprise systems at Microsoft," I (Vaibhav) share, 
              "I noticed that most SEO tools were reactive rather than proactive. They'd tell 
              you what happened, but not what to do next. We wanted to change that fundamental 
              approach."
            </p>
            
            <CompetitorAnalysisSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, "By applying advanced AI algorithms to competitor analysis, we've 
              created a system that doesn't just track competitors – it predicts their next 
              moves and automatically adapts your site to stay ahead."
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Real-Time Competitive Edge</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Continuous Monitoring</h3>
                <p className="text-white/90 leading-relaxed">
                  "Traditional SEO tools give you weekly reports," I explain. "Our AI monitors 
                  competitor changes in real-time. When a competitor updates their content 
                  strategy or targets new keywords, our system alerts you immediately and 
                  suggests optimizations."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Pattern Recognition</h3>
                <p className="text-white/90 leading-relaxed">
                  "This is where my background in AI pattern recognition comes in," Sahil notes. 
                  "Our system doesn't just look at keywords – it understands content strategy 
                  patterns across your entire competitive landscape, identifying gaps and 
                  opportunities others might miss."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Measurable Results</h2>
            <SEOMetricsSVG />
            <p className="text-white/90 leading-relaxed">
              "The results speak for themselves," I share. "One of our early users saw their 
              keyword rankings improve by 45% in just 30 days. But what's more impressive is 
              how these improvements compound over time as our AI learns and adapts."
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              Sahil explains, "Each optimization creates a feedback loop. As we track the 
              results, the AI becomes even better at predicting which changes will have the 
              biggest impact. It's not just about ranking higher – it's about ranking for 
              the right keywords that drive conversions."
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The AI Advantage</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Predictive Analysis:</strong>
                  <span className="text-white/90 ml-2">Anticipate competitor moves before they happen</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Automated Optimization:</strong>
                  <span className="text-white/90 ml-2">Continuous improvements without manual intervention</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Content Strategy:</strong>
                  <span className="text-white/90 ml-2">AI-driven recommendations for content gaps</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Performance Tracking:</strong>
                  <span className="text-white/90 ml-2">Real-time metrics and actionable insights</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Start Optimizing Today</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Experience the power of AI-driven SEO optimization. Let our system analyze your 
              competitors and start building your path to higher rankings and better 
              conversions.
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
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
