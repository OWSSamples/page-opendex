import Link from "next/link";
import { ArrowRight, Book, Code2, Wrench, Activity, GitBranch } from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";

export const metadata = { title: "Documentación" };

const sections = [
  {
    id: "quickstart",
    Icon: Book,
    title: "Arquitectura base",
    desc: "Mapa del modelo de workspaces, sesiones, permisos y auditoria que sostiene cada producto de Opendex.",
    items: ["Workspaces", "Sesiones", "Permisos", "Auditoria"],
  },
  {
    id: "api",
    Icon: Code2,
    title: "Contratos tecnicos",
    desc: "Borradores de APIs, eventos y esquemas pensados para integraciones reales, no solo endpoints sueltos.",
    items: ["Identity events", "Fiscal documents", "Kiosko inventory", "Webhook signing"],
  },
  {
    id: "sdks",
    Icon: Wrench,
    title: "Guias internas",
    desc: "Patrones de implementacion en preparacion para equipos que necesitan entender el criterio del producto.",
    items: ["Next.js middleware", "Pipeline documental", "POS sync", "Risk decisions"],
  },
];

const productDocs = [
  {
    product: "Identity Platform",
    state: "Prelanzamiento",
    notes: "Se documentan sesiones, passkeys, politicas de acceso y eventos de auditoria para revision privada.",
  },
  {
    product: "Factur Workspaces",
    state: "Mejoras finales",
    notes: "La documentacion se centra en estados documentales, validaciones, roles y trazabilidad administrativa.",
  },
  {
    product: "Kiosko Workspaces",
    state: "Beta aislada",
    notes: "Los apuntes tecnicos cubren inventario, caja, turnos y sincronizacion para escenarios controlados.",
  },
];

export default function Documentacion() {
  return (
    <>
      <LocalizedPageHeader pageKey="docs">
        <Link href="#changelog" className="btn btn-ghost">
          <LocalizedLabel labelKey="viewDocumentStatus" />
        </Link>
        <Link href="#status" className="btn btn-ghost">
          <LocalizedLabel labelKey="publicStatus" />
        </Link>
      </LocalizedPageHeader>

      <section className="border-b border-ink-200 bg-ink-50/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-3">
            {sections.map(({ id, Icon, title, desc, items }) => (
              <div key={title} id={id} className="card scroll-mt-28 flex flex-col p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-iris-100 text-iris-700">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="mt-5 text-[17px] font-semibold tracking-tight text-ink-950">{title}</h2>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-600">{desc}</p>
                <ul className="mt-5 flex-1 space-y-2 border-t border-ink-100 pt-5">
                  {items.map((i) => (
                    <li key={i}>
                      <Link
                        href="/contacto"
                        className="group flex items-center justify-between rounded-md px-2 py-1.5 text-[13.5px] text-ink-700 transition hover:bg-iris-50 hover:text-iris-700"
                      >
                        <span>{i}</span>
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHANGELOG */}
      <section id="changelog" className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Estado documental</span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-950">
                Que se puede explicar hoy
              </h2>
            </div>
            <Link href="/contacto" className="hidden btn btn-ghost btn-sm sm:inline-flex">
              <GitBranch className="h-3.5 w-3.5" aria-hidden /> Pedir contexto
            </Link>
          </div>

          <ol className="mt-10 space-y-6">
            {productDocs.map((item) => (
              <li key={item.product} className="card grid gap-3 p-6 sm:grid-cols-[190px_minmax(0,1fr)]">
                <div>
                  <div className="text-[15px] font-semibold text-ink-950">{item.product}</div>
                  <div className="text-[12px] text-ink-500">{item.state}</div>
                </div>
                <p className="text-[14px] leading-relaxed text-ink-700">{item.notes}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* STATUS */}
      <section id="status" className="bg-ink-50/40">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <div className="card flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <span className="eyebrow"><Activity className="h-3.5 w-3.5" aria-hidden /> Estado del sistema</span>
              <h2 className="mt-3 text-[22px] font-semibold tracking-tight text-ink-950">
                Sin status publico de produccion
              </h2>
              <p className="mt-1.5 text-[13.5px] text-ink-600">
                El status tecnico se activara cuando exista una superficie publica que monitorear.
              </p>
            </div>
            <Link href="/status" className="btn btn-ghost">
              Ver status
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
