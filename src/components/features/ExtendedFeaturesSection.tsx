import { GlassCard } from './GlassCard';

interface Feature {
  title: string;
  description: string;
}

const extraFeatures: Feature[] = [
  {
    title: 'Voice & AR Interface',
    description: 'Talk to your AI crew or preview 3D elements for eCommerce—the future of web design is here.'
  },
  {
    title: 'Niche Templates',
    description: 'Instant setup for restaurants, gyms, and more with pre-configured features like menus and booking systems.'
  },
  {
    title: 'Real-Time Chat',
    description: 'Click any element and chat with AI to request changes—from casual tone tweaks to complete redesigns.'
  },
  {
    title: 'Smart Analytics',
    description: 'AI analyzes click hotspots, scroll depth, and engagement to suggest targeted improvements every 24 hours.'
  }
];

export const ExtendedFeaturesSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sage-green-dark to-eggplant-dark" />
      <div className="absolute inset-0 pattern-bg opacity-20" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6 animate-fade-up">
              Future-Ready Features
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-up animate-delay-100">
              From voice commands to AR previews, we&apos;re pushing the boundaries of what a website builder can do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {extraFeatures.map((feature, index) => (
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
    </section>
  );
};
