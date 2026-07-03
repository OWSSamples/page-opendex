import Image from "next/image";
import type { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
  variant = "default",
  visualAlt = "",
  visualLabel = "Sistema operativo",
  visualSrc = "/opendex-blueprint-control-plane.png",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  variant?: "default" | "security";
  visualAlt?: string;
  visualLabel?: string;
  visualSrc?: string;
}) {
  const isSecurity = variant === "security";

  return (
    <section className={`opx-page-header${isSecurity ? " opx-page-header-security" : ""}`}>
      <div className={`opx-page-header-bg${isSecurity ? " opx-page-header-bg-security" : ""}`} aria-hidden />
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

        {!isSecurity && (
          <div className="opx-page-context-panel" aria-hidden={visualAlt ? undefined : true}>
            <div className="opx-page-trust-rings" aria-hidden />
            <span className="opx-page-trust-badge opx-page-trust-badge-lock" aria-hidden>
              <svg viewBox="0 0 24 24">
                <path d="M7 10V8a5 5 0 0 1 10 0v2" />
                <path d="M6.5 10h11A1.5 1.5 0 0 1 19 11.5v7A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5v-7A1.5 1.5 0 0 1 6.5 10Z" />
                <path d="M12 14v2.5" />
              </svg>
            </span>
            <span className="opx-page-trust-badge opx-page-trust-badge-globe" aria-hidden>
              <svg viewBox="0 0 24 24">
                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                <path d="M3.6 9h16.8" />
                <path d="M3.6 15h16.8" />
                <path d="M12 3c2.1 2.2 3.1 5.2 3.1 9s-1 6.8-3.1 9" />
                <path d="M12 3c-2.1 2.2-3.1 5.2-3.1 9s1 6.8 3.1 9" />
              </svg>
            </span>
            <span className="opx-page-trust-badge opx-page-trust-badge-spark" aria-hidden>
              <svg viewBox="0 0 24 24">
                <path d="M13.4 3.8 15.5 9l5.2 2.1-5.2 2.1-2.1 5.2-2.1-5.2-5.2-2.1L11.3 9l2.1-5.2Z" />
                <path d="m6 3.5.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z" />
              </svg>
            </span>
            <span className="opx-page-trust-badge opx-page-trust-badge-shield" aria-hidden>
              <svg viewBox="0 0 24 24">
                <path d="M12 3 5.5 5.4v5.8c0 4.1 2.6 7.8 6.5 9.5 3.9-1.7 6.5-5.4 6.5-9.5V5.4L12 3Z" />
                <path d="m9.2 12.2 1.9 1.9 3.9-4.2" />
              </svg>
            </span>
            <span className="opx-page-trust-badge opx-page-trust-badge-keys" aria-hidden>
              <svg viewBox="0 0 24 24">
                <path d="M8.5 14.5a4 4 0 1 1 3.4-6.1" />
                <path d="M11.6 8.4 21 8.4" />
                <path d="M18 8.4v3" />
                <path d="M15 8.4v2" />
                <path d="M8.5 17.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path d="M10.8 15.6H20" />
              </svg>
            </span>

            <div className="opx-page-trust-card">
              <Image
                src={visualSrc}
                alt={visualAlt}
                fill
                sizes="(min-width: 1024px) 360px, 82vw"
                className="opx-page-context-image"
                priority={false}
              />
            </div>
            <div className="opx-page-context-metadata">
              <span className="opx-page-context-kicker">{visualLabel}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
