"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSelector from "@/components/LanguageSelector";
import { useI18n } from "@/i18n/LanguageProvider";
import { useEffect, useState } from "react";

type ConsentKey = "functional" | "performance" | "targeting";
type ConsentState = Record<ConsentKey, boolean>;
type CookieModalRowKey =
  | "necessaryTitle"
  | "necessaryDescription"
  | "functionalTitle"
  | "functionalDescription"
  | "performanceTitle"
  | "performanceDescription"
  | "targetingTitle"
  | "targetingDescription";

const consentStorageKey = "opendex-cookie-consent";
const defaultConsent: ConsentState = {
  functional: true,
  performance: true,
  targeting: true,
};

const consentRows: Array<{
  key: "necessary" | ConsentKey;
  titleKey: CookieModalRowKey;
  descriptionKey: CookieModalRowKey;
}> = [
  {
    key: "necessary",
    titleKey: "necessaryTitle",
    descriptionKey: "necessaryDescription",
  },
  {
    key: "functional",
    titleKey: "functionalTitle",
    descriptionKey: "functionalDescription",
  },
  {
    key: "performance",
    titleKey: "performanceTitle",
    descriptionKey: "performanceDescription",
  },
  {
    key: "targeting",
    titleKey: "targetingTitle",
    descriptionKey: "targetingDescription",
  },
];

function readStoredConsent(): ConsentState {
  if (typeof window === "undefined") return defaultConsent;

  try {
    const saved = window.localStorage.getItem(consentStorageKey);
    if (!saved) return defaultConsent;

    const parsed = JSON.parse(saved) as Partial<ConsentState>;
    return {
      functional: parsed.functional ?? defaultConsent.functional,
      performance: parsed.performance ?? defaultConsent.performance,
      targeting: parsed.targeting ?? defaultConsent.targeting,
    };
  } catch {
    return defaultConsent;
  }
}

function writeStoredConsent(consent: ConsentState) {
  window.localStorage.setItem(
    consentStorageKey,
    JSON.stringify({
      ...consent,
      strictlyNecessary: true,
      updatedAt: new Date().toISOString(),
    })
  );
}

function CookieOptionsModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { dictionary } = useI18n();
  const copy = dictionary.footer.cookieModal;
  const [consent, setConsent] = useState<ConsentState>(() => readStoredConsent());
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const saveAndClose = (nextConsent: ConsentState) => {
    setConsent(nextConsent);
    writeStoredConsent(nextConsent);
    onClose();
  };

  const toggleConsent = (key: ConsentKey) => {
    setConsent((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-3 py-6 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        aria-labelledby="cookie-options-title"
        aria-modal="true"
        role="dialog"
        className="flex max-h-[90vh] w-full max-w-[680px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#161719] text-[#b7b7ba] shadow-[0_28px_90px_rgba(0,0,0,0.55)]"
      >
        <div className="relative overflow-y-auto px-7 pb-8 pt-20 sm:px-10">
          <button
            type="button"
            aria-label={copy.close}
            onClick={onClose}
            className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-md text-[#b7b7ba] transition hover:bg-white/5 hover:text-white"
          >
            <span className="text-3xl leading-none">&times;</span>
          </button>

          <h2 id="cookie-options-title" className="text-[20px] font-semibold leading-tight text-[#d5d5d7]">
            {copy.title}
          </h2>
          <p className="mt-1 max-w-[540px] text-[13.5px] leading-6 text-[#8f8f94]">
            {copy.description}
          </p>
          <Link
            href="/legal/privacidad#cookies"
            className="mt-1 inline-flex text-[13.5px] text-[#f0642f] underline underline-offset-2 transition hover:text-[#ff895d]"
            onClick={onClose}
          >
            {copy.privacyLink}
          </Link>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => saveAndClose({ functional: true, performance: true, targeting: true })}
              className="rounded-full bg-[#df6a3a] px-5 py-2.5 text-[14px] font-medium text-white transition hover:bg-[#f07843]"
            >
              {copy.acceptAll}
            </button>
          </div>

          <h3 className="mt-6 text-[15px] font-semibold text-[#c9c9cc]">
            {copy.preferencesTitle}
          </h3>

          <div className="mt-6 border-b border-white/10">
            {consentRows.map((row) => {
              const isNecessary = row.key === "necessary";
              const isExpanded = expanded[row.key] ?? false;
              const consentKey: ConsentKey | null = isNecessary ? null : (row.key as ConsentKey);
              const enabled = consentKey ? consent[consentKey] : false;

              return (
                <div key={row.key} className="border-t border-white/10">
                  <div className="flex min-h-[54px] items-center gap-3 py-3">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`cookie-panel-${row.key}`}
                      onClick={() =>
                        setExpanded((current) => ({ ...current, [row.key]: !isExpanded }))
                      }
                      className="grid h-6 w-6 shrink-0 place-items-center rounded text-[20px] leading-none text-[#8f8f94] transition hover:bg-white/5 hover:text-white"
                    >
                      {isExpanded ? "-" : "+"}
                    </button>
                    <span className="flex-1 text-[13.5px] font-semibold text-[#bdbdc0]">
                      {copy.rows[row.titleKey]}
                    </span>
                    {isNecessary ? (
                      <span className="text-[12px] font-medium text-[#f0642f]">
                        {copy.alwaysActive}
                      </span>
                    ) : (
                      <button
                        type="button"
                        role="switch"
                        aria-checked={enabled}
                        aria-label={`${copy.rows[row.titleKey]} ${enabled ? copy.enabled : copy.disabled}`}
                        onClick={() => {
                          if (consentKey) toggleConsent(consentKey);
                        }}
                        className={`relative h-5 w-10 rounded-full transition ${
                          enabled ? "bg-[#d56a43]" : "bg-[#3a3b3f]"
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 h-4 w-4 rounded-full bg-[#cdd4d8] transition ${
                            enabled ? "left-[22px]" : "left-0.5"
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {isExpanded ? (
                    <p
                      id={`cookie-panel-${row.key}`}
                      className="pb-4 pl-9 pr-2 text-[12.5px] leading-6 text-[#8f8f94]"
                    >
                      {copy.rows[row.descriptionKey]}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-2 border-t border-white/10 bg-[#171819] px-6 py-4 sm:px-9">
          <button
            type="button"
            onClick={() => saveAndClose({ functional: false, performance: false, targeting: false })}
            className="h-10 rounded-full border border-white/10 px-5 text-[13.5px] font-semibold text-[#bdbdc0] transition hover:border-white/25 hover:text-white"
          >
            {copy.rejectAll}
          </button>
          <button
            type="button"
            onClick={() => saveAndClose(consent)}
            className="h-10 flex-1 rounded-full border border-white/10 px-5 text-[13.5px] font-semibold text-[#f0642f] transition hover:border-[#f0642f]/60 hover:bg-[#f0642f]/10"
          >
            {copy.confirm}
          </button>
        </div>
      </section>
    </div>
  );
}

export default function Footer() {
  const [cookieOptionsOpen, setCookieOptionsOpen] = useState(false);
  const { dictionary } = useI18n();
  const footerCopy = dictionary.footer;
  const primaryColumns = footerCopy.columns.slice(0, 4);
  const secondaryColumns = footerCopy.columns.slice(4);

  return (
    <>
      <footer className="relative overflow-visible border-t border-[#22252b] bg-[#111213] text-[#e7e9ee]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3f4652] to-transparent"
        />

        <div className="relative mx-auto max-w-[1060px] px-6 pb-7 pt-16 sm:px-8 lg:px-0">
          <nav aria-label="Footer" className="grid gap-y-16">
            <div className="grid gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {primaryColumns.map((column, index) => {
                const headingId = `footer-primary-column-${index}`;

                return (
                  <section key={column.title} aria-labelledby={headingId}>
                    <h2
                      id={headingId}
                      className="mb-3 text-[11px] font-semibold uppercase leading-none tracking-[0.12em] text-[#87909d]"
                    >
                      {column.title}
                    </h2>
                    <ul className="space-y-2">
                      {column.links.map(([label, href]) => (
                        <li key={label}>
                          <Link
                            href={href}
                            className="text-[13px] font-semibold leading-[1.35] text-[#f5f7fb] transition-colors hover:text-[#8fb4ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#635bff]"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>

            <div className="grid gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {secondaryColumns.map((column, index) => {
                const headingId = `footer-secondary-column-${index}`;

                return (
                  <section key={column.title} aria-labelledby={headingId}>
                    <h2
                      id={headingId}
                      className="mb-3 text-[11px] font-semibold uppercase leading-none tracking-[0.12em] text-[#87909d]"
                    >
                      {column.title}
                    </h2>
                    <ul className="space-y-2">
                      {column.links.map(([label, href]) => (
                        <li key={label}>
                          <Link
                            href={href}
                            className="text-[13px] font-semibold leading-[1.35] text-[#f5f7fb] transition-colors hover:text-[#8fb4ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#635bff]"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          </nav>

          <div className="mt-16 border-t border-[#3a3f48] pt-5">
            <div className="flex flex-col gap-4 text-[12px] leading-5 text-[#8b939f] lg:flex-row lg:items-center lg:justify-between">
              <p>{footerCopy.legal.copyright}</p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 lg:justify-end">
                <ul className="flex flex-wrap items-center gap-x-2 gap-y-2">
                  <li>
                    <Link
                      href="/contacto"
                      className="text-[#9aa3af] transition-colors hover:text-[#f5f7fb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#635bff]"
                    >
                      {footerCopy.legal.contact}
                    </Link>
                  </li>
                  {footerCopy.legal.links.map(([label, href]) => (
                    <li key={label} className="flex items-center gap-2">
                      <span aria-hidden className="text-[#555c67]">|</span>
                      <Link
                        href={href}
                        className="text-[#9aa3af] transition-colors hover:text-[#f5f7fb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#635bff]"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => setCookieOptionsOpen(true)}
                  className="inline-flex items-center gap-2 text-left text-[#9aa3af] transition-colors hover:text-[#f5f7fb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#635bff]"
                >
                  <Image
                    src="/cookies.svg"
                    alt=""
                    aria-hidden
                    width={28}
                    height={16}
                    className="h-4 w-7 object-contain"
                  />
                  {footerCopy.legal.privacyOptions}
                </button>
                <LanguageSelector variant="dark" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <CookieOptionsModal
        open={cookieOptionsOpen}
        onClose={() => setCookieOptionsOpen(false)}
      />
    </>
  );
}
