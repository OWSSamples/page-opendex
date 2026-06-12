"use client";

import type { ReactNode } from "react";
import PageHeader from "@/components/PageHeader";
import { useI18n } from "@/i18n/LanguageProvider";
import { pageHeaders, type PageHeaderKey } from "@/i18n/pageHeaders";

export default function LocalizedPageHeader({
  pageKey,
  children,
}: {
  pageKey: PageHeaderKey;
  children?: ReactNode;
}) {
  const { locale } = useI18n();
  const copy = pageHeaders[locale][pageKey];

  return (
    <PageHeader
      eyebrow={copy.eyebrow}
      title={copy.title}
      description={copy.description}
    >
      {children}
    </PageHeader>
  );
}
