'use client';

const DataSourcesSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Hub */}
    <circle cx="400" cy="150" r="60" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
      <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" />
    </circle>
    <text x="400" y="140" className="fill-white text-sm" textAnchor="middle">Connected</text>
    <text x="400" y="160" className="fill-white text-sm" textAnchor="middle">Landing Pages</text>

    {/* Data Sources */}
    <g>
      {/* E-commerce */}
      <path d="M200 80 L340 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="200" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="75" className="fill-white text-xs" textAnchor="middle">E-commerce</text>
      <text x="200" y="90" className="fill-white text-xs" textAnchor="middle">Products</text>

      {/* CRM */}
      <path d="M200 220 L340 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="200" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="200" y="215" className="fill-white text-xs" textAnchor="middle">CRM</text>
      <text x="200" y="230" className="fill-white text-xs" textAnchor="middle">Data</text>

      {/* Events */}
      <path d="M600 80 L460 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="80" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="75" className="fill-white text-xs" textAnchor="middle">Event</text>
      <text x="600" y="90" className="fill-white text-xs" textAnchor="middle">Calendars</text>

      {/* Content */}
      <path d="M600 220 L460 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <circle cx="600" cy="220" r="40" className="fill-sage-green/10 stroke-sage-green" strokeWidth="1" />
      <text x="600" y="215" className="fill-white text-xs" textAnchor="middle">Content</text>
      <text x="600" y="230" className="fill-white text-xs" textAnchor="middle">Databases</text>
    </g>

    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" className="fill-sage-green" />
      </marker>
    </defs>
  </svg>
);

const DataFlowSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Data Flow Steps */}
    <g>
      {/* Connect */}
      <rect x="50" y="100" width="150" height="100" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="125" y="140" className="fill-white text-sm" textAnchor="middle">Connect</text>
      <text x="125" y="160" className="fill-white text-xs" textAnchor="middle">API / Import</text>

      {/* Map */}
      <rect x="250" y="100" width="150" height="100" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="325" y="140" className="fill-white text-sm" textAnchor="middle">Map Data</text>
      <text x="325" y="160" className="fill-white text-xs" textAnchor="middle">AI-Assisted</text>

      {/* Template */}
      <rect x="450" y="100" width="150" height="100" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="525" y="140" className="fill-white text-sm" textAnchor="middle">Template</text>
      <text x="525" y="160" className="fill-white text-xs" textAnchor="middle">Smart Layout</text>

      {/* Launch */}
      <rect x="650" y="100" width="150" height="100" rx="8" className="fill-sage-green/10 stroke-sage-green" strokeWidth="2" />
      <text x="725" y="140" className="fill-white text-sm" textAnchor="middle">Launch</text>
      <text x="725" y="160" className="fill-white text-xs" textAnchor="middle">Auto-Sync</text>

      {/* Flow Arrows */}
      <path d="M200 150 L250 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M400 150 L450 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M600 150 L650 150" className="stroke-sage-green" strokeWidth="2" markerEnd="url(#arrow)" />
    </g>
  </svg>
);

export function ConnectedLandingSection() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Connected Landing Pages
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Seamlessly integrate external data from any source to create dynamic, auto-updating 
            landing pages powered by AI.
          </p>
        </div>

        <div className="grid gap-16">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-6">
              Universal Data Integration
            </h3>
            <DataSourcesSVG />
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-xl font-montserrat font-bold text-sage-green mb-4">
                  Supported Data Sources
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">E-commerce Platforms:</strong>
                      <span className="text-white/90 ml-2">
                        Shopify, WooCommerce, Magento
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">CRM Systems:</strong>
                      <span className="text-white/90 ml-2">
                        HubSpot, Salesforce, Custom DBs
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">Event Platforms:</strong>
                      <span className="text-white/90 ml-2">
                        Eventbrite, Google Calendar
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-montserrat font-bold text-sage-green mb-4">
                  AI-Powered Features
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">Smart Templates:</strong>
                      <span className="text-white/90 ml-2">
                        AI suggests optimal layouts based on data type
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">Content Enhancement:</strong>
                      <span className="text-white/90 ml-2">
                        Automated copy refinement and SEO optimization
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">Dynamic Updates:</strong>
                      <span className="text-white/90 ml-2">
                        Real-time sync with external data sources
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-6">
              Seamless Integration Flow
            </h3>
            <DataFlowSVG />
            <div className="mt-8">
              <h4 className="text-xl font-montserrat font-bold text-sage-green mb-4">
                How It Works
              </h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">Connect:</strong>
                      <span className="text-white/90 ml-2">
                        Securely link your data source via API or import
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">Map:</strong>
                      <span className="text-white/90 ml-2">
                        AI automatically maps your data to landing page elements
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">Template:</strong>
                      <span className="text-white/90 ml-2">
                        Choose from AI-suggested layouts optimized for your data
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full"></span>
                    <div>
                      <strong className="text-sage-green">Launch:</strong>
                      <span className="text-white/90 ml-2">
                        Publish and let AI handle ongoing updates and optimization
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
