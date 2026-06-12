import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Code2,
  Database,
  FileCode2,
  Globe2,
  Layers,
  Lock,
  ReceiptText,
  ShieldCheck,
  Store,
} from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";

export const metadata = { title: "Blog" };

const featured = {
  label: "Edicion 01",
  title: "Diseñar infraestructura sin convertirla en una caja negra.",
  desc:
    "Una nota sobre como Opendex piensa visibilidad, estados, permisos y evidencia para que un equipo pueda entender que ocurre dentro de su operacion.",
  tags: ["observabilidad", "workspaces", "confianza"],
};

const articles = [
  {
    Icon: ShieldCheck,
    category: "Identidad",
    title: "El login no deberia ser el centro del sistema.",
    desc: "La identidad moderna vive en sesiones, politicas, eventos, dispositivos, permisos y auditoria. La pantalla de acceso es solo una puerta.",
    meta: "Lectura tecnica · 6 min",
  },
  {
    Icon: ReceiptText,
    category: "Operacion fiscal",
    title: "Facturacion como flujo de trabajo, no como boton final.",
    desc: "El problema no termina al timbrar. Existen estados, revisiones, evidencias, usuarios, complementos y excepciones operativas.",
    meta: "Ensayo de producto · 7 min",
  },
  {
    Icon: Store,
    category: "Retail cloud",
    title: "El punto de venta necesita memoria operativa.",
    desc: "Una caja moderna deberia registrar contexto: cortes, inventario, movimientos, sucursales, usuarios y trazabilidad por evento.",
    meta: "Nota de sistema · 5 min",
  },
  {
    Icon: Database,
    category: "Datos",
    title: "Modelar entidades antes de diseñar pantallas.",
    desc: "Usuarios, sesiones, documentos, tickets y webhooks deben tener forma clara antes de que la interfaz intente vender simplicidad.",
    meta: "Arquitectura · 8 min",
  },
  {
    Icon: Activity,
    category: "Eventos",
    title: "Los logs son producto cuando ayudan a decidir.",
    desc: "Una bitacora util no es una lista infinita; es una superficie para soporte, seguridad, auditoria y explicacion.",
    meta: "Product ops · 6 min",
  },
  {
    Icon: Lock,
    category: "Seguridad",
    title: "Privacidad por diseño para equipos que aun estan creciendo.",
    desc: "No hace falta esperar a ser enterprise para separar permisos, reducir exposicion y documentar decisiones sensibles.",
    meta: "Criterio tecnico · 5 min",
  },
];

const columns = [
  {
    Icon: Code2,
    title: "Build Notes",
    desc: "Notas cortas sobre decisiones de implementacion, tradeoffs y piezas internas que aun estan tomando forma.",
  },
  {
    Icon: Layers,
    title: "Product Systems",
    desc: "Ensayos sobre como conectar producto, operaciones, soporte y datos sin duplicar herramientas.",
  },
  {
    Icon: FileCode2,
    title: "API Thinking",
    desc: "Ideas sobre contratos, eventos, integraciones y documentacion que se entiendan antes de escribir codigo.",
  },
];

const readingQueue = [
  ["Passkeys y confianza de dispositivo", "Como evaluar señales sin convertir seguridad en friccion."],
  ["Webhooks con contexto", "Eventos que expliquen quien hizo que, desde donde y por que importa."],
  ["Workspaces para negocios mexicanos", "Separacion por empresa, sucursal, rol y evidencia operativa."],
  ["Estados de producto publicos", "Como comunicar preparacion sin vender disponibilidad falsa."],
];

export default function Blog() {
  return (
    <>
      <LocalizedPageHeader pageKey="blog">
        <Link href="/documentacion" className="btn btn-primary">
          <LocalizedLabel labelKey="viewDocs" /> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href="/comunidad" className="btn btn-ghost">
          <LocalizedLabel labelKey="community" />
        </Link>
      </LocalizedPageHeader>

      <section className="border-b border-ink-200 bg-ink-50/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:px-8 lg:py-24">
          <article className="blog-feature-card">
            <div className="blog-feature-visual" aria-hidden>
              <span className="blog-paper blog-paper-a" />
              <span className="blog-paper blog-paper-b" />
              <span className="blog-paper blog-paper-c" />
              <BookOpen className="absolute left-8 top-8 h-8 w-8 text-[#f6821f]" aria-hidden />
            </div>
            <div className="p-7 sm:p-9">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-iris-700">
                {featured.label}
              </span>
              <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-ink-950">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-ink-600">{featured.desc}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-ink-200 bg-white px-3 py-1 text-[12px] font-medium text-ink-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <aside className="card p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-iris-100 text-iris-700">
                <Globe2 className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h2 className="text-[17px] font-semibold text-ink-950">Linea editorial</h2>
                <p className="text-[12.5px] text-ink-500">Que tipo de contenido se publicara.</p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[13.5px] leading-6 text-ink-600">
              <p>
                Publicaremos notas cuando haya criterio util: modelos, decisiones,
                diagramas, riesgos, aprendizajes y formas de pensar software para
                operacion real.
              </p>
              <p>
                No buscamos llenar el blog por volumen. Cada pieza debe ayudar a
                entender una decision tecnica o de producto.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Articulos preparados</span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-950 sm:text-[42px]">
                Piezas con angulos distintos, no el mismo mensaje repetido.
              </h2>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
              06 borradores editoriales
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map(({ Icon, category, title, desc, meta }) => (
              <article key={title} className="blog-article-card card min-h-[330px] p-6">
                <div className="blog-article-visual" aria-hidden>
                  <Icon className="absolute left-5 top-5 h-6 w-6 text-[#f6821f]" aria-hidden />
                  <span>{category}</span>
                </div>
                <div className="mt-6 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-iris-700">
                  {meta}
                </div>
                <h3 className="mt-3 text-[21px] font-semibold tracking-tight text-ink-950">{title}</h3>
                <p className="mt-3 text-[13.5px] leading-6 text-ink-600">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink-200 bg-ink-50/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
            <div>
              <span className="eyebrow">Series</span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-950 sm:text-[42px]">
                Tres columnas para ordenar el conocimiento.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {columns.map(({ Icon, title, desc }) => (
                <article key={title} className="card p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-iris-100 text-iris-700">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-[19px] font-semibold text-ink-950">{title}</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-ink-600">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-8 lg:py-24">
          <div>
            <span className="eyebrow">Proximas notas</span>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink-950 sm:text-[42px]">
              Cola editorial con temas concretos.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-ink-600">
              Estos temas se publicaran cuando tengan ejemplos, diagramas o
              aprendizajes suficientes. El objetivo es que cada texto deje una
              idea util, no solo una actualizacion superficial.
            </p>
          </div>
          <div className="divide-y divide-ink-200 border-y border-ink-200">
            {readingQueue.map(([title, desc], index) => (
              <div key={title} className="grid grid-cols-[42px_minmax(0,1fr)] gap-4 py-5">
                <div className="font-mono text-[11px] font-semibold text-iris-700">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-ink-950">{title}</h3>
                  <p className="mt-1 text-[13px] leading-5 text-ink-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
