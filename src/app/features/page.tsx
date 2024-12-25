import { AIDrivenSection } from '../../components/features/AIDrivenSection';
import { CompetitorSection } from '../../components/features/CompetitorSection';
import { ConnectedLandingSection } from '../../components/features/ConnectedLandingSection';
import { ContentMarketingSection } from '../../components/features/ContentMarketingSection';
import { CTASection } from '../../components/features/CTASection';
import { EvolutionSection } from '../../components/features/EvolutionSection';
import { ExtendedFeaturesSection } from '../../components/features/ExtendedFeaturesSection';
import { HeroSection } from '../../components/features/HeroSection';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-dark-bg pt-20">
      <HeroSection />
      <AIDrivenSection />
      <EvolutionSection />
      <CompetitorSection />
      <ConnectedLandingSection />
      <ContentMarketingSection />
      <ExtendedFeaturesSection />
      <CTASection />
    </main>
  );
}
