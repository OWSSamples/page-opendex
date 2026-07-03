import Image from "next/image";
import Link from "next/link";
import T from "@/components/LocalizedText";

export const metadata = { title: "Soluciones SaaS B2B" };

type SaasRow = {
  title: string;
  description: string;
};

type SaasColumn = {
  title: string;
  body: string;
};

const accountRows: SaasRow[] = [
  {
    title: "Una entidad comercial clara",
    description: "Cada cliente necesita límites, propietarios, dominios, ambientes y decisiones visibles.",
  },
  {
    title: "Responsabilidades por área",
    description: "Administradores, finanzas, soporte y usuarios finales no deben operar con la misma superficie.",
  },
  {
    title: "Permisos que acompañan el contrato",
    description: "La experiencia cambia cuando cada plan, rol y alcance tiene un comportamiento definido.",
  },
  {
    title: "Señales listas para soporte",
    description: "Lo importante no es guardar eventos; es convertirlos en contexto para decidir rápido.",
  },
];

const operatingColumns: SaasColumn[] = [
  {
    title: "Ventas enterprise",
    body: "Preparar la cuenta antes de prometer flujos especiales, dominios, aprobaciones o reportes.",
  },
  {
    title: "Éxito del cliente",
    body: "Entender adopción, bloqueos y cambios sin pedir capturas ni perseguir información interna.",
  },
  {
    title: "Producto",
    body: "Decidir qué se vuelve plataforma, qué se mantiene configurable y qué no debe personalizarse.",
  },
  {
    title: "Seguridad",
    body: "Revisar accesos, sesiones, cambios relevantes y excepciones con una lectura compartida.",
  },
];

const maturityRows: SaasRow[] = [
  {
    title: "Separar cuentas",
    description: "El primer paso es que cada organización tenga límites reales, no solo un campo más en la base de datos.",
  },
  {
    title: "Gobernar roles",
    description: "Los permisos deben sostener administración, soporte, facturación, operación y auditoría sin mezclarse.",
  },
  {
    title: "Observar uso",
    description: "El equipo necesita leer señales de adopción, riesgo y fricción antes de que se vuelvan tickets.",
  },
  {
    title: "Expandir con orden",
    description: "Nuevas unidades, regiones o productos deben entrar al modelo sin romper la operación existente.",
  },
];

const designPrinciples: SaasRow[] = [
  {
    title: "Diseñe la organización como una pieza central",
    description: "La cuenta empresarial no es una vista administrativa: es el eje que ordena permisos, soporte y expansión.",
  },
  {
    title: "Haga que cada equipo lea la misma versión",
    description: "Ventas, producto, soporte y seguridad deben trabajar sobre el mismo contexto, no sobre conversaciones separadas.",
  },
  {
    title: "Evite que cada cliente cree una excepción",
    description: "Un buen sistema permite adaptar sin convertir cada contrato en una rama de producto imposible de mantener.",
  },
];

export default function Saas() {
  return (
    <div className="opx-saas-page">
      <section className="opx-saas-hero" aria-labelledby="saas-hero-title">
        <div className="opx-saas-hero-surface" aria-hidden />
        <div className="opx-saas-shell opx-saas-hero-inner">
          <div className="opx-saas-hero-copy">
            <h1 id="saas-hero-title">
              <T id="saas.hero.title" fallback="Plataformas que crecen por cuenta, equipo y canal." />
            </h1>
            <p className="opx-saas-hero-lede">
              <T
                id="saas.hero.lede"
                fallback="Cuando una aplicación empieza a vender a empresas, el reto deja de ser solo funcionalidad: aparece gobierno, soporte, permisos, adopción y expansión."
              />
            </p>
            <div className="opx-saas-actions" aria-label="Acciones principales">
              <Link href="/productos/auth" className="btn btn-primary opx-saas-primary">
                <T id="saas.hero.primaryCta" fallback="Diseñar modelo de cuentas" />
              </Link>
              <Link href="/contacto" className="opx-saas-text-link">
                <T id="saas.hero.secondaryCta" fallback="Conversar arquitectura" />
              </Link>
            </div>
          </div>

          <figure className="opx-saas-hero-media">
            <Image
              src="/images/blog/opendex-blog-featured-infrastructure.png"
              alt="Equipo revisando infraestructura digital y operación empresarial."
              fill
              priority
              sizes="(min-width: 1100px) 520px, 100vw"
              className="opx-saas-hero-image"
            />
          </figure>
        </div>
      </section>

      <section className="opx-saas-account-section" aria-label="Arquitectura operativa">
        <div className="opx-saas-shell">
          <div className="opx-saas-ledger">
            {accountRows.map((item, index) => (
              <article key={item.title} className="opx-saas-ledger-row">
                <h2>
                  <T id={`saas.account.${index}.title`} fallback={item.title} />
                </h2>
                <p>
                  <T id={`saas.account.${index}.description`} fallback={item.description} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-saas-editorial-section" aria-labelledby="saas-editorial-title">
        <div className="opx-saas-shell opx-saas-editorial-grid">
          <div className="opx-saas-section-copy">
            <h2 id="saas-editorial-title">
              <T id="saas.editorial.title" fallback="La empresa no compra una pantalla; compra continuidad para su operación." />
            </h2>
          </div>
          <p className="opx-saas-editorial-lede">
            <T
              id="saas.editorial.body"
              fallback="Por eso la arquitectura debe responder preguntas que no aparecen en una demo inicial: quién administra, quién aprueba, qué se audita, cómo se atiende soporte y qué pasa cuando la cuenta se expande."
            />
          </p>
        </div>
      </section>

      <section className="opx-saas-board-section" aria-labelledby="saas-board-title">
        <div className="opx-saas-shell">
          <div className="opx-saas-board-head">
            <h2 id="saas-board-title">
              <T id="saas.board.title" fallback="Una operación compartida, sin duplicar contexto." />
            </h2>
          </div>

          <div className="opx-saas-operating-board" aria-label="Areas que dependen de la arquitectura operativa">
            {operatingColumns.map((item, index) => (
              <article key={item.title} className="opx-saas-operating-column">
                <h3>
                  <T id={`saas.operating.${index}.title`} fallback={item.title} />
                </h3>
                <p>
                  <T id={`saas.operating.${index}.body`} fallback={item.body} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-saas-maturity-section" aria-labelledby="saas-maturity-title">
        <div className="opx-saas-shell opx-saas-maturity-layout">
          <div className="opx-saas-section-copy">
            <h2 id="saas-maturity-title">
              <T id="saas.maturity.title" fallback="El crecimiento se vuelve manejable cuando cada etapa conserva sus límites." />
            </h2>
          </div>

          <div className="opx-saas-maturity-rail">
            {maturityRows.map((item, index) => (
              <article key={item.title} className="opx-saas-maturity-row">
                <div>
                  <h3>
                    <T id={`saas.maturity.steps.${index}.title`} fallback={item.title} />
                  </h3>
                  <p>
                    <T id={`saas.maturity.steps.${index}.description`} fallback={item.description} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-saas-principles-section" aria-labelledby="saas-principles-title">
        <div className="opx-saas-shell">
          <div className="opx-saas-section-copy opx-saas-principles-copy">
            <h2 id="saas-principles-title">
              <T id="saas.principles.title" fallback="Menos excepciones, más sistema." />
            </h2>
          </div>

          <div className="opx-saas-principles-list">
            {designPrinciples.map((item, index) => (
              <article key={item.title} className="opx-saas-principle-row">
                <h3>
                  <T id={`saas.principles.items.${index}.title`} fallback={item.title} />
                </h3>
                <p>
                  <T id={`saas.principles.items.${index}.description`} fallback={item.description} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-saas-final-section" aria-labelledby="saas-final-title">
        <div className="opx-saas-shell opx-saas-final-inner">
          <h2 id="saas-final-title">
            <T id="saas.final.title" fallback="Ordene el modelo de cuenta antes de que el producto exija parches." />
          </h2>
          <p>
            <T
              id="saas.final.body"
              fallback="Podemos revisar cómo debería vivir la organización, los roles, el soporte y la auditoría dentro de su operación."
            />
          </p>
          <div className="opx-saas-actions">
            <Link href="/contacto" className="btn btn-primary opx-saas-primary">
              <T id="saas.final.primaryCta" fallback="Solicitar revisión" />
            </Link>
            <Link href="/seguridad" className="opx-saas-text-link opx-saas-text-link-light">
              <T id="saas.final.secondaryCta" fallback="Ver criterios de seguridad" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
