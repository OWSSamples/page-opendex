"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "@/components/icons";
import LanguageSelector from "@/components/LanguageSelector";
import LocalizedLabel from "@/components/LocalizedLabel";
import { useI18n } from "@/i18n/LanguageProvider";
import { useEffect, useState } from "react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.67 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.4-2.69 5.37-5.25 5.66.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.79l-5.32-6.96L4.9 22H1.64l8.04-9.18L1 2h6.93l4.81 6.36L18.244 2Zm-1.19 18h1.87L7.04 4H5.04l12.014 16Z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.65H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5.8 31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
  </svg>
);

const bottomLinks: [string, string][] = [
  ["Privacidad", "/legal/privacidad"],
  ["Seguridad", "/seguridad"],
  ["Contacto", "/contacto"],
  ["Status", "/status"],
];

const socials = [
  { Icon: GithubIcon, href: "https://github.com/opendex", label: "GitHub" },
  { Icon: TwitterIcon, href: "https://x.com/opendexhq", label: "X" },
  { Icon: LinkedinIcon, href: "https://linkedin.com/company/opendex", label: "LinkedIn" },
  { Icon: YoutubeIcon, href: "https://youtube.com/@opendex", label: "YouTube" },
  { Icon: Mail, href: "mailto:hola@opendex.io", label: "Email" },
];

type ConsentKey = "functional" | "performance" | "targeting";
type ConsentState = Record<ConsentKey, boolean>;

const consentStorageKey = "opendex-cookie-consent";
const defaultConsent: ConsentState = {
  functional: true,
  performance: true,
  targeting: true,
};

const consentRows: Array<{
  key: "necessary" | ConsentKey;
  title: string;
  description: string;
}> = [
  {
    key: "necessary",
    title: "Cookies estrictamente necesarias",
    description:
      "Necesarias para funciones basicas del sitio, seguridad, manejo de sesion y almacenamiento del consentimiento. No se pueden desactivar.",
  },
  {
    key: "functional",
    title: "Cookies funcionales",
    description:
      "Recuerdan preferencias como idioma, region y ajustes de interfaz para que la experiencia sea consistente.",
  },
  {
    key: "performance",
    title: "Cookies de rendimiento",
    description:
      "Ayudan a entender uso agregado y rendimiento para mejorar carga, navegacion y estabilidad.",
  },
  {
    key: "targeting",
    title: "Cookies de medicion",
    description:
      "Sirven para medir campañas y contenido sin cambiar el estado actual de los productos.",
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
            aria-label="Cerrar opciones de cookies"
            onClick={onClose}
            className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-md text-[#b7b7ba] transition hover:bg-white/5 hover:text-white"
          >
            <span className="text-3xl leading-none">&times;</span>
          </button>

          <h2 id="cookie-options-title" className="text-[20px] font-semibold leading-tight text-[#d5d5d7]">
            Opciones de privacidad
          </h2>
          <p className="mt-1 max-w-[540px] text-[13.5px] leading-6 text-[#8f8f94]">
            Puedes elegir que categorias aceptar para mejorar la experiencia del sitio.
            Las cookies necesarias se mantienen activas porque sostienen funciones basicas
            de seguridad, sesion y consentimiento.
          </p>
          <Link
            href="/legal/privacidad#cookies"
            className="mt-1 inline-flex text-[13.5px] text-[#f0642f] underline underline-offset-2 transition hover:text-[#ff895d]"
            onClick={onClose}
          >
            Política de privacidad de Opendex
          </Link>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => saveAndClose({ functional: true, performance: true, targeting: true })}
              className="rounded-full bg-[#df6a3a] px-5 py-2.5 text-[14px] font-medium text-white transition hover:bg-[#f07843]"
            >
              Aceptar todo
            </button>
          </div>

          <h3 className="mt-6 text-[15px] font-semibold text-[#c9c9cc]">
            Preferencias de consentimiento
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
                      {row.title}
                    </span>
                    {isNecessary ? (
                      <span className="text-[12px] font-medium text-[#f0642f]">
                        Siempre activa
                      </span>
                    ) : (
                      <button
                        type="button"
                        role="switch"
                        aria-checked={enabled}
                        aria-label={`${row.title} ${enabled ? "activadas" : "desactivadas"}`}
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
                      {row.description}
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
            Rechazar todo
          </button>
          <button
            type="button"
            onClick={() => saveAndClose(consent)}
            className="h-10 flex-1 rounded-full border border-white/10 px-5 text-[13.5px] font-semibold text-[#f0642f] transition hover:border-[#f0642f]/60 hover:bg-[#f0642f]/10"
          >
            Confirmar preferencias
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

  return (
    <>
      <footer className="relative overflow-hidden bg-[#0b0b0e] text-[#a1a1aa]">
        {/* gradient hairline top */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(122,162,247,0.5) 18%, rgba(246,130,31,0.6) 50%, rgba(139,92,246,0.5) 82%, transparent 100%)",
          }}
        />

      {/* Vertical blueprint guides (left & right side rails like Cloudflare) */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-6 hidden w-px md:block"
             style={{
               backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.10) 50%, transparent 50%)",
               backgroundSize: "1px 12px",
             }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-6 hidden w-px md:block"
             style={{
               backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.10) 50%, transparent 50%)",
               backgroundSize: "1px 12px",
             }}
        />

      {/* Ambient blob */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 h-[460px] w-[820px] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(30, 110, 70, 0.30), transparent 70%)",
          }}
        />

      <div className="relative z-10 mx-auto max-w-[1280px] px-10 pt-20 pb-8 md:px-16">
        {/* Top: brand + columns */}
        <div className="grid gap-12 lg:grid-cols-[1fr_3fr]">
          {/* Brand column */}
          <div>
            <Link href="/" className="opx-brand-frame opx-brand-frame-footer group">
              <span className="opx-brand-frame-grid" aria-hidden />
              <Image
                src="/logo.png"
                alt="Opendex"
                width={40}
                height={40}
                className="opx-brand-frame-logo"
              />
              <span className="opx-brand-word">Opendex</span>
            </Link>
            <p className="mt-6 max-w-xs text-[13px] leading-6 text-[#8b8b94]">
              {footerCopy.description}
            </p>

            <LanguageSelector variant="dark" className="mt-8" />

            {/* Socials */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/[0.02] text-[#a1a1aa] transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Columns grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            {footerCopy.columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-[12px] font-medium text-[#71717a]">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map(([label, href]) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-[13.5px] text-[#d4d4d8] transition hover:text-white"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col gap-4 border-t border-white/8 pt-6 text-[12.5px] text-[#71717a] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Opendex Web Services, Inc.</p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {bottomLinks.map(([label, href], i) => (
              <li key={label} className="flex items-center gap-4">
                <Link href={href} className="text-[#d4d4d8] transition hover:text-white">
                  {label}
                </Link>
                {i < bottomLinks.length - 1 ? (
                  <span aria-hidden className="text-[#3f3f46]">|</span>
                ) : null}
              </li>
            ))}
            <li className="flex items-center text-[#d4d4d8]">
              <button
                type="button"
                onClick={() => setCookieOptionsOpen(true)}
                className="inline-flex items-center gap-2 text-left text-[#d4d4d8] transition hover:text-white"
              >
                <Image
                  src="/cookies.svg"
                  alt=""
                  aria-hidden
                  width={28}
                  height={16}
                  className="h-4 w-7 object-contain"
                />
                <LocalizedLabel labelKey="privacyOptions" />
              </button>
            </li>
          </ul>
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
