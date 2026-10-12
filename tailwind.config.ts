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
          ink: "#071311",
          bg2: "#0A1916",
          panel: "#10271E",
          card: "rgba(16, 39, 30, 0.7)",
          mint: "#B8FFD9",
          emerald: "#48D6A2",
          lime: "#D7FF8F",
          coral: "#FF9B87",
          blue: "#9DD8FF",
          text: "#F2FBF5",
          muted: "#9BB4A8",
          border: "rgba(205, 255, 229, 0.12)",
          borderGlow: "rgba(184, 255, 217, 0.25)",
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
        glow: "0 0 35px rgba(184, 255, 217, 0.15)",
        panel: "0 25px 80px rgba(0, 0, 0, 0.45)",
        coralGlow: "0 0 35px rgba(255, 155, 135, 0.2)",
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
