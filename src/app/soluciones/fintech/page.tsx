import Link from "next/link";
import { ArrowRight, ShieldCheck, FileCheck, KeyRound } from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";

export const metadata = { title: "Soluciones Fintech" };

const points = [
  ["Acceso sensible", "Flujos de identidad para usuarios, administradores y operaciones con permisos elevados."],
  ["Evidencia operativa", "Eventos y bitacoras para revisar decisiones, cambios y excepciones."],
  ["Separacion por workspace", "Estructuras preparadas para clientes, equipos internos y ambientes aislados."],
];

export default function Fintech() {
  return (
    <>
      <LocalizedPageHeader pageKey="solutionFintech">
        <Link href="/productos/auth" className="btn btn-primary">
          <LocalizedLabel labelKey="viewIdentity" /> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </LocalizedPageHeader>
      <section className="bg-[#faf8f4]">
        <div className="mx-auto grid max-w-[1100px] gap-px border-x border-[#e7e4dc] bg-[#e7e4dc] md:grid-cols-3">
          {points.map(([title, desc], index) => {
            const Icon = index === 0 ? KeyRound : index === 1 ? FileCheck : ShieldCheck;
            return (
              <article key={title} className="bg-white p-7">
                <Icon className="h-5 w-5 text-[#5B21B6]" aria-hidden />
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
