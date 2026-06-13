import Link from "next/link";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "@/components/icons";
import {
  Activity,
  ArrowRight,
  Award,
  CheckCircle2,
  Code2,
  Compass,
  Database,
  Fingerprint,
  Gauge,
  GitBranch,
  Globe2,
  GraduationCap,
  HeadphonesIcon,
  KeyRound,
  Layers,
  Lock,
  Network,
  Receipt,
  Rocket,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Store,
  Terminal,
  Users,
  Wallet,
  Zap,
} from "@/components/icons";
import AnimatedTerminal from "../components/AnimatedTerminal";
import BlueprintCapabilityMap from "../components/BlueprintCapabilityMap";
import TechCard from "../components/TechCard";
import DataCenterBlueprint from "../components/DataCenterBlueprint";
import OpendexEcosystem3D from "../components/three/OpendexEcosystem3DClient";
import LocalizedLabel from "@/components/LocalizedLabel";

type Product = {
  name: string;
  href: string;
  eyebrow: string;
  desc: string;
  Icon: LucideIcon;
  color: string;
  state: string;
  signal: string;
  scope: string;
  route: string;
  evidence: string;
};

const products: Product[] = [
  {
    name: "Opendex Identity Platform",
    href: "/productos/auth",
    eyebrow: "Identity",
    desc: "Capa de acceso para productos que necesitan sesiones trazables, passkeys, SSO y decisiones de riesgo sin convertir login en deuda técnica.",
    Icon: Fingerprint,
    color: "#f6821f",
    state: "Acceso",
    signal: "Sesiones, MFA, SSO y passkeys",
    scope: "Control de identidad y decisiones de riesgo",
    route: "Usuarios · permisos · auditoría",
    evidence: "Trazabilidad de acceso",
  },
  {
    name: "Factur Workspaces",
    href: "/productos/invoice",
    eyebrow: "Fiscal",
    desc: "Operación fiscal organizada por estados, documentos, validaciones y roles para equipos que necesitan control sin perseguir archivos sueltos.",
    Icon: Receipt,
    color: "#ff500a",
    state: "Fiscal",
    signal: "Documentos, validaciones y estados",
    scope: "Orden documental para operación fiscal",
    route: "CFDI · revisiones · evidencia",
    evidence: "Control de cambios",
  },
  {
    name: "Opendex Kiosko Workspaces",
    href: "/productos/kiosko",
    eyebrow: "Operaciones",
    desc: "Superficie para sucursales, caja, inventario y cortes; pensada para que la operación diaria deje evidencia y no solo tickets dispersos.",
    Icon: Store,
    color: "#ff9910",
    state: "Retail",
    signal: "Caja, sucursales, inventario y cortes",
    scope: "Coordinación diaria de operación comercial",
    route: "Sucursal · stock · cierre",
    evidence: "Actividad operativa",
  },
];

const benefits = [
  { Icon: Database, title: "Modelo de datos primero", desc: "Cada producto parte de entidades claras: usuarios, sesiones, documentos, sucursales, eventos y evidencia." },
  { Icon: Zap, title: "Interfaz para operar", desc: "Diseñamos pantallas que ayudan a decidir rápido: estados visibles, jerarquía limpia y acciones con contexto." },
  { Icon: Store, title: "Dominio antes que features", desc: "Retail, identidad y fiscal no se mezclan en una sola pantalla; cada flujo conserva su lenguaje operativo." },
  { Icon: Receipt, title: "Trazabilidad por defecto", desc: "Los cambios importantes deben dejar origen, responsable, estado anterior y siguiente acción sugerida." },
  { Icon: ShieldCheck, title: "Seguridad dentro del producto", desc: "Permisos, sesiones y auditoría viven en la arquitectura, no como una capa decorativa al final." },
  { Icon: HeadphonesIcon, title: "Comunicación precisa", desc: "Cada conversación parte de contexto real: alcance, usuarios, operación, prioridad y siguiente decisión." },
];

const requirements = [
  "La información comercial se mantiene separada del material técnico.",
  "Cada producto tiene una página propia para evitar mezclar contextos.",
  "Las fechas se comunicarán solo cuando exista una superficie pública lista.",
  "Las conversaciones se atienden con alcance, producto y escenario definidos.",
];

const visualSystems = [
  {
    src: "/opendex-blueprint-control-plane.png",
    title: "Plano de gobierno",
    desc: "Vista de alto nivel para revisar alcance, responsables, evidencias y puntos de decisión sin perder el contexto general.",
    meta: "Blueprint · gobierno",
  },
  {
    src: "/opendex-3d-infrastructure.png",
    title: "Mapa de dependencias",
    desc: "Lectura visual de servicios, eventos y superficies internas para entender qué interviene, qué depende de qué y dónde se concentra la carga.",
    meta: "Sistema · dependencias",
  },
  {
    src: "/opendex-3d-operations.png",
    title: "Centro de seguimiento",
    desc: "Síntesis de actividad, estados, auditoría y señales relevantes para revisar prioridades, detectar fricción y sostener seguimiento continuo.",
    meta: "Operación · seguimiento",
  },
];

const architectureSignals = [
  {
    label: "Gobierno",
    value: "Alcance, responsables y permisos visibles antes de ejecutar cambios.",
  },
  {
    label: "Trazabilidad",
    value: "Cada movimiento importante conserva origen, estado y siguiente lectura.",
  },
  {
    label: "Continuidad",
    value: "Dependencias claras entre trabajo diario, soporte y revisión interna.",
  },
  {
    label: "Riesgo",
    value: "Señales priorizadas para actuar antes de convertir fricción en incidente.",
  },
];

const architectureDetails = [
  {
    tag: "Lectura ejecutiva",
    title: "Lo importante debe verse primero",
    desc: "Estados, responsables y pendientes quedan agrupados para que una revisión rápida no dependa de memoria, chats o reportes aislados.",
    metric: "Prioridad clara",
  },
  {
    tag: "Criterio operativo",
    title: "Cada señal tiene contexto",
    desc: "Una alerta solo es útil si explica impacto, origen, urgencia y ruta de atención. El diseño evita ruido y deja visible lo accionable.",
    metric: "Menos ambigüedad",
  },
  {
    tag: "Seguimiento",
    title: "La evidencia acompaña la decisión",
    desc: "Las vistas deben ayudar a responder qué pasó, quién intervino, qué cambió y qué falta resolver sin abrir múltiples herramientas.",
    metric: "Mejor continuidad",
  },
];

const availableServices = [
  {
    label: "Servicio disponible",
    title: "Creación de páginas web",
    desc: "Diseño e implementación de sitios profesionales para empresas que necesitan presencia digital clara, responsive y lista para cotizar con alcance definido.",
  },
  {
    label: "Cotización",
    title: "Alcance antes de precio",
    desc: "Se revisan objetivos, secciones, contenido, tiempos y nivel de personalización para entregar una propuesta realista.",
  },
];

// === Enterprise / infrastructure pillars ===
const pillars: { Icon: LucideIcon; tag: string; title: string; desc: string }[] = [
  {
    Icon: Shield,
    tag: "IDENTITY",
    title: "Acceso gobernado por contexto",
    desc: "La sesión no se trata como un token aislado: se evalúa usuario, workspace, dispositivo, riesgo y permiso.",
  },
  {
    Icon: Lock,
    tag: "AUDIT",
    title: "Evidencia útil para operar",
    desc: "Los eventos relevantes se diseñan para explicar qué cambió, quién intervino y qué decisión debe seguir.",
  },
  {
    Icon: Activity,
    tag: "RUNTIME",
    title: "Superficies pensadas para producción",
    desc: "La arquitectura busca reducir fricción entre producto, soporte y operación antes de abrir acceso amplio.",
  },
];

// === Network metrics (security section) ===
const netMetrics = [
  { value: "AUTH", label: "control plane", color: "var(--tech-cyan)" },
  { value: "EVENTS", label: "telemetría", color: "var(--tech-indigo)" },
  { value: "AUDIT", label: "evidencia", color: "var(--tech-violet)" },
  { value: "OPS", label: "operación", color: "#ffb066" },
];

// === Developer endpoints (dev section) ===
const endpoints: { method: string; path: string; desc: string }[] = [
  { method: "POST",   path: "/v1/identity/passkeys/challenge", desc: "Challenge WebAuthn" },
  { method: "POST",   path: "/v1/identity/session/verify",     desc: "Validación de sesión" },
  { method: "POST",   path: "/v1/factur/documents/validate",   desc: "Validación documental" },
  { method: "GET",    path: "/v1/kiosko/workspaces/stock",     desc: "Stock en workspace" },
  { method: "POST",   path: "/v1/workspaces/events/subscribe", desc: "Eventos internos" },
];

const tracks = [
  {
    Icon: Compass,
    tag: "01",
    title: "Explorar",
    desc: "Primero se define el problema operativo, los usuarios involucrados y la evidencia que debe quedar visible.",
  },
  {
    Icon: Layers,
    tag: "02",
    title: "Modelar",
    desc: "Después se ordenan entidades, estados, permisos y eventos antes de empujar más interfaz o automatización.",
  },
  {
    Icon: Gauge,
    tag: "03",
    title: "Validar",
    desc: "El producto se revisa con escenarios concretos para detectar huecos de operación, soporte y comunicación.",
  },
];

// Generic placeholder partner names — original branding, no real customer logos used.
const partners = ["Helios", "Plata", "Stride", "Orbital", "Lumen", "Forge", "Quanta", "Vector"];

const stats = [
  { value: "OWS", label: "empresa madre" },
  { value: "AUTH", label: "identity platform" },
  { value: "OPS", label: "kiosko workspaces" },
  { value: "DOC", label: "factur workspaces" },
];

const code = `import { OpendexIdentity } from "@opendex/identity";

const identity = new OpendexIdentity({
  projectId: process.env.OPENDEX_PROJECT_ID!,
  passkeys: true,
  sso: ["google", "github", "saml"],
  risk: "adaptive",
});

export async function middleware(req: Request) {
  const session = await identity.verify(req);
  if (!session) return identity.redirect("/login");
  return identity.next(session);
}`;

// Decorative diamond icon for tier card (original SVG)
function DiamondMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="cf-diamond-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff9910" />
          <stop offset="0.5" stopColor="#f6821f" />
          <stop offset="1" stopColor="#ff500a" />
        </linearGradient>
      </defs>
      <path
        d="M32 4 L58 24 L32 60 L6 24 Z"
        fill="url(#cf-diamond-grad)"
        stroke="#1d1d1b"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M32 4 L18 24 L32 60 L46 24 Z"
        fill="rgba(255,255,255,0.15)"
        stroke="#1d1d1b"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M6 24 H58" stroke="#1d1d1b" strokeWidth="1.25" />
      <path d="M18 24 L32 4 L46 24" fill="none" stroke="#1d1d1b" strokeWidth="1" />
    </svg>
  );
}

// Decorative arc set (original geometry)
function HeroArcs({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 600"
      className={className}
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="cf-arc-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff500a" stopOpacity="0" />
          <stop offset="0.5" stopColor="#f6821f" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ff9910" stopOpacity="0" />
        </linearGradient>
      </defs>
      {Array.from({ length: 7 }).map((_, i) => {
        const r = 320 + i * 75;
        return (
          <circle
            key={i}
            cx="600"
            cy="700"
            r={r}
            fill="none"
            stroke="url(#cf-arc-grad)"
            strokeWidth="1"
            strokeDasharray={i % 2 === 0 ? "0" : "8 8"}
            opacity={0.7 - i * 0.07}
          />
        );
      })}
    </svg>
  );
}

// ============ Reusable refined design primitives ============
function SectionIndex({ num, total = "07", label }: { num: string; total?: string; label: ReactNode }) {
  return (
    <div className="cf-index">
      <span className="cf-index-num">
        <span>{num}</span>
        <span style={{ color: "#9a9a93" }}>/</span>
        <span style={{ color: "#9a9a93" }}>{total}</span>
      </span>
      <span className="cf-index-label">{label}</span>
      <span aria-hidden className="cf-index-rule" />
    </div>
  );
}

function CornerFrame() {
  return (
    <>
      <span aria-hidden className="cf-corner cf-corner-tl" />
      <span aria-hidden className="cf-corner cf-corner-tr" />
      <span aria-hidden className="cf-corner cf-corner-bl" />
      <span aria-hidden className="cf-corner cf-corner-br" />
    </>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#faf8f4] text-[#1d1d1b]">
      {/* ============================ HERO ============================ */}
      <section className="opx-hero-section relative isolate overflow-hidden">
        {/* Backgrounds */}
        <div aria-hidden className="absolute inset-0 z-0 cf-bg-dots opacity-45" />

        {/* Data Center Blueprint */}
        <div aria-hidden className="opx-hero-blueprint-layer pointer-events-none absolute inset-0 z-[1]">
          <DataCenterBlueprint />
        </div>

        <div aria-hidden className="opx-hero-atmosphere absolute inset-0 z-[2]" />
        <HeroArcs className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-[760px] w-full opacity-45" />
        <div aria-hidden className="opx-hero-rack-stage absolute inset-y-20 right-0 z-[4] hidden lg:block">
          <div className="opx-hero-rack-floor" />
          {["a", "b", "c"].map((rack, rackIndex) => (
            <div key={rack} className={`opx-hero-rack opx-hero-rack-${rack}`}>
              <div className="opx-hero-rack-top" />
              <div className="opx-hero-rack-face">
                {Array.from({ length: 14 }).map((_, unitIndex) => (
                  <span
                    key={`${rack}-${unitIndex}`}
                    className="opx-hero-rack-unit"
                    style={{
                      "--delay-a": `${(unitIndex + rackIndex * 3) * 80}ms`,
                      "--delay-b": `${(unitIndex + rackIndex * 3) * 120 + 380}ms`,
                    } as CSSProperties}
                  >
                    <i />
                    <b />
                  </span>
                ))}
              </div>
              <div className="opx-hero-rack-side" />
            </div>
          ))}
          <span className="opx-hero-beam opx-hero-beam-a" />
          <span className="opx-hero-beam opx-hero-beam-b" />
          <span className="opx-hero-beam opx-hero-beam-c" />
        </div>

        {/* Top utility bar */}
        <div className="relative z-20 mx-auto max-w-[1200px] px-5 pt-7 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-[#e7e4dc] pb-4">
            <div className="flex items-center gap-3 text-[12px] text-[#4a4a47]">
              <span className="cf-status-dot" aria-hidden />
              <span className="font-mono uppercase tracking-[0.16em] text-[11px] text-[#9a9a93]">
                <LocalizedLabel labelKey="live" />
              </span>
              <span className="hidden text-[#1d1d1b] sm:inline">
                Infraestructura digital para identidad, fiscal y operación comercial
              </span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-[#9a9a93]">
              <span className="hidden sm:inline"><LocalizedLabel labelKey="version" /></span>
              <span className="cf-kbd">v2.4</span>
              <span aria-hidden>·</span>
              <span className="hidden md:inline"><LocalizedLabel labelKey="lastBuild" /></span>
              <span className="text-[#1d1d1b]">2026.06.03</span>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto max-w-[1200px] px-5 pb-28 pt-14 md:px-8 lg:pb-36 lg:pt-20">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            {/* LEFT — headline */}
            <div>
              <SectionIndex num="00" label={<LocalizedLabel labelKey="platformOperation" />} />

              <h1 className="cf-display cf-display-xl opx-hero-title mt-8 text-balance">
                Sistemas de acceso,
                <br />
                documentos y operación
                <br />
                diseñados <span className="opx-hero-title-accent">para destacar.</span>
              </h1>

              <p className="cf-body opx-hero-copy mt-7">
                Una capa de producto para equipos que necesitan seguridad visible,
                decisiones rápidas y flujos consistentes entre login, evidencia fiscal,
                sucursales, eventos y soporte operativo.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href="/contacto" className="cf-btn cf-btn-accent cf-shine">
                  <LocalizedLabel labelKey="talkSales" />
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link href="/productos" className="cf-btn cf-btn-ghost">
                  <Terminal className="h-4 w-4" aria-hidden />
                  <LocalizedLabel labelKey="viewProducts" />
                </Link>
                <span className="ml-1 hidden items-center gap-2 text-[12px] text-[#9a9a93] md:inline-flex">
                  <span><LocalizedLabel labelKey="shortcut" /></span>
                  <span className="cf-kbd">⌘</span>
                  <span className="cf-kbd">K</span>
                </span>
              </div>

              {/* KPI strip with vertical accent rules */}
              <div className="mt-14 grid max-w-2xl grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="cf-stat">
                    <div className="cf-kpi">{s.value}</div>
                    <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#9a9a93]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — platform panel */}
            <aside className="relative lg:pl-4">
              <div className="cf-tier-card opx-hero-panel relative p-8 sm:p-10">
                <CornerFrame />

                {/* Mono header bar */}
                <div className="relative flex items-center justify-between border-b border-dashed border-[#e7e4dc] pb-4">
                  <span className="cf-mono-label">
                    <LocalizedLabel labelKey="controlPlaneProduct" />
                  </span>
                  <span className="cf-chip cf-chip-accent text-[11px]">
                    <Sparkles className="h-3 w-3" aria-hidden /> <LocalizedLabel labelKey="enterpriseStack" />
                  </span>
                </div>

                <div className="relative mt-7 flex items-start gap-5">
                  <DiamondMark className="h-16 w-16 shrink-0" />
                  <div>
                    <h2 className="text-[26px] font-semibold leading-tight tracking-[-0.03em] text-[#1d1d1b]">
                      Tres dominios
                      <br />
                      bajo una misma consola
                    </h2>
                    <p className="mt-2 text-[13.5px] leading-6 text-[#4a4a47]">
                      Identidad, fiscal y retail comparten eventos, permisos,
                      telemetría y una lectura operativa consistente.
                    </p>
                  </div>
                </div>

                <div className="relative mt-7 overflow-hidden rounded-xl border border-[#e7e4dc] bg-[#fffaf3]/70">
                  <OpendexEcosystem3D height={300} />
                </div>

                {/* Spec rows */}
                <dl className="relative mt-7 overflow-hidden rounded-lg border border-[#e7e4dc] bg-white/60">
                  {[
                    { k: "Identity Platform", v: <LocalizedLabel labelKey="identity" /> },
                    { k: "Factur Workspaces", v: <LocalizedLabel labelKey="fiscal" /> },
                    { k: "Kiosko Workspaces", v: <LocalizedLabel labelKey="retail" /> },
                    { k: "Modelo común", v: <LocalizedLabel labelKey="commonModel" /> },
                  ].map((r, i) => (
                    <div
                      key={r.k}
                      className="grid grid-cols-[1fr_auto] items-center gap-4 px-4 py-3 text-[13.5px]"
                      style={{ borderTop: i === 0 ? "none" : "1px solid #f0ece3" }}
                    >
                      <dt className="text-[#4a4a47]">{r.k}</dt>
                      <dd className="font-mono text-[12.5px] font-medium text-[#1d1d1b]">{r.v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="relative mt-7 flex items-center justify-between">
                  <Link href="/contacto" className="cf-arrow-cta">
                    <LocalizedLabel labelKey="contactUs" />
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9a9a93]">
                    arquitectura · producto
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="cf-dashed-x mx-auto max-w-[1200px]" />
      </section>

      <BlueprintCapabilityMap />

      {/* ============================ GENERATED 3D VISUAL SYSTEMS ============================ */}
      <section className="relative overflow-hidden border-y border-dashed border-[#e7e4dc] bg-[#fffaf3]">
        <div aria-hidden className="opx-visual-field" />
        <div className="relative mx-auto max-w-[1200px] px-5 py-14 md:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <span className="cf-mono-label">BLUEPRINT · GOBIERNO OPERATIVO</span>
              <h2 className="mt-5 max-w-[560px] text-[42px] font-semibold leading-[0.94] tracking-[-0.045em] text-[#1d1d1b] md:text-[58px]">
                Arquitectura visible para tomar mejores decisiones.
              </h2>
            </div>
            <p className="max-w-[620px] text-[15.5px] leading-8 text-[#4a4a47] lg:pb-2">
              Una interfaz profesional no solo muestra actividad: ordena prioridad,
              contexto y responsabilidad. La lectura debe ser rápida para dirección,
              clara para operación y suficientemente precisa para dar seguimiento.
            </p>
          </div>

          <dl className="mt-9 grid overflow-hidden border-y border-dashed border-[#e7e4dc] sm:grid-cols-2 lg:grid-cols-4">
            {architectureSignals.map((item, index) => (
              <div
                key={item.label}
                className={`py-5 sm:px-5 ${index > 0 ? "border-t border-dashed border-[#e7e4dc]" : ""} ${index === 1 ? "sm:border-l sm:border-t-0" : ""} ${index === 2 ? "lg:border-l lg:border-t-0" : ""} ${index === 3 ? "sm:border-l lg:border-t-0" : ""}`}
              >
                <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9a9a93]">
                  {item.label}
                </dt>
                <dd className="mt-2 text-[14px] leading-6 text-[#3d3d3a]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {architectureDetails.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden border border-[#e7e4dc] bg-white/70 p-5 shadow-[0_18px_44px_-32px_rgba(29,29,27,0.38)] transition duration-200 hover:border-[#d8d4c8] hover:bg-white"
              >
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#f6821f] via-[#ff9910] to-transparent opacity-70" />
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#9a9a93]">
                    {item.tag}
                  </span>
                  <span className="whitespace-nowrap border border-[#e7e4dc] bg-[#fffaf3] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#4a4a47]">
                    {item.metric}
                  </span>
                </div>
                <h3 className="mt-5 text-[20px] font-semibold leading-tight tracking-[-0.025em] text-[#1d1d1b]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-7 text-[#55524c]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>

          <div className="opx-blueprint-gallery mt-9 grid gap-5 lg:grid-cols-12">
            {visualSystems.map((visual, index) => (
              <article
                key={visual.title}
                className={`opx-generated-visual-card ${index === 0 ? "opx-generated-visual-featured" : ""}`}
              >
                <div className="opx-generated-visual-shell">
                  <Image
                    src={visual.src}
                    alt={visual.title}
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 1120px, 100vw" : "(min-width: 1024px) 560px, 100vw"}
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div aria-hidden className="opx-generated-visual-scan" />
                  <div aria-hidden className="opx-generated-visual-grid" />
                  <div aria-hidden className="opx-blueprint-motion">
                    <span className="opx-blueprint-sweep" />
                    <span className="opx-blueprint-node opx-blueprint-node-a" />
                    <span className="opx-blueprint-node opx-blueprint-node-b" />
                    <span className="opx-blueprint-node opx-blueprint-node-c" />
                    <span className="opx-blueprint-data opx-blueprint-data-a" />
                    <span className="opx-blueprint-data opx-blueprint-data-b" />
                    <span className="opx-blueprint-data opx-blueprint-data-c" />
                  </div>
                  <div className="opx-generated-visual-meta">
                    <span>{visual.meta}</span>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                </div>
                <div className="opx-generated-visual-copy">
                  <h3>{visual.title}</h3>
                  <p>{visual.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ LOGO STRIP (marquee) ============================ */}
      <section className="border-y border-dashed border-[#e7e4dc] bg-[#faf8f4]">
        <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8">
          <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
            <div className="flex items-center gap-3 md:border-r md:border-dashed md:border-[#e7e4dc] md:pr-6">
              <span className="cf-mono-label">ENFOQUE · INDUSTRIA TECNOLÓGICA</span>
            </div>
            <div className="cf-marquee-mask overflow-hidden">
              <div className="flex w-max gap-12 cf-marquee">
                {[...partners, ...partners, ...partners].map((p, i) => (
                  <span key={`${p}-${i}`} className="cf-logo-tile whitespace-nowrap">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ BENEFITS · NUMBERED LIST ============================ */}
      <section className="relative cf-section">
        <div className="cf-container cf-container-grid">
          <SectionIndex num="01" label="PRINCIPIOS" />

          <div className="mt-8 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h2 className="cf-display cf-display-lg text-balance">
              Información útil
              <br />
              en lugar de repetir slogans.
            </h2>
            <p className="cf-body text-[#3d3d3a]">
              La página principal debe funcionar como mapa: qué resuelve cada producto,
              por qué existe y hacia dónde debe ir el visitante después.
            </p>
          </div>

          <div className="relative mt-16 grid gap-x-12 lg:grid-cols-2">
            {benefits.map(({ Icon, title, desc }, i) => (
              <div key={title} className="cf-feature-row cf-reveal" style={{ animationDelay: `${i * 0.04}s` }}>
                <div className="flex items-center gap-3">
                  <span className="cf-feature-row-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#e7e4dc] bg-white text-[#f6821f]">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#1d1d1b]">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-7 text-[#4a4a47]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ SECURITY · ENTERPRISE INFRASTRUCTURE ============================ */}
      <section className="cf-tech-section cf-section">
        <div aria-hidden className="cf-tech-edge-top" />
        <div aria-hidden className="cf-tech-ambient" />
        <div aria-hidden className="cf-tech-lines" />
        <div aria-hidden className="cf-tech-dots" />
        <div aria-hidden className="cf-tech-blueprint" />
        <div aria-hidden className="cf-tech-beam" />

        {/* Floating network nodes */}
        <span aria-hidden className="cf-tech-node" style={{ top: "18%", left: "12%" }} />
        <span aria-hidden className="cf-tech-node" style={{ top: "62%", left: "84%" }} />
        <span aria-hidden className="cf-tech-node" style={{ top: "82%", left: "22%" }} />

        <div className="relative z-10 cf-container cf-container-guides">
          <div className="cf-tech-reveal">
            <div className="cf-index">
              <span className="cf-index-num" style={{ background: "rgba(246,130,31,0.08)", borderColor: "rgba(246,130,31,0.25)", color: "var(--tech-cyan)" }}>
                <span>02</span>
                <span style={{ opacity: 0.5 }}>/</span>
                <span style={{ opacity: 0.5 }}>07</span>
              </span>
              <span style={{ color: "var(--tech-fg)", fontWeight: 600 }}>SECURITY · INFRASTRUCTURE</span>
              <span aria-hidden className="cf-index-rule" style={{ backgroundImage: "linear-gradient(to right, rgba(246,130,31,0.32) 50%, transparent 50%)" }} />
            </div>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="cf-tech-reveal">
              <h2 className="cf-tech-headline cf-tech-headline-lg text-balance">
                Construido sobre infraestructura
                <br />
                <span style={{ color: "var(--tech-cyan)" }}>de misión crítica.</span>
              </h2>
            </div>
            <p className="cf-tech-body cf-tech-reveal" style={{ animationDelay: "0.1s" }}>
              La capa técnica de Opendex no se presenta como una lista de promesas:
              se organiza alrededor de acceso, eventos, auditoría y operación continua.
            </p>
          </div>

          {/* Pillars grid */}
          <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
            {/* Dashed connector between cards on desktop */}
            <span aria-hidden className="cf-tech-connector hidden lg:block" style={{ top: "60px", left: "16.6%", right: "16.6%" }} />
            {pillars.map(({ Icon, tag, title, desc }, i) => (
              <TechCard key={tag} className="p-7 cf-tech-reveal" style={{ animationDelay: `${0.05 * i}s` }}>
                <div className="relative flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-[rgba(246,130,31,0.25)] bg-[rgba(246,130,31,0.08)]" style={{ color: "var(--tech-cyan)" }}>
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="cf-tech-chip cf-tech-chip-cyan">{tag}</span>
                </div>
                <h3 className="relative mt-7 text-[20px] font-semibold tracking-[-0.025em]" style={{ color: "var(--tech-fg)" }}>
                  {title}
                </h3>
                <p className="relative mt-3 text-[14.5px] leading-7" style={{ color: "var(--tech-fg-muted)" }}>
                  {desc}
                </p>
              </TechCard>
            ))}
          </div>

          {/* Network metrics strip */}
          <div className="relative mt-12">
            <div className="rounded-2xl border border-[#e7e4dc] bg-white/70 p-1 backdrop-blur cf-tech-reveal">
              <div className="grid gap-px overflow-hidden rounded-[15px] bg-[#f0ece3] sm:grid-cols-2 lg:grid-cols-4">
                {netMetrics.map((m) => (
                  <div key={m.label} className="relative bg-white/95 p-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--tech-fg-dim)" }}>
                      {m.label}
                    </div>
                    <div className="mt-2 font-mono text-[28px] font-semibold" style={{ color: m.color }}>
                      {m.value}
                    </div>
                    <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-[#f0ece3]">
                      <span
                        className="block h-full rounded-full"
                        style={{
                          width: "78%",
                          background: `linear-gradient(to right, ${m.color}, transparent)`,
                          boxShadow: `0 0 12px ${m.color}`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 cf-tech-reveal">
            <div className="flex items-center gap-3 font-mono text-[12px]" style={{ color: "var(--tech-fg-muted)" }}>
              <span className="inline-flex h-2 w-2 rounded-full" style={{ background: "var(--tech-cyan)", boxShadow: "0 0 10px var(--tech-cyan)" }} />
              Modelo técnico · sesiones · eventos · evidencia
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/seguridad" className="cf-tech-btn">
                <ShieldCheck className="h-4 w-4" aria-hidden />
                Centro de seguridad
              </Link>
              <Link href="/status" className="cf-tech-btn cf-tech-btn-accent">
                Ver status público
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>

        <div aria-hidden className="cf-tech-edge-bottom" />
      </section>

      {/* ============================ PORTFOLIO · BLUEPRINT MAP ============================ */}
      <section className="opx-portfolio-section relative overflow-hidden border-t border-dashed border-[#e7e4dc] bg-[#fffaf3]">
        <div aria-hidden className="opx-portfolio-grid" />
        <div aria-hidden className="opx-portfolio-ruler opx-portfolio-ruler-top" />
        <div aria-hidden className="opx-portfolio-ruler opx-portfolio-ruler-bottom" />
        <div aria-hidden className="opx-portfolio-orbit opx-portfolio-orbit-a" />
        <div aria-hidden className="opx-portfolio-orbit opx-portfolio-orbit-b" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-5 py-24 md:px-8 lg:py-28">
          <SectionIndex num="03" label="PORTAFOLIO" />

          <div className="mt-8 grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <h2 className="cf-display cf-display-lg text-balance">
              Un mapa de trabajo,
              <br />
              no una lista de tarjetas.
            </h2>
            <p className="cf-body text-[#3d3d3a]">
              El portafolio se presenta como un sistema: cada línea tiene un
              alcance, una señal operativa, una evidencia esperada y una ruta
              clara para profundizar sin saturar la pantalla principal.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            <aside className="opx-portfolio-map">
              <div className="opx-portfolio-map-grid" aria-hidden />
              <div className="opx-portfolio-map-header">
                <span>Portfolio Control Map</span>
                <span>v03</span>
              </div>

              <div className="opx-portfolio-node opx-portfolio-node-core">
                <span className="opx-portfolio-node-kicker">core</span>
                <strong>Opendex</strong>
                <small>control operativo</small>
              </div>

              {products.map((product, index) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className={`opx-portfolio-node opx-portfolio-node-${index + 1}`}
                  style={{ "--node-color": product.color } as CSSProperties}
                >
                  <span className="opx-portfolio-node-icon">
                    <product.Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span>
                    <small>{product.eyebrow}</small>
                    <strong>{product.state}</strong>
                  </span>
                </Link>
              ))}

              <span aria-hidden className="opx-portfolio-link opx-portfolio-link-a" />
              <span aria-hidden className="opx-portfolio-link opx-portfolio-link-b" />
              <span aria-hidden className="opx-portfolio-link opx-portfolio-link-c" />
              <span aria-hidden className="opx-portfolio-axis opx-portfolio-axis-x" />
              <span aria-hidden className="opx-portfolio-axis opx-portfolio-axis-y" />

              <dl className="opx-portfolio-map-footer">
                <div>
                  <dt>Lectura</dt>
                  <dd>Alcance</dd>
                </div>
                <div>
                  <dt>Base</dt>
                  <dd>Evidencia</dd>
                </div>
                <div>
                  <dt>Ruta</dt>
                  <dd>Detalle</dd>
                </div>
              </dl>
            </aside>

            <div className="opx-portfolio-stack">
              {products.map((product, i) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="opx-portfolio-row group"
                  style={{ "--row-color": product.color, animationDelay: `${i * 0.06}s` } as CSSProperties}
                >
                  <div className="opx-portfolio-row-index">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="opx-portfolio-row-main">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="opx-portfolio-row-icon">
                        <product.Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#9a9a93]">
                        {product.eyebrow} · {product.state}
                      </span>
                    </div>

                    <h3 className="mt-4 text-[25px] font-semibold leading-tight tracking-[-0.035em] text-[#1d1d1b]">
                      {product.name}
                    </h3>
                    <p className="mt-3 max-w-[620px] text-[14.5px] leading-7 text-[#4a4a47]">
                      {product.desc}
                    </p>
                  </div>

                  <dl className="opx-portfolio-row-spec">
                    {[
                      ["Señal", product.signal],
                      ["Alcance", product.scope],
                      ["Evidencia", product.evidence],
                    ].map(([label, value]) => (
                      <div key={label} className="opx-portfolio-spec-item">
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                    <div className="opx-portfolio-row-route">
                      <span>{product.route}</span>
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                    </div>
                  </dl>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================ HOW IT WORKS · TIMELINE ============================ */}
      <section className="relative border-t border-dashed border-[#e7e4dc] bg-[#faf8f4] cf-section">
        <div className="cf-container cf-container-bounded">
          <SectionIndex num="04" label="ROADMAP" />

          <div className="mt-8 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h2 className="cf-display cf-display-lg text-balance">
              De idea a producto
              <br />
              con menos ruido.
            </h2>
            <p className="cf-body text-[#3d3d3a]">
              Un producto serio no nace de acumular secciones bonitas. Nace de
              entender flujo, permiso, estado, evidencia y responsabilidad.
            </p>
          </div>

          <div className="mt-16 grid gap-14 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
            {/* LEFT — vertical timeline */}
            <ol className="relative space-y-12">
              {tracks.map(({ Icon, tag, title, desc }, i) => (
                <li key={title} className="cf-step group cf-reveal" style={{ animationDelay: `${i * 0.05}s` }}>
                  <span className="cf-step-dot">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f6821f]">
                        Step {tag}
                      </span>
                      <span aria-hidden className="h-px flex-1 bg-[#e7e4dc]" />
                    </div>
                    <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.025em] text-[#1d1d1b]">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-md text-[14.5px] leading-7 text-[#4a4a47]">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* RIGHT — milestone spec panel */}
            <aside className="cf-spec">
              <div className="flex items-center justify-between border-b border-[#f0ece3] px-5 py-3">
                <span className="cf-mono-label">ROADMAP · REALIDAD</span>
                <span className="cf-chip text-[10.5px]">
                  <span className="cf-status-dot mr-1" aria-hidden />
                  Método de producto
                </span>
              </div>
              <dl>
                {[
                  ["Investigación", "Problema y usuarios"],
                  ["Arquitectura", "Estados y permisos"],
                  ["Interfaz", "Flujos y jerarquía"],
                  ["Evidencia", "Auditoría y eventos"],
                  ["Comunicación", "Estado y siguiente paso"],
                ].map(([k, v]) => (
                  <div key={k} className="cf-spec-row">
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="border-t border-[#f0ece3] px-5 py-4 text-[12px] text-[#9a9a93]">
                Criterio <span className="text-[#1d1d1b]">producto · diseño · ingeniería</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============================ DEVELOPER · API TOPOLOGY ============================ */}
      <section className="cf-tech-section cf-section">
        <div aria-hidden className="cf-tech-edge-top" />
        <div aria-hidden className="cf-tech-ambient" />
        <div aria-hidden className="cf-tech-dots" />
        <div aria-hidden className="cf-tech-lines" />
        <div aria-hidden className="cf-tech-beam" style={{ animationDelay: "-7s" }} />

        <span aria-hidden className="cf-tech-node" style={{ top: "24%", right: "18%" }} />
        <span aria-hidden className="cf-tech-node" style={{ top: "74%", left: "10%" }} />

        <div className="relative z-10 mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="cf-tech-reveal">
            <div className="cf-index">
              <span className="cf-index-num" style={{ background: "rgba(246,130,31,0.08)", borderColor: "rgba(246,130,31,0.25)", color: "var(--tech-cyan)" }}>
                <span>05</span>
                <span style={{ opacity: 0.5 }}>/</span>
                <span style={{ opacity: 0.5 }}>07</span>
              </span>
              <span style={{ color: "var(--tech-fg)", fontWeight: 600 }}>DEVELOPER PLATFORM</span>
              <span aria-hidden className="cf-index-rule" style={{ backgroundImage: "linear-gradient(to right, rgba(246,130,31,0.32) 50%, transparent 50%)" }} />
            </div>
          </div>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            {/* LEFT — headline + topology */}
            <div className="cf-tech-reveal">
              <h2 className="cf-tech-headline cf-tech-headline-lg text-balance">
                Una sola API.
                <br />
                <span style={{ color: "var(--tech-cyan)" }}>Tres planos de control.</span>
              </h2>
              <p className="cf-tech-body mt-5">
                El objetivo para desarrolladores es entender la plataforma sin buscar
                en diez lugares: sesiones, documentos, inventario y eventos bajo una
                misma lógica de integración.
              </p>

              {/* Control plane topology */}
              <div className="cf-topology-map relative mt-10 h-[320px] overflow-hidden">
                <div aria-hidden className="cf-topology-scan" />
                <div aria-hidden className="cf-topology-grid" />
                <svg viewBox="0 0 520 320" className="absolute inset-0 h-full w-full" aria-hidden>
                  <defs>
                    <linearGradient id="topo-grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#f6821f" stopOpacity="0.62" />
                      <stop offset="1" stopColor="#ff9910" stopOpacity="0.26" />
                    </linearGradient>
                    <linearGradient id="topo-grad-2" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#f6821f" stopOpacity="0.6" />
                      <stop offset="1" stopColor="#ff9910" stopOpacity="0.18" />
                    </linearGradient>
                    <radialGradient id="topo-core-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0" stopColor="#ff9910" stopOpacity="0.32" />
                      <stop offset="0.56" stopColor="#f6821f" stopOpacity="0.08" />
                      <stop offset="1" stopColor="#f6821f" stopOpacity="0" />
                    </radialGradient>
                    <filter id="topo-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <path d="M30 80 C130 14 204 38 260 80 C316 122 390 146 492 80" fill="none" stroke="rgba(246,130,31,0.16)" strokeWidth="1" strokeDasharray="8 10" />
                  <path d="M30 244 C132 178 204 202 260 244 C316 286 388 306 492 244" fill="none" stroke="rgba(246,130,31,0.14)" strokeWidth="1" strokeDasharray="3 10" />
                  <path d="M260 34 C330 74 368 116 368 160 C368 204 330 246 260 286 C190 246 152 204 152 160 C152 116 190 74 260 34Z" fill="rgba(246,130,31,0.025)" stroke="rgba(246,130,31,0.18)" strokeWidth="1" />

                  {/* Central orchestration core */}
                  <circle cx="260" cy="160" r="96" fill="url(#topo-core-glow)" />
                  <circle cx="260" cy="160" r="64" fill="rgba(246,130,31,0.045)" stroke="rgba(246,130,31,0.28)" strokeWidth="1" strokeDasharray="7 7" />
                  <circle cx="260" cy="160" r="42" fill="rgba(255,255,255,0.8)" stroke="rgba(246,130,31,0.48)" strokeWidth="1" />
                  <circle cx="260" cy="160" r="6" fill="#f6821f" filter="url(#topo-soft-glow)">
                    <animate attributeName="r" values="6;8;6" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                  <text x="260" y="214" textAnchor="middle" fill="#6b6b66" fontFamily="monospace" fontSize="11" letterSpacing="2">OPENDEX_CONTROL_PLANE</text>
                  <text x="260" y="236" textAnchor="middle" fill="#f6821f" fontFamily="monospace" fontSize="9" letterSpacing="2">SESSION · DOCUMENT · STORE · EVENT</text>

                  {/* Nodes */}
                  {[
                    { x: 76, y: 76, label: "AUTH", sub: "passkeys" },
                    { x: 444, y: 76, label: "INVOICE", sub: "cfdi" },
                    { x: 76, y: 244, label: "KIOSKO", sub: "retail" },
                    { x: 444, y: 244, label: "WEBHOOKS", sub: "events" },
                    { x: 260, y: 46, label: "POLICY", sub: "risk" },
                    { x: 260, y: 274, label: "AUDIT", sub: "logs" },
                  ].map((n) => (
                    <g key={n.label}>
                      <line x1="260" y1="160" x2={n.x} y2={n.y} stroke="url(#topo-grad)" strokeWidth="1" strokeDasharray="4 4" />
                      <rect x={n.x - 38} y={n.y - 22} width="76" height="44" rx="8" fill="rgba(255,255,255,0.88)" stroke="rgba(246,130,31,0.4)" strokeWidth="1" />
                      <path d={`M ${n.x - 28} ${n.y + 11} H ${n.x + 28}`} stroke="rgba(246,130,31,0.22)" strokeWidth="1" />
                      <circle cx={n.x} cy={n.y} r="3" fill="#f6821f">
                        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <text x={n.x} y={n.y - 30} textAnchor="middle" fill="#3d3d3a" fontFamily="monospace" fontSize="10" letterSpacing="1.5">{n.label}</text>
                      <text x={n.x} y={n.y + 36} textAnchor="middle" fill="#8a8178" fontFamily="monospace" fontSize="9" letterSpacing="1.2">{n.sub}</text>
                    </g>
                  ))}

                  {/* Data flow particles */}
                  <circle r="3" fill="#ffb066">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 76 76 Q 160 108 260 160" />
                  </circle>
                  <circle r="3" fill="#f6821f">
                    <animateMotion dur="3.4s" repeatCount="indefinite" path="M 260 160 Q 352 196 444 244" />
                  </circle>
                  <circle r="3" fill="#ff9910">
                    <animateMotion dur="2.8s" repeatCount="indefinite" path="M 444 76 Q 352 108 260 160" />
                  </circle>
                  <circle r="2.5" fill="#f6821f">
                    <animateMotion dur="3.2s" repeatCount="indefinite" path="M 260 46 Q 306 104 260 160 Q 214 216 260 274" />
                  </circle>
                </svg>
                <div className="cf-topology-console" aria-hidden>
                  <span>edge sync</span>
                  <strong>42ms</strong>
                </div>
                <div className="cf-topology-metric cf-topology-metric-a" aria-hidden>
                  <span>policy</span>
                  <strong>adaptive</strong>
                </div>
                <div className="cf-topology-metric cf-topology-metric-b" aria-hidden>
                  <span>events</span>
                  <strong>live bus</strong>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/documentacion" className="cf-tech-btn">
                  <Terminal className="h-4 w-4" aria-hidden />
                  Leer documentación
                </Link>
                <Link href="https://github.com/opendex" className="cf-tech-btn">
                  <GitBranch className="h-4 w-4" aria-hidden />
                  Ver SDKs
                </Link>
              </div>
            </div>

            {/* RIGHT — endpoints + install */}
            <div className="space-y-5 cf-tech-reveal" style={{ animationDelay: "0.15s" }}>
              {/* Animated terminal */}
              <AnimatedTerminal />

              {/* Endpoints */}
              <div className="rounded-2xl border border-[#e7e4dc] bg-white/75 backdrop-blur">
                <div className="flex items-center justify-between border-b border-[#e7e4dc] px-5 py-3">
                  <div className="flex items-center gap-2">
                    <Network className="h-4 w-4" style={{ color: "var(--tech-cyan)" }} aria-hidden />
                    <span className="font-mono text-[12px] uppercase tracking-[0.18em]" style={{ color: "var(--tech-fg-muted)" }}>API ENDPOINTS</span>
                  </div>
                  <span className="cf-tech-chip">draft</span>
                </div>
                <ul className="divide-y divide-[#f0ece3]">
                  {endpoints.map((e) => (
                    <li key={e.path} className="flex items-center justify-between px-5 py-3.5 font-mono text-[13px] transition hover:bg-[rgba(246,130,31,0.05)]">
                      <span className="flex items-center gap-4">
                        <span
                          className="inline-flex h-6 w-14 items-center justify-center rounded-md font-semibold tracking-wider"
                          style={{
                            color: e.method === "GET" ? "#f6821f" : "#ff500a",
                            background: e.method === "GET" ? "rgba(246,130,31,0.1)" : "rgba(255,80,10,0.1)",
                            border: `1px solid ${e.method === "GET" ? "rgba(246,130,31,0.3)" : "rgba(255,80,10,0.3)"}`,
                            fontSize: "10px",
                          }}
                        >
                          {e.method}
                        </span>
                        <span style={{ color: "var(--tech-fg)" }}>{e.path}</span>
                      </span>
                      <span className="hidden text-[12px] md:inline" style={{ color: "var(--tech-fg-dim)" }}>{e.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  { Icon: KeyRound, label: "WebAuthn / FIDO2" },
                  { Icon: Server,   label: "gRPC + REST" },
                  { Icon: Database, label: "Postgres · Redis" },
                  { Icon: Globe2,   label: "Edge runtime" },
                ].map(({ Icon, label }) => (
                  <span key={label} className="cf-tech-chip">
                    <Icon className="h-3 w-3" aria-hidden />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden className="cf-tech-edge-bottom" />
      </section>

      {/* ============================ STATUS + CODE ============================ */}
      <section className="relative border-t border-dashed border-[#e7e4dc] bg-[#fffaf3] cf-section">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <SectionIndex num="06" label="STATUS" />

          <div className="mt-10 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="cf-display cf-display-md text-balance">
                Antes de pedir acceso,
                entiende el alcance.
              </h2>
              <p className="cf-body mt-5 text-[#3d3d3a]">
                Esta sección resume el criterio operativo de la plataforma para que
                ventas, producto e ingeniería no hablen de cosas distintas.
              </p>

              <ul className="mt-8 overflow-hidden rounded-xl border border-[#e7e4dc] bg-white/70">
                {requirements.map((req, i) => (
                  <li
                    key={req}
                    className="flex items-start gap-4 px-5 py-4 text-[14.5px] text-[#1d1d1b]"
                    style={{ borderTop: i === 0 ? "none" : "1px solid #f0ece3" }}
                  >
                    <span className="cf-tick mt-0.5">
                      <CheckCircle2 className="h-3 w-3" aria-hidden />
                    </span>
                    <span className="flex-1">{req}</span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#9a9a93]">
                      0{i + 1}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link href="/contacto" className="cf-btn cf-btn-accent cf-shine">
                  Solicitar información
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link href="/faq" className="cf-arrow-cta">
                  Ver preguntas frecuentes
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
            </div>

            {/* CODE WINDOW — IDE style with tab bar */}
            <div className="overflow-hidden rounded-2xl border border-[#1d1d1b]/15 bg-[#0e0e0c] shadow-[0_40px_100px_-40px_rgba(29,29,27,0.5)]">
              {/* OS chrome */}
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-3">
                <div className="flex items-center gap-3">
                  <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </span>
                  <span className="font-mono text-[12px] text-white/55">opendex / identity-preview</span>
                </div>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/40">
                  main
                </span>
              </div>
              {/* Tab bar */}
              <div className="flex items-center gap-px border-b border-white/8 bg-black/40 px-3 text-[12px]">
                {[
                  { name: "middleware.ts", active: true },
                  { name: "package.json", active: false },
                  { name: ".env.local", active: false },
                ].map((t) => (
                  <span
                    key={t.name}
                    className={`flex items-center gap-2 px-3 py-2.5 font-mono ${
                      t.active
                        ? "bg-[#0e0e0c] text-white border-b border-[#f6821f]"
                        : "text-white/45 hover:text-white/70"
                    }`}
                  >
                    <Code2 className="h-3 w-3 text-[#f6821f]" aria-hidden />
                    {t.name}
                  </span>
                ))}
              </div>
              {/* Code body with line numbers */}
              <div className="relative grid grid-cols-[44px_1fr] overflow-x-auto">
                <pre className="select-none border-r border-white/8 px-3 py-6 text-right font-mono text-[12px] leading-7 text-white/30">
                  {code.split("\n").map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </pre>
                <pre className="overflow-x-auto py-6 pl-5 pr-6 font-mono text-[13px] leading-7 text-white/90">
                  <code>{code}</code>
                </pre>
              </div>
              {/* Footer status */}
              <div className="flex items-center justify-between border-t border-white/8 bg-black/40 px-5 py-3 text-[11.5px] font-mono">
                <span className="flex items-center gap-2 text-white/55">
                  <span className="cf-status-dot" aria-hidden />
                  Preview OK · criterio estable
                </span>
                <span className="text-white/40">
                  <span className="text-[#f6821f]">✓</span> docs · producto · soporte
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ FINAL CTA ============================ */}
      <section className="relative border-t border-dashed border-[#e7e4dc] bg-[#faf8f4] cf-section">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <SectionIndex num="07" label="CONTACTO" />

          {/* KPI ribbon */}
          <dl className="mt-10 grid divide-y divide-[#e7e4dc] border-y border-[#e7e4dc] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {[
              { v: "LIVE", k: "servicio disponible" },
              { v: "WEB", k: "páginas web" },
              { v: "QUOTE", k: "cotización disponible" },
              { v: "UX", k: "diseño responsive" },
            ].map((s) => (
              <div key={s.k} className="px-2 py-6 sm:px-6">
                <dt className="cf-mono-label">{s.k}</dt>
                <dd className="cf-kpi mt-2">{s.v}</dd>
              </div>
            ))}
          </dl>

          <div className="relative mt-12 overflow-hidden rounded-3xl border border-[#e7e4dc] bg-gradient-to-br from-[#fff3e0] via-white to-[#fffaf3] p-10 sm:p-14 lg:p-20">
            <CornerFrame />
            <HeroArcs className="pointer-events-none absolute inset-0 h-full w-full opacity-50" />
            <DiamondMark className="pointer-events-none absolute right-8 top-8 h-16 w-16 opacity-40" />

            <div className="relative grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="cf-eyebrow">
                  <Award className="h-3.5 w-3.5" aria-hidden /> Servicios web
                </div>
                <h2 className="cf-display cf-display-lg mt-6 text-balance">
                  Convierte una idea
                  <br />
                  <span className="text-[#f6821f]">en una presencia digital clara.</span>
                </h2>
                <p className="cf-body mt-6 text-[#3d3d3a]">
                  Además de nuestras líneas internas, ofrecemos creación de
                  páginas web para empresas que necesitan una presencia digital
                  profesional, clara y responsive. Podemos cotizar con base en
                  alcance, contenido, tiempos y nivel de personalización.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {availableServices.map((item) => (
                    <article key={item.title} className="border border-[#e7e4dc] bg-white/70 p-5">
                      <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#9a9a93]">
                        {item.label}
                      </span>
                      <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.02em] text-[#1d1d1b]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-6 text-[#4a4a47]">
                        {item.desc}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <Link href="/contacto" className="cf-btn cf-btn-accent cf-shine w-full justify-center sm:w-auto">
                  Cotizar página web
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link href="/productos" className="cf-btn cf-btn-ghost w-full justify-center sm:w-auto">
                  Ver más información
                </Link>
                <span className="mt-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9a9a93]">
                  <span className="cf-status-dot" aria-hidden />
                  Conversación directa · alcance claro
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
