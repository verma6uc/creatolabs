'use client';

import Image from 'next/image';

type MockLayoutsProps = {
  step: 'input' | 'analysis' | 'blueprint' | 'design' | 'evolution';
};

export function MockLayouts({ step }: MockLayoutsProps) {
  const AgentIcon = ({ src, alt, className = "", size = 36 }: { src: string; alt: string; className?: string; size?: number }) => (
    <div className={`relative group ${className}`}>
      <div className="agent-icon">
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-sage-green whitespace-nowrap">{alt}</span>
      </div>
    </div>
  );

  const ConnectingLine = ({ className = "" }: { className?: string }) => (
    <div className={`h-1 bg-gradient-to-r from-sage-green to-sage-green bg-opacity-5 rounded-full ${className}`}>
      <div className="h-full w-1/3 bg-sage-green bg-opacity-30 rounded-full animate-[moveRight_2s_linear_infinite]" />
    </div>
  );

  const layouts = {
    input: (
      <div className="flex flex-col h-[500px] bg-dark-bg bg-opacity-50 rounded-lg p-8 relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-sage-green to-transparent opacity-30" />
        
        <div className="relative">
          <div className="flex justify-between mb-12">
            <AgentIcon src="/icons/dashboard.svg" alt="Admiral Planner" size={48} className="animate-float" />
            <ConnectingLine className="flex-grow mx-4 mt-6" />
            <AgentIcon src="/icons/analytics.svg" alt="Research Officer" size={48} className="animate-float-delayed" />
          </div>
          
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <AgentIcon src="/icons/design-bot.svg" alt="Captain SiteBuilder" />
              <div className="h-24 bg-white bg-opacity-10 rounded-lg shimmer-effect" />
            </div>
            <div className="space-y-4">
              <AgentIcon src="/icons/content-bot.svg" alt="Commander Content" />
              <div className="h-24 bg-white bg-opacity-10 rounded-lg shimmer-effect" />
            </div>
            <div className="space-y-4">
              <AgentIcon src="/icons/blueprint.svg" alt="UX Engineer" />
              <div className="h-24 bg-white bg-opacity-10 rounded-lg shimmer-effect" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="space-y-4">
              <AgentIcon src="/icons/seo-bot.svg" alt="Lieutenant SEO" />
              <div className="h-24 bg-white bg-opacity-10 rounded-lg shimmer-effect" />
            </div>
            <div className="space-y-4">
              <AgentIcon src="/icons/share.svg" alt="Social Commander" />
              <div className="h-24 bg-white bg-opacity-10 rounded-lg shimmer-effect" />
            </div>
            <div className="space-y-4">
              <AgentIcon src="/icons/evolution.svg" alt="Security Officer" />
              <div className="h-24 bg-white bg-opacity-10 rounded-lg shimmer-effect" />
            </div>
          </div>
        </div>
      </div>
    ),
    analysis: (
      <div className="flex flex-col h-[500px] bg-dark-bg bg-opacity-50 rounded-lg p-8 relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-sage-green to-transparent opacity-30" />
        
        <div className="relative">
          <div className="flex justify-center mb-12 relative">
            <AgentIcon src="/icons/analytics.svg" alt="Research Officer" size={48} className="animate-float" />
            <div className="absolute inset-0 bg-sage-green bg-opacity-5 rounded-full animate-ping" />
          </div>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <AgentIcon src="/icons/content-bot.svg" alt="Commander Content" />
                <ConnectingLine className="w-24" />
                <AgentIcon src="/icons/seo-bot.svg" alt="Lieutenant SEO" />
              </div>
              <div className="h-32 bg-white bg-opacity-10 rounded-lg shimmer-effect" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <AgentIcon src="/icons/share.svg" alt="Social Commander" />
                <ConnectingLine className="w-24" />
                <AgentIcon src="/icons/blueprint.svg" alt="UX Engineer" />
              </div>
              <div className="h-32 bg-white bg-opacity-10 rounded-lg shimmer-effect" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="h-48 bg-sage-green bg-opacity-10 rounded-lg p-4 group hover:bg-opacity-20 transition-all duration-300">
              <div className="text-xs text-sage-green mb-2 group-hover:text-sage-green-light">Competitor Analysis</div>
              <div className="space-y-2">
                <div className="h-2 bg-white bg-opacity-10 rounded w-3/4 group-hover:bg-opacity-20 transition-all duration-300" />
                <div className="h-2 bg-white bg-opacity-10 rounded w-1/2 group-hover:bg-opacity-20 transition-all duration-300" />
                <div className="h-2 bg-white bg-opacity-10 rounded w-2/3 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
            </div>
            <div className="h-48 bg-sage-green bg-opacity-10 rounded-lg p-4 group hover:bg-opacity-20 transition-all duration-300">
              <div className="text-xs text-sage-green mb-2 group-hover:text-sage-green-light">Market Insights</div>
              <div className="space-y-2">
                <div className="h-2 bg-white bg-opacity-10 rounded w-2/3 group-hover:bg-opacity-20 transition-all duration-300" />
                <div className="h-2 bg-white bg-opacity-10 rounded w-3/4 group-hover:bg-opacity-20 transition-all duration-300" />
                <div className="h-2 bg-white bg-opacity-10 rounded w-1/2 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    blueprint: (
      <div className="flex flex-col h-[500px] bg-dark-bg bg-opacity-50 rounded-lg p-8 relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-sage-green to-transparent opacity-30" />
        
        <div className="relative">
          <div className="flex justify-between mb-12">
            <AgentIcon src="/icons/dashboard.svg" alt="Admiral Planner" size={40} className="animate-float" />
            <AgentIcon src="/icons/design-bot.svg" alt="Captain SiteBuilder" size={48} className="animate-float-delayed" />
            <AgentIcon src="/icons/blueprint.svg" alt="UX Engineer" size={40} className="animate-float" />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-8 bg-sage-green bg-opacity-20 rounded-lg shimmer-effect group hover:bg-opacity-30 transition-all duration-300" />
            ))}
          </div>

          <div className="grid grid-cols-12 gap-4 mb-8">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-24 bg-sage-green bg-opacity-10 rounded-lg shimmer-effect group hover:bg-opacity-20 transition-all duration-300" />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <AgentIcon src="/icons/content-bot.svg" alt="Commander Content" />
                <AgentIcon src="/icons/seo-bot.svg" alt="Lieutenant SEO" />
              </div>
              <div className="h-32 bg-sage-green bg-opacity-20 rounded-lg shimmer-effect group hover:bg-opacity-30 transition-all duration-300" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <AgentIcon src="/icons/share.svg" alt="Social Commander" />
                <AgentIcon src="/icons/evolution.svg" alt="Security Officer" />
              </div>
              <div className="h-32 bg-sage-green bg-opacity-20 rounded-lg shimmer-effect group hover:bg-opacity-30 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    ),
    design: (
      <div className="flex flex-col h-[500px] bg-dark-bg bg-opacity-50 rounded-lg p-8 relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-sage-green to-transparent opacity-30" />
        
        <div className="relative">
          <div className="flex justify-center mb-12 relative">
            <AgentIcon src="/icons/design-bot.svg" alt="Captain SiteBuilder" size={48} className="animate-float" />
            <div className="absolute inset-0 bg-sage-green bg-opacity-5 rounded-full animate-ping" />
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <AgentIcon src="/icons/content-bot.svg" alt="Commander Content" />
                <AgentIcon src="/icons/blueprint.svg" alt="UX Engineer" />
              </div>
              <div className="h-48 bg-sage-green bg-opacity-30 rounded-lg shimmer-effect group hover:bg-opacity-40 transition-all duration-300" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <AgentIcon src="/icons/seo-bot.svg" alt="Lieutenant SEO" />
                <AgentIcon src="/icons/share.svg" alt="Social Commander" />
              </div>
              <div className="h-48 bg-sage-green bg-opacity-30 rounded-lg shimmer-effect group hover:bg-opacity-40 transition-all duration-300" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-24 bg-sage-green bg-opacity-40 rounded-lg shimmer-effect group hover:bg-opacity-50 transition-all duration-300" />
            ))}
          </div>
        </div>
      </div>
    ),
    evolution: (
      <div className="flex flex-col h-[500px] bg-dark-bg bg-opacity-50 rounded-lg p-8 relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-br from-sage-green to-transparent opacity-30" />
        
        <div className="relative">
          <div className="flex justify-between mb-12">
            <AgentIcon src="/icons/dashboard.svg" alt="Admiral Planner" size={48} className="animate-float" />
            <AgentIcon src="/icons/analytics.svg" alt="Research Officer" size={40} className="animate-float-delayed" />
            <AgentIcon src="/icons/evolution.svg" alt="Evolution Bot" size={40} className="animate-float" />
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <AgentIcon src="/icons/content-bot.svg" alt="Commander Content" />
                <AgentIcon src="/icons/share.svg" alt="Social Commander" />
              </div>
              <div className="h-32 bg-sage-green bg-opacity-40 rounded-lg shimmer-effect group hover:bg-opacity-50 transition-all duration-300" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <AgentIcon src="/icons/seo-bot.svg" alt="Lieutenant SEO" />
                <AgentIcon src="/icons/blueprint.svg" alt="UX Engineer" />
              </div>
              <div className="h-32 bg-sage-green bg-opacity-40 rounded-lg shimmer-effect group hover:bg-opacity-50 transition-all duration-300" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-sage-green bg-opacity-30 rounded w-3/4 animate-pulse" />
                <div className="h-24 bg-sage-green bg-opacity-50 rounded-lg shimmer-effect group hover:bg-opacity-60 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  };

  return layouts[step];
}
