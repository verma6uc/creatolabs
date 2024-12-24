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

  const handlePreviewGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation delay
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
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

      {/* Preview Area */}
      <div className="min-h-[400px] border border-white/10 rounded-lg p-6">
        {getPreviewContent()}
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
