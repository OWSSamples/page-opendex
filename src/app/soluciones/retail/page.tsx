import Link from "next/link";
import { ArrowRight, Package, ReceiptText, Store } from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";

export const metadata = { title: "Soluciones Retail" };

const points = [
  ["Sucursal", "Organizar caja, turnos, permisos y actividad por punto de venta."],
  ["Inventario", "Leer movimientos, diferencias y ajustes como eventos operativos."],
  ["Documento", "Conectar venta, ticket y necesidades fiscales sin doble captura."],
];

export default function Retail() {
  return (
    <>
      <LocalizedPageHeader pageKey="solutionRetail">
        <Link href="/productos/kiosko" className="btn btn-primary">
          <LocalizedLabel labelKey="viewKiosko" /> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </LocalizedPageHeader>
      <section className="bg-[#faf8f4]">
        <div className="mx-auto grid max-w-[1100px] gap-px border-x border-[#e7e4dc] bg-[#e7e4dc] md:grid-cols-3">
          {points.map(([title, desc], index) => {
            const Icon = index === 0 ? Store : index === 1 ? Package : ReceiptText;
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
