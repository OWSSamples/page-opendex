import Link from "next/link";
import { ArrowRight, LockKeyhole } from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";

export const metadata = { title: "Inicio de sesion" };

export default function Login() {
  return (
    <>
      <LocalizedPageHeader pageKey="login">
        <Link href="/contacto" className="btn btn-primary">
          <LocalizedLabel labelKey="requestAccess" /> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </LocalizedPageHeader>
      <section className="bg-[#faf8f4]">
        <div className="mx-auto max-w-[760px] px-5 py-20 md:px-8">
          <div className="border border-[#e7e4dc] bg-white p-7">
            <LockKeyhole className="h-5 w-5 text-[#f6821f]" aria-hidden />
            <h2 className="mt-5 text-[22px] font-semibold text-[#1d1d1b]">Acceso controlado</h2>
            <p className="mt-2 text-[14px] leading-6 text-[#4a4a47]">
              Cuando exista disponibilidad publica, esta pagina cambiara a un flujo de autenticacion real.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
