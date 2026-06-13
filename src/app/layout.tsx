import "../styles/globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LanguageProvider } from "../i18n/LanguageProvider";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Opendex Web Services — Auth, Invoice y POS para SaaS modernos",
    template: "%s · Opendex Web Services",
  },
  description:
    "Infraestructura para productos SaaS: autenticación con passkeys, facturación CFDI 4.0 México y punto de venta moderno. Lista para producción.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        suppressHydrationWarning
        className="relative overflow-x-hidden bg-[#faf8f4] text-[#1d1d1b] antialiased"
      >
        {/* Marco global tipo blueprint: guias laterales, nodos y conectores sutiles. */}
        <div aria-hidden className="cf-frame-overlay">
          <div className="cf-frame-inner">
            <span className="cf-frame-line cf-frame-line-l" />
            <span className="cf-frame-line cf-frame-line-r" />
            <span className="cf-frame-cross cf-frame-cross-t" />
            <span className="cf-frame-cross cf-frame-cross-b" />
            <span className="cf-frame-ruler cf-frame-ruler-l" />
            <span className="cf-frame-ruler cf-frame-ruler-r" />
            {["AUTH", "BILL", "POS", "OPS"].map((label, i) => (
              <span
                key={`coord-l-${label}`}
                className="cf-frame-label cf-frame-label-l"
                style={{ top: `${520 + i * 1120}px` }}
              >
                {label}
              </span>
            ))}
            {["EDGE", "API", "MFA", "LOG"].map((label, i) => (
              <span
                key={`coord-r-${label}`}
                className="cf-frame-label cf-frame-label-r"
                style={{ top: `${880 + i * 1120}px` }}
              >
                {label}
              </span>
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={`trace-l-${i}`}
                className="cf-frame-trace cf-frame-trace-l"
                style={{ top: `${420 + i * 620}px` }}
              />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={`trace-r-${i}`}
                className="cf-frame-trace cf-frame-trace-r"
                style={{ top: `${650 + i * 620}px` }}
              />
            ))}
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={`bl-${i}`}
                className="cf-frame-bracket cf-frame-bracket-l"
                style={{ top: `${160 + i * 360}px` }}
              />
            ))}
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={`br-${i}`}
                className="cf-frame-bracket cf-frame-bracket-r"
                style={{ top: `${260 + i * 360}px` }}
              />
            ))}
          </div>
        </div>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-4rem)]">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
