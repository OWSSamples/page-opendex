import { ArrowRight, Check } from "@/components/icons";

const plans = [
  {
    name: "Starter",
    price: "$0",
    mau: "10K MAU",
    sso: "Social + OIDC",
    support: "Community",
    audit: "7 dias",
    cta: "Crear cuenta",
  },
  {
    name: "Growth",
    price: "$29",
    mau: "50K MAU",
    sso: "SAML + OIDC",
    support: "Email",
    audit: "30 dias",
    cta: "Empezar Growth",
  },
  {
    name: "Business",
    price: "$199",
    mau: "250K MAU",
    sso: "Enterprise SSO",
    support: "SLA 4h",
    audit: "1 ano",
    cta: "Elegir Business",
  },
  {
    name: "Enterprise",
    price: "Custom",
    mau: "Volumen",
    sso: "Tenant dedicado",
    support: "TAM + on-call",
    audit: "Custom",
    cta: "Hablar con ventas",
  },
];

const included = [
  "Passkeys y magic links",
  "MFA adaptativo",
  "SDKs TypeScript, Python y Go",
  "Webhooks y audit trail",
];

export default function Pricing() {
  return (
    <section id="precios" className="relative border-t border-white/[0.06] bg-[#0a0b0d]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="text-[12px] font-semibold uppercase text-[#ff9900]">
              Precios
            </div>
            <h2 className="mt-4 max-w-xl font-heading text-[34px] font-semibold leading-[1.08] text-white sm:text-[46px]">
              Escala por usuarios activos, no por complejidad operativa.
            </h2>
          </div>
          <p className="max-w-2xl text-[15px] leading-7 text-white/58 lg:justify-self-end">
            Todos los planes comparten la misma infraestructura de autenticacion.
            Cambian los limites, soporte, retencion de auditoria y controles
            enterprise.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto border border-white/10">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead className="bg-white/[0.04]">
              <tr className="border-b border-white/10 text-[11px] uppercase text-white/40">
                <th className="px-5 py-4 font-semibold">Plan</th>
                <th className="px-5 py-4 font-semibold">Precio</th>
                <th className="px-5 py-4 font-semibold">Usuarios</th>
                <th className="px-5 py-4 font-semibold">SSO</th>
                <th className="px-5 py-4 font-semibold">Soporte</th>
                <th className="px-5 py-4 font-semibold">Audit log</th>
                <th className="px-5 py-4 font-semibold" />
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr key={plan.name} className="border-b border-white/8 last:border-b-0">
                  <td className="px-5 py-5 font-heading text-[18px] font-semibold text-white">
                    {plan.name}
                  </td>
                  <td className="px-5 py-5 font-heading text-[20px] font-semibold text-white">
                    {plan.price}
                    {plan.price.startsWith("$") ? (
                      <span className="font-sans text-[12px] font-normal text-white/38"> / mes</span>
                    ) : null}
                  </td>
                  <td className="px-5 py-5 text-[13px] text-white/64">{plan.mau}</td>
                  <td className="px-5 py-5 text-[13px] text-white/64">{plan.sso}</td>
                  <td className="px-5 py-5 text-[13px] text-white/64">{plan.support}</td>
                  <td className="px-5 py-5 text-[13px] text-white/64">{plan.audit}</td>
                  <td className="px-5 py-5">
                    <a
                      href="#cta"
                      className="inline-flex h-9 items-center gap-2 border border-white/14 px-3 text-[12px] font-semibold text-white/82 transition hover:border-white/30 hover:bg-white/[0.06]"
                    >
                      {plan.cta}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {included.map((item) => (
            <div key={item} className="flex items-center gap-3 bg-[#0d0f13] px-4 py-4 text-[13px] text-white/66">
              <Check className="h-4 w-4 text-emerald-300" aria-hidden />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
