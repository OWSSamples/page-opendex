import Link from "next/link";
import { ArrowRight, Layers, Users, Workflow } from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";

export const metadata = { title: "Soluciones SaaS B2B" };

const points = [
  ["Multi-tenant", "Separar clientes, usuarios, roles y politicas sin duplicar infraestructura."],
  ["Administracion empresarial", "Preparar SSO, dominios, permisos y auditoria para cuentas B2B."],
  ["Operacion del equipo", "Ayudar a soporte, producto e ingenieria a leer actividad sin pedir datos manuales."],
];

export default function Saas() {
  return (
    <>
      <LocalizedPageHeader pageKey="solutionSaas">
        <Link href="/productos/auth" className="btn btn-primary">
          <LocalizedLabel labelKey="exploreIdentity" /> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </LocalizedPageHeader>
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1100px] gap-px border-x border-[#e7e4dc] bg-[#e7e4dc] md:grid-cols-3">
          {points.map(([title, desc], index) => {
            const Icon = index === 0 ? Layers : index === 1 ? Users : Workflow;
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
