import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gx: {
          // Core Palette Tokens
          obsidian: "#171715",
          carbon: "#22221F",
          vermilion: "#C65B3D",
          clay: "#A94732",
          chalk: "#E9E1D2",
          warmWhite: "#F5F1E8",
          mineral: "#77766E",
          graphite: "#39382F",
          citron: "#D4E45A",
          amber: "#DDA85E",

          // Semantic Mappings
          ink: "#171715", // Base page background
          bg2: "#22221F", // Raised surface
          panel: "#22221F", // Precision instrument panel
          card: "rgba(34, 34, 31, 0.75)",
          mint: "#E9E1D2", // Chalk for high-clarity technical accents
          emerald: "#C65B3D", // Vermilion for signature brand emphasis
          lime: "#D4E45A", // Signal citron for precise active states
          coral: "#C65B3D", // Vermilion for alerts
          blue: "#DDA85E", // Muted amber
          text: "#F5F1E8", // Warm white primary text
          muted: "#77766E", // Mineral grey secondary text
          border: "rgba(233, 225, 210, 0.12)", // Fine technical chalk border
          borderGlow: "rgba(198, 91, 61, 0.35)", // Vermilion subtle glow
        },
      },
      fontFamily: {
        sans: [
          "'DM Sans'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "'Manrope'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "sans-serif",
        ],
        mono: [
          "'DM Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        glow: "0 0 35px rgba(198, 91, 61, 0.18)",
        panel: "0 25px 80px rgba(0, 0, 0, 0.65)",
        citronGlow: "0 0 25px rgba(212, 228, 90, 0.25)",
        vermilionGlow: "0 0 35px rgba(198, 91, 61, 0.25)",
        subtle: "0 2px 10px rgba(0, 0, 0, 0.35)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
