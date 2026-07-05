import Image from "next/image";
import Link from "next/link";
import IdentityIcon from "@/components/IdentityIcon";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="opx-json-section">
      <div className="opx-json-shell opx-json-hero-grid">
        <div className="opx-json-copy">
          <p className="opx-json-eyebrow">Error 404</p>
          <h1 className="opx-json-title">La página se salió del mapa.</h1>
          <p className="opx-json-lead">
            No encontramos esta ruta en el estado público de Opendex. Puede que el contenido haya cambiado de lugar o que todavía esté en preparación.
          </p>
          <div className="opx-json-actions">
            <Link href="/" className="opx-json-button opx-json-button-primary">
              <IdentityIcon name="workspace" size={20} className="opx-json-button-icon" />
              Volver al inicio
            </Link>
            <Link href="/contacto" className="opx-json-button opx-json-button-secondary">
              Contacto <ArrowRight aria-hidden />
            </Link>
          </div>
          <div className="opx-json-control-grid">
            {[
              ["Inicio", "Explora la web principal"],
              ["Productos", "Revisa el portafolio"],
              ["Contacto", "Pide contexto directo"],
            ].map(([title, desc]) => (
              <div key={title} className="opx-json-card">
                <h2 className="opx-json-card-title">{title}</h2>
                <p className="opx-json-text">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="opx-json-card opx-not-found-visual">
          <Image
            src="/error-404.png"
            alt="Ilustración de página no encontrada"
            width={980}
            height={760}
            priority
            className="opx-not-found-image"
          />
        </div>
      </div>
    </section>
  );
}
