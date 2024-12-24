'use client';

import { useState, useEffect } from 'react';
import { AnimatedBackground } from '../shared/AnimatedBackground';
import { StepBasicInfo } from './steps/StepBasicInfo';
import { StepProjectPurpose } from './steps/StepProjectPurpose';
import { StepCompetitors } from './steps/StepCompetitors';
import { StepPagesStructure } from './steps/StepPagesStructure';
import { StepColorTheme } from './steps/StepColorTheme';
import { StepContentTone } from './steps/StepContentTone';
import { StepPreviewFeedback } from './steps/StepPreviewFeedback';
import { StepAdditionalInfo } from './steps/StepAdditionalInfo';
import { StepConfirmation } from './steps/StepConfirmation';

export type WizardData = {
  email: string;
  projectName: string;
  websitePurpose: string;
  targetAudience: string;
  competitorUrls: string[];
  brandKeywords: string[];
  selectedPages: string[];
  additionalPages: string[];
  colorPalette: string;
  themePreference: 'light' | 'dark';
  brandTone: string;
  slogans: string[];
  integrations: string[];
  analyticsTools: string[];
};

const initialData: WizardData = {
  email: '',
  projectName: '',
  websitePurpose: '',
  targetAudience: '',
  competitorUrls: [],
  brandKeywords: [],
  selectedPages: [],
  additionalPages: [],
  colorPalette: '',
  themePreference: 'light',
  brandTone: '',
  slogans: [],
  integrations: [],
  analyticsTools: [],
};

export function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [wizardData, setWizardData] = useState<WizardData>(initialData);

  useEffect(() => {
    console.log('OnboardingWizard mounted');
  }, []);

  useEffect(() => {
    console.log('Current step changed to:', currentStep);
  }, [currentStep]);

  useEffect(() => {
    console.log('Wizard data updated:', wizardData);
  }, [wizardData]);

  const steps = [
    {
      component: StepBasicInfo,
      title: 'Basic Information',
      description: "Let's start with the essentials",
    },
    {
      component: StepProjectPurpose,
      title: 'Project Purpose & Audience',
      description: 'Tell us about your goals',
    },
    {
      component: StepCompetitors,
      title: 'Inspiration & References',
      description: 'Share your inspirations',
    },
    {
      component: StepPagesStructure,
      title: 'Website Structure',
      description: 'Choose your pages',
    },
    {
      component: StepColorTheme,
      title: 'Design Preferences',
      description: 'Pick your style',
    },
    {
      component: StepContentTone,
      title: 'Content & Tone',
      description: 'Define your voice',
    },
    {
      component: StepPreviewFeedback,
      title: 'Quick Preview',
      description: 'See your site taking shape',
    },
    {
      component: StepAdditionalInfo,
      title: 'Additional Features',
      description: 'Optional enhancements',
    },
    {
      component: StepConfirmation,
      title: 'All Set!',
      description: 'Review your choices',
    },
  ];

  const goNext = () => {
    console.log('goNext called, current step:', currentStep);
    if (currentStep < steps.length - 1) {
      console.log('Moving to next step');
      setCurrentStep(prev => {
        console.log('Setting current step to:', prev + 1);
        return prev + 1;
      });
      window.scrollTo(0, 0);
    }
  };

  const goPrev = () => {
    console.log('goPrev called, current step:', currentStep);
    if (currentStep > 0) {
      console.log('Moving to previous step');
      setCurrentStep(prev => {
        console.log('Setting current step to:', prev - 1);
        return prev - 1;
      });
      window.scrollTo(0, 0);
    }
  };

  const handleComplete = () => {
    console.log('Wizard completed with data:', wizardData);
  };

  const handleDataUpdate = (newData: WizardData) => {
    console.log('Updating wizard data:', newData);
    setWizardData(newData);
  };

  console.log('Rendering OnboardingWizard, current step:', currentStep);
  const CurrentStepComponent = steps[currentStep].component;

  return (
    <main className="min-h-screen bg-dark-bg">
      <div className="relative">
        <AnimatedBackground 
          variant="gradient"
          opacity="opacity-40"
          showFloatingElements={true}
        />

        <div className="relative z-20 container mx-auto px-6 py-12">
          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-montserrat font-bold text-white">
                {steps[currentStep].title}
              </h2>
              <span className="text-white/60">
                Step {currentStep + 1} of {steps.length}
              </span>
            </div>
            <div className="h-1 bg-white/10 rounded-full">
              <div 
                className="h-full bg-sage-green rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            <p className="text-white/60 mt-2">
              {steps[currentStep].description}
            </p>
          </div>

          {/* Step Content */}
          <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-700">
            <CurrentStepComponent 
              data={wizardData}
              setData={handleDataUpdate}
              onNext={currentStep === steps.length - 1 ? handleComplete : goNext}
              onPrev={goPrev}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
