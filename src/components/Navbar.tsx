"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n/LanguageProvider";
import { useUIText } from "@/i18n/useUIText";
import { type CommonLabelKey } from "@/i18n/commonLabels";
import { ButtonLink } from "@/components/Button";
import IdentityIcon, { type IdentityIconName } from "@/components/IdentityIcon";
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
  Search,
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
};

type MenuSection = { title: string; items: MenuItem[] };
type MegaMenuMeta = {
  eyebrow: string;
  title: string;
  description: string;
  statLabel: string;
  statValue: string;
  ctaLabel: string;
  ctaHref: string;
  promoTag: string;
  promoTitle: string;
  promoDescription: string;
};
type NavItem =
  | { label: keyof typeof menus; displayLabel?: string; hasMenu: true }
  | { label: string; displayLabel?: string; href: string };

const navLabelMap: Record<string, CommonLabelKey> = {
  Desarrolladores: "navDevelopers",
  Producto: "navProduct",
  Soluciones: "navSolutions",
  Blog: "navBlog",
  Precios: "navPricing",
};

const headerLogoVariants = [
  "/assets-for-opendex/logo-opendex-floral.png",
  "/assets-for-opendex/logo-opendex-nube.png",
  "/assets-for-opendex/logo-opendex-sakura-full.png",
  "/assets-for-opendex/logo-opendex-verde.png",
  "/assets-for-opendex/logo-for-opendex-blue.png",
];

const menus: Record<string, MenuSection[]> = {
  Desarrolladores: [
    {
      title: "Construir",
      items: [
        { label: "Estado público", href: "/status", desc: "Estado de preparación por línea", Icon: ShieldCheck },
        { label: "Notas técnicas", href: "/blog", desc: "Decisiones, cambios y contexto de plataforma", Icon: Book },
        { label: "Contacto técnico", href: "/contacto", desc: "Hablar con el equipo sobre integración", Icon: Terminal },
        { label: "Solicitar contexto", href: "/contacto", desc: "Compartir caso, alcance y necesidades", Icon: Zap },
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
        { label: "Opendex Identity Platform", href: "/productos/auth", desc: "Identidad en prelanzamiento, sin fecha pública", Icon: Fingerprint, badge: "Pre" },
        { label: "Factur Workspaces", href: "/productos/invoice", desc: "Workspace fiscal preparado, aún no disponible", Icon: Receipt, badge: "No disponible" },
        { label: "Opendex Kiosko Workspaces", href: "/productos/kiosko", desc: "Operación retail en beta aislada", Icon: Store, badge: "Beta" },
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
};

const flatNav: NavItem[] = [
  { label: "Producto", displayLabel: "Products", hasMenu: true },
  { label: "Soluciones", displayLabel: "Solutions", hasMenu: true },
  { label: "Desarrolladores", displayLabel: "Developers", hasMenu: true },
  { label: "Empresa", displayLabel: "Company", hasMenu: true },
  { label: "Pricing", href: "/precios" },
];

const megaMenuMeta: Record<string, MegaMenuMeta> = {
  Producto: {
    eyebrow: "Portfolio operativo",
    title: "Estructura de productos para operar con claridad.",
    description:
      "Consulta qué está preparado, qué sigue en desarrollo y qué soporte existe hoy para cada línea antes de iniciar una integración.",
    statLabel: "Estado real",
    statValue: "Pre / Beta / No disponible",
    ctaLabel: "Ver portafolio",
    ctaHref: "/productos",
    promoTag: "Opendex / Platform",
    promoTitle: "Capas de identidad, fiscalidad y retail en un mismo marco.",
    promoDescription:
      "Organización, permisos, documentos y trazabilidad en una lectura más compacta para equipos técnicos y operativos.",
  },
  Desarrolladores: {
    eyebrow: "Build guide",
    title: "Recursos técnicos para integrar sin improvisar.",
    description:
      "Contexto técnico, estado público y contacto directo mientras la documentación global se prepara.",
    statLabel: "Cobertura",
    statValue: "Estado / Contacto / Notas",
    ctaLabel: "Solicitar contexto",
    ctaHref: "/contacto",
    promoTag: "Opendex / Developers",
    promoTitle: "Contratos y decisiones técnicas que reducen fricción.",
    promoDescription:
      "Patrones para equipos que necesitan leer el sistema, no solo consumir una lista de enlaces.",
  },
  Soluciones: {
    eyebrow: "Use cases",
    title: "Rutas por industria y por necesidad operativa.",
    description:
      "Agrupamos las piezas que más suelen repetirse en fintech, SaaS y retail para que la lectura sea más rápida.",
    statLabel: "Cobertura",
    statValue: "Industria / necesidad",
    ctaLabel: "Explorar soluciones",
    ctaHref: "/soluciones/fintech",
    promoTag: "Opendex / Solutions",
    promoTitle: "Contexto listo para equipos que comparan opciones.",
    promoDescription:
      "Una vista más cercana a plataformas de enterprise que a un catálogo genérico de marketing.",
  },
  Changelog: {
    eyebrow: "Release notes",
    title: "Cambios, estado y dirección del producto.",
    description:
      "Seguimiento de evolución pública con una lectura resumida de preparación y prioridades.",
    statLabel: "Frecuencia",
    statValue: "Actualizaciones públicas",
    ctaLabel: "Ver changelog",
    ctaHref: "/blog",
    promoTag: "Opendex / Status",
    promoTitle: "Una referencia visual simple para cambios recientes.",
    promoDescription:
      "Sirve para comunicar avance sin saturar la navegación con piezas aisladas.",
  },
  Empresa: {
    eyebrow: "Company",
    title: "Visión empresarial, enfoque y operación.",
    description:
      "Accede a la información central de la compañía, contacto y criterios de seguridad sin perder contexto.",
    statLabel: "Enfoque",
    statValue: "Producto / Seguridad",
    ctaLabel: "Conocer la empresa",
    ctaHref: "/empresa",
    promoTag: "Opendex / Company",
    promoTitle: "Una señal visual más sobria para la parte institucional.",
    promoDescription:
      "Mantiene consistencia entre producto, documentación y páginas corporativas.",
  },
};

const megaMenuQuickLinks: Array<{
  href: string;
  labelKey: string;
  fallback: string;
  iconName: IdentityIconName;
}> = [
  { href: "/contacto", labelKey: "navbar.promo.quick.trial", fallback: "Free Trial", iconName: "shield" },
  { href: "/precios", labelKey: "navbar.promo.quick.pricing", fallback: "Pricing", iconName: "payment" },
  { href: "/blog", labelKey: "navbar.promo.quick.release", fallback: "Release Overview", iconName: "document" },
  { href: "/productos", labelKey: "navbar.promo.quick.explore", fallback: "Explore All Solutions", iconName: "workspace" },
];

const platformPromoCards = [
  {
    title: "Opendex",
    description: "Secure all your identities, documents and operational events inside a single control fabric.",
    href: "/productos/auth",
    tone: "cyan",
  },
  {
    title: "Identity",
    description: "Ship enterprise-grade customer and workforce access with clearer governance.",
    href: "/seguridad",
    tone: "dark",
  },
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
  const text = useUIText();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuVersion, setMenuVersion] = useState(0);
  const [headerLogoIndex, setHeaderLogoIndex] = useState(0);
  const previousMenu = useRef<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const storageKey = "opx-header-logo-index";
    const savedIndex = Number(window.sessionStorage.getItem(storageKey));

    if (Number.isInteger(savedIndex) && savedIndex >= 0 && savedIndex < headerLogoVariants.length) {
      setHeaderLogoIndex(savedIndex);
      return;
    }

    const nextIndex = Math.floor(Math.random() * headerLogoVariants.length);
    window.sessionStorage.setItem(storageKey, String(nextIndex));
    setHeaderLogoIndex(nextIndex);
  }, []);

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
  const activeNavItem = activeMenu
    ? flatNav.find((item) => "hasMenu" in item && item.label === activeMenu)
    : null;
  const activeMenuVariant =
    activeNavItem && "hasMenu" in activeNavItem
      ? activeNavItem.label === "Producto"
          ? "product"
          : activeNavItem.label === "Desarrolladores"
            ? "developers"
            : activeNavItem.label === "Empresa"
              ? "company"
              : "story"
      : "story";

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
          <Link
            href="/"
            aria-label={text("navbar.home", "Ir al inicio")}
            className="opx-brand-frame opx-brand-frame-nav"
          >
            <span className="opx-brand-frame-logo-stack" aria-hidden>
              {headerLogoVariants.map((logo, index) => (
                <img
                  key={logo}
                  src={logo}
                  alt=""
                  className={`opx-brand-frame-logo ${index === headerLogoIndex ? "opx-brand-frame-logo-active" : ""}`}
                />
              ))}
            </span>
            <span className="sr-only">Opendex</span>
          </Link>

          {/* Desktop nav */}
          <nav className="opx-clerk-nav hidden flex-1 items-center gap-1 md:flex">
            {flatNav.map((item) => {
              const itemLabel = text(
                `navbar.nav.${item.label}`,
                item.displayLabel ?? (navLabelMap[item.label] ? t(navLabelMap[item.label]) : item.label)
              );
              if ("hasMenu" in item) {
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
              {text("navbar.action.signIn", "Iniciar sesión")}
            </Link>
            <Link
              href="/contacto"
              className="opx-clerk-start group hidden md:inline-flex"
            >
              {text("navbar.action.startBuilding", "Empezar")}
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
              aria-label={text("navbar.mobile.menu", "Menú")}
              onClick={() => setOpen((value) => !value)}
              className="opx-json-tab md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {activeMenu && activeNavItem && "hasMenu" in activeNavItem ? (
          <div
            className="absolute left-1/2 top-full z-40 -translate-x-1/2 pt-4"
            onMouseEnter={() => openMenu(activeNavItem.label)}
            onMouseLeave={scheduleClose}
          >
            <div
              className="opx-mega-menu"
              style={{ width: "min(1440px, calc(100vw - 24px))" }}
            >
              <div
                key={`${activeNavItem.label}-${menuVersion}`}
                className={`opx-mega-menu-panel opx-mega-menu-panel-${activeMenuVariant}`}
              >
                {(() => {
                  const menuMeta = megaMenuMeta[activeNavItem.label] ?? megaMenuMeta.Producto;
                  const sections = menus[activeNavItem.label] ?? [];
                  const metaPath = `navbar.mega.${activeNavItem.label}`;
                  if (activeNavItem.label === "Producto") {
                    return (
                      <>
                        <aside className="opx-mega-menu-intro">
                          <h3 className="opx-mega-menu-title">
                            {text("navbar.nav.Producto", "Products")}
                          </h3>
                          <p className="opx-mega-menu-description">
                            {text(`${metaPath}.description`, menuMeta.description)}
                          </p>

                          <nav
                            className="opx-mega-menu-quick-links"
                            aria-label={text("navbar.promo.quickAria", "Quick links")}
                          >
                            {megaMenuQuickLinks.slice(0, 4).map(({ href, labelKey, fallback, iconName }, quickIndex) => (
                              <Link
                                key={`${activeNavItem.label}-quick-${quickIndex}-${href}`}
                                href={href}
                                className="opx-mega-menu-quick-link"
                              >
                                <IdentityIcon name={iconName} size={18} />
                                <span>{text(labelKey, fallback)}</span>
                              </Link>
                            ))}
                          </nav>
                        </aside>

                        <div className="opx-mega-menu-content opx-mega-menu-content-product lg:grid-cols-2">
                          {sections.map((section, sectionIndex) => (
                            <div key={section.title} className="opx-mega-menu-section">
                              <div className="opx-mega-menu-section-title">
                                {text(`navbar.menu.${activeNavItem.label}.${sectionIndex}.title`, section.title)}
                              </div>
                              <div className="space-y-1">
                                {section.items.map((sub, itemIndex) => (
                                  <Link
                                    key={`${activeNavItem.label}-${sectionIndex}-${itemIndex}-${sub.href}`}
                                    href={sub.href}
                                    className="opx-mega-menu-item"
                                  >
                                    <span className="opx-mega-menu-item-label">
                                      {text(`navbar.menu.${activeNavItem.label}.${sectionIndex}.${itemIndex}.label`, sub.label)}
                                    </span>
                                    {sub.badge ? (
                                      <span className="opx-mega-menu-item-badge">
                                        {text(`navbar.menu.${activeNavItem.label}.${sectionIndex}.${itemIndex}.badge`, sub.badge)}
                                      </span>
                                    ) : null}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        <aside className="opx-mega-menu-platforms">
                          <h3>{text("navbar.platforms.title", "Platforms")}</h3>
                          {platformPromoCards.map((card) => (
                            <Link
                              key={card.title}
                              href={card.href}
                              className={`opx-mega-menu-platform-card opx-mega-menu-platform-card-${card.tone}`}
                            >
                              <span className="opx-mega-menu-platform-logo">O</span>
                              <strong>{card.title}</strong>
                              <span>{card.description}</span>
                            </Link>
                          ))}
                        </aside>
                      </>
                    );
                  }

                  if (activeNavItem.label === "Desarrolladores") {
                    return (
                      <>
                        <aside className="opx-mega-menu-intro">
                          <h3 className="opx-mega-menu-title">
                            {text("navbar.nav.Desarrolladores", "Developers")}
                          </h3>
                          <p className="opx-mega-menu-description">
                            {text(`${metaPath}.description`, menuMeta.description)}
                          </p>

                          <nav
                            className="opx-mega-menu-quick-links"
                            aria-label={text("navbar.promo.quickAria", "Quick links")}
                          >
                            {megaMenuQuickLinks.slice(0, 4).map(({ href, labelKey, fallback, iconName }, quickIndex) => (
                              <Link
                                key={`${activeNavItem.label}-quick-${quickIndex}-${href}`}
                                href={href}
                                className="opx-mega-menu-quick-link"
                              >
                                <IdentityIcon name={iconName} size={18} />
                                <span>{text(labelKey, fallback)}</span>
                              </Link>
                            ))}
                          </nav>
                        </aside>

                        <div className="opx-mega-menu-content lg:grid-cols-2">
                          {sections.map((section, sectionIndex) => (
                            <div key={section.title} className="opx-mega-menu-section">
                              <div className="opx-mega-menu-section-title">
                                {text(`navbar.menu.${activeNavItem.label}.${sectionIndex}.title`, section.title)}
                              </div>
                              <div className="space-y-1">
                                {section.items.map((sub, itemIndex) => (
                                  <Link
                                    key={`${activeNavItem.label}-${sectionIndex}-${itemIndex}-${sub.href}`}
                                    href={sub.href}
                                    className="opx-mega-menu-item"
                                  >
                                    <span className="opx-mega-menu-item-label">
                                      {text(`navbar.menu.${activeNavItem.label}.${sectionIndex}.${itemIndex}.label`, sub.label)}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        <aside className="opx-mega-menu-release-card">
                          <h3>{text("navbar.release.title", "Release Overview")}</h3>
                          <div className="opx-mega-menu-release-art" aria-hidden>
                            <span />
                            <span />
                            <span />
                            <span />
                          </div>
                          <p>{text("navbar.release.copy", "Explore product releases, technical notes and platform updates.")}</p>
                          <Link href="/blog">{text("navbar.release.link", "See the latest announcements")}</Link>
                        </aside>
                      </>
                    );
                  }

                  if (activeNavItem.label === "Empresa") {
                    return (
                      <>
                        <aside className="opx-mega-menu-intro opx-mega-menu-intro-company">
                          <h3 className="opx-mega-menu-title">
                            {text("navbar.nav.Empresa", "Company")}
                          </h3>
                          <p className="opx-mega-menu-description">
                            {text(`${metaPath}.description`, menuMeta.description)}
                          </p>
                          <nav className="opx-mega-menu-quick-links" aria-label={text("navbar.company.quickAria", "Company links")}>
                            <Link href="/contacto" className="opx-mega-menu-quick-link">
                              <IdentityIcon name="identity" size={18} />
                              <span>{text("navbar.company.contact", "Contact Us")}</span>
                            </Link>
                          </nav>
                        </aside>

                        <div className="opx-mega-menu-content lg:grid-cols-2">
                          {sections.map((section, sectionIndex) => (
                            <div key={section.title} className="opx-mega-menu-section opx-mega-menu-section-company">
                              <div className="opx-mega-menu-section-title">
                                {text(`navbar.menu.${activeNavItem.label}.${sectionIndex}.title`, section.title)}
                              </div>
                              <div className="space-y-1">
                                {section.items.map((sub, itemIndex) => (
                                  <Link
                                    key={`${activeNavItem.label}-${sectionIndex}-${itemIndex}-${sub.href}`}
                                    href={sub.href}
                                    className="opx-mega-menu-item"
                                  >
                                    <span className="opx-mega-menu-item-label">
                                      {text(`navbar.menu.${activeNavItem.label}.${sectionIndex}.${itemIndex}.label`, sub.label)}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                          <div className="opx-mega-menu-section opx-mega-menu-section-company">
                            <div className="opx-mega-menu-section-title">{text("navbar.company.values", "Values & Impact")}</div>
                            {["Responsabilidad", "Comunidad", "Confianza", "Accesibilidad", "Compromiso seguro"].map((item) => (
                              <Link key={item} href="/empresa" className="opx-mega-menu-item">
                                <span className="opx-mega-menu-item-label">{item}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        <aside className="opx-mega-menu-company-card">
                          <ArrowRight className="h-4 w-4" aria-hidden />
                          <strong>{text("navbar.company.card", "Discover our latest stories")}</strong>
                        </aside>
                      </>
                    );
                  }

                  return (
                    <>
                      <aside className="opx-mega-menu-intro">
                        <h3 className="opx-mega-menu-title">
                          {activeNavItem.displayLabel ?? text(`navbar.nav.${activeNavItem.label}`, activeNavItem.label)}
                        </h3>
                        <p className="opx-mega-menu-description">{text(`${metaPath}.description`, menuMeta.description)}</p>

                        <nav
                          className="opx-mega-menu-quick-links"
                          aria-label={text("navbar.promo.quickAria", "Quick links")}
                        >
                          {megaMenuQuickLinks.map(({ href, labelKey, fallback, iconName }, quickIndex) => (
                            <Link
                              key={`${activeNavItem.label}-quick-${quickIndex}-${href}`}
                              href={href}
                              className="opx-mega-menu-quick-link"
                            >
                              <IdentityIcon name={iconName} size={18} />
                              <span>{text(labelKey, fallback)}</span>
                            </Link>
                          ))}
                        </nav>
                      </aside>

                      <div className={`opx-mega-menu-content ${sections.length > 1 ? "lg:grid-cols-2" : "lg:grid-cols-1"}`}>
                        {sections.map((section, sectionIndex) => (
                          <div key={section.title} className="opx-mega-menu-section">
                            <div className="opx-mega-menu-section-title">
                              {text(`navbar.menu.${activeNavItem.label}.${sectionIndex}.title`, section.title)}
                            </div>
                            <div className="space-y-1">
                              {section.items.map((sub, itemIndex) => (
                                <Link
                                  key={`${activeNavItem.label}-${sectionIndex}-${itemIndex}-${sub.href}`}
                                  href={sub.href}
                                  className="opx-mega-menu-item group/sub"
                                >
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-start gap-2">
                                      <span className="opx-mega-menu-item-label">
                                        {text(`navbar.menu.${activeNavItem.label}.${sectionIndex}.${itemIndex}.label`, sub.label)}
                                      </span>
                                      {sub.badge ? (
                                        <span className="opx-mega-menu-item-badge">
                                          {text(`navbar.menu.${activeNavItem.label}.${sectionIndex}.${itemIndex}.badge`, sub.badge)}
                                        </span>
                                      ) : null}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <aside className="opx-mega-menu-promo">
                        <h3 className="opx-mega-menu-story-title">
                          {text("navbar.promo.story.title", "Customer Success Stories")}
                        </h3>
                        <div className="opx-mega-menu-story-media">
                          <Image
                            src="/opendex-3d-operations.png"
                            alt=""
                            width={520}
                            height={300}
                            className="opx-mega-menu-story-image"
                          />
                        </div>
                        <p className="opx-mega-menu-story-copy">
                          {text(
                            "navbar.promo.story.copy",
                            "Opendex helps teams organize identity, evidence and operating workflows in one reliable workspace.",
                          )}
                        </p>
                        <Link href="/empresa" className="opx-mega-menu-story-link">
                          {text("navbar.promo.story.link", "See full story")}
                        </Link>
                      </aside>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        ) : null}

        <div className="opx-clerk-sub-row">
          <div className="opx-clerk-sub-left">
            <Link href="/productos/auth" className="opx-clerk-sub-link opx-clerk-sub-link-active">
              <IdentityIcon name="identity" size={18} />
              {text("navbar.sub.auth", "Autenticación de usuarios")}
            </Link>
            <Link href="/productos/invoice" className="opx-clerk-sub-link">
              <IdentityIcon name="organization" size={18} />
              {text("navbar.sub.b2b", "Autenticación B2B")}
            </Link>
            <Link href="/productos/kiosko" className="opx-clerk-sub-link">
              <IdentityIcon name="document" size={18} />
              {text("navbar.sub.billing", "Facturación")}
            </Link>
            <Link href="/status" className="opx-clerk-sub-link">
              <IdentityIcon name="session" size={18} />
              {text("navbar.sub.waitlist", "Lista de espera")}
            </Link>
          </div>
          <div className="opx-clerk-sub-right">
            <Link href="/status" className="opx-clerk-sub-link">
              {text("navbar.sub.components", "Componentes")}
              <ChevronDown className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <Link href="/contacto" className="opx-clerk-sub-link">
              {text("navbar.sub.docs", "Contacto")}
              <ChevronDown className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </div>

      {/* ============== MOBILE PANEL ============== */}
      {open && (
        <div className="opx-json-mobile-panel md:hidden">
          <nav className="opx-json-mobile-nav">
            {flatNav.map((item) => {
              if ("hasMenu" in item) {
                const sections = menus[item.label] ?? [];
                return (
                  <div key={item.label} className="opx-json-card">
                    <div className="opx-json-card-title">
                      {text(`navbar.nav.${item.label}`, item.displayLabel ?? item.label)}
                    </div>
                    <div className="opx-json-list">
                      {sections.flatMap((section, sectionIndex) =>
                        section.items.map((sub, itemIndex) => ({ sub, sectionIndex, itemIndex }))
                      ).slice(0, 6).map(({ sub, sectionIndex, itemIndex }) => (
                          <Link
                            key={`${item.label}-${sub.href}-${sub.label}`}
                            href={sub.href}
                            className="opx-json-menu-link"
                          >
                            <span>{text(`navbar.menu.${item.label}.${sectionIndex}.${itemIndex}.label`, sub.label)}</span>
                            {sub.badge ? (
                              <span className="opx-json-status-accent">
                                {text(`navbar.menu.${item.label}.${sectionIndex}.${itemIndex}.badge`, sub.badge)}
                              </span>
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
                  className="opx-json-menu-link"
                >
                  {text(`navbar.nav.${item.label}`, item.displayLabel ?? item.label)}
                </Link>
              );
            })}
            <div className="opx-json-actions">
              <Link
                href="/contacto"
                className="opx-json-button opx-json-button-secondary"
              >
                {text("navbar.mobile.register", t("register"))}
              </Link>
              <Link
                href="/login"
                className="opx-json-button opx-json-button-primary"
              >
                {text("navbar.mobile.connect", t("connect"))} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
            <Link
              href="/empresa"
              className="opx-json-menu-link"
            >
              <IdentityIcon name="workspace" size={18} />
              {text("navbar.mobile.roadmap", "Roadmap de Opendex Web Services")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
