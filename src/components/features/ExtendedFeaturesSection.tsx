import { GlassCard } from './GlassCard';

interface Feature {
  title: string;
  description: string;
}

const extraFeatures: Feature[] = [
  {
    title: 'Custom Domains',
    description: 'Seamlessly connect your own domain—no technical headaches.'
  },
  {
    title: 'Built-In Forms',
    description: 'Capture leads or inquiries without separate plugins or code.'
  },
  {
    title: 'Advanced Admin Panel',
    description: 'Edit, redesign, or roll back versions in a snap.'
  },
  {
    title: 'Team Collaboration',
    description: 'Invite team members to co-create, manage, and optimize your site together.'
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
              Final Act: The Extras that Seal the Deal
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-up animate-delay-100">
              Beyond the core, Creator Lab packs extra punches that make your life easier.
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
