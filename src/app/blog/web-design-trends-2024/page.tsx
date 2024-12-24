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
      <text x="250" y="180" className="fill-white text-lg font-medium" textAnchor="middle">Card 1</text>
      <line x1="180" y1="220" x2="320" y2="220" className="stroke-white/40" strokeWidth="1" />
      <line x1="180" y1="250" x2="320" y2="250" className="stroke-white/40" strokeWidth="1" />
    </g>

    <g className="glass-effect">
      <rect x="450" y="100" width="200" height="200" rx="20" 
        className="fill-white/10 stroke-white/20" strokeWidth="1" />
      <text x="550" y="180" className="fill-white text-lg font-medium" textAnchor="middle">Card 2</text>
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
      <text x="200" y="160" className="fill-gray-600 text-lg font-medium" textAnchor="middle">Pressed</text>

      {/* Button 2 - Raised */}
      <rect x="500" y="100" width="200" height="100" rx="20" fill="#E0E5EC"
        className="shadow-[-8px_-8px_12px_rgba(255,255,255,0.8),8px_8px_12px_rgba(0,0,0,0.1)]" />
      <text x="600" y="160" className="fill-gray-600 text-lg font-medium" textAnchor="middle">Raised</text>
    </g>
  </svg>
);

const AIDesignSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* AI Design Process */}
    <g>
      {/* User Input */}
      <circle cx="150" cy="150" r="50" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
        <animate attributeName="r" values="50;55;50" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="150" y="155" className="fill-white text-sm" textAnchor="middle">User Input</text>

      {/* AI Processing */}
      <path d="M200 150 L300 150" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="8;0;8" dur="2s" repeatCount="indefinite" />
      </path>

      {/* AI Analysis */}
      <circle cx="400" cy="150" r="50" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="400" y="155" className="fill-white text-sm" textAnchor="middle">AI Analysis</text>

      {/* Design Generation */}
      <path d="M450 150 L550 150" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="8;0;8" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Final Design */}
      <circle cx="650" cy="150" r="50" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
        <animate attributeName="r" values="50;55;50" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="650" y="155" className="fill-white text-sm" textAnchor="middle">Final Design</text>
    </g>
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
          <p className="text-xl text-white/80">
            How AI is revolutionizing modern design aesthetics
          </p>
        </header>

        <div className="prose prose-lg prose-invert mx-auto space-y-12">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20 shadow-lg">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Rise of Glassmorphism</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;When we were designing CreatorLabs,&quot; I (Vaibhav) explain, &quot;we wanted to create 
              an interface that felt both modern and intuitive. Glassmorphism, with its subtle 
              transparency and blur effects, perfectly captured that balance between sophistication 
              and accessibility.&quot;
            </p>
            
            <GlassmorphismSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, &quot;What&apos;s fascinating is how our AI has learned to implement these 
              effects contextually. It understands when transparency enhances usability and 
              when it might detract from it. It&apos;s not just about following trends – it&apos;s 
              about applying them intelligently.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Neumorphism: The New Dimension</h2>
            <NeumorphismSVG />
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Soft UI Evolution</h3>
                <p className="text-white/90 leading-relaxed">
                  &quot;During my time at Microsoft,&quot; I share, &quot;we experimented extensively with 
                  different UI paradigms. Neumorphism emerged as a fascinating middle ground 
                  between flat design and skeuomorphism. It provides depth without sacrificing 
                  simplicity.&quot;
                </p>
              </div>

              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">AI-Driven Implementation</h3>
                <p className="text-white/90 leading-relaxed">
                  &quot;Our AI doesn&apos;t just copy these trends,&quot; Sahil explains. &quot;It analyzes user 
                  interaction patterns to determine where soft shadows and subtle gradients 
                  can enhance the user experience. It&apos;s about creating interfaces that feel 
                  natural and responsive.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">AI-Enhanced Design Process</h2>
            <AIDesignSVG />
            <p className="text-white/90 leading-relaxed">
              &quot;What excites me most,&quot; I share, &quot;is how AI is transforming the design process 
              itself. It&apos;s not replacing human creativity – it&apos;s amplifying it. Our system 
              can generate hundreds of design variations while maintaining brand consistency 
              and usability standards.&quot;
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              Sahil notes, &quot;The real innovation is in how our AI learns from user interactions. 
              Every click, every scroll helps it understand what works and what doesn&apos;t. This 
              continuous learning ensures our designs stay fresh and effective.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Experience Modern Design</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              See how our AI can help you implement these modern design trends in your website. 
              From glassmorphism to neumorphism, we&apos;ll help you create a unique and engaging 
              user experience.
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
