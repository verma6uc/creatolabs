'use client';

import { useState } from 'react';
import { WizardData } from '../OnboardingWizard';

type StepProps = {
  data: WizardData;
  setData: (data: WizardData) => void;
  onNext: () => void;
  onPrev: () => void;
};

const brandKeywordSuggestions = [
  'Minimal', 'Playful', 'Luxurious', 'Modern', 'Traditional',
  'Bold', 'Elegant', 'Professional', 'Creative', 'Innovative',
  'Friendly', 'Trustworthy', 'Eco-friendly', 'Tech-savvy', 'Artistic'
];

export function StepCompetitors({ data, setData, onNext, onPrev }: StepProps) {
  const [newUrl, setNewUrl] = useState('');
  const [newKeyword, setNewKeyword] = useState('');
  const [errors, setErrors] = useState({
    urls: '',
    keywords: '',
  });

  const handleUrlAdd = () => {
    if (newUrl && isValidUrl(newUrl)) {
      setData({
        ...data,
        competitorUrls: [...data.competitorUrls, newUrl],
      });
      setNewUrl('');
      setErrors({ ...errors, urls: '' });
    } else {
      setErrors({ ...errors, urls: 'Please enter a valid URL' });
    }
  };

  const handleUrlRemove = (urlToRemove: string) => {
    setData({
      ...data,
      competitorUrls: data.competitorUrls.filter(url => url !== urlToRemove),
    });
  };

  const handleKeywordAdd = (keyword: string = newKeyword) => {
    if (keyword && !data.brandKeywords.includes(keyword)) {
      setData({
        ...data,
        brandKeywords: [...data.brandKeywords, keyword],
      });
      setNewKeyword('');
      setErrors({ ...errors, keywords: '' });
    }
  };

  const handleKeywordRemove = (keywordToRemove: string) => {
    setData({
      ...data,
      brandKeywords: data.brandKeywords.filter(k => k !== keywordToRemove),
    });
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.brandKeywords.length === 0) {
      setErrors({ ...errors, keywords: 'Please add at least one brand keyword' });
      return;
    }
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Competitor URLs */}
      <div className="space-y-4">
        <label className="block text-white font-medium">
          Do you have any competitor sites or inspirations we should analyze?
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            placeholder="https://example.com"
            className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-sage-green transition-colors"
          />
          <button
            type="button"
            onClick={handleUrlAdd}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            Add
          </button>
        </div>
        {errors.urls && (
          <p className="text-red-500 text-sm">{errors.urls}</p>
        )}
        {data.competitorUrls.length > 0 && (
          <div className="space-y-2">
            {data.competitorUrls.map((url) => (
              <div key={url} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <span className="text-white truncate">{url}</span>
                <button
                  type="button"
                  onClick={() => handleUrlRemove(url)}
                  className="text-white/60 hover:text-red-500 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <p className="text-white/60 text-sm">
          Optional: Add URLs of websites you like or want to compete with.
        </p>
      </div>

      {/* Brand Keywords */}
      <div className="space-y-4">
        <label className="block text-white font-medium">
          What keywords or brand adjectives describe your style?
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
            placeholder="e.g., Modern, Professional"
            className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-sage-green transition-colors"
          />
          <button
            type="button"
            onClick={() => handleKeywordAdd()}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            Add
          </button>
        </div>
        {errors.keywords && (
          <p className="text-red-500 text-sm">{errors.keywords}</p>
        )}
        
        {/* Keyword Suggestions */}
        <div className="flex flex-wrap gap-2">
          {brandKeywordSuggestions
            .filter(keyword => !data.brandKeywords.includes(keyword))
            .map((keyword) => (
              <button
                key={keyword}
                type="button"
                onClick={() => handleKeywordAdd(keyword)}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white text-sm hover:bg-white/10 transition-colors"
              >
                {keyword}
              </button>
            ))}
        </div>

        {/* Selected Keywords */}
        {data.brandKeywords.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {data.brandKeywords.map((keyword) => (
              <div
                key={keyword}
                className="px-3 py-1 bg-sage-green/20 border border-sage-green rounded-full text-white text-sm flex items-center gap-2"
              >
                {keyword}
                <button
                  type="button"
                  onClick={() => handleKeywordRemove(keyword)}
                  className="text-white/60 hover:text-red-500 transition-colors"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
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
