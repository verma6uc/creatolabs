'use client';

import Image from 'next/image';

export function LoadingOverlay() {
  const agents = [
    { icon: '/icons/dashboard.svg', name: 'Admiral Planner', angle: 0 },
    { icon: '/icons/design-bot.svg', name: 'Captain SiteBuilder', angle: 45 },
    { icon: '/icons/content-bot.svg', name: 'Commander Content', angle: 90 },
    { icon: '/icons/analytics.svg', name: 'Research Officer', angle: 135 },
    { icon: '/icons/seo-bot.svg', name: 'Lieutenant SEO', angle: 180 },
    { icon: '/icons/share.svg', name: 'Social Commander', angle: 225 },
    { icon: '/icons/blueprint.svg', name: 'UX Engineer', angle: 270 },
    { icon: '/icons/evolution.svg', name: 'Security Officer', angle: 315 }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-dark-bg/80">
      <div className="glass-card p-12 rounded-2xl text-center max-w-2xl">
        {/* Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5 rounded-2xl" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-8">
            {/* Central Loading Animation */}
            <div className="relative w-32 h-32">
              {/* Rotating Outer Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-sage-green/20 animate-spin-slow" />
              
              {/* Pulsing Inner Circle */}
              <div className="absolute inset-4 rounded-full bg-sage-green/10 animate-pulse" />
              
              {/* Center Icon */}
              <div className="absolute inset-8 flex items-center justify-center">
                <Image
                  src="/icons/dashboard.svg"
                  alt="Command Center"
                  width={32}
                  height={32}
                  className="animate-float"
                />
              </div>

              {/* Orbiting Agents */}
              {agents.map((agent, index) => {
                const radius = 80; // Distance from center
                const x = radius * Math.cos((agent.angle * Math.PI) / 180);
                const y = radius * Math.sin((agent.angle * Math.PI) / 180);
                
                return (
                  <div
                    key={agent.name}
                    className="absolute w-8 h-8"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      left: 'calc(50% - 16px)',
                      top: 'calc(50% - 16px)',
                      animation: `orbit ${8 + index}s linear infinite`
                    }}
                  >
                    <Image
                      src={agent.icon}
                      alt={agent.name}
                      width={24}
                      height={24}
                      className="animate-pulse"
                    />
                  </div>
                );
              })}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full animate-pulse opacity-30">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="none"
                  stroke="currentColor"
                  className="text-sage-green"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>

          <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
            AI Command Center Initializing
          </h3>
          <p className="text-white/80 max-w-md mx-auto">
            Coordinating AI agents and establishing neural pathways for optimal collaboration...
          </p>

          {/* Progress Indicators */}
          <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="text-left">
              <div className="text-xs text-sage-green mb-1">Neural Sync</div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-sage-green rounded-full w-3/4 animate-pulse" />
              </div>
            </div>
            <div className="text-left">
              <div className="text-xs text-sage-green mb-1">Agent Readiness</div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-sage-green rounded-full w-1/2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Card Border Glow */}
        <div className="absolute inset-0 border border-white/10 rounded-2xl" />
      </div>

      {/* Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-sage-green/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-eggplant/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>
    </div>
  );
}
