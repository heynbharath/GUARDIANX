import { CinematicHero } from "@/components/sections/CinematicHero";
import { HumanTruthSection } from "@/components/sections/HumanTruthSection";
import { LifeHasARhythmSection } from "@/components/sections/LifeHasARhythmSection";
import { LivingGuardianExperienceSection } from "@/components/sections/LivingGuardianExperienceSection";
import { SafetyDashboard } from "@/components/dashboard/SafetyDashboard";
import { SystemArchitectureFlowSection } from "@/components/sections/SystemArchitectureFlowSection";
import { EthicalPrinciplesSection } from "@/components/sections/EthicalPrinciplesSection";
import { FutureCapabilitiesSection } from "@/components/sections/FutureCapabilitiesSection";
import { WhyBuySection } from "@/components/sections/WhyBuySection";
import { CompetitorLandscapeSection } from "@/components/sections/CompetitorLandscapeSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { FutureOfCareSection } from "@/components/sections/FutureOfCareSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 01. Opening Cinematic Monumental Hero with The Living Guardian Scene */}
      <CinematicHero />

      {/* 02. Section One: The Human Truth (Story of Ananya & Kavita) */}
      <HumanTruthSection />

      {/* 03. Section Two: Life Has A Rhythm (Interactive Context Timeline) */}
      <LifeHasARhythmSection />

      {/* 04. Section Three: The Living Guardian Experience (Spatial Room Cutaway & Scenario Injection) */}
      <LivingGuardianExperienceSection />

      {/* 05. Section Four: The Response Experience (Care Coordination & Triage Console) */}
      <SafetyDashboard />

      {/* 06. Section Five: System Designed Around People (6-Layer Architecture Flow) */}
      <SystemArchitectureFlowSection />

      {/* 07. Section Six: The Four Ethical Principles (Dignity, Context, Human Oversight, Privacy) */}
      <EthicalPrinciplesSection />

      {/* 08. Section Seven: Future Capabilities & Research Horizon */}
      <FutureCapabilitiesSection />

      {/* 09. Business & Value Rationale: Why Will People Buy GuardianX? */}
      <WhyBuySection />

      {/* 10. Competitor & Market Landscape Analysis */}
      <CompetitorLandscapeSection />

      {/* 11. Section Eight: Project & Creator (Sunaina Mohapatra, Roadmap & Academic Context) */}
      <ProjectSection />

      {/* 12. Section Nine: The Future of Care (Monumental Closing Reflection) */}
      <FutureOfCareSection />
    </div>
  );
}
