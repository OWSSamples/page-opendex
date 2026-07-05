import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Comunidad" };

const signals = [
  ["Privada", "Fase actual"],
  ["Builders", "Primer circulo"],
  ["Mexico", "Origen"],
];

const channels = [
  {
    title: "Conversaciones de producto",
    body: "Un espacio para revisar necesidades reales, validar prioridades y entender que debe existir antes de abrir comunidad publica.",
    meta: "Producto",
  },
  {
    title: "Revision tecnica",
    body: "Sesiones enfocadas en arquitectura, integraciones, seguridad, eventos, auditoria y criterios operativos para equipos que construyen.",
    meta: "Arquitectura",
  },
  {
    title: "Aliados iniciales",
    body: "Relaciones con negocios, operadores y equipos SaaS que quieran probar Opendex con contexto real y acompanamiento cuidadoso.",
    meta: "Acceso privado",
  },
];

const programs = [
  {
    title: "Early Circle",
    body: "Grupo reducido para recibir contexto de producto, revisar avances y participar antes de que la comunidad sea abierta.",
    rows: ["Actualizaciones concretas", "Conversaciones privadas", "Validacion de roadmap"],
  },
  {
    title: "Architecture Notes",
    body: "Notas editoriales sobre identidad, facturacion, operacion, trazabilidad y decisiones tecnicas que afectan al producto.",
    rows: ["Criterios de diseno", "Lecciones de integracion", "Estandares internos"],
  },
  {
    title: "Trust Sessions",
    body: "Revisiones enfocadas en privacidad, acceso, seguridad, evidencia y preparacion empresarial.",
    rows: ["Riesgo operativo", "Auditoria y eventos", "Privacidad desde Mexico"],
  },
];

const roadmap = [
  ["Escucha privada", "Reunir senales de equipos que enfrentan problemas reales de identidad, documentos y operacion."],
  ["Circulo curado", "Abrir espacios pequenos con seguimiento tecnico, notas de avance y validacion de casos concretos."],
  ["Centro publico", "Publicar guias, ejemplos y conversaciones cuando exista suficiente claridad para sostenerlo bien."],
];

const principles = [
  "Sin promesas vacias ni ruido artificial.",
  "Contenido tecnico explicado con contexto.",
  "Privacidad y respeto por el tiempo de cada equipo.",
  "Comunidad pequena antes de escala publica.",
  "Conversaciones honestas sobre lo listo y lo pendiente.",
];

export default function Comunidad() {
  return (
    <div className="opx-community-page">
      <section className="opx-community-hero">
        <div className="opx-community-shell opx-community-hero-grid">
          <div className="opx-community-copy">
            <p className="opx-community-kicker">Comunidad Opendex</p>
            <h1>Un entorno privado para construir con contexto.</h1>
            <p>
              La comunidad no inicia como un foro abierto. Inicia como una red pequena de equipos,
              operadores y builders que quieren validar producto, arquitectura y confianza con una
              conversacion seria.
            </p>
            <div className="opx-community-actions">
              <Link href="/contacto" className="opx-community-button opx-community-button-primary">
                Solicitar acceso
              </Link>
              <Link href="/blog" className="opx-community-button opx-community-button-secondary">
                Leer notas
              </Link>
            </div>
          </div>

          <div className="opx-community-visual" aria-label="Equipo tecnico revisando operacion e infraestructura">
            <Image
              src="/images/blog/opendex-blog-featured-infrastructure.png"
              alt="Equipo tecnico revisando operacion e infraestructura"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="opx-community-visual-image"
            />
          </div>
        </div>
      </section>

      <section className="opx-community-section">
        <div className="opx-community-shell">
          <div className="opx-community-signal-grid">
            {signals.map(([value, label]) => (
              <article key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-community-section">
        <div className="opx-community-shell opx-community-section-grid">
          <div className="opx-community-copy">
            <p className="opx-community-kicker">Canales</p>
            <h2>Tres entradas, una misma regla: participar con contexto.</h2>
            <p>
              Cada canal existe para ordenar una conversacion distinta. No buscamos volumen; buscamos
              claridad, aprendizaje y decisiones utiles para el producto.
            </p>
          </div>
          <div className="opx-community-card-grid">
            {channels.map((channel) => (
              <article key={channel.title}>
                <span>{channel.meta}</span>
                <h3>{channel.title}</h3>
                <p>{channel.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-community-section opx-community-section-muted">
        <div className="opx-community-shell opx-community-section-grid">
          <div className="opx-community-copy">
            <p className="opx-community-kicker">Programas</p>
            <h2>La comunidad se abre por capas, no por improvisacion.</h2>
            <p>
              El orden importa: primero conversaciones privadas, luego notas tecnicas, despues un
              espacio publico cuando el producto tenga suficiente madurez.
            </p>
          </div>
          <div className="opx-community-program-list">
            {programs.map((program) => (
              <article key={program.title}>
                <div>
                  <h3>{program.title}</h3>
                  <p>{program.body}</p>
                </div>
                <ul>
                  {program.rows.map((row) => (
                    <li key={row}>{row}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-community-section">
        <div className="opx-community-shell opx-community-roadmap-grid">
          <div className="opx-community-copy">
            <p className="opx-community-kicker">Roadmap comunitario</p>
            <h2>Primero confianza. Despues escala.</h2>
            <p>
              La comunidad publica solo tiene sentido si antes existe criterio editorial,
              aprendizaje tecnico y un marco claro para moderar la conversacion.
            </p>
          </div>
          <div className="opx-community-roadmap-list">
            {roadmap.map(([title, body]) => (
              <article key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-community-section opx-community-section-muted">
        <div className="opx-community-shell opx-community-final-grid">
          <article>
            <p className="opx-community-kicker">Principios</p>
            <h2>Un espacio pequeno tambien necesita reglas claras.</h2>
            <ul>
              {principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <div className="opx-community-copy">
            <h2>Si estas construyendo desde Mexico y quieres seguir el camino de Opendex, hablemos.</h2>
            <p>
              Comparte que estas construyendo, que problema quieres resolver y que tipo de
              conversacion necesitas tener con nuestro equipo.
            </p>
            <div className="opx-community-actions">
              <Link href="/contacto" className="opx-community-button opx-community-button-primary">
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
