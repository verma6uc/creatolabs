'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const sections = [
  {
    name: 'Hero Section',
    preview: '/mockups/preview-1.png'
  },
  {
    name: 'Features Section',
    preview: '/mockups/preview-2.png'
  },
  {
    name: 'Testimonials Section',
    preview: '/mockups/preview-3.png'
  }
];

export function WebsitePreview() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-dark-surface">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-[640px] h-[360px] mx-auto mb-6">
            {sections.map((section, index) => (
              <div
                key={section.name}
                className={`
                  absolute inset-0 transition-all duration-500
                  ${index === currentSection ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={section.preview}
                    alt={section.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent rounded-lg" />
                </div>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-montserrat font-bold text-white mb-2">
            {sections[currentSection].name}
          </h3>
          <p className="text-white/60">
            Generating optimized content and layout...
          </p>
        </div>
      </div>

      {/* Section Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === currentSection ? 'bg-sage-green w-6' : 'bg-white/20'}
            `}
          />
        ))}
      </div>
    </div>
  );
}
