import Link from "next/link";
import { Badge } from "@cloudflare/kumo/components/badge";
import {
  ArrowRight,
} from "@/components/icons";
import IdentityIcon, { type IdentityIconName } from "@/components/IdentityIcon";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";
import InvoiceFlow3D from "@/components/three/InvoiceFlow3DClient";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createMetadata, productJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Factur Workspaces",
  description:
    "Workspace fiscal para ordenar documentos, estados, validaciones y seguimiento administrativo de CFDI 4.0.",
  path: "/productos/invoice",
  keywords: ["CFDI 4.0", "facturacion Mexico", "workspace fiscal", "documentos fiscales"],
});

const features = [
  { iconName: "document", title: "Estados fiscales claros", desc: "Separacion entre borrador, validado, emitido, observado y cancelado para reducir ambiguedad operativa." },
  { iconName: "config", title: "Complementos por caso", desc: "El producto se organiza para activar complementos segun giro, documento y necesidad administrativa." },
  { iconName: "organization", title: "Workspaces por empresa", desc: "Cada razon social puede operar reglas, permisos, folios y usuarios con separacion de contexto." },
  { iconName: "shield", title: "Controles previos", desc: "Validaciones antes de emitir, bitacora de cambios y evidencia para revisar errores sin perder trazabilidad." },
  { iconName: "workspace", title: "Operacion Mexico", desc: "El enfoque fiscal se centra en Mexico y en los documentos que requieren seguimiento administrativo." },
  { iconName: "session", title: "Procesos programados", desc: "Preparado para conciliaciones, recordatorios, reintentos y revisiones que no dependen de una sola pantalla." },
] satisfies Array<{ iconName: IdentityIconName; title: string; desc: string }>;

export default function Invoice() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Productos", path: "/productos" },
            { name: "Factur Workspaces", path: "/productos/invoice" },
          ]),
          productJsonLd({
            name: "Factur Workspaces",
            description:
              "Workspace fiscal para ordenar documentos, estados, validaciones y seguimiento administrativo de CFDI 4.0.",
            path: "/productos/invoice",
            category: "BusinessApplication",
          }),
        ]}
      />
      <LocalizedPageHeader pageKey="productInvoice">
        <Badge variant="neutral">
          <LocalizedLabel labelKey="unavailableBadge" />
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
            <p className="opx-json-eyebrow">Pipeline documental</p>
            <h2 className="opx-json-section-title">Captura, validación, emisión y seguimiento.</h2>
            <p className="opx-json-text">
              La experiencia se plantea como pipeline documental: captura, validación, emisión, seguimiento, corrección y evidencia para equipos administrativos.
            </p>
            <div className="opx-json-inline-list">
              <span className="opx-json-badge">Documento preparado</span>
              <span className="opx-json-badge">Validación interna</span>
              <span className="opx-json-badge">Estado actualizado</span>
            </div>
          </div>
          <div className="opx-json-card">
            <InvoiceFlow3D height={340} />
          </div>
        </div>
      </section>

      <section className="opx-json-section">
        <div className="opx-json-shell opx-json-split">
          <div className="opx-json-copy">
            <p className="opx-json-eyebrow">Operacion fiscal</p>
            <h2 className="opx-json-section-title">Diseñado por contadores. Construido para developers.</h2>
            <p className="opx-json-text">
              La prioridad es que cada documento tenga contexto: quien lo preparo, que validaciones paso, que observaciones existen y que accion sigue.
            </p>
            <ul className="opx-json-check-list">
                {[
                  "Estados claros por documento",
                  "Validaciones antes de publicar cambios",
                  "Bitacora para seguimiento administrativo",
                  "Separacion por empresa y usuario",
                ].map((i) => (
                  <li key={i} className="opx-json-check">
                    {i}
                  </li>
                ))}
              </ul>
          </div>

          <div className="opx-json-card opx-json-copy">
            <div className="opx-json-card-header">
              <p className="opx-json-label">documento-fiscal-042.xml</p>
              <Badge variant="warning">validacion</Badge>
            </div>
            <IdentityIcon name="document" size={32} className="opx-json-identity-icon" />
            <h3 className="opx-json-card-title">Acme México SA de CV</h3>
            <p className="opx-json-text">Referencia DOC-042 · Total $24,360.00 MXN · Uso CFDI G03</p>
          </div>
        </div>
      </section>

      <section className="opx-json-section">
        <div className="opx-json-shell">
          <div className="opx-json-copy">
            <p className="opx-json-eyebrow">Funciones</p>
            <h2 className="opx-json-section-title">Todo lo que tu equipo fiscal necesita.</h2>
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
              <h2 className="opx-json-section-title">¿Quieres acceso temprano?</h2>
              <p className="opx-json-text">
                Aún no está disponible públicamente. La base está lista, pero seguimos cerrando mejoras.
              </p>
            </div>
            <Link href="/contacto" className="opx-json-button opx-json-button-primary">
              Solicitar acceso <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
