'use client';

import Image from 'next/image';

const NLPProcessSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Input Text Flow */}
    <g>
      <rect x="50" y="50" width="150" height="80" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="125" y="90" className="fill-white text-sm" textAnchor="middle">User Input</text>
      <text x="125" y="110" className="fill-white/60 text-xs" textAnchor="middle">Brand Voice & Goals</text>
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
      <text x="350" y="85" className="fill-white text-sm" textAnchor="middle">NLP</text>
      <text x="350" y="100" className="fill-white/60 text-xs" textAnchor="middle">Analysis</text>

      {/* Generation */}
      <path d="M390 90 L490 90" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="8;0;8" dur="2s" repeatCount="indefinite" />
      </path>
      <circle cx="540" cy="90" r="40" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
        <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="540" y="85" className="fill-white text-sm" textAnchor="middle">Content</text>
      <text x="540" y="100" className="fill-white/60 text-xs" textAnchor="middle">Generation</text>

      {/* Refinement */}
      <path d="M580 90 L680 90" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="8;0;8" dur="2s" repeatCount="indefinite" />
      </path>
      <circle cx="730" cy="90" r="40" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
        <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite" />
      </circle>
      <text x="730" y="85" className="fill-white text-sm" textAnchor="middle">Human</text>
      <text x="730" y="100" className="fill-white/60 text-xs" textAnchor="middle">Refinement</text>
    </g>

    {/* Tone Examples */}
    <g>
      <rect x="50" y="200" width="200" height="80" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="150" y="230" className="fill-white text-sm" textAnchor="middle">Professional</text>
      <text x="150" y="250" className="fill-white/60 text-xs italic" textAnchor="middle">"Delivering exceptional results"</text>

      <rect x="300" y="200" width="200" height="80" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="400" y="230" className="fill-white text-sm" textAnchor="middle">Casual & Friendly</text>
      <text x="400" y="250" className="fill-white/60 text-xs italic" textAnchor="middle">"Let's create something amazing"</text>

      <rect x="550" y="200" width="200" height="80" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="650" y="230" className="fill-white text-sm" textAnchor="middle">Technical</text>
      <text x="650" y="250" className="fill-white/60 text-xs italic" textAnchor="middle">"Leveraging cutting-edge tech"</text>
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
          <p className="text-xl text-white/80">
            How AI and human creativity combine to create compelling content
          </p>
        </header>

        <div className="prose prose-lg prose-invert mx-auto space-y-12">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20 shadow-lg">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Content Challenge</h2>
            <p className="text-white/90 leading-relaxed">
              "During my time at Microsoft," I (Vaibhav) share, "one of our biggest 
              challenges was maintaining consistent brand voice across hundreds of pages. 
              Traditional content creation was like trying to conduct an orchestra where 
              every musician was playing from a different sheet."
            </p>
            
            <NLPProcessSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, "That's where NLP comes in. We've trained our AI to understand 
              not just language, but the subtle nuances of tone and brand voice. It's like 
              having a content strategist who never sleeps and learns from every interaction."
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Beyond Basic Generation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Adaptive Tone Mapping</h3>
                <p className="text-white/90 leading-relaxed">
                  "Most AI content generators are one-size-fits-all," I explain. "We've 
                  developed a system that adapts its output based on your brand's unique 
                  voice. Whether you need professional authority or casual friendliness, 
                  the AI maintains consistency while optimizing for engagement."
                </p>
              </div>

              <ContentOptimizationSVG />

              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Human-AI Collaboration</h3>
                <p className="text-white/90 leading-relaxed">
                  "The magic isn't in replacing human creativity," Sahil notes, "but in 
                  enhancing it. Our AI analyzes successful content patterns and suggests 
                  optimizations, while preserving the unique insights and emotional 
                  connections that only humans can create."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Real-Time Optimization</h2>
            <p className="text-white/90 leading-relaxed">
              "One of our early users," I share, "saw their conversion rates jump by 40% 
              after implementing our AI-optimized copy. But what's really exciting is how 
              the system learns and adapts. Every user interaction helps refine the content 
              further."
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              Sahil explains, "We're not just generating content – we're creating a living 
              document that evolves with your audience. The AI continuously analyzes user 
              engagement and suggests refinements, ensuring your message stays both fresh 
              and effective."
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Transform Your Content</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Experience the power of AI-enhanced content creation. From headlines to 
              calls-to-action, our system helps you craft compelling copy that resonates 
              with your audience while maintaining your unique brand voice.
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
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
