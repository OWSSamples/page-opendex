import Link from "next/link";
import type { CSSProperties } from "react";
import type { LucideIcon } from "@/components/icons";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Database,
  Gauge,
  Layers,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "@/components/icons";

const assets = {
  blueprint: "/assets/brand-system/blueprint/blueprint-traces-primary.svg",
  hero: "/assets/brand-system/infrastructure/centralized-infrastructure-data-center.svg",
  data: "/assets/brand-system/infrastructure/quantum-data-center.svg",
  flow: "/assets/brand-system/infrastructure/data-processing.svg",
  cloud: "/assets/brand-system/infrastructure/cloud-protection.svg",
  ai: "/assets/brand-system/infrastructure/ai-protection.svg",
  network: "/assets/brand-system/infrastructure/extreme-connectivity.svg",
  server: "/assets/brand-system/infrastructure/protected-server.svg",
  motherboard: "/assets/brand-system/infrastructure/motherboard-system.svg",
};

type Principle = {
  title: string;
  copy: string;
  detail: string;
  Icon: LucideIcon;
};

type FeatureSection = {
  index: string;
  eyebrow: string;
  title: string;
  copy: string;
  metric: string;
  metricLabel: string;
  asset: string;
  Icon: LucideIcon;
  points: string[];
  layout: "split" | "dark" | "ledger" | "rail" | "studio" | "matrix";
};

type MaturityItem = {
  title: string;
  copy: string;
  criteria: string[];
};

const principles: Principle[] = [
  {
    title: "Claridad antes de velocidad",
    copy: "Un sistema moderno debe mostrar contexto, prioridad y consecuencia antes de pedir una acción.",
    detail: "Reduce ruido operativo y evita decisiones sin fundamento.",
    Icon: Compass,
  },
  {
    title: "Automatización con límites",
    copy: "La automatización útil conserva rutas de revisión, reversión y explicación humana.",
    detail: "Acelera tareas repetidas sin ocultar responsabilidad.",
    Icon: Workflow,
  },
  {
    title: "Datos con significado",
    copy: "Cada señal importante necesita origen, definición, dueño y una lectura práctica.",
    detail: "Convierte información dispersa en criterio compartido.",
    Icon: Database,
  },
  {
    title: "Arquitectura adaptable",
    copy: "Los sistemas preparados para crecer separan responsabilidades y mantienen contratos claros.",
    detail: "Permite evolucionar sin rehacer todo el flujo.",
    Icon: Layers,
  },
];

const featureSections: FeatureSection[] = [
  {
    index: "04",
    eyebrow: "Inteligencia aplicada",
    title: "La IA aporta valor cuando ordena señales, no cuando reemplaza criterio.",
    copy: "Los modelos modernos pueden resumir, clasificar y anticipar, pero una experiencia seria debe mostrar contexto, incertidumbre y rutas de corrección.",
    metric: "3 capas",
    metricLabel: "dato, inferencia y revisión",
    asset: assets.ai,
    Icon: Sparkles,
    points: ["Recomendaciones explicables", "Corrección humana", "Lectura de incertidumbre"],
    layout: "split",
  },
  {
    index: "05",
    eyebrow: "Flujos de trabajo",
    title: "El trabajo repetitivo debe convertirse en continuidad operativa.",
    copy: "Una organización avanza cuando los estados importantes no dependen de mensajes sueltos, hojas aisladas o memoria informal.",
    metric: "menos pasos",
    metricLabel: "en seguimiento diario",
    asset: assets.flow,
    Icon: Workflow,
    points: ["Estados claros", "Alertas con prioridad", "Excepciones visibles"],
    layout: "ledger",
  },
  {
    index: "06",
    eyebrow: "Datos confiables",
    title: "Los datos solo ayudan cuando se pueden entender, comparar y defender.",
    copy: "Una métrica fuerte conserva definición, fuente y momento de actualización. Sin esa base, los tableros se vuelven decoración.",
    metric: "1 verdad",
    metricLabel: "por métrica crítica",
    asset: assets.data,
    Icon: Database,
    points: ["Definiciones compartidas", "Linaje operativo", "Calidad observable"],
    layout: "matrix",
  },
  {
    index: "07",
    eyebrow: "Infraestructura",
    title: "La nube madura se mide por elasticidad, observabilidad y control.",
    copy: "Escalar no es solo mover carga a servidores externos. Es diseñar límites, monitoreo, recuperación y costos entendibles.",
    metric: "24/7",
    metricLabel: "operación observable",
    asset: assets.cloud,
    Icon: Server,
    points: ["Capacidad elástica", "Recuperación clara", "Costos legibles"],
    layout: "dark",
  },
  {
    index: "08",
    eyebrow: "Conectividad",
    title: "La experiencia digital depende de redes rápidas, seguras y predecibles.",
    copy: "Cada interacción moderna atraviesa capas de red, caché, identidad, datos y dispositivos. La calidad aparece cuando todo se coordina.",
    metric: "baja fricción",
    metricLabel: "entre sistemas",
    asset: assets.network,
    Icon: Network,
    points: ["Rutas resilientes", "Latencia vigilada", "Interoperabilidad"],
    layout: "rail",
  },
  {
    index: "09",
    eyebrow: "Confianza",
    title: "La seguridad moderna debe ser visible para operar, no invasiva para usar.",
    copy: "La protección empresarial funciona mejor cuando combina identidad, permisos, evidencia y respuesta sin convertir cada tarea en un bloqueo.",
    metric: "defensa",
    metricLabel: "en capas claras",
    asset: assets.server,
    Icon: ShieldCheck,
    points: ["Permisos mínimos", "Evidencia útil", "Respuesta ordenada"],
    layout: "studio",
  },
];

const maturityItems: MaturityItem[] = [
  {
    title: "Fundación",
    copy: "La base debe ordenar datos, roles, estados y responsables antes de ampliar automatización.",
    criteria: ["Contexto visible", "Fuentes claras", "Flujos documentados"],
  },
  {
    title: "Ejecución",
    copy: "Los procesos importantes necesitan continuidad entre equipos, dispositivos y momentos de trabajo.",
    criteria: ["Estados medibles", "Excepciones visibles", "Seguimiento responsable"],
  },
  {
    title: "Evolución",
    copy: "La mejora continua requiere experimentar sin romper estabilidad ni perder trazabilidad.",
    criteria: ["Cambios reversibles", "Señales comparables", "Aprendizaje operativo"],
  },
];

const capabilityRows = [
  ["Contexto", "Ordena causa, impacto y próxima acción en una misma lectura."],
  ["Continuidad", "Permite pausar, retomar y revisar sin reconstruir memoria."],
  ["Automatización", "Actúa en tareas repetibles y escala a revisión cuando existe ambigüedad."],
  ["Observabilidad", "Muestra avance, bloqueo, error y recuperación sin ocultar complejidad."],
  ["Interoperabilidad", "Conecta sistemas sin forzar dependencias rígidas o cajas cerradas."],
  ["Accesibilidad", "Mantiene interfaces claras, legibles y navegables por teclado."],
];

function ActionLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link className={`eh-button eh-button-${variant}`} href={href}>
      <span>{children}</span>
      {variant === "primary" ? <ArrowRight aria-hidden="true" /> : <ArrowUpRight aria-hidden="true" />}
    </Link>
  );
}

function AssetFrame({
  src,
  label,
  priority = false,
}: {
  src: string;
  label: string;
  priority?: boolean;
}) {
  return (
    <div className="eh-asset-frame" role="img" aria-label={label}>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
      />
      <span>{label}</span>
    </div>
  );
}

export default function Home() {
  const style = {
    "--eh-blueprint": `url("${assets.blueprint}")`,
  } as CSSProperties;

  return (
    <main className="enterprise-home" style={style}>
      <section className="eh-hero" aria-labelledby="home-hero-title">
        <div className="eh-shell eh-hero-grid">
          <div className="eh-hero-copy">
            <h1 id="home-hero-title">Diseñar sistemas claros para una era más inteligente.</h1>
            <p>
              La tecnología mejora cuando reduce fricción, ordena decisiones y permite que los equipos trabajen con más contexto, menos ruido y mejor continuidad.
            </p>
            <div className="eh-hero-actions">
              <ActionLink href="/documentacion">Explorar principios</ActionLink>
              <ActionLink href="/contacto" variant="secondary">Conversar con el equipo</ActionLink>
            </div>
          </div>

          <aside className="eh-hero-stage" aria-label="Sistema visual de tecnología">
            <div className="eh-floating-card eh-floating-card-a">AI</div>
            <div className="eh-floating-card eh-floating-card-b">DATA</div>
            <div className="eh-floating-card eh-floating-card-c">OPS</div>
            <AssetFrame src={assets.hero} label="Infraestructura visual" priority />
          </aside>
        </div>
      </section>

      <section className="eh-section eh-proof" aria-labelledby="proof-title">
        <div className="eh-shell">
          <div className="eh-proof-grid">
            <div>
              <h2 id="proof-title">El progreso técnico debe sentirse simple sin volverse superficial.</h2>
            </div>
            <p>
              Las mejores experiencias empresariales no intentan impresionar en cada pixel. Hacen que lo complejo sea navegable, medible y confiable.
            </p>
          </div>
          <div className="eh-stat-strip">
            <div><strong>Contexto</strong><span>antes de acción</span></div>
            <div><strong>Continuidad</strong><span>entre equipos</span></div>
            <div><strong>Criterio</strong><span>sobre automatización</span></div>
            <div><strong>Evidencia</strong><span>para decidir</span></div>
          </div>
        </div>
      </section>

      <section className="eh-section eh-principles" aria-labelledby="principles-title">
        <div className="eh-shell">
          <div className="eh-section-head">
            <h2 id="principles-title">Una base moderna se reconoce por cómo reduce ambigüedad.</h2>
          </div>
          <div className="eh-principle-grid">
            {principles.map(({ title, copy, detail, Icon }) => (
              <article className="eh-principle-card" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
                <small>{detail}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      {featureSections.map((section) => {
        const Icon = section.Icon;

        return (
          <section className={`eh-section eh-feature eh-feature-${section.layout}`} key={section.index} aria-labelledby={`feature-${section.index}`}>
            <div className="eh-shell eh-feature-grid">
              <div className="eh-feature-copy">
                <Icon className="eh-feature-icon" aria-hidden="true" />
                <h2 id={`feature-${section.index}`}>{section.title}</h2>
                <p>{section.copy}</p>
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="eh-feature-panel">
                <AssetFrame src={section.asset} label={section.eyebrow} />
                <div className="eh-feature-metric">
                  <strong>{section.metric}</strong>
                  <span>{section.metricLabel}</span>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="eh-section eh-capabilities" aria-labelledby="capabilities-title">
        <div className="eh-shell">
          <div className="eh-section-head eh-section-head-center">
            <h2 id="capabilities-title">Lo que una plataforma seria debe resolver desde la estructura.</h2>
          </div>
          <div className="eh-capability-table">
            {capabilityRows.map(([title, copy]) => (
              <article key={title}>
                <span className="eh-capability-marker" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="eh-section eh-maturity" aria-labelledby="maturity-title">
        <div className="eh-shell">
          <div className="eh-section-head eh-section-head-center">
            <h2 id="maturity-title">Tres niveles para pasar de herramienta aislada a capacidad operativa.</h2>
          </div>
          <div className="eh-maturity-grid">
            {maturityItems.map((item) => (
              <article className="eh-maturity-card" key={item.title}>
                <div className="eh-maturity-diamond" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <ul>
                  {item.criteria.map((criterion) => (
                    <li key={criterion}>{criterion}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="eh-section eh-blueprint" aria-labelledby="blueprint-title">
        <div className="eh-shell eh-blueprint-grid">
          <div>
            <h2 id="blueprint-title">Assets preparados para sostener identidad sin bloquear contenido.</h2>
            <p>
              Las imágenes deben apoyar la lectura, no cubrirla. Por eso esta composición reserva zonas claras para visuales, métricas y texto sin superponer información crítica.
            </p>
          </div>
          <div className="eh-blueprint-assets">
            <AssetFrame src={assets.motherboard} label="Arquitectura modular" />
            <AssetFrame src={assets.data} label="Datos estructurados" />
          </div>
        </div>
      </section>

      <section className="eh-section eh-final" aria-labelledby="final-title">
        <div className="eh-shell eh-final-panel">
          <div>
            <h2 id="final-title">Una home empresarial debe verse precisa, pero también debe explicar algo útil.</h2>
            <p>
              Este rediseño prioriza jerarquía, contraste, ritmo, assets propios y secciones con estructuras distintas para que la página deje de sentirse repetida.
            </p>
          </div>
          <div className="eh-final-actions">
            <ActionLink href="/documentacion">Ver documentación</ActionLink>
            <ActionLink href="/contacto" variant="secondary">Solicitar revisión</ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
