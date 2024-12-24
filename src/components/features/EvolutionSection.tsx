import Image from 'next/image';
import { TimelineNode } from './TimelineNode';

interface Feature {
  title: string;
  description: string;
}

const timelineNodes: Feature[] = [
  {
    title: 'Click Tracking',
    description: 'Pinpoint which sections captivate users the most—and which need a facelift.'
  },
  {
    title: 'Automated Tweaks',
    description: 'Our AI suggests real-time design updates based on user engagement metrics.'
  },
  {
    title: 'Refined CTAs',
    description: 'Enjoy data-driven call-to-action copy and positioning to elevate conversions.'
  }
];

export const EvolutionSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sage-green-dark to-eggplant-dark" />
      <div className="absolute inset-0 pattern-bg opacity-20" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6 animate-fade-up">
              Act 2: An Ever-Evolving Creation
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-up animate-delay-100">
              Your website is never static. Each visitor&apos;s click and every scroll feed our AI engine, inspiring new layouts and fresh content suggestions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Evolution Visualization */}
            <div className="relative h-[600px] animate-float-delayed">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-sage-green/30 to-eggplant/30 animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-sage-green/40 to-eggplant/40 animate-pulse" style={{ animationDelay: '500ms' }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-sage-green/50 to-eggplant/50 animate-pulse" style={{ animationDelay: '1000ms' }} />
              </div>
              <div className="relative w-[120px] h-[120px] mx-auto mt-[240px]">
                <Image
                  src="/icons/evolution.svg"
                  alt="Evolution Visualization"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-12">
              {timelineNodes.map((node, index) => (
                <TimelineNode
                  key={node.title}
                  title={node.title}
                  description={node.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
