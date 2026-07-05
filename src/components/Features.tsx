import IdentityIcon, { type IdentityIconName } from "@/components/IdentityIcon";

const controls = [
  {
    iconName: "identity",
    title: "Passwordless first",
    copy: "Passkeys WebAuthn, magic links y login social sin degradar la seguridad base.",
  },
  {
    iconName: "policy",
    title: "Adaptive policy",
    copy: "Reglas por dispositivo, region, tenant y riesgo antes de emitir la sesion.",
  },
  {
    iconName: "session",
    title: "Session hardening",
    copy: "Rotacion, revocacion instantanea, cookies httpOnly y scopes por app.",
  },
  {
    iconName: "audit",
    title: "Event stream",
    copy: "Logs exportables, webhooks y trazabilidad para auditoria y soporte.",
  },
  {
    iconName: "workspace",
    title: "Regional control",
    copy: "Residencia de datos por proyecto con edge en Mexico, US y EU.",
  },
  {
    iconName: "organization",
    title: "Tenant model",
    copy: "Workspaces, roles y separacion operativa para equipos internos y clientes.",
  },
] satisfies Array<{ iconName: IdentityIconName; title: string; copy: string }>;

const layers = [
  ["Client", "Passkey challenge", "Device trust"],
  ["Policy", "Risk decision", "MFA routing"],
  ["Session", "Token rotation", "Scope enforcement"],
  ["Audit", "Webhook event", "Data export"],
];

export default function Features() {
  return (
    <section className="opx-json-section">
      <div className="opx-json-shell">
        <div className="opx-json-split">
          <div className="opx-json-copy">
            <div className="opx-json-eyebrow">
              Seguridad
            </div>
            <h2 className="opx-json-section-title">
              Controles de identidad pensados para operar, no para decorar.
            </h2>
            <p className="opx-json-text">
              La interfaz comunica lo mismo que la plataforma: control,
              trazabilidad y decisiones claras. Cada bloque muestra una pieza
              del sistema, sin repetir la misma card seis veces.
            </p>
          </div>

          <div className="opx-json-card">
            <div className="opx-json-card opx-json-card-plain">
              {layers.map(([layer, primary, secondary], index) => (
                <div
                  key={layer}
                  className="opx-json-card-header"
                >
                  <span className="opx-json-label">
                    {layer}
                  </span>
                  <span>{primary}</span>
                  <span className="opx-json-label">{secondary}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="opx-json-control-grid">
          {controls.map(({ iconName, title, copy }) => (
            <article
              key={title}
              className="opx-json-card"
            >
              <div className="opx-json-card-row">
                <IdentityIcon name={iconName} size={34} />
                <h3 className="opx-json-card-title">
                  {title}
                </h3>
              </div>
              <p className="opx-json-text">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
