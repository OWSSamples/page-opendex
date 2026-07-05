import IdentityIcon, { type IdentityIconName } from "@/components/IdentityIcon";
import { ArrowRight } from "@/components/icons";

const products = [
  {
    name: "Opendex Identity Platform",
    status: "Prelanzamiento",
    description: "Identidad, passkeys, SSO, MFA y sesiones seguras en preparacion responsable.",
    capabilities: ["Passkeys", "SAML / OIDC", "Audit logs", "Webhooks"],
    iconName: "identity",
  },
  {
    name: "Factur Workspaces",
    status: "No disponible",
    description: "Workspace fiscal preparado para CFDI 4.0, pendiente de mejoras finales.",
    capabilities: ["CFDI 4.0", "PAC", "Addendas", "Control fiscal"],
    iconName: "document",
  },
  {
    name: "Opendex Kiosko Workspaces",
    status: "Beta aislada",
    description: "Workspaces de operacion retail en entorno aislado, sin fecha publica.",
    capabilities: ["POS", "Inventario", "Reportes", "Multi-sucursal"],
    iconName: "store",
  },
] satisfies Array<{
  name: string;
  status: string;
  description: string;
  capabilities: string[];
  iconName: IdentityIconName;
}>;

const lifecycle = [
  ["Prelanzamiento", "Identity Platform se prepara sin fecha publica de salida."],
  ["Beta aislada", "Kiosko Workspaces se valida en un entorno controlado."],
  ["Mejoras finales", "Factur Workspaces no esta disponible mientras se pulen detalles."],
];

export default function Services() {
  return (
    <section id="productos" className="opx-json-section">
      <div className="opx-json-shell">
        <div className="opx-json-split">
          <div className="opx-json-copy">
            <div className="opx-json-eyebrow">
              Productos
            </div>
            <h2 className="opx-json-section-title">
              Tres lineas de producto en preparacion responsable.
            </h2>
          </div>
          <p className="opx-json-text">
            Opendex Web Services es la empresa madre. No estamos ofreciendo un
            programa de startups ni fechas artificiales: comunicamos cada
            producto segun su estado real de madurez.
          </p>
        </div>

        <div className="opx-json-split">
          <div className="opx-json-card opx-json-card-plain">
            {products.map(({ name, status, description, capabilities, iconName }) => (
              <article
                key={name}
                className="opx-json-card-header"
              >
                <IdentityIcon name={iconName} size={36} />
                <div>
                  <div className="opx-json-card-row">
                    <h3 className="opx-json-card-title">
                      {name}
                    </h3>
                    <span className="opx-json-badge">
                      {status}
                    </span>
                  </div>
                  <p className="opx-json-text">
                    {description}
                  </p>
                  <div className="opx-json-inline-list">
                    {capabilities.map((item) => (
                      <span key={item} className="opx-json-badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="#cta"
                  className="opx-json-button opx-json-button-secondary"
                >
                  Ver estado
                  <ArrowRight aria-hidden />
                </a>
              </article>
            ))}
          </div>

          <aside className="opx-json-card">
            <div className="opx-json-eyebrow">
              Roadmap actual
            </div>
            <div className="opx-json-list">
              {lifecycle.map(([title, copy]) => (
                <div key={title} className="opx-json-card">
                  <div>
                    <div className="opx-json-card-title">{title}</div>
                    <p className="opx-json-text">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
