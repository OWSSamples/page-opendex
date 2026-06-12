export type Locale = "es" | "en" | "pt" | "fr" | "zh";

export const defaultLocale: Locale = "es";
export const localeStorageKey = "opendex-locale";

export const languages: Array<{
  code: Locale;
  label: string;
  nativeLabel: string;
}> = [
  { code: "es", label: "Spanish", nativeLabel: "Español" },
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "pt", label: "Portuguese", nativeLabel: "Português" },
  { code: "fr", label: "French", nativeLabel: "Français" },
  { code: "zh", label: "Chinese", nativeLabel: "中文" },
];

export function isLocale(value: string | null): value is Locale {
  return value === "es" || value === "en" || value === "pt" || value === "fr" || value === "zh";
}
