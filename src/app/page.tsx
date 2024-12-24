import { HeroSection } from '../components/home/HeroSection';
import { TeaserSection } from '../components/home/TeaserSection';
import { HighlightsSection } from '../components/home/HighlightsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { MysterySection } from '../components/home/MysterySection';
import { FinalCTASection } from '../components/home/FinalCTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-eggplant-dark via-dark-bg to-dark-surface" />
        <div className="relative">
          <HeroSection />
          <TeaserSection />
          <HighlightsSection />
          <TestimonialsSection />
          <MysterySection />
          <FinalCTASection />
        </div>
      </div>
    </main>
  );
}
