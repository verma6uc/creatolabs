'use client';

import { useEffect, useState } from 'react';

type AILogsProps = {
  step: 'input' | 'analysis' | 'blueprint' | 'design' | 'evolution';
};

export function AILogs({ step }: AILogsProps) {
  const [logTimestamps, setLogTimestamps] = useState<string[]>([]);

  useEffect(() => {
    // Generate timestamps on client side only
    const now = new Date();
    const timestamps = Array(8).fill(null).map((_, i) => {
      const time = new Date(now.getTime() + i * 500);
      return time.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    });
    setLogTimestamps(timestamps);
  }, [step]);

  const logs = {
    input: [
      "Admiral Planner: Initiating project analysis sequence...",
      "Research Officer: Gathering industry data and market trends...",
      "Captain SiteBuilder: Analyzing technical requirements...",
      "Commander Content: Evaluating content needs and tone preferences...",
      "UX Engineer: Collecting user journey requirements...",
      "Lieutenant SEO: Identifying target keywords and search intent...",
      "Social Commander: Assessing social media integration needs...",
      "Security Officer: Evaluating security requirements and compliance needs..."
    ],
    analysis: [
      "Admiral Planner: Coordinating multi-agent analysis phase...",
      "Research Officer: Analyzing top 10 competitors in the space...",
      "Research Officer → Commander Content: Sharing competitor content strategies...",
      "Commander Content: Developing content framework based on research...",
      "Lieutenant SEO → Research Officer: Cross-referencing keyword opportunities...",
      "UX Engineer: Mapping optimal user flows based on competitor analysis...",
      "Social Commander: Identifying high-engagement content patterns...",
      "Captain SiteBuilder: Synthesizing technical requirements..."
    ],
    blueprint: [
      "Admiral Planner: Generating comprehensive site blueprint...",
      "Captain SiteBuilder → UX Engineer: Collaborating on layout structure...",
      "Commander Content: Creating content hierarchy and distribution plan...",
      "Lieutenant SEO: Optimizing site architecture for search visibility...",
      "Social Commander: Planning social media integration points...",
      "Security Officer: Implementing security protocols in blueprint...",
      "UX Engineer: Finalizing user journey maps...",
      "Research Officer: Validating blueprint against market research..."
    ],
    design: [
      "Admiral Planner: Orchestrating design implementation phase...",
      "Captain SiteBuilder: Deploying responsive design framework...",
      "UX Engineer → Commander Content: Optimizing content placement...",
      "Commander Content: Generating AI-optimized content blocks...",
      "Lieutenant SEO: Implementing technical SEO elements...",
      "Social Commander: Setting up social sharing infrastructure...",
      "Security Officer: Integrating security measures...",
      "Research Officer: Monitoring design alignment with market standards..."
    ],
    evolution: [
      "Admiral Planner: Initiating continuous improvement cycle...",
      "Research Officer: Analyzing real-time user behavior data...",
      "UX Engineer: Optimizing interaction patterns based on analytics...",
      "Commander Content → Social Commander: Adapting content strategy...",
      "Lieutenant SEO: Adjusting SEO strategy based on performance...",
      "Captain SiteBuilder: Implementing layout optimizations...",
      "Security Officer: Updating security protocols...",
      "Admiral Planner: Coordinating next evolution cycle..."
    ]
  };

  return (
    <div className="bg-dark-bg/50 rounded-lg p-4 h-[500px] overflow-y-auto font-mono text-sm">
      <div className="mb-4 text-sage-green font-bold">
        AI Command Center Logs - Phase: {step.charAt(0).toUpperCase() + step.slice(1)}
      </div>
      {logs[step].map((log, index) => (
        <div 
          key={index}
          className="mb-4 last:mb-0 animate-fade-in"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="flex items-start space-x-2">
            <span className="text-sage-green">{">"}</span>
            {log.includes('→') ? (
              <p className="text-white/90">
                <span className="text-sage-green">{log.split('→')[0].trim()}</span>
                <span className="text-white/60"> → </span>
                <span className="text-sage-green">{log.split('→')[1].split(':')[0].trim()}</span>
                <span className="text-white/60">:</span>
                <span>{log.split(':').slice(-1)[0]}</span>
              </p>
            ) : (
              <p className="text-white/90">
                <span className="text-sage-green">{log.split(':')[0]}</span>
                <span className="text-white/60">:</span>
                <span>{log.split(':').slice(1).join(':')}</span>
              </p>
            )}
          </div>
          <div className="mt-1 pl-4">
            <span className="text-white/50 text-xs">
              {logTimestamps[index] || '00:00:00'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
