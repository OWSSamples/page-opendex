import { ArrowRight } from "@/components/icons";
import { ButtonLink } from "@/components/Button";

const proof = ["Sin tarjeta", "10K MAU incluidos", "Setup asistido", "SLA enterprise"];

export default function CallToAction() {
  return (
    <section id="cta" className="opx-enterprise-cta-section relative">
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="opx-enterprise-cta grid lg:grid-cols-[1fr_360px]">
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="opx-enterprise-kicker text-[12px] font-semibold uppercase">
              Siguiente paso
            </div>
            <h2 className="mt-4 max-w-3xl font-heading text-[34px] font-semibold leading-[1.08] text-ink-950 sm:text-[46px]">
              Empieza con un proyecto de autenticacion y valida el flujo con tu
              primera aplicacion.
            </h2>
            <p className="mt-5 max-w-2xl text-[15.5px] leading-7 text-ink-600">
              Crea un workspace, conecta una app y prueba passkeys, SSO y MFA
              con datos de desarrollo antes de moverlo a produccion.
            </p>
          </div>

          <div className="border-t border-ink-200 bg-ink-950 p-8 text-white lg:border-l lg:border-t-0">
            <div className="grid gap-3">
              <ButtonLink
                href="/contacto"
                variant="accent"
                size="md"
                icon={<ArrowRight className="h-4 w-4" aria-hidden />}
              >
                Crear cuenta
              </ButtonLink>
              <ButtonLink
                href="/contacto"
                variant="inverse"
                size="md"
              >
                Hablar con ventas
              </ButtonLink>
            </div>

            <div className="mt-7 grid gap-0 border border-white/10">
              {proof.map((item) => (
                <div key={item} className="border-b border-white/10 px-4 py-3 text-[12.5px] text-white/62 last:border-b-0">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
