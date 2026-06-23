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
          background: "linear-gradient(135deg, #fffaf3 0%, #f2e7d8 48%, #141414 100%)",
          color: "#141414",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
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
          <span style={{ color: "#9f4e12" }}>Identity · Invoice · POS</span>
        </div>
        <div style={{ maxWidth: 900, display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#9f4e12", fontSize: 24, fontWeight: 700, marginBottom: 24 }}>
            Infraestructura SaaS para LATAM
          </div>
          <h1 style={{ margin: 0, fontSize: 78, lineHeight: 0.94, letterSpacing: -3 }}>
            Operar con acceso, evidencia y continuidad.
          </h1>
          <p style={{ maxWidth: 760, margin: "28px 0 0", color: "#3d3d3a", fontSize: 30, lineHeight: 1.35 }}>
            {siteConfig.description}
          </p>
        </div>
      </div>
    ),
    size
  );
}
