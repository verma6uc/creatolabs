'use client';

import { useState } from 'react';
import Image from 'next/image';
import { WizardData } from '../OnboardingWizard';

type StepProps = {
  data: WizardData;
  setData: (data: WizardData) => void;
  onNext: () => void;
  onPrev: () => void;
};

type PreviewSection = {
  id: string;
  label: string;
  description: string;
  icon: string;
};

const previewSections: PreviewSection[] = [
  {
    id: 'layout',
    label: 'Layout & Structure',
    description: 'Page organization and navigation',
    icon: '/icons/design-bot.svg',
  },
  {
    id: 'design',
    label: 'Design & Aesthetics',
    description: 'Colors, themes, and visual elements',
    icon: '/icons/design-bot.svg',
  },
  {
    id: 'content',
    label: 'Content & Tone',
    description: 'Text and messaging style',
    icon: '/icons/content-bot.svg',
  },
];

export function StepPreviewFeedback({ data, onNext, onPrev }: StepProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentPreview, setCurrentPreview] = useState('layout');
  const [aiSuggestions, setAiSuggestions] = useState<{
    layout: Array<{
      element: string;
      suggestion: string;
      impact: string;
    }>;
    design: Array<{
      element: string;
      suggestion: string;
      impact: string;
    }>;
    content: Array<{
      element: string;
      suggestion: string;
      impact: string;
    }>;
  }>({
    layout: [],
    design: [],
    content: []
  });
  const [versions, setVersions] = useState<{
    current: number;
    history: Array<{
      id: number;
      timestamp: string;
      changes: string[];
    }>;
  }>({
    current: 1,
    history: [
      {
        id: 1,
        timestamp: new Date().toISOString(),
        changes: ['Initial version']
      }
    ]
  });

  const handlePreviewGenerate = async () => {
    setIsGenerating(true);
    
    // Simulate AI analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate AI suggestions
    setAiSuggestions({
      layout: [
        {
          element: 'Navigation',
          suggestion: 'Move the contact button to the top right for better visibility',
          impact: 'Could improve conversion rates by 15%'
        },
        {
          element: 'Hero Section',
          suggestion: 'Add a clear call-to-action above the fold',
          impact: 'Expected to increase engagement by 25%'
        }
      ],
      design: [
        {
          element: 'Color Scheme',
          suggestion: 'Increase contrast between background and text',
          impact: 'Improves accessibility and readability'
        },
        {
          element: 'Typography',
          suggestion: 'Use larger font size for headlines',
          impact: 'Better visual hierarchy and scannability'
        }
      ],
      content: [
        {
          element: 'Value Proposition',
          suggestion: 'Make the headline more action-oriented',
          impact: 'Could improve user understanding and conversion'
        },
        {
          element: 'Features Section',
          suggestion: 'Add specific benefit statements to each feature',
          impact: 'Helps users understand practical value'
        }
      ]
    });

    // Add new version to history
    const newVersion = {
      id: versions.current + 1,
      timestamp: new Date().toISOString(),
      changes: ['Updated layout based on AI suggestions', 'Improved content structure']
    };

    setVersions(prev => ({
      current: prev.current + 1,
      history: [...prev.history, newVersion]
    }));

    setIsGenerating(false);
  };

  const handleVersionRevert = (versionId: number) => {
    setVersions(prev => ({
      ...prev,
      current: versionId
    }));
  };

  const getPreviewContent = () => {
    if (isGenerating) {
      return (
        <div className="flex flex-col items-center justify-center h-[400px] bg-white/5 rounded-lg">
          <div className="w-8 h-8 border-2 border-sage-green border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-white/60">Generating preview...</p>
        </div>
      );
    }

    switch (currentPreview) {
      case 'layout':
        return (
          <div className="space-y-4">
            <h4 className="text-white font-medium">Selected Pages:</h4>
            <div className="grid grid-cols-2 gap-4">
              {data.selectedPages.map((page) => (
                <div key={page} className="p-3 bg-white/5 rounded-lg">
                  <span className="text-white">{page}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'design':
        return (
          <div className="space-y-4">
            <h4 className="text-white font-medium">Color Scheme & Theme:</h4>
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-white mb-2">Selected palette: {data.colorPalette}</p>
              <p className="text-white">Theme preference: {data.themePreference}</p>
            </div>
          </div>
        );
      case 'content':
        return (
          <div className="space-y-4">
            <h4 className="text-white font-medium">Brand Voice:</h4>
            <div className="p-4 bg-white/5 rounded-lg">
              <p className="text-white mb-2">Tone: {data.brandTone}</p>
              {data.slogans.length > 0 && (
                <div>
                  <p className="text-white mb-2">Key phrases:</p>
                  <ul className="list-disc list-inside text-white/80">
                    {data.slogans.map((slogan) => (
                      <li key={slogan}>{slogan}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
          Your Website Blueprint
        </h2>
        <p className="text-white/80">
          Review your choices and see how they come together.
        </p>
      </div>

      {/* Preview Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {previewSections.map((section) => (
          <button
            key={section.id}
            onClick={() => setCurrentPreview(section.id)}
            className={`p-4 text-left border rounded-lg transition-all duration-300 ${
              currentPreview === section.id
                ? 'bg-sage-green/20 border-sage-green'
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-start gap-3">
              <Image
                src={section.icon}
                alt={section.label}
                width={24}
                height={24}
                className="mt-1"
              />
              <div>
                <h3 className="text-white font-medium mb-1">{section.label}</h3>
                <p className="text-white/60 text-sm">{section.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Version History */}
      <div className="border border-white/10 rounded-lg p-4">
        <h3 className="text-white font-medium mb-3">Version History</h3>
        <div className="space-y-2">
          {versions.history.map((version) => (
            <div
              key={version.id}
              className={`p-3 rounded-lg flex items-center justify-between ${
                version.id === versions.current
                  ? 'bg-sage-green/20 border border-sage-green'
                  : 'bg-white/5'
              }`}
            >
              <div>
                <div className="text-white text-sm mb-1">
                  Version {version.id} - {new Date(version.timestamp).toLocaleString()}
                </div>
                <ul className="text-white/60 text-sm">
                  {version.changes.map((change, i) => (
                    <li key={i}>{change}</li>
                  ))}
                </ul>
              </div>
              {version.id !== versions.current && (
                <button
                  onClick={() => handleVersionRevert(version.id)}
                  className="px-3 py-1 bg-white/5 rounded text-white text-sm hover:bg-white/10 transition-colors"
                >
                  Revert
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Preview Area with AI Suggestions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="min-h-[400px] border border-white/10 rounded-lg p-6">
          {getPreviewContent()}
        </div>
        
        <div className="border border-white/10 rounded-lg p-6">
          <h3 className="text-white font-medium mb-4">AI Suggestions</h3>
          {aiSuggestions[currentPreview as keyof typeof aiSuggestions].map((suggestion, index) => (
            <div key={index} className="mb-4 p-4 bg-white/5 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-white font-medium">{suggestion.element}</h4>
                <span className="text-sage-green text-sm">{suggestion.impact}</span>
              </div>
              <p className="text-white/80">{suggestion.suggestion}</p>
            </div>
          ))}
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
        <div className="flex gap-4">
          <button
            type="button"
            onClick={handlePreviewGenerate}
            className="px-6 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            Regenerate Preview
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
    </div>
  );
}
