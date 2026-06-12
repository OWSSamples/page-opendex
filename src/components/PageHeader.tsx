import type { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="blueprint-surface relative overflow-hidden border-b border-ink-200 bg-white">
      <div className="hero-glow" aria-hidden />
      <div aria-hidden className="blueprint-grid" />
      <div aria-hidden className="blueprint-ruler blueprint-ruler-top" />
      <div aria-hidden className="blueprint-orbit blueprint-orbit-a" />
      <div aria-hidden className="blueprint-orbit blueprint-orbit-b" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] text-ink-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-ink-600">
              {description}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        <div aria-hidden className="blueprint-panel hidden lg:block">
          <span className="blueprint-panel-kicker">SYSTEM MAP</span>
          <span className="blueprint-panel-tag blueprint-panel-tag-a">identity</span>
          <span className="blueprint-panel-tag blueprint-panel-tag-b">billing</span>
          <span className="blueprint-panel-tag blueprint-panel-tag-c">ops</span>
          <span className="blueprint-panel-node blueprint-panel-node-a" />
          <span className="blueprint-panel-node blueprint-panel-node-b" />
          <span className="blueprint-panel-node blueprint-panel-node-c" />
          <span className="blueprint-panel-line blueprint-panel-line-a" />
          <span className="blueprint-panel-line blueprint-panel-line-b" />
          <span className="blueprint-panel-axis" />
        </div>
      </div>
    </section>
  );
}
