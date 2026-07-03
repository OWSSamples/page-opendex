"use client";

import { useI18n } from "@/i18n/LanguageProvider";

type LocalizedTextProps = {
  id: string;
  fallback: string;
};

export default function LocalizedText({ id, fallback }: LocalizedTextProps) {
  const { t } = useI18n();
  return <>{t(id, fallback)}</>;
}
