import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GuardianX — Next-Gen Elderly Remote Safety Platform";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          backgroundColor: "#071311",
          backgroundImage:
            "radial-gradient(circle at 80% 15%, rgba(72, 214, 162, 0.25), transparent 45%), radial-gradient(circle at 15% 85%, rgba(215, 255, 143, 0.15), transparent 40%)",
          color: "#f2fbf5",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #d7ff8f, #48d6a2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: "900",
                color: "#08221a",
                boxShadow: "0 0 30px rgba(72, 214, 162, 0.4)",
              }}
            >
              🛡️
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "36px", fontWeight: "900", letterSpacing: "-1px" }}>
                guardian<span style={{ color: "#b8ffd9" }}>x</span>
              </span>
              <span style={{ fontSize: "14px", color: "#9bb4a8", letterSpacing: "2px", textTransform: "uppercase" }}>
                Elderly Remote Safety Platform
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              borderRadius: "999px",
              backgroundColor: "#122e23",
              border: "1px solid rgba(215, 255, 143, 0.4)",
              color: "#d7ff8f",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#d7ff8f",
              }}
            />
            Live Interactive Prototype
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "980px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "900",
              lineHeight: 1.08,
              letterSpacing: "-2px",
              margin: 0,
            }}
          >
            Independence for them.{" "}
            <span
              style={{
                background: "linear-gradient(to right, #b8ffd9, #48d6a2, #d7ff8f)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Peace of mind for you.
            </span>
          </h1>
          <p
            style={{
              fontSize: "22px",
              color: "#9bb4a8",
              lineHeight: 1.45,
              margin: 0,
            }}
          >
            A wearable safety signal platform combining kinetic fall detection, elder check-in grace periods, and coordinated family response.
          </p>
        </div>

        {/* Bottom Feature Badges */}
        <div style={{ display: "flex", gap: "16px" }}>
          {[
            "Kinetic IMU Anomaly Detection",
            "Elder-First Grace Period Triage",
            "Zero False-Alarm Panics",
            "Family Care Circle Dispatch",
          ].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "10px 18px",
                borderRadius: "14px",
                backgroundColor: "rgba(16, 39, 30, 0.8)",
                border: "1px solid rgba(205, 255, 229, 0.16)",
                fontSize: "13px",
                fontWeight: "600",
                color: "#b8ffd9",
              }}
            >
              ✓ {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
