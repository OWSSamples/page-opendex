import Link from "next/link";

export const metadata = { title: "Documentación no disponible" };

export default function Documentacion() {
  return (
    <section className="opx-json-section opx-documentation-section">
      <div
        aria-hidden
        className="opx-documentation-background"
      />
      <div aria-hidden className="opx-documentation-scrim" />
      <div className="opx-json-shell">
        <div className="opx-json-card opx-json-copy">
          <span className="opx-json-eyebrow">Documentación global</span>
          <h1 className="opx-json-title">
            Esta sección se publicará como una página global.
          </h1>
          <p className="opx-json-lead">
            La documentación por producto queda pausada mientras se prepara una superficie central para todos los servicios de Opendex.
          </p>
          <div className="opx-json-actions">
            <Link href="/status" className="opx-json-button opx-json-button-primary">
              Ver estado público
            </Link>
            <Link href="/contacto" className="opx-json-button opx-json-button-secondary">
              Solicitar contexto técnico
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
