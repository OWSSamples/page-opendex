import Link from "next/link";
import { Badge } from "@cloudflare/kumo/components/badge";
import {
  ArrowRight,
} from "@/components/icons";
import IdentityIcon, { type IdentityIconName } from "@/components/IdentityIcon";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";
import KioskoFlow3D from "@/components/three/KioskoFlow3DClient";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createMetadata, productJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Opendex Kiosko Workspaces",
  description:
    "Punto de venta para retail con inventario, caja, tickets, cortes y lectura operativa por sucursal.",
  path: "/productos/kiosko",
  keywords: ["punto de venta", "POS retail", "inventario sucursal", "software retail"],
});

const features = [
  { iconName: "operations", title: "Inventario por sucursal", desc: "Control de existencias, movimientos, ajustes y diferencias operativas por punto de venta." },
  { iconName: "payment", title: "Caja y metodos de cobro", desc: "Flujos para efectivo, tarjeta, transferencia y conciliacion al cierre de turno." },
  { iconName: "document", title: "Tickets y cortes", desc: "Registro de ventas, devoluciones, cortes y evidencia para gerencia sin doble captura." },
  { iconName: "shield", title: "Operacion con interrupciones", desc: "Pensado para escenarios donde la red falla y la tienda debe seguir atendiendo." },
  { iconName: "organization", title: "Roles de tienda", desc: "Separacion entre cajero, supervisor, gerente y administrador con bitacora de acciones." },
  { iconName: "audit", title: "Lectura operacional", desc: "Indicadores para entender ventas, inventario, margen y comportamiento por horario." },
] satisfies Array<{ iconName: IdentityIconName; title: string; desc: string }>;

export default function Kiosko() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Productos", path: "/productos" },
            { name: "Opendex Kiosko Workspaces", path: "/productos/kiosko" },
          ]),
          productJsonLd({
            name: "Opendex Kiosko Workspaces",
            description:
              "Punto de venta para retail con inventario, caja, tickets, cortes y lectura operativa por sucursal.",
            path: "/productos/kiosko",
            category: "BusinessApplication",
          }),
        ]}
      />
      <LocalizedPageHeader pageKey="productKiosko">
        <Badge variant="beta">
          <LocalizedLabel labelKey="isolatedBetaBadge" />
        </Badge>
        <Link href="/contacto" className="opx-json-button opx-json-button-primary">
          <LocalizedLabel labelKey="requestInfo" /> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href="/status" className="opx-json-button opx-json-button-secondary">
          <LocalizedLabel labelKey="publicStatus" />
        </Link>
      </LocalizedPageHeader>

      <section className="opx-json-section">
        <div className="opx-json-shell opx-json-split">
          <div className="opx-json-copy">
            <p className="opx-json-eyebrow">Operación en vivo</p>
            <h2 className="opx-json-section-title">Productos, terminal y ticket en tiempo real.</h2>
            <p className="opx-json-text">
              La validacion se centra en el dia a dia de tienda: abrir caja, vender, ajustar inventario, cerrar turno y revisar diferencias.
            </p>
            <div className="opx-json-inline-list">
              <span className="opx-json-badge">Inventario sincronizado</span>
              <span className="opx-json-badge">Terminal POS</span>
              <span className="opx-json-badge">Ticket / CFDI emitido</span>
            </div>
          </div>
          <div className="opx-json-card">
            <KioskoFlow3D height={360} />
          </div>
        </div>
      </section>

      <section className="opx-json-section">
        <div className="opx-json-shell opx-json-split">
          <div className="opx-json-card opx-json-copy">
            <div className="opx-json-card-header">
              <IdentityIcon name="store" size={32} className="opx-json-identity-icon" />
              <Badge variant="success">caja abierta</Badge>
            </div>
            <h2 className="opx-json-panel-title">Sucursal Roma Norte</h2>
            <p className="opx-json-text">Cafe latte, sandwich y cookie listos para corte con total $247.08 MXN.</p>
          </div>

          <div className="opx-json-card opx-json-copy">
            <h3 className="opx-json-card-title">Ticket 00342</h3>
            <p className="opx-json-text">Subtotal $213.00 · IVA 16% $34.08 · Total $247.08</p>
            <div className="opx-json-actions">
              <button className="opx-json-button opx-json-button-primary" type="button">
                Cobrar <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="opx-json-section">
        <div className="opx-json-shell">
          <div className="opx-json-copy">
            <p className="opx-json-eyebrow">Funciones</p>
            <h2 className="opx-json-section-title">Operación completa de tu negocio.</h2>
          </div>
          <div className="opx-json-control-grid">
            {features.map(({ iconName, title, desc }) => (
              <div key={title} className="opx-json-card opx-json-copy">
                <IdentityIcon name={iconName} size={36} className="opx-json-identity-icon" />
                <h3 className="opx-json-card-title">{title}</h3>
                <p className="opx-json-text">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-json-section">
        <div className="opx-json-shell">
          <div className="opx-json-card opx-json-footer-row">
            <div className="opx-json-copy">
              <h2 className="opx-json-section-title">Opendex Kiosko Workspaces sigue en beta aislada.</h2>
              <p className="opx-json-text">
                No hay fecha pública de lanzamiento ni beta abierta. Estamos validando el producto en entorno controlado.
              </p>
            </div>
            <Link href="/contacto" className="opx-json-button opx-json-button-primary">
              Contactar <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
