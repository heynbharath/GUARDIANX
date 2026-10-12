import { ProjectConfig } from "@/types/guardianx";

export const PROJECT_CONFIG: ProjectConfig = {
  projectName: "GuardianX",
  category: "Elderly Remote Safety",
  stage: "Product concept and interactive prototype",
  creator: {
    name: "Sunaina Mohapatra",
    usn: "ENG24CT0058",
    // Privacy switch: defaults to hidden on the public-facing website as required
    showUsnPublicly: false,
  },
  githubRepoUrl: "https://github.com/heynbharath/GUARDIANX",
  simulationDisclaimer:
    "DEMO MODE — SIMULATED DATA ONLY. GuardianX is a product concept prototype. It is not connected to real sensors, medical hardware, emergency dispatch, or messaging services. Do not use for actual safety emergencies.",
};
