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
  const isDark = variant === "dark";

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
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-label={dictionary.language.aria}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
        className={
          isDark
            ? "inline-flex min-h-10 items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-3 text-[13px] text-[#d4d4d8] transition hover:border-white/25 hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6821f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0e]"
            : "inline-flex min-h-10 items-center gap-2 rounded-md border border-[#e7e4dc] bg-white px-3 text-[13px] text-[#3d3d3a] transition hover:border-[#d8d4c8] hover:bg-[#fffaf3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6821f] focus-visible:ring-offset-2"
        }
      >
        <Globe className="h-3.5 w-3.5" aria-hidden />
        <span>{activeLanguage.nativeLabel}</span>
        <ChevronDown className={`h-3 w-3 opacity-60 transition ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>

      {open ? (
        <div
          role="menu"
          className={
            isDark
              ? "absolute left-0 z-50 mt-2 w-60 overflow-hidden rounded-lg border border-white/10 bg-[#111114] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
              : "absolute right-0 z-50 mt-2 w-60 overflow-hidden rounded-lg border border-[#e7e4dc] bg-white p-1.5 shadow-[0_24px_70px_-36px_rgba(29,29,27,0.45)]"
          }
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
                className={
                  isDark
                    ? "flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-[13px] text-[#d4d4d8] transition hover:bg-white/[0.06] hover:text-white"
                    : "flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-[13px] text-[#3d3d3a] transition hover:bg-[#fffaf3]"
                }
              >
                <span className="grid h-5 w-5 place-items-center">
                  {selected ? <Check className="h-3.5 w-3.5 text-[#f6821f]" aria-hidden /> : null}
                </span>
                <span className="min-w-0 flex-1">
                  <span className={isDark ? "block font-semibold text-white" : "block font-semibold text-[#1d1d1b]"}>
                    {language.nativeLabel}
                  </span>
                  <span className={isDark ? "block text-[11.5px] text-[#8f8f94]" : "block text-[11.5px] text-[#9a9a93]"}>
                    {selected ? dictionary.language.current : language.label}
                  </span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] opacity-50">
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
