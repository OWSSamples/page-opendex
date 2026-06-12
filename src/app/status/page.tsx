import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";

export const metadata = { title: "Status" };

const rows = [
  ["Identity Platform", "Prelanzamiento", "Sin disponibilidad publica"],
  ["Factur Workspaces", "Mejoras finales", "Sin disponibilidad publica"],
  ["Kiosko Workspaces", "Beta aislada", "Entorno controlado"],
];

export default function Status() {
  return (
    <>
      <LocalizedPageHeader pageKey="status" />

      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-5 py-20 md:px-8">
          <div className="border border-[#e7e4dc]">
            {rows.map(([name, state, note], index) => (
              <div key={name} className={`grid gap-4 p-5 sm:grid-cols-[1fr_180px_1fr] ${index > 0 ? "border-t border-[#e7e4dc]" : ""}`}>
                <div className="flex items-center gap-3 text-[15px] font-semibold text-[#1d1d1b]">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden />
                  {name}
                </div>
                <div className="text-[14px] text-[#f6821f]">{state}</div>
                <div className="text-[14px] text-[#4a4a47]">{note}</div>
              </div>
            ))}
          </div>
          <Link href="/contacto" className="btn btn-primary mt-8">
            Solicitar actualizacion <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
