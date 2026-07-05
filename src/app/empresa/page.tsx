import Link from "next/link";
import IdentityIcon, { type IdentityIconName } from "@/components/IdentityIcon";
import { ArrowRight } from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";

export const metadata = { title: "Empresa" };

const values = [
  { iconName: "audit", title: "Transparencia desde temprano", desc: "Preferimos decir en que etapa estamos antes que vender una imagen artificial de madurez." },
  { iconName: "document", title: "Alcance claro", desc: "Cada linea de producto debe resolver un problema concreto: identidad, documentos u operacion." },
  { iconName: "identity", title: "Cercania con el cliente", desc: "Queremos construir con conversaciones reales, entendiendo operaciones mexicanas y equipos que empiezan a escalar." },
  { iconName: "shield", title: "Confianza tecnica", desc: "La calidad no se improvisa al final: seguridad, auditoria y trazabilidad se diseñan desde la base." },
  { iconName: "config", title: "Producto antes que ruido", desc: "Nos importa mas construir una plataforma util que publicar promesas vacias o fechas poco realistas." },
  { iconName: "workspace", title: "Ambicion global desde Mexico", desc: "Nacemos en Mexico, pero diseñamos con estandares de producto que puedan competir fuera del pais." },
] satisfies Array<{ iconName: IdentityIconName; title: string; desc: string }>;

const chapters = [
  {
    eyebrow: "Origen",
    title: "Somos una empresa mexicana en etapa inicial.",
    copy:
      "Opendex Web Services nace en Mexico con una idea sencilla: construir infraestructura de software seria para empresas que necesitan operar mejor. Estamos empezando, si, pero precisamente por eso cuidamos la base: arquitectura, claridad comercial, seguridad y experiencia de producto.",
  },
  {
    eyebrow: "Contexto",
    title: "No queremos aparentar ser una corporacion gigante.",
    copy:
      "La etapa actual es de construccion, validacion y preparacion. Algunas lineas estan en prelanzamiento, otras en beta aislada y otras aun no estan abiertas al publico. Lo comunicamos asi porque preferimos confianza real antes que una vitrina inflada.",
  },
  {
    eyebrow: "Direccion",
    title: "Queremos que Opendex se vuelva una capa operativa para negocios modernos.",
    copy:
      "El objetivo es conectar identidad, facturacion, punto de venta, eventos y auditoria bajo una misma filosofia: productos bien diseñados, documentados, seguros y faciles de integrar cuando esten listos para usarse.",
  },
];

const operatingPrinciples = [
  ["Diseñar para Mexico", "Facturacion, comercios, equipos pequeños, operaciones locales y necesidades reales del mercado mexicano."],
  ["Construir con criterio", "No agregar funciones por moda. Cada modulo debe tener razon tecnica, comercial y operativa."],
  ["Comunicar el estado real", "Si una linea no esta lista, se dice. Si esta cerrada, se explica. Si esta en beta, se delimita."],
  ["Cuidar la experiencia", "La interfaz, las palabras y los flujos deben sentirse claros, confiables y profesionales."],
  ["Pensar en largo plazo", "La plataforma se diseña para crecer por etapas, sin quemar confianza por apresurar lanzamientos."],
];

const roadmap = [
  { label: "Ahora", title: "Fundacion tecnica", desc: "Arquitectura, identidad visual, documentacion base y preparacion de productos." },
  { label: "Siguiente", title: "Validacion privada", desc: "Conversaciones con usuarios, pruebas aisladas y ajuste de alcance real." },
  { label: "Despues", title: "Apertura controlada", desc: "Disponibilidad por producto cuando soporte, seguridad y experiencia esten listos." },
];

export default function Empresa() {
  return (
    <>
      <LocalizedPageHeader pageKey="company">
        <Link href="/contacto" className="btn btn-primary">
          <LocalizedLabel labelKey="contactUs" /> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href="#carreras" className="btn btn-ghost">
          <LocalizedLabel labelKey="careers" />
        </Link>
      </LocalizedPageHeader>

      {/* MISSION */}
      <section className="border-b border-ink-200 bg-ink-50/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div>
              <span className="eyebrow">Nosotros</span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-950 sm:text-[42px]">
                Estamos empezando con una idea clara: construir tecnologia que se sienta confiable desde el primer contacto.
              </h2>
              <div className="mt-8 grid grid-cols-3 border-y border-ink-200 text-center">
                {[
                  ["MX", "origen"],
                  ["3", "lineas"],
                  ["2026", "base publica"],
                ].map(([value, label]) => (
                  <div key={label} className="border-r border-ink-200 px-3 py-4 last:border-r-0">
                    <div className="text-3xl font-semibold tracking-tight text-ink-950">{value}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-ink-700">
              <p>
                Opendex Web Services nace en Mexico como una empresa joven con
                enfoque de producto. No somos una compañia enorme con años de
                historia publica; somos un proyecto que esta formando sus bases
                con seriedad para competir en una industria donde la confianza
                se gana con ejecucion, no con frases bonitas.
              </p>
              <p>
                Estamos construyendo una plataforma alrededor de tres problemas
                que muchas empresas viven todos los dias: acceso seguro,
                organizacion fiscal y operacion de venta. Cada producto tiene su
                propio ritmo porque preferimos avanzar con calidad antes que
                lanzar algo incompleto.
              </p>
              <p>
                Nuestra meta es que Opendex represente una nueva generacion de
                software hecho desde Mexico: visualmente cuidado, tecnicamente
                serio, honesto sobre su etapa y preparado para crecer.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ iconName, title, desc }) => (
              <div key={title} className="card p-6">
                <IdentityIcon name={iconName} size={36} className="h-9 w-9 object-contain" />
                <h3 className="mt-5 text-[15.5px] font-semibold text-ink-950">{title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
            <div>
              <span className="eyebrow">Historia</span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-950 sm:text-[42px]">
                Una empresa joven no tiene que verse improvisada.
              </h2>
            </div>
            <div className="grid gap-5">
              {chapters.map((chapter) => (
                <article key={chapter.title} className="card grid gap-5 p-6 sm:grid-cols-[minmax(0,1fr)]">
                  <div>
                    <div className="text-[12px] font-semibold uppercase tracking-wider text-ink-400">
                      {chapter.eyebrow}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-semibold tracking-tight text-ink-950">{chapter.title}</h3>
                    <p className="mt-3 text-[14.5px] leading-7 text-ink-600">{chapter.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPERATING SYSTEM */}
      <section className="border-b border-ink-200 bg-ink-50/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
            <div>
              <span className="eyebrow">Como trabajamos</span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-950 sm:text-[42px]">
                Nuestra ventaja inicial es decidir bien antes de crecer rapido.
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-ink-600">
                En esta etapa estamos definiendo el estandar interno de Opendex:
                que se construye, por que existe, como se explica y cuando tiene
                sentido abrirlo al publico. Ese criterio es parte del producto.
              </p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <IdentityIcon name="organization" size={40} className="h-10 w-10 object-contain" />
                <div>
                  <div className="text-[15px] font-semibold text-ink-950">Opendex Web Services</div>
                  <div className="text-[12.5px] text-ink-500">Mexico · software de infraestructura</div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {operatingPrinciples.map(([title, desc]) => (
                  <div key={title} className="border-t border-ink-200 pt-3">
                    <div className="text-[13.5px] font-semibold text-ink-950">{title}</div>
                    <p className="mt-1 text-[12.5px] leading-5 text-ink-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow">Etapa actual</span>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-950 sm:text-[42px]">
              No estamos vendiendo una historia terminada. Estamos construyendo una empresa.
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-ink-600">
              La pagina existe para mostrar direccion, no para fingir que todo
              esta completo. Opendex esta en una fase donde cada conversacion,
              cada decision tecnica y cada linea de producto ayudan a formar la
              empresa que queremos ser.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {roadmap.map((item) => (
              <div key={item.label} className="card p-6">
                <span className="inline-flex rounded-full bg-iris-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-iris-700">
                  {item.label}
                </span>
                <h3 className="mt-5 text-[19px] font-semibold tracking-tight text-ink-950">{item.title}</h3>
                <p className="mt-2 text-[13.5px] leading-6 text-ink-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARRERAS */}
      <section id="carreras" className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow">Contacto y colaboracion</span>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-950 sm:text-[42px]">
              Si conectas con la vision, hablemos.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Como empresa que esta empezando, valoramos conversaciones con
              personas que entienden producto, tecnologia, ventas, operaciones o
              negocios en Mexico. No todo es una vacante formal; a veces una
              buena conversacion abre la siguiente etapa.
            </p>
          </div>

          <div className="mt-10 divide-y divide-ink-200 border-y border-ink-200">
            {[
              ["Identity Platform", "Acceso, sesiones y auditoria", "Prelanzamiento"],
              ["Factur Workspaces", "Documentos y estados fiscales", "Mejoras finales"],
              ["Kiosko Workspaces", "Caja, inventario y sucursales", "Beta aislada"],
              ["Empresa", "Roadmap y comunicacion", "Contacto directo"],
            ].map(([role, stack, loc]) => (
              <Link
                key={role}
                href="/contacto"
                className="group flex flex-col gap-1 py-5 transition hover:bg-iris-50/50 sm:flex-row sm:items-center sm:justify-between sm:px-4"
              >
                <div>
                  <div className="text-[15px] font-semibold text-ink-950 group-hover:text-iris-700">{role}</div>
                  <div className="text-[12.5px] text-ink-500">{stack} · {loc}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-ink-400 transition group-hover:translate-x-0.5 group-hover:text-iris-600" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL */}
      <section id="terminos" className="bg-ink-50/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { id: "terminos", title: "Criterios de uso", desc: "Se publicaran cuando exista una oferta activa.", href: "/contacto" },
              { id: "privacidad", title: "Privacidad", desc: "Resumen de datos, derechos y contacto de privacidad.", href: "/legal/privacy" },
              { id: "dpa", title: "Acuerdos enterprise", desc: "Disponibles solo cuando el alcance comercial este definido.", href: "/contacto" },
            ].map((d) => (
              <div key={d.id} id={d.id} className="card p-6">
                <h3 className="text-[16px] font-semibold text-ink-950">{d.title}</h3>
                <p className="mt-1.5 text-[13px] text-ink-500">{d.desc}</p>
                <Link href={d.href} className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-iris-700">
                  Ver contexto <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
