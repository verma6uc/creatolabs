'use client';

const ContentCalendarSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Calendar Grid */}
    <g>
      {/* Calendar Header */}
      <rect x="100" y="50" width="600" height="50" rx="8" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2" />
      <text x="400" y="80" className="fill-white text-lg font-medium" textAnchor="middle">AI-Powered Content Calendar</text>

      {/* Calendar Days */}
      <g className="opacity-80">
        {[0, 1, 2, 3, 4].map((row) => (
          [0, 1, 2, 3, 4].map((col) => (
            <>
              <rect 
                x={100 + col * 120} 
                y={110 + row * 35} 
                width="110" 
                height="30" 
                rx="4" 
                className="fill-sage-green/10 stroke-sage-green/30" 
                strokeWidth="1" 
              />
              {row === 0 && col === 1 && (
                <>
                  <rect 
                    x={100 + col * 120} 
                    y={110} 
                    width="110" 
                    height="30" 
                    rx="4" 
                    className="fill-sage-green/30 stroke-sage-green" 
                    strokeWidth="1" 
                  />
                  <text 
                    x={155 + col * 120} 
                    y={130} 
                    className="fill-white text-xs" 
                    textAnchor="middle"
                  >
                    Blog Post
                  </text>
                </>
              )}
              {row === 1 && col === 3 && (
                <>
                  <rect 
                    x={100 + col * 120} 
                    y={145} 
                    width="110" 
                    height="30" 
                    rx="4" 
                    className="fill-sage-green/30 stroke-sage-green" 
                    strokeWidth="1" 
                  />
                  <text 
                    x={155 + col * 120} 
                    y={165} 
                    className="fill-white text-xs" 
                    textAnchor="middle"
                  >
                    Reddit Post
                  </text>
                </>
              )}
            </>
          ))
        ))}
      </g>
    </g>
  </svg>
);

const LinkBuildingSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Hub */}
    <circle cx="400" cy="150" r="60" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
      <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" />
    </circle>
    <text x="400" y="140" className="fill-white text-sm" textAnchor="middle">AI-Driven</text>
    <text x="400" y="160" className="fill-white text-sm" textAnchor="middle">Link Building</text>

    {/* Platforms */}
    <g>
      {/* Reddit */}
      <path d="M200 80 L340 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="200" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="75" className="fill-white text-xs" textAnchor="middle">Reddit</text>
      <text x="200" y="90" className="fill-white text-xs" textAnchor="middle">Communities</text>

      {/* Quora */}
      <path d="M200 220 L340 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="200" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="215" className="fill-white text-xs" textAnchor="middle">Quora</text>
      <text x="200" y="230" className="fill-white text-xs" textAnchor="middle">Q&A</text>

      {/* Analytics */}
      <path d="M460 150 L600 80" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="75" className="fill-white text-xs" textAnchor="middle">Traffic</text>
      <text x="600" y="90" className="fill-white text-xs" textAnchor="middle">Analytics</text>

      {/* Authority */}
      <path d="M460 150 L600 220" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="215" className="fill-white text-xs" textAnchor="middle">Domain</text>
      <text x="600" y="230" className="fill-white text-xs" textAnchor="middle">Authority</text>
    </g>

    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" className="fill-sage-green" />
      </marker>
    </defs>
  </svg>
);

export function ContentMarketingSection() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            AI-Powered Content Marketing
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Automate your content strategy with intelligent scheduling, link building, and 
            performance tracking.
          </p>
        </div>

        <div className="grid gap-16">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-6">
              Smart Content Calendar
            </h3>
            <ContentCalendarSVG />
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-xl font-montserrat font-bold text-sage-green mb-4">
                  Calendar Features
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">AI Topic Generation:</strong>
                      <span className="text-white/90 ml-2">
                        Smart suggestions for blog posts and social content
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">Auto-Publishing:</strong>
                      <span className="text-white/90 ml-2">
                        Schedule content across multiple platforms
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">Performance Tracking:</strong>
                      <span className="text-white/90 ml-2">
                        Monitor engagement and optimize timing
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-montserrat font-bold text-sage-green mb-4">
                  AI Assistance
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">Content Generation:</strong>
                      <span className="text-white/90 ml-2">
                        Draft posts with Commander Content
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">SEO Optimization:</strong>
                      <span className="text-white/90 ml-2">
                        Lieutenant SEO ensures visibility
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">Smart Scheduling:</strong>
                      <span className="text-white/90 ml-2">
                        Best times based on audience data
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-6">
              Automated Link Building
            </h3>
            <LinkBuildingSVG />
            <div className="mt-8">
              <h4 className="text-xl font-montserrat font-bold text-sage-green mb-4">
                How It Works
              </h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">Community Engagement:</strong>
                      <span className="text-white/90 ml-2">
                        AI finds relevant discussions on Reddit and Quora
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">Natural Responses:</strong>
                      <span className="text-white/90 ml-2">
                        Generate helpful answers with subtle references
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">Traffic Analysis:</strong>
                      <span className="text-white/90 ml-2">
                        Track referral sources and engagement
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">Authority Building:</strong>
                      <span className="text-white/90 ml-2">
                        Measure and grow domain authority
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
