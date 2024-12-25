import { HeroSection } from '../components/home/HeroSection';
import { StepsSection } from '../components/home/StepsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FinalCTASection } from '../components/home/FinalCTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-eggplant-dark via-dark-bg to-dark-surface" />
        <div className="relative">
          <HeroSection />
          <StepsSection />
          <TestimonialsSection />
          <FinalCTASection />
        </div>
      </div>
    </main>
  );
}
