'use client';

import { useState, useEffect } from 'react';
import { LoadingOverlay } from './LoadingOverlay';
import { MockLayouts } from './MockLayouts';
import { AILogs } from './AILogs';
import Link from 'next/link';

type SimulationStep = 
  | 'input'
  | 'analysis'
  | 'blueprint'
  | 'design'
  | 'evolution';

export function AISimulation() {
  const [currentStep, setCurrentStep] = useState<SimulationStep>('input');
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const handleNextStep = () => {
    const steps: SimulationStep[] = ['input', 'analysis', 'blueprint', 'design', 'evolution'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setShowContent(false);
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(true);
        setIsExiting(false);
        setTimeout(() => {
          setIsLoading(false);
          setCurrentStep(steps[currentIndex + 1]);
        }, 1500);
      }, 500);
    }
  };

  const stepTitles = {
    input: 'Step 1: User Input',
    analysis: 'Step 2: AI Analysis',
    blueprint: 'Step 3: Blueprint Generation',
    design: 'Step 4: Design Implementation',
    evolution: 'Step 5: Continuous Evolution',
  };

  return (
    <div className="relative min-h-screen bg-dark-bg/50 backdrop-blur-sm">
      {isLoading && <LoadingOverlay />}
      
      <div className="container mx-auto px-6 py-12">
        <div 
          className={`space-y-8 transition-all duration-500 ${
            isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          } ${showContent ? 'translate-y-0' : 'translate-y-4'}`}
        >
          {/* Step Title */}
          <div className={`text-center transition-all duration-500 delay-100 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
              {stepTitles[currentStep]}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              {currentStep === 'input' && 'Collecting information about your website vision...'}
              {currentStep === 'analysis' && 'Analyzing competitors and generating insights...'}
              {currentStep === 'blueprint' && 'Creating your website structure...'}
              {currentStep === 'design' && 'Applying design elements and content...'}
              {currentStep === 'evolution' && 'Demonstrating real-time updates and improvements...'}
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Preview Area */}
            <div className={`lg:col-span-3 transition-all duration-500 delay-200 ${
              showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
              <MockLayouts step={currentStep} />
            </div>

            {/* AI Logs */}
            <div className={`lg:col-span-2 transition-all duration-500 delay-300 ${
              showContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}>
              <AILogs step={currentStep} />
            </div>
          </div>

          {/* Navigation */}
          <div className={`flex justify-between items-center pt-8 transition-all duration-500 delay-400 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-white/60">
              Step {['input', 'analysis', 'blueprint', 'design', 'evolution'].indexOf(currentStep) + 1} of 5
            </div>
            <div className="flex gap-4">
              {currentStep === 'evolution' ? (
                <Link 
                  href="/get-started"
                  className="btn-primary relative overflow-hidden group animate-pulse-glow"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
              ) : (
                <button 
                  onClick={handleNextStep}
                  disabled={isExiting || isLoading}
                  className="btn-primary relative overflow-hidden group"
                >
                  <span className="relative z-10">Next Step</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
