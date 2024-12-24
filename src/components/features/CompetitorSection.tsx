import Image from 'next/image';
import { GlassCard } from './GlassCard';

interface Feature {
  title: string;
  description: string;
}

const seoFeatures: Feature[] = [
  {
    title: 'Deep Competitor Analysis',
    description: 'Integrates with SEMrush and Ahrefs to analyze traffic patterns and top keywords from competitor sites.'
  },
  {
    title: 'Automatic Page Suggestions',
    description: 'Identifies common pages and features among top competitors and suggests them for your site structure.'
  },
  {
    title: 'Live SEO Monitoring',
    description: 'Lieutenant SEO continuously monitors rankings and suggests new content opportunities to stay competitive.'
  }
];

export const CompetitorSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-eggplant-dark to-sage-green-dark" />
      <div className="absolute inset-0 pattern-bg opacity-20" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6 animate-fade-up">
              Real-Time Competitor Insights
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-up animate-delay-100">
              Stay ahead with continuous competitor monitoring and SEO optimization. Lieutenant SEO analyzes your market and provides actionable recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Dashboard Visualization */}
            <div className="relative h-96 animate-float">
              <Image
                src="/icons/dashboard.svg"
                alt="Analytics Dashboard"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-sage-green/10 to-eggplant/10 animate-pulse rounded-2xl" />
              </div>
            </div>

            {/* SEO Features */}
            <div className="space-y-6">
              {seoFeatures.map((feature, index) => (
                <GlassCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
