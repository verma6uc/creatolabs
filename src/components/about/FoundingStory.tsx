'use client';

import { useEffect, useRef } from 'react';

export function FoundingStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute inset-0 pattern-bg opacity-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-sage-green/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-eggplant/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Image Column */}
          <div 
            ref={imageRef}
            className="relative opacity-0 translate-y-8 transition-all duration-700"
          >
            <div className="relative aspect-[16/9] glass-card rounded-2xl overflow-hidden group">
              {/* Background Gradients */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5 rounded-2xl" />
              </div>

              {/* Team Illustration */}
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-dark-bg/20">
                <img 
                  src="/images/team-illustration.png" 
                  alt="CreatorLabs Team Illustration" 
                  className="w-full h-full object-cover mix-blend-lighten"
                />
              </div>

              {/* Card Border Glow */}
              <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-white/20 transition-colors duration-700" />
            </div>
          </div>

          {/* Text Column */}
          <div 
            ref={textRef}
            className="opacity-0 translate-y-8 transition-all duration-700 delay-200"
          >
            <div className="glass-card p-8 md:p-12 rounded-2xl group hover:bg-white/5 transition-all duration-700">
              {/* Background Gradients */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-green/5 via-transparent to-eggplant/5 rounded-2xl" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
                  From Idea to Reality
                </h2>
                <div className="space-y-4 text-lg text-white/80">
                  <p>
                    Creator Lab was envisioned by a team of passionate developers and designers 
                    who saw the future of web development differently. Frustrated by the endless 
                    cycle of static websites and costly redesigns, they dreamed of a living 
                    platform—one that harnesses AI to shape and reshape itself in real time.
                  </p>
                  <p>
                    From sleepless nights of coding and countless user interviews, Creator Lab 
                    took form. Today, it stands as an evolving ecosystem, bridging the gap between 
                    cutting-edge technology and intuitive user experiences.
                  </p>
                </div>
              </div>

              {/* Card Border Glow */}
              <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-white/20 transition-colors duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
