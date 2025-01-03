'use client';

import { useState, useEffect } from 'react';
import { WizardData } from '../OnboardingWizard';

type StepProps = {
  data: WizardData;
  setData: (data: WizardData) => void;
  onNext: () => void;
  onPrev: () => void;
};

type PageOption = {
  id: string;
  label: string;
  description: string;
  recommended?: boolean;
};

const getRecommendedPages = (purpose: string): PageOption[] => {
  const commonPages = [
    { id: 'home', label: 'Home', description: 'Main landing page', recommended: true },
    { id: 'about', label: 'About', description: 'Company/personal information', recommended: true },
    { id: 'contact', label: 'Contact', description: 'Contact information and form', recommended: true },
  ];

  const purposeSpecificPages: Record<string, PageOption[]> = {
    ecommerce: [
      { id: 'products', label: 'Products', description: 'Product catalog', recommended: true },
      { id: 'cart', label: 'Shopping Cart', description: 'Cart and checkout', recommended: true },
      { id: 'categories', label: 'Categories', description: 'Product categories', recommended: true },
    ],
    portfolio: [
      { id: 'projects', label: 'Projects', description: 'Portfolio items', recommended: true },
      { id: 'services', label: 'Services', description: 'Services offered', recommended: true },
      { id: 'testimonials', label: 'Testimonials', description: 'Client feedback', recommended: true },
    ],
    blog: [
      { id: 'blog', label: 'Blog', description: 'Blog posts list', recommended: true },
      { id: 'categories', label: 'Categories', description: 'Blog categories', recommended: true },
      { id: 'subscribe', label: 'Subscribe', description: 'Newsletter signup', recommended: true },
    ],
    service: [
      { id: 'services', label: 'Services', description: 'Services offered', recommended: true },
      { id: 'pricing', label: 'Pricing', description: 'Service pricing', recommended: true },
      { id: 'booking', label: 'Book Now', description: 'Service booking', recommended: true },
    ],
    business: [
      { id: 'services', label: 'Services', description: 'Services offered', recommended: true },
      { id: 'team', label: 'Team', description: 'Team members', recommended: true },
      { id: 'careers', label: 'Careers', description: 'Job openings', recommended: false },
    ],
    personal: [
      { id: 'resume', label: 'Resume', description: 'Professional resume', recommended: true },
      { id: 'projects', label: 'Projects', description: 'Personal projects', recommended: true },
      { id: 'blog', label: 'Blog', description: 'Personal blog', recommended: false },
    ],
  };

  return [...commonPages, ...(purposeSpecificPages[purpose] || [])];
};

const additionalPageOptions: PageOption[] = [
  { id: 'faq', label: 'FAQ', description: 'Frequently asked questions' },
  { id: 'privacy', label: 'Privacy Policy', description: 'Privacy information' },
  { id: 'terms', label: 'Terms', description: 'Terms of service' },
  { id: 'gallery', label: 'Gallery', description: 'Image gallery' },
  { id: 'testimonials', label: 'Testimonials', description: 'Customer reviews' },
  { id: 'partners', label: 'Partners', description: 'Business partners' },
];

export function StepPagesStructure({ data, setData, onNext, onPrev }: StepProps) {
  const [errors, setErrors] = useState('');
  const [aiSuggestions, setAiSuggestions] = useState<{
    competitorPages: Array<{
      name: string;
      frequency: number;
      description: string;
    }>;
    loading: boolean;
  }>({
    competitorPages: [],
    loading: true
  });

  // Simulate AI analysis of competitor pages
  useEffect(() => {
    const analyzeCompetitorPages = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setAiSuggestions({
        competitorPages: [
          { name: 'Features', frequency: 90, description: 'Showcase your product features' },
          { name: 'Pricing', frequency: 85, description: 'Display pricing plans' },
          { name: 'Blog', frequency: 75, description: 'Share industry insights' },
          { name: 'FAQ', frequency: 70, description: 'Answer common questions' },
          { name: 'Testimonials', frequency: 65, description: 'Show social proof' }
        ],
        loading: false
      });
    };

    analyzeCompetitorPages();
  }, []);

  const recommendedPages = getRecommendedPages(data.websitePurpose);

  const handlePageToggle = (pageId: string) => {
    const newPages = data.selectedPages.includes(pageId)
      ? data.selectedPages.filter(id => id !== pageId)
      : [...data.selectedPages, pageId];
    
    setData({ ...data, selectedPages: newPages });
    setErrors('');
  };

  const handleAdditionalPageToggle = (pageId: string) => {
    const newPages = data.additionalPages.includes(pageId)
      ? data.additionalPages.filter(id => id !== pageId)
      : [...data.additionalPages, pageId];
    
    setData({ ...data, additionalPages: newPages });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.selectedPages.length === 0) {
      setErrors('Please select at least one page');
      return;
    }
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* AI Analysis */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center">
          <label className="block text-white font-medium">
            Lieutenant SEO&apos;s Analysis
          </label>
          <span className="text-white/60 text-sm">
            Based on competitor data
          </span>
        </div>
        
        {aiSuggestions.loading ? (
          <div className="text-white/60 text-center py-4">
            Analyzing competitor page structures...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiSuggestions.competitorPages.map((page) => (
              <div
                key={page.name}
                className="p-4 bg-white/5 border border-white/10 rounded-lg"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-medium">{page.name}</h3>
                  <span className="text-sage-green text-sm">{page.frequency}% of competitors</span>
                </div>
                <p className="text-white/60 text-sm">{page.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recommended Pages */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="block text-white font-medium">
            Captain SiteBuilder&apos;s Recommendations
          </label>
          <span className="text-white/60 text-sm">
            Based on your website purpose and competitor analysis
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendedPages.map((page) => (
            <button
              key={page.id}
              type="button"
              onClick={() => handlePageToggle(page.id)}
              className={`p-4 text-left border rounded-lg transition-all duration-300 ${
                data.selectedPages.includes(page.id)
                  ? 'bg-sage-green/20 border-sage-green'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-white font-medium">{page.label}</h3>
                {page.recommended && (
                  <span className="text-sage-green text-xs">Recommended</span>
                )}
              </div>
              <p className="text-white/60 text-sm">{page.description}</p>
            </button>
          ))}
        </div>
        {errors && (
          <p className="text-red-500 text-sm mt-1">{errors}</p>
        )}
      </div>

      {/* Additional Pages */}
      <div className="space-y-4">
        <label className="block text-white font-medium">
          Additional Pages
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {additionalPageOptions.map((page) => (
            <button
              key={page.id}
              type="button"
              onClick={() => handleAdditionalPageToggle(page.id)}
              className={`p-4 text-left border rounded-lg transition-all duration-300 ${
                data.additionalPages.includes(page.id)
                  ? 'bg-sage-green/20 border-sage-green'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <h3 className="text-white font-medium mb-1">{page.label}</h3>
              <p className="text-white/60 text-sm">{page.description}</p>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <span className="text-sage-green">💡</span>
          <p>
            Pages are suggested based on competitor analysis and industry best practices. Click to add them to your site structure.
          </p>
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
