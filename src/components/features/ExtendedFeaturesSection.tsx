import { GlassCard } from './GlassCard';

interface Feature {
  title: string;
  description: string;
}

const extraFeatures: Feature[] = [
  {
    title: 'Token-Based Flexibility',
    description: 'Pay only for what you need with our token system—perfect for bursts of AI activity without upgrading plans.'
  },
  {
    title: 'Glassmorphism Design',
    description: 'Modern, translucent UI with subtle blurs and layered depth creates an engaging, futuristic experience.'
  },
  {
    title: 'Micro-Animations',
    description: 'Delightful hover effects, loading states, and interactive elements enhance user engagement.'
  },
  {
    title: 'Version History',
    description: 'Every AI-suggested change is versioned, letting you experiment confidently with new designs.'
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
              Modern Design & Flexible Pricing
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-up animate-delay-100">
              Experience our cutting-edge glassmorphism design while enjoying the flexibility of token-based pricing for advanced features.
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
