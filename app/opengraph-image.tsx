import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Xelera.ai";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top left, rgba(39,246,196,0.25), transparent 35%), radial-gradient(circle at 80% 20%, rgba(79,172,254,0.24), transparent 24%), linear-gradient(180deg, #07111f 0%, #09131f 100%)",
          color: "white",
          padding: "64px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(207, 250, 254, 0.8)",
          }}
        >
          Xelera.ai
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "820px" }}>
          <div style={{ fontSize: 78, lineHeight: 1.02, fontWeight: 700 }}>
            AI systems that turn ambition into operating advantage.
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.45, color: "rgba(226, 232, 240, 0.9)" }}>
            Design, deploy, and operationalize AI products, workflows, and governed automation.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
