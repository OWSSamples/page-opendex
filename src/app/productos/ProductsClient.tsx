"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, FingerprintPattern, ReceiptText, Search, Store, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useMemo, useRef, useState, type CSSProperties } from "react";
import { ButtonLink } from "@/components/Button";
import Card from "@/components/Card";
import { useI18n } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/config";

const productMeta: Array<{ slug: string; Icon: LucideIcon; accent: string }> = [
  { slug: "auth", Icon: FingerprintPattern, accent: "#f36b16" },
  { slug: "invoice", Icon: ReceiptText, accent: "#b66a13" },
  { slug: "kiosko", Icon: Store, accent: "#0f8f7f" },
];

const revealTransition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1],
} as const;

const uiCopy: Record<Locale, {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  heroTitle: string;
  heroDescription: string;
  heroCta: string;
  catalogTitle: string;
  catalogDescription: string;
  filterAll: string;
  filterLabel: string;
  searchLabel: string;
  searchPlaceholder: string;
  resultsPrefix: string;
  emptyTitle: string;
  emptyDescription: string;
}> = {
  es: {
    breadcrumbHome: "Inicio",
    breadcrumbCurrent: "Productos",
    heroTitle: "Servicios y productos de Opendex",
    heroDescription:
      "Explora las líneas que estamos construyendo para identidad, operación fiscal y retail. Cada producto muestra su estado real, alcance y siguiente paso.",
    heroCta: "Hablar con Opendex",
    catalogTitle: "Buscar productos de Opendex",
    catalogDescription: "Filtra por estado o busca por capacidad, producto o contexto operativo.",
    filterAll: "Todos",
    filterLabel: "Filtrar",
    searchLabel: "Buscar productos",
    searchPlaceholder: "Buscar por nombre, estado o capacidad",
    resultsPrefix: "Mostrando",
    emptyTitle: "No encontramos productos con ese criterio.",
    emptyDescription: "Prueba con otra palabra o limpia el filtro activo.",
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Products",
    heroTitle: "Opendex services and products",
    heroDescription:
      "Explore the lines we are building for identity, fiscal operations and retail. Each product shows its real status, scope and next step.",
    heroCta: "Talk to Opendex",
    catalogTitle: "Search Opendex products",
    catalogDescription: "Filter by status or search by capability, product or operational context.",
    filterAll: "All",
    filterLabel: "Filter",
    searchLabel: "Search products",
    searchPlaceholder: "Search by name, status or capability",
    resultsPrefix: "Showing",
    emptyTitle: "No products match that criteria.",
    emptyDescription: "Try another term or clear the active filter.",
  },
  pt: {
    breadcrumbHome: "Início",
    breadcrumbCurrent: "Produtos",
    heroTitle: "Serviços e produtos da Opendex",
    heroDescription:
      "Explore as linhas que estamos construindo para identidade, operação fiscal e varejo. Cada produto mostra seu estado real, escopo e próximo passo.",
    heroCta: "Falar com a Opendex",
    catalogTitle: "Buscar produtos da Opendex",
    catalogDescription: "Filtre por status ou busque por capacidade, produto ou contexto operacional.",
    filterAll: "Todos",
    filterLabel: "Filtrar",
    searchLabel: "Buscar produtos",
    searchPlaceholder: "Buscar por nome, status ou capacidade",
    resultsPrefix: "Mostrando",
    emptyTitle: "Nenhum produto corresponde a esse critério.",
    emptyDescription: "Tente outro termo ou limpe o filtro ativo.",
  },
  fr: {
    breadcrumbHome: "Accueil",
    breadcrumbCurrent: "Produits",
    heroTitle: "Services et produits Opendex",
    heroDescription:
      "Explorez les lignes que nous construisons pour l'identité, les opérations fiscales et le retail. Chaque produit affiche son statut réel, sa portée et la prochaine étape.",
    heroCta: "Parler à Opendex",
    catalogTitle: "Rechercher les produits Opendex",
    catalogDescription: "Filtrez par statut ou cherchez par capacité, produit ou contexte opérationnel.",
    filterAll: "Tous",
    filterLabel: "Filtrer",
    searchLabel: "Rechercher des produits",
    searchPlaceholder: "Rechercher par nom, statut ou capacité",
    resultsPrefix: "Affichage",
    emptyTitle: "Aucun produit ne correspond à ce critère.",
    emptyDescription: "Essayez un autre terme ou effacez le filtre actif.",
  },
  zh: {
    breadcrumbHome: "首页",
    breadcrumbCurrent: "产品",
    heroTitle: "Opendex 服务与产品",
    heroDescription:
      "浏览我们正在构建的身份、财税运营和零售产品线。每个产品都会显示真实状态、范围和下一步。",
    heroCta: "联系 Opendex",
    catalogTitle: "搜索 Opendex 产品",
    catalogDescription: "按状态筛选，或按能力、产品和运营场景搜索。",
    filterAll: "全部",
    filterLabel: "筛选",
    searchLabel: "搜索产品",
    searchPlaceholder: "按名称、状态或能力搜索",
    resultsPrefix: "显示",
    emptyTitle: "没有匹配该条件的产品。",
    emptyDescription: "请尝试其他关键词或清除当前筛选。",
  },
};

export default function ProductsClient() {
  const { dictionary, locale } = useI18n();
  const copy = dictionary.productsPage;
  const ui = uiCopy[locale];
  const reduceMotion = useReducedMotion();
  const catalogRef = useRef<HTMLDivElement | null>(null);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const statuses = useMemo(
    () => Array.from(new Set(copy.products.map((product) => product.status))),
    [copy.products]
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return copy.products.filter((product) => {
      const matchesStatus = statusFilter === "all" || product.status === statusFilter;
      const searchable = [
        product.name,
        product.tagline,
        product.desc,
        product.status,
        product.signal,
        product.scope,
        ...product.features,
      ].join(" ").toLowerCase();

      return matchesStatus && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [copy.products, query, statusFilter]);

  useGSAP(
    () => {
      if (reduceMotion || !catalogRef.current) {
        return;
      }

      const cards = gsap.utils.toArray<HTMLElement>("[data-product-card]", catalogRef.current);

      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 12 },
        {
          autoAlpha: 1,
          y: 0,
          clearProps: "opacity,visibility,transform",
          duration: 0.42,
          ease: "power3.out",
          stagger: 0.055,
        }
      );
    },
    { dependencies: [filteredProducts.length, query, reduceMotion, statusFilter], scope: catalogRef, revertOnUpdate: true }
  );

  return (
    <section
      aria-labelledby="products-heading"
      className="relative overflow-hidden border-b border-[#d8d5cf] bg-white text-[#16191f]"
    >
      <div className="border-b border-[#e3e0da] bg-[linear-gradient(105deg,#fff2f4_0%,#fde3ef_32%,#f8f1fb_58%,#ffffff_100%)]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            className="max-w-[680px]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={revealTransition}
          >
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] font-semibold text-[#394150]">
              <Link href="/" className="border-b border-[#16191f] text-[#16191f]">
                {ui.breadcrumbHome}
              </Link>
              <span aria-hidden="true">›</span>
              <span>{ui.breadcrumbCurrent}</span>
            </nav>

            <h1
              id="products-heading"
              className="mt-9 text-balance text-[42px] font-bold leading-[1.05] tracking-[0] text-[#16191f] sm:text-[56px]"
            >
              {ui.heroTitle}
            </h1>
            <p className="mt-4 max-w-[610px] text-[18px] leading-[1.55] text-[#28303d]">
              {ui.heroDescription}
            </p>
            <ButtonLink
              href="/contacto"
              className="mt-8"
              icon={<ArrowRight className="h-4 w-4" aria-hidden />}
              size="lg"
              variant="primary"
            >
              {ui.heroCta}
            </ButtonLink>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-3">
          <h2 className="text-[32px] font-bold leading-tight tracking-[0] text-[#16191f] sm:text-[40px]">
            {ui.catalogTitle}
          </h2>
          <p className="max-w-[700px] text-[15px] leading-7 text-[#5f6673]">
            {ui.catalogDescription}
          </p>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex min-h-11 items-center rounded-full border border-[#16191f] px-5 text-[15px] font-bold text-[#16191f]">
              {ui.filterLabel}
            </span>
            <button
              type="button"
              onClick={() => setStatusFilter("all")}
              className={`inline-flex min-h-10 items-center rounded-full border px-4 text-[13px] font-bold transition ${
                statusFilter === "all"
                  ? "border-[#16191f] bg-[#16191f] text-white"
                  : "border-[#c9cdd3] bg-white text-[#394150] hover:border-[#16191f]"
              }`}
            >
              {ui.filterAll}
            </button>
            {statuses.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setStatusFilter(status)}
                className={`inline-flex min-h-10 items-center rounded-full border px-4 text-[13px] font-bold transition ${
                  statusFilter === status
                    ? "border-[#16191f] bg-[#16191f] text-white"
                    : "border-[#c9cdd3] bg-white text-[#394150] hover:border-[#16191f]"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <label className="relative block">
            <span className="sr-only">{ui.searchLabel}</span>
            <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#16191f]" aria-hidden />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={ui.searchPlaceholder}
              className="h-12 w-full border-0 border-b border-[#c9cdd3] bg-transparent pl-14 pr-4 text-[15px] text-[#16191f] outline-none transition placeholder:text-[#737b87] focus:border-[#16191f]"
              type="search"
            />
          </label>
        </div>

        <div className="mt-8 font-mono text-[12px] text-[#394150]">
          {ui.resultsPrefix} {filteredProducts.length} / {copy.products.length}
        </div>

        {filteredProducts.length > 0 ? (
          <div ref={catalogRef} className="mt-6 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => {
              const index = copy.products.findIndex((item) => item.name === product.name);
              const meta = productMeta[index] ?? productMeta[0];
              const Icon = meta.Icon;
              const productNumber = String(index + 1).padStart(2, "0");

              return (
                <Card
                  asChild
                  key={product.name}
                  density="none"
                  className="group min-h-[340px] rounded-[20px] border-[#ded9cf] bg-white shadow-[0_22px_80px_-66px_rgba(22,25,31,0.7)] hover:-translate-y-0.5 hover:border-[#b8aa9a] hover:shadow-[0_34px_90px_-70px_rgba(22,25,31,0.8)]"
                >
                  <article
                    data-product-card
                    className="relative flex h-full flex-col overflow-hidden rounded-[20px]"
                    style={{ "--accent": meta.accent } as CSSProperties}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)]" aria-hidden="true" />
                    <div
                      className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full border border-[#ece8df] bg-[#faf7f1]"
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute right-7 top-7 h-10 w-px rotate-45 bg-[var(--accent)] opacity-35"
                      aria-hidden="true"
                    />

                    <div className="relative flex items-start justify-between gap-4 px-5 pt-5">
                      <div className="flex min-w-0 items-center gap-3">
                        <Icon className="h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden />
                        <div className="min-w-0">
                          <p className="truncate font-mono text-[10px] font-bold uppercase tracking-[0] text-[var(--accent)]">
                            {product.tagline}
                          </p>
                          <p className="mt-1 font-mono text-[11px] text-[#8a8176]">{productNumber}</p>
                        </div>
                      </div>
                      <span className="rounded-full border border-[#ded9cf] bg-[#faf8f4] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0] text-[#394150]">
                        {product.status}
                      </span>
                    </div>

                    <div className="relative flex flex-1 flex-col px-5 py-5">
                      <h3 className="max-w-[270px] text-[21px] font-bold leading-[1.08] tracking-[0] text-[#16191f]">
                        {product.name}
                      </h3>

                      <p className="mt-3 overflow-hidden [display:-webkit-box] text-[14px] leading-6 text-[#4b5563] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                        {product.desc}
                      </p>

                      <div className="mt-5 grid gap-3 border-y border-[#ece8df] py-4">
                        <dl className="grid grid-cols-[82px_minmax(0,1fr)] gap-3">
                          <dt className="font-mono text-[10px] font-bold uppercase tracking-[0] text-[#737b87]">
                            {copy.labels.signal}
                          </dt>
                          <dd className="text-[13px] font-semibold leading-5 text-[#16191f]">{product.signal}</dd>
                        </dl>
                        <dl className="grid grid-cols-[82px_minmax(0,1fr)] gap-3">
                          <dt className="font-mono text-[10px] font-bold uppercase tracking-[0] text-[#737b87]">
                            {copy.labels.scope}
                          </dt>
                          <dd className="overflow-hidden [display:-webkit-box] text-[13px] leading-5 text-[#394150] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                            {product.scope}
                          </dd>
                        </dl>
                      </div>

                      <div className="mt-4 grid gap-2">
                        {product.features.slice(0, 3).map((feature) => (
                          <div key={feature} className="flex items-start gap-2 text-[13px] leading-5 text-[#394150]">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative mt-auto grid grid-cols-2 border-t border-[#ece8df] bg-[#fbfaf7]">
                      <Link
                        href={`/productos/${meta.slug}`}
                        className="inline-flex min-h-12 items-center justify-center gap-2 px-4 text-[13px] font-bold text-[#16191f] transition hover:bg-[#f4f1ea] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-[#f36b16]"
                      >
                        {copy.labels.detail}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link
                        href="/contacto"
                        className="inline-flex min-h-12 items-center justify-center border-l border-[#ece8df] px-4 text-[13px] font-bold text-[#16191f] transition hover:bg-[#f4f1ea] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-[#f36b16]"
                      >
                        {copy.labels.request}
                      </Link>
                    </div>
                  </article>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="mt-6 rounded-[18px] border border-[#d8d5cf] bg-[#f7f7f5] p-8">
            <h3 className="text-[20px] font-bold text-[#16191f]">{ui.emptyTitle}</h3>
            <p className="mt-2 text-[15px] leading-7 text-[#5f6673]">{ui.emptyDescription}</p>
          </div>
        )}
      </div>
    </section>
  );
}
