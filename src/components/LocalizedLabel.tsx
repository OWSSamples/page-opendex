"use client";

import { useI18n } from "@/i18n/LanguageProvider";

export default function LocalizedLabel({
  labelKey,
  fallback,
}: {
  labelKey: string;
  fallback?: string;
}) {
  const { t } = useI18n();
  return t(labelKey, fallback ?? labelKey);
}
