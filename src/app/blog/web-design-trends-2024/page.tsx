'use client';

const GlassmorphismSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background Gradient */}
    <defs>
      <linearGradient id="bg-gradient" x1="0" y1="0" x2="800" y2="400" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4B79A1" />
        <stop offset="100%" stopColor="#283E51" />
      </linearGradient>
      <filter id="blur-filter">
        <feGaussianBlur stdDeviation="20" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="800" height="400" fill="url(#bg-gradient)" />

    {/* Blur Shapes */}
    <circle cx="200" cy="150" r="100" fill="#4B79A1" filter="url(#blur-filter)" opacity="0.5" />
    <circle cx="600" cy="250" r="120" fill="#283E51" filter="url(#blur-filter)" opacity="0.5" />

    {/* Glass Cards */}
    <g className="glass-effect">
      <rect x="150" y="100" width="200" height="200" rx="20" 
        className="fill-white/10 stroke-white/20" strokeWidth="1" />
      <text x="250" y="180" className="fill-white text-lg font-medium" textAnchor="middle">Navigation</text>
      <line x1="180" y1="220" x2="320" y2="220" className="stroke-white/40" strokeWidth="1" />
      <line x1="180" y1="250" x2="320" y2="250" className="stroke-white/40" strokeWidth="1" />
    </g>

    <g className="glass-effect">
      <rect x="450" y="100" width="200" height="200" rx="20" 
        className="fill-white/10 stroke-white/20" strokeWidth="1" />
      <text x="550" y="180" className="fill-white text-lg font-medium" textAnchor="middle">Content</text>
      <line x1="480" y1="220" x2="620" y2="220" className="stroke-white/40" strokeWidth="1" />
      <line x1="480" y1="250" x2="620" y2="250" className="stroke-white/40" strokeWidth="1" />
    </g>
  </svg>
);

const NeumorphismSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <rect width="800" height="300" fill="#E0E5EC" />

    {/* Neumorphic Elements */}
    <g>
      {/* Button 1 - Pressed */}
      <rect x="100" y="100" width="200" height="100" rx="20" fill="#E0E5EC" 
        className="shadow-[inset_-8px_-8px_12px_rgba(255,255,255,0.8),inset_8px_8px_12px_rgba(0,0,0,0.1)]" />
      <text x="200" y="160" className="fill-gray-600 text-lg font-medium" textAnchor="middle">Interactive</text>

      {/* Button 2 - Raised */}
      <rect x="500" y="100" width="200" height="100" rx="20" fill="#E0E5EC"
        className="shadow-[-8px_-8px_12px_rgba(255,255,255,0.8),8px_8px_12px_rgba(0,0,0,0.1)]" />
      <text x="600" y="160" className="fill-gray-600 text-lg font-medium" textAnchor="middle">Elevated</text>
    </g>
  </svg>
);

const AIDesignSystemSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Design System */}
    <circle cx="400" cy="150" r="60" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
      <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" />
    </circle>
    <text x="400" y="140" className="fill-white text-sm" textAnchor="middle">Neural</text>
    <text x="400" y="160" className="fill-white text-sm" textAnchor="middle">Design Core</text>

    {/* Input Streams */}
    <g>
      {/* User Behavior */}
      <path d="M200 80 L340 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="200" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="75" className="fill-white text-xs" textAnchor="middle">User</text>
      <text x="200" y="90" className="fill-white text-xs" textAnchor="middle">Behavior</text>

      {/* Design Trends */}
      <path d="M200 220 L340 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="200" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="215" className="fill-white text-xs" textAnchor="middle">Design</text>
      <text x="200" y="230" className="fill-white text-xs" textAnchor="middle">Trends</text>
    </g>

    {/* Output Streams */}
    <g>
      {/* Layout Generation */}
      <path d="M460 150 L600 80" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="75" className="fill-white text-xs" textAnchor="middle">Layout</text>
      <text x="600" y="90" className="fill-white text-xs" textAnchor="middle">Generation</text>

      {/* Style Application */}
      <path d="M460 150 L600 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="150" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="145" className="fill-white text-xs" textAnchor="middle">Style</text>
      <text x="600" y="160" className="fill-white text-xs" textAnchor="middle">Application</text>

      {/* Interaction Design */}
      <path d="M460 150 L600 220" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="215" className="fill-white text-xs" textAnchor="middle">Interaction</text>
      <text x="600" y="230" className="fill-white text-xs" textAnchor="middle">Design</text>
    </g>

    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" className="fill-sage-green" />
      </marker>
    </defs>
  </svg>
);

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-dark-bg text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <time className="text-sage-green text-sm font-medium">October 29, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            Glassmorphism & Beyond: The Latest Web Design Trends for 2024
          </h1>
          <p className="text-xl text-white/80 mb-8">
            How neural networks are revolutionizing modern design aesthetics
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
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Evolution of Design AI</h2>
            <p className="text-white/90 leading-relaxed">
              As an AI researcher specializing in visual systems, I (Sahil) have been fascinated 
              by how neural networks can understand and generate design patterns. &quot;The breakthrough 
              came when we developed models that could not just recognize design elements, but 
              understand their psychological impact on users,&quot; I explain. This insight was crucial 
              for our 
              <a href="/blog/ai-transforming-web-design" className="text-sage-green hover:text-sage-green-light ml-1">
                AI-driven design approach
              </a>.
            </p>
            
            <AIDesignSystemSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Vaibhav adds, &quot;From my experience at Microsoft, I knew that enterprise clients 
              needed designs that weren&apos;t just visually appealing, but also highly functional. 
              Our AI system bridges that gap by understanding both aesthetics and usability.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Glassmorphism: Beyond Aesthetics</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;Glassmorphism isn&apos;t just about visual appeal,&quot; I explain. &quot;Our neural networks 
              have learned that transparent elements can create cognitive layers in the interface, 
              helping users understand information hierarchy intuitively.&quot;
            </p>
            
            <GlassmorphismSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              This understanding powers our 
              <a href="/blog/dynamic-evolution-websites" className="text-sage-green hover:text-sage-green-light ml-1">
                dynamic evolution system
              </a>, 
              which automatically adjusts transparency and blur levels based on user interaction 
              patterns and content complexity.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Neumorphism: The Neural Approach</h2>
            <NeumorphismSVG />
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Adaptive Shadows</h3>
                <p className="text-white/90 leading-relaxed">
                  &quot;Our AI doesn&apos;t just apply neumorphic effects blindly,&quot; I share. &quot;It analyzes 
                  user interaction patterns to determine where soft shadows and subtle gradients 
                  can enhance the user experience. This integrates with our 
                  <a href="/blog/conversion-insights" className="text-sage-green hover:text-sage-green-light ml-1">
                    conversion optimization system
                  </a> 
                  to ensure design choices drive results.&quot;
                </p>
              </div>

              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Intelligent Contrast</h3>
                <p className="text-white/90 leading-relaxed">
                  Vaibhav notes, &quot;Enterprise accessibility requirements taught me the importance 
                  of contrast. Our system automatically adjusts neumorphic effects to maintain 
                  WCAG compliance while preserving the design aesthetic.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Future of AI Design</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Emotional Design:</strong>
                  <span className="text-white/90 ml-2">
                    Neural networks that understand and respond to user emotions
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Context Awareness:</strong>
                  <span className="text-white/90 ml-2">
                    Designs that adapt to user context and device capabilities
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Brand Intelligence:</strong>
                  <span className="text-white/90 ml-2">
                    AI that maintains brand consistency across design trends
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Performance Optimization:</strong>
                  <span className="text-white/90 ml-2">
                    Neural networks that balance aesthetics with load times
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Experience AI Design</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              See how our neural design system can transform your website with modern design 
              trends while maintaining optimal user experience. With our 
              <a href="/blog/token-based-pricing" className="text-sage-green hover:text-sage-green-light ml-1">
                flexible pricing model
              </a>, 
              advanced AI design is accessible to businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/get-started" 
                className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold text-center"
              >
                Start Designing
              </a>
              <a 
                href="/features" 
                className="inline-block bg-transparent text-sage-green px-8 py-4 rounded-lg border border-sage-green hover:bg-sage-green/10 transition-all duration-300 font-semibold text-center"
              >
                View Examples
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
