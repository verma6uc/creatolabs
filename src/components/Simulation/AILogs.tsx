'use client';

type AILogsProps = {
  step: 'input' | 'analysis' | 'blueprint' | 'design' | 'evolution';
};

export function AILogs({ step }: AILogsProps) {
  const logs = {
    input: [
      "DesignBot: Gathering user requirements and preferences...",
      "ContentBot: Analyzing industry-specific content patterns...",
      "SEOBot: Researching relevant keywords and trends..."
    ],
    analysis: [
      "DesignBot: Analyzing competitor websites for design patterns...",
      "ContentBot: Identifying key content sections and hierarchy...",
      "SEOBot: Evaluating competitor SEO strategies..."
    ],
    blueprint: [
      "DesignBot: Generating site structure and layout blueprint...",
      "ContentBot: Creating content outline and placeholders...",
      "SEOBot: Planning meta tags and content structure..."
    ],
    design: [
      "DesignBot: Implementing responsive design components...",
      "ContentBot: Generating optimized content blocks...",
      "SEOBot: Integrating SEO best practices..."
    ],
    evolution: [
      "DesignBot: Optimizing user interface based on interactions...",
      "ContentBot: Refining content based on engagement metrics...",
      "SEOBot: Adjusting strategy based on performance data..."
    ]
  };

  return (
    <div className="bg-dark-bg/50 rounded-lg p-4 h-[300px] overflow-y-auto font-mono text-sm">
      {logs[step].map((log, index) => (
        <div 
          key={index}
          className="mb-4 last:mb-0"
        >
          <div className="flex items-start space-x-2">
            <span className="text-sage-green">{">"}</span>
            <p className="text-white/90">{log}</p>
          </div>
          <div className="mt-1 pl-4">
            <span className="text-white/50 text-xs">
              {new Date().toLocaleTimeString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
