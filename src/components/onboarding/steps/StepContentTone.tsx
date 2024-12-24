'use client';

import { useState } from 'react';
import { WizardData } from '../OnboardingWizard';

type StepProps = {
  data: WizardData;
  setData: (data: WizardData) => void;
  onNext: () => void;
  onPrev: () => void;
};

type ToneOption = {
  id: string;
  label: string;
  description: string;
  example: string;
};

const toneOptions: ToneOption[] = [
  {
    id: 'professional',
    label: 'Professional',
    description: 'Formal and business-oriented',
    example: 'We deliver exceptional results through proven methodologies.',
  },
  {
    id: 'casual',
    label: 'Casual & Friendly',
    description: 'Approachable and conversational',
    example: "Hey there! Let's create something amazing together.",
  },
  {
    id: 'quirky',
    label: 'Quirky & Fun',
    description: 'Playful and entertaining',
    example: 'Ready to add some sparkle to your digital presence? ✨',
  },
  {
    id: 'luxurious',
    label: 'Luxurious',
    description: 'Sophisticated and premium',
    example: 'Experience unparalleled excellence in every detail.',
  },
  {
    id: 'technical',
    label: 'Technical',
    description: 'Precise and detailed',
    example: 'Leveraging cutting-edge technology for optimal performance.',
  },
  {
    id: 'minimalist',
    label: 'Minimalist',
    description: 'Simple and straightforward',
    example: 'Less is more.',
  },
];

export function StepContentTone({ data, setData, onNext, onPrev }: StepProps) {
  const [newSlogan, setNewSlogan] = useState('');
  const [errors, setErrors] = useState({
    tone: '',
    slogans: '',
  });

  const handleToneSelect = (tone: string) => {
    setData({ ...data, brandTone: tone });
    setErrors({ ...errors, tone: '' });
  };

  const handleSloganAdd = () => {
    if (newSlogan.trim()) {
      setData({
        ...data,
        slogans: [...data.slogans, newSlogan.trim()],
      });
      setNewSlogan('');
      setErrors({ ...errors, slogans: '' });
    }
  };

  const handleSloganRemove = (sloganToRemove: string) => {
    setData({
      ...data,
      slogans: data.slogans.filter(slogan => slogan !== sloganToRemove),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      tone: '',
      slogans: '',
    };

    if (!data.brandTone) {
      newErrors.tone = 'Please select a brand tone';
    }

    setErrors(newErrors);
    if (!Object.values(newErrors).some(error => error)) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Brand Tone */}
      <div className="space-y-4">
        <label className="block text-white font-medium">
          What is your brand's tone of voice?
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {toneOptions.map((tone) => (
            <button
              key={tone.id}
              type="button"
              onClick={() => handleToneSelect(tone.id)}
              className={`p-4 text-left border rounded-lg transition-all duration-300 ${
                data.brandTone === tone.id
                  ? 'bg-sage-green/20 border-sage-green'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <h3 className="text-white font-medium mb-1">{tone.label}</h3>
              <p className="text-white/60 text-sm mb-2">{tone.description}</p>
              <p className="text-white/80 text-sm italic">"{tone.example}"</p>
            </button>
          ))}
        </div>
        {errors.tone && (
          <p className="text-red-500 text-sm mt-1">{errors.tone}</p>
        )}
      </div>

      {/* Slogans */}
      <div className="space-y-4">
        <label className="block text-white font-medium">
          Add key phrases or slogans for your homepage
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={newSlogan}
            onChange={(e) => setNewSlogan(e.target.value)}
            placeholder="e.g., Transform your digital presence"
            className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-sage-green transition-colors"
          />
          <button
            type="button"
            onClick={handleSloganAdd}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            Add
          </button>
        </div>
        {data.slogans.length > 0 && (
          <div className="space-y-2">
            {data.slogans.map((slogan) => (
              <div key={slogan} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span className="text-white">{slogan}</span>
                <button
                  type="button"
                  onClick={() => handleSloganRemove(slogan)}
                  className="text-white/60 hover:text-red-500 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <p className="text-white/60 text-sm">
          Optional: Add memorable phrases that capture your brand's essence.
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
