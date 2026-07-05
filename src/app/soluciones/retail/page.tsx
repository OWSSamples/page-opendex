import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import IdentityIcon, { type IdentityIconName } from "@/components/IdentityIcon";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";

export const metadata = { title: "Soluciones Retail" };

const points: Array<[string, string, IdentityIconName]> = [
  ["Sucursal", "Organizar caja, turnos, permisos y actividad por punto de venta.", "store"],
  ["Inventario", "Leer movimientos, diferencias y ajustes como eventos operativos.", "operations"],
  ["Documento", "Conectar venta, ticket y necesidades fiscales sin doble captura.", "document"],
];

export default function Retail() {
  return (
    <>
      <LocalizedPageHeader pageKey="solutionRetail">
        <Link href="/productos/kiosko" className="opx-json-button opx-json-button-primary">
          <LocalizedLabel labelKey="viewKiosko" /> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </LocalizedPageHeader>
      <section className="opx-json-section">
        <div className="opx-json-shell opx-json-control-grid">
          {points.map(([title, desc, iconName]) => (
            <article key={title} className="opx-json-card opx-json-copy">
              <IdentityIcon name={iconName} size={32} className="opx-json-identity-icon" />
              <h2 className="opx-json-card-title">{title}</h2>
              <p className="opx-json-text">{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
