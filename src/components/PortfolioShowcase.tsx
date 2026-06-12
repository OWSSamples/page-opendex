"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import type { LucideIcon } from "@/components/icons";
import { ArrowRight } from "@/components/icons";
import { Reveal } from "@/components/Motion";

export type PortfolioProduct = {
  name: string;
  href: string;
  eyebrow: string;
  desc: string;
  Icon: LucideIcon;
  color: string;
  state: string;
  signal: string;
  scope: string;
  route: string;
  evidence: string;
  status: string;
};

type PortfolioShowcaseProps = {
  products: PortfolioProduct[];
};

const nodePositions = [
  { cx: 88, cy: 108, id: 0 },
  { cx: 312, cy: 96, id: 1 },
  { cx: 96, cy: 268, id: 2 },
];

export default function PortfolioShowcase({ products }: PortfolioShowcaseProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="opx-pro-portfolio-grid">
      <Reveal className="opx-pro-topology" y={32}>
        <div className="opx-pro-topology-chrome">
          <span>Control Plane</span>
          <span className="opx-pro-topology-live">
            <i aria-hidden />
            Live map
          </span>
        </div>

        <div className="opx-pro-topology-canvas">
          <svg viewBox="0 0 400 340" className="opx-pro-topology-svg" aria-hidden>
            <defs>
              <linearGradient id="opx-pro-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f6821f" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#f6821f" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#ff9910" stopOpacity="0.2" />
              </linearGradient>
              <filter id="opx-pro-glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M200 168 C140 168 88 140 88 108"
              fill="none"
              stroke="url(#opx-pro-line)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              className={active === 0 ? "opx-pro-line-active" : ""}
            />
            <path
              d="M200 168 C260 168 312 140 312 96"
              fill="none"
              stroke="url(#opx-pro-line)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              className={active === 1 ? "opx-pro-line-active" : ""}
            />
            <path
              d="M200 168 C168 210 120 250 96 268"
              fill="none"
              stroke="url(#opx-pro-line)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              className={active === 2 ? "opx-pro-line-active" : ""}
            />

            <circle cx="200" cy="168" r="72" fill="rgba(246,130,31,0.04)" stroke="rgba(246,130,31,0.12)" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="200" cy="168" r="48" fill="rgba(255,255,255,0.6)" stroke="rgba(246,130,31,0.25)" strokeWidth="1" />

            {nodePositions.map((node) => (
              <circle
                key={node.id}
                cx={node.cx}
                cy={node.cy}
                r={active === node.id ? 6 : 4}
                fill={products[node.id]?.color ?? "#f6821f"}
                filter="url(#opx-pro-glow)"
                opacity={active === node.id ? 1 : 0.45}
              />
            ))}
          </svg>

          <div className="opx-pro-topology-core">
            <span>Core</span>
            <strong>Opendex</strong>
            <small>Control operativo</small>
          </div>

          {products.map((product, index) => (
            <button
              key={product.name}
              type="button"
              className={`opx-pro-topology-node opx-pro-topology-node-${index + 1}${active === index ? " is-active" : ""}`}
              style={{ "--node-color": product.color } as CSSProperties}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <span className="opx-pro-topology-node-icon">
                <product.Icon className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <small>{product.eyebrow}</small>
                <strong>{product.state}</strong>
              </span>
            </button>
          ))}
        </div>

        <dl className="opx-pro-topology-footer">
          {[
            ["Lectura", "Alcance"],
            ["Base", "Evidencia"],
            ["Ruta", "Detalle"],
          ].map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <div className="opx-pro-product-list">
        {products.map((product, index) => (
          <Reveal key={product.name} delay={index * 0.08} y={28}>
            <Link
              href={product.href}
              className={`opx-pro-product-card${active === index ? " is-active" : ""}`}
              style={{ "--card-color": product.color } as CSSProperties}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <div className="opx-pro-product-card-head">
                <div className="opx-pro-product-card-meta">
                  <span className="opx-pro-product-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="opx-pro-product-icon">
                    <product.Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="opx-pro-product-eyebrow">
                    {product.eyebrow} · {product.state}
                  </span>
                </div>
                <span className="opx-pro-product-status">{product.status}</span>
              </div>

              <h3>{product.name}</h3>
              <p>{product.desc}</p>

              <dl className="opx-pro-product-specs">
                {[
                  ["Señal", product.signal],
                  ["Alcance", product.scope],
                  ["Evidencia", product.evidence],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="opx-pro-product-route">
                <span>{product.route}</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
