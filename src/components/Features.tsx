import { Activity, Database, Fingerprint, Globe2, KeyRound, ShieldCheck } from "@/components/icons";

const controls = [
  {
    Icon: Fingerprint,
    title: "Passwordless first",
    copy: "Passkeys WebAuthn, magic links y login social sin degradar la seguridad base.",
  },
  {
    Icon: ShieldCheck,
    title: "Adaptive policy",
    copy: "Reglas por dispositivo, region, tenant y riesgo antes de emitir la sesion.",
  },
  {
    Icon: KeyRound,
    title: "Session hardening",
    copy: "Rotacion, revocacion instantanea, cookies httpOnly y scopes por app.",
  },
  {
    Icon: Activity,
    title: "Event stream",
    copy: "Logs exportables, webhooks y trazabilidad para auditoria y soporte.",
  },
  {
    Icon: Globe2,
    title: "Regional control",
    copy: "Residencia de datos por proyecto con edge en Mexico, US y EU.",
  },
  {
    Icon: Database,
    title: "Tenant model",
    copy: "Workspaces, roles y separacion operativa para equipos internos y clientes.",
  },
];

const layers = [
  ["Client", "Passkey challenge", "Device trust"],
  ["Policy", "Risk decision", "MFA routing"],
  ["Session", "Token rotation", "Scope enforcement"],
  ["Audit", "Webhook event", "Data export"],
];

export default function Features() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-[12px] font-semibold uppercase text-ink-500">
              Seguridad
            </div>
            <h2 className="mt-4 max-w-xl font-heading text-[34px] font-semibold leading-[1.08] text-ink-950 sm:text-[46px]">
              Controles de identidad pensados para operar, no para decorar.
            </h2>
            <p className="mt-5 max-w-xl text-[15.5px] leading-7 text-ink-600">
              La interfaz comunica lo mismo que la plataforma: control,
              trazabilidad y decisiones claras. Cada bloque muestra una pieza
              del sistema, sin repetir la misma card seis veces.
            </p>
          </div>

          <div className="border border-ink-200 bg-[#f7f8fb] p-5">
            <div className="border border-ink-200 bg-white">
              {layers.map(([layer, primary, secondary], index) => (
                <div
                  key={layer}
                  className={`grid grid-cols-[92px_1fr_1fr] items-center gap-4 px-4 py-4 text-[13px] ${
                    index > 0 ? "border-t border-ink-200" : ""
                  }`}
                >
                  <span className="font-mono text-[11px] uppercase text-ink-400">
                    {layer}
                  </span>
                  <span className="font-medium text-ink-950">{primary}</span>
                  <span className="text-ink-500">{secondary}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid border border-ink-200 bg-white md:grid-cols-2 lg:grid-cols-3">
          {controls.map(({ Icon, title, copy }, index) => (
            <article
              key={title}
              className={`p-6 ${index > 0 ? "border-t border-ink-200 md:border-t-0" : ""} ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index > 2 ? "lg:border-t" : ""} ${index % 3 !== 0 ? "lg:border-l" : "lg:border-l-0"} border-ink-200`}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center border border-ink-200 bg-ink-50 text-ink-800">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <h3 className="font-heading text-[17px] font-semibold text-ink-950">
                  {title}
                </h3>
              </div>
              <p className="mt-4 text-[13.5px] leading-6 text-ink-600">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
