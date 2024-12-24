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
  const [competitorAnalysis, setCompetitorAnalysis] = useState<{
    loading: boolean;
    insights: Array<{
      url: string;
      traffic: string;
      topKeywords: string[];
      commonPages: string[];
    }>;
  }>({
    loading: false,
    insights: []
  });

  // Simulated competitor analysis
  const analyzeCompetitor = async (url: string) => {
    setCompetitorAnalysis(prev => ({ ...prev, loading: true }));
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const mockInsight = {
      url,
      traffic: Math.floor(Math.random() * 50000 + 10000) + " monthly visits",
      topKeywords: ["website builder", "AI website", "custom website", "business website"],
      commonPages: ["Features", "Pricing", "Blog", "About", "Contact", "FAQ"]
    };

    setCompetitorAnalysis(prev => ({
      loading: false,
      insights: [...prev.insights, mockInsight]
    }));
  };

  const handleUrlAdd = async () => {
    if (newUrl && isValidUrl(newUrl)) {
      setData({
        ...data,
        competitorUrls: [...data.competitorUrls, newUrl],
      });
      setNewUrl('');
      setErrors({ ...errors, urls: '' });
      await analyzeCompetitor(newUrl);
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
        {competitorAnalysis.loading && (
          <div className="p-4 text-white/60 text-center">
            Lieutenant SEO is analyzing competitor data...
          </div>
        )}
        
        {data.competitorUrls.length > 0 && (
          <div className="space-y-4">
            {competitorAnalysis.insights.map((insight) => (
              <div key={insight.url} className="p-4 bg-white/5 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white truncate">{insight.url}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-white/60 text-sm">{insight.traffic}</span>
                    <button
                      type="button"
                      onClick={() => handleUrlRemove(insight.url)}
                      className="text-white/60 hover:text-red-500 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                
                <div className="border-t border-white/10 pt-3">
                  <div className="text-sm text-white/60 mb-2">Common Pages:</div>
                  <div className="flex flex-wrap gap-2">
                    {insight.commonPages.map(page => (
                      <span key={page} className="px-2 py-1 bg-white/10 rounded text-sm text-white">
                        {page}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3">
                  <div className="text-sm text-white/60 mb-2">Top Keywords:</div>
                  <div className="flex flex-wrap gap-2">
                    {insight.topKeywords.map(keyword => (
                      <span key={keyword} className="px-2 py-1 bg-sage-green/10 rounded text-sm text-white">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <span className="text-sage-green">💡</span>
          <p>
            Lieutenant SEO will analyze competitors using SEMrush and Ahrefs data to suggest optimal page structure and keywords.
          </p>
        </div>
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
