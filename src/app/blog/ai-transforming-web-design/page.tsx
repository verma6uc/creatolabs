'use client';

import Image from 'next/image';

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
    <text x="100" y="105" className="fill-white text-sm font-medium" textAnchor="middle">Input</text>
    
    <path d="M150 100 L250 100" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4" />
    
    <circle cx="300" cy="100" r="50" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="300" y="105" className="fill-white text-sm font-medium" textAnchor="middle">AI Analysis</text>
    
    <path d="M350 100 L450 100" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4" />
    
    <circle cx="500" cy="100" r="50" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="500" y="105" className="fill-white text-sm font-medium" textAnchor="middle">Generation</text>
    
    <path d="M550 100 L650 100" className="stroke-sage-green" strokeWidth="2" strokeDasharray="4 4" />
    
    <circle cx="700" cy="100" r="50" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="700" y="105" className="fill-white text-sm font-medium" textAnchor="middle">Optimization</text>
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
          <p className="text-xl text-white/80">
            A deep dive into how artificial intelligence is revolutionizing website creation and maintenance.
          </p>
        </header>

        <div className="prose prose-lg prose-invert mx-auto">
          <h2>The Evolution of Web Design</h2>
          <p>
            Web design has come a long way from the static HTML pages of the 1990s. Today, we stand at 
            the cusp of a new revolution, where artificial intelligence is fundamentally changing how 
            websites are created, maintained, and optimized.
          </p>

          <ComparisonSVG />

          <h2>The AI-Powered Design Process</h2>
          <p>
            At CreatorLabs, we've reimagined the entire website creation process. Our AI-driven approach 
            transforms what was once a lengthy, manual process into an intelligent, automated system that 
            learns and adapts to your needs.
          </p>

          <AIProcessSVG />

          <h2>Key Benefits of AI-Driven Web Design</h2>
          <ul>
            <li>
              <strong>Speed and Efficiency:</strong> What once took weeks can now be accomplished in minutes
            </li>
            <li>
              <strong>Intelligent Optimization:</strong> Continuous improvement based on real user data
            </li>
            <li>
              <strong>Competitive Edge:</strong> Automated competitor analysis and adaptation
            </li>
            <li>
              <strong>Cost-Effective:</strong> Reduced need for multiple specialized tools and services
            </li>
          </ul>

          <h2>Real-Time Evolution</h2>
          <p>
            Unlike traditional websites that remain static until manually updated, AI-powered sites 
            continuously evolve. They analyze user behavior, monitor competitors, and automatically 
            suggest and implement improvements to keep your site performing at its best.
          </p>

          <h2>The Future of Web Design</h2>
          <p>
            As AI technology continues to advance, we're just scratching the surface of what's possible. 
            From voice interfaces to AR/VR integration, the future of web design will be increasingly 
            automated, intelligent, and responsive to user needs.
          </p>

          <div className="bg-sage-green/10 border border-sage-green rounded-lg p-6 my-8">
            <h3 className="text-sage-green mb-4">Ready to Experience the Future?</h3>
            <p className="mb-4">
              Try CreatorLabs today and see how AI can transform your web presence. Our intelligent 
              system will guide you through the entire process, from initial concept to launch and beyond.
            </p>
            <a 
              href="/get-started" 
              className="inline-block bg-sage-green text-white px-6 py-3 rounded-lg hover:bg-sage-green/90 transition-colors"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
