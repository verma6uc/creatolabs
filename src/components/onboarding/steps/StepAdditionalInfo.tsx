'use client';

import Image from 'next/image';
import { WizardData } from '../OnboardingWizard';

type StepProps = {
  data: WizardData;
  setData: (data: WizardData) => void;
  onNext: () => void;
  onPrev: () => void;
};

type Integration = {
  id: string;
  label: string;
  description: string;
  icon: string;
  category: 'form' | 'ecommerce' | 'analytics' | 'seo';
};

const availableIntegrations: Integration[] = [
  {
    id: 'contact-form',
    label: 'Contact Form',
    description: 'Add a customizable contact form',
    icon: '/icons/content-bot.svg',
    category: 'form',
  },
  {
    id: 'newsletter',
    label: 'Newsletter Signup',
    description: 'Collect email subscribers',
    icon: '/icons/content-bot.svg',
    category: 'form',
  },
  {
    id: 'stripe',
    label: 'Stripe Payments',
    description: 'Accept online payments',
    icon: '/icons/content-bot.svg',
    category: 'ecommerce',
  },
  {
    id: 'google-analytics',
    label: 'Google Analytics',
    description: 'Track website traffic and user behavior',
    icon: '/icons/analytics.svg',
    category: 'analytics',
  },
  {
    id: 'google-search',
    label: 'Google Search Console',
    description: 'Monitor search performance',
    icon: '/icons/seo-bot.svg',
    category: 'seo',
  },
  {
    id: 'meta-pixel',
    label: 'Meta Pixel',
    description: 'Track Facebook and Instagram ads',
    icon: '/icons/analytics.svg',
    category: 'analytics',
  },
];

export function StepAdditionalInfo({ data, setData, onNext, onPrev }: StepProps) {
  const handleIntegrationToggle = (integrationId: string) => {
    const newIntegrations = data.integrations.includes(integrationId)
      ? data.integrations.filter(id => id !== integrationId)
      : [...data.integrations, integrationId];
    
    setData({ ...data, integrations: newIntegrations });
  };

  const handleAnalyticsToggle = (toolId: string) => {
    const newTools = data.analyticsTools.includes(toolId)
      ? data.analyticsTools.filter(id => id !== toolId)
      : [...data.analyticsTools, toolId];
    
    setData({ ...data, analyticsTools: newTools });
  };

  const getIntegrationsByCategory = (category: Integration['category']) => {
    return availableIntegrations.filter(integration => integration.category === category);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
          Additional Features
        </h2>
        <p className="text-white/80">
          Enhance your website with these optional integrations.
        </p>
      </div>

      {/* Forms & eCommerce */}
      <div className="space-y-4">
        <h3 className="text-xl font-montserrat font-bold text-white">
          Forms & eCommerce
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...getIntegrationsByCategory('form'), ...getIntegrationsByCategory('ecommerce')].map((integration) => (
            <button
              key={integration.id}
              type="button"
              onClick={() => handleIntegrationToggle(integration.id)}
              className={`p-4 text-left border rounded-lg transition-all duration-300 ${
                data.integrations.includes(integration.id)
                  ? 'bg-sage-green/20 border-sage-green'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-start gap-3">
                <Image
                  src={integration.icon}
                  alt={integration.label}
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <div>
                  <h4 className="text-white font-medium mb-1">{integration.label}</h4>
                  <p className="text-white/60 text-sm">{integration.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Analytics & SEO */}
      <div className="space-y-4">
        <h3 className="text-xl font-montserrat font-bold text-white">
          Analytics & SEO Tools
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...getIntegrationsByCategory('analytics'), ...getIntegrationsByCategory('seo')].map((tool) => (
            <button
              key={tool.id}
              type="button"
              onClick={() => handleAnalyticsToggle(tool.id)}
              className={`p-4 text-left border rounded-lg transition-all duration-300 ${
                data.analyticsTools.includes(tool.id)
                  ? 'bg-sage-green/20 border-sage-green'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-start gap-3">
                <Image
                  src={tool.icon}
                  alt={tool.label}
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <div>
                  <h4 className="text-white font-medium mb-1">{tool.label}</h4>
                  <p className="text-white/60 text-sm">{tool.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
        <p className="text-white/60 text-sm">
          Note: You can always add or remove these integrations later.
        </p>
      </div>

      <div className="flex justify-between pt-8">
        <button
          type="button"
          onClick={onPrev}
          className="text-white hover:text-sage-green transition-colors"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="btn-primary text-lg"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
