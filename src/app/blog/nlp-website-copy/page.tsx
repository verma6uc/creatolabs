'use client';

const NLPProcessSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Input Text Flow */}
    <g>
      <rect x="50" y="50" width="150" height="80" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="125" y="80" className="fill-white text-sm" textAnchor="middle">Brand Voice</text>
      <text x="125" y="100" className="fill-white/60 text-xs" textAnchor="middle">Goals & Context</text>
    </g>

    {/* Processing Steps */}
    <g>
      {/* Analysis */}
      <path d="M200 90 L300 90" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="8;0;8" dur="2s" repeatCount="indefinite" />
      </path>
      <circle cx="350" cy="90" r="40" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
        <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="350" y="85" className="fill-white text-sm" textAnchor="middle">Semantic</text>
      <text x="350" y="100" className="fill-white/60 text-xs" textAnchor="middle">Analysis</text>

      {/* Generation */}
      <path d="M390 90 L490 90" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="8;0;8" dur="2s" repeatCount="indefinite" />
      </path>
      <circle cx="540" cy="90" r="40" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
        <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="540" y="85" className="fill-white text-sm" textAnchor="middle">Neural</text>
      <text x="540" y="100" className="fill-white/60 text-xs" textAnchor="middle">Generation</text>

      {/* Refinement */}
      <path d="M580 90 L680 90" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="8;0;8" dur="2s" repeatCount="indefinite" />
      </path>
      <circle cx="730" cy="90" r="40" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
        <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="730" y="85" className="fill-white text-sm" textAnchor="middle">Style</text>
      <text x="730" y="100" className="fill-white/60 text-xs" textAnchor="middle">Refinement</text>
    </g>

    {/* Tone Examples */}
    <g>
      <rect x="50" y="200" width="200" height="80" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="150" y="230" className="fill-white text-sm" textAnchor="middle">Enterprise</text>
      <text x="150" y="250" className="fill-white/60 text-xs italic" textAnchor="middle">&quot;Delivering enterprise solutions&quot;</text>

      <rect x="300" y="200" width="200" height="80" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="400" y="230" className="fill-white text-sm" textAnchor="middle">Startup</text>
      <text x="400" y="250" className="fill-white/60 text-xs italic" textAnchor="middle">&quot;Let&apos;s innovate together&quot;</text>

      <rect x="550" y="200" width="200" height="80" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="650" y="230" className="fill-white text-sm" textAnchor="middle">Technical</text>
      <text x="650" y="250" className="fill-white/60 text-xs italic" textAnchor="middle">&quot;Powered by neural networks&quot;</text>
    </g>

    {/* Content Types */}
    <g>
      <rect x="50" y="300" width="150" height="60" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="125" y="335" className="fill-white text-sm" textAnchor="middle">Headlines</text>

      <rect x="250" y="300" width="150" height="60" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="325" y="335" className="fill-white text-sm" textAnchor="middle">Body Copy</text>

      <rect x="450" y="300" width="150" height="60" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="525" y="335" className="fill-white text-sm" textAnchor="middle">CTAs</text>

      <rect x="650" y="300" width="150" height="60" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="725" y="335" className="fill-white text-sm" textAnchor="middle">Meta Data</text>
    </g>
  </svg>
);

const NLPArchitectureSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Model Layers */}
    <g>
      {/* Embedding Layer */}
      <rect x="100" y="50" width="600" height="60" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="400" y="85" className="fill-white text-sm" textAnchor="middle">Contextual Embedding Layer</text>
      <text x="200" y="85" className="fill-white/60 text-xs" textAnchor="middle">Word Vectors</text>
      <text x="400" y="85" className="fill-white/60 text-xs" textAnchor="middle">Position Encoding</text>
      <text x="600" y="85" className="fill-white/60 text-xs" textAnchor="middle">Context Mapping</text>

      {/* Transformer Layer */}
      <rect x="100" y="120" width="600" height="60" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="400" y="155" className="fill-white text-sm" textAnchor="middle">Multi-Head Attention Layer</text>
      <text x="200" y="155" className="fill-white/60 text-xs" textAnchor="middle">Self-Attention</text>
      <text x="400" y="155" className="fill-white/60 text-xs" textAnchor="middle">Cross-Attention</text>
      <text x="600" y="155" className="fill-white/60 text-xs" textAnchor="middle">Feed Forward</text>

      {/* Generation Layer */}
      <rect x="100" y="190" width="600" height="60" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="400" y="225" className="fill-white text-sm" textAnchor="middle">Content Generation Layer</text>
      <text x="200" y="225" className="fill-white/60 text-xs" textAnchor="middle">Token Prediction</text>
      <text x="400" y="225" className="fill-white/60 text-xs" textAnchor="middle">Style Transfer</text>
      <text x="600" y="225" className="fill-white/60 text-xs" textAnchor="middle">Quality Control</text>
    </g>

    {/* Connecting Lines */}
    <path d="M400 110 L400 120" className="stroke-sage-green" strokeWidth="2" />
    <path d="M400 180 L400 190" className="stroke-sage-green" strokeWidth="2" />
  </svg>
);

const ContentOptimizationSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Content Hub */}
    <circle cx="400" cy="150" r="60" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
      <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" />
    </circle>
    <text x="400" y="145" className="fill-white text-sm" textAnchor="middle">Content</text>
    <text x="400" y="165" className="fill-white text-sm" textAnchor="middle">Optimization</text>

    {/* Optimization Aspects */}
    <g>
      {/* SEO */}
      <path d="M460 150 L600 80" className="stroke-sage-green" strokeWidth="1" />
      <circle cx="600" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="85" className="fill-white text-xs" textAnchor="middle">SEO Impact</text>

      {/* Readability */}
      <path d="M460 150 L600 150" className="stroke-sage-green" strokeWidth="1" />
      <circle cx="600" cy="150" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="155" className="fill-white text-xs" textAnchor="middle">Readability</text>

      {/* Conversion */}
      <path d="M460 150 L600 220" className="stroke-sage-green" strokeWidth="1" />
      <circle cx="600" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="225" className="fill-white text-xs" textAnchor="middle">Conversion</text>

      {/* Brand Voice */}
      <path d="M340 150 L200 80" className="stroke-sage-green" strokeWidth="1" />
      <circle cx="200" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="85" className="fill-white text-xs" textAnchor="middle">Brand Voice</text>

      {/* Engagement */}
      <path d="M340 150 L200 220" className="stroke-sage-green" strokeWidth="1" />
      <circle cx="200" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="225" className="fill-white text-xs" textAnchor="middle">Engagement</text>
    </g>
  </svg>
);

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-dark-bg text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <time className="text-sage-green text-sm font-medium">November 12, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            Harnessing NLP for High-Converting Website Copy
          </h1>
          <p className="text-xl text-white/80 mb-8">
            A deep dive into how advanced language models transform content creation
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
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Evolution of NLP</h2>
            <p className="text-white/90 leading-relaxed">
              As an AI researcher specializing in natural language processing, I (Sahil) have 
              witnessed the remarkable evolution of language models. &quot;The breakthrough came 
              when we moved beyond simple pattern matching to understanding context and 
              intent,&quot; I explain. &quot;This was crucial for developing our 
              <a href="/blog/dynamic-evolution-websites" className="text-sage-green hover:text-sage-green-light ml-1">
                dynamic evolution system
              </a>.&quot;
            </p>
            
            <NLPProcessSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Vaibhav adds, &quot;At Microsoft, maintaining consistent brand voice across enterprise 
              platforms was a constant challenge. Our NLP system solves this by understanding 
              not just language, but brand personality and communication goals.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Neural Architecture</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;Our NLP system is built on a sophisticated transformer architecture,&quot; I explain. 
              &quot;We&apos;ve enhanced the standard model with specialized attention mechanisms for 
              brand voice consistency and conversion optimization.&quot;
            </p>

            <NLPArchitectureSVG />

            <p className="text-white/90 leading-relaxed mt-4">
              This advanced architecture powers our 
              <a href="/blog/competitor-research-seo" className="text-sage-green hover:text-sage-green-light ml-1">
                competitor analysis
              </a> 
              and content optimization systems, ensuring your content stands out while maintaining 
              authenticity.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Content Optimization</h2>
            <ContentOptimizationSVG />
            <p className="text-white/90 leading-relaxed">
              &quot;Traditional content optimization focuses on keywords,&quot; Vaibhav notes. &quot;Our 
              system goes deeper, analyzing semantic relationships and user intent. This is how 
              we achieved a 40% increase in conversion rates for our early users.&quot;
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              I add, &quot;The real innovation is in how we combine NLP with our 
              <a href="/blog/ai-transforming-web-design" className="text-sage-green hover:text-sage-green-light ml-1">
                AI design system
              </a>. 
              Content isn&apos;t just words on a page – it&apos;s part of a holistic user experience that 
              evolves based on real user interactions.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Technical Innovations</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Contextual Understanding:</strong>
                  <span className="text-white/90 ml-2">
                    Advanced transformer models that understand industry context and brand voice
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Adaptive Generation:</strong>
                  <span className="text-white/90 ml-2">
                    Content that evolves based on user engagement metrics and 
                    <a href="/blog/conversion-insights" className="text-sage-green hover:text-sage-green-light ml-1">
                      conversion data
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Multi-Modal Analysis:</strong>
                  <span className="text-white/90 ml-2">
                    Integration with visual and interaction data for comprehensive optimization
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Enterprise Scalability:</strong>
                  <span className="text-white/90 ml-2">
                    Handles millions of content variations while maintaining consistency
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Experience Next-Gen Content</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Transform your website content with our advanced NLP system. With our 
              <a href="/blog/token-based-pricing" className="text-sage-green hover:text-sage-green-light ml-1">
                flexible pricing model
              </a>, 
              enterprise-grade content optimization is accessible to businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/get-started" 
                className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold text-center"
              >
                Try Content Generation
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
