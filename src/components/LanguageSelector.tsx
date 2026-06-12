"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check } from "@/components/icons";
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
  const activeLanguage = languages.find((l) => l.code === locale) ?? languages[0];
  const isDark = variant === "dark";
  const triggerTone = isDark
    ? "text-white/76 hover:text-white data-[state=open]:text-white"
    : "text-[#4b4842] hover:text-[#1a1a18] data-[state=open]:text-[#1a1a18]";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={dictionary.language.aria}
        className={[
          "opx-language-trigger group inline-flex items-baseline gap-1.5 text-[11px] font-semibold outline-none transition duration-200",
          "focus-visible:text-[#f6821f]",
          triggerTone,
          className,
        ].join(" ")}
      >
        <span className="font-mono uppercase tracking-[0.16em]">{activeLanguage.code}</span>
        <span
          aria-hidden
          className={isDark ? "text-white/28" : "text-[#b5aa9c]"}
        >
          /
        </span>
        <span
          className={[
            "hidden text-[10.5px] font-medium sm:inline",
            isDark ? "text-white/52 group-hover:text-white/70" : "text-[#7a7368] group-hover:text-[#4b4842]",
          ].join(" ")}
        >
          {activeLanguage.nativeLabel}
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className={[
          "z-50 w-64 overflow-hidden rounded-xl p-1 shadow-lg backdrop-blur-xl",
          isDark
            ? "border border-white/[0.12] bg-[#101011]/96 text-[#d4d4d8] shadow-[0_24px_80px_rgba(0,0,0,0.44)]"
            : "border border-[#ded6ca] bg-[#fffaf4]/96 text-[#52524e] shadow-[0_22px_60px_-18px_rgba(29,29,27,0.22)]",
        ].join(" ")}
      >
        <div
          className={[
            "rounded-lg px-3 py-2.5",
            isDark
              ? "bg-white/[0.04]"
              : "bg-[#f7efe4]",
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-3">
            <span
              className={[
                "font-mono text-[9.5px] font-bold uppercase tracking-[0.16em]",
                isDark ? "text-white/45" : "text-[#9a9488]",
              ].join(" ")}
            >
              {dictionary.language.aria}
            </span>
            <span
              className={[
                "font-mono text-[9px] uppercase tracking-[0.16em]",
                isDark ? "text-[#ffb17a]" : "text-[#c45212]",
              ].join(" ")}
            >
              {activeLanguage.code}
            </span>
          </div>
          <p
            className={[
              "mt-1 text-[11px] leading-snug",
              isDark ? "text-white/55" : "text-[#777064]",
            ].join(" ")}
          >
            {activeLanguage.nativeLabel} · {dictionary.language.current}
          </p>
        </div>

        <DropdownMenuLabel
          className={[
            "px-3 py-2 text-[9.5px] font-bold uppercase tracking-[0.14em]",
            isDark ? "text-white/35" : "text-[#aaa398]",
          ].join(" ")}
        >
          Disponible
        </DropdownMenuLabel>

        <DropdownMenuSeparator
          className={isDark ? "mx-0 bg-white/[0.06]" : "mx-0 bg-[#e8e0d4]"}
        />

        <DropdownMenuGroup>
          {languages.map((lang) => {
            const selected = lang.code === locale;
            return (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => setLocale(lang.code as Locale)}
                className={[
                  "group/lang flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[12.5px] outline-none transition duration-150",
                  isDark
                    ? selected
                      ? "bg-[#f6821f]/10 text-white focus:bg-[#f6821f]/14 focus:text-white"
                      : "text-[#b8b8c0] focus:bg-white/[0.055] focus:text-white"
                    : selected
                      ? "bg-[#fff0e2] text-[#1a1a18] focus:bg-[#ffe8d8] focus:text-[#1a1a18]"
                      : "text-[#52524e] focus:bg-[#f8f1e7] focus:text-[#1a1a18]",
                ].join(" ")}
              >
                <span
                  className={[
                    "grid h-7 w-8 shrink-0 place-items-center font-mono text-[9px] font-bold uppercase tracking-[0.08em] transition",
                    selected
                      ? "text-[#f6821f]"
                      : isDark
                        ? "text-white/42 group-focus/lang:text-white/70"
                        : "text-[#928b80] group-focus/lang:text-[#1a1a18]",
                  ].join(" ")}
                >
                  {selected && (
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  )}
                  {!selected && lang.code}
                </span>

                <span className="flex-1">
                  <span
                    className={[
                      "block text-[13px] font-semibold leading-none",
                      selected
                        ? isDark ? "text-white" : "text-[#1a1a18]"
                        : isDark ? "text-white/82" : "text-[#1a1a18]",
                    ].join(" ")}
                  >
                    {lang.nativeLabel}
                  </span>
                  <span
                    className={[
                      "mt-0.5 block text-[10.5px] leading-none",
                      isDark ? "text-white/38" : "text-[#9a9488]",
                    ].join(" ")}
                  >
                    {selected ? dictionary.language.current : lang.label}
                  </span>
                </span>

                <span
                  className={[
                    "font-mono text-[9.5px] uppercase tracking-[0.12em]",
                    selected
                      ? "text-[#f6821f]"
                      : isDark ? "text-white/28" : "text-[#c4beb2]",
                  ].join(" ")}
                >
                  {lang.code}
                </span>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
