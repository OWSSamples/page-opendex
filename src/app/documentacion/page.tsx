import Link from "next/link";

export const metadata = { title: "Documentación no disponible" };

export default function Documentacion() {
  return (
    <section className="relative overflow-hidden border-b border-ink-200 bg-[#f4f0e8]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/images/documentacion-global-background.jpg')] bg-cover bg-center opacity-80"
      />
      <div aria-hidden className="absolute inset-0 bg-white/38" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="rounded-[24px] border border-white/70 bg-white/72 p-8 shadow-[0_28px_90px_-62px_rgba(15,23,42,0.46)] backdrop-blur-xl sm:p-10">
          <span className="eyebrow">Documentación global</span>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
            Esta sección se publicará como una página global.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-ink-600">
            La documentación por producto queda pausada mientras se prepara una superficie central para todos los servicios de Opendex.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/status" className="btn btn-primary">
              Ver estado público
            </Link>
            <Link href="/contacto" className="btn btn-ghost">
              Solicitar contexto técnico
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
