'use client';

import { useEffect, useRef } from 'react';

const teamMembers = [
  {
    name: 'Sahil Singh',
    role: 'Co-Founder & CEO',
    bio: 'Accomplished software executive with proven track record in scaling SaaS companies. Currently Vice President of Global Sales at Branch, previously scaled APAC operations. Led global sales at Salesken from 0 to multi-million revenue and $22M Series B. Former Head of Enterprise Sales at Zendesk, scaling India business to significant ACV, and Senior Business Manager at Oracle CX Cloud. Passionate about building high-performance teams and driving customer-centric growth.'
  },
  {
    name: 'Vaibhav Verma',
    role: 'Co-Founder & CTO',
    bio: 'Pioneering technologist with a vision for AI-driven product creation. Former CTO at Salesken and VP of Engineering at iSTAR, with deep expertise in conversational AI and scalable solutions. IIT Bombay alumnus leading the technical innovation of our platform.'
  }
];

export function FoundingTeam() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const cards = cardsRef.current?.children;
    if (cards) {
      Array.from(cards).forEach((card, index) => {
        if (card instanceof HTMLElement) {
          card.style.transitionDelay = `${index * 150}ms`;
          observer.observe(card);
        }
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark-surface" />
      <div className="absolute inset-0 pattern-bg opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-sage-green/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-eggplant/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Our Founding Team
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Meet the visionaries behind Creator Lab—a team of innovators, engineers, and dreamers 
            united by a passion for AI-driven web evolution.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="glass-card p-8 rounded-xl opacity-0 translate-y-8 group hover:bg-white/10 transition-all duration-700"
            >
              {/* Background Gradients */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5 rounded-xl" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Placeholder Avatar */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-sage-green/20 to-eggplant/20 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-2xl font-montserrat font-bold text-white mb-2 group-hover:text-sage-green-light transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sage-green-light/90 font-bold mb-4 group-hover:text-sage-green-light transition-colors duration-300">
                  {member.role}
                </p>
                <p className="text-white/90 group-hover:text-white transition-colors duration-300">
                  {member.bio}
                </p>
              </div>

              {/* Card Border Glow */}
              <div className="absolute inset-0 border border-white/5 rounded-xl group-hover:border-white/20 transition-colors duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
