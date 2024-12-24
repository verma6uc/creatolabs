'use client';

import { useState } from 'react';
import { WizardData } from '../OnboardingWizard';

type StepProps = {
  data: WizardData;
  setData: (data: WizardData) => void;
  onNext: () => void;
  onPrev: () => void;
};

type ColorPalette = {
  id: string;
  name: string;
  colors: string[];
  description: string;
};

const colorPalettes: ColorPalette[] = [
  {
    id: 'modern',
    name: 'Modern & Clean',
    colors: ['#2D3748', '#4A5568', '#A0AEC0', '#F7FAFC'],
    description: 'Professional and minimalist',
  },
  {
    id: 'vibrant',
    name: 'Vibrant & Bold',
    colors: ['#2D3436', '#E17055', '#00B894', '#FD79A8'],
    description: 'Energetic and eye-catching',
  },
  {
    id: 'natural',
    name: 'Natural & Earthy',
    colors: ['#4B5842', '#8B7355', '#A9845C', '#F0EAD6'],
    description: 'Organic and calming',
  },
  {
    id: 'elegant',
    name: 'Elegant & Luxurious',
    colors: ['#1A1A1A', '#C9B037', '#D4AF37', '#F5F5F5'],
    description: 'Sophisticated and premium',
  },
  {
    id: 'playful',
    name: 'Playful & Creative',
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96E6B3'],
    description: 'Fun and imaginative',
  },
  {
    id: 'tech',
    name: 'Tech & Future',
    colors: ['#2B2D42', '#8D99AE', '#00B4D8', '#48CAE4'],
    description: 'Modern and innovative',
  },
];

export function StepColorTheme({ data, setData, onNext, onPrev }: StepProps) {
  const [errors, setErrors] = useState('');

  const handlePaletteSelect = (paletteId: string) => {
    setData({ ...data, colorPalette: paletteId });
    setErrors('');
  };

  const handleThemeChange = (theme: 'light' | 'dark') => {
    setData({ ...data, themePreference: theme });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.colorPalette) {
      setErrors('Please select a color palette');
      return;
    }
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Color Palettes */}
      <div className="space-y-4">
        <label className="block text-white font-medium">
          Choose a color palette
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {colorPalettes.map((palette) => (
            <button
              key={palette.id}
              type="button"
              onClick={() => handlePaletteSelect(palette.id)}
              className={`p-4 text-left border rounded-lg transition-all duration-300 ${
                data.colorPalette === palette.id
                  ? 'bg-sage-green/20 border-sage-green'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <h3 className="text-white font-medium mb-2">{palette.name}</h3>
              <div className="flex gap-2 mb-2">
                {palette.colors.map((color) => (
                  <div
                    key={color}
                    className="w-8 h-8 rounded-full border border-white/10"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <p className="text-white/60 text-sm">{palette.description}</p>
            </button>
          ))}
        </div>
        {errors && (
          <p className="text-red-500 text-sm mt-1">{errors}</p>
        )}
      </div>

      {/* Theme Preference */}
      <div className="space-y-4">
        <label className="block text-white font-medium">
          Theme Preference
        </label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => handleThemeChange('light')}
            className={`flex-1 p-4 border rounded-lg transition-all duration-300 ${
              data.themePreference === 'light'
                ? 'bg-sage-green/20 border-sage-green'
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
          >
            <h3 className="text-white font-medium mb-1">Light Theme</h3>
            <p className="text-white/60 text-sm">Bright and clean appearance</p>
          </button>
          <button
            type="button"
            onClick={() => handleThemeChange('dark')}
            className={`flex-1 p-4 border rounded-lg transition-all duration-300 ${
              data.themePreference === 'dark'
                ? 'bg-sage-green/20 border-sage-green'
                : 'bg-white/5 border-white/10 hover:border-white/20'
            }`}
          >
            <h3 className="text-white font-medium mb-1">Dark Theme</h3>
            <p className="text-white/60 text-sm">Modern and sleek appearance</p>
          </button>
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
          type="submit"
          className="btn-primary text-lg"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
