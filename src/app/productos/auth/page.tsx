import Link from "next/link";
import {
  ArrowRight,
  Fingerprint,
  Shield,
  KeyRound,
  Globe2,
  Zap,
  Lock,
  Activity,
} from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";
import { Reveal } from "@/components/Motion";
import AuthFlow3D from "@/components/three/AuthFlow3DClient";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createMetadata, productJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Opendex Identity Platform",
  description:
    "Autenticacion empresarial con passkeys, SSO, MFA, sesiones y auditoria para productos SaaS modernos.",
  path: "/productos/auth",
  keywords: ["passkeys", "SSO", "MFA", "autenticacion SaaS", "identity platform"],
});

const features = [
  { Icon: Fingerprint, title: "Autenticacion sin contrasenas", desc: "Flujos pensados para passkeys, magic links y recuperacion segura sin depender de passwords fragiles." },
  { Icon: Shield, title: "Identidad empresarial", desc: "Conexiones SSO y reglas por workspace para separar clientes, equipos internos y administradores." },
  { Icon: KeyRound, title: "Gobierno de sesiones", desc: "Politicas para expiracion, rotacion, revocacion y control de alcance por aplicacion." },
  { Icon: Zap, title: "Integracion guiada", desc: "La prioridad no es prometer una linea de codigo, sino reducir decisiones peligrosas durante la implementacion." },
  { Icon: Globe2, title: "Residencia por proyecto", desc: "Preparado para definir donde viven datos, logs y eventos segun el contexto del cliente." },
  { Icon: Activity, title: "Auditoria operativa", desc: "Eventos de acceso, cambios de configuracion y decisiones de riesgo listos para trazabilidad." },
];

const codeTS = `import { OpendexIdentity } from "@opendex/identity";

const identity = new OpendexIdentity({
  projectId: process.env.OPENDEX_PROJECT_ID!,
  passkeys: true,
  sso: ["google", "github", "saml"],
});

export async function middleware(req: Request) {
  const session = await identity.verify(req);
  if (!session) return identity.redirect("/login");
  return identity.next(session);
}`;

export default function Auth() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Productos", path: "/productos" },
            { name: "Opendex Identity Platform", path: "/productos/auth" },
          ]),
          productJsonLd({
            name: "Opendex Identity Platform",
            description:
              "Autenticacion empresarial con passkeys, SSO, MFA, sesiones y auditoria para productos SaaS modernos.",
            path: "/productos/auth",
            category: "SecurityApplication",
          }),
        ]}
      />
      <LocalizedPageHeader pageKey="productAuth">
        <Link href="/contacto" className="btn btn-primary">
          <LocalizedLabel labelKey="requestInfo" /> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href="/documentacion" className="btn btn-ghost">
          <LocalizedLabel labelKey="viewDocs" />
        </Link>
        <span className="badge badge-soon self-center">
          <LocalizedLabel labelKey="prelaunchBadge" />
        </span>
      </LocalizedPageHeader>

      {/* FLOW 3D */}
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Cómo funciona</span>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
                De challenge a sesión en menos de <span className="text-gradient">200 ms</span>.
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-[14.5px] leading-relaxed text-ink-600">
                El flujo se piensa como una decision de confianza: dispositivo,
                origen, usuario, tenant y politica antes de emitir una sesion.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="mt-10">
            <AuthFlow3D height={340} />
          </Reveal>
          <div className="mt-6 grid grid-cols-2 gap-3 text-center text-[11.5px] font-semibold uppercase tracking-wider text-ink-500 sm:grid-cols-4">
            <div>1 · Cliente</div>
            <div>2 · Passkey challenge</div>
            <div>3 · JWT firmado</div>
            <div>4 · Sesión activa</div>
          </div>
        </div>
      </section>

      {/* DEMO + CODE */}
      <section className="border-b border-ink-200 bg-ink-50/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-stretch">
            {/* Mock login card */}
            <div className="card flex flex-col p-7">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-iris-600 text-white">
                    <Fingerprint className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-[13.5px] font-semibold text-ink-950">Opendex Identity</span>
                </div>
                <span className="badge badge-soon">prelaunch</span>
              </div>
              <h3 className="mt-7 text-[20px] font-semibold tracking-tight text-ink-950">
                Inicia sesión
              </h3>
              <p className="mt-1 text-[13.5px] text-ink-500">
                Usa tu passkey o un proveedor empresarial.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-2 rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-[13px] font-medium text-ink-700 transition hover:border-iris-300 hover:bg-iris-50">
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-[13px] font-medium text-ink-700 transition hover:border-iris-300 hover:bg-iris-50">
                  GitHub
                </button>
              </div>

              <div className="my-4 flex items-center gap-3 text-[11px] uppercase tracking-wider text-ink-400">
                <div className="h-px flex-1 bg-ink-200" /> o con email <div className="h-px flex-1 bg-ink-200" />
              </div>

              <input
                type="email"
                defaultValue="ada@opendex.com"
                className="w-full rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-[13.5px] text-ink-950 outline-none transition focus:border-iris-400 focus:ring-2 focus:ring-iris-200"
              />
              <button className="btn btn-iris mt-3 w-full">
                <Fingerprint className="h-4 w-4" aria-hidden /> Continuar con passkey
              </button>

              <div className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4 text-[11px] text-ink-500">
                <span className="flex items-center gap-1.5">
                  <Lock className="h-3 w-3" aria-hidden /> Protegido por Opendex
                </span>
                <span>Entorno de prelanzamiento</span>
              </div>
            </div>

            {/* Code block */}
            <div>
              <div className="flex items-center justify-between rounded-t-2xl border border-b-0 border-ink-200 bg-ink-950 px-4 py-3 text-[11.5px] text-ink-400">
                <div className="flex items-center gap-3">
                  <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </span>
                  <span className="font-mono">app/middleware.ts</span>
                </div>
                <span className="text-iris-300">TypeScript</span>
              </div>
              <pre className="codeblock !rounded-t-none !border-t-0">
                <code dangerouslySetInnerHTML={{ __html: highlight(codeTS) }} />
              </pre>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { v: "Users", l: "modelo de identidad" },
                  { v: "Policy", l: "control de acceso" },
                  { v: "Audit", l: "trazabilidad" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-ink-200 bg-white p-4">
                    <div className="text-[20px] font-semibold tracking-tight text-ink-950">{s.v}</div>
                    <div className="mt-0.5 text-[11.5px] text-ink-500">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow">Funciones</span>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-950 sm:text-[44px]">
              Todo lo que necesitas para autenticación empresarial.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ Icon, title, desc }) => (
              <div key={title} className="card p-6">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-iris-100 text-iris-700">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-[15.5px] font-semibold text-ink-950">{title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="bg-ink-50/40">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="card flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-[22px] font-semibold tracking-tight text-ink-950">
                ¿Quieres conocer Opendex Identity Platform?
              </h2>
              <p className="mt-1.5 text-[14px] text-ink-600">
                Está en prelanzamiento y no tiene fecha pública. Podemos contarte el estado actual.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/contacto" className="btn btn-primary">
                Contactar <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/precios" className="btn btn-ghost">
                Ver precios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function highlight(src: string) {
  return src
    .replace(/(\".*?\")/g, '<span class="tok-str">$1</span>')
    .replace(/\b(import|from|const|export|async|function|return|if|new|true|false)\b/g, '<span class="tok-key">$1</span>')
    .replace(/\b(OpendexIdentity|process|env|identity|req|session)\b/g, '<span class="tok-fn">$1</span>');
}
