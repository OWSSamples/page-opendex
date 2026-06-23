import Link from "next/link";
import {
  ArrowRight,
  Receipt,
  FileCheck,
  Building2,
  Layers,
  Globe2,
  ShieldCheck,
  Clock,
} from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";
import { Reveal } from "@/components/Motion";
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
  { Icon: FileCheck, title: "Estados fiscales claros", desc: "Separacion entre borrador, validado, emitido, observado y cancelado para reducir ambiguedad operativa." },
  { Icon: Layers, title: "Complementos por caso", desc: "El producto se organiza para activar complementos segun giro, documento y necesidad administrativa." },
  { Icon: Building2, title: "Workspaces por empresa", desc: "Cada razon social puede operar reglas, permisos, folios y usuarios con separacion de contexto." },
  { Icon: ShieldCheck, title: "Controles previos", desc: "Validaciones antes de emitir, bitacora de cambios y evidencia para revisar errores sin perder trazabilidad." },
  { Icon: Globe2, title: "Operacion Mexico", desc: "El enfoque fiscal se centra en Mexico y en los documentos que requieren seguimiento administrativo." },
  { Icon: Clock, title: "Procesos programados", desc: "Preparado para conciliaciones, recordatorios, reintentos y revisiones que no dependen de una sola pantalla." },
];

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
        <span className="badge badge-soon self-center">
          <LocalizedLabel labelKey="unavailableBadge" />
        </span>
        <Link href="/contacto" className="btn btn-primary">
          <LocalizedLabel labelKey="requestInfo" /> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href="/documentacion" className="btn btn-ghost">
          <LocalizedLabel labelKey="viewSpec" />
        </Link>
      </LocalizedPageHeader>

      {/* FLOW 3D */}
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Pipeline documental</span>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
                Captura, validacion, emision y seguimiento.
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-[14.5px] leading-relaxed text-ink-600">
                La experiencia se plantea como pipeline documental: captura,
                validacion, emision, seguimiento, correccion y evidencia para
                equipos administrativos.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="mt-10">
            <InvoiceFlow3D height={340} />
          </Reveal>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-[11.5px] font-semibold uppercase tracking-wider text-ink-500">
            <div>1 · Documento preparado</div>
            <div>2 · Validacion interna</div>
            <div>3 · Estado actualizado</div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT */}
      <section className="border-b border-ink-200 bg-ink-50/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <div>
              <span className="eyebrow">Operacion fiscal</span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-950 sm:text-[42px]">
                Diseñado por contadores. Construido para developers.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-600">
                La prioridad es que cada documento tenga contexto: quien lo
                preparo, que validaciones paso, que observaciones existen y que
                accion sigue.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Estados claros por documento",
                  "Validaciones antes de publicar cambios",
                  "Bitacora para seguimiento administrativo",
                  "Separacion por empresa y usuario",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-ink-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-iris-600" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock CFDI preview */}
            <div className="card overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-ink-200 bg-ink-50/60 px-5 py-3 text-[12px]">
                <span className="font-mono text-ink-500">documento-fiscal-042.xml</span>
                <span className="badge badge-live !text-[10.5px]">validacion</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[10.5px] font-semibold uppercase tracking-wider text-ink-500">Emisor</div>
                    <div className="mt-1 text-[14px] font-semibold text-ink-950">Acme México SA de CV</div>
                    <div className="text-[12px] text-ink-500">ACM240501ABC · Régimen 601</div>
                  </div>
                  <Receipt className="h-7 w-7 text-iris-600" aria-hidden />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-ink-100 pt-5 text-[12.5px]">
                  <div>
                    <div className="text-ink-500">Referencia</div>
                    <div className="mt-0.5 font-mono text-[11px] text-ink-700">DOC-042</div>
                  </div>
                  <div>
                    <div className="text-ink-500">Estado</div>
                    <div className="mt-0.5 font-mono text-[11px] text-ink-700">revision</div>
                  </div>
                  <div>
                    <div className="text-ink-500">Total</div>
                    <div className="mt-0.5 text-[14px] font-semibold text-ink-950">$ 24,360.00 MXN</div>
                  </div>
                  <div>
                    <div className="text-ink-500">Uso CFDI</div>
                    <div className="mt-0.5 text-[12.5px] text-ink-700">G03 · Gastos en general</div>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between rounded-lg bg-emerald-50 px-3 py-2 text-[12px] text-emerald-700">
                  <span>Revision documental preparada</span>
                  <span className="font-mono">beta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow">Funciones</span>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-950 sm:text-[44px]">
              Todo lo que tu equipo fiscal necesita.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ Icon, title, desc }) => (
              <div key={title} className="card p-6">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-iris-100 text-iris-700">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-[15.5px] font-semibold text-ink-950">{title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-50/40">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="card flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-[22px] font-semibold tracking-tight text-ink-950">
                ¿Quieres acceso temprano?
              </h2>
              <p className="mt-1.5 text-[14px] text-ink-600">
                Aún no está disponible públicamente. La base está lista, pero seguimos cerrando mejoras.
              </p>
            </div>
            <Link href="/contacto" className="btn btn-primary">
              Solicitar acceso <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
