import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
} from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";
import T from "@/components/LocalizedText";
import SecurityEnterprise3D from "@/components/three/SecurityEnterprise3DClient";
import SecurityMotion from "./SecurityMotion";

export const metadata = { title: "Seguridad" };

const controls = [
  [
    "Seguridad",
    "Explore las defensas en capas de Opendex para los datos, las personas y las operaciones.",
    "Conozca más sobre seguridad",
    "/seguridad",
  ],
  [
    "Compliance y certificaciones",
    "Acceda fácilmente a certificaciones y documentos de compliance actualizados.",
    "Conozca más sobre compliance",
    "/contacto",
  ],
  [
    "Confidencialidad de datos",
    "Conozca cómo Opendex protege la privacidad cumpliendo con estándares globales.",
    "Obtenga más información sobre la protección de datos y la privacidad",
    "/legal/privacy",
  ],
  [
    "Estado del servicio en la nube",
    "Verifique la disponibilidad y rendimiento de las soluciones de Opendex en la nube.",
    "Vea el estado de los servicios en la nube",
    "/status",
  ],
  [
    "Ubicaciones de centros de datos",
    "Vea la red global segura, resiliente y sostenible de Opendex.",
    "Ubique un centro de datos",
    "/empresa",
  ],
  [
    "Acuerdos",
    "Revise los marcos legales, términos y compromisos específicos de Opendex respecto a la IA.",
    "Obtenga más información sobre los acuerdos",
    "/contacto",
  ],
];

const trustResources = [
  [
    "Centro de confianza",
    "Certificaciones, reportes de auditoria, privacidad y compromisos operativos para revision empresarial.",
    "/seguridad",
  ],
  [
    "Estado del servicio",
    "Disponibilidad en tiempo real, historial de incidentes y mantenimiento programado.",
    "/status",
  ],
  [
    "Acuerdo de tratamiento de datos",
    "Base para revisar responsabilidades, tratamiento de informacion y controles de privacidad.",
    "/legal/privacy",
  ],
  [
    "Lista de subprocesadores",
    "Servicios y proveedores que pueden apoyar procesos operativos bajo contexto regional.",
    "/contacto",
  ],
  [
    "Acuerdo maestro de servicios",
    "Condiciones centrales para operar, evaluar y escalar una suscripcion Opendex.",
    "/contacto",
  ],
  [
    "Terminos de soporte",
    "Canales, prioridades y criterios de respuesta para mantener continuidad operacional.",
    "/contacto",
  ],
  [
    "Politica de privacidad",
    "Como Opendex recopila, usa y protege informacion personal en productos y sitios.",
    "/legal/privacy",
  ],
];

const securitySignals = [
  "objetivo de disponibilidad",
  "monitoreo técnico",
  "en tránsito y reposo",
  "por usuario y evento",
];

const assuranceDocuments = [
  {
    title: "Políticas de seguridad",
    description: "Controles internos, manejo de datos y criterios de operación segura.",
    audience: "Seguridad y TI",
    route: "Controles internos",
    href: "/contacto",
  },
  {
    title: "Privacidad y datos",
    description: "Tratamiento de información, retención, confidencialidad y compromisos de privacidad.",
    audience: "Legal y compras",
    route: "Privacidad y DPA",
    href: "/legal/privacy",
  },
  {
    title: "Estado del servicio",
    description: "Disponibilidad, incidentes y comunicación operacional para equipos internos.",
    audience: "Operaciones",
    route: "Estado público",
    href: "/status",
  },
  {
    title: "Respuesta a incidentes",
    description: "Proceso de contención, comunicación, revisión y mejora posterior al evento.",
    audience: "Riesgo y continuidad",
    route: "Plan de respuesta",
    href: "/contacto",
  },
];

const operatingModel = [
  {
    phase: "Contexto antes de aprobar",
    title: "Identidad y responsabilidad",
    body: "Cada solicitud conserva usuario, equipo, alcance, riesgo y motivo de negocio antes de convertirse en una acción.",
    meta: "Usuarios, roles, sesiones",
  },
  {
    phase: "Criterio durante la acción",
    title: "Permisos con lectura operativa",
    body: "Las decisiones se evalúan con política, impacto y continuidad para reducir aprobaciones aisladas o ambiguas.",
    meta: "Políticas, riesgo, continuidad",
  },
  {
    phase: "Evidencia posterior",
    title: "Registro listo para revisión",
    body: "El resultado queda preparado para auditoría, soporte y seguimiento sin depender de conversaciones dispersas.",
    meta: "Auditoría, historial, revisión",
  },
];

const operatingChecks = [
  "Responsable claro antes de ejecutar cambios sensibles.",
  "Criterios de acceso visibles para seguridad y operación.",
  "Evidencia preparada para auditoría, soporte y continuidad.",
  "Lectura común entre equipos técnicos, comerciales y administrativos.",
];

export default function Seguridad() {
  return (
    <SecurityMotion>
      <LocalizedPageHeader pageKey="security">
        <Link href="/status" className="btn btn-primary">
          <LocalizedLabel labelKey="publicStatus" /> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </LocalizedPageHeader>

      <section className="opx-security-proof-section" aria-labelledby="security-proof-title">
        <div className="opx-security-proof-inner">
          <h2 id="security-proof-title" className="opx-security-proof-title">
            <T id="security.proof.title" fallback="Proteja su empresa con soluciones comprobadas" />
          </h2>

          <div className="opx-security-proof-hero">
            <figure className="opx-security-proof-media">
              <div className="opx-security-proof-media-frame">
                <Image
                  src="/images/assets/tech-data-center.png"
                  alt="Especialista revisando infraestructura en un centro de datos empresarial"
                  fill
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="opx-security-proof-media-image"
                  priority={false}
                />
                <button type="button" className="opx-security-proof-play" aria-label="Reproducir presentación de seguridad">
                  <svg viewBox="0 0 24 24" aria-hidden>
                    <path d="M9 7.8v8.4L16.2 12 9 7.8Z" />
                  </svg>
                </button>
                <div className="opx-security-proof-label">
                  <strong>Opendex Secure Center</strong>
                  <span>
                    <T id="security.proof.mediaLabel" fallback="Seguridad, compliance y privacidad" />
                  </span>
                </div>
              </div>
            </figure>

            <div className="opx-security-proof-copy">
              <h3>
                <T id="security.proof.copyTitle" fallback="La seguridad integrada impulsa su éxito" />
              </h3>
              <p>
                <T
                  id="security.proof.copyBody"
                  fallback="Opendex protege identidades, documentos y operaciones con controles sólidos de seguridad, trazabilidad y privacidad preparados para entornos empresariales exigentes."
                />
              </p>
              <div className="opx-security-proof-signal-grid" aria-label="Señales clave de seguridad">
                {securitySignals.map((signal, index) => (
                  <article key={signal} className="opx-security-proof-signal">
                    <strong>
                      <T id={`security.signals.${index}.label`} fallback={signal} />
                    </strong>
                    <p>
                      <T
                        id={`security.signals.${index}.description`}
                        fallback="Control verificable para equipos de seguridad, operación y cumplimiento."
                      />
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="opx-security-proof-grid">
            {controls.map(([title, desc, linkLabel, href], index) => (
              <article key={title} className="opx-security-proof-item">
                <h3>
                  <T id={`security.controls.${index}.title`} fallback={title} />
                </h3>
                <p>
                  <T id={`security.controls.${index}.description`} fallback={desc} />
                </p>
                <Link href={href} className="opx-security-proof-link">
                  <T id={`security.controls.${index}.link`} fallback={linkLabel} />{" "}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-security-enterprise-docs" aria-labelledby="enterprise-docs-title">
        <div className="opx-security-enterprise-shell">
          <div className="opx-security-enterprise-grid" aria-hidden />

          <div className="opx-security-enterprise-copy-block">
            <div className="opx-security-enterprise-head">
              <div className="opx-security-enterprise-kicker">
                <span>
                  <T id="security.enterprise.kicker" fallback="Enterprise-ready" />
                </span>
              </div>
              <h2 id="enterprise-docs-title">
                <T id="security.enterprise.titleA" fallback="Enterprise-ready" />
                <br />
                <T id="security.enterprise.titleB" fallback="docs," />{" "}
                <em>
                  <T id="security.enterprise.titleEm" fallback="out of the box" />
                </em>
              </h2>
            </div>

            <p className="opx-security-enterprise-copy">
              <T
                id="security.enterprise.copy"
                fallback="Everything your team needs to ship trust at scale. Granular permissions, SSO, audit trails, migrations, and multilingual support built in."
              />
            </p>

            <div className="opx-security-enterprise-action">
              <Link href="/contacto" className="opx-security-enterprise-button">
                <T id="security.enterprise.cta" fallback="Book a demo" />
              </Link>
            </div>
          </div>

          <div className="opx-security-enterprise-visual-suite">
            <div className="opx-security-enterprise-stage">
              <div className="opx-security-enterprise-stage-brand" aria-label="Opendex security architecture">
                <Image
                  src="/assets-for-opendex/lgoo-opendex-white.svg"
                  alt="Opendex"
                  width={54}
                  height={30}
                />
                <span>Security architecture</span>
              </div>
              <SecurityEnterprise3D height={460} />
              <div className="opx-security-enterprise-stage-proof" aria-hidden>
                <span>RBAC</span>
                <span>SOC2</span>
                <span>SSO</span>
              </div>
            </div>
            <div className="opx-security-enterprise-capabilities" aria-label="Capacidades enterprise">
              <div>
                <span className="opx-security-enterprise-capability-head">
                  <Image
                    src="/images/icons-for-identity/approved-unlock.svg"
                    alt=""
                    width={26}
                    height={26}
                    aria-hidden
                  />
                  <strong>
                    <T id="security.enterprise.roles.titleA" fallback="Role-based" />{" "}
                    <T id="security.enterprise.roles.titleB" fallback="access controls" />
                  </strong>
                </span>
                <span>
                  <T
                    id="security.enterprise.roles.body"
                    fallback="Control who can view, edit, and publish with granular permissions."
                  />
                </span>
              </div>
              <div>
                <span className="opx-security-enterprise-capability-head opx-security-enterprise-cert-logos">
                  <Image
                    src="/security-compliance-soc.png"
                    alt="SOC 2"
                    width={34}
                    height={34}
                  />
                  <Image
                    src="/security-compliance-gdpr.svg"
                    alt="GDPR"
                    width={34}
                    height={34}
                  />
                  <strong>SOC2 &amp; GDPR</strong>
                </span>
                <span>
                  <T
                    id="security.enterprise.compliance.body"
                    fallback="Audited, organized, and ready for review. Compliance your security team can trust."
                  />
                </span>
              </div>
              <div>
                <span className="opx-security-enterprise-capability-head">
                  <Image
                    src="/images/icons-for-identity/iris-scan.svg"
                    alt=""
                    width={26}
                    height={26}
                    aria-hidden
                  />
                  <strong>
                    SSO{" "}
                    <T id="security.enterprise.sso.titleB" fallback="integration" />
                  </strong>
                </span>
                <span>
                  <T
                    id="security.enterprise.sso.body"
                    fallback="Connect your existing identity provider for seamless single sign-on."
                  />
                </span>
                <span className="opx-security-enterprise-sso-providers" aria-label="Proveedores sociales compatibles">
                  <span className="opx-security-social-mark opx-security-social-google" aria-label="Google" />
                  <span className="opx-security-social-mark opx-security-social-microsoft" aria-label="Microsoft" />
                  <span className="opx-security-social-mark opx-security-social-github" aria-label="GitHub" />
                  <span className="opx-security-social-mark opx-security-social-linkedin" aria-label="LinkedIn" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="opx-security-enterprise-fade" aria-hidden />
      </section>

      <section className="opx-trust-metrics-section" aria-labelledby="trust-metrics-title">
        <div className="opx-trust-metrics-inner">
          <div className="opx-trust-section-heading opx-trust-section-heading-centered">
            <p>
              <T id="security.metrics.eyebrow" fallback="Recursos" />
            </p>
            <h2 id="trust-metrics-title">
              <T id="security.metrics.title" fallback="Todo lo necesario para revisar seguridad y continuidad" />
            </h2>
            <span className="opx-trust-section-subtitle">
              <T
                id="security.metrics.subtitle"
                fallback="Certificaciones, estado publico, privacidad y documentos operativos organizados en una sola lectura."
              />
            </span>
          </div>

          <div className="opx-trust-resource-board">
            {trustResources.map(([title, desc, href], index) => (
              <Link key={title} href={href} className="opx-trust-resource-tile">
                <h3>
                  <T id={`security.resources.${index}.title`} fallback={title} />
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </h3>
                <p>
                  <T id={`security.resources.${index}.description`} fallback={desc} />
                </p>
              </Link>
            ))}
            <Link href="/contacto" className="opx-trust-resource-tile opx-trust-resource-tile-fill">
              <span>
                <T id="security.resources.callout.eyebrow" fallback="Revisión guiada" />
              </span>
              <h3>
                <T id="security.resources.callout.title" fallback="Prepare un paquete de seguridad para compras, legal y TI" />
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </h3>
              <p>
                <T
                  id="security.resources.callout.description"
                  fallback="Centralice preguntas, documentos requeridos y responsables antes de abrir una evaluación formal."
                />
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="opx-trust-operating-section" aria-labelledby="trust-operating-title">
        <div className="opx-trust-operating-inner">
          <div className="opx-trust-operating-copy">
            <p className="opx-trust-eyebrow">
              <T id="security.operating.eyebrow" fallback="Modelo de seguridad" />
            </p>
            <h2 id="trust-operating-title">
              <T id="security.operating.title" fallback="Una base clara para identidad, datos y continuidad" />
            </h2>
            <p>
              <T
                id="security.operating.body"
                fallback="Esta base reduce decisiones aisladas: cada cambio conserva contexto, criterio y evidencia para que seguridad, soporte y operaciones lean la misma version de la verdad."
              />
            </p>
            <Link href="/contacto" className="btn btn-primary">
              <T id="security.operating.cta" fallback="Solicitar contexto técnico" />{" "}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="opx-trust-operating-suite" aria-label="Modelo operativo de seguridad">
            <div className="opx-trust-operating-summary">
              <span>
                <T id="security.operating.summaryLabel" fallback="Sistema operativo de confianza" />
              </span>
              <strong>
                <T id="security.operating.summaryValue" fallback="Contexto, criterio y evidencia en una misma lectura." />
              </strong>
            </div>

            <div className="opx-trust-operating-ledger">
              {operatingModel.map(({ phase, title, body, meta }, index) => (
                <article key={phase} className="opx-trust-operating-card">
                  <div>
                    <span>
                      <T id={`security.layers.${index}.title`} fallback={phase} />
                    </span>
                    <h3>
                      <T id={`security.layers.${index}.label`} fallback={title} />
                    </h3>
                    <p>
                      <T id={`security.layers.${index}.description`} fallback={body} />
                    </p>
                    <small>
                      <T id={`security.layers.${index}.meta`} fallback={meta} />
                    </small>
                  </div>
                </article>
              ))}
            </div>

            <aside className="opx-trust-operating-aside" aria-label="Criterios de revisión operativa">
              <div>
                <span>
                  <T id="security.operating.asideLabel" fallback="Listo para revisión" />
                </span>
                <h3>
                  <T id="security.operating.asideTitle" fallback="Lo importante queda verificable antes de escalar." />
                </h3>
              </div>
              <ul>
                {operatingChecks.map((check, index) => (
                  <li key={check}>
                    <T id={`security.operating.checks.${index}`} fallback={check} />
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="opx-trust-docs-section" aria-labelledby="trust-docs-title">
        <div className="opx-trust-docs-inner">
          <div className="opx-trust-docs-layout">
            <div className="opx-trust-docs-copy">
              <p className="opx-trust-eyebrow">
                <T id="security.docs.eyebrow" fallback="Biblioteca de confianza" />
              </p>
              <h2 id="trust-docs-title">
                <T id="security.docs.title" fallback="Documentos y rutas para revisar seguridad sin fricción" />
              </h2>
              <p>
                <T
                  id="security.docs.body"
                  fallback="Organice la revisión por responsable, ruta y evidencia para que seguridad, legal y operaciones trabajen sobre el mismo paquete documental."
                />
              </p>
              <div className="opx-trust-docs-brief">
                <span>
                  <T id="security.docs.briefLabel" fallback="Lectura recomendada" />
                </span>
                <strong>
                  <T id="security.docs.briefTitle" fallback="Empiece por privacidad, continúe con controles y cierre con continuidad." />
                </strong>
              </div>
            </div>

            <div className="opx-trust-docs-board" aria-label="Rutas documentales de seguridad">
              <div className="opx-trust-docs-board-head">
                <span>
                  <T id="security.docs.boardLabel" fallback="Paquete de revisión" />
                </span>
                <strong>
                  <T id="security.docs.boardTitle" fallback="Rutas ordenadas por equipo y objetivo" />
                </strong>
              </div>

              <div className="opx-trust-docs-list">
                {assuranceDocuments.map(({ title, description, audience, route, href }, index) => (
                  <Link key={title} href={href} className="opx-trust-doc-row">
                    <div className="opx-trust-doc-row-main">
                      <div className="opx-trust-doc-row-meta">
                        <span>
                          <T id={`security.documents.${index}.audience`} fallback={audience} />
                        </span>
                        <span>
                          <T id={`security.documents.${index}.route`} fallback={route} />
                        </span>
                      </div>
                      <div>
                        <h3>
                          <T id={`security.documents.${index}.title`} fallback={title} />
                        </h3>
                        <p>
                          <T id={`security.documents.${index}.description`} fallback={description} />
                        </p>
                      </div>
                    </div>
                    <span className="opx-trust-doc-row-cta">
                      <T id="security.documents.cta" fallback="Ver documento" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="opx-trust-cta-section" aria-labelledby="trust-cta-title">
        <div className="opx-trust-cta-inner">
          <div>
            <p className="opx-trust-eyebrow">
              <T id="security.cta.eyebrow" fallback="Revisión empresarial" />
            </p>
            <h2 id="trust-cta-title">
              <T id="security.cta.title" fallback="Preparemos una revisión de seguridad para su equipo" />
            </h2>
            <p>
              <T
                id="security.cta.body"
                fallback="Podemos ayudarle a revisar arquitectura, privacidad, continuidad y controles operativos antes de iniciar una integración o evaluación formal."
              />
            </p>
          </div>
          <div className="opx-trust-cta-actions">
            <Link href="/contacto" className="btn btn-primary">
              <T id="security.cta.primary" fallback="Contactar seguridad" />{" "}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/status" className="btn btn-ghost">
              <T id="security.cta.secondary" fallback="Ver status público" />
            </Link>
          </div>
        </div>
      </section>
    </SecurityMotion>
  );
}
