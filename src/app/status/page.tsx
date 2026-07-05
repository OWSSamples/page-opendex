import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";

export const metadata = { title: "Status" };

const rows = [
  ["Identity Platform", "Prelanzamiento", "Sin disponibilidad publica"],
  ["Factur Workspaces", "Mejoras finales", "Sin disponibilidad publica"],
  ["Kiosko Workspaces", "Beta aislada", "Entorno controlado"],
];

export default function Status() {
  return (
    <>
      <LocalizedPageHeader pageKey="status" />

      <section className="opx-json-section">
        <div className="opx-json-shell">
          <div className="opx-json-table-wrap">
            {rows.map(([name, state, note], index) => (
              <div key={name} className={index > 0 ? "opx-status-row opx-status-row-divided" : "opx-status-row"}>
                <div className="opx-status-name">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden />
                  {name}
                </div>
                <div className="opx-json-status-accent">{state}</div>
                <div className="opx-json-text">{note}</div>
              </div>
            ))}
          </div>
          <Link href="/contacto" className="opx-json-button opx-json-button-primary">
            Solicitar actualizacion <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
