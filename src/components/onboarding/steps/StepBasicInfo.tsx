'use client';

import { useState, useEffect } from 'react';
import { WizardData } from '../OnboardingWizard';

type StepProps = {
  data: WizardData;
  setData: (data: WizardData) => void;
  onNext: () => void;
  onPrev: () => void;
};

export function StepBasicInfo({ data, setData, onNext }: StepProps) {
  const [errors, setErrors] = useState({
    email: '',
    projectName: '',
  });
  const [suggestions, setSuggestions] = useState<{
    projectNames: string[];
    showSuggestions: boolean;
  }>({
    projectNames: [
      "Modern Coffee House",
      "Tech Solutions Hub",
      "Creative Portfolio",
      "Fitness Studio Pro",
      "Local Restaurant Guide"
    ],
    showSuggestions: false
  });

  const handleSuggestionClick = (name: string) => {
    setData({ ...data, projectName: name });
    setSuggestions(prev => ({ ...prev, showSuggestions: false }));
  };

  const showProjectSuggestions = () => {
    setSuggestions(prev => ({ ...prev, showSuggestions: true }));
  };

  useEffect(() => {
    console.log('StepBasicInfo mounted with data:', data);
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log('Input changed:', name, value);
    const newData = { ...data, [name]: value };
    console.log('Setting new data:', newData);
    setData(newData);
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    console.log('Validating form data:', data);
    const newErrors = {
      email: '',
      projectName: '',
    };

    if (!data.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!data.projectName) {
      newErrors.projectName = 'Project name is required';
    }

    setErrors(newErrors);
    const isValid = !Object.values(newErrors).some(error => error);
    console.log('Validation result:', isValid, newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', data);
    if (validate()) {
      console.log('Form is valid, proceeding to next step');
      onNext();
    }
  };

  const handleNextClick = (e: React.MouseEvent) => {
    console.log('Next button clicked');
    e.preventDefault();
    e.stopPropagation();
    if (validate()) {
      console.log('Form is valid, proceeding to next step');
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-white font-medium">
          What&apos;s your email?
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-dark-bg border ${
            errors.email ? 'border-red-500' : 'border-white/20'
          } rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-sage-green focus:bg-dark-surface transition-colors`}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
        <p className="text-white/60 text-sm">
          We&apos;ll use this to send you updates about your website.
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="projectName" className="block text-white font-medium">
          What would you like to call your website/project?
        </label>
        <div className="relative">
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={data.projectName}
            onChange={handleChange}
            onFocus={showProjectSuggestions}
            className={`w-full px-4 py-3 bg-dark-bg border ${
              errors.projectName ? 'border-red-500' : 'border-white/20'
            } rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-sage-green focus:bg-dark-surface transition-colors`}
            placeholder="e.g., Artsy Portfolio, Coffee Shop Site"
          />
          {suggestions.showSuggestions && (
            <div className="absolute z-10 w-full mt-1 bg-dark-surface border border-white/20 rounded-lg shadow-lg">
              <div className="p-2 text-white/60 text-sm border-b border-white/10">
                Captain SiteBuilder suggests:
              </div>
              {suggestions.projectNames.map((name) => (
                <button
                  key={name}
                  onClick={() => handleSuggestionClick(name)}
                  className="w-full px-4 py-2 text-left text-white hover:bg-sage-green/10 transition-colors"
                >
                  {name}
                </button>
              ))}
            </div>
          )}
        </div>
        {errors.projectName && (
          <p className="text-red-500 text-sm mt-1">{errors.projectName}</p>
        )}
        <p className="text-white/60 text-sm flex items-center gap-2">
          <span className="text-sage-green">💡</span>
          Click to see AI-suggested project names based on common website types
        </p>
      </div>

      <div className="flex justify-end pt-8">
        <button
          type="button"
          onClick={handleNextClick}
          className="btn-primary text-lg px-8 py-3 flex items-center justify-center min-w-[150px] hover:bg-sage-green/90 active:bg-sage-green/80 transition-all duration-200"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
