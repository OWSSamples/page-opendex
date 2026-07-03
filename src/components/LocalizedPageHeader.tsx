"use client";

import type { ReactNode } from "react";
import PageHeader from "@/components/PageHeader";
import { useI18n } from "@/i18n/LanguageProvider";
import { pageHeaders, type PageHeaderKey } from "@/i18n/pageHeaders";
import { useUIText } from "@/i18n/useUIText";

const pageHeaderVisuals: Record<PageHeaderKey, { alt: string; label: string; src: string }> = {
  blog: {
    alt: "Mesa editorial con arquitectura de producto y lectura técnica",
    label: "Bitácora técnica",
    src: "/opendex-blueprint-control-plane.png",
  },
  community: {
    alt: "Infraestructura colaborativa para comunidad técnica",
    label: "Comunidad privada",
    src: "/opendex-3d-infrastructure.png",
  },
  company: {
    alt: "Infraestructura empresarial con capas operativas",
    label: "Empresa y criterio",
    src: "/opendex-3d-infrastructure.png",
  },
  docs: {
    alt: "Plano técnico de documentación y contratos operativos",
    label: "Documentación viva",
    src: "/opendex-blueprint-control-plane.png",
  },
  login: {
    alt: "Panel de acceso seguro reservado",
    label: "Acceso reservado",
    src: "/protect-data-center.svg",
  },
  pricing: {
    alt: "Operación empresarial para modelo comercial y soporte",
    label: "Modelo comercial",
    src: "/opendex-3d-operations.png",
  },
  privacy: {
    alt: "Capa de protección de datos y privacidad",
    label: "Privacidad",
    src: "/protect-server.svg",
  },
  productAuth: {
    alt: "Infraestructura de identidad y control de acceso",
    label: "Identity",
    src: "/protect-data-center.svg",
  },
  productInvoice: {
    alt: "Operación documental y validación fiscal",
    label: "Documentos",
    src: "/verify-down-up.svg",
  },
  productKiosko: {
    alt: "Operación de sucursal y terminales conectadas",
    label: "Retail ops",
    src: "/Router-switch.svg",
  },
  security: {
    alt: "Centro de datos protegido con capas de seguridad",
    label: "Seguridad",
    src: "/protect-data-center.svg",
  },
  solutionFintech: {
    alt: "Infraestructura de trazabilidad para operaciones financieras",
    label: "Fintech",
    src: "/protect-for-cloud.svg",
  },
  solutionRetail: {
    alt: "Red de tienda y operación de punto de venta",
    label: "Retail",
    src: "/connect-extreme.svg",
  },
  solutionSaas: {
    alt: "Arquitectura SaaS con módulos conectados",
    label: "SaaS B2B",
    src: "/centralized-by-infraestructure-data-center.svg",
  },
  status: {
    alt: "Panel operativo de estado y continuidad",
    label: "Estado",
    src: "/opendex-3d-operations.png",
  },
};

export default function LocalizedPageHeader({
  pageKey,
  children,
}: {
  pageKey: PageHeaderKey;
  children?: ReactNode;
}) {
  const { locale } = useI18n();
  const text = useUIText();
  const copy = pageHeaders[locale][pageKey];
  const visual = pageHeaderVisuals[pageKey];

  return (
    <PageHeader
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
      variant={pageKey === "security" ? "security" : "default"}
      visualAlt={text(`pageHeader.${pageKey}.visualAlt`, visual.alt)}
      visualLabel={text(`pageHeader.${pageKey}.visualLabel`, visual.label)}
      visualSrc={visual.src}
    >
      {children}
    </PageHeader>
  );
}
