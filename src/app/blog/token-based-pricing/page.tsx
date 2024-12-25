'use client';

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-dark-bg text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <time className="text-sage-green text-sm font-medium">December 17, 2024</time>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mt-4 mb-6">
            Token-Based Pricing: A New Era in Web Development Economics
          </h1>
          <p className="text-xl text-white/80 mb-8">
            How our innovative token system makes enterprise-grade AI accessible to businesses 
            of all sizes
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-white/80">
              By <span className="text-sage-green">Vaibhav Verma</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-invert mx-auto">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20 shadow-lg">
            <h2 className="text-3xl font-montserrat font-bold text-sage-green mb-6">The Evolution of Pricing Models</h2>
            <p className="text-white/90 leading-relaxed mt-4">
              As the former CTO at Salesken, I (Vaibhav) witnessed firsthand how traditional 
              subscription models failed to align with modern business needs. &quot;In enterprise 
              software, we saw that fixed pricing often meant companies either overpaid for 
              unused capacity or had to limit their usage artificially. This insight led us 
              to develop our innovative token-based system.&quot;
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <div className="bg-white/5 p-8 rounded-xl">
              <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Token System Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                  <div>
                    <strong className="text-sage-green">Flexible Resource Allocation</strong>
                    <p className="text-white/90">
                      Our token system allows businesses to allocate resources dynamically 
                      across different features and projects, ensuring optimal utilization 
                      and cost-effectiveness.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                  <div>
                    <strong className="text-sage-green">Scalable Pricing</strong>
                    <p className="text-white/90">
                      Drawing from our experience with enterprise-scale systems at Salesken, 
                      we&apos;ve created a pricing model that scales seamlessly with your needs, 
                      from startup to enterprise level.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                  <div>
                    <strong className="text-sage-green">Value-Based Consumption</strong>
                    <p className="text-white/90">
                      Pay only for the AI capabilities you use, with our system automatically 
                      optimizing token usage to maximize value.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-8 rounded-xl">
              <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Enterprise Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                  <div>
                    <strong className="text-sage-green">Advanced Analytics</strong>
                    <p className="text-white/90">
                      Leveraging our experience in building enterprise analytics at Salesken, 
                      we provide detailed insights into token usage patterns and ROI metrics.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                  <div>
                    <strong className="text-sage-green">Resource Optimization</strong>
                    <p className="text-white/90">
                      Our AI automatically optimizes token usage across your organization, 
                      ensuring maximum efficiency and value from your investment.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-8 rounded-xl">
              <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Future of Pricing</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                  <div>
                    <strong className="text-sage-green">AI-Driven Optimization</strong>
                    <p className="text-white/90">
                      Our neural networks continuously learn from usage patterns to suggest 
                      optimal token allocation strategies and pricing tiers.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                  <div>
                    <strong className="text-sage-green">Dynamic Scaling</strong>
                    <p className="text-white/90">
                      The system automatically adjusts to your growth, providing seamless 
                      scaling without the need for manual plan changes or upgrades.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-sage-green/20 to-sage-green/5 rounded-xl p-8 border border-sage-green/30 shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-4">Democratizing Enterprise AI</h3>
            <p className="text-white/90 leading-relaxed">
              &quot;At Salesken, we saw how powerful AI could transform businesses, but access 
              was often limited by traditional pricing models,&quot; I reflect. &quot;With CreatorLabs&apos; 
              token system, we&apos;re making enterprise-grade AI accessible to everyone while 
              ensuring sustainable growth for both our clients and our platform.&quot;
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="/pricing" 
                className="inline-block bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-sage-green/90 transition-all duration-300 shadow-lg hover:shadow-sage-green/20 hover:translate-y-[-2px] font-semibold text-center"
              >
                View Pricing Plans
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
