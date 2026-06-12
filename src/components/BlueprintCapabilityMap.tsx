import type { CSSProperties } from "react";

const capabilityNodes = [
  {
    code: "AUTH",
    title: "Identidad y acceso",
    detail: "Passkeys/WebAuthn, SSO SAML/OIDC, MFA, sesiones verificables y reglas por workspace.",
    metric: "FIDO2",
  },
  {
    code: "FISCAL",
    title: "Operacion Mexico",
    detail: "CFDI 4.0, documentos administrativos, validaciones, PAC/SAT y seguimiento por estado.",
    metric: "CFDI 4.0",
  },
  {
    code: "RETAIL",
    title: "Sucursal y punto de venta",
    detail: "POS, inventario, tickets, cortes, reportes y operacion multi-sucursal en una superficie clara.",
    metric: "POS",
  },
  {
    code: "EVENTS",
    title: "Eventos y webhooks",
    detail: "Cambios de sesion, documentos, tickets y auditoria conectados con sistemas externos.",
    metric: "Webhooks",
  },
  {
    code: "AUDIT",
    title: "Evidencia operativa",
    detail: "Audit logs, trazabilidad, responsables, estados previos y contexto para soporte o seguridad.",
    metric: "SIEM",
  },
  {
    code: "API",
    title: "Integracion tecnica",
    detail: "Middleware para Next.js, endpoints por dominio, API keys y contratos pensados para equipos de producto.",
    metric: "SDK",
  },
];

const blueprintRows = [
  ["01", "Protocolos", "SAML · OIDC · WebAuthn"],
  ["02", "Region", "Mexico · US · EU"],
  ["03", "Dominio fiscal", "CFDI 4.0 · PAC · SAT"],
  ["04", "Operacion", "POS · inventario · reportes"],
];

export default function BlueprintCapabilityMap() {
  return (
    <section className="opx-capability-section">
      <div className="opx-capability-grid-bg" aria-hidden />
      <div className="opx-capability-shell">
        <div className="opx-capability-header">
          <div>
            <span className="cf-mono-label">BLUEPRINT · INFORMACION REAL</span>
            <h2>Mapa tecnico de capacidades por dominio.</h2>
          </div>
          <p>
            Esta capa organiza informacion concreta del portafolio: identidad,
            fiscal, retail, eventos, auditoria e integracion tecnica.
          </p>
        </div>

        <div className="opx-capability-board">
          <div className="opx-capability-core">
            <span>Control plane</span>
            <strong>Workspace operativo</strong>
            <small>usuarios · documentos · tickets · eventos</small>
          </div>

          <div className="opx-capability-orbits" aria-hidden>
            <span />
            <span />
            <span />
          </div>

          <div className="opx-capability-nodes">
            {capabilityNodes.map((node, index) => (
              <article
                key={node.code}
                className="opx-capability-node"
                style={{ "--node-delay": `${index * 70}ms` } as CSSProperties}
              >
                <div className="opx-capability-node-top">
                  <span>{node.code}</span>
                  <b>{node.metric}</b>
                </div>
                <h3>{node.title}</h3>
                <p>{node.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="opx-capability-specs">
          {blueprintRows.map(([num, label, value]) => (
            <div key={label} className="opx-capability-spec-row">
              <span>{num}</span>
              <strong>{label}</strong>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
