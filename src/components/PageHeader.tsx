import Image from "next/image";
import type { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
  visualAlt = "",
  visualLabel = "Sistema operativo",
  visualSrc = "/opendex-blueprint-control-plane.png",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  visualAlt?: string;
  visualLabel?: string;
  visualSrc?: string;
}) {
  return (
    <section className="opx-page-header">
      <div className="opx-page-header-bg" aria-hidden />
      <div className="opx-page-header-inner">
        <div className="opx-page-header-copy">
          {eyebrow && <span className="opx-page-kicker">{eyebrow}</span>}
          <h1 className="opx-page-title text-balance">
            {title}
          </h1>
          {description && (
            <p className="opx-page-description">
              {description}
            </p>
          )}
          {children && <div className="opx-page-actions">{children}</div>}
        </div>

        <div className="opx-page-context-panel" aria-hidden={visualAlt ? undefined : true}>
          <Image
            src={visualSrc}
            alt={visualAlt}
            fill
            sizes="(min-width: 1024px) 340px, 100vw"
            className="opx-page-context-image"
            priority={false}
          />
          <div className="opx-page-context-overlay" aria-hidden />
          <div className="opx-page-context-metadata">
            <span className="opx-page-context-kicker">{visualLabel}</span>
            <div className="opx-page-context-chips">
              <span>Contexto</span>
              <span>Criterio</span>
              <span>Continuidad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
