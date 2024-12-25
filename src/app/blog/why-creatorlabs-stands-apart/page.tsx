'use client';

import BlogPostLayout from '../../../components/blog/BlogPostLayout';

export default function BlogPost() {
  return (
    <BlogPostLayout>
      <article className="max-w-4xl">
        <header className="text-center mb-16">
          <time className="text-sage-green text-sm font-medium">December 18, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            Why CreatorLabs Stands Apart: Our Vision for AI-Powered Web Development
          </h1>
          <p className="text-xl text-white/80 mb-8">
            How our unique approach and enterprise experience sets us apart in the AI website creation space
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-white/80">
              By <span className="text-sage-green">Vaibhav Verma</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-invert mx-auto">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20 shadow-lg">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">Enterprise DNA</h2>
            <p className="text-white/90 leading-relaxed">
              &quot;My experience as CTO at Salesken gave me unique insights into what enterprises 
              really need,&quot; I share. &quot;We built AI systems that handled massive scale and 
              complexity, but we also saw how these powerful capabilities were out of reach for 
              most businesses. That&apos;s what inspired CreatorLabs - bringing enterprise-grade 
              AI to everyone.&quot;
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <div className="bg-white/5 p-8 rounded-xl">
              <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Our Key Differentiators</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                  <div>
                    <strong className="text-sage-green">Enterprise-Grade AI</strong>
                    <p className="text-white/90">
                      We&apos;ve taken the sophisticated AI systems we built for enterprise 
                      clients at Salesken and made them accessible to businesses of all sizes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                  <div>
                    <strong className="text-sage-green">Deep Learning Systems</strong>
                    <p className="text-white/90">
                      Our AI doesn&apos;t just follow rules - it learns and adapts from every 
                      interaction, continuously improving its understanding of your needs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                  <div>
                    <strong className="text-sage-green">Token-Based Flexibility</strong>
                    <p className="text-white/90">
                      Our innovative token system ensures you only pay for what you use, 
                      while maintaining access to enterprise-level capabilities.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-8 rounded-xl">
              <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Technical Excellence</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                  <div>
                    <strong className="text-sage-green">Advanced Architecture</strong>
                    <p className="text-white/90">
                      Our experience building scalable systems at Salesken taught us how to 
                      create robust, efficient platforms that can handle any scale of operation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                  <div>
                    <strong className="text-sage-green">Continuous Evolution</strong>
                    <p className="text-white/90">
                      Every website we create is a living system that grows and improves 
                      automatically based on real user interactions and business metrics.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-8 rounded-xl">
              <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Our Vision</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                  <div>
                    <strong className="text-sage-green">Democratizing AI</strong>
                    <p className="text-white/90">
                      We believe every business should have access to the same powerful AI 
                      capabilities that were once limited to tech giants.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                  <div>
                    <strong className="text-sage-green">Continuous Innovation</strong>
                    <p className="text-white/90">
                      We&apos;re committed to pushing the boundaries of what&apos;s possible with AI 
                      in web development, just as we did in enterprise systems.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Join the Revolution</h3>
            <p className="text-white/90 leading-relaxed">
              &quot;At Salesken, we saw firsthand how AI could transform businesses,&quot; I conclude. 
              &quot;With CreatorLabs, we&apos;re not just building websites - we&apos;re creating the 
              future of web development, where sophisticated AI is accessible to everyone.&quot;
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="/get-started" 
                className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold text-center"
              >
                Start Your Journey
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
      </article>
    </BlogPostLayout>
  );
}
