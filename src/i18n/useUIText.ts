"use client";

import { useCallback } from "react";
import { useI18n } from "./LanguageProvider";
import { getUIText } from "./uiText";

export function useUIText() {
  const { locale } = useI18n();

  return useCallback(
    (key: string, fallback: string) => getUIText(locale, key, fallback),
    [locale]
  );
}
