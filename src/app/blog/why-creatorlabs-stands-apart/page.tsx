'use client';

import Image from 'next/image';

const CompetitiveAnalysisSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Traditional Website Builders */}
    <g className="opacity-70">
      <rect x="50" y="50" width="200" height="300" rx="8" className="stroke-white/40" strokeWidth="2" />
      <text x="150" y="80" className="fill-white text-lg font-medium" textAnchor="middle">Traditional Builders</text>
      
      <circle cx="150" cy="140" r="15" className="fill-white/20" />
      <text x="150" y="170" className="fill-white/60 text-sm" textAnchor="middle">Templates</text>
      
      <circle cx="150" cy="220" r="15" className="fill-white/20" />
      <text x="150" y="250" className="fill-white/60 text-sm" textAnchor="middle">Manual Updates</text>
      
      <circle cx="150" cy="300" r="15" className="fill-white/20" />
      <text x="150" y="330" className="fill-white/60 text-sm" textAnchor="middle">Basic Analytics</text>
    </g>

    {/* AI Website Tools */}
    <g className="opacity-70">
      <rect x="300" y="50" width="200" height="300" rx="8" className="stroke-white/40" strokeWidth="2" />
      <text x="400" y="80" className="fill-white text-lg font-medium" textAnchor="middle">AI Tools</text>
      
      <circle cx="400" cy="140" r="15" className="fill-white/20" />
      <text x="400" y="170" className="fill-white/60 text-sm" textAnchor="middle">Generated Content</text>
      
      <circle cx="400" cy="220" r="15" className="fill-white/20" />
      <text x="400" y="250" className="fill-white/60 text-sm" textAnchor="middle">Static AI</text>
      
      <circle cx="400" cy="300" r="15" className="fill-white/20" />
      <text x="400" y="330" className="fill-white/60 text-sm" textAnchor="middle">Limited Learning</text>
    </g>

    {/* CreatorLabs */}
    <g className="opacity-100">
      <rect x="550" y="50" width="200" height="300" rx="8" className="stroke-sage-green" strokeWidth="2" />
      <text x="650" y="80" className="fill-sage-green text-lg font-medium" textAnchor="middle">CreatorLabs</text>
      
      <circle cx="650" cy="140" r="15" className="fill-sage-green/20" />
      <text x="650" y="170" className="fill-white text-sm" textAnchor="middle">Dynamic Evolution</text>
      
      <circle cx="650" cy="220" r="15" className="fill-sage-green/20" />
      <text x="650" y="250" className="fill-white text-sm" textAnchor="middle">Real-time AI</text>
      
      <circle cx="650" cy="300" r="15" className="fill-sage-green/20" />
      <text x="650" y="330" className="fill-white text-sm" textAnchor="middle">Continuous Learning</text>
    </g>
  </svg>
);

const FeatureComparisonSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Feature Grid */}
    <g>
      {/* Headers */}
      <text x="200" y="50" className="fill-white/60 text-sm" textAnchor="middle">Others</text>
      <text x="600" y="50" className="fill-sage-green text-sm" textAnchor="middle">CreatorLabs</text>

      {/* Row 1: AI Integration */}
      <text x="100" y="100" className="fill-white text-sm" textAnchor="start">AI Integration</text>
      <rect x="150" y="80" width="100" height="30" rx="4" className="fill-white/10 stroke-white/20" />
      <text x="200" y="100" className="fill-white/60 text-sm" textAnchor="middle">Basic</text>
      <rect x="550" y="80" width="100" height="30" rx="4" className="fill-sage-green/20 stroke-sage-green" />
      <text x="600" y="100" className="fill-white text-sm" textAnchor="middle">Advanced</text>

      {/* Row 2: Evolution */}
      <text x="100" y="150" className="fill-white text-sm" textAnchor="start">Evolution</text>
      <rect x="150" y="130" width="100" height="30" rx="4" className="fill-white/10 stroke-white/20" />
      <text x="200" y="150" className="fill-white/60 text-sm" textAnchor="middle">Static</text>
      <rect x="550" y="130" width="100" height="30" rx="4" className="fill-sage-green/20 stroke-sage-green" />
      <text x="600" y="150" className="fill-white text-sm" textAnchor="middle">Dynamic</text>

      {/* Row 3: Analytics */}
      <text x="100" y="200" className="fill-white text-sm" textAnchor="start">Analytics</text>
      <rect x="150" y="180" width="100" height="30" rx="4" className="fill-white/10 stroke-white/20" />
      <text x="200" y="200" className="fill-white/60 text-sm" textAnchor="middle">Basic</text>
      <rect x="550" y="180" width="100" height="30" rx="4" className="fill-sage-green/20 stroke-sage-green" />
      <text x="600" y="200" className="fill-white text-sm" textAnchor="middle">Enterprise</text>

      {/* Row 4: Learning */}
      <text x="100" y="250" className="fill-white text-sm" textAnchor="start">Learning</text>
      <rect x="150" y="230" width="100" height="30" rx="4" className="fill-white/10 stroke-white/20" />
      <text x="200" y="250" className="fill-white/60 text-sm" textAnchor="middle">Limited</text>
      <rect x="550" y="230" width="100" height="30" rx="4" className="fill-sage-green/20 stroke-sage-green" />
      <text x="600" y="250" className="fill-white text-sm" textAnchor="middle">Continuous</text>
    </g>
  </svg>
);

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-dark-bg text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <time className="text-sage-green text-sm font-medium">December 22, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            Why CreatorLabs Stands Apart: A Deep Dive into Our Unique Approach
          </h1>
          <p className="text-xl text-white/80">
            How our enterprise experience and AI innovation create a fundamentally different website creation platform
          </p>
        </header>

        <div className="prose prose-lg prose-invert mx-auto space-y-12">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20 shadow-lg">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Current Landscape</h2>
            <p className="text-white/90 leading-relaxed">
              "During my time at Microsoft," I (Vaibhav) explain, "I saw countless enterprises 
              struggling with a fundamental problem: existing website solutions were either too 
              simple or too complex, with nothing in between. Traditional builders offered ease 
              of use but lacked sophistication, while enterprise solutions required extensive 
              technical expertise."
            </p>
            
            <CompetitiveAnalysisSVG />
            
            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, "Even newer AI-powered tools miss the mark. They focus on generating 
              content or code but fail to understand that a website is a living entity that 
              needs to evolve with its users. This insight from my research in adaptive systems 
              became a cornerstone of CreatorLabs."
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Feature-by-Feature Comparison</h2>
            <FeatureComparisonSVG />
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Dynamic Evolution vs. Static Updates</h3>
                <p className="text-white/90 leading-relaxed">
                  "Most platforms treat a website like a product," Sahil notes. "We treat it 
                  like an organism. While others offer periodic updates, our AI continuously 
                  learns from user interactions, making real-time optimizations that keep your 
                  site perpetually optimized."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">Enterprise-Grade Analytics Made Simple</h3>
                <p className="text-white/90 leading-relaxed">
                  "At Microsoft, I saw how powerful enterprise analytics could be," I share. 
                  "But they were always too complex for most users. We've packaged that 
                  enterprise power into an AI interface that makes it accessible to everyone."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-montserrat font-bold text-sage-green mb-3">True AI Integration</h3>
                <p className="text-white/90 leading-relaxed">
                  "While others use AI as a feature, we've made it the foundation," Sahil 
                  explains. "Every aspect of your website, from design to content to 
                  optimization, is powered by our adaptive AI system. It's not just about 
                  generating content – it's about understanding and evolving with your business."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sage-green/10 to-transparent rounded-xl p-8 border border-sage-green/20">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Real Results, Not Just Features</h2>
            <p className="text-white/90 leading-relaxed">
              "During our beta testing," I share, "we saw something remarkable. While other 
              platforms' sites typically plateau in performance after launch, our sites showed 
              continuous improvement. One e-commerce client saw conversion rates increase by 
              40% over three months through AI-driven optimizations alone."
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              Sahil adds, "What's even more exciting is how the system learns across our 
              entire platform. When one site discovers an optimization that works, our AI 
              can adapt that learning to benefit similar sites across our network, while 
              still maintaining each site's unique identity."
            </p>
          </div>

          <div className="bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Experience the Difference</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              We built CreatorLabs to be the platform we wished existed during our years in 
              enterprise software and AI research. It's not just another website builder – 
              it's a partnership between human creativity and AI intelligence, continuously 
              working to make your digital presence more effective.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/get-started" 
                className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold text-center"
              >
                Start Your Evolution
              </a>
              <a 
                href="/features" 
                className="inline-block bg-transparent text-sage-green px-8 py-4 rounded-lg border border-sage-green hover:bg-sage-green/10 transition-all duration-300 font-semibold text-center"
              >
                Compare Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
