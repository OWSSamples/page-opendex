import "../styles/globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {
  GeistPixelCircle,
  GeistPixelGrid,
  GeistPixelLine,
  GeistPixelSquare,
  GeistPixelTriangle,
} from "geist/font/pixel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SalesChatWidget from "../components/SalesChatWidget";
import JsonLd from "../components/JsonLd";
import { LanguageProvider } from "../i18n/LanguageProvider";
import { createMetadata, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Opendex Web Services - Auth, Invoice y POS para SaaS modernos",
  description:
    "Infraestructura para productos SaaS: autenticacion con passkeys, facturacion CFDI 4.0 Mexico y punto de venta moderno. Lista para produccion.",
  path: "/",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={[
        GeistSans.variable,
        GeistMono.variable,
        GeistPixelSquare.variable,
        GeistPixelGrid.variable,
        GeistPixelCircle.variable,
        GeistPixelTriangle.variable,
        GeistPixelLine.variable,
      ].join(" ")}
    >
      <body
        suppressHydrationWarning
        className={`${GeistSans.className} opx-app-body`}
      >
        <LanguageProvider>
          <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
          <Navbar />
          <main className="opx-app-main">{children}</main>
          <Footer />
          <SalesChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
