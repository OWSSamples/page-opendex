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
      className="opx-json-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        aria-labelledby="cookie-options-title"
        aria-modal="true"
        role="dialog"
        className="opx-json-modal opx-cookie-modal"
      >
        <div className="opx-json-modal-body opx-cookie-modal-body">
          <button
            type="button"
            aria-label={copy.close}
            onClick={onClose}
            className="opx-json-modal-close opx-cookie-modal-close"
          >
            <span aria-hidden>×</span>
          </button>

          <div className="opx-cookie-modal-intro">
            <h2 id="cookie-options-title" className="opx-json-card-title">
              {copy.title}
            </h2>
            <p className="opx-json-text">
              {copy.description}
            </p>
            <Link
              href="/legal/cookies"
              className="opx-json-menu-link opx-cookie-modal-link"
              onClick={onClose}
            >
              {copy.privacyLink}
            </Link>
          </div>

          <div className="opx-json-actions opx-cookie-modal-actions">
            <button
              type="button"
              onClick={() => saveAndClose({ functional: true, performance: true, targeting: true })}
              className="opx-json-button opx-json-button-primary"
            >
              {copy.acceptAll}
            </button>
          </div>

          <div className="opx-cookie-modal-heading-row">
            <h3 className="opx-json-card-title">
              {copy.preferencesTitle}
            </h3>
          </div>

          <div className="opx-json-list opx-cookie-list">
            {consentRows.map((row) => {
              const isNecessary = row.key === "necessary";
              const consentKey: ConsentKey | null = isNecessary ? null : (row.key as ConsentKey);
              const enabled = consentKey ? consent[consentKey] : false;
              const isExpanded = expanded[row.key] ?? false;
              const detailId = `cookie-detail-${row.key}`;

              return (
                <div key={row.key} className="opx-json-card opx-json-card-plain opx-cookie-row">
                  <div className="opx-json-card-header">
                    <div className="opx-cookie-row-copy">
                      <span className="opx-json-label">
                        {copy.rows[row.titleKey]}
                      </span>
                      {!isNecessary ? (
                        <span className="opx-cookie-row-state">
                          {enabled ? copy.enabled : copy.disabled}
                        </span>
                      ) : null}
                    </div>
                    <button
                      type="button"
                      className="opx-cookie-row-detail"
                      aria-expanded={isExpanded}
                      aria-controls={detailId}
                      onClick={() => {
                        setExpanded((current) => ({
                          ...current,
                          [row.key]: !isExpanded,
                        }));
                      }}
                    >
                      {isExpanded ? "Ocultar" : "Ver detalle"}
                    </button>
                    <div className="opx-cookie-row-control">
                      {isNecessary ? (
                        <span className="opx-json-status-accent">
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
                          className={enabled ? "opx-json-switch opx-json-switch-active" : "opx-json-switch"}
                        >
                          <span
                            className="opx-json-switch-thumb"
                          />
                        </button>
                      )}
                    </div>
                    {isExpanded ? (
                      <p id={detailId} className="opx-cookie-row-description">
                        {copy.rows[row.descriptionKey]}
                      </p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="opx-json-footer-row opx-cookie-footer-row">
          <button
            type="button"
            onClick={() => saveAndClose({ functional: false, performance: false, targeting: false })}
            className="opx-json-button opx-json-button-secondary"
          >
            {copy.rejectAll}
          </button>
          <button
            type="button"
            onClick={() => saveAndClose(consent)}
            className="opx-json-button opx-json-button-primary"
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
  const allColumns = [...primaryColumns, ...secondaryColumns];

  return (
    <>
      <footer className="opx-site-footer border-t border-opx-border bg-opx-page font-opx text-opx-text">
        <div className="opx-site-footer-shell mx-auto w-full max-w-7xl px-6 py-12 lg:px-8 lg:py-14">
          <div className="opx-site-footer-top grid gap-9 lg:grid-cols-[280px_1fr] lg:gap-16">
            <section aria-label="Opendex" className="opx-site-footer-brand max-w-[360px]">
              <Link href="/" className="opx-site-footer-logo inline-flex items-center gap-2.5 text-[15px] font-semibold leading-6 text-opx-text no-underline" aria-label="Opendex">
                <Image
                  src="/logo.png"
                  alt=""
                  width={34}
                  height={34}
                  className="h-[34px] w-[34px] object-contain"
                  aria-hidden
                />
              </Link>
              <p className="mt-4 text-[13px] leading-5 text-opx-text/60">
                Infraestructura empresarial para coordinar identidad, evidencia y operación con una base clara para equipos que crecen.
              </p>
            </section>

            <nav aria-label="Footer" className="opx-site-footer-nav grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-11">
              {allColumns.map((column, index) => {
                const headingId = `footer-column-${index}`;

                return (
                  <section key={`${column.title}-${index}`} aria-labelledby={headingId} className="opx-site-footer-column">
                    <h2 id={headingId} className="mb-3.5 text-[13px] font-medium leading-5 text-opx-text/65">
                      {column.title}
                    </h2>
                    <ul className="grid list-none gap-2 p-0">
                      {column.links.map(([label, href]) => (
                        <li key={label}>
                          <Link
                            href={href}
                            className="opx-site-footer-link text-[13px] font-normal leading-5 text-opx-text no-underline transition hover:text-opx-accent focus:text-opx-accent focus:outline-none"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </nav>
          </div>

          <div className="opx-site-footer-bottom mt-11 grid gap-5 border-t border-opx-border pt-6">
            <div className="opx-site-footer-copyright">
              <p className="m-0 text-[13px] leading-5 text-opx-text/75">{footerCopy.legal.copyright}</p>
            </div>

            <div className="opx-site-footer-legal flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <ul className="flex list-none flex-wrap gap-x-7 gap-y-2 p-0">
                <li>
                  <Link
                    href="/contacto"
                    className="opx-site-footer-link text-[13px] leading-5 text-opx-text no-underline transition hover:text-opx-accent focus:text-opx-accent focus:outline-none"
                  >
                    {footerCopy.legal.contact}
                  </Link>
                </li>
                {footerCopy.legal.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="opx-site-footer-link text-[13px] leading-5 text-opx-text no-underline transition hover:text-opx-accent focus:text-opx-accent focus:outline-none"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="opx-site-footer-controls flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setCookieOptionsOpen(true)}
                  className="opx-site-footer-privacy"
                >
                  <Image
                    src="/cookies.svg"
                    alt=""
                    aria-hidden
                    width={28}
                    height={16}
                    className="opx-site-footer-privacy-icon"
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
