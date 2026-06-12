"use client";

import { useI18n } from "@/i18n/LanguageProvider";
import { type CommonLabelKey } from "@/i18n/commonLabels";

export default function LocalizedLabel({ labelKey }: { labelKey: CommonLabelKey }) {
  const { t } = useI18n();
  return t(labelKey);
}
