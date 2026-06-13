"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, X, Plus, Minus, Mail } from "@/components/icons";
import { useI18n } from "@/i18n/LanguageProvider";
import { faqContent } from "@/i18n/faqContent";

type Category = "general" | "facturacion" | "cuenta" | "tecnico";

type Faq = {
  q: string;
  a: React.ReactNode;
  cat: Category;
};

const faqs: Faq[] = [
  {
    cat: "general",
    q: "¿Qué es Opendex Web Services?",
    a: (
      <p>
        Opendex Web Services es la empresa madre. Nuestro objetivo es destacar
        en la industria tecnológica construyendo plataformas propias:{" "}
        <strong className="trae-accent">Opendex Identity Platform</strong>,{" "}
        <strong className="trae-accent">Opendex Kiosko Workspaces</strong> y{" "}
        <strong className="trae-accent">Factur Workspaces</strong>.
      </p>
    ),
  },
  {
    cat: "general",
    q: "¿Ofrecen actualmente un programa para startups?",
    a: (
      <p>
        No. Opendex Web Services no está ofreciendo un programa para startups.
        En este momento estamos enfocados en madurar nuestros productos y
        comunicar su estado real sin prometer beneficios o fechas artificiales.
      </p>
    ),
  },
  {
    cat: "general",
    q: "¿Hay fechas de lanzamiento públicas?",
    a: (
      <p>
        No. Opendex Identity Platform está en prelanzamiento, Opendex Kiosko
        Workspaces está en beta aislada y Factur Workspaces aún no está
        disponible públicamente.
      </p>
    ),
  },
  {
    cat: "general",
    q: "¿Dónde encuentro términos y políticas?",
    a: (
      <p>
        Términos del servicio, Aviso de privacidad LFPDPPP y DPA están
        publicados en el footer y se firman también para Enterprise.
      </p>
    ),
  },
  {
    cat: "general",
    q: "¿Opendex es una empresa mexicana?",
    a: (
      <p>
        Sí. Opendex Web Services nace en México y está construyendo productos
        de infraestructura digital con enfoque en operaciones reales de la
        región: identidad, documentos, comercios y equipos que necesitan
        trazabilidad.
      </p>
    ),
  },
  {
    cat: "general",
    q: "¿Por qué el sitio muestra productos si aún no todos están abiertos?",
    a: (
      <p>
        Porque queremos comunicar dirección y estado desde temprano. La página
        separa lo que está en prelanzamiento, beta aislada o preparación para
        evitar confundir visión con disponibilidad pública.
      </p>
    ),
  },
  {
    cat: "facturacion",
    q: "¿Cuál es el estado de Opendex Identity Platform?",
    a: (
      <p>
        Está en prelanzamiento, sin fecha pública de salida. La plataforma se
        está preparando como base de identidad para passkeys, SSO, MFA,
        sesiones y controles de seguridad.
      </p>
    ),
  },
  {
    cat: "facturacion",
    q: "¿Cuál es el estado de Opendex Kiosko Workspaces?",
    a: (
      <p>
        Está en beta, pero solo dentro de un entorno aislado. No tenemos fecha
        de lanzamiento pública y no se está ofreciendo como disponibilidad
        general.
      </p>
    ),
  },
  {
    cat: "facturacion",
    q: "¿Cuál es el estado de Factur Workspaces?",
    a: (
      <p>
        Aún no está disponible. La base ya está lista, pero quedan mejoras por
        cerrar antes de abrirlo públicamente.
      </p>
    ),
  },
  {
    cat: "facturacion",
    q: "¿Qué problema busca resolver Identity Platform?",
    a: (
      <p>
        Busca organizar acceso, sesiones, MFA, passkeys, proveedores SSO,
        permisos, eventos y auditoría en una sola capa. No se trata solo de una
        pantalla de login, sino de gobierno de identidad para productos.
      </p>
    ),
  },
  {
    cat: "facturacion",
    q: "¿Qué problema busca resolver Kiosko Workspaces?",
    a: (
      <p>
        Está pensado para operaciones retail: caja, inventario, tickets, cortes,
        sucursales y lectura operativa. El objetivo es que un negocio entienda
        qué ocurre en cada punto de venta sin perder contexto.
      </p>
    ),
  },
  {
    cat: "facturacion",
    q: "¿Qué problema busca resolver Factur Workspaces?",
    a: (
      <p>
        Factur Workspaces apunta a ordenar documentos, estados fiscales,
        usuarios, evidencias y seguimiento administrativo. Su enfoque inicial
        está centrado en operación mexicana.
      </p>
    ),
  },
  {
    cat: "facturacion",
    q: "¿Puedo solicitar acceso a los productos?",
    a: (
      <p>
        Puedes contactarnos para solicitar información, pero actualmente no hay
        un flujo público de registro, prueba gratuita o disponibilidad general.
      </p>
    ),
  },
  {
    cat: "facturacion",
    q: "¿Factur Workspaces emitirá CFDI 4.0?",
    a: (
      <p>
        Ese es el objetivo del producto, pero todavía no está disponible
        públicamente. La comunicación oficial se actualizará cuando esté listo
        para abrirse.
      </p>
    ),
  },
  {
    cat: "cuenta",
    q: "¿Puedo crear una cuenta desde la web?",
    a: (
      <p>
        Todavía no. El acceso público de autoservicio no está abierto. Si tu
        equipo necesita contexto, puedes escribirnos desde contacto y explicar
        qué producto o escenario quieres validar.
      </p>
    ),
  },
  {
    cat: "cuenta",
    q: "¿Necesito una cuenta para usar Opendex ahora?",
    a: (
      <p>
        No hay una cuenta pública de autoservicio en este momento. Si tu equipo
        quiere conocer el roadmap o validar un caso específico, el canal
        correcto es contacto.
      </p>
    ),
  },
  {
    cat: "cuenta",
    q: "¿Qué debo incluir al contactar al equipo?",
    a: (
      <p>
        Indica tu empresa o proyecto, el producto que te interesa, el caso de
        uso, el volumen aproximado y si buscas identidad, facturación, retail,
        documentación técnica o conversación comercial.
      </p>
    ),
  },
  {
    cat: "cuenta",
    q: "¿Dónde encuentro términos y políticas?",
    a: (
      <p>
        Términos del servicio, aviso de privacidad y políticas relacionadas se
        enlazan desde el pie de página del sitio.
      </p>
    ),
  },
  {
    cat: "cuenta",
    q: "¿Cómo tratan la privacidad y los datos?",
    a: (
      <p>
        La privacidad se considera parte de la base técnica. Las prácticas y
        documentos aplicables se publican conforme el producto avance hacia
        disponibilidad pública.
      </p>
    ),
  },
  {
    cat: "cuenta",
    q: "¿Cómo puedo recibir noticias?",
    a: (
      <p>
        Escríbenos desde la página de contacto. Te responderemos con el estado
        vigente del producto que te interese.
      </p>
    ),
  },
  {
    cat: "tecnico",
    q: "¿Opendex tendrá webhooks?",
    a: (
      <p>
        La dirección técnica contempla eventos y webhooks para que los equipos
        puedan conectar cambios de sesión, documentos, tickets o auditoría con
        sus propios sistemas. Se publicarán detalles cuando cada producto avance.
      </p>
    ),
  },
  {
    cat: "tecnico",
    q: "¿Qué significa trabajar con workspaces?",
    a: (
      <p>
        Un workspace separa contexto operativo: usuarios, permisos, entidades,
        configuración, eventos y evidencia. Es una forma de evitar mezclar
        clientes, sucursales, razones sociales o equipos internos.
      </p>
    ),
  },
  {
    cat: "tecnico",
    q: "¿Cuál es el enfoque técnico de Opendex?",
    a: (
      <p>
        Seguridad, identidad, workspaces operativos, trazabilidad y bases
        preparadas para integraciones reales. Preferimos abrir productos cuando
        pueden sostener uso serio, no por presión de calendario.
      </p>
    ),
  },
  {
    cat: "tecnico",
    q: "¿Publicarán SDKs y documentación?",
    a: (
      <p>
        Sí, conforme cada producto avance hacia disponibilidad pública. Por
        ahora evitamos presentar documentación como si ya existiera una oferta
        abierta.
      </p>
    ),
  },
  {
    cat: "tecnico",
    q: "¿Kiosko Workspaces se puede probar fuera del entorno aislado?",
    a: (
      <p>
        No por ahora. El producto se mantiene en un entorno controlado mientras
        se validan estabilidad, operación y alcance.
      </p>
    ),
  },
  {
    cat: "tecnico",
    q: "¿Factur Workspaces ya está listo para producción?",
    a: (
      <p>
        Todavía no. La base está preparada, pero Opendex Web Services está
        cerrando mejoras antes de anunciar disponibilidad.
      </p>
    ),
  },
  {
    cat: "tecnico",
    q: "¿Puedo integrar Opendex en producción hoy?",
    a: (
      <p>
        No presentamos disponibilidad pública de producción en este momento.
        Cualquier integración se comunicará directamente según el estado real
        del producto.
      </p>
    ),
  },
];

export default function FaqPage() {
  const { locale } = useI18n();
  const copy = faqContent[locale];
  const activeFaqs = copy.faqs.length > 0 ? copy.faqs : faqs;
  const localizedFilters: Array<{ key: "all" | Category; label: string }> = [
    { key: "all", label: copy.filters.all },
    { key: "general", label: copy.filters.general },
    { key: "facturacion", label: copy.filters.facturacion },
    { key: "cuenta", label: copy.filters.cuenta },
    { key: "tecnico", label: copy.filters.tecnico },
  ];

  const [query, setQuery] = useState("");
  const [active, setActive] = useState<"all" | Category>("all");
  const [open, setOpen] = useState<number | null>(0);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: activeFaqs.length };
    for (const f of activeFaqs) c[f.cat] = (c[f.cat] ?? 0) + 1;
    return c;
  }, [activeFaqs]);

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();
    return activeFaqs
      .map((f, idx) => ({ ...f, idx }))
      .filter((f) => {
        const matchCat = active === "all" || f.cat === active;
        if (!matchCat) return false;
        if (!term) return true;
        return f.q.toLowerCase().includes(term);
      });
  }, [query, active, activeFaqs]);

  return (
    <div className="theme-trae faq-trae">
      <style>{`
        .faq-trae {
          --trae-bg: #faf8f4;
          --trae-text: #1d1d1b;
          --trae-text-muted: #5f5f5a;
          --trae-accent: #f6821f;
          --trae-accent-hover: #d96714;
          --trae-card-border: #e1ded5;
          --trae-card-bg: rgba(255, 255, 255, 0.78);
          --trae-shadow-sm: 0 22px 70px rgba(29, 29, 27, 0.08);
          min-height: 100vh;
          padding: 64px 24px 96px;
          background:
            radial-gradient(circle at 18% 8%, rgba(246, 130, 31, 0.16), transparent 28%),
            radial-gradient(circle at 82% 16%, rgba(124, 58, 237, 0.08), transparent 24%),
            linear-gradient(180deg, #fffaf3 0%, #faf8f4 45%, #ffffff 100%);
          color: var(--trae-text);
        }
        .faq-trae .wrap { max-width: 880px; margin: 0 auto; }
        .faq-trae .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 12px; border-radius: 999px;
          border: 1px solid var(--trae-card-border);
          color: var(--trae-accent);
          font-family: var(--font-geist-mono);
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.04em; text-transform: uppercase;
        }
        .faq-trae .eyebrow svg { width: 14px; height: 14px; }
        .faq-trae .hero { text-align: center; margin-bottom: 48px; }
        .faq-trae .hero h1 {
          font-size: 48px; line-height: 1.05;
          margin: 24px 0 16px;
          font-weight: 700; letter-spacing: -0.02em;
        }
        .faq-trae .hero h1 .ac { color: var(--trae-accent); }
        .faq-trae .hero .sub {
          color: var(--trae-text-muted);
          font-family: var(--font-geist-mono);
          font-size: 15px; line-height: 26px;
          max-width: 560px; margin: 0 auto;
        }
        .faq-trae .search-wrap {
          position: relative;
          margin: 36px 0 24px;
        }
        .faq-trae .search-wrap::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(246,130,31,0.32), rgba(246,130,31,0.04) 42%, rgba(124,58,237,0.16));
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
        }
        .faq-trae .search-wrap:focus-within::before { opacity: 1; }
        .faq-trae .search-icon {
          position: absolute; left: 16px; top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          width: 18px; height: 18px; color: #8a8178;
          pointer-events: none;
        }
        .faq-trae .trae-input {
          position: relative;
          z-index: 1;
          height: 58px;
          border-radius: 18px;
          border: 1px solid rgba(29,29,27,0.12);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,250,243,0.78));
          padding: 0 54px 0 48px;
          color: #1d1d1b;
          box-shadow:
            0 18px 44px rgba(29,29,27,0.06),
            inset 0 1px 0 rgba(255,255,255,0.9);
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }
        .faq-trae .trae-input:hover {
          border-color: rgba(246,130,31,0.28);
          background: #ffffff;
        }
        .faq-trae .trae-input:focus {
          border-color: rgba(246,130,31,0.52);
          outline: none;
          box-shadow:
            0 22px 60px rgba(246,130,31,0.12),
            0 0 0 5px rgba(246,130,31,0.1),
            inset 0 1px 0 rgba(255,255,255,0.95);
        }
        .faq-trae .trae-input::placeholder {
          color: #9a948c;
        }
        .faq-trae .clear {
          position: absolute; right: 12px; top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          width: 28px; height: 28px;
          border: 1px solid rgba(29,29,27,0.1);
          background: rgba(255,255,255,0.72); color: var(--trae-text);
          border-radius: 999px;
          display: inline-flex; align-items: center; justify-content: center;
          cursor: pointer;
        }
        .faq-trae .clear:hover { background: #fff3e0; }
        .faq-trae .filters {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin-bottom: 28px;
        }
        .faq-trae .pill {
          padding: 8px 14px;
          background: transparent;
          border: 1px solid var(--trae-card-border);
          color: var(--trae-text);
          border-radius: var(--trae-radius);
          font-family: var(--font-geist-sans);
          font-size: 14px; font-weight: 400;
          cursor: pointer;
          display: inline-flex; align-items: center; gap: 8px;
          transition: background 0.15s ease, border-color 0.15s ease;
        }
        .faq-trae .pill:hover { border-color: var(--trae-accent); }
        .faq-trae .pill.active {
          background: var(--trae-accent);
          border-color: var(--trae-accent);
          color: #ffffff;
        }
        .faq-trae .pill .count {
          font-family: var(--font-geist-mono);
          font-size: 11px; padding: 2px 6px;
          background: rgba(246,130,31,0.1);
          border-radius: 3px; line-height: 1;
        }
        .faq-trae .pill.active .count { background: rgba(255,255,255,0.2); }
        .faq-trae .list { display: flex; flex-direction: column; gap: 12px; }
        .faq-trae .item {
          background: var(--trae-card-bg);
          border: 1px solid var(--trae-card-border);
          border-radius: 8px;
          padding: 16px;
          backdrop-filter: blur(14px);
          transition: border-color 0.15s ease, box-shadow 0.2s ease;
        }
        .faq-trae .item.open {
          border-color: var(--trae-accent);
          box-shadow: var(--trae-shadow-sm);
        }
        .faq-trae .trigger {
          all: unset; cursor: pointer; width: 100%;
          display: flex; align-items: flex-start; gap: 16px;
          font-family: var(--font-geist-sans);
          font-size: 18px; font-weight: 600;
          line-height: 22px;
          color: var(--trae-text);
        }
        .faq-trae .trigger .label {
          flex-shrink: 0;
          font-family: var(--font-geist-mono);
          font-size: 11px;
          padding: 4px 8px;
          color: var(--trae-text-muted);
          border: 1px solid var(--trae-card-border);
          border-radius: 3px;
          margin-top: 1px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .faq-trae .trigger .q { flex: 1; min-width: 0; }
        .faq-trae .trigger .icon {
          flex-shrink: 0;
          width: 22px; height: 22px;
          display: grid; place-items: center;
          color: var(--trae-text-muted);
        }
        .faq-trae .item.open .trigger .icon { color: var(--trae-accent); }
        .faq-trae .panel {
          display: grid; grid-template-rows: 0fr;
          transition: grid-template-rows 0.25s ease, margin-top 0.2s ease;
          margin-top: 0;
        }
        .faq-trae .item.open .panel {
          grid-template-rows: 1fr;
          margin-top: 14px;
        }
        .faq-trae .panel > div { overflow: hidden; }
        .faq-trae .answer {
          padding-top: 14px;
          border-top: 1px solid var(--trae-card-border);
          font-family: var(--font-geist-mono);
          font-size: 15px; line-height: 28px;
          color: var(--trae-text-muted);
        }
        .faq-trae .answer p { margin: 0 0 8px; font-family: var(--font-geist-mono); font-size: 15px; line-height: 28px; }
        .faq-trae .answer p:last-child { margin-bottom: 0; }
        .faq-trae .answer ul { margin: 8px 0; padding-left: 20px; }
        .faq-trae .answer ul li { margin: 4px 0; }
        .faq-trae .answer code {
          font-family: var(--font-geist-mono);
          font-size: 13px;
          background: #fff7ed;
          border: 1px solid var(--trae-card-border);
          padding: 1px 6px;
          border-radius: 3px;
          color: #9a3412;
        }
        .faq-trae .answer strong { color: var(--trae-text); font-weight: 600; }
        .faq-trae .answer .trae-accent { color: var(--trae-accent); }
        .faq-trae .empty {
          padding: 60px 24px; text-align: center;
          border: 1px dashed var(--trae-card-border);
          border-radius: 8px;
        }
        .faq-trae .empty strong {
          display: block; color: var(--trae-text);
          font-size: 18px; margin-bottom: 6px;
          font-family: var(--font-geist-sans);
        }
        .faq-trae .empty span {
          color: var(--trae-text-muted);
          font-family: var(--font-geist-mono);
          font-size: 14px;
        }
        .faq-trae .cta {
          margin-top: 56px;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 280px;
          gap: 28px;
          padding: 28px;
          border: 1px solid var(--trae-card-border);
          border-radius: 8px;
          text-align: left;
          background: rgba(255,255,255,0.72);
          box-shadow: var(--trae-shadow-sm);
        }
        .faq-trae .cta::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.7;
          background:
            linear-gradient(rgba(246,130,31,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(246,130,31,0.08) 1px, transparent 1px),
            radial-gradient(circle at 88% 20%, rgba(246,130,31,0.16), transparent 28%);
          background-size: 26px 26px, 26px 26px, 100% 100%;
          -webkit-mask-image: linear-gradient(to right, transparent 0, #000 44%, #000 100%);
                  mask-image: linear-gradient(to right, transparent 0, #000 44%, #000 100%);
        }
        .faq-trae .cta-copy,
        .faq-trae .cta-panel { position: relative; z-index: 1; }
        .faq-trae .cta-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
          font-family: var(--font-geist-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--trae-accent);
        }
        .faq-trae .cta-kicker::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--trae-accent);
          box-shadow: 0 0 0 5px rgba(246,130,31,0.12);
        }
        .faq-trae .cta h2 { font-size: 28px; line-height: 1.08; margin: 0 0 12px; letter-spacing: -0.02em; }
        .faq-trae .cta p {
          color: var(--trae-text-muted);
          margin: 0 0 24px;
          font-family: var(--font-geist-mono);
          font-size: 15px; line-height: 26px;
          max-width: 520px;
        }
        .faq-trae .cta-actions {
          display: flex; gap: 12px; flex-wrap: wrap; justify-content: flex-start;
        }
        .faq-trae .cta-panel {
          border: 1px solid var(--trae-card-border);
          background: rgba(255,250,243,0.78);
          padding: 18px;
        }
        .faq-trae .cta-panel-title {
          font-family: var(--font-geist-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--trae-text);
        }
        .faq-trae .cta-panel ul {
          margin: 14px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 10px;
        }
        .faq-trae .cta-panel li {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          border-top: 1px solid var(--trae-card-border);
          padding-top: 10px;
          font-family: var(--font-geist-mono);
          font-size: 12px;
          color: var(--trae-text-muted);
        }
        .faq-trae .cta-panel strong {
          color: var(--trae-accent);
          font-weight: 700;
        }
        @media (max-width: 640px) {
          .faq-trae { padding: 40px 16px 64px; }
          .faq-trae .hero h1 { font-size: 36px; }
          .faq-trae .trigger { font-size: 16px; line-height: 20px; }
          .faq-trae .trigger .label { display: none; }
          .faq-trae .cta { grid-template-columns: 1fr; padding: 24px 20px; }
        }
      `}</style>

      <div className="wrap">
        {/* HEADER */}
        <header className="hero">
          <span className="eyebrow">
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.1 9a3 3 0 1 1 5.8 1c0 2-3 2.5-3 4" />
              <path d="M12 17h.01" />
            </svg>
            {copy.header.eyebrow}
          </span>
          <h1>
            {copy.header.titleStart} <span className="ac">{copy.header.titleAccent}</span>
          </h1>
          <p className="sub">{copy.header.description}</p>
        </header>

        {/* SEARCH */}
        <div className="search-wrap">
          <Search className="search-icon" aria-hidden />
          <input
            type="search"
            className="trae-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={copy.search.placeholder}
            aria-label={copy.search.aria}
            autoComplete="off"
          />
          {query && (
            <button
              type="button"
              className="clear"
              onClick={() => setQuery("")}
              aria-label={copy.search.clear}
            >
              <X width={14} height={14} />
            </button>
          )}
        </div>

        {/* FILTERS */}
        <nav className="filters" aria-label={copy.search.filtersAria}>
          {localizedFilters.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`pill ${isActive ? "active" : ""}`}
                aria-pressed={isActive}
              >
                {f.label}
                <span className="count">{counts[f.key] ?? 0}</span>
              </button>
            );
          })}
        </nav>

        {/* ACCORDION */}
        {visible.length === 0 ? (
          <div className="empty">
            <strong>{copy.search.emptyTitle}</strong>
            <span>{copy.search.emptyDescription}</span>
          </div>
        ) : (
          <ul className="list">
            {visible.map((f) => {
              const isOpen = open === f.idx;
              return (
                <li
                  key={f.idx}
                  className={`item ${isOpen ? "open" : ""}`}
                >
                  <button
                    type="button"
                    className="trigger"
                    onClick={() => setOpen(isOpen ? null : f.idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${f.idx}`}
                    id={`faq-trigger-${f.idx}`}
                  >
                    <span className="label">{copy.filters[f.cat]}</span>
                    <span className="q">{f.q}</span>
                    <span className="icon" aria-hidden>
                      {isOpen ? <Minus width={16} height={16} /> : <Plus width={16} height={16} />}
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${f.idx}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${f.idx}`}
                    className="panel"
                  >
                    <div>
                      <div className="answer">{f.a}</div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {/* CTA */}
        <section className="cta">
          <div className="cta-copy">
            <span className="cta-kicker">{copy.cta.kicker}</span>
            <h2>{copy.cta.title}</h2>
            <p>{copy.cta.description}</p>
            <div className="cta-actions">
              <Link href="/contacto" className="trae-btn-accent">
                <Mail width={16} height={16} style={{ marginRight: 8 }} />
                {copy.cta.contact}
              </Link>
              <Link href="/documentacion" className="trae-btn-secondary">
                {copy.cta.docs}
              </Link>
            </div>
          </div>
          <div className="cta-panel" aria-label="Rutas de ayuda recomendadas">
            <div className="cta-panel-title">{copy.cta.routes}</div>
            <ul>
              {copy.cta.routeItems.map(([label, route]) => (
                <li key={route}><span>{label}</span><strong>{route}</strong></li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
