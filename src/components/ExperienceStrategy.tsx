"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "@/components/icons";
import { ArrowRight, ShieldCheck } from "@/components/icons";
import { Reveal } from "@/components/Motion";

type Pillar = {
  Icon: LucideIcon;
  tag: string;
  title: string;
  desc: string;
};

type Outcome = {
  value: string;
  label: string;
  color: string;
};

type VisualSlot = {
  src: string;
  label: string;
  title: string;
};

type ExperienceStrategyProps = {
  pillars: Pillar[];
  outcomes: Outcome[];
  visuals: VisualSlot[];
};

export default function ExperienceStrategy({
  pillars,
  outcomes,
  visuals,
}: ExperienceStrategyProps) {
  return (
    <section className="opx-pro-strategy">
      <div aria-hidden className="opx-pro-strategy-bg" />
      <div aria-hidden className="opx-pro-strategy-glow" />

      <div className="opx-pro-strategy-shell">
        <Reveal>
          <div className="opx-pro-strategy-index">
            <span>02 / 07</span>
            <b>Experience · Product Design</b>
            <i aria-hidden />
          </div>
        </Reveal>

        <div className="opx-pro-strategy-hero">
          <Reveal y={28}>
            <p className="opx-pro-strategy-kicker">Criterio visual con intención operativa</p>
            <h2>
              Experiencia diseñada para decidir
              <span>sin fricción operativa.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} y={28}>
            <p>
              Esta sección explica criterio, no decora promesas. Cada módulo responde
              una pregunta real: qué comunica, cómo guía, qué evidencia muestra y cuál
              es el siguiente paso del visitante.
            </p>
          </Reveal>
        </div>

        <div className="opx-pro-strategy-body">
          <Reveal className="opx-pro-strategy-rail" y={32}>
            <span className="opx-pro-strategy-rail-label">Design outcomes</span>
            <ul>
              {outcomes.map((item) => (
                <li key={item.value}>
                  <span>{item.label}</span>
                  <strong style={{ color: item.color }}>{item.value}</strong>
                </li>
              ))}
            </ul>
            <div className="opx-pro-strategy-rail-note">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              <p>Jerarquía, contraste y recorrido alineados a decisión rápida.</p>
            </div>
          </Reveal>

          <div className="opx-pro-strategy-pillars">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.tag} delay={index * 0.07} y={24}>
                <article className="opx-pro-strategy-card">
                  <div className="opx-pro-strategy-card-top">
                    <pillar.Icon className="opx-pro-strategy-card-icon" aria-hidden />
                    <span>@{pillar.tag}</span>
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                  <span className="opx-pro-strategy-card-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="opx-pro-strategy-visual" y={36}>
          <div className="opx-pro-strategy-visual-copy">
            <span>Image system · siguiente nivel</span>
            <h3>Activos visuales integrados al lenguaje del producto.</h3>
            <p>
              Renders, diagramas y capturas de interfaz reforzando confianza sin
              romper la lectura operativa. Cada pieza aporta contexto, no ruido.
            </p>
          </div>

          <div className="opx-pro-strategy-visual-grid">
            {visuals.map((visual, index) => (
              <figure
                key={visual.title}
                className={`opx-pro-strategy-visual-item${index === 0 ? " is-featured" : ""}`}
              >
                <div className="opx-pro-strategy-visual-frame">
                  <Image
                    src={visual.src}
                    alt={visual.title}
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 1024px) 280px, 50vw"}
                    className="object-contain p-6"
                  />
                  <span className="opx-pro-strategy-visual-scan" aria-hidden />
                </div>
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <b>{visual.label}</b>
                    <p>{visual.title}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal className="opx-pro-strategy-actions" delay={0.12} y={20}>
          <span>
            <i aria-hidden />
            decidir · observar · auditar · responder
          </span>
          <div>
            <Link href="/seguridad" className="cf-tech-btn">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Ver criterios de seguridad
            </Link>
            <Link href="/status" className="cf-tech-btn cf-tech-btn-accent">
              Revisar continuidad
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
