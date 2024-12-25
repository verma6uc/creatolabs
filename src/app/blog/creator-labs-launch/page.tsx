'use client';

const JourneySVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Journey Timeline */}
    <path d="M100 100 L700 100" className="stroke-sage-green/30" strokeWidth="2" />
    
    {/* Microsoft Experience */}
    <circle cx="200" cy="100" r="20" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="200" y="150" className="fill-white text-sm" textAnchor="middle">Microsoft Years</text>
    
    {/* AI Research */}
    <circle cx="400" cy="100" r="20" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="400" y="150" className="fill-white text-sm" textAnchor="middle">AI Innovation</text>
    
    {/* CreatorLabs Launch */}
    <circle cx="600" cy="100" r="30" className="fill-sage-green/30 stroke-sage-green" strokeWidth="3">
      <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" />
    </circle>
    <text x="600" y="150" className="fill-sage-green text-sm font-bold" textAnchor="middle">CreatorLabs Launch</text>
  </svg>
);

const PlatformCapabilitiesSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Platform */}
    <rect x="300" y="150" width="200" height="100" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="400" y="200" className="fill-white text-lg font-medium" textAnchor="middle">CreatorLabs Core</text>
    
    {/* Capabilities */}
    <g className="opacity-90">
      {/* AI Design */}
      <circle cx="200" cy="100" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="200" y="95" className="fill-white text-sm" textAnchor="middle">Neural</text>
      <text x="200" y="115" className="fill-white text-sm" textAnchor="middle">Design Engine</text>
      <path d="M200 140 L300 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      
      {/* Evolution Engine */}
      <circle cx="600" cy="100" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="600" y="95" className="fill-white text-sm" textAnchor="middle">Dynamic</text>
      <text x="600" y="115" className="fill-white text-sm" textAnchor="middle">Evolution</text>
      <path d="M500 150 L600 140" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      
      {/* Analytics */}
      <circle cx="200" cy="300" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="200" y="295" className="fill-white text-sm" textAnchor="middle">Real-time</text>
      <text x="200" y="315" className="fill-white text-sm" textAnchor="middle">Analytics</text>
      <path d="M200 260 L300 250" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      
      {/* Optimization */}
      <circle cx="600" cy="300" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="600" y="295" className="fill-white text-sm" textAnchor="middle">Adaptive</text>
      <text x="600" y="315" className="fill-white text-sm" textAnchor="middle">Optimization</text>
      <path d="M500 250 L600 260" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
    </g>

    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" className="fill-sage-green" />
      </marker>
    </defs>
  </svg>
);

const TechnologyStackSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stack Layers */}
    <g>
      {/* UI Layer */}
      <rect x="200" y="50" width="400" height="60" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="400" y="85" className="fill-white text-sm" textAnchor="middle">Next.js + TailwindCSS Frontend</text>

      {/* AI Layer */}
      <rect x="200" y="120" width="400" height="60" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="400" y="155" className="fill-white text-sm" textAnchor="middle">Neural Network Processing Layer</text>

      {/* Data Layer */}
      <rect x="200" y="190" width="400" height="60" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="400" y="225" className="fill-white text-sm" textAnchor="middle">Real-time Analytics Engine</text>
    </g>

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
          <time className="text-sage-green text-sm font-medium">December 20, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            Introducing CreatorLabs: The Future of Web Design is Here
          </h1>
          <p className="text-xl text-white/80 mb-8">
            After years of development, we&apos;re proud to announce the launch of CreatorLabs
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-white/80">
              By <span className="text-sage-green">Vaibhav Verma</span>
            </div>
            <span className="text-white/40">|</span>
            <div className="text-white/80">
              Co-authored by <span className="text-sage-green">Sahil Singh</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-invert mx-auto space-y-12">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20 shadow-lg">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Journey to Launch</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;Today marks a milestone in our journey,&quot; I share with excitement. &quot;What 
              started as a frustration with traditional web development at Microsoft has evolved 
              into something revolutionary. During my tenure leading enterprise web solutions, 
              I witnessed firsthand how the traditional approach to web development was failing 
              to meet modern business needs.&quot;
            </p>
            
            <JourneySVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Sahil, with his extensive experience leading AI initiatives at major tech companies, adds, &quot;The launch 
              of CreatorLabs represents more than just a new platform – it&apos;s the culmination of 
              our combined expertise in enterprise software and practical AI applications. We&apos;ve built something 
              that fundamentally changes how websites are created and maintained.&quot;
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              For more about our journey and vision, read our detailed article on 
              <a href="/blog/why-creatorlabs-stands-apart" className="text-sage-green hover:text-sage-green-light ml-1">
                why CreatorLabs stands apart
              </a>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Technical Innovation at Our Core</h2>
            <p className="text-white/90 leading-relaxed">
              At the heart of CreatorLabs lies a sophisticated neural network that powers our 
              design decisions. &quot;We&apos;ve trained our AI on millions of successful websites,&quot; 
              Sahil explains, &quot;but more importantly, we&apos;ve developed a unique approach to 
              continuous learning that allows each website to evolve based on real user interactions.&quot;
            </p>
            
            <TechnologyStackSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Learn more about our innovative approach in our detailed exploration of 
              <a href="/blog/dynamic-evolution-websites" className="text-sage-green hover:text-sage-green-light ml-1">
                dynamic website evolution
              </a>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Core Platform Capabilities</h2>
            <PlatformCapabilitiesSVG />
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Neural Design Engine:</strong>
                  <span className="text-white/90 ml-2">
                    Our AI analyzes your business needs, target audience, and industry trends to make 
                    intelligent design decisions. Read more about 
                    <a href="/blog/ai-transforming-web-design" className="text-sage-green hover:text-sage-green-light ml-1">
                      how AI transforms web design
                    </a>.
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Dynamic Evolution:</strong>
                  <span className="text-white/90 ml-2">
                    Websites that learn and adapt based on user behavior and market changes. Explore our 
                    <a href="/blog/conversion-insights" className="text-sage-green hover:text-sage-green-light ml-1">
                      conversion insights system
                    </a>.
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Enterprise-Grade Analytics:</strong>
                  <span className="text-white/90 ml-2">
                    Deep insights powered by advanced AI, with automatic competitor analysis. See how we handle 
                    <a href="/blog/competitor-research-seo" className="text-sage-green hover:text-sage-green-light ml-1">
                      competitor research and SEO
                    </a>.
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Natural Language Processing:</strong>
                  <span className="text-white/90 ml-2">
                    Advanced content generation and optimization. Learn about our approach to 
                    <a href="/blog/nlp-website-copy" className="text-sage-green hover:text-sage-green-light ml-1">
                      NLP-driven website copy
                    </a>.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Early Success Stories</h2>
            <p className="text-white/90 leading-relaxed">
              During our beta phase, we&apos;ve had the privilege of working with innovative businesses 
              across various sectors. &quot;The results have been incredible,&quot; I note. &quot;We&apos;ve seen 
              websites not just launch faster, but continuously improve their performance over time.&quot;
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              &quot;One of our early users, an e-commerce platform, saw a 300% increase in engagement 
              after implementing our AI-driven optimizations,&quot; Sahil shares. &quot;This is exactly 
              the kind of impact we envisioned when we started this journey.&quot;
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              For detailed case studies and results, check out our upcoming article on AI-powered 
              website success stories.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Looking Ahead</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;This launch is just the beginning,&quot; I emphasize. &quot;Our roadmap includes integration 
              with emerging technologies like AR/VR and voice interfaces. We&apos;re also developing 
              advanced personalization features that will take user experience to the next level.&quot;
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, &quot;We&apos;re particularly excited about our token-based pricing model, which 
              ensures businesses only pay for what they use. Learn more about our innovative 
              <a href="/blog/token-based-pricing" className="text-sage-green hover:text-sage-green-light ml-1">
                token-based pricing approach
              </a>.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Join the Revolution</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              CreatorLabs is now officially open for business. We invite you to be part of this 
              revolution in web design. Experience the power of AI-driven website creation and 
              evolution firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/get-started" 
                className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold text-center"
              >
                Start Creating Now
              </a>
              <a 
                href="/how-it-works" 
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
