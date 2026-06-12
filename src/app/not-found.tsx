import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ea] text-[#151515]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(246,130,31,0.26),transparent_28%),radial-gradient(circle_at_18%_18%,rgba(77,116,255,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(245,239,225,0.76))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.42] [background-image:linear-gradient(rgba(22,22,22,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(22,22,22,0.07)_1px,transparent_1px)] [background-size:44px_44px]"
      />
      <div aria-hidden className="absolute left-8 top-8 h-28 w-28 rounded-full border border-[#151515]/10" />
      <div aria-hidden className="absolute bottom-10 right-10 h-36 w-36 rounded-full border border-[#f6821f]/30" />

      <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-[1220px] items-center gap-10 px-5 py-14 md:px-8 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#151515]/10 bg-white/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#5d5142] shadow-sm backdrop-blur">
            Error 404
          </span>
          <h1 className="mt-6 max-w-[680px] text-balance font-heading text-[48px] font-semibold leading-[0.93] tracking-[-0.02em] text-[#111114] sm:text-[78px]">
            La página se salió del mapa.
          </h1>
          <p className="mt-6 max-w-[570px] text-[16px] leading-7 text-[#514b44]">
            No encontramos esta ruta en el estado público de Opendex. Puede que
            el contenido haya cambiado de lugar o que todavía esté en preparación.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#111114] px-6 text-[14px] font-semibold text-white shadow-[0_16px_38px_rgba(17,17,20,0.22)] transition hover:-translate-y-0.5 hover:bg-[#25252a]"
            >
              <Compass className="h-4 w-4" aria-hidden />
              Volver al inicio
            </Link>
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#151515]/14 bg-white/70 px-6 text-[14px] font-semibold text-[#151515] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-[#151515]/24 hover:bg-white"
            >
              Contacto <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-10 grid max-w-[560px] gap-px overflow-hidden rounded-2xl border border-[#151515]/10 bg-[#151515]/10 shadow-sm sm:grid-cols-3">
            {[
              ["01", "Inicio", "Explora la web principal"],
              ["02", "Productos", "Revisa el portafolio"],
              ["03", "Contacto", "Pide contexto directo"],
            ].map(([step, title, desc]) => (
              <div key={step} className="bg-white/72 p-4 backdrop-blur">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#f6821f]">{step}</div>
                <div className="mt-2 text-[13.5px] font-semibold text-[#171717]">{title}</div>
                <div className="mt-1 text-[12.5px] leading-5 text-[#615b54]">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[380px] lg:min-h-[620px]">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff9f43]/24 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute inset-x-10 bottom-16 h-24 rounded-[100%] bg-[#111114]/16 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute left-[8%] top-[18%] h-20 w-20 rounded-full bg-[#4d74ff]/12 blur-xl"
          />
          <div
            aria-hidden
            className="absolute right-[6%] top-[26%] h-16 w-16 rounded-full bg-[#f6821f]/18 blur-xl"
          />
          <div className="relative mx-auto flex min-h-[380px] max-w-[760px] items-center justify-center lg:min-h-[620px]">
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[68%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/36 blur-2xl"
            />
            <Image
              src="/assets/utility/error-not-found.png"
              alt="Ilustración de página no encontrada"
              width={980}
              height={760}
              priority
              className="relative z-10 h-auto w-full max-w-[720px] object-contain drop-shadow-[0_36px_34px_rgba(69,47,29,0.20)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
