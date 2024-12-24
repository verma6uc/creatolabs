'use client';

import { useState } from 'react';
import { WizardData } from '../OnboardingWizard';

type StepProps = {
  data: WizardData;
  setData: (data: WizardData) => void;
  onNext: () => void;
  onPrev: () => void;
};

const websitePurposes = [
  { id: 'ecommerce', label: 'eCommerce Store', description: 'Sell products online' },
  { id: 'portfolio', label: 'Portfolio', description: 'Showcase your work' },
  { id: 'blog', label: 'Blog', description: 'Share your thoughts and content' },
  { id: 'service', label: 'Service-based', description: 'Promote your services' },
  { id: 'business', label: 'Business Website', description: 'Company or organization site' },
  { id: 'personal', label: 'Personal Website', description: 'Your personal brand' },
];

export function StepProjectPurpose({ data, setData, onNext, onPrev }: StepProps) {
  const [errors, setErrors] = useState({
    websitePurpose: '',
    targetAudience: '',
  });

  const handlePurposeSelect = (purpose: string) => {
    setData({ ...data, websitePurpose: purpose });
    if (errors.websitePurpose) {
      setErrors({ ...errors, websitePurpose: '' });
    }
  };

  const handleAudienceChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({ ...data, targetAudience: e.target.value });
    if (errors.targetAudience) {
      setErrors({ ...errors, targetAudience: '' });
    }
  };

  const validate = () => {
    const newErrors = {
      websitePurpose: '',
      targetAudience: '',
    };

    if (!data.websitePurpose) {
      newErrors.websitePurpose = 'Please select a website purpose';
    }

    if (!data.targetAudience) {
      newErrors.targetAudience = 'Please describe your target audience';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <label className="block text-white font-medium">
          What is the primary purpose of your website?
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {websitePurposes.map((purpose) => (
            <button
              key={purpose.id}
              type="button"
              onClick={() => handlePurposeSelect(purpose.id)}
              className={`p-4 text-left border rounded-lg transition-all duration-300 ${
                data.websitePurpose === purpose.id
                  ? 'bg-sage-green/20 border-sage-green'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <h3 className="text-white font-medium mb-1">{purpose.label}</h3>
              <p className="text-white/60 text-sm">{purpose.description}</p>
            </button>
          ))}
        </div>
        {errors.websitePurpose && (
          <p className="text-red-500 text-sm mt-1">{errors.websitePurpose}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="targetAudience" className="block text-white font-medium">
          Who is your target audience?
        </label>
        <textarea
          id="targetAudience"
          value={data.targetAudience}
          onChange={handleAudienceChange}
          rows={3}
          className={`w-full px-4 py-3 bg-white/5 border ${
            errors.targetAudience ? 'border-red-500' : 'border-white/10'
          } rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-sage-green transition-colors`}
          placeholder="e.g., Tech-savvy millennials interested in sustainable fashion"
        />
        {errors.targetAudience && (
          <p className="text-red-500 text-sm mt-1">{errors.targetAudience}</p>
        )}
        <p className="text-white/60 text-sm">
          This helps us tailor the content and design to your audience&apos;s preferences.
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
          type="submit"
          className="btn-primary text-lg"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
