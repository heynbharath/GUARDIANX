import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ConceptSection } from "@/components/sections/ConceptSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { SafetyDashboard } from "@/components/dashboard/SafetyDashboard";
import { FeatureExplorer } from "@/components/sections/FeatureExplorer";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { SafetyPrivacySection } from "@/components/sections/SafetyPrivacySection";
import { CompetitorLandscapeSection } from "@/components/sections/CompetitorLandscapeSection";
import { WhyBuySection } from "@/components/sections/WhyBuySection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ProblemSection />
      <ConceptSection />
      <HowItWorksSection />
      <SafetyDashboard />
      <WhyBuySection />
      <FeatureExplorer />
      <ArchitectureSection />
      <SafetyPrivacySection />
      <CompetitorLandscapeSection />
      <ProjectSection />
      <FinalCTA />
    </div>
  );
}
