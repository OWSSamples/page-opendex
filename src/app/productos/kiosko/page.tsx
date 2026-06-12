import Link from "next/link";
import {
  ArrowRight,
  Store,
  Package,
  CreditCard,
  BarChart3,
  WifiOff,
  Users2,
  ReceiptText,
} from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";
import { Reveal } from "@/components/Motion";
import KioskoFlow3D from "@/components/three/KioskoFlow3DClient";

export const metadata = { title: "Opendex Kiosko Workspaces" };

const features = [
  { Icon: Package, title: "Inventario por sucursal", desc: "Control de existencias, movimientos, ajustes y diferencias operativas por punto de venta." },
  { Icon: CreditCard, title: "Caja y metodos de cobro", desc: "Flujos para efectivo, tarjeta, transferencia y conciliacion al cierre de turno." },
  { Icon: ReceiptText, title: "Tickets y cortes", desc: "Registro de ventas, devoluciones, cortes y evidencia para gerencia sin doble captura." },
  { Icon: WifiOff, title: "Operacion con interrupciones", desc: "Pensado para escenarios donde la red falla y la tienda debe seguir atendiendo." },
  { Icon: Users2, title: "Roles de tienda", desc: "Separacion entre cajero, supervisor, gerente y administrador con bitacora de acciones." },
  { Icon: BarChart3, title: "Lectura operacional", desc: "Indicadores para entender ventas, inventario, margen y comportamiento por horario." },
];

export default function Kiosko() {
  return (
    <>
      <LocalizedPageHeader pageKey="productKiosko">
        <span className="badge badge-soon self-center">
          <LocalizedLabel labelKey="isolatedBetaBadge" />
        </span>
        <Link href="/contacto" className="btn btn-primary">
          <LocalizedLabel labelKey="requestInfo" /> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href="/documentacion" className="btn btn-ghost">
          <LocalizedLabel labelKey="interactiveDemo" />
        </Link>
      </LocalizedPageHeader>

      {/* FLOW 3D */}
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Operación en vivo</span>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
                Productos, terminal y <span className="text-gradient">ticket en tiempo real</span>.
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-[14.5px] leading-relaxed text-ink-600">
                La validacion se centra en el dia a dia de tienda: abrir caja,
                vender, ajustar inventario, cerrar turno y revisar diferencias.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="mt-10">
            <KioskoFlow3D height={360} />
          </Reveal>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-[11.5px] font-semibold uppercase tracking-wider text-ink-500">
            <div>Inventario sincronizado</div>
            <div>Terminal POS</div>
            <div>Ticket / CFDI emitido</div>
          </div>
        </div>
      </section>

      {/* MOCK POS */}
      <section className="border-b border-ink-200 bg-ink-50/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="card overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-ink-200 bg-ink-50/60 px-5 py-3">
                <div className="flex items-center gap-2">
                  <Store className="h-4 w-4 text-iris-700" aria-hidden />
                  <span className="text-[13px] font-semibold text-ink-950">Sucursal Roma Norte</span>
                </div>
                <span className="badge badge-live !text-[10.5px]">caja abierta · 09:42</span>
              </div>
              <div className="grid grid-cols-3 gap-2 p-5">
                {[
                  { n: "Cafe latte", p: "$48" },
                  { n: "Capuccino", p: "$45" },
                  { n: "Espresso", p: "$32" },
                  { n: "Sandwich", p: "$95" },
                  { n: "Croissant", p: "$38" },
                  { n: "Cookie", p: "$22" },
                ].map((p) => (
                  <button
                    key={p.n}
                    className="rounded-xl border border-ink-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-iris-300 hover:shadow-sm"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-iris-100 text-iris-700 text-[11px] font-bold">
                      {p.n[0]}
                    </div>
                    <div className="mt-3 text-[12.5px] font-semibold text-ink-950">{p.n}</div>
                    <div className="text-[11.5px] text-ink-500">{p.p}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="card flex flex-col p-6">
              <h3 className="text-[14px] font-semibold text-ink-950">Ticket #00342</h3>
              <div className="mt-3 flex-1 space-y-2 border-y border-ink-100 py-3 text-[13px]">
                {[
                  ["2× Cafe latte", "$96"],
                  ["1× Sandwich", "$95"],
                  ["1× Cookie", "$22"],
                ].map(([n, p]) => (
                  <div key={n} className="flex items-center justify-between">
                    <span className="text-ink-700">{n}</span>
                    <span className="font-mono text-ink-950">{p}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 space-y-1.5 text-[13px]">
                <div className="flex justify-between text-ink-500"><span>Subtotal</span><span className="font-mono">$213.00</span></div>
                <div className="flex justify-between text-ink-500"><span>IVA 16%</span><span className="font-mono">$34.08</span></div>
                <div className="flex justify-between border-t border-ink-100 pt-2 text-[15px] font-semibold text-ink-950">
                  <span>Total</span><span className="font-mono">$247.08</span>
                </div>
              </div>
              <button className="btn btn-iris mt-5 w-full">
                Cobrar <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
              <div className="mt-3 grid grid-cols-3 gap-2 text-[11.5px]">
                {["Efectivo", "Tarjeta", "Transfer"].map((m) => (
                  <button key={m} className="rounded-md border border-ink-200 py-1.5 font-medium text-ink-700 transition hover:border-iris-300 hover:text-iris-700">
                    {m}
                  </button>
                ))}
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
              Operación completa de tu negocio.
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
                Opendex Kiosko Workspaces sigue en beta aislada.
              </h2>
              <p className="mt-1.5 text-[14px] text-ink-600">
                No hay fecha pública de lanzamiento ni beta abierta. Estamos validando el producto en entorno controlado.
              </p>
            </div>
            <Link href="/contacto" className="btn btn-primary">
              Contactar <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
