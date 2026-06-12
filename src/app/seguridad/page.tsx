import Link from "next/link";
import { ArrowRight, FileCheck, KeyRound, ShieldCheck } from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";

export const metadata = { title: "Seguridad" };

const controls = [
  ["Acceso", "Separacion entre usuario, workspace, rol y sesion antes de autorizar acciones."],
  ["Auditoria", "Registro de cambios importantes para revisar origen, responsable y contexto."],
  ["Privacidad", "Documentos y politicas preparados para evolucionar conforme avance la disponibilidad."],
];

export default function Seguridad() {
  return (
    <>
      <LocalizedPageHeader pageKey="security">
        <Link href="/documentacion" className="btn btn-primary">
          <LocalizedLabel labelKey="viewDocs" /> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </LocalizedPageHeader>

      <section className="bg-[#faf8f4]">
        <div className="mx-auto grid max-w-[1200px] gap-px border-x border-[#e7e4dc] bg-[#e7e4dc] px-0 md:grid-cols-3">
          {controls.map(([title, desc], index) => {
            const Icon = index === 0 ? KeyRound : index === 1 ? FileCheck : ShieldCheck;
            return (
              <article key={title} className="bg-white p-7">
                <Icon className="h-5 w-5 text-[#f6821f]" aria-hidden />
                <h2 className="mt-5 text-[20px] font-semibold text-[#1d1d1b]">{title}</h2>
                <p className="mt-2 text-[14px] leading-6 text-[#4a4a47]">{desc}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
