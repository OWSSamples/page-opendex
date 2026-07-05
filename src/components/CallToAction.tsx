import { ArrowRight } from "@/components/icons";

const proof = ["Sin tarjeta", "10K MAU incluidos", "Setup asistido", "SLA enterprise"];

export default function CallToAction() {
  return (
    <section id="cta" className="opx-json-section">
      <div className="opx-json-shell">
        <div className="opx-json-card opx-json-card-plain">
          <div className="opx-json-card-body">
            <div className="opx-json-eyebrow">
              Siguiente paso
            </div>
            <h2 className="opx-json-section-title">
              Empieza con un proyecto de autenticacion y valida el flujo con tu
              primera aplicacion.
            </h2>
            <p className="opx-json-text">
              Crea un workspace, conecta una app y prueba passkeys, SSO y MFA
              con datos de desarrollo antes de moverlo a produccion.
            </p>
          </div>

          <div className="opx-json-card-body">
            <div className="opx-json-actions">
              <a href="/contacto" className="opx-json-button opx-json-button-primary">
                Crear cuenta
                <ArrowRight aria-hidden />
              </a>
              <a href="/contacto" className="opx-json-button opx-json-button-secondary">
                Hablar con ventas
              </a>
            </div>

            <div className="opx-json-metrics">
              {proof.map((item) => (
                <div key={item} className="opx-json-metric">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
