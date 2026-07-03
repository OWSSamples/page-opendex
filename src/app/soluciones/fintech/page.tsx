import Link from "next/link";
import T from "@/components/LocalizedText";

export const metadata = { title: "Soluciones Fintech" };

type FintechItem = {
  label: string;
  title: string;
  description: string;
};

type FintechCapability = {
  title: string;
  description: string;
  note: string;
};

const priorities: FintechItem[] = [
  {
    label: "01",
    title: "Proyección",
    description: "Diseñar productos financieros preparados para nuevos mercados, más canales y revisiones internas más exigentes.",
  },
  {
    label: "02",
    title: "Innovación",
    description: "Convertir identidad, permisos y evidencia en una base flexible para experiencias digitales más inteligentes.",
  },
  {
    label: "03",
    title: "Avance",
    description: "Mover equipos de operación, riesgo y producto con una lectura compartida antes de escalar cada decisión.",
  },
];

const signals: FintechItem[] = [
  {
    label: "Mercado",
    title: "Velocidad con criterio",
    description: "Los equipos fintech necesitan lanzar, medir y corregir sin perder control sobre usuarios, permisos y eventos sensibles.",
  },
  {
    label: "Operación",
    title: "Evidencia siempre disponible",
    description: "Cada aprobación, cambio y excepción debe poder leerse después con contexto suficiente para soporte, riesgo y auditoría.",
  },
  {
    label: "Producto",
    title: "Experiencias más confiables",
    description: "La confianza ya no se resuelve al final; debe sentirse desde onboarding, autenticación, recuperación y revisión de cuenta.",
  },
];

const capabilities: FintechCapability[] = [
  {
    title: "Onboarding progresivo",
    description: "Flujos preparados para subir o bajar fricción según contexto, perfil y señal de riesgo.",
    note: "Identidad",
  },
  {
    title: "Permisos por alcance",
    description: "Roles, equipos y operaciones sensibles separados para evitar accesos amplios por defecto.",
    note: "Control",
  },
  {
    title: "Trazabilidad accionable",
    description: "Eventos claros para entender qué cambió, quién intervino y qué criterio sostuvo la decisión.",
    note: "Evidencia",
  },
  {
    title: "Workspaces financieros",
    description: "Separación por cliente, unidad, entorno o línea de negocio sin duplicar lógica operativa.",
    note: "Escala",
  },
  {
    title: "Revisión de riesgo",
    description: "Superficies para evaluar actividad, excepciones y cambios relevantes antes de que crezcan.",
    note: "Riesgo",
  },
  {
    title: "Continuidad comercial",
    description: "Lectura ordenada para soporte, cumplimiento y dirección cuando una operación necesita respuesta rápida.",
    note: "Continuidad",
  },
];

const operatingLayers: FintechItem[] = [
  {
    label: "Capa 1",
    title: "Persona y organización",
    description: "Usuarios, equipos, administradores y cuentas empresariales con responsabilidades visibles.",
  },
  {
    label: "Capa 2",
    title: "Acción y contexto",
    description: "Sesiones, cambios, solicitudes y aprobaciones vinculadas al motivo operacional.",
  },
  {
    label: "Capa 3",
    title: "Evidencia y avance",
    description: "Señales preparadas para decidir qué automatizar, qué revisar y qué escalar.",
  },
];

const roadmap: FintechItem[] = [
  {
    label: "Explorar",
    title: "Definir el modelo operativo",
    description: "Mapear roles, riesgos, canales y fricciones que hoy frenan crecimiento o revisión.",
  },
  {
    label: "Diseñar",
    title: "Ordenar identidad y permisos",
    description: "Crear una base que permita avanzar sin convertir cada excepción en deuda técnica.",
  },
  {
    label: "Integrar",
    title: "Conectar señales del producto",
    description: "Unir actividad, cuentas, sesiones y decisiones para que cada equipo lea el mismo contexto.",
  },
  {
    label: "Escalar",
    title: "Preparar expansión controlada",
    description: "Acompañar nuevos segmentos, equipos y flujos con trazabilidad desde el primer cambio.",
  },
];

export default function Fintech() {
  return (
    <div className="opx-fintech-page">
      <section className="opx-fintech-hero" aria-labelledby="fintech-hero-title">
        <div className="opx-fintech-hero-bg" aria-hidden />
        <div className="opx-fintech-shell opx-fintech-hero-inner">
          <p className="opx-fintech-eyebrow">
            <T id="fintech.hero.eyebrow" fallback="Soluciones / Fintech" />
          </p>
          <h1 id="fintech-hero-title">
            <T
              id="fintech.hero.title"
              fallback="Infraestructura financiera para avanzar con control, velocidad y confianza."
            />
          </h1>
          <p className="opx-fintech-hero-lede">
            <T
              id="fintech.hero.lede"
              fallback="Las fintech modernas compiten por claridad operacional: lanzar mejor, responder más rápido y sostener confianza cuando el producto crece."
            />
          </p>
          <div className="opx-fintech-actions" aria-label="Acciones principales">
            <Link href="/productos/auth" className="btn btn-primary opx-fintech-cta-primary">
              <T id="fintech.hero.primaryCta" fallback="Explorar identidad financiera" />
            </Link>
            <Link href="/contacto" className="opx-fintech-link">
              <T id="fintech.hero.secondaryCta" fallback="Hablar con el equipo" />
            </Link>
          </div>

          <div className="opx-fintech-priority-strip" aria-label="Prioridades fintech">
            {priorities.map((item, index) => (
              <article key={item.title} className="opx-fintech-priority">
                <span>{item.label}</span>
                <h2>
                  <T id={`fintech.priorities.${index}.title`} fallback={item.title} />
                </h2>
                <p>
                  <T id={`fintech.priorities.${index}.description`} fallback={item.description} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-fintech-section opx-fintech-market-section" aria-labelledby="fintech-market-title">
        <div className="opx-fintech-shell">
          <div className="opx-fintech-section-head">
            <p className="opx-fintech-section-kicker">
              <T id="fintech.market.eyebrow" fallback="Nueva presión del mercado" />
            </p>
            <h2 id="fintech-market-title">
              <T id="fintech.market.title" fallback="La siguiente generación financiera necesita operar con más lectura, no con más ruido." />
            </h2>
          </div>

          <div className="opx-fintech-signal-grid">
            {signals.map((item, index) => (
              <article key={item.title} className="opx-fintech-signal-card">
                <span>{item.label}</span>
                <h3>
                  <T id={`fintech.signals.${index}.title`} fallback={item.title} />
                </h3>
                <p>
                  <T id={`fintech.signals.${index}.description`} fallback={item.description} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-fintech-section opx-fintech-capability-section" aria-labelledby="fintech-capabilities-title">
        <div className="opx-fintech-shell opx-fintech-capability-layout">
          <div className="opx-fintech-capability-copy">
            <p className="opx-fintech-section-kicker">
              <T id="fintech.capabilities.eyebrow" fallback="Capacidades para avanzar" />
            </p>
            <h2 id="fintech-capabilities-title">
              <T id="fintech.capabilities.title" fallback="Una base para innovar sin perder control operativo." />
            </h2>
            <p>
              <T
                id="fintech.capabilities.body"
                fallback="El objetivo no es llenar la interfaz de controles; es diseñar una operación que permita crecer, experimentar y revisar con orden."
              />
            </p>
          </div>

          <div className="opx-fintech-capability-grid" aria-label="Capacidades fintech">
            {capabilities.map((item, index) => (
              <article key={item.title} className="opx-fintech-capability-card">
                <span>{item.note}</span>
                <h3>
                  <T id={`fintech.capabilities.items.${index}.title`} fallback={item.title} />
                </h3>
                <p>
                  <T id={`fintech.capabilities.items.${index}.description`} fallback={item.description} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-fintech-operating-section" aria-labelledby="fintech-operating-title">
        <div className="opx-fintech-shell opx-fintech-operating-layout">
          <div className="opx-fintech-operating-copy">
            <p className="opx-fintech-section-kicker">
              <T id="fintech.operating.eyebrow" fallback="Arquitectura de avance" />
            </p>
            <h2 id="fintech-operating-title">
              <T id="fintech.operating.title" fallback="De la idea al control: cada capa debe sostener la siguiente." />
            </h2>
            <p>
              <T
                id="fintech.operating.body"
                fallback="La innovación financiera se vuelve más fuerte cuando producto, riesgo, soporte y dirección trabajan sobre la misma evidencia."
              />
            </p>
          </div>

          <div className="opx-fintech-layer-list">
            {operatingLayers.map((item, index) => (
              <article key={item.title} className="opx-fintech-layer-row">
                <span>{item.label}</span>
                <div>
                  <h3>
                    <T id={`fintech.layers.${index}.title`} fallback={item.title} />
                  </h3>
                  <p>
                    <T id={`fintech.layers.${index}.description`} fallback={item.description} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-fintech-section opx-fintech-roadmap-section" aria-labelledby="fintech-roadmap-title">
        <div className="opx-fintech-shell">
          <div className="opx-fintech-section-head opx-fintech-section-head-wide">
            <p className="opx-fintech-section-kicker">
              <T id="fintech.roadmap.eyebrow" fallback="Ruta de evolución" />
            </p>
            <h2 id="fintech-roadmap-title">
              <T id="fintech.roadmap.title" fallback="Un camino claro para pasar de operación reactiva a infraestructura preparada para crecer." />
            </h2>
          </div>

          <div className="opx-fintech-roadmap">
            {roadmap.map((item, index) => (
              <article key={item.title} className="opx-fintech-roadmap-step">
                <span>{item.label}</span>
                <h3>
                  <T id={`fintech.roadmap.steps.${index}.title`} fallback={item.title} />
                </h3>
                <p>
                  <T id={`fintech.roadmap.steps.${index}.description`} fallback={item.description} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-fintech-final-section" aria-labelledby="fintech-final-title">
        <div className="opx-fintech-shell opx-fintech-final-panel">
          <p className="opx-fintech-section-kicker">
            <T id="fintech.final.eyebrow" fallback="Siguiente movimiento" />
          </p>
          <h2 id="fintech-final-title">
            <T id="fintech.final.title" fallback="Prepare su operación financiera para el próximo ciclo de crecimiento." />
          </h2>
          <p>
            <T
              id="fintech.final.body"
              fallback="Podemos revisar identidad, flujos sensibles, trazabilidad y prioridades de producto para diseñar una ruta de avance realista."
            />
          </p>
          <div className="opx-fintech-final-actions">
            <Link href="/contacto" className="btn btn-primary opx-fintech-cta-primary">
              <T id="fintech.final.primaryCta" fallback="Solicitar conversación" />
            </Link>
            <Link href="/seguridad" className="opx-fintech-link opx-fintech-link-on-dark">
              <T id="fintech.final.secondaryCta" fallback="Revisar seguridad" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
