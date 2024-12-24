'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatedBackground } from '../shared/AnimatedBackground';
import { AILogs } from '../Simulation/AILogs';
import { MockLayouts } from '../Simulation/MockLayouts';

type SimulationStep = 'input' | 'analysis' | 'blueprint' | 'design' | 'evolution';

export function SimulationSection() {
  const [mounted, setMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState<SimulationStep>('input');
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const steps: SimulationStep[] = ['input', 'analysis', 'blueprint', 'design', 'evolution'];
      let currentIndex = 0;

      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % steps.length;
        setCurrentStep(steps[currentIndex]);
      }, 5000); // Change step every 5 seconds

      return () => clearInterval(interval);
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <section 
        id="simulation"
        className="relative w-full min-h-screen flex items-center justify-center"
      >
        <AnimatedBackground 
          variant="solid"
          opacity="opacity-100"
          showFloatingElements={false}
        />
        <div className="relative z-20">
          <div className="w-8 h-8 border-2 border-sage-green border-t-transparent rounded-full animate-spin" />
        </div>
      </section>
    );
  }

  const handleStepClick = (step: SimulationStep) => {
    setCurrentStep(step);
  };

  return (
    <section 
      id="simulation"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center py-24"
    >
      <AnimatedBackground 
        variant="solid"
        opacity="opacity-100"
        showFloatingElements={false}
      />

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-30 container mx-auto px-6"
      >
        <div className="glass-card max-w-6xl mx-auto p-8 md:p-12 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-700">
          {/* Content */}
          <div className="relative z-30 space-y-12">
            <div className="text-center mb-12">
              <div className="w-16 h-16 mx-auto mb-6">
                <Image
                  src="/icons/design-bot.svg"
                  alt="Design Bot"
                  width={64}
                  height={64}
                  className="animate-float"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
                Website Creation Simulation
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Watch as our AI transforms your vision into a living website through a series of intelligent steps.
              </p>
            </div>

            {/* Simulation Display */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Side - AI Logs */}
              <div className="space-y-4">
                <h3 className="text-xl font-montserrat font-bold text-white mb-4">
                  AI Agents at Work
                </h3>
                <AILogs step={currentStep} />
              </div>

              {/* Right Side - Visual Preview */}
              <div className="space-y-4">
                <h3 className="text-xl font-montserrat font-bold text-white mb-4">
                  Website Preview
                </h3>
                <MockLayouts step={currentStep} />
              </div>
            </div>

            {/* Step Indicators */}
            <div className="flex justify-center gap-4 mt-8">
              {(['input', 'analysis', 'blueprint', 'design', 'evolution'] as SimulationStep[]).map((step) => (
                <button
                  key={step}
                  onClick={() => handleStepClick(step)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentStep === step ? 'bg-sage-green scale-125' : 'bg-white/20'
                  }`}
                  aria-label={`Switch to ${step} step`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
