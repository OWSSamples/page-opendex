import Link from "next/link";
import { legalPolicyChanges } from "@/lib/legalPolicyChanges";

export const metadata = {
  title: "Cambios de politicas legales",
  description: "Registro publico de cambios aplicados a las politicas legales de Opendex.",
};

export default function LegalChangesPage() {
  return (
    <main className="opx-cookie-policy-page">
      <section className="opx-cookie-policy-hero">
        <div className="opx-cookie-policy-shell">
          <p className="opx-cookie-policy-kicker">Legal / Cambios</p>
          <h1>Cambios en politicas legales.</h1>
          <p>Ultima actualizacion: 4 de julio de 2026</p>
          <p>
            Registro publico para revisar que se agrego, que cambio y que se retiro en documentos legales de Opendex.
          </p>
        </div>
      </section>

      <section className="opx-cookie-policy-content">
        <div className="opx-cookie-policy-shell opx-legal-changes-layout">
          <aside className="opx-cookie-policy-aside" aria-label="Indice de cambios legales">
            <nav>
              <p>En este registro</p>
              <ul>
                <li>
                  <a href="#resumen">Resumen</a>
                </li>
                <li>
                  <a href="#historial">Historial</a>
                </li>
                <li>
                  <a href="#revision">Revision</a>
                </li>
              </ul>
            </nav>
          </aside>

          <article className="opx-cookie-policy-article opx-legal-markdown">
            <section id="resumen" className="opx-legal-mdx-callout">
              <h2>Resumen</h2>
              <p>
                Este apartado no reemplaza ninguna politica. Su funcion es mostrar cambios publicados por fecha para
                que clientes, equipos legales y usuarios puedan seguir la evolucion de los documentos.
              </p>
            </section>

            <section id="historial" className="opx-legal-changes-timeline" aria-label="Historial de cambios legales">
              {legalPolicyChanges.map((change) => (
                <article key={`${change.date}-${change.policy}-${change.type}`} className="opx-legal-change-card">
                  <header>
                    <div>
                      <time dateTime={change.date}>{change.date}</time>
                      <span>{change.type}</span>
                    </div>
                    <Link href={change.href}>{change.policy}</Link>
                  </header>

                  <p>{change.summary}</p>

                  <div className="opx-legal-change-detail-grid">
                    <div>
                      <h3>Agregado</h3>
                      <ul>
                        {change.added.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3>Quitado</h3>
                      <ul>
                        {change.removed.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <section id="revision" className="opx-legal-mdx-card">
              <h2>Revision de politicas</h2>
              <p>
                Para dudas sobre un cambio legal, usa el correo global ows-policy@opendex.dev o el correo regional que
                corresponda a tu pais.
              </p>
              <span>Los documentos vigentes siguen publicados en cada pagina legal.</span>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
