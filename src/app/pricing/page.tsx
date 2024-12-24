import { HeroSection } from '../../components/pricing/HeroSection';
import { PricingPlans } from '../../components/pricing/PricingPlans';
import { TokenPricing } from '../../components/pricing/TokenPricing';
import { ComparisonTable } from '../../components/pricing/ComparisonTable';
import { FinalCTA } from '../../components/pricing/FinalCTA';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-dark-bg pt-20">
      <HeroSection />
      <PricingPlans />
      <TokenPricing />
      <ComparisonTable />
      <FinalCTA />
    </main>
  );
}
