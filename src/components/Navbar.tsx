"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSelector from "@/components/LanguageSelector";
import { GlowEffect } from "@/components/ui/glow-effect";
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
  | { label: keyof typeof menus; hasMenu: true }
  | { label: string; href: string };

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
  { label: "Desarrolladores", hasMenu: true },
  { label: "Documentación", hasMenu: true },
  { label: "Producto", hasMenu: true },
  { label: "Soluciones", hasMenu: true },
  { label: "Blog", href: "/blog" },
  { label: "Precios", href: "/precios" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { dictionary, t } = useI18n();
  const localeCopy = dictionary.navbar;
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
    const id = window.setTimeout(() => {
      setOpen(false);
      setActiveMenu(null);
    }, 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  const isActive = (href?: string) => {
    if (!href) return false;
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  };

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (label && previousMenu.current && previousMenu.current !== label) {
      setMenuVersion((v) => v + 1);
    }
    if (label) previousMenu.current = label;
    setActiveMenu(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  return (
    <header className="opx-site-header sticky top-0 z-50">

      {/* ══════════ UTILITY BAR ══════════ */}
      <div className="opx-utility-bar relative bg-[#0b0b0e] text-[#a1a1aa]">
        {/* Hairline gradiente en el borde inferior */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(122,162,247,0.4) 25%, rgba(246,130,31,0.55) 50%, rgba(139,92,246,0.4) 75%, transparent 100%)",
          }}
        />
        <div className="opx-utility-inner mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-1.5 text-[12px] md:px-8">
          {/* Izquierda: anuncio + contacto */}
          <div className="flex items-center gap-3">
            <span className="hidden font-medium sm:inline leading-none">
              {localeCopy.announcement}
            </span>
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-1 underline decoration-current/45 decoration-1 underline-offset-4 transition-opacity duration-150 hover:opacity-85"
            >
              {localeCopy.contact}
              <ArrowRight className="h-2.5 w-2.5 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
          {/* Derecha: solo idioma */}
          <div className="flex items-center">
            <LanguageSelector variant="dark" />
          </div>
        </div>
      </div>

      {/* ══════════ MAIN NAV ══════════ */}
      <div
        className={`bg-[#fafaf9] transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_20px_-8px_rgba(29,29,27,0.18)]" : ""
        }`}
        onMouseLeave={scheduleClose}
      >
        <div className="mx-auto flex h-[60px] max-w-[1200px] items-center gap-6 px-5 md:px-8">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Ir al inicio"
            className="group flex shrink-0 items-center gap-2.5 transition-opacity duration-150 hover:opacity-70"
          >
            <img
              src="/assets/brand/opendex-mark.png"
              alt="Opendex"
              className="h-7 w-7 object-contain"
            />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden flex-1 items-center gap-0.5 md:flex">
            {flatNav.map((item) => {
              const itemLabel = navLabelMap[item.label]
                ? t(navLabelMap[item.label])
                : item.label;

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
                      aria-expanded={isOpen}
                      className={`inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-[13.5px] font-medium transition-colors duration-150 ${
                        isOpen
                          ? "bg-[#f1f0ed] text-[#1a1a18]"
                          : "text-[#52524e] hover:bg-[#f1f0ed] hover:text-[#1a1a18]"
                      }`}
                    >
                      {itemLabel}
                      <ChevronDown
                        className={`h-3 w-3 opacity-50 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      />
                    </button>

                    {/* Dropdown */}
                    {isOpen && (
                      <div
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                        onMouseEnter={() => openMenu(item.label)}
                        onMouseLeave={scheduleClose}
                      >
                        {/* Bridge invisible para no perder el hover */}
                        <div className="absolute -top-3 left-0 right-0 h-3" />

                        <div className="w-[600px] overflow-hidden rounded-[18px] border border-[#e8e6e0] bg-white shadow-[0_20px_60px_-20px_rgba(29,29,27,0.22),0_0_0_1px_rgba(29,29,27,0.04),inset_0_1px_0_#fff]">
                          {/* Glow naranja sutil en la parte alta */}
                          <div
                            aria-hidden
                            className="pointer-events-none absolute inset-x-0 top-0 h-20 rounded-t-[18px]"
                            style={{
                              background:
                                "radial-gradient(ellipse at 50% -10%, rgba(246,130,31,0.07) 0%, transparent 65%)",
                            }}
                          />

                          <div
                            key={`${item.label}-${menuVersion}`}
                            className="relative grid gap-0 p-2 md:grid-cols-2"
                          >
                            {sections.map((section, sIdx) => (
                              <div
                                key={section.title}
                                className={`p-1.5 ${sIdx > 0 ? "md:border-l md:border-[#ede9e2]" : ""}`}
                              >
                                {/* Título de sección */}
                                <div className="mb-1.5 flex items-center gap-2 px-2.5 pt-0.5">
                                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#b0ada6]">
                                    {section.title}
                                  </span>
                                  <span className="h-px flex-1 bg-[#ede9e2]" />
                                </div>

                                <div className="space-y-px">
                                  {section.items.map((sub) => (
                                    <Link
                                      key={sub.href}
                                      href={sub.href}
                                      className="group/sub flex items-center gap-3 rounded-xl p-2.5 transition-colors duration-150 hover:bg-[#faf8f4]"
                                    >
                                      {/* Ícono */}
                                      {sub.Icon && (
                                        <span
                                          className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] border transition-all duration-150 group-hover/sub:scale-[1.04]"
                                          style={{
                                            color: sub.color ?? "#f6821f",
                                            background: `${sub.color ?? "#f6821f"}10`,
                                            borderColor: `${sub.color ?? "#f6821f"}22`,
                                          }}
                                        >
                                          <sub.Icon className="h-3.5 w-3.5" aria-hidden />
                                        </span>
                                      )}

                                      {/* Texto */}
                                      <div className="min-w-0 flex-1">
                                        <div className="flex items-center gap-2">
                                          <span className="text-[13px] font-semibold text-[#1a1a18] transition-colors duration-150 group-hover/sub:text-[#f6821f]">
                                            {sub.label}
                                          </span>
                                          {sub.badge && (
                                            <span
                                              className="rounded-full px-1.5 py-px text-[8px] font-bold uppercase tracking-[0.06em]"
                                              style={{
                                                color: sub.color ?? "#f6821f",
                                                background: `${sub.color ?? "#f6821f"}12`,
                                                border: `1px solid ${sub.color ?? "#f6821f"}28`,
                                              }}
                                            >
                                              {sub.badge}
                                            </span>
                                          )}
                                        </div>
                                        {sub.desc && (
                                          <p className="mt-0.5 text-[11px] leading-snug text-[#9a9890] transition-colors duration-150 group-hover/sub:text-[#6b6862]">
                                            {sub.desc}
                                          </p>
                                        )}
                                      </div>

                                      {/* Flecha */}
                                      <ArrowRight
                                        className="h-3 w-3 shrink-0 opacity-0 transition-all duration-150 group-hover/sub:translate-x-0.5 group-hover/sub:opacity-100"
                                        style={{ color: sub.color ?? "#f6821f" }}
                                        aria-hidden
                                      />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Footer strip */}
                          <div className="flex items-center justify-between border-t border-[#ede9e2] bg-[#faf8f4] px-4 py-2.5">
                            <p className="text-[11px] text-[#9a9890]">
                              {item.label === "Producto"
                                ? "Consulta disponibilidad antes de planear una integración."
                                : item.label === "Desarrolladores"
                                  ? "Revisa contratos y habla con el equipo técnico."
                                  : "Explora rutas y resuelve dudas con contexto."}
                            </p>
                            <Link
                              href={
                                item.label === "Producto"
                                  ? "/status"
                                  : item.label === "Desarrolladores"
                                    ? "/documentacion"
                                    : "/contacto"
                              }
                              className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-[#1a1a18] px-3 py-1.5 text-[11.5px] font-semibold text-white transition-colors duration-150 hover:bg-[#2e2e2b]"
                            >
                              {item.label === "Producto"
                                ? t("viewStatus", "Ver status")
                                : item.label === "Desarrolladores"
                                  ? t("viewDocs", "Ir a docs")
                                  : t("contactUs", "Contactar")}
                              <ArrowRight className="h-2.5 w-2.5" aria-hidden />
                            </Link>
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
                  className={`rounded-md px-3 py-1.5 text-[13.5px] font-medium transition-colors duration-150 ${
                    isActive(item.href)
                      ? "text-[#1a1a18]"
                      : "text-[#52524e] hover:bg-[#f1f0ed] hover:text-[#1a1a18]"
                  }`}
                >
                  {itemLabel}
                </Link>
              );
            })}
          </nav>

          {/* CTAs derecha */}
          <div className="ml-auto flex shrink-0 items-center gap-2">
            {/* Register — outlined */}
            <Link
              href="/contacto"
              className="hidden h-8 items-center justify-center rounded-md border border-[#d4d1ca] px-4 text-[13px] font-medium text-[#1a1a18] transition-all duration-150 hover:border-[#1a1a18] hover:bg-[#f1f0ed] md:inline-flex"
            >
              {t("register")}
            </Link>

            {/* Sign In — filled con GlowEffect */}
            <div className="relative hidden md:block">
              <GlowEffect
                colors={['#f6821f', '#ff500a', '#ffb347', '#f6821f']}
                mode="colorShift"
                blur="soft"
                duration={3}
                scale={0.9}
              />
              <Link
                href="/login"
                className="relative inline-flex h-8 items-center justify-center rounded-md bg-[#1a1a18] px-4 text-[13px] font-medium text-white outline outline-1 outline-white/10 transition-opacity duration-150 hover:opacity-90"
              >
                {t("connect")}
              </Link>
            </div>

            {/* Hamburger */}
            <button
              type="button"
              aria-label="Menú"
              onClick={() => setOpen((v) => !v)}
              className="grid h-8 w-8 place-items-center rounded-md border border-[#ddd9d2] bg-white text-[#52524e] transition-colors duration-150 hover:bg-[#f1f0ed] hover:text-[#1a1a18] md:hidden"
            >
              {open ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>

        {/* Hairline divisor inferior */}
        <div className="mx-auto h-px max-w-[1200px] bg-[#e8e6e0]" />
      </div>

      {/* ══════════ MOBILE PANEL ══════════ */}
      {open && (
        <div className="border-b border-[#e8e6e0] bg-[#fafaf9] md:hidden">
          <nav className="mx-auto flex max-w-[1200px] flex-col gap-1 px-5 py-4">
            {flatNav.map((item) => {
              if ("hasMenu" in item) {
                const sections = menus[item.label] ?? [];
                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-[#e8e6e0] bg-white p-3"
                  >
                    <div className="px-1 pb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#b0ada6]">
                      {item.label}
                    </div>
                    <div className="space-y-px">
                      {sections
                        .flatMap((s) => s.items)
                        .slice(0, 6)
                        .map((sub) => (
                          <Link
                            key={`${item.label}-${sub.href}-${sub.label}`}
                            href={sub.href}
                            className="flex items-center justify-between rounded-lg px-2.5 py-2 text-[13.5px] text-[#52524e] transition-colors duration-150 hover:bg-[#faf8f4] hover:text-[#1a1a18]"
                          >
                            <span>{sub.label}</span>
                            {sub.badge && (
                              <span
                                className="text-[10px] font-bold uppercase"
                                style={{ color: sub.color ?? "#f6821f" }}
                              >
                                {sub.badge}
                              </span>
                            )}
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
                  className="rounded-xl px-3 py-2.5 text-[14px] font-medium text-[#52524e] transition-colors duration-150 hover:bg-[#f1f0ed] hover:text-[#1a1a18]"
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="my-2 h-px bg-[#e8e6e0]" />

            <div className="flex gap-2">
              <Link
                href="/contacto"
                className="flex h-10 flex-1 items-center justify-center rounded-xl border border-[#d4d1ca] text-[13.5px] font-medium text-[#1a1a18]"
              >
                {t("register")}
              </Link>
              <Link
                href="/login"
                className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#1a1a18] text-[13.5px] font-medium text-white"
              >
                {t("connect")} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>

            <Link
              href="/empresa"
              className="mt-3 inline-flex items-center gap-2 px-2 text-[12px] text-[#9a9890]"
            >
              <Sparkles className="h-3 w-3 text-[#f6821f]" aria-hidden />
              Roadmap de Opendex Web Services
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
