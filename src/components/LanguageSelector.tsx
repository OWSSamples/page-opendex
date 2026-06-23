"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "@/components/icons";
import { languages, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/LanguageProvider";

export default function LanguageSelector({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const { locale, setLocale, dictionary } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const activeLanguage = languages.find((language) => language.code === locale) ?? languages[0];

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const chooseLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className={`opx-language-selector ${className}`} data-tone={variant}>
      <button
        type="button"
        aria-label={dictionary.language.aria}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
        className="opx-language-trigger"
      >
        <Globe className="opx-language-icon" aria-hidden />
        <span className="opx-language-label">{activeLanguage.nativeLabel}</span>
        <span className="opx-language-code">{activeLanguage.code}</span>
        <ChevronDown className="opx-language-chevron" data-open={open ? "true" : undefined} aria-hidden />
      </button>

      {open ? (
        <div
          role="menu"
          aria-label={dictionary.language.aria}
          className="opx-language-menu"
        >
          {languages.map((language) => {
            const selected = language.code === locale;
            return (
              <button
                key={language.code}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => chooseLocale(language.code)}
                className="opx-language-option"
                data-selected={selected ? "true" : undefined}
              >
                <span className="opx-language-check">
                  {selected ? <Check className="h-3.5 w-3.5" aria-hidden /> : null}
                </span>
                <span className="opx-language-option-copy">
                  <span className="opx-language-option-title">
                    {language.nativeLabel}
                  </span>
                  <span className="opx-language-option-meta">
                    {selected ? dictionary.language.current : language.label}
                  </span>
                </span>
                <span className="opx-language-option-code">
                  {language.code}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
