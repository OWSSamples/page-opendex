import Link from "next/link";
import { getAllLegalPolicies } from "@/lib/legalPolicies";

export const metadata = { title: "Legal" };

export default function LegalIndexPage() {
  const legalPolicies = getAllLegalPolicies();
  const policyCount = legalPolicies.length + 1;

  return (
    <main className="opx-cookie-policy-page">
      <section className="opx-privacy-policy-index">
        <div className="opx-cookie-policy-shell">
          <div className="opx-privacy-policy-backdrop" aria-hidden="true" />

          <div className="opx-privacy-policy-hero">
            <div className="opx-privacy-policy-hero-copy">
              <p className="opx-cookie-policy-kicker">Legal</p>
              <h1>Centro legal de Opendex.</h1>
              <p>
                Consulta politicas, criterios operativos y registros de cambios sobre privacidad, cookies, seguridad,
                datos, servicios y soporte. Cada documento esta separado para que el alcance sea claro y facil de revisar.
              </p>
            </div>

            <div className="opx-privacy-policy-hero-summary" aria-label="Resumen legal">
              <div>
                <strong>{policyCount}</strong>
                <span>documentos publicados</span>
              </div>
              <div>
                <strong>2026</strong>
                <span>revision vigente</span>
              </div>
              <div>
                <strong>Global</strong>
                <span>contacto de politica</span>
              </div>
            </div>

            <p className="opx-privacy-policy-hero-note">
              Para dudas formales sobre privacidad o tratamiento de datos, revisa la politica correspondiente o contacta
              al equipo de politica desde el apartado de soporte.
            </p>
          </div>

          <div className="opx-privacy-policy-grid" aria-label="Politicas legales">
            <Link href="/legal/cambios" className="opx-privacy-policy-card opx-legal-index-card">
              <h2>Cambios en politicas legales</h2>
              <p>Registro publico por fecha con lo agregado, cambiado y retirado en documentos legales.</p>
              <span>Ver cambios</span>
            </Link>

            {legalPolicies.map((policy) => (
              <Link key={policy.slug} href={`/legal/${policy.slug}`} className="opx-privacy-policy-card opx-legal-index-card">
                <h2>{policy.title}</h2>
                <p>{policy.description}</p>
                <span>Ver documento</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
