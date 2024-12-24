import Image from 'next/image';
import { GlassCard } from './GlassCard';

interface Feature {
  title: string;
  description: string;
}

const aiFeatures: Feature[] = [
  {
    title: 'Captain SiteBuilder',
    description: 'Your guide through blueprint creation, expertly handling pages, navigation, and layout design.'
  },
  {
    title: 'Commander Content',
    description: 'Generates and refines text for each section, from headlines to product descriptions.'
  },
  {
    title: 'Lieutenant SEO',
    description: 'Analyzes competitors, suggests metadata, and monitors search rankings for ongoing optimization.'
  }
];

export const AIDrivenSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-eggplant-dark to-sage-green-dark" />
      <div className="absolute inset-0 pattern-bg opacity-20" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6 animate-fade-up">
              10-Minute Website Creation
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-up animate-delay-100">
              Meet your AI crew members who will guide you through a frictionless onboarding process, creating your perfect website in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* AI Bot Illustration */}
            <div className="relative h-96 animate-float">
              <Image
                src="/icons/design-bot.svg"
                alt="AI Design Bot"
                fill
                className="object-contain"
              />
            </div>

            {/* AI Features */}
            <div className="space-y-6">
              {aiFeatures.map((feature, index) => (
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
