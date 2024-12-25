'use client';

const ComparisonSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Traditional Web Design Process */}
    <g className="opacity-60">
      <rect x="50" y="50" width="300" height="300" rx="8" className="stroke-white/40" strokeWidth="2" />
      <text x="200" y="100" className="fill-white text-lg font-medium" textAnchor="middle">Traditional Process</text>
      <path d="M100 150 L300 150" className="stroke-white/40" strokeWidth="2" strokeDasharray="4 4" />
      <text x="200" y="180" className="fill-white/60 text-sm" textAnchor="middle">Manual Design</text>
      <path d="M100 200 L300 200" className="stroke-white/40" strokeWidth="2" strokeDasharray="4 4" />
      <text x="200" y="230" className="fill-white/60 text-sm" textAnchor="middle">Static Updates</text>
      <path d="M100 250 L300 250" className="stroke-white/40" strokeWidth="2" strokeDasharray="4 4" />
      <text x="200" y="280" className="fill-white/60 text-sm" textAnchor="middle">Manual Optimization</text>
    </g>

    {/* AI-Powered Process */}
    <g className="opacity-100">
      <rect x="450" y="50" width="300" height="300" rx="8" className="stroke-sage-green" strokeWidth="2" />
      <text x="600" y="100" className="fill-sage-green text-lg font-medium" textAnchor="middle">AI-Powered Process</text>
      <path d="M500 150 L700 150" className="stroke-sage-green" strokeWidth="2" />
      <text x="600" y="180" className="fill-white text-sm" textAnchor="middle">Automated Design</text>
      <path d="M500 200 L700 200" className="stroke-sage-green" strokeWidth="2" />
      <text x="600" y="230" className="fill-white text-sm" textAnchor="middle">Dynamic Evolution</text>
      <path d="M500 250 L700 250" className="stroke-sage-green" strokeWidth="2" />
      <text x="600" y="280" className="fill-white text-sm" textAnchor="middle">Real-time Optimization</text>
    </g>

    {/* Connecting Arrow */}
    <path d="M375 200 L425 200" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrowhead)" />
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" className="fill-sage-green" />
      </marker>
    </defs>
  </svg>
);

const AIProcessSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="50" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="100" y="90" className="fill-white text-sm font-medium" textAnchor="middle">Business</text>
    <text x="100" y="110" className="fill-white text-sm font-medium" textAnchor="middle">Requirements</text>
    
    <path d="M150 100 L250 100" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4" />
    
    <circle cx="300" cy="100" r="50" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="300" y="90" className="fill-white text-sm font-medium" textAnchor="middle">Neural</text>
    <text x="300" y="110" className="fill-white text-sm font-medium" textAnchor="middle">Analysis</text>
    
    <path d="M350 100 L450 100" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4" />
    
    <circle cx="500" cy="100" r="50" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="500" y="90" className="fill-white text-sm font-medium" textAnchor="middle">Design</text>
    <text x="500" y="110" className="fill-white text-sm font-medium" textAnchor="middle">Generation</text>
    
    <path d="M550 100 L650 100" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4" />
    
    <circle cx="700" cy="100" r="50" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="700" y="90" className="fill-white text-sm font-medium" textAnchor="middle">Continuous</text>
    <text x="700" y="110" className="fill-white text-sm font-medium" textAnchor="middle">Optimization</text>
  </svg>
);

const AIArchitectureSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Neural Network Layers */}
    <g>
      {/* Input Layer */}
      <rect x="100" y="50" width="150" height="200" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="175" y="140" className="fill-white text-sm" textAnchor="middle">Input Layer</text>
      <text x="175" y="160" className="fill-white/60 text-xs" textAnchor="middle">Business Context</text>
      <text x="175" y="180" className="fill-white/60 text-xs" textAnchor="middle">User Behavior</text>
      <text x="175" y="200" className="fill-white/60 text-xs" textAnchor="middle">Market Data</text>

      {/* Hidden Layers */}
      <rect x="325" y="50" width="150" height="200" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="400" y="140" className="fill-white text-sm" textAnchor="middle">Hidden Layers</text>
      <text x="400" y="160" className="fill-white/60 text-xs" textAnchor="middle">Pattern Recognition</text>
      <text x="400" y="180" className="fill-white/60 text-xs" textAnchor="middle">Feature Extraction</text>
      <text x="400" y="200" className="fill-white/60 text-xs" textAnchor="middle">Decision Making</text>

      {/* Output Layer */}
      <rect x="550" y="50" width="150" height="200" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="625" y="140" className="fill-white text-sm" textAnchor="middle">Output Layer</text>
      <text x="625" y="160" className="fill-white/60 text-xs" textAnchor="middle">Design Decisions</text>
      <text x="625" y="180" className="fill-white/60 text-xs" textAnchor="middle">Content Strategy</text>
      <text x="625" y="200" className="fill-white/60 text-xs" textAnchor="middle">Optimization Plans</text>
    </g>

    {/* Connecting Lines */}
    <path d="M250 150 L325 150" className="stroke-sage-green" strokeWidth="2" />
    <path d="M475 150 L550 150" className="stroke-sage-green" strokeWidth="2" />
  </svg>
);

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-dark-bg text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <time className="text-sage-green text-sm font-medium">October 1, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            How AI is Transforming the Web Design Landscape
          </h1>
          <p className="text-xl text-white/80 mb-8">
            A deep dive into how artificial intelligence is revolutionizing website creation and maintenance
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-white/80">
              By <span className="text-sage-green">Sahil Gupta</span>
            </div>
            <span className="text-white/40">|</span>
            <div className="text-white/80">
              Co-authored by <span className="text-sage-green">Vaibhav Verma</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-invert mx-auto space-y-12">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20 shadow-lg">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Evolution of Web Design</h2>
            <p className="text-white/90 leading-relaxed">
              As a machine learning researcher with a focus on adaptive systems, I (Sahil) have long 
              been fascinated by the potential of AI to transform creative processes. When Vaibhav 
              shared his experiences from Microsoft about the inefficiencies in web development, 
              I immediately saw the opportunity to apply advanced neural networks to solve these 
              challenges.
            </p>
            
            <p className="text-white/90 leading-relaxed mt-4">
              &quot;The traditional web design process is fundamentally flawed,&quot; Vaibhav notes, drawing 
              from his enterprise experience. &quot;It treats websites as static products rather than 
              living systems that need to evolve with user needs and market dynamics.&quot;
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              This insight led to the development of CreatorLabs. Read about our journey in our 
              <a href="/blog/creator-labs-launch" className="text-sage-green hover:text-sage-green-light ml-1">
                launch announcement
              </a>.
            </p>
          </div>

          <div className="bg-dark-bg/50 rounded-xl p-8 border border-white/10 shadow-xl">
            <ComparisonSVG />
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The AI Architecture</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;Our neural network architecture is designed to understand not just design principles, 
              but business context and user psychology,&quot; I explain. &quot;We&apos;ve trained our models on 
              millions of successful websites, analyzing everything from color theory to user flow 
              patterns.&quot;
            </p>

            <AIArchitectureSVG />

            <p className="text-white/90 leading-relaxed mt-4">
              The system continuously learns from user interactions, making it increasingly 
              sophisticated over time. Learn more about how this powers our 
              <a href="/blog/dynamic-evolution-websites" className="text-sage-green hover:text-sage-green-light ml-1">
                dynamic evolution system
              </a>.
            </p>
          </div>

          <div className="bg-dark-bg/50 rounded-xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The AI Process</h2>
            <AIProcessSVG />
            <p className="text-white/90 leading-relaxed mt-4">
              Our AI process transforms business requirements into optimized web experiences through 
              a sophisticated pipeline of neural analysis, design generation, and continuous 
              optimization. See how this enables 
              <a href="/blog/competitor-research-seo" className="text-sage-green hover:text-sage-green-light ml-1">
                automated competitor research and SEO
              </a>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Key Technical Innovations</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Neural Design Engine:</strong>
                  <span className="text-white/90 ml-2">
                    Our proprietary neural network analyzes successful design patterns and adapts them 
                    to your specific business context. This enables rapid prototyping while maintaining 
                    design coherence.
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Adaptive Learning System:</strong>
                  <span className="text-white/90 ml-2">
                    Unlike traditional A/B testing, our system uses reinforcement learning to 
                    continuously optimize multiple aspects simultaneously. Learn more about our 
                    <a href="/blog/conversion-insights" className="text-sage-green hover:text-sage-green-light ml-1">
                      conversion optimization approach
                    </a>.
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Natural Language Processing:</strong>
                  <span className="text-white/90 ml-2">
                    Advanced NLP models analyze and generate content that maintains consistent brand 
                    voice. Explore our 
                    <a href="/blog/nlp-website-copy" className="text-sage-green hover:text-sage-green-light ml-1">
                      NLP-driven content system
                    </a>.
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Real-time Analytics:</strong>
                  <span className="text-white/90 ml-2">
                    Enterprise-grade analytics with predictive modeling for proactive optimization.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Future of AI Web Design</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;We&apos;re just scratching the surface of what&apos;s possible,&quot; I emphasize. &quot;Our research 
              team is already working on next-generation features like emotional intelligence in 
              design adaptation and predictive user journey optimization.&quot;
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              Vaibhav adds, &quot;The future of web design isn&apos;t just automated – it&apos;s intelligently 
              adaptive. We&apos;re building systems that don&apos;t just respond to changes but anticipate 
              them.&quot; Learn about our innovative 
              <a href="/blog/token-based-pricing" className="text-sage-green hover:text-sage-green-light ml-1">
                token-based pricing model
              </a> 
              that makes this technology accessible to businesses of all sizes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Experience AI-Driven Design</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Ready to see how AI can transform your web presence? Start with our intelligent 
              onboarding process that analyzes your business needs and creates a tailored website 
              strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/get-started" 
                className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold text-center"
              >
                Start Your AI Journey
              </a>
              <a 
                href="/how-it-works" 
                className="inline-block bg-transparent text-sage-green px-8 py-4 rounded-lg border border-sage-green hover:bg-sage-green/10 transition-all duration-300 font-semibold text-center"
              >
                Explore the Technology
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
