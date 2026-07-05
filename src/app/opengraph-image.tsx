import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "Opendex Web Services";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f7f8",
          color: "#131316",
          padding: "72px",
          fontFamily: "geistNumbers, suisse, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <span>{siteConfig.name}</span>
          <span style={{ color: "#6c47ff" }}>Identity · Invoice · POS</span>
        </div>
        <div style={{ maxWidth: 900, display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#6c47ff", fontSize: 23, fontWeight: 400, marginBottom: 24, lineHeight: "28px" }}>
            Infraestructura SaaS para LATAM
          </div>
          <h1 style={{ margin: 0, fontSize: 48, fontWeight: 700, lineHeight: "56px", letterSpacing: "-1.2px" }}>
            Operar con acceso, evidencia y continuidad.
          </h1>
          <p style={{ maxWidth: 760, margin: "28px 0 0", color: "#131316", fontSize: 18, fontWeight: 400, lineHeight: "28px" }}>
            {siteConfig.description}
          </p>
        </div>
      </div>
    ),
    size
  );
}
