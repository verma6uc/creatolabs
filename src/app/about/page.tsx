import { HeroSection } from '../../components/about/HeroSection';
import { FoundingStory } from '../../components/about/FoundingStory';
import { FoundingTeam } from '../../components/about/FoundingTeam';
import { AIAgents } from '../../components/about/AIAgents';
import { CompanyTimeline } from '../../components/about/CompanyTimeline';
import { CultureValues } from '../../components/about/CultureValues';
import { FinalCTA } from '../../components/about/FinalCTA';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <div className="flex flex-col">
        <HeroSection />
        <div className="space-y-24">
          <FoundingStory />
          <FoundingTeam />
          <AIAgents />
          <CompanyTimeline />
          <CultureValues />
          <FinalCTA />
        </div>
      </div>
    </main>
  );
}
