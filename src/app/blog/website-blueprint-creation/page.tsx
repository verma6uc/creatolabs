'use client';

const BlueprintStepsSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Steps Timeline */}
    <path d="M100 200 L700 200" className="stroke-sage-green/30" strokeWidth="2" />
    
    {/* Step 1: Basic Info */}
    <g className="animate-pulse">
      <circle cx="100" cy="200" r="30" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="100" y="205" className="fill-white text-sm" textAnchor="middle">1</text>
      <text x="100" y="250" className="fill-white text-xs" textAnchor="middle">Business Info</text>
    </g>

    {/* Step 2: Purpose */}
    <g className="animate-pulse">
      <circle cx="250" cy="200" r="30" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="250" y="205" className="fill-white text-sm" textAnchor="middle">2</text>
      <text x="250" y="250" className="fill-white text-xs" textAnchor="middle">Goals</text>
    </g>

    {/* Step 3: Competitors */}
    <g className="animate-pulse">
      <circle cx="400" cy="200" r="30" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="400" y="205" className="fill-white text-sm" textAnchor="middle">3</text>
      <text x="400" y="250" className="fill-white text-xs" textAnchor="middle">Competition</text>
    </g>

    {/* Step 4: Structure */}
    <g className="animate-pulse">
      <circle cx="550" cy="200" r="30" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="550" y="205" className="fill-white text-sm" textAnchor="middle">4</text>
      <text x="550" y="250" className="fill-white text-xs" textAnchor="middle">Architecture</text>
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

const AIPlanningSystemSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Planning System */}
    <circle cx="400" cy="150" r="60" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
      <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" />
    </circle>
    <text x="400" y="140" className="fill-white text-sm" textAnchor="middle">Neural</text>
    <text x="400" y="160" className="fill-white text-sm" textAnchor="middle">Planning</text>

    {/* Input Streams */}
    <g>
      {/* Business Goals */}
      <path d="M200 80 L340 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="200" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="75" className="fill-white text-xs" textAnchor="middle">Business</text>
      <text x="200" y="90" className="fill-white text-xs" textAnchor="middle">Goals</text>

      {/* Market Data */}
      <path d="M200 220 L340 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="200" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="215" className="fill-white text-xs" textAnchor="middle">Market</text>
      <text x="200" y="230" className="fill-white text-xs" textAnchor="middle">Analysis</text>
    </g>

    {/* Output Streams */}
    <g>
      {/* Site Architecture */}
      <path d="M460 150 L600 80" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="75" className="fill-white text-xs" textAnchor="middle">Site</text>
      <text x="600" y="90" className="fill-white text-xs" textAnchor="middle">Architecture</text>

      {/* Content Strategy */}
      <path d="M460 150 L600 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="150" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="145" className="fill-white text-xs" textAnchor="middle">Content</text>
      <text x="600" y="160" className="fill-white text-xs" textAnchor="middle">Strategy</text>

      {/* Design Direction */}
      <path d="M460 150 L600 220" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="215" className="fill-white text-xs" textAnchor="middle">Design</text>
      <text x="600" y="230" className="fill-white text-xs" textAnchor="middle">Direction</text>
    </g>

    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" className="fill-sage-green" />
      </marker>
    </defs>
  </svg>
);

const AIAnalysisSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Analysis Hub */}
    <circle cx="400" cy="150" r="60" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
      <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" />
    </circle>
    <text x="400" y="140" className="fill-white text-sm" textAnchor="middle">Real-time</text>
    <text x="400" y="160" className="fill-white text-sm" textAnchor="middle">Analysis</text>

    {/* Analysis Branches */}
    <g>
      {/* Competitor Analysis */}
      <path d="M460 150 L600 80" className="stroke-sage-green" strokeWidth="1" />
      <circle cx="600" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="75" className="fill-white text-xs" textAnchor="middle">Market</text>
      <text x="600" y="90" className="fill-white text-xs" textAnchor="middle">Position</text>

      {/* Content Strategy */}
      <path d="M460 150 L600 150" className="stroke-sage-green" strokeWidth="1" />
      <circle cx="600" cy="150" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="145" className="fill-white text-xs" textAnchor="middle">Content</text>
      <text x="600" y="160" className="fill-white text-xs" textAnchor="middle">Gaps</text>

      {/* Design Optimization */}
      <path d="M460 150 L600 220" className="stroke-sage-green" strokeWidth="1" />
      <circle cx="600" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="215" className="fill-white text-xs" textAnchor="middle">UX</text>
      <text x="600" y="230" className="fill-white text-xs" textAnchor="middle">Patterns</text>

      {/* User Input */}
      <path d="M340 150 L200 80" className="stroke-sage-green" strokeWidth="1" />
      <circle cx="200" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="75" className="fill-white text-xs" textAnchor="middle">Business</text>
      <text x="200" y="90" className="fill-white text-xs" textAnchor="middle">Context</text>

      {/* Market Trends */}
      <path d="M340 150 L200 220" className="stroke-sage-green" strokeWidth="1" />
      <circle cx="200" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="215" className="fill-white text-xs" textAnchor="middle">Industry</text>
      <text x="200" y="230" className="fill-white text-xs" textAnchor="middle">Trends</text>
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
          <p className="text-xl text-white/80 mb-8">
            How AI transforms complex website planning into an intuitive journey
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
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Enterprise Planning Challenge</h2>
            <p className="text-white/90 leading-relaxed">
              As the former head of enterprise web solutions at Microsoft, I (Vaibhav) witnessed 
              firsthand how website planning could become a bottleneck. &quot;Traditional planning 
              processes were fragmented and inefficient,&quot; I explain. &quot;Different teams would 
              work in silos, leading to misaligned goals and extended timelines.&quot;
            </p>
            
            <BlueprintStepsSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, &quot;This is where our 
              <a href="/blog/ai-transforming-web-design" className="text-sage-green hover:text-sage-green-light ml-1">
                AI-driven approach
              </a> 
              makes a difference. We&apos;ve transformed what used to be weeks of meetings into 
              an intelligent conversation that takes minutes.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Neural Planning System</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;Our planning system isn&apos;t just a questionnaire,&quot; I share. &quot;It&apos;s a neural 
              network that understands the relationships between business goals, user needs, 
              and market dynamics.&quot;
            </p>

            <AIPlanningSystemSVG />

            <p className="text-white/90 leading-relaxed mt-4">
              This system integrates with our 
              <a href="/blog/competitor-research-seo" className="text-sage-green hover:text-sage-green-light ml-1">
                competitor analysis
              </a> 
              and 
              <a href="/blog/dynamic-evolution-websites" className="text-sage-green hover:text-sage-green-light ml-1">
                dynamic evolution
              </a> 
              capabilities to create a comprehensive strategy.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Real-Time Intelligence</h2>
            <AIAnalysisSVG />
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Contextual Understanding</h3>
                <p className="text-white/90 leading-relaxed">
                  &quot;Each answer you provide,&quot; Sahil explains, &quot;is analyzed in real-time by our 
                  neural networks. The system doesn&apos;t just collect information – it understands 
                  the implications for your website&apos;s architecture, content strategy, and user 
                  experience.&quot;
                </p>
              </div>

              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Competitive Edge</h3>
                <p className="text-white/90 leading-relaxed">
                  I add, &quot;While you&apos;re answering questions, our AI is already analyzing your 
                  competitors and market trends. This powers our 
                  <a href="/blog/nlp-website-copy" className="text-sage-green hover:text-sage-green-light ml-1">
                    content strategy
                  </a> 
                  and helps identify opportunities to stand out.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Enterprise-Grade Features</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Intelligent Architecture:</strong>
                  <span className="text-white/90 ml-2">
                    AI-generated site structures based on business goals and user needs
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Market Analysis:</strong>
                  <span className="text-white/90 ml-2">
                    Real-time competitor and trend analysis for strategic positioning
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Content Strategy:</strong>
                  <span className="text-white/90 ml-2">
                    Data-driven content planning based on market gaps and user intent
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Design Direction:</strong>
                  <span className="text-white/90 ml-2">
                    AI-powered design recommendations aligned with brand goals
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Start Your Journey</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Experience our revolutionary website planning process. With our 
              <a href="/blog/token-based-pricing" className="text-sage-green hover:text-sage-green-light ml-1">
                flexible pricing model
              </a>, 
              enterprise-grade planning is accessible to businesses of all sizes.
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
