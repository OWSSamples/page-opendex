import Link from "next/link";
import { ArrowRight, Fingerprint, Receipt, Store, ShieldCheck } from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";

export const metadata = { title: "Precios" };

const models = [
  {
    title: "Identity Platform",
    state: "Criterio por usuarios activos",
    desc: "Se evaluara por volumen de usuarios, conexiones SSO, retencion de auditoria y soporte requerido.",
    Icon: Fingerprint,
  },
  {
    title: "Factur Workspaces",
    state: "Criterio por operacion fiscal",
    desc: "El modelo se definira alrededor de documentos, validaciones, volumen operativo y soporte administrativo.",
    Icon: Receipt,
  },
  {
    title: "Kiosko Workspaces",
    state: "Criterio por sucursal",
    desc: "La evaluacion considera terminales, sucursales, inventario, usuarios operativos y reportes.",
    Icon: Store,
  },
];

const principles = [
  "No publicar planes finales antes de disponibilidad real.",
  "Separar producto, soporte, volumen y compromisos enterprise.",
  "Evitar descuentos o beneficios que no existan como programa publico.",
  "Actualizar precios solo cuando cada producto tenga alcance confirmado.",
];

export default function Precios() {
  return (
    <>
      <LocalizedPageHeader pageKey="pricing">
        <Link href="/contacto" className="btn btn-primary">
          <LocalizedLabel labelKey="requestInfo" /> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </LocalizedPageHeader>

      <section className="border-b border-[#e7e4dc] bg-[#faf8f4]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8">
          <div className="grid gap-px border border-[#e7e4dc] bg-[#e7e4dc] lg:grid-cols-3">
            {models.map(({ title, state, desc, Icon }) => (
              <article key={title} className="bg-white p-7">
                <span className="grid h-11 w-11 place-items-center border border-[#e7e4dc] bg-[#faf8f4]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="mt-6 text-[20px] font-semibold text-[#1d1d1b]">{title}</h2>
                <div className="mt-2 text-[13px] font-semibold text-[#f6821f]">{state}</div>
                <p className="mt-3 text-[14px] leading-6 text-[#4a4a47]">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-5 py-20 md:px-8">
          <div className="flex items-start gap-4 border border-[#e7e4dc] bg-[#faf8f4] p-7">
            <span className="grid h-10 w-10 shrink-0 place-items-center border border-[#e7e4dc] bg-white">
              <ShieldCheck className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h2 className="text-[24px] font-semibold text-[#1d1d1b]">Principios comerciales</h2>
              <p className="mt-3 text-[15px] leading-7 text-[#4a4a47]">
                La funcion actual de esta pagina es dar contexto, no simular una
                tienda de planes. Cada producto tendra precios cuando alcance un
                nivel de disponibilidad y soporte suficiente.
              </p>
              <ul className="mt-6 grid gap-3">
                {principles.map((item) => (
                  <li key={item} className="border-t border-[#e7e4dc] pt-3 text-[14px] text-[#3d3d3a]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
