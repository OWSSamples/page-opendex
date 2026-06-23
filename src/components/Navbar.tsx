"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n/LanguageProvider";
import { type CommonLabelKey } from "@/i18n/commonLabels";
import {
  ArrowRight,
  Book,
  ChevronDown,
  Code2,
  Compass,
  Fingerprint,
  Layers,
  Menu,
  Receipt,
  ShieldCheck,
  Sparkles,
  Store,
  Terminal,
  Users,
  X,
  Zap,
} from "@/components/icons";

type MenuItem = {
  label: string;
  href: string;
  desc?: string;
  Icon?: typeof Fingerprint;
  badge?: string;
  color?: string;
};

type MenuSection = { title: string; items: MenuItem[] };
type NavItem =
  | { label: keyof typeof menus; displayLabel?: string; hasMenu: true }
  | { label: string; displayLabel?: string; href: string };

const navLabelMap: Record<string, CommonLabelKey> = {
  Desarrolladores: "navDevelopers",
  Documentación: "navDocumentation",
  Producto: "navProduct",
  Soluciones: "navSolutions",
  Blog: "navBlog",
  Precios: "navPricing",
};

const menus: Record<string, MenuSection[]> = {
  Desarrolladores: [
    {
      title: "Construir",
      items: [
        { label: "Documentación", href: "/documentacion", desc: "Mapa técnico por producto, estados y contratos", Icon: Book },
        { label: "API Reference", href: "/documentacion#api", desc: "Borradores de endpoints, eventos y objetos", Icon: Code2 },
        { label: "SDKs y herramientas", href: "/documentacion#sdks", desc: "Patrones de integración en TypeScript, Python y Go", Icon: Terminal },
        { label: "Webhooks", href: "/documentacion#webhooks", desc: "Eventos para sesiones, documentos, tickets y auditoría", Icon: Zap },
      ],
    },
    {
      title: "Aprender",
      items: [
        { label: "Architecture Notes", href: "/blog", desc: "Lecturas sobre modelos, eventos y workspaces", Icon: Layers },
        { label: "Comunidad técnica", href: "/comunidad", desc: "Canales privados para builders y operadores", Icon: Users },
        { label: "Status público", href: "/status", desc: "Estado de preparación de cada línea", Icon: ShieldCheck },
      ],
    },
  ],
  Producto: [
    {
      title: "Plataforma Opendex",
      items: [
        { label: "Opendex Identity Platform", href: "/productos/auth", desc: "Identidad en prelanzamiento, sin fecha pública", Icon: Fingerprint, badge: "Pre", color: "#f6821f" },
        { label: "Factur Workspaces", href: "/productos/invoice", desc: "Workspace fiscal preparado, aún no disponible", Icon: Receipt, badge: "No disponible", color: "#ff500a" },
        { label: "Opendex Kiosko Workspaces", href: "/productos/kiosko", desc: "Operación retail en beta aislada", Icon: Store, badge: "Beta", color: "#ff9910" },
      ],
    },
    {
      title: "Operación",
      items: [
        { label: "Portafolio completo", href: "/productos", desc: "Vista de productos, estados y alcance actual", Icon: Layers },
        { label: "Precios", href: "/precios", desc: "Modelo comercial en preparación por producto", Icon: Compass },
        { label: "Solicitar información", href: "/contacto", desc: "Hablar con el equipo sobre un caso real", Icon: ArrowRight },
      ],
    },
  ],
  Soluciones: [
    {
      title: "Por industria",
      items: [
        { label: "Fintech & banca", href: "/soluciones/fintech", desc: "Acceso sensible, evidencia y workspaces", Icon: ShieldCheck },
        { label: "SaaS B2B", href: "/soluciones/saas", desc: "Organizaciones, roles y soporte por cuenta", Icon: Layers },
        { label: "Retail & e-commerce", href: "/soluciones/retail", desc: "Sucursal, caja, inventario y documentos", Icon: Store },
        { label: "Industria tecnológica", href: "/empresa", desc: "Visión de producto y roadmap de Opendex Web Services", Icon: Zap },
      ],
    },
    {
      title: "Por necesidad",
      items: [
        { label: "Gobierno de acceso", href: "/productos/auth", desc: "SSO, passkeys, sesiones, MFA y auditoría", Icon: Fingerprint },
        { label: "Control documental", href: "/productos/invoice", desc: "Estados, evidencias y operación fiscal", Icon: Receipt },
        { label: "Punto de venta", href: "/productos/kiosko", desc: "Tickets, cortes, inventario y sucursales", Icon: Store },
      ],
    },
  ],
  Changelog: [
    {
      title: "Actualizaciones",
      items: [
        { label: "Notas del producto", href: "/blog", desc: "Cambios, mejoras y decisiones de plataforma", Icon: Sparkles },
        { label: "Status público", href: "/status", desc: "Disponibilidad y preparación por línea", Icon: ShieldCheck },
        { label: "Roadmap", href: "/empresa", desc: "Prioridades y dirección del producto", Icon: Compass },
      ],
    },
  ],
  Empresa: [
    {
      title: "Compañía",
      items: [
        { label: "Sobre Opendex", href: "/empresa", desc: "Visión, operación y enfoque empresarial", Icon: Layers },
        { label: "Contacto", href: "/contacto", desc: "Hablar con el equipo sobre un caso real", Icon: Users },
        { label: "Seguridad", href: "/seguridad", desc: "Prácticas de seguridad y operación responsable", Icon: ShieldCheck },
      ],
    },
  ],
  Documentación: [
    {
      title: "Empezar",
      items: [
        { label: "Arquitectura", href: "/documentacion#quickstart", desc: "Modelo de workspaces y sesiones", Icon: Compass },
        { label: "Guías", href: "/documentacion#guides", desc: "Patrones preparados por producto", Icon: Book },
        { label: "API", href: "/documentacion#api", desc: "Contratos y recursos en preparación", Icon: Code2 },
        { label: "SDKs", href: "/documentacion#sdks", desc: "Herramientas para integración futura", Icon: Terminal },
      ],
    },
    {
      title: "Referencia",
      items: [
        { label: "Status público", href: "/status", desc: "Estado de preparación por línea", Icon: ShieldCheck },
        { label: "Preguntas frecuentes", href: "/faq", desc: "Respuestas sobre estado, acceso y privacidad", Icon: Book },
        { label: "Contacto técnico", href: "/contacto", desc: "Resolver dudas con contexto de proyecto", Icon: Users },
      ],
    },
  ],
};

const flatNav: NavItem[] = [
  { label: "Producto", displayLabel: "Products", hasMenu: true },
  { label: "Documentación", displayLabel: "Docs", hasMenu: true },
  { label: "Changelog", displayLabel: "Changelog", hasMenu: true },
  { label: "Empresa", displayLabel: "Company", hasMenu: true },
  { label: "Pricing", href: "/precios" },
];

function StartButtonArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      viewBox="0 0 10 10"
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m7.25 5-3.5-2.25v4.5z"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuVersion, setMenuVersion] = useState(0);
  const previousMenu = useRef<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeNavigation = window.setTimeout(() => {
      setOpen(false);
      setActiveMenu(null);
    }, 0);

    return () => window.clearTimeout(closeNavigation);
  }, [pathname]);

  const isActive = (href?: string) => {
    if (!href) return false;
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  };

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (label && previousMenu.current && previousMenu.current !== label) {
      setMenuVersion((version) => version + 1);
    }
    if (label) previousMenu.current = label;
    setActiveMenu(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  return (
    <header className="opx-clerk-header sticky top-0 z-50">
      <div
        className={`opx-clerk-shell ${scrolled ? "opx-clerk-shell-scrolled" : ""}`}
        onMouseLeave={scheduleClose}
      >
        <div className="opx-clerk-main-row">
          <Link href="/" aria-label="Ir al inicio" className="opx-brand-frame opx-brand-frame-nav group">
            <span className="opx-brand-frame-grid" aria-hidden />
            <Image
              src="/logo.png"
              alt="Opendex"
              width={40}
              height={40}
              className="opx-brand-frame-logo"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="opx-clerk-nav hidden flex-1 items-center gap-1 md:flex">
            {flatNav.map((item) => {
              const itemLabel = item.displayLabel ?? (navLabelMap[item.label] ? t(navLabelMap[item.label]) : item.label);
              if ("hasMenu" in item) {
                const sections = menus[item.label] ?? [];
                const isOpen = activeMenu === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openMenu(item.label)}
                  >
                    <button
                      type="button"
                      onClick={() => openMenu(isOpen ? "" : item.label)}
                      className={`opx-clerk-nav-link inline-flex items-center gap-1 ${
                        isOpen
                          ? "opx-clerk-nav-link-active"
                          : ""
                      }`}
                      aria-expanded={isOpen}
                    >
                      {itemLabel}
                      <ChevronDown
                        className={`h-3.5 w-3.5 opacity-70 transition ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      />
                    </button>
                    {isOpen && (
                      <div
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                        onMouseEnter={() => openMenu(item.label)}
                        onMouseLeave={scheduleClose}
                      >
                        <div className="cf-dropdown-menu w-[620px] overflow-hidden rounded-[16px] border border-white/60 bg-white/95 backdrop-blur-2xl shadow-[0_32px_90px_-44px_rgba(29,29,27,0.28),0_0_0_1px_rgba(246,130,31,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]">
                          {/* Ambient glow top */}
                          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#fff3e0]/38 to-transparent" />
                          <div key={`dust-${menuVersion}`} className="cf-dropdown-dust" aria-hidden />
                          
                          <div key={`${item.label}-${menuVersion}`} className="cf-dropdown-content relative grid gap-2 p-2.5 md:grid-cols-2">
                            {sections.map((section, sectionIdx) => (
                              <div key={section.title} className={sectionIdx > 0 ? "md:border-l md:border-[#e7e4dc] md:pl-2.5" : ""}>
                                <div className="mb-2 flex items-center gap-2 px-2.5">
                                  <span className="h-px flex-1 bg-gradient-to-r from-[#f6821f]/20 to-transparent" />
                                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#9a9a93]">
                                    {section.title}
                                  </span>
                                  <span className="h-px flex-1 bg-gradient-to-l from-[#f6821f]/20 to-transparent" />
                                </div>
                                <div className="space-y-0.5">
                                  {section.items.map((sub) => (
                                    <Link
                                      key={sub.href}
                                      href={sub.href}
                                      className="cf-menu-item group/sub relative flex items-start gap-3 rounded-[12px] border border-transparent px-2.5 py-2.5 transition-all duration-200 hover:border-[#e7e4dc] hover:bg-white/70"
                                    >
                                      <span
                                        className="absolute bottom-2 left-0 top-2 w-px scale-y-50 rounded-full opacity-0 transition-all duration-200 group-hover/sub:scale-y-100 group-hover/sub:opacity-100"
                                        style={{ backgroundColor: sub.color ?? "#f6821f" }}
                                        aria-hidden
                                      />
                                      {sub.Icon ? (
                                        <div
                                          className="relative z-10 mt-1 flex h-5 w-5 shrink-0 items-center justify-center transition-transform duration-200 group-hover/sub:translate-x-[1px]"
                                          style={{ color: sub.color ?? "#f6821f" }}
                                        >
                                          <sub.Icon className="h-4 w-4" aria-hidden />
                                        </div>
                                      ) : null}

                                      <div className="relative z-10 min-w-0 flex-1">
                                        <div className="flex items-start gap-2">
                                          <span className="text-[13.5px] font-semibold leading-[1.25] tracking-[0] text-[#1d1d1b] transition-colors duration-200 group-hover/sub:text-[#20201d]">
                                            {sub.label}
                                          </span>
                                          {sub.badge ? (
                                            <span className="rounded-full border border-[#e6ddd0] bg-[#fbf7ef] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.06em] text-[#6f4b2d] transition-colors duration-200 group-hover/sub:border-[#d6c9b7] group-hover/sub:bg-white"
                                                  style={{
                                                    borderColor: `${sub.color ?? "#f6821f"}25`,
                                                    color: "#6f4b2d"
                                                  }}>
                                              {sub.badge}
                                            </span>
                                          ) : null}
                                        </div>
                                        {sub.desc ? (
                                          <p className="mt-1 text-[11.5px] leading-[1.55] text-[#6b6b66] transition-colors duration-200 group-hover/sub:text-[#524f48]">
                                            {sub.desc}
                                          </p>
                                        ) : null}
                                      </div>
                                      
                                      <ArrowRight
                                        className="relative z-10 mt-2.5 h-3.5 w-3.5 shrink-0 text-[#9a9a93] opacity-0 transition-all duration-200 group-hover/sub:translate-x-0.5 group-hover/sub:opacity-100"
                                        style={{ color: sub.color ?? "#f6821f" }}
                                        aria-hidden
                                      />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="relative border-t border-[#e7e4dc] bg-[#faf8f4]/80 px-4 py-3">
                            <div className="flex items-center justify-between gap-4">
                              <div>
                                <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9a9a93]">
                                  {item.label === "Producto" ? "Estado real" : item.label === "Desarrolladores" ? "Builders" : item.label}
                                </div>
                                <p className="mt-0.5 text-[11.5px] text-[#6b6b66]">
                                  {item.label === "Producto"
                                    ? "Consulta disponibilidad antes de planear una integración."
                                    : item.label === "Desarrolladores"
                                      ? "Revisa contratos y habla con el equipo técnico."
                                      : "Explora rutas relacionadas y resuelve dudas con contexto."}
                                </p>
                              </div>
                              <Link
                                href={item.label === "Producto" ? "/status" : item.label === "Desarrolladores" ? "/documentacion" : "/contacto"}
                                className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-[#1d1d1b] px-3 py-1.5 text-[12px] font-semibold text-white transition hover:bg-black"
                              >
                                {item.label === "Producto" ? t("viewStatus", "Ver status") : item.label === "Desarrolladores" ? t("viewDocs", "Ir a docs") : t("contactUs", "Contactar")}
                                <ArrowRight className="h-3 w-3" aria-hidden />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`opx-clerk-nav-link ${
                    isActive(item.href)
                      ? "opx-clerk-nav-link-active"
                      : ""
                  }`}
                >
                  {itemLabel}
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="opx-clerk-actions ml-auto flex shrink-0 items-center gap-2.5">
            <Link
              href="/login"
              className="opx-clerk-signin hidden md:inline-flex"
            >
              Sign in
            </Link>
            <Link
              href="/contacto"
              className="opx-clerk-start group hidden md:inline-flex"
            >
              Start building
              <span className="opx-clerk-start-icon-viewport" aria-hidden="true">
                <span className="opx-clerk-start-icon-track">
                  <StartButtonArrow className="opx-clerk-start-icon" />
                  <StartButtonArrow className="opx-clerk-start-icon" />
                  <StartButtonArrow className="opx-clerk-start-icon" />
                </span>
              </span>
            </Link>
            <button
              type="button"
              aria-label="Menú"
              onClick={() => setOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-md border border-[#e7e4dc] bg-white text-[#1d1d1b] transition hover:bg-[#faf8f4] md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="opx-clerk-sub-row">
          <div className="opx-clerk-sub-left">
            <Link href="/productos/auth" className="opx-clerk-sub-link opx-clerk-sub-link-active">
              <Fingerprint className="h-3.5 w-3.5" aria-hidden />
              User Authentication
            </Link>
            <Link href="/productos/invoice" className="opx-clerk-sub-link">
              <Users className="h-3.5 w-3.5" aria-hidden />
              B2B Authentication
            </Link>
            <Link href="/productos/kiosko" className="opx-clerk-sub-link">
              <Receipt className="h-3.5 w-3.5" aria-hidden />
              Billing
            </Link>
            <Link href="/status" className="opx-clerk-sub-link">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Waitlist
            </Link>
          </div>
          <div className="opx-clerk-sub-right">
            <Link href="/documentacion" className="opx-clerk-sub-link">
              Components
              <ChevronDown className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <Link href="/documentacion" className="opx-clerk-sub-link">
              Docs
              <ChevronDown className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </div>

      {/* ============== MOBILE PANEL ============== */}
      {open && (
        <div className="border-b border-[#e7e4dc] bg-[#faf8f4] md:hidden">
          <nav className="mx-auto flex max-w-[1200px] flex-col gap-1 px-5 py-5">
            {flatNav.map((item) => {
              if ("hasMenu" in item) {
                const sections = menus[item.label] ?? [];
                return (
                  <div key={item.label} className="rounded-lg border border-[#e7e4dc] bg-white/70 p-3">
                    <div className="px-1 pb-2 text-[13px] font-semibold text-[#1d1d1b]">
                      {item.label}
                    </div>
                    <div className="grid gap-1">
                      {sections.flatMap((section) => section.items).slice(0, 6).map((sub) => (
                        <Link
                          key={`${item.label}-${sub.href}-${sub.label}`}
                          href={sub.href}
                          className="flex items-center justify-between rounded-md px-2.5 py-2 text-[14px] text-[#4a4a47] hover:bg-[#faf8f4] hover:text-[#1d1d1b]"
                        >
                          <span>{sub.label}</span>
                          {sub.badge ? (
                            <span className="text-[10px] font-semibold uppercase text-[#f6821f]">{sub.badge}</span>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-[#3d3d3a] hover:bg-white hover:text-[#1d1d1b]"
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="my-3 h-px bg-[#e7e4dc]" />
            <div className="flex gap-2">
              <Link
                href="/contacto"
                className="flex h-11 flex-1 items-center justify-center rounded-md border border-[#1d1d1b] text-[14px] font-medium text-[#1d1d1b]"
              >
                {t("register")}
              </Link>
              <Link
                href="/login"
                className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-md bg-[#1d1d1b] text-[14px] font-medium text-white"
              >
                {t("connect")} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
            <Link
              href="/empresa"
              className="mt-4 inline-flex items-center gap-2 px-3 text-[13px] text-[#6b6b66]"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#f6821f]" aria-hidden />
              Roadmap de Opendex Web Services
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
