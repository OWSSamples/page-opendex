"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, Fingerprint, Receipt, Store } from "@/components/icons";
import { useI18n } from "@/i18n/LanguageProvider";

const productMeta = [
  { slug: "auth", Icon: Fingerprint, accent: "#f6821f" },
  { slug: "invoice", Icon: Receipt, accent: "#ff500a" },
  { slug: "kiosko", Icon: Store, accent: "#ff9910" },
];

export default function ProductsClient() {
  const { dictionary } = useI18n();
  const copy = dictionary.productsPage;

  return (
    <section className="opx-products-blueprint relative overflow-hidden border-b border-[#e7e4dc] bg-[#fffaf3]">
      <div aria-hidden className="opx-products-grid" />
      <div aria-hidden className="opx-products-ruler" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="opx-products-overview">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a9a93]">
              {copy.eyebrow}
            </span>
            <h2 className="mt-4 text-balance text-[34px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#1d1d1b] sm:text-[46px]">
              {copy.title}
            </h2>
          </div>
          <p className="text-[15px] leading-8 text-[#4a4a47]">
            {copy.description}
          </p>
        </div>

        <dl className="opx-products-summary">
          {copy.stats.map(([value, label]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <div className="opx-products-board">
          {copy.products.map((product, index) => {
            const meta = productMeta[index];
            const Icon = meta.Icon;

            return (
              <article
                key={meta.slug}
                className="opx-product-blueprint-card"
                style={{ "--accent": meta.accent } as CSSProperties}
              >
                <div className="opx-product-blueprint-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="opx-product-blueprint-main">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="opx-product-blueprint-icon">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <div className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#9a9a93]">
                          {product.tagline}
                        </div>
                        <h2 className="mt-1 text-[25px] font-semibold tracking-[-0.035em] text-[#1d1d1b]">
                          {product.name}
                        </h2>
                      </div>
                    </div>
                    <span className="opx-product-blueprint-status">{product.status}</span>
                  </div>

                  <p className="mt-5 max-w-3xl text-[14.5px] leading-7 text-[#4a4a47]">
                    {product.desc}
                  </p>
                </div>

                <dl className="opx-product-blueprint-spec">
                  <div>
                    <dt>{copy.labels.signal}</dt>
                    <dd>{product.signal}</dd>
                  </div>
                  <div>
                    <dt>{copy.labels.scope}</dt>
                    <dd>{product.scope}</dd>
                  </div>
                </dl>

                <div className="opx-product-blueprint-features">
                  {product.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>

                <div className="opx-product-blueprint-actions">
                  <Link href={`/productos/${meta.slug}`} className="opx-product-blueprint-link">
                    {copy.labels.detail}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link href="/contacto" className="opx-product-blueprint-secondary">
                    {copy.labels.request}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
