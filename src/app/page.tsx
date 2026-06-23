import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "@/components/icons";
import {
  ArrowRight,
  Compass,
  Database,
  FileCheck,
  Fingerprint,
  Globe2,
  Network,
  Server,
  ShieldCheck,
} from "@/components/icons";
import { ButtonLink } from "@/components/Button";
import Card from "@/components/Card";
import JsonLd from "@/components/JsonLd";
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
  Icon: LucideIcon;
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

const capabilities: Capability[] = [
  {
    title: "Operar cerca del contexto",
    body: "Identidad, documentos y operación quedan cerca del usuario, del equipo y del dato que sostiene cada decisión.",
    Icon: Compass,
  },
  {
    title: "Conectar sin rehacer",
    body: "Los módulos comparten eventos, permisos y estados para crecer sin duplicar procesos ni reconstruir contexto.",
    Icon: Network,
  },
  {
    title: "Escalar con control",
    body: "Los accesos, revisiones y excepciones se gobiernan desde el flujo, no desde una lista de pendientes al final.",
    Icon: ShieldCheck,
  },
];

const products: ProductCard[] = [
  {
    title: "Identity Platform",
    body: "Acceso, passkeys, MFA, sesiones y permisos con trazabilidad para equipos que necesitan control real.",
    href: "/productos/auth",
    asset: "/protect-data-center.svg",
    assetAlt: "Centro de datos protegido por capas de identidad",
    label: "Acceso",
    Icon: Fingerprint,
  },
  {
    title: "Factur Workspaces",
    body: "Documentos, revisión y estados fiscales con continuidad operativa para evitar trabajo disperso.",
    href: "/productos/invoice",
    asset: "/verify-down-up.svg",
    assetAlt: "Verificación documental para operación fiscal",
    label: "Documentos",
    Icon: FileCheck,
  },
  {
    title: "Kiosko Workspaces",
    body: "Punto de venta, inventario y operación comercial con señales claras para sucursal y administración.",
    href: "/productos/kiosko",
    asset: "/connect-extreme.svg",
    assetAlt: "Conexión de módulos operativos para punto de venta",
    label: "Operación",
    Icon: Server,
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

const trustSignals = [
  "SaaS",
  "Retail",
  "Fintech",
  "Operaciones",
  "Soporte",
  "Administración",
  "Sucursales",
  "Auditoría",
  "Dirección",
  "Producto",
];

const heroPartnerMarks = [
  "Identity",
  "Factur",
  "Kiosko",
  "Audit",
];

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
    <section className={cx("opx-cf-section", className)}>
      <div className="opx-cf-container">{children}</div>
    </section>
  );
}

function ProductCardView({ product }: { product: ProductCard }) {
  const { Icon, asset, assetAlt, body, href, label, title } = product;

  return (
    <Card density="none" className="opx-cf-product-card">
      <div className="opx-cf-product-media relative">
        <Image src={asset} alt={assetAlt} fill sizes="(min-width: 1024px) 28vw, 100vw" className="object-contain" />
      </div>
      <div className="opx-cf-product-meta">
        <span>{label}</span>
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
      <ButtonLink href={href} variant="secondary" size="md" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
        Ver detalle
      </ButtonLink>
    </Card>
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
          <h2>The easy solution to multi-tenancy</h2>
          <p>
            Opendex reúne organizaciones, usuarios y permisos para operar productos B2B con equipos, roles y espacios de trabajo claramente separados.
          </p>
          <Link href="/productos/auth" className="opx-cf-multitenancy-link">
            Explore B2B features
            <span aria-hidden>&gt;</span>
          </Link>
        </div>

        <div className="opx-cf-multitenancy-grid" aria-label="Componentes de organización y multi-tenancy">
          <article className="opx-mt-card opx-mt-card-roles">
            <div className="opx-mt-copy">
              <h3>Custom roles and permissions</h3>
              <p>Powerful primitives to fully customize your app&apos;s authorization story.</p>
            </div>

            <div className="opx-mt-member-matrix" aria-hidden>
              {organizationAvatars.map((avatar, index) => (
                <span key={`${avatar.label}-${index}`} className={`opx-mt-member-cell ${avatar.tone}`}>
                  <span />
                </span>
              ))}
            </div>

            <div className="opx-mt-role-row" aria-label="Roles de organización">
              {roleLabels.map((role) => (
                <span key={role} className={role === "Administrator" ? "active" : undefined}>
                  {role}
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
                  Auto-join
                </span>
              </div>
              <div className="opx-mt-copy opx-mt-copy-bottom">
                <h3>Auto-join</h3>
                <p>Let users discover and join organizations based on their email domain.</p>
              </div>
            </article>

            <article className="opx-mt-card opx-mt-card-invite">
              <div className="opx-mt-invite-visual" aria-hidden>
                <span className="opx-mt-invite-line" />
                <span className="opx-mt-invite-tip">
                  <span className="opx-mt-mail-icon" />
                  Invite this person
                </span>
              </div>
              <div className="opx-mt-copy opx-mt-copy-bottom">
                <h3>Invitations</h3>
                <p>Fuel your application&apos;s growth by making it simple for your customers to invite their team.</p>
              </div>
            </article>
          </div>

          <article className="opx-mt-card opx-mt-card-ui">
            <div className="opx-mt-copy">
              <h3>Organization UI Components</h3>
              <p>Turn-key components add simplicity to complex organization management tasks.</p>
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
  return (
    <div className="opx-cf-home">
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }])} />
      <section className="opx-cf-hero">
        <div className="opx-cf-hero-ribbons" aria-hidden>
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} style={{ "--i": index } as CSSProperties} />
          ))}
        </div>

        <div className="opx-cf-container opx-cf-hero-grid">
          <div className="opx-cf-hero-copy">
            <div className="opx-cf-hero-marks" aria-hidden>
              <span className="opx-cf-hero-mark opx-cf-hero-mark-logo">
                <Image src="/logo.png" alt="" width={34} height={34} />
              </span>
              <span className="opx-cf-hero-plus">+</span>
              <span className="opx-cf-hero-mark opx-cf-hero-mark-builder">B</span>
            </div>

            <h1>Opendex prepara la operación para equipos que crecen</h1>
            <p>
              Una base empresarial para conectar identidad, documentos y continuidad operativa sin convertir cada decisión en una revisión manual.
            </p>
            <Link href="/contacto" className="opx-cf-hero-claim">
              Solicitar acceso
            </Link>
          </div>
        </div>

        <div className="opx-cf-hero-trust" aria-label="Áreas preparadas para operar con Opendex">
          <div className="opx-cf-hero-trust-inner">
            <p>Designed for teams building secure operations.</p>
            {heroPartnerMarks.map((mark) => (
              <span key={mark}>{mark}</span>
            ))}
          </div>
        </div>
      </section>

      <Section className="opx-cf-capability-band">
        <div className="opx-cf-three">
          {capabilities.map(({ Icon, body, title }) => (
            <article key={title} className="opx-cf-capability">
              <Icon className="h-6 w-6" aria-hidden />
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="opx-cf-trust-section">
        <div className="opx-cf-trust-heading">
          <h2>Equipos que coordinan operación sin perder contexto.</h2>
          <p>Una misma base para áreas que necesitan operar, revisar y continuar con una lectura compartida.</p>
        </div>
        <div className="opx-cf-logo-rail" aria-label="Áreas y equipos compatibles">
          {trustSignals.concat(trustSignals).map((signal, index) => (
            <span key={`${signal}-${index}`}>{signal}</span>
          ))}
        </div>
      </Section>

      <Section>
        <div className="opx-cf-section-heading">
          <h2>Tres líneas de trabajo, una misma base operativa.</h2>
          <p>
            Identidad, documentos y operación comercial comparten permisos, eventos y estados para que el equipo no reconstruya contexto en cada flujo.
          </p>
        </div>

        <div className="opx-cf-products-grid">
          {products.map((product) => (
            <ProductCardView key={product.title} product={product} />
          ))}
        </div>
      </Section>

      <Section className="opx-cf-section-split">
        <div className="opx-cf-split-grid">
          <div className="opx-cf-visual-card relative">
            <Image
              src="/opendex-3d-infrastructure.png"
              alt="Infraestructura visual con capas de operación"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="opx-cf-visual-overlay" aria-hidden />
          </div>
          <div className="opx-cf-split-copy">
            <Globe2 className="h-8 w-8" aria-hidden />
            <h2>Arquitectura visual para entender cómo se sostiene la operación.</h2>
            <p>
              El blueprint no debe ser decoración: debe ayudar a ver capas, responsabilidades y continuidad entre equipos.
            </p>
            <div className="opx-cf-actions">
              <ButtonLink href="/soluciones/saas" variant="primary" size="md">
                Ver soluciones
              </ButtonLink>
              <ButtonLink href="/seguridad" variant="secondary" size="md">
                Revisar seguridad
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section className="opx-cf-why-section">
        <div className="opx-platform-bento">
          <div className="opx-platform-bento-heading">
            <h2>Opendex para plataformas operativas</h2>
            <p>
              Base empresarial para coordinar identidad, documentos y continuidad con una lectura preparada para equipos que crecen.
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
                <h3>Provisionamiento programático</h3>
                <p>
                  Crea espacios de trabajo, reglas de acceso y módulos operativos desde una base preparada para cada cuenta.
                </p>
              </div>
            </article>

            <article className="opx-platform-card opx-platform-card-tall">
              <div className="opx-platform-dashboard-visual" aria-hidden>
                <span className="opx-platform-session-pill">
                  <span>Signed in</span>
                  app.opendex.dev
                </span>
                <span className="opx-platform-dashboard-frame" />
              </div>
              <div className="opx-platform-card-copy">
                <h3>Sesiones de operación administradas</h3>
                <p>
                  Mantén accesos, contexto y revisión dentro de flujos seguros sin exponer herramientas internas innecesarias.
                </p>
              </div>
            </article>

            <article className="opx-platform-card opx-platform-card-small">
              <div className="opx-platform-key-visual" aria-hidden>
                <span>sk_live_51H8x...</span>
              </div>
              <div className="opx-platform-card-copy">
                <h3>Aplicaciones reclamables</h3>
                <p>
                  Permite que cada equipo conserve propiedad sobre su operación, usuarios y configuración de cuenta.
                </p>
              </div>
            </article>

            <article className="opx-platform-card opx-platform-card-small">
              <div className="opx-platform-suite-visual" aria-hidden>
                <span className="opx-platform-suite-pill">
                  <Fingerprint className="h-5 w-5" />
                  <FileCheck className="h-5 w-5" />
                  <Database className="h-5 w-5" />
                </span>
              </div>
              <div className="opx-platform-card-copy">
                <h3>Una base de gestión operativa</h3>
                <p>
                  Reúne autenticación, documentos, permisos y continuidad en una estructura coherente para crecer.
                </p>
              </div>
            </article>
          </div>
        </div>
      </Section>

      <MultiTenancySection />

      <Section>
        <div className="opx-cf-section-heading opx-cf-section-heading-wide">
          <h2>Powered by the Opendex platform</h2>
          <p>
            Capas claras para sostener decisiones críticas, conectar sistemas y operar con control sin perder ritmo.
          </p>
        </div>
        <div className="opx-platform-mosaic" aria-label="Capas de la plataforma Opendex">
          {platformCards.map((card) => (
            <article key={card.title} className={`opx-platform-tile opx-platform-tile-${card.theme}`}>
              <div className="opx-platform-tile-copy">
                <div className="opx-platform-tile-eyebrow">{card.eyebrow}</div>
                <h3>{card.title}</h3>
              </div>

              <div className={`opx-platform-tile-visual opx-platform-tile-visual-${card.visual}`} aria-hidden>
                {card.visual === "orbit" ? (
                  <>
                    <span className="opx-platform-orbit-path" />
                    <span className="opx-platform-orbit-pill pill-top">Make my idea come true</span>
                    <span className="opx-platform-orbit-pill pill-right">Publish</span>
                    <span className="opx-platform-orbit-pill pill-bottom">Agent</span>
                  </>
                ) : null}

                {card.visual === "stack" ? (
                  <div className="opx-platform-stack-stack">
                    <span>Authentication</span>
                    <span>Database</span>
                    <span>Hosting</span>
                    <span>Monitoring</span>
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

              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="opx-cf-final-section">
        <div className="opx-cf-final-cta">
          <div>
            <Database className="h-8 w-8" aria-hidden />
            <h2>Ordenar la operación empieza por una base compartida.</h2>
            <p>
              Revisa las líneas de producto o agenda una conversación para evaluar qué parte del flujo debe conectarse primero.
            </p>
          </div>
          <div className="opx-cf-actions">
            <ButtonLink href="/contacto" variant="inverse" size="lg" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
              Hablar con ventas
            </ButtonLink>
            <ButtonLink href="/productos" variant="secondary" size="lg">
              Ver productos
            </ButtonLink>
          </div>
        </div>
      </Section>
    </div>
  );
}
