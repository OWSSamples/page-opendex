import { ArrowRight, Check } from "@/components/icons";

const plans = [
  {
    name: "Starter",
    price: "$0",
    mau: "10K MAU",
    sso: "Social + OIDC",
    support: "Community",
    audit: "7 dias",
    cta: "Crear cuenta",
  },
  {
    name: "Growth",
    price: "$29",
    mau: "50K MAU",
    sso: "SAML + OIDC",
    support: "Email",
    audit: "30 dias",
    cta: "Empezar Growth",
  },
  {
    name: "Business",
    price: "$199",
    mau: "250K MAU",
    sso: "Enterprise SSO",
    support: "SLA 4h",
    audit: "1 ano",
    cta: "Elegir Business",
  },
  {
    name: "Enterprise",
    price: "Custom",
    mau: "Volumen",
    sso: "Tenant dedicado",
    support: "TAM + on-call",
    audit: "Custom",
    cta: "Hablar con ventas",
  },
];

const included = [
  "Passkeys y magic links",
  "MFA adaptativo",
  "SDKs TypeScript, Python y Go",
  "Webhooks y audit trail",
];

export default function Pricing() {
  return (
    <section id="precios" className="opx-json-section">
      <div className="opx-json-shell">
        <div className="opx-json-split">
          <div className="opx-json-copy">
            <div className="opx-json-eyebrow">
              Precios
            </div>
            <h2 className="opx-json-section-title">
              Escala por usuarios activos, no por complejidad operativa.
            </h2>
          </div>
          <p className="opx-json-text">
            Todos los planes comparten la misma infraestructura de autenticacion.
            Cambian los limites, soporte, retencion de auditoria y controles
            enterprise.
          </p>
        </div>

        <div className="opx-json-card opx-json-card-plain">
          <table className="opx-json-table">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Precio</th>
                <th>Usuarios</th>
                <th>SSO</th>
                <th>Soporte</th>
                <th>Audit log</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr key={plan.name}>
                  <td>
                    {plan.name}
                  </td>
                  <td>
                    {plan.price}
                    {plan.price.startsWith("$") ? (
                      <span className="opx-json-label"> / mes</span>
                    ) : null}
                  </td>
                  <td>{plan.mau}</td>
                  <td>{plan.sso}</td>
                  <td>{plan.support}</td>
                  <td>{plan.audit}</td>
                  <td>
                    <a
                      href="#cta"
                      className="opx-json-button opx-json-button-secondary"
                    >
                      {plan.cta}
                      <ArrowRight aria-hidden />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="opx-json-control-grid">
          {included.map((item) => (
            <div key={item} className="opx-json-card opx-json-card-row">
              <Check aria-hidden />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
