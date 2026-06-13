"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { defaultLocale, isLocale, localeStorageKey, type Locale } from "./config";
import { commonLabels } from "./commonLabels";
import { dictionaries, type Dictionary } from "./dictionaries";

type LanguageContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  t: (path: string, fallback?: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;

  const stored = window.localStorage.getItem(localeStorageKey);
  if (isLocale(stored)) return stored;

  const browserLocale = window.navigator.language.slice(0, 2);
  if (isLocale(browserLocale)) return browserLocale;

  return defaultLocale;
}

function applyLocale(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;
  window.localStorage.setItem(localeStorageKey, locale);
}

function getByPath(source: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, source);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const initialLocale = getInitialLocale();
    setLocaleState(initialLocale);
    applyLocale(initialLocale);
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    applyLocale(nextLocale);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dictionary: dictionaries[locale],
      setLocale,
      t: (path, fallback = path) => {
        const value = getByPath(dictionaries[locale], path) ?? getByPath(commonLabels[locale], path);
        return typeof value === "string" ? value : fallback;
      },
    }),
    [locale, setLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used inside LanguageProvider");
  }
  return context;
}
