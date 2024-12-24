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
    id: 'competitors',
    label: 'Competitor Analysis',
    icon: '/icons/analytics.svg',
    render: (data) => (
      <div className="space-y-2">
        {data.competitorUrls.length > 0 && (
          <div>
            <p className="text-white/60 mb-1">Analyzed Competitors:</p>
            <div className="flex flex-wrap gap-2">
              {data.competitorUrls.map((url) => (
                <span key={url} className="px-2 py-1 bg-white/5 rounded text-white text-sm">
                  {url}
                </span>
              ))}
            </div>
          </div>
        )}
        <div>
          <p className="text-white/60 mb-1">Brand Keywords:</p>
          <div className="flex flex-wrap gap-2">
            {data.brandKeywords.map((keyword) => (
              <span key={keyword} className="px-2 py-1 bg-sage-green/10 rounded text-white text-sm">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'monitoring',
    label: 'Post-Launch Monitoring',
    icon: '/icons/analytics.svg',
    render: () => (
      <div className="space-y-4">
        <div>
          <h4 className="text-white font-medium mb-2">Automatic Tracking</h4>
          <ul className="list-disc list-inside text-white/80 space-y-1">
            <li>Click hotspots and engagement metrics</li>
            <li>Scroll depth analysis</li>
            <li>Time on page tracking</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-2">AI-Driven Optimization</h4>
          <ul className="list-disc list-inside text-white/80 space-y-1">
            <li>24-hour performance analysis</li>
            <li>Layout and content suggestions</li>
            <li>Competitor gap analysis</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'integrations',
    label: 'Integrations & Tools',
    icon: '/icons/analytics.svg',
    render: (data) => (
      <div className="space-y-4">
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
        <div>
          <h4 className="text-white font-medium mb-2">AI Crew Features</h4>
          <ul className="list-disc list-inside text-white/80 space-y-1">
            <li>Lieutenant SEO for ongoing optimization</li>
            <li>Commander Content for text refinements</li>
            <li>Captain SiteBuilder for layout updates</li>
          </ul>
        </div>
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

      {/* Next Steps */}
      <div className="p-6 border border-sage-green rounded-lg bg-sage-green/10">
        <h3 className="text-lg font-montserrat font-bold text-white mb-4">
          What Happens Next?
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-sage-green/20 flex items-center justify-center text-sage-green flex-shrink-0">
              1
            </div>
            <p className="text-white">
              Our AI crew will analyze your inputs and competitor data to generate your initial website design.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-sage-green/20 flex items-center justify-center text-sage-green flex-shrink-0">
              2
            </div>
            <p className="text-white">
              Lieutenant SEO will begin monitoring competitor activities and suggest optimizations.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-sage-green/20 flex items-center justify-center text-sage-green flex-shrink-0">
              3
            </div>
            <p className="text-white">
              You&apos;ll receive daily insights and suggestions to keep your site competitive and engaging.
            </p>
          </div>
        </div>
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
          className="btn-primary text-lg px-8 py-3 flex items-center gap-2"
        >
          Launch AI Build Process
          <Image
            src="/icons/launch.svg"
            alt="Launch"
            width={20}
            height={20}
            className="opacity-80"
          />
        </button>
      </div>
    </div>
  );
}
