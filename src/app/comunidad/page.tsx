import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Compass,
  Globe2,
  Heart,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Users,
} from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";

export const metadata = { title: "Comunidad" };

const channels = [
  {
    Icon: MessageCircle,
    title: "Conversaciones de producto",
    desc: "Un canal directo para entender estados, roadmap, integraciones y oportunidades de validacion temprana.",
    signal: "Respuesta humana",
  },
  {
    Icon: Code2,
    title: "Mesa tecnica",
    desc: "Espacio para revisar arquitectura, APIs, eventos, sesiones, seguridad y decisiones de integracion.",
    signal: "Builders first",
  },
  {
    Icon: Users,
    title: "Aliados iniciales",
    desc: "Relaciones con equipos, negocios y operadores que quieran probar Opendex con contexto real.",
    signal: "Privado",
  },
];

const programs = [
  {
    Icon: Rocket,
    name: "Early Circle",
    copy: "Grupo pequeño de personas y empresas que quieren seguir el avance de Opendex desde la etapa temprana.",
    items: ["Actualizaciones de producto", "Contexto del roadmap", "Invitaciones privadas"],
  },
  {
    Icon: BookOpen,
    name: "Architecture Notes",
    copy: "Notas sobre identidad, facturacion, POS, auditoria y criterios tecnicos que guian la plataforma.",
    items: ["Decisiones de diseño", "Diagramas de sistema", "Lecciones del producto"],
  },
  {
    Icon: ShieldCheck,
    name: "Trust Sessions",
    copy: "Conversaciones enfocadas en seguridad, privacidad, acceso, trazabilidad y preparacion empresarial.",
    items: ["Riesgo y sesiones", "Auditoria y webhooks", "Privacidad desde Mexico"],
  },
];

const timeline = [
  ["Fase 01", "Escucha privada", "Reunir señales de equipos mexicanos, negocios digitales y operadores que viven problemas reales."],
  ["Fase 02", "Comunidad curada", "Abrir un grupo pequeño con actualizaciones, sesiones tecnicas y validacion por producto."],
  ["Fase 03", "Centro publico", "Publicar guias, ejemplos, notas de arquitectura y canales permanentes cuando la plataforma madure."],
];

const principles = [
  "Sin ruido artificial ni promesas vacias.",
  "Contenido tecnico con contexto real.",
  "Comunidad primero pequeña, despues publica.",
  "Respeto por empresas que estan construyendo desde Mexico.",
  "Conversaciones honestas sobre lo que esta listo y lo que no.",
];

export default function Comunidad() {
  return (
    <>
      <LocalizedPageHeader pageKey="community">
        <Link href="/contacto" className="btn btn-primary">
          <LocalizedLabel labelKey="joinEarlyCircle" /> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href="/blog" className="btn btn-ghost">
          <LocalizedLabel labelKey="readNotes" />
        </Link>
      </LocalizedPageHeader>

      <section className="border-b border-ink-200 bg-ink-50/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1fr)] lg:px-8 lg:py-24">
          <div>
            <span className="eyebrow">Entorno Opendex</span>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-950 sm:text-[42px]">
              No queremos abrir un grupo vacio. Queremos construir una red con intencion.
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-ink-600">
              La comunidad de Opendex no empieza como un foro gigante. Empieza
              con conversaciones bien cuidadas: fundadores, desarrolladores,
              operadores, comercios, equipos SaaS y personas que quieran ayudar
              a definir una plataforma mexicana con estandares globales.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["MX", "origen"],
                ["Privado", "fase actual"],
                ["Builders", "primer circulo"],
              ].map(([value, label]) => (
                <div key={label} className="border border-ink-200 bg-white px-4 py-4">
                  <div className="text-[22px] font-semibold tracking-tight text-ink-950">{value}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="community-hologram" aria-label="Holograma del entorno Opendex">
            <div className="community-hologram-grid" aria-hidden />
            <div className="community-hologram-orbit community-hologram-orbit-a" aria-hidden />
            <div className="community-hologram-orbit community-hologram-orbit-b" aria-hidden />
            <div className="community-hologram-core">
              <Image src="/logo.png" alt="" width={88} height={88} className="h-16 w-16 object-contain" aria-hidden />
              <span>Opendex</span>
            </div>
            {[
              ["Identity", "left-[9%] top-[18%]"],
              ["Invoice", "right-[8%] top-[24%]"],
              ["Kiosko", "left-[13%] bottom-[20%]"],
              ["Builders", "right-[11%] bottom-[17%]"],
              ["Mexico", "left-1/2 top-[6%] -translate-x-1/2"],
            ].map(([label, position]) => (
              <div key={label} className={`community-hologram-node ${position}`}>
                <span>{label}</span>
              </div>
            ))}
            <div className="community-hologram-console">
              <span>community_env</span>
              <strong>forming</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Canales</span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-950 sm:text-[42px]">
                Tres formas de participar antes de que exista una comunidad publica.
              </h2>
            </div>
            <Link href="/contacto" className="btn btn-ghost self-start lg:self-auto">
              Solicitar acceso <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {channels.map(({ Icon, title, desc, signal }) => (
              <article key={title} className="card group min-h-[260px] p-6">
                <div className="relative h-24 overflow-hidden border border-ink-200 bg-ink-50">
                  <div className="community-card-image" aria-hidden />
                  <Icon className="absolute left-5 top-5 h-7 w-7 text-[#5B21B6]" aria-hidden />
                  <span className="absolute bottom-4 left-5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-500">
                    {signal}
                  </span>
                </div>
                <h3 className="mt-6 text-[21px] font-semibold tracking-tight text-ink-950">{title}</h3>
                <p className="mt-3 text-[14px] leading-6 text-ink-600">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink-200 bg-ink-50/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[330px_minmax(0,1fr)]">
            <div>
              <span className="eyebrow">Programas</span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-950 sm:text-[42px]">
                La comunidad se construira por capas.
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-ink-600">
                En vez de abrir todo de golpe, Opendex prepara espacios con
                objetivos distintos: seguimiento temprano, arquitectura y
                confianza tecnica.
              </p>
            </div>
            <div className="grid gap-5">
              {programs.map(({ Icon, name, copy, items }) => (
                <article key={name} className="card grid gap-6 p-6 md:grid-cols-[220px_minmax(0,1fr)]">
                  <div>
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-iris-100 text-iris-700">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-[20px] font-semibold tracking-tight text-ink-950">{name}</h3>
                    <p className="mt-2 text-[13.5px] leading-6 text-ink-600">{copy}</p>
                  </div>
                  <ul className="grid content-start gap-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-3 border-b border-ink-200 pb-3 text-[13.5px] text-ink-700 last:border-b-0">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#5B21B6]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div>
              <span className="eyebrow">Roadmap comunitario</span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-950 sm:text-[42px]">
                Primero confianza. Despues escala.
              </h2>
              <div className="mt-10 grid gap-4">
                {timeline.map(([phase, title, desc]) => (
                  <article key={phase} className="grid gap-4 border-t border-ink-200 pt-5 sm:grid-cols-[120px_minmax(0,1fr)]">
                    <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-iris-700">{phase}</div>
                    <div>
                      <h3 className="text-[18px] font-semibold text-ink-950">{title}</h3>
                      <p className="mt-1.5 text-[14px] leading-6 text-ink-600">{desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-iris-100 text-iris-700">
                  <Compass className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold text-ink-950">Principios de comunidad</h3>
                  <p className="text-[12.5px] text-ink-500">Como se va a moderar el entorno inicial.</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {principles.map((item) => (
                  <li key={item} className="flex gap-3 text-[13.5px] leading-6 text-ink-700">
                    <Heart className="mt-1 h-4 w-4 shrink-0 text-[#5B21B6]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/60">
              <Globe2 className="h-3.5 w-3.5 text-[#5B21B6]" aria-hidden />
              Comunidad privada en preparacion
            </div>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Si estas construyendo desde Mexico y quieres seguir el camino de Opendex, podemos hablar.
            </h2>
          </div>
          <Link href="/contacto" className="btn btn-primary bg-white text-ink-950 hover:bg-white/90">
            Contactar <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
