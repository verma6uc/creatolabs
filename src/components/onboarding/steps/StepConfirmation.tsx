'use client';

import Image from 'next/image';
import { WizardData } from '../OnboardingWizard';

type StepProps = {
  data: WizardData;
  setData: (data: WizardData) => void;
  onNext: () => void;
  onPrev: () => void;
};

type SummarySection = {
  id: string;
  label: string;
  icon: string;
  render: (data: WizardData) => React.ReactNode;
};

const summarySections: SummarySection[] = [
  {
    id: 'basic',
    label: 'Basic Information',
    icon: '/icons/design-bot.svg',
    render: (data) => (
      <div className="space-y-2">
        <p className="text-white">
          <span className="text-white/60">Project Name:</span> {data.projectName}
        </p>
        <p className="text-white">
          <span className="text-white/60">Email:</span> {data.email}
        </p>
      </div>
    ),
  },
  {
    id: 'purpose',
    label: 'Website Purpose',
    icon: '/icons/content-bot.svg',
    render: (data) => (
      <div className="space-y-2">
        <p className="text-white">
          <span className="text-white/60">Purpose:</span> {data.websitePurpose}
        </p>
        <p className="text-white">
          <span className="text-white/60">Target Audience:</span> {data.targetAudience}
        </p>
      </div>
    ),
  },
  {
    id: 'style',
    label: 'Design & Style',
    icon: '/icons/design-bot.svg',
    render: (data) => (
      <div className="space-y-2">
        <p className="text-white">
          <span className="text-white/60">Color Palette:</span> {data.colorPalette}
        </p>
        <p className="text-white">
          <span className="text-white/60">Theme:</span> {data.themePreference}
        </p>
        <p className="text-white">
          <span className="text-white/60">Brand Tone:</span> {data.brandTone}
        </p>
      </div>
    ),
  },
  {
    id: 'pages',
    label: 'Website Structure',
    icon: '/icons/content-bot.svg',
    render: (data) => (
      <div className="space-y-2">
        <div>
          <p className="text-white/60 mb-1">Main Pages:</p>
          <div className="flex flex-wrap gap-2">
            {data.selectedPages.map((page) => (
              <span key={page} className="px-2 py-1 bg-white/5 rounded text-white text-sm">
                {page}
              </span>
            ))}
          </div>
        </div>
        {data.additionalPages.length > 0 && (
          <div>
            <p className="text-white/60 mb-1">Additional Pages:</p>
            <div className="flex flex-wrap gap-2">
              {data.additionalPages.map((page) => (
                <span key={page} className="px-2 py-1 bg-white/5 rounded text-white text-sm">
                  {page}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    ),
  },
  {
    id: 'integrations',
    label: 'Integrations & Tools',
    icon: '/icons/analytics.svg',
    render: (data) => (
      <div className="space-y-2">
        {data.integrations.length > 0 && (
          <div>
            <p className="text-white/60 mb-1">Selected Integrations:</p>
            <div className="flex flex-wrap gap-2">
              {data.integrations.map((integration) => (
                <span key={integration} className="px-2 py-1 bg-white/5 rounded text-white text-sm">
                  {integration}
                </span>
              ))}
            </div>
          </div>
        )}
        {data.analyticsTools.length > 0 && (
          <div>
            <p className="text-white/60 mb-1">Analytics Tools:</p>
            <div className="flex flex-wrap gap-2">
              {data.analyticsTools.map((tool) => (
                <span key={tool} className="px-2 py-1 bg-white/5 rounded text-white text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    ),
  },
];

export function StepConfirmation({ data, onNext, onPrev }: StepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
          Ready to Build Your Website!
        </h2>
        <p className="text-white/80">
          Review your choices below and confirm to start the build process.
        </p>
      </div>

      {/* Summary Sections */}
      <div className="space-y-6">
        {summarySections.map((section) => (
          <div
            key={section.id}
            className="p-6 border border-white/10 rounded-lg bg-white/5"
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={section.icon}
                alt={section.label}
                width={24}
                height={24}
              />
              <h3 className="text-lg font-montserrat font-bold text-white">
                {section.label}
              </h3>
            </div>
            {section.render(data)}
          </div>
        ))}
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
          Start Building
        </button>
      </div>
    </div>
  );
}
