'use client';

const EmergingTechSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central AI Hub */}
    <circle cx="400" cy="150" r="60" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
      <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" />
    </circle>
    <text x="400" y="140" className="fill-white text-sm" textAnchor="middle">Neural</text>
    <text x="400" y="160" className="fill-white text-sm" textAnchor="middle">Core</text>

    {/* AR/VR */}
    <g>
      <path d="M200 80 L340 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="200" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="75" className="fill-white text-xs" textAnchor="middle">AR/VR</text>
      <text x="200" y="90" className="fill-white text-xs" textAnchor="middle">Integration</text>
    </g>

    {/* Voice UI */}
    <g>
      <path d="M200 220 L340 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="200" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="215" className="fill-white text-xs" textAnchor="middle">Voice</text>
      <text x="200" y="230" className="fill-white text-xs" textAnchor="middle">Interface</text>
    </g>

    {/* Outputs */}
    <g>
      {/* Personalization */}
      <path d="M460 150 L600 80" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="75" className="fill-white text-xs" textAnchor="middle">Dynamic</text>
      <text x="600" y="90" className="fill-white text-xs" textAnchor="middle">Personalization</text>

      {/* Interaction */}
      <path d="M460 150 L600 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="150" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="145" className="fill-white text-xs" textAnchor="middle">Natural</text>
      <text x="600" y="160" className="fill-white text-xs" textAnchor="middle">Interaction</text>

      {/* Learning */}
      <path d="M460 150 L600 220" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="215" className="fill-white text-xs" textAnchor="middle">Continuous</text>
      <text x="600" y="230" className="fill-white text-xs" textAnchor="middle">Learning</text>
    </g>

    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" className="fill-sage-green" />
      </marker>
    </defs>
  </svg>
);

const InteractionFlowSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* User Input */}
    <g>
      <rect x="50" y="50" width="200" height="200" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="150" y="80" className="fill-white text-sm font-medium" textAnchor="middle">User Input</text>
      
      <circle cx="150" cy="120" r="15" className="fill-sage-green/20" />
      <text x="150" y="150" className="fill-white text-xs" textAnchor="middle">Voice</text>
      
      <circle cx="150" cy="180" r="15" className="fill-sage-green/20" />
      <text x="150" y="210" className="fill-white text-xs" textAnchor="middle">Gesture</text>
    </g>

    {/* AI Processing */}
    <g>
      <rect x="300" y="50" width="200" height="200" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="400" y="80" className="fill-white text-sm font-medium" textAnchor="middle">Neural Processing</text>
      
      <circle cx="400" cy="120" r="15" className="fill-sage-green/20" />
      <text x="400" y="150" className="fill-white text-xs" textAnchor="middle">Intent</text>
      
      <circle cx="400" cy="180" r="15" className="fill-sage-green/20" />
      <text x="400" y="210" className="fill-white text-xs" textAnchor="middle">Context</text>
    </g>

    {/* Response */}
    <g>
      <rect x="550" y="50" width="200" height="200" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="650" y="80" className="fill-white text-sm font-medium" textAnchor="middle">Response</text>
      
      <circle cx="650" cy="120" r="15" className="fill-sage-green/20" />
      <text x="650" y="150" className="fill-white text-xs" textAnchor="middle">Adaptive UI</text>
      
      <circle cx="650" cy="180" r="15" className="fill-sage-green/20" />
      <text x="650" y="210" className="fill-white text-xs" textAnchor="middle">Feedback</text>
    </g>

    {/* Flow Lines */}
    <path d="M250 150 L300 150" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" values="8;0;8" dur="2s" repeatCount="indefinite" />
    </path>
    <path d="M500 150 L550 150" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" values="8;0;8" dur="2s" repeatCount="indefinite" />
    </path>
  </svg>
);

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-dark-bg text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <time className="text-sage-green text-sm font-medium">December 10, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            The Next Frontier: AI, AR, and the Future of Interactive Web Experiences
          </h1>
          <p className="text-xl text-white/80 mb-8">
            How emerging technologies are reshaping the way we interact with websites
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
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Beyond Traditional Interfaces</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;My research in adaptive systems at MIT,&quot; I (Sahil) explain, &quot;revealed how 
              AI could fundamentally change human-computer interaction. Our 
              <a href="/blog/dynamic-evolution-websites" className="text-sage-green hover:text-sage-green-light ml-1">
                neural evolution system
              </a> 
              is just the beginning of this transformation.&quot;
            </p>
            
            <EmergingTechSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Vaibhav adds, &quot;The enterprise implications are significant. Our 
              <a href="/blog/conversion-insights" className="text-sage-green hover:text-sage-green-light ml-1">
                analytics show
              </a> 
              that businesses integrating these emerging technologies see up to 3x higher 
              engagement rates.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Natural Interaction Patterns</h2>
            <InteractionFlowSVG />
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Voice-First Design</h3>
                <p className="text-white/90 leading-relaxed">
                  &quot;Our 
                  <a href="/blog/nlp-website-copy" className="text-sage-green hover:text-sage-green-light ml-1">
                    NLP system
                  </a> 
                  already understands context and intent,&quot; I explain. &quot;We&apos;re extending this 
                  to voice interactions, creating truly conversational web experiences.&quot;
                </p>
              </div>

              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Gesture Recognition</h3>
                <p className="text-white/90 leading-relaxed">
                  Vaibhav notes, &quot;The integration with AR opens new possibilities. Our 
                  <a href="/blog/web-design-trends-2024" className="text-sage-green hover:text-sage-green-light ml-1">
                    latest design patterns
                  </a> 
                  support natural gestures, making websites feel more like physical spaces.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The AI Advantage</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Contextual Understanding:</strong>
                  <span className="text-white/90 ml-2">
                    Neural networks that adapt to user behavior and preferences
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Multimodal Integration:</strong>
                  <span className="text-white/90 ml-2">
                    Seamless blending of voice, gesture, and traditional inputs
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Predictive Interaction:</strong>
                  <span className="text-white/90 ml-2">
                    AI that anticipates user needs and prepares responses
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                <div>
                  <strong className="text-sage-green">Adaptive Interfaces:</strong>
                  <span className="text-white/90 ml-2">
                    UIs that evolve based on interaction patterns
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Enterprise Adoption</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;The key to enterprise adoption,&quot; Vaibhav explains, &quot;is our 
              <a href="/blog/website-launch-checklist" className="text-sage-green hover:text-sage-green-light ml-1">
                phased implementation approach
              </a>. 
              Companies can start with traditional interfaces and gradually introduce new 
              interaction patterns.&quot;
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              I add, &quot;Our 
              <a href="/blog/token-based-pricing" className="text-sage-green hover:text-sage-green-light ml-1">
                token-based system
              </a> 
              makes this especially flexible. You can experiment with emerging technologies 
              without committing to a full transformation upfront.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Join the Future</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              The future of web interaction is here. With our AI-powered platform, you can 
              start building next-generation web experiences that adapt and evolve with your 
              users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/get-started" 
                className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold text-center"
              >
                Start Building
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
