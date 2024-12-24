'use client';

const EvolutionCycleSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Website Icon */}
    <circle cx="400" cy="200" r="80" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
    <text x="400" y="205" className="fill-white text-lg font-medium" textAnchor="middle">Your Website</text>

    {/* Evolution Cycles */}
    <g className="animate-spin-slow" style={{ transformOrigin: '400px 200px', animationDuration: '20s' }}>
      {/* User Behavior Analysis */}
      <circle cx="400" cy="50" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="400" y="55" className="fill-white text-sm" textAnchor="middle">User Data</text>
      <path d="M400 90 L400 120" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* AI Analysis */}
      <circle cx="600" cy="200" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="600" y="205" className="fill-white text-sm" textAnchor="middle">AI Analysis</text>
      <path d="M560 200 L480 200" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Optimization */}
      <circle cx="400" cy="350" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="400" y="355" className="fill-white text-sm" textAnchor="middle">Optimize</text>
      <path d="M400 310 L400 280" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Competitor Analysis */}
      <circle cx="200" cy="200" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="200" y="205" className="fill-white text-sm" textAnchor="middle">Competitors</text>
      <path d="M240 200 L320 200" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrowhead)" />
    </g>

    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" className="fill-sage-green" />
      </marker>
    </defs>
  </svg>
);

const MetricsDashboardSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dashboard Frame */}
    <rect x="50" y="50" width="700" height="200" rx="8" className="stroke-sage-green" strokeWidth="2" />
    
    {/* Metrics Sections */}
    <g className="translate-x-[100] translate-y-[75]">
      {/* Engagement Graph */}
      <path d="M100 150 L200 100 L300 120 L400 80 L500 60" 
        className="stroke-sage-green" strokeWidth="2" fill="none" />
      <text x="300" y="180" className="fill-white text-sm" textAnchor="middle">User Engagement</text>

      {/* Scroll Depth Indicator */}
      <rect x="550" y="80" width="30" height="100" rx="4" className="stroke-white/40" strokeWidth="2" fill="none" />
      <rect x="550" y="140" width="30" height="40" className="fill-sage-green/40" />
      <text x="565" y="180" className="fill-white text-sm" textAnchor="middle">Scroll</text>

      {/* Click Heatmap */}
      <circle cx="150" cy="100" r="20" className="fill-sage-green/30" />
      <circle cx="350" cy="90" r="15" className="fill-sage-green/20" />
      <circle cx="450" cy="70" r="25" className="fill-sage-green/40" />
    </g>
  </svg>
);

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-dark-bg text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <time className="text-sage-green text-sm font-medium">October 8, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            The Power of Dynamic Evolution: Why Static Websites Are a Thing of the Past
          </h1>
          <p className="text-xl text-white/80">
            A personal reflection on how AI-driven evolution is reshaping the web landscape
          </p>
        </header>

        <div className="prose prose-lg prose-invert mx-auto space-y-12">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20 shadow-lg">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Enterprise Dilemma</h2>
            <p className="text-white/90 leading-relaxed">
            &quot;One of my most frustrating moments at Microsoft,&quot; I (Vaibhav) recall, &quot;was watching a 
            major enterprise client struggle with their website for months after launch. Despite all 
            our careful planning and user research, real-world usage revealed issues we couldn&apos;t have 
            predicted. The traditional approach of launch-and-wait just wasn&apos;t cutting it anymore.&quot;
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
            This experience resonated deeply with Sahil, who had been researching adaptive AI systems. 
            &quot;In the AI world,&quot; he explains, &quot;we&apos;ve long understood that static solutions can&apos;t keep up 
            with dynamic problems. Why should websites be any different?&quot;
            </p>
          </div>

          <div className="bg-dark-bg/50 rounded-xl p-8 border border-white/10 shadow-xl">
            <EvolutionCycleSVG />
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Birth of Dynamic Evolution</h2>
            <p className="text-white/90 leading-relaxed">
            Drawing from my enterprise experience and Sahil&apos;s AI expertise, we developed a radical 
            new approach. Instead of treating websites as static entities that need manual updates, 
            we envisioned them as living systems that could learn and adapt automatically.
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
            &quot;Think of it like a digital organism,&quot; Sahil often says. &quot;Just as living things evolve 
            to better suit their environment, your website should continuously adapt to better serve 
            your users.&quot;
            </p>
          </div>

          <div className="bg-dark-bg/50 rounded-xl p-8 border border-white/10 shadow-xl">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Real-Time Intelligence in Action</h2>
            <MetricsDashboardSVG />
            <p className="text-white/90 leading-relaxed mt-6">
            During my time managing large-scale web applications, I learned that the most valuable 
            insights often come too late. &quot;By the time you notice a problem in your analytics 
            dashboard,&quot; I explain to clients, &quot;you&apos;ve already missed countless opportunities.&quot;
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
            That&apos;s why we built CreatorLabs with real-time adaptation at its core. Our system 
            doesn&apos;t just collect data – it acts on it immediately. When users struggle to find 
            your contact form, the AI doesn&apos;t just log the problem; it suggests and can implement 
            layout changes right away.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Learning from Enterprise Patterns</h2>
            <p className="text-white/90 leading-relaxed">
            &quot;At Microsoft, I saw how enterprise-level A/B testing and gradual rollouts could 
            dramatically improve user experience,&quot; I share. &quot;But these sophisticated techniques 
            were usually reserved for tech giants with massive resources. We wanted to democratize 
            these capabilities.&quot;
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
            Sahil adds, &quot;By combining Vaibhav&apos;s enterprise patterns with advanced AI, we&apos;ve created 
            a system that brings enterprise-grade evolution to everyone. Your website becomes a 
            self-optimizing system that&apos;s always learning, always improving.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Future is Adaptive</h2>
            <p className="text-white/90 leading-relaxed">
            Looking back at our journey from enterprise software and AI research to CreatorLabs, 
            one thing becomes clear: the future belongs to websites that can adapt. As Sahil puts 
            it, &quot;In a world where user needs and market conditions change daily, static websites 
            are like trying to win a race while standing still.&quot;
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Ready to Evolve?</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              We&apos;ve taken the best practices from enterprise systems and cutting-edge AI to create 
              something new: websites that evolve with your business. Join us in shaping the future 
              of the web.
            </p>
            <a 
              href="/get-started" 
              className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold"
            >
              Start Your Evolution
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
