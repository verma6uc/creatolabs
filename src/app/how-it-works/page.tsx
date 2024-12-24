'use client';

import { HeroSection } from '../../components/how-it-works/HeroSection';
import { SimulationSection } from '../../components/how-it-works/SimulationSection';
import { FinalCTA } from '../../components/how-it-works/FinalCTA';

export default function HowItWorks() {
  return (
    <main className="bg-dark-bg">
      <HeroSection />
      <SimulationSection />
      <FinalCTA />
    </main>
  );
}
