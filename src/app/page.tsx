import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight } from "@/components/icons";
import IdentityIcon, { type IdentityIconName } from "@/components/IdentityIcon";
import JsonLd from "@/components/JsonLd";
import T from "@/components/LocalizedText";
import StackedLogos from "@/components/ui/stacked-logos";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Infraestructura clara para operar sin perder contexto",
  description:
    "Opendex conecta acceso, evidencia y trabajo diario en una base empresarial para equipos SaaS, retail y operaciones sensibles.",
  path: "/",
  keywords: ["infraestructura empresarial", "operacion SaaS", "trazabilidad operativa"],
});

type Capability = {
  title: string;
  body: string;
  iconName: IdentityIconName;
};

type ProductCard = Capability & {
  href: string;
  asset: string;
  assetAlt: string;
  label: string;
};

type PlatformCard = {
  eyebrow: string;
  title: string;
  body: string;
  theme: "light" | "warm" | "salmon" | "orange";
  visual: "orbit" | "stack" | "connect" | "shield";
};

const products: ProductCard[] = [
  {
    title: "Identity Platform",
    body: "Acceso, passkeys, MFA, sesiones y permisos con trazabilidad para equipos que necesitan control real.",
    href: "/productos/auth",
    asset: "/protect-data-center.svg",
    assetAlt: "Centro de datos protegido por capas de identidad",
    label: "Acceso",
    iconName: "identity",
  },
  {
    title: "Factur Workspaces",
    body: "Documentos, revisión y estados fiscales con continuidad operativa para evitar trabajo disperso.",
    href: "/productos/invoice",
    asset: "/verify-down-up.svg",
    assetAlt: "Verificación documental para operación fiscal",
    label: "Documentos",
    iconName: "document",
  },
  {
    title: "Kiosko Workspaces",
    body: "Punto de venta, inventario y operación comercial con señales claras para sucursal y administración.",
    href: "/productos/kiosko",
    asset: "/connect-extreme.svg",
    assetAlt: "Conexión de módulos operativos para punto de venta",
    label: "Operación",
    iconName: "operations",
  },
];

const platformCards: PlatformCard[] = [
  {
    eyebrow: "Agent Chat",
    title: "Describe it.\nPublish it.",
    body: "Turn ideas into production-ready structure without losing context in the handoff.",
    theme: "light",
    visual: "orbit",
  },
  {
    eyebrow: "Full Stack Infrastructure",
    title: "Build and scale\nwith less friction.",
    body: "Authentication, data, hosting and monitoring stay connected as one operating base.",
    theme: "warm",
    visual: "stack",
  },
  {
    eyebrow: "Integrations",
    title: "Connect services\nand keep moving.",
    body: "OpenAI, payments and operational tools can plug into a system that already has order.",
    theme: "salmon",
    visual: "connect",
  },
  {
    eyebrow: "Enterprise Control",
    title: "Secure what scales\nfrom day one.",
    body: "Access, review and control stay explicit so the product can grow without losing discipline.",
    theme: "orange",
    visual: "shield",
  },
];

const heroPartnerMarks = [
  "Identity",
  "Factur",
  "Kiosko",
  "Audit",
  "Workspace",
  "Ops",
];

const architectureNodes: Array<{
  label: string;
  x: string;
  y: string;
  mark: string;
}> = [
  { label: "X", x: "7.5%", y: "7%", mark: "x" },
  { label: "Dropbox", x: "14.4%", y: "32%", mark: "dropbox" },
  { label: "LinkedIn", x: "21.2%", y: "51%", mark: "linkedin" },
  { label: "Discord", x: "28.9%", y: "66%", mark: "discord" },
  { label: "Microsoft", x: "36.6%", y: "76%", mark: "microsoft" },
  { label: "GitHub", x: "63.4%", y: "76%", mark: "github" },
  { label: "Linear", x: "71.1%", y: "66%", mark: "linear" },
  { label: "Notion", x: "78.8%", y: "51%", mark: "notion" },
  { label: "Atlassian", x: "85.6%", y: "32%", mark: "atlassian" },
  { label: "HubSpot", x: "92.5%", y: "7%", mark: "hubspot" },
];

const architectureFeatures: Capability[] = [
  {
    title: "Contexto conectado",
    body: "Cada flujo conserva origen, responsable y estado para que la lectura no dependa de conversaciones externas.",
    iconName: "integration",
  },
  {
    title: "Integración directa",
    body: "Los módulos comparten una base común para conectar identidad, documentos, eventos y operación sin rehacer pantallas.",
    iconName: "config",
  },
  {
    title: "Rutas verificables",
    body: "Las decisiones importantes dejan evidencia clara y ordenada para revisión, continuidad y soporte interno.",
    iconName: "audit",
  },
  {
    title: "Acceso enlazado",
    body: "Usuarios, permisos y sesiones se mantienen alineados con el trabajo real de cada equipo y espacio operativo.",
    iconName: "access",
  },
];

const homeRootClass = "opx-cf-home bg-opx-page font-opx text-opx-text";
const sectionClass = "opx-cf-section py-opx-xl";
const containerClass = "opx-cf-container mx-auto w-full max-w-7xl px-6 lg:px-8";
const primaryButtonClass =
  "inline-flex min-h-[30px] min-w-[152px] items-center justify-center gap-2 rounded-opx-control bg-opx-accent px-3 text-opx-control text-white shadow-opx-button-primary transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-opx-accent/35";
const secondaryButtonClass =
  "inline-flex min-h-[30px] min-w-[152px] items-center justify-center gap-2 rounded-opx-control bg-opx-surface px-3 text-opx-control text-opx-text shadow-opx-button-secondary transition hover:bg-opx-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-opx-accent/25";
const productCardClass =
  "opx-cf-product-card relative overflow-hidden rounded-opx-card bg-opx-surface p-opx-md shadow-opx-card transition";
const productMediaClass =
  "opx-cf-product-media relative min-h-[220px] border-b border-opx-border bg-opx-bg";
const productMetaClass =
  "opx-cf-product-meta flex items-center justify-between gap-opx-sm text-opx-control text-opx-text/60";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cx(sectionClass, className)}>
      <div className={containerClass}>{children}</div>
    </section>
  );
}

function ProductCardView({ product }: { product: ProductCard }) {
  const { asset, assetAlt, body, href, iconName, label, title } = product;

  return (
    <article className={productCardClass}>
      <div className={productMediaClass}>
        <Image src={asset} alt={assetAlt} fill sizes="(min-width: 1024px) 28vw, 100vw" className="object-contain" />
      </div>
      <div className={productMetaClass}>
        <span>{label}</span>
        <IdentityIcon name={iconName} size={24} className="h-6 w-6 object-contain" />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link href={href} className={secondaryButtonClass}>
        Ver detalle
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </article>
  );
}

const roleLabels = ["Product Member", "Administrator", "Editor", "QA Tester"];

const organizationAvatars = [
  { label: "Espacio disponible", tone: "empty" },
  { label: "Miembro de producto", tone: "portrait-a" },
  { label: "Espacio disponible", tone: "empty soft" },
  { label: "Administradora de operaciones", tone: "portrait-b" },
  { label: "Espacio disponible", tone: "empty" },
  { label: "Editor invitado", tone: "portrait-c" },
  { label: "Espacio disponible", tone: "empty" },
  { label: "Analista de calidad", tone: "portrait-d" },
  { label: "Espacio disponible", tone: "empty" },
];

function MultiTenancySection() {
  return (
    <Section className="opx-cf-multitenancy-section">
      <div className="opx-cf-multitenancy-shell">
        <div className="opx-cf-multitenancy-heading">
          <h2><T id="home.multi.title" fallback="La solución simple para multi-tenancy" /></h2>
          <p>
            <T id="home.multi.body" fallback="Opendex reúne organizaciones, usuarios y permisos para operar productos B2B con equipos, roles y espacios de trabajo claramente separados." />
          </p>
          <Link href="/productos/auth" className="opx-cf-multitenancy-link">
            <T id="home.multi.cta" fallback="Explorar funciones B2B" />
            <span aria-hidden>&gt;</span>
          </Link>
        </div>

        <div className="opx-cf-multitenancy-grid" aria-label="Componentes de organización y multi-tenancy">
          <article className="opx-mt-card opx-mt-card-roles">
            <div className="opx-mt-copy">
              <h3><T id="home.multi.roles.title" fallback="Roles y permisos personalizados" /></h3>
              <p><T id="home.multi.roles.body" fallback="Primitivas potentes para personalizar por completo la autorización de tu aplicación." /></p>
            </div>

            <div className="opx-mt-member-matrix" aria-hidden>
              {organizationAvatars.map((avatar, index) => (
                <span key={`${avatar.label}-${index}`} className={`opx-mt-member-cell ${avatar.tone}`}>
                  <span />
                </span>
              ))}
            </div>

            <div className="opx-mt-role-row" aria-label="Roles de organización">
              {roleLabels.map((role, index) => (
                <span key={role} className={role === "Administrator" ? "active" : undefined}>
                  <T id={`home.multi.role.${index}`} fallback={role} />
                </span>
              ))}
            </div>
          </article>

          <div className="opx-mt-stack">
            <article className="opx-mt-card opx-mt-card-auto">
              <div className="opx-mt-radar" aria-hidden>
                <span className="opx-mt-radar-ring ring-one" />
                <span className="opx-mt-radar-ring ring-two" />
                <span className="opx-mt-radar-ring ring-three" />
                <span className="opx-mt-mini-avatar avatar-one" />
                <span className="opx-mt-mini-avatar avatar-two" />
                <span className="opx-mt-mini-avatar avatar-three" />
                <span className="opx-mt-auto-pill">
                  <span>+</span>
                  <T id="home.multi.auto.title" fallback="Auto-unión" />
                </span>
              </div>
              <div className="opx-mt-copy opx-mt-copy-bottom">
                <h3><T id="home.multi.auto.title" fallback="Auto-unión" /></h3>
                <p><T id="home.multi.auto.body" fallback="Permite que los usuarios descubran y se unan a organizaciones según su dominio de correo." /></p>
              </div>
            </article>

            <article className="opx-mt-card opx-mt-card-invite">
              <div className="opx-mt-invite-visual" aria-hidden>
                <span className="opx-mt-invite-line" />
                <span className="opx-mt-invite-tip">
                  <span className="opx-mt-mail-icon" />
                  <T id="home.multi.invite.tip" fallback="Invitar a esta persona" />
                </span>
              </div>
              <div className="opx-mt-copy opx-mt-copy-bottom">
                <h3><T id="home.multi.invite.title" fallback="Invitaciones" /></h3>
                <p><T id="home.multi.invite.body" fallback="Impulsa el crecimiento de tu aplicación facilitando que tus clientes inviten a su equipo." /></p>
              </div>
            </article>
          </div>

          <article className="opx-mt-card opx-mt-card-ui">
            <div className="opx-mt-copy">
              <h3><T id="home.multi.ui.title" fallback="Componentes UI de organización" /></h3>
              <p><T id="home.multi.ui.body" fallback="Componentes listos para simplificar tareas complejas de administración organizacional." /></p>
            </div>
            <div className="opx-mt-ui-preview" aria-hidden>
              <span className="opx-mt-org-switch">
                <span className="opx-mt-org-mark">O</span>
                Opendex
                <span className="opx-mt-chevron-down" />
              </span>
              <span className="opx-mt-dashed-panel" />
            </div>
          </article>
        </div>
      </div>
    </Section>
  );
}

export default function Home() {
  const heroTrustLogoGroups = heroPartnerMarks.map((mark, index) => [
    <span key={`${mark}-primary`}><T id={`home.hero.mark.${index}`} fallback={mark} /></span>,
    <span key={`${mark}-signal`}><T id={`home.hero.trust.signal.${index}`} fallback={["Access", "Records", "Retail", "Review", "Teams", "Continuity"][index] ?? mark} /></span>,
    <span key={`${mark}-system`}><T id={`home.hero.trust.system.${index}`} fallback={["Identity", "Evidence", "Operations", "Controls", "Workflow", "Readiness"][index] ?? mark} /></span>,
  ]);

  return (
    <div className={homeRootClass}>
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }])} />
      <section className="opx-cf-hero relative overflow-hidden">
        <div className="opx-cf-hero-ribbons" aria-hidden>
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} style={{ "--i": index } as CSSProperties} />
          ))}
        </div>

        <div className={cx(containerClass, "opx-cf-hero-grid")}>
          <div className="opx-cf-hero-copy max-w-3xl">
            <div className="opx-cf-hero-marks" aria-hidden>
              <span className="opx-cf-hero-mark opx-cf-hero-mark-logo">
                <Image src="/logo.png" alt="" width={34} height={34} />
              </span>
              <span className="opx-cf-hero-plus">+</span>
              <span className="opx-cf-hero-mark opx-cf-hero-mark-builder">B</span>
            </div>

            <h1 className="font-opx text-opx-h1 text-opx-text"><T id="home.hero.title" fallback="Opendex prepara la operación para equipos que crecen" /></h1>
            <p className="font-opx text-opx-body text-opx-text/70">
              <T id="home.hero.description" fallback="Una base empresarial para conectar identidad, documentos y continuidad operativa sin convertir cada decisión en una revisión manual." />
            </p>
            <Link href="/contacto" className="opx-cf-hero-claim inline-flex min-h-[30px] items-center justify-center rounded-opx-control bg-opx-accent px-3 text-opx-control text-white shadow-opx-button-primary">
              <T id="home.hero.cta" fallback="Solicitar acceso" />
            </Link>
          </div>
        </div>

        <div className="opx-cf-hero-trust" aria-label="Áreas preparadas para operar con Opendex">
          <StackedLogos
            className="opx-cf-hero-trust-inner"
            logoGroups={heroTrustLogoGroups}
            duration={18}
            logoWidth="210px"
          />
        </div>
      </section>

      <Section className="opx-context-defense-section">
        <div className="opx-context-defense-shell">
          <div className="opx-context-defense-rule" aria-hidden>
            <span>+</span>
          </div>

          <div className="opx-context-defense-grid">
            <div className="opx-context-defense-heading">
              <p><T id="home.context.kicker" fallback="Contexto" /></p>
              <h2><T id="home.context.title" fallback="La claridad operativa más fuerte empieza con contexto" /></h2>
            </div>

            <article className="opx-context-defense-copy">
              <div className="opx-context-defense-icon" aria-hidden>
                <IdentityIcon name="workspace" size={24} className="h-6 w-6 object-contain" />
              </div>
              <div>
                <h3><T id="home.context.cardTitle" fallback="Opera cerca de la fuente" /></h3>
                <p>
                  <T id="home.context.body" fallback="Mantén identidad, documentos y trabajo diario cerca del usuario, equipo y dato que sostienen cada decisión." />
                </p>
                <Link href="/status" className="opx-context-defense-link text-opx-control text-opx-accent">
                  <T id="home.context.cta" fallback="Ver más" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </Section>

      <Section className="opx-cf-trust-section">
        <div className="opx-trust-platform-shell">
          <div className="opx-trust-platform-hero">
            <div className="opx-trust-platform-copy">
              <h2><T id="home.trust.title" fallback="La plataforma de seguridad operativa para equipos en crecimiento." /></h2>
              <p>
                <T id="home.trust.body" fallback="Impulsada por Opendex Context Graph, conectando cada usuario, documento, sucursal y flujo de trabajo con su origen, responsable y estado operativo. Una plataforma. Contexto completo. En cada entorno." />
              </p>
            </div>

            <div className="opx-trust-platform-map" aria-label="Mapa de entidades conectadas por Opendex">
              <div className="opx-trust-platform-intro">
                <span><T id="home.trust.introducing" fallback="Presentando" /></span>
                <strong>
                  <span className="opx-trust-platform-mark">O</span>
                  opendex
                </strong>
              </div>

              <div className="opx-trust-platform-stack">
                <span className="opx-trust-bracket bracket-one" aria-hidden />
                <span className="opx-trust-bracket bracket-two" aria-hidden />
                <span className="opx-trust-bracket bracket-three" aria-hidden />
                <span className="opx-trust-bracket bracket-four" aria-hidden />

                <div className="opx-trust-platform-row">
                  <IdentityIcon name="identity" size={22} className="h-5 w-5 object-contain" />
                  <span><T id="home.trust.person" fallback="Persona" /></span>
                  <strong>Opendex ID</strong>
                </div>
                <div className="opx-trust-platform-row">
                  <IdentityIcon name="operations" size={22} className="h-5 w-5 object-contain" />
                  <span><T id="home.trust.agent" fallback="Agente" /></span>
                  <strong><T id="home.trust.workflows" fallback="Workflows" /></strong>
                </div>
                <div className="opx-trust-platform-row">
                  <IdentityIcon name="integration" size={22} className="h-5 w-5 object-contain" />
                  <span><T id="home.trust.tools" fallback="Herramientas" /></span>
                  <strong>APIs</strong>
                </div>
                <div className="opx-trust-platform-row">
                  <IdentityIcon name="access" size={22} className="h-5 w-5 object-contain" />
                  <span><T id="home.trust.identities" fallback="Identidades" /></span>
                  <strong><T id="home.trust.cloud" fallback="Cloud" /></strong>
                </div>
                <div className="opx-trust-platform-row is-wide">
                  <IdentityIcon name="store" size={22} className="h-5 w-5 object-contain" />
                  <span><T id="home.trust.resources" fallback="Recursos" /></span>
                  <strong><T id="home.trust.branches" fallback="Sucursales" /></strong>
                </div>
              </div>
            </div>
          </div>

          <div className="opx-trust-platform-banner">
            <div className="opx-trust-platform-objects" aria-hidden>
              <span className="object-one" />
              <span className="object-two" />
              <span className="object-three" />
            </div>
            <p>
              <T id="home.trust.banner" fallback="Opendex proporciona visibilidad, gobierno y control operativo en identidades, documentos, workspaces y operaciones comerciales." />
            </p>
            <Link href="/productos" className={cx("opx-trust-platform-action", primaryButtonClass)}>
              <T id="home.trust.cta" fallback="Opendex en acción" />
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="opx-workstreams-section">
        <div className="opx-workstreams-shell">
          <div className="opx-identifier-grid">
            <article className="opx-identifier-main">
              <div className="opx-identifier-card-top" aria-hidden>
                <span className="opx-identifier-help">?</span>
                <span className="opx-identifier-dash" />
              </div>
              <h2>
                <T id="home.identifier.title" fallback="El identificador de contexto más preciso para la operación" />
              </h2>
              <p>
                <T id="home.identifier.body" fallback="Claridad operativa persistente entre usuarios, documentos y eventos, incluso cuando los equipos cambian entre sucursales, dispositivos y flujos de trabajo." />
              </p>
              <Link href="/status" className={cx("opx-identifier-button", secondaryButtonClass)}>
                <T id="home.identifier.cta" fallback="Ver más" />
              </Link>

              <div className="opx-identifier-chart" aria-hidden>
                <svg viewBox="0 0 760 210" preserveAspectRatio="none">
                  <path className="opx-chart-gridline" d="M34 176H742" />
                  <path className="opx-chart-axis" d="M34 26V176H742" />
                  <path
                    className="opx-chart-line opx-chart-line-orange"
                    d="M0 34 L24 37 L52 34 L84 41 L116 38 L154 42 L190 47 L226 43 L260 47 L296 54 L332 48 L370 55 L408 60 L448 55 L488 70 L520 63 L558 72 L604 66 L642 75 L682 74 L724 63 L760 72"
                  />
                  <path
                    className="opx-chart-line opx-chart-line-violet"
                    d="M0 40 L24 45 L54 42 L84 48 L116 44 L154 49 L190 53 L226 50 L260 54 L292 62 L326 68 L360 128 L396 134 L430 134 L470 142 L510 148 L548 148 L588 156 L630 160 L676 162 L718 176 L760 177"
                  />
                </svg>
                <div className="opx-chart-ticks">
                  <span>0</span>
                  <span>30</span>
                  <span>60</span>
                  <span>90</span>
                  <span>120</span>
                </div>
                <div className="opx-chart-labels">
                  <span><T id="home.identifier.chartLeft" fallback="Caída de precisión" /></span>
                  <span><T id="home.identifier.chartRight" fallback="Días después de la identificación inicial" /></span>
                </div>
              </div>
            </article>

            <div className="opx-identifier-side" aria-label="Capacidades de identificación operativa">
              <article className="opx-identifier-feature">
                <span className="opx-identifier-icon">
                  <IdentityIcon name="workspace" size={28} className="h-7 w-7 object-contain" />
                </span>
                <div>
                  <h3><T id="home.identifier.feature.0.title" fallback="Cualquier equipo, cualquier dispositivo." /></h3>
                  <p><T id="home.identifier.feature.0.body" fallback="Reconoce operadores recurrentes en navegadores, mostradores y flujos móviles con contexto consistente." /></p>
                </div>
              </article>

              <article className="opx-identifier-pattern-card">
                <div>
                  <span className="opx-identifier-icon">
                    <IdentityIcon name="identity" size={28} className="h-7 w-7 object-contain" />
                  </span>
                  <h3><T id="home.identifier.feature.1.title" fallback="Identifica cada traspaso operativo." /></h3>
                  <p><T id="home.identifier.feature.1.body" fallback="Conecta brechas sospechosas, revisiones repetidas y cambios de responsable antes de que frenen la siguiente decisión." /></p>
                </div>
              </article>

              <article className="opx-identifier-feature">
                <span className="opx-identifier-icon">
                  <IdentityIcon name="shield" size={28} className="h-7 w-7 object-contain" />
                </span>
                <div>
                  <h3><T id="home.identifier.feature.2.title" fallback="Da continuidad a tus equipos confiables." /></h3>
                  <p><T id="home.identifier.feature.2.body" fallback="Reduce verificación repetida y permite que usuarios aprobados continúen con menos fricción y evidencia más clara." /></p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Section>

      <Section className="opx-cf-architecture-section">
        <div className="opx-architecture-shell">
          <div className="opx-architecture-heading">
            <h2><T id="home.architecture.title" fallback="Arquitectura visual para conectar cada operación crítica" /></h2>
            <p>
              <T id="home.architecture.body" fallback="Cuando el sistema mantiene contexto, evidencia y acceso en una misma lectura, los equipos avanzan con menos fricción y mayor control." />
            </p>
          </div>

          <div className="opx-architecture-orbit" aria-label="Capas conectadas de la arquitectura Opendex">
            <div className="opx-architecture-arc" aria-hidden />
            {architectureNodes.map((node) => (
              <span
                key={node.label}
                className={`opx-architecture-node opx-architecture-node-${node.mark}`}
                aria-hidden
                style={{ "--x": node.x, "--y": node.y } as CSSProperties}
              >
                <span className="opx-architecture-node-mark" />
              </span>
            ))}
            <Link href="/productos/auth" className="opx-architecture-signin">
              <span className="opx-architecture-google-mark" aria-hidden />
              <T id="home.architecture.signIn" fallback="Entrar con Opendex" />
            </Link>
          </div>

          <div className="opx-architecture-features">
            {architectureFeatures.map(({ iconName, title, body }, index) => (
              <article key={title} className="opx-architecture-feature">
                <IdentityIcon name={iconName} size={20} className="mt-0.5 h-5 w-5 object-contain" />
                <div>
                  <h3><T id={`home.architecture.feature.${index}.title`} fallback={title} /></h3>
                  <p><T id={`home.architecture.feature.${index}.body`} fallback={body} /></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="opx-cf-why-section">
        <div className="opx-platform-bento">
          <div className="opx-platform-bento-heading">
            <h2><T id="home.platform.title" fallback="Opendex para plataformas operativas" /></h2>
            <p>
              <T id="home.platform.body" fallback="Base empresarial para coordinar identidad, documentos y continuidad con una lectura preparada para equipos que crecen." />
            </p>
          </div>

          <div className="opx-platform-bento-grid" aria-label="Capacidades de plataforma Opendex">
            <article className="opx-platform-card opx-platform-card-wide">
              <div className="opx-platform-api-visual" aria-hidden>
                <span className="opx-platform-route">https://opendexapis.com/v1/workspaces</span>
                <span className="opx-platform-line opx-platform-line-one" />
                <span className="opx-platform-line opx-platform-line-two" />
                <span className="opx-platform-line opx-platform-line-three" />
              </div>
              <div className="opx-platform-card-copy">
                <h3><T id="home.platform.card.0.title" fallback="Provisionamiento programático" /></h3>
                <p>
                  <T id="home.platform.card.0.body" fallback="Crea espacios de trabajo, reglas de acceso y módulos operativos desde una base preparada para cada cuenta." />
                </p>
              </div>
            </article>

            <article className="opx-platform-card opx-platform-card-tall">
              <div className="opx-platform-dashboard-visual" aria-hidden>
                <span className="opx-platform-session-pill">
                  <span><T id="home.platform.signedIn" fallback="Sesión iniciada" /></span>
                  app.opendex.dev
                </span>
                <span className="opx-platform-dashboard-frame" />
              </div>
              <div className="opx-platform-card-copy">
                <h3><T id="home.platform.card.1.title" fallback="Sesiones de operación administradas" /></h3>
                <p>
                  <T id="home.platform.card.1.body" fallback="Mantén accesos, contexto y revisión dentro de flujos seguros sin exponer herramientas internas innecesarias." />
                </p>
              </div>
            </article>

            <article className="opx-platform-card opx-platform-card-small">
              <div className="opx-platform-key-visual" aria-hidden>
                <span>sk_live_51H8x...</span>
              </div>
              <div className="opx-platform-card-copy">
                <h3><T id="home.platform.card.2.title" fallback="Aplicaciones reclamables" /></h3>
                <p>
                  <T id="home.platform.card.2.body" fallback="Permite que cada equipo conserve propiedad sobre su operación, usuarios y configuración de cuenta." />
                </p>
              </div>
            </article>

            <article className="opx-platform-card opx-platform-card-small">
              <div className="opx-platform-suite-visual" aria-hidden>
                <span className="opx-platform-suite-pill">
                  <IdentityIcon name="identity" size={24} className="h-6 w-6 object-contain" />
                  <IdentityIcon name="document" size={24} className="h-6 w-6 object-contain" />
                  <IdentityIcon name="operations" size={24} className="h-6 w-6 object-contain" />
                </span>
              </div>
              <div className="opx-platform-card-copy">
                <h3><T id="home.platform.card.3.title" fallback="Una base de gestión operativa" /></h3>
                <p>
                  <T id="home.platform.card.3.body" fallback="Reúne autenticación, documentos, permisos y continuidad en una estructura coherente para crecer." />
                </p>
              </div>
            </article>
          </div>
        </div>
      </Section>

      <MultiTenancySection />

      <Section>
        <div className="opx-cf-section-heading opx-cf-section-heading-wide mx-auto max-w-4xl text-center">
          <h2 className="font-opx text-opx-h2 text-opx-text"><T id="home.mosaic.title" fallback="Impulsado por la plataforma Opendex" /></h2>
          <p className="font-opx text-opx-body text-opx-text/70">
            <T id="home.mosaic.body" fallback="Capas claras para sostener decisiones críticas, conectar sistemas y operar con control sin perder ritmo." />
          </p>
        </div>
        <div className="opx-platform-mosaic" aria-label="Capas de la plataforma Opendex">
          {platformCards.map((card, index) => (
            <article key={card.title} className={`opx-platform-tile opx-platform-tile-${card.theme}`}>
              <div className="opx-platform-tile-copy">
                <div className="opx-platform-tile-eyebrow"><T id={`home.mosaic.${index}.eyebrow`} fallback={card.eyebrow} /></div>
                <h3><T id={`home.mosaic.${index}.title`} fallback={card.title} /></h3>
              </div>

              <div className={`opx-platform-tile-visual opx-platform-tile-visual-${card.visual}`} aria-hidden>
                {card.visual === "orbit" ? (
                  <>
                    <span className="opx-platform-orbit-path" />
                    <span className="opx-platform-orbit-pill pill-top"><T id="home.mosaic.0.pillTop" fallback="Haz realidad mi idea" /></span>
                    <span className="opx-platform-orbit-pill pill-right"><T id="home.mosaic.0.pillRight" fallback="Publicar" /></span>
                    <span className="opx-platform-orbit-pill pill-bottom"><T id="home.mosaic.0.pillBottom" fallback="Agente" /></span>
                  </>
                ) : null}

                {card.visual === "stack" ? (
                  <div className="opx-platform-stack-stack">
                    <span><T id="home.mosaic.1.stack.0" fallback="Autenticación" /></span>
                    <span><T id="home.mosaic.1.stack.1" fallback="Base de datos" /></span>
                    <span><T id="home.mosaic.1.stack.2" fallback="Hosting" /></span>
                    <span><T id="home.mosaic.1.stack.3" fallback="Monitoreo" /></span>
                  </div>
                ) : null}

                {card.visual === "connect" ? (
                  <div className="opx-platform-connect-cluster">
                    <span className="opx-platform-connect-node node-left">S</span>
                    <span className="opx-platform-connect-core" />
                    <span className="opx-platform-connect-node node-top">OpenAI</span>
                    <span className="opx-platform-connect-node node-bottom">N</span>
                  </div>
                ) : null}

                {card.visual === "shield" ? (
                  <div className="opx-platform-shield-visual">
                    <span className="opx-platform-shield-outline shield-one" />
                    <span className="opx-platform-shield-outline shield-two" />
                    <span className="opx-platform-shield-check" />
                  </div>
                ) : null}
              </div>

              <p><T id={`home.mosaic.${index}.body`} fallback={card.body} /></p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="opx-cf-final-section">
        <div className="opx-cf-final-cta">
          <div className="opx-final-primary-copy">
            <h2><T id="home.final.title" fallback="Ordenar la operación empieza por una base compartida." /></h2>
            <p>
              <T id="home.final.body" fallback="Revisa las líneas de producto o agenda una conversación para evaluar qué parte del flujo debe conectarse primero." />
            </p>
            <div className="opx-final-actions">
              <Link href="/contacto" className={cx("opx-final-button opx-final-button-primary", primaryButtonClass)}>
                <T id="home.final.primary" fallback="Empezar ahora" />
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/productos" className={cx("opx-final-button opx-final-button-secondary", secondaryButtonClass)}>
                <T id="home.final.secondary" fallback="Comunícate con ventas" />
              </Link>
            </div>
          </div>

          <div className="opx-final-info-grid" aria-label="Siguientes pasos para ordenar la operación">
            <article className="opx-final-info-card">
              <span className="opx-final-info-icon" aria-hidden>
                <IdentityIcon name="payment" size={40} className="opx-final-info-icon-image" />
              </span>
              <h3><T id="home.final.card.0.title" fallback="Ve lo que pagarás" /></h3>
              <p><T id="home.final.card.0.body" fallback="Precios claros por módulo, equipo y nivel de operación sin costos ocultos." /></p>
              <Link href="/precios">
                <T id="home.final.card.0.link" fallback="Información sobre precios" />
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>

            <article className="opx-final-info-card">
              <span className="opx-final-info-icon" aria-hidden>
                <IdentityIcon name="config" size={40} className="opx-final-info-icon-image" />
              </span>
              <h3><T id="home.final.card.1.title" fallback="Empieza a construir" /></h3>
              <p><T id="home.final.card.1.body" fallback="Conecta identidad, documentos y operación en una base preparada desde el primer flujo." /></p>
              <Link href="/contacto">
                <T id="home.final.card.1.link" fallback="Opciones de integración" />
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          </div>
        </div>
      </Section>
    </div>
  );
}
