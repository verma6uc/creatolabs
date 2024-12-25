'use client';

const KanbanBoard = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Kanban Board */}
    <g>
      {/* Board Columns */}
      {['To Do', 'In Progress', 'Review', 'Done'].map((title, i) => (
        <g key={title}>
          {/* Column Header */}
          <rect 
            x={50 + i * 185} 
            y={30} 
            width={175} 
            height={40} 
            rx={8}
            className="fill-sage-green/20 stroke-sage-green" 
            strokeWidth="2" 
          />
          <text 
            x={137.5 + i * 185} 
            y={55} 
            className="fill-white text-sm font-medium" 
            textAnchor="middle"
          >
            {title}
          </text>

          {/* Column Background */}
          <rect 
            x={50 + i * 185} 
            y={80} 
            width={175} 
            height={190} 
            rx={8}
            className="fill-sage-green/10 stroke-sage-green/30" 
            strokeWidth="1" 
          />

          {/* Cards */}
          {i === 0 && (
            <g key={`${title}-card`}>
              <rect 
                x={60 + i * 185} 
                y={90} 
                width={155} 
                height={80} 
                rx={4}
                className="fill-sage-green/30 stroke-sage-green hover:fill-sage-green/40 transition-all duration-300" 
                strokeWidth="1" 
              >
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
              </rect>
              <text x={137.5 + i * 185} y={120} className="fill-white text-xs" textAnchor="middle">Blog Post</text>
              <text x={137.5 + i * 185} y={140} className="fill-white/80 text-xs" textAnchor="middle">Due: Tomorrow</text>
            </g>
          )}
          {i === 1 && (
            <g key={`${title}-card`}>
              <rect 
                x={60 + i * 185} 
                y={90} 
                width={155} 
                height={80} 
                rx={4}
                className="fill-sage-green/30 stroke-sage-green hover:fill-sage-green/40 transition-all duration-300" 
                strokeWidth="1" 
              >
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
              </rect>
              <text x={137.5 + i * 185} y={120} className="fill-white text-xs" textAnchor="middle">Social Media Post</text>
              <text x={137.5 + i * 185} y={140} className="fill-white/80 text-xs" textAnchor="middle">In Progress</text>
            </g>
          )}
          {i === 2 && (
            <g key={`${title}-card`}>
              <rect 
                x={60 + i * 185} 
                y={90} 
                width={155} 
                height={80} 
                rx={4}
                className="fill-sage-green/30 stroke-sage-green hover:fill-sage-green/40 transition-all duration-300" 
                strokeWidth="1" 
              >
                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
              </rect>
              <text x={137.5 + i * 185} y={120} className="fill-white text-xs" textAnchor="middle">Newsletter</text>
              <text x={137.5 + i * 185} y={140} className="fill-white/80 text-xs" textAnchor="middle">Needs Review</text>
            </g>
          )}
        </g>
      ))}
    </g>
  </svg>
);

const DataIntegrationSVG = () => (
  <svg className="w-full h-auto my-8" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Hub */}
    <circle cx="400" cy="150" r="60" className="fill-sage-green/20 stroke-sage-green" strokeWidth="2">
      <animate attributeName="r" values="60;65;60" dur="3s" repeatCount="indefinite" />
    </circle>
    <text x="400" y="140" className="fill-white text-sm" textAnchor="middle">Universal</text>
    <text x="400" y="160" className="fill-white text-sm" textAnchor="middle">Data Hub</text>

    {/* Connected Systems */}
    <g>
      {[
        { x: 200, y: 80, label: ['CRM', 'Integration'] },
        { x: 200, y: 220, label: ['Analytics', 'Platform'] },
        { x: 600, y: 80, label: ['Marketing', 'Tools'] },
        { x: 600, y: 220, label: ['Social', 'Media'] }
      ].map(({ x, y, label }, index) => (
        <g key={`system-${index}`}>
          <path 
            d={`M${x} ${y} L${x < 400 ? 340 : 460} 150`} 
            className="stroke-sage-green" 
            strokeWidth="2" 
            markerEnd="url(#arrow)"
          >
            <animate attributeName="stroke-dasharray" values="5,5;10,10;5,5" dur="3s" repeatCount="indefinite" />
          </path>
          <circle 
            cx={x} 
            cy={y} 
            r="40" 
            className="fill-sage-green/10 stroke-sage-green hover:fill-sage-green/20 transition-all duration-300" 
            strokeWidth="1" 
          />
          <text x={x} y={y - 5} className="fill-white text-xs" textAnchor="middle">{label[0]}</text>
          <text x={x} y={y + 10} className="fill-white text-xs" textAnchor="middle">{label[1]}</text>
        </g>
      ))}
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
    <section id="content-marketing" className="py-24 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6 animate-fade-up">
            AI-Powered Content Marketing
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-up animate-delay-100">
            Automate your content strategy with intelligent scheduling, link building, and 
            performance tracking.
          </p>
        </div>

        <div className="grid gap-16">
          <div className="bg-gradient-to-br from-sage-green/5 to-sage-green/10 rounded-xl p-8 border border-sage-green/20 hover:border-sage-green/30 transition-all duration-300 animate-fade-up animate-delay-200">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-6">
              Smart Content Calendar
            </h3>
            <KanbanBoard />
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-xl font-montserrat font-bold text-sage-green mb-4">
                  Kanban Features
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full group-hover:scale-110 transition-transform duration-300"></span>
                    <div>
                      <strong className="text-sage-green group-hover:text-sage-green-light transition-colors duration-300">Drag & Drop:</strong>
                      <span className="text-white/90 ml-2">
                        Intuitive task management
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full group-hover:scale-110 transition-transform duration-300"></span>
                    <div>
                      <strong className="text-sage-green group-hover:text-sage-green-light transition-colors duration-300">Progress Tracking:</strong>
                      <span className="text-white/90 ml-2">
                        Visual workflow management
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full group-hover:scale-110 transition-transform duration-300"></span>
                    <div>
                      <strong className="text-sage-green group-hover:text-sage-green-light transition-colors duration-300">Team Collaboration:</strong>
                      <span className="text-white/90 ml-2">
                        Real-time updates and comments
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
                  <li className="flex items-start group">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full group-hover:scale-110 transition-transform duration-300"></span>
                    <div>
                      <strong className="text-sage-green group-hover:text-sage-green-light transition-colors duration-300">Smart Suggestions:</strong>
                      <span className="text-white/90 ml-2">
                        AI-powered task prioritization
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full group-hover:scale-110 transition-transform duration-300"></span>
                    <div>
                      <strong className="text-sage-green group-hover:text-sage-green-light transition-colors duration-300">Workload Balancing:</strong>
                      <span className="text-white/90 ml-2">
                        Optimal task distribution
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full group-hover:scale-110 transition-transform duration-300"></span>
                    <div>
                      <strong className="text-sage-green group-hover:text-sage-green-light transition-colors duration-300">Deadline Management:</strong>
                      <span className="text-white/90 ml-2">
                        Smart scheduling and reminders
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 animate-fade-up animate-delay-300">
            <h3 className="text-2xl font-montserrat font-bold text-sage-green mb-6">
              Universal Data Integration
            </h3>
            <DataIntegrationSVG />
            <div className="mt-8">
              <h4 className="text-xl font-montserrat font-bold text-sage-green mb-4">
                Integration Features
              </h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start group">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full group-hover:scale-110 transition-transform duration-300"></span>
                    <div>
                      <strong className="text-sage-green group-hover:text-sage-green-light transition-colors duration-300">Unified Dashboard:</strong>
                      <span className="text-white/90 ml-2">
                        All your data in one place
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full group-hover:scale-110 transition-transform duration-300"></span>
                    <div>
                      <strong className="text-sage-green group-hover:text-sage-green-light transition-colors duration-300">Real-time Sync:</strong>
                      <span className="text-white/90 ml-2">
                        Instant updates across platforms
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start group">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full group-hover:scale-110 transition-transform duration-300"></span>
                    <div>
                      <strong className="text-sage-green group-hover:text-sage-green-light transition-colors duration-300">Smart Analytics:</strong>
                      <span className="text-white/90 ml-2">
                        Cross-platform insights
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <span className="inline-block w-2 h-2 mt-2 mr-3 bg-sage-green rounded-full group-hover:scale-110 transition-transform duration-300"></span>
                    <div>
                      <strong className="text-sage-green group-hover:text-sage-green-light transition-colors duration-300">Automated Workflows:</strong>
                      <span className="text-white/90 ml-2">
                        Seamless data flow
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
