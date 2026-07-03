import IdentityIcon, { type IdentityIconName } from "@/components/IdentityIcon";
import { ArrowRight } from "@/components/icons";

const products = [
  {
    name: "Opendex Identity Platform",
    status: "Prelanzamiento",
    description: "Identidad, passkeys, SSO, MFA y sesiones seguras en preparacion responsable.",
    capabilities: ["Passkeys", "SAML / OIDC", "Audit logs", "Webhooks"],
    iconName: "identity",
  },
  {
    name: "Factur Workspaces",
    status: "No disponible",
    description: "Workspace fiscal preparado para CFDI 4.0, pendiente de mejoras finales.",
    capabilities: ["CFDI 4.0", "PAC", "Addendas", "Control fiscal"],
    iconName: "document",
  },
  {
    name: "Opendex Kiosko Workspaces",
    status: "Beta aislada",
    description: "Workspaces de operacion retail en entorno aislado, sin fecha publica.",
    capabilities: ["POS", "Inventario", "Reportes", "Multi-sucursal"],
    iconName: "store",
  },
] satisfies Array<{
  name: string;
  status: string;
  description: string;
  capabilities: string[];
  iconName: IdentityIconName;
}>;

const lifecycle = [
  ["01", "Prelanzamiento", "Identity Platform se prepara sin fecha publica de salida."],
  ["02", "Beta aislada", "Kiosko Workspaces se valida en un entorno controlado."],
  ["03", "Mejoras finales", "Factur Workspaces no esta disponible mientras se pulen detalles."],
];

export default function Services() {
  return (
    <section id="productos" className="relative bg-[#f7f8fb]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 border-b border-ink-200 pb-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="text-[12px] font-semibold uppercase text-ink-500">
              Productos
            </div>
            <h2 className="mt-4 max-w-2xl font-heading text-[34px] font-semibold leading-[1.08] text-ink-950 sm:text-[46px]">
              Tres lineas de producto en preparacion responsable.
            </h2>
          </div>
          <p className="max-w-2xl text-[15.5px] leading-7 text-ink-600 lg:justify-self-end">
            Opendex Web Services es la empresa madre. No estamos ofreciendo un
            programa de startups ni fechas artificiales: comunicamos cada
            producto segun su estado real de madurez.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="border border-ink-200 bg-white">
            {products.map(({ name, status, description, capabilities, iconName }, index) => (
              <article
                key={name}
                className={`grid gap-5 p-6 transition hover:bg-ink-50/70 lg:grid-cols-[52px_1fr_140px] ${
                  index > 0 ? "border-t border-ink-200" : ""
                }`}
              >
                <div className="grid h-11 w-11 place-items-center">
                  <IdentityIcon name={iconName} size={36} className="h-9 w-9 object-contain" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-[20px] font-semibold text-ink-950">
                      {name}
                    </h3>
                    <span className="border border-ink-200 bg-ink-50 px-2 py-1 text-[10px] font-semibold uppercase text-ink-500">
                      {status}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-[14px] leading-6 text-ink-600">
                    {description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {capabilities.map((item) => (
                      <span key={item} className="border border-ink-200 bg-white px-2.5 py-1 text-[12px] text-ink-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="#cta"
                  className="inline-flex h-10 items-center justify-center gap-2 self-start border border-ink-300 px-4 text-[13px] font-semibold text-ink-900 transition hover:border-ink-950 hover:bg-ink-950 hover:text-white lg:self-center"
                >
                  Ver estado
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </article>
            ))}
          </div>

          <aside className="border border-ink-200 bg-ink-950 p-6 text-white">
            <div className="text-[12px] font-semibold uppercase text-white/42">
              Roadmap actual
            </div>
            <div className="mt-6 space-y-0 border border-white/10">
              {lifecycle.map(([step, title, copy], index) => (
                <div key={step} className={`grid grid-cols-[42px_1fr] gap-4 p-4 ${index > 0 ? "border-t border-white/10" : ""}`}>
                  <div className="font-mono text-[12px] text-[#ff9900]">{step}</div>
                  <div>
                    <div className="text-[14px] font-semibold text-white">{title}</div>
                    <p className="mt-1 text-[12.5px] leading-5 text-white/52">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
