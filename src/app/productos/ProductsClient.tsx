"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Badge, type BadgeVariant } from "@cloudflare/kumo/components/badge";
import { Button } from "@cloudflare/kumo/components/button";
import { Input } from "@cloudflare/kumo/components/input";
import { useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useMemo, useRef, useState, type CSSProperties } from "react";
import { ButtonLink } from "@/components/Button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useI18n } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/config";

type ProductMeta = {
  slug: string;
  accent: string;
  accentSoft: string;
  code: string;
  domain: string;
};

const productMeta: ProductMeta[] = [
  {
    slug: "auth",
    accent: "#f6821f",
    accentSoft: "#fff3e7",
    code: "ID",
    domain: "identity",
  },
  {
    slug: "invoice",
    accent: "#6d4df1",
    accentSoft: "#f2efff",
    code: "DOC",
    domain: "documents",
  },
  {
    slug: "kiosko",
    accent: "#0f8f7f",
    accentSoft: "#edf8f5",
    code: "OPS",
    domain: "operations",
  },
];

const getStatusBadgeVariant = (slug: string): BadgeVariant => {
  switch (slug) {
    case "invoice":
      return "neutral";
    case "kiosko":
      return "beta";
    default:
      return "warning";
  }
};

const getStatusBadgeClassName = (slug: string, className = "") =>
  slug === "kiosko"
    ? `border border-dashed border-kumo-brand bg-transparent text-kumo-link ${className}`
    : className;


const uiCopy: Record<
  Locale,
  {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    heroKicker: string;
    heroTitle: string;
    heroDescription: string;
    heroCta: string;
    secondaryCta: string;
    systemTitle: string;
    systemDescription: string;
    catalogEyebrow: string;
    catalogTitle: string;
    catalogDescription: string;
    filterAll: string;
    filterLabel: string;
    searchLabel: string;
    searchPlaceholder: string;
    resultsPrefix: string;
    emptyTitle: string;
    emptyDescription: string;
    comparisonTitle: string;
    comparisonDescription: string;
    adoptionTitle: string;
    adoptionDescription: string;
    finalTitle: string;
    finalDescription: string;
    tableHeaders: [string, string, string, string];
    capabilityCards: Array<{ title: string; description: string; detail: string }>;
    processSteps: Array<{ title: string; description: string }>;
  }
> = {
  es: {
    breadcrumbHome: "Inicio",
    breadcrumbCurrent: "Productos",
    heroKicker: "Portafolio de plataforma",
    heroTitle: "Productos para operar identidad, documentos y continuidad.",
    heroDescription:
      "Una vista clara del portafolio Opendex: qué línea resuelve cada frente, cuál es su estado real y qué camino seguir para evaluar una implementación seria.",
    heroCta: "Hablar con Opendex",
    secondaryCta: "Ver estado",
    systemTitle: "Una base común para decisiones operativas.",
    systemDescription:
      "Cada producto conserva una responsabilidad distinta, pero comparte una lectura común: contexto, evidencia, permisos, continuidad y trazabilidad.",
    catalogEyebrow: "Catálogo operativo",
    catalogTitle: "Explora las líneas disponibles",
    catalogDescription: "Filtra por estado o busca por capacidad, producto o contexto operativo.",
    filterAll: "Todos",
    filterLabel: "Filtrar",
    searchLabel: "Buscar productos",
    searchPlaceholder: "Buscar por nombre, estado o capacidad",
    resultsPrefix: "Mostrando",
    emptyTitle: "No encontramos productos con ese criterio.",
    emptyDescription: "Prueba con otra palabra o limpia el filtro activo.",
    comparisonTitle: "Comparación por capacidad",
    comparisonDescription:
      "La comparación evita vender módulos como piezas aisladas: muestra qué cubre cada línea y dónde conviene profundizar.",
    adoptionTitle: "Camino de evaluación",
    adoptionDescription:
      "Antes de implementar, el equipo debe entender alcance, dependencias, riesgos y criterios de operación.",
    finalTitle: "¿Quieres revisar qué línea encaja con tu operación?",
    finalDescription:
      "Podemos revisar el contexto actual de tu equipo y ayudarte a decidir si conviene iniciar por identidad, documentos u operación.",
    tableHeaders: ["Producto", "Señal", "Alcance", "Estado"],
    capabilityCards: [
      {
        title: "Responsabilidad clara",
        description: "Cada línea tiene un objetivo propio y evita mezclar flujos que requieren controles distintos.",
        detail: "menos ambigüedad",
      },
      {
        title: "Lectura para equipos",
        description: "Seguridad, operación y dirección pueden leer estado, alcance y siguiente paso sin depender de conversaciones dispersas.",
        detail: "mejor coordinación",
      },
      {
        title: "Evidencia operativa",
        description: "Las decisiones importantes necesitan contexto, historial y responsables visibles antes de escalar.",
        detail: "auditoría preparada",
      },
      {
        title: "Evolución por etapas",
        description: "El portafolio permite avanzar por prioridad sin forzar una adopción completa desde el primer día.",
        detail: "implementación gradual",
      },
    ],
    processSteps: [
      { title: "Diagnóstico", description: "Identificar usuarios, documentos, sedes, riesgos y sistemas que ya existen." },
      { title: "Selección", description: "Elegir la línea con mayor impacto inicial sin romper flujos actuales." },
      { title: "Piloto", description: "Validar permisos, responsables, estados y operación con un grupo controlado." },
      { title: "Escala", description: "Documentar criterios, preparar soporte y abrir adopción por equipos." },
    ],
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Products",
    heroKicker: "Platform portfolio",
    heroTitle: "Products for identity, documents and operational continuity.",
    heroDescription:
      "A clear view of the Opendex portfolio: what each line solves, its real state and the path to evaluate a serious implementation.",
    heroCta: "Talk to Opendex",
    secondaryCta: "View status",
    systemTitle: "A shared base for operational decisions.",
    systemDescription:
      "Each product keeps a distinct responsibility while sharing one operating lens: context, evidence, permissions, continuity and traceability.",
    catalogEyebrow: "Operational catalog",
    catalogTitle: "Explore available lines",
    catalogDescription: "Filter by status or search by capability, product or operational context.",
    filterAll: "All",
    filterLabel: "Filter",
    searchLabel: "Search products",
    searchPlaceholder: "Search by name, status or capability",
    resultsPrefix: "Showing",
    emptyTitle: "No products match that criteria.",
    emptyDescription: "Try another term or clear the active filter.",
    comparisonTitle: "Capability comparison",
    comparisonDescription:
      "The comparison avoids selling modules as isolated pieces: it shows what each line covers and where to go deeper.",
    adoptionTitle: "Evaluation path",
    adoptionDescription:
      "Before implementation, the team should understand scope, dependencies, risks and operating criteria.",
    finalTitle: "Want to review which line fits your operation?",
    finalDescription:
      "We can review your team's current context and help decide whether to start with identity, documents or operations.",
    tableHeaders: ["Product", "Signal", "Scope", "Status"],
    capabilityCards: [
      { title: "Clear responsibility", description: "Each line has its own goal and avoids mixing flows that need different controls.", detail: "less ambiguity" },
      { title: "Team-readable", description: "Security, operations and leadership can read state, scope and next step without scattered conversations.", detail: "better coordination" },
      { title: "Operational evidence", description: "Important decisions need visible context, history and owners before they scale.", detail: "audit-ready" },
      { title: "Stage-based evolution", description: "The portfolio can advance by priority without forcing full adoption on day one.", detail: "gradual rollout" },
    ],
    processSteps: [
      { title: "Diagnose", description: "Identify users, documents, locations, risks and systems already in place." },
      { title: "Select", description: "Choose the line with the highest initial impact without breaking current flows." },
      { title: "Pilot", description: "Validate permissions, owners, states and operation with a controlled group." },
      { title: "Scale", description: "Document criteria, prepare support and open adoption by teams." },
    ],
  },
  pt: {
    breadcrumbHome: "Início",
    breadcrumbCurrent: "Produtos",
    heroKicker: "Portfólio de plataforma",
    heroTitle: "Produtos para identidade, documentos e continuidade operacional.",
    heroDescription:
      "Uma visão clara do portfólio Opendex: o que cada linha resolve, qual é seu estado real e qual caminho seguir para avaliar uma implementação séria.",
    heroCta: "Falar com a Opendex",
    secondaryCta: "Ver status",
    systemTitle: "Uma base comum para decisões operacionais.",
    systemDescription:
      "Cada produto mantém uma responsabilidade distinta, mas compartilha uma leitura comum: contexto, evidência, permissões, continuidade e rastreabilidade.",
    catalogEyebrow: "Catálogo operacional",
    catalogTitle: "Explore as linhas disponíveis",
    catalogDescription: "Filtre por status ou busque por capacidade, produto ou contexto operacional.",
    filterAll: "Todos",
    filterLabel: "Filtrar",
    searchLabel: "Buscar produtos",
    searchPlaceholder: "Buscar por nome, status ou capacidade",
    resultsPrefix: "Mostrando",
    emptyTitle: "Nenhum produto corresponde a esse critério.",
    emptyDescription: "Tente outro termo ou limpe o filtro ativo.",
    comparisonTitle: "Comparação por capacidade",
    comparisonDescription:
      "A comparação evita vender módulos como peças isoladas: mostra o que cada linha cobre e onde aprofundar.",
    adoptionTitle: "Caminho de avaliação",
    adoptionDescription: "Antes de implementar, a equipe deve entender escopo, dependências, riscos e critérios de operação.",
    finalTitle: "Quer revisar qual linha se encaixa na sua operação?",
    finalDescription:
      "Podemos revisar o contexto atual da sua equipe e ajudar a decidir se convém iniciar por identidade, documentos ou operação.",
    tableHeaders: ["Produto", "Sinal", "Escopo", "Estado"],
    capabilityCards: [
      { title: "Responsabilidade clara", description: "Cada linha tem um objetivo próprio e evita misturar fluxos que exigem controles distintos.", detail: "menos ambiguidade" },
      { title: "Leitura para equipes", description: "Segurança, operação e liderança entendem estado, escopo e próximo passo sem conversas dispersas.", detail: "melhor coordenação" },
      { title: "Evidência operacional", description: "Decisões importantes precisam de contexto, histórico e responsáveis visíveis antes de escalar.", detail: "auditoria preparada" },
      { title: "Evolução por etapas", description: "O portfólio permite avançar por prioridade sem forçar adoção completa no primeiro dia.", detail: "implementação gradual" },
    ],
    processSteps: [
      { title: "Diagnóstico", description: "Identificar usuários, documentos, sedes, riscos e sistemas existentes." },
      { title: "Seleção", description: "Escolher a linha de maior impacto inicial sem quebrar fluxos atuais." },
      { title: "Piloto", description: "Validar permissões, responsáveis, estados e operação com um grupo controlado." },
      { title: "Escala", description: "Documentar critérios, preparar suporte e abrir adoção por equipes." },
    ],
  },
  fr: {
    breadcrumbHome: "Accueil",
    breadcrumbCurrent: "Produits",
    heroKicker: "Portefeuille de plateforme",
    heroTitle: "Produits pour l'identité, les documents et la continuité opérationnelle.",
    heroDescription:
      "Une vue claire du portefeuille Opendex : ce que chaque ligne résout, son état réel et le chemin pour évaluer une mise en œuvre sérieuse.",
    heroCta: "Parler à Opendex",
    secondaryCta: "Voir le statut",
    systemTitle: "Une base commune pour les décisions opérationnelles.",
    systemDescription:
      "Chaque produit garde une responsabilité distincte tout en partageant une même lecture : contexte, preuve, permissions, continuité et traçabilité.",
    catalogEyebrow: "Catalogue opérationnel",
    catalogTitle: "Explorer les lignes disponibles",
    catalogDescription: "Filtrez par statut ou cherchez par capacité, produit ou contexte opérationnel.",
    filterAll: "Tous",
    filterLabel: "Filtrer",
    searchLabel: "Rechercher des produits",
    searchPlaceholder: "Rechercher par nom, statut ou capacité",
    resultsPrefix: "Affichage",
    emptyTitle: "Aucun produit ne correspond à ce critère.",
    emptyDescription: "Essayez un autre terme ou effacez le filtre actif.",
    comparisonTitle: "Comparaison par capacité",
    comparisonDescription:
      "La comparaison évite de vendre des modules isolés : elle montre ce que chaque ligne couvre et où approfondir.",
    adoptionTitle: "Chemin d'évaluation",
    adoptionDescription:
      "Avant la mise en œuvre, l'équipe doit comprendre la portée, les dépendances, les risques et les critères opérationnels.",
    finalTitle: "Vous voulez revoir quelle ligne convient à votre opération ?",
    finalDescription:
      "Nous pouvons revoir le contexte actuel de votre équipe et décider s'il faut commencer par l'identité, les documents ou les opérations.",
    tableHeaders: ["Produit", "Signal", "Portée", "Statut"],
    capabilityCards: [
      { title: "Responsabilité claire", description: "Chaque ligne a son objectif et évite de mélanger des flux qui nécessitent des contrôles différents.", detail: "moins d'ambiguïté" },
      { title: "Lisible par les équipes", description: "Sécurité, opérations et direction lisent l'état, la portée et l'étape suivante sans échanges dispersés.", detail: "meilleure coordination" },
      { title: "Preuve opérationnelle", description: "Les décisions importantes exigent contexte, historique et responsables visibles avant de passer à l'échelle.", detail: "audit prêt" },
      { title: "Évolution par étapes", description: "Le portefeuille avance par priorité sans imposer une adoption complète dès le premier jour.", detail: "déploiement progressif" },
    ],
    processSteps: [
      { title: "Diagnostic", description: "Identifier utilisateurs, documents, sites, risques et systèmes existants." },
      { title: "Sélection", description: "Choisir la ligne à plus fort impact initial sans casser les flux actuels." },
      { title: "Pilote", description: "Valider permissions, responsables, états et opération avec un groupe contrôlé." },
      { title: "Échelle", description: "Documenter les critères, préparer le support et ouvrir l'adoption par équipes." },
    ],
  },
  zh: {
    breadcrumbHome: "首页",
    breadcrumbCurrent: "产品",
    heroKicker: "平台产品组合",
    heroTitle: "面向身份、文档和运营连续性的产品。",
    heroDescription:
      "清晰查看 Opendex 产品组合：每条产品线解决什么问题、真实状态是什么，以及如何评估正式实施。",
    heroCta: "联系 Opendex",
    secondaryCta: "查看状态",
    systemTitle: "运营决策的共同基础。",
    systemDescription: "每个产品保持独立职责，同时共享同一套运营视角：上下文、证据、权限、连续性和可追踪性。",
    catalogEyebrow: "运营目录",
    catalogTitle: "浏览可用产品线",
    catalogDescription: "按状态筛选，或按能力、产品和运营场景搜索。",
    filterAll: "全部",
    filterLabel: "筛选",
    searchLabel: "搜索产品",
    searchPlaceholder: "按名称、状态或能力搜索",
    resultsPrefix: "显示",
    emptyTitle: "没有匹配该条件的产品。",
    emptyDescription: "请尝试其他关键词或清除当前筛选。",
    comparisonTitle: "按能力比较",
    comparisonDescription: "比较表避免把模块当作孤立组件销售；它展示每条产品线覆盖什么，以及哪里需要深入。",
    adoptionTitle: "评估路径",
    adoptionDescription: "实施前，团队应理解范围、依赖、风险和运营标准。",
    finalTitle: "想确认哪条产品线适合你的运营吗？",
    finalDescription: "我们可以查看你团队的当前场景，并帮助判断应从身份、文档还是运营开始。",
    tableHeaders: ["产品", "信号", "范围", "状态"],
    capabilityCards: [
      { title: "清晰职责", description: "每条产品线都有独立目标，避免混合需要不同控制的流程。", detail: "减少歧义" },
      { title: "团队可读", description: "安全、运营和管理层可以理解状态、范围和下一步，而无需分散沟通。", detail: "更好协作" },
      { title: "运营证据", description: "重要决策在扩展前需要可见的上下文、历史和负责人。", detail: "审计就绪" },
      { title: "分阶段演进", description: "产品组合可按优先级推进，而不要求第一天完整采用。", detail: "渐进部署" },
    ],
    processSteps: [
      { title: "诊断", description: "识别已有用户、文档、位置、风险和系统。" },
      { title: "选择", description: "选择初始影响最大的产品线，同时不破坏当前流程。" },
      { title: "试点", description: "在受控团队中验证权限、负责人、状态和运营。" },
      { title: "扩展", description: "记录标准、准备支持，并按团队开放采用。" },
    ],
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

  const products = useMemo(
    () =>
      copy.products.map((product, index) => ({
        ...product,
        meta: productMeta[index] ?? productMeta[0],
        number: String(index + 1).padStart(2, "0"),
      })),
    [copy.products]
  );

  const statuses = useMemo(
    () => Array.from(new Set(copy.products.map((product) => product.status))),
    [copy.products]
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesStatus = statusFilter === "all" || product.status === statusFilter;
      const searchable = [
        product.name,
        product.tagline,
        product.desc,
        product.status,
        product.signal,
        product.scope,
        product.meta.domain,
        ...product.features,
      ]
        .join(" ")
        .toLowerCase();

      return matchesStatus && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [products, query, statusFilter]);

  useGSAP(
    () => {
      if (reduceMotion || !catalogRef.current) {
        return;
      }

      const cards = gsap.utils.toArray<HTMLElement>("[data-product-card]", catalogRef.current);

      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 14 },
        {
          autoAlpha: 1,
          y: 0,
          clearProps: "opacity,visibility,transform",
          duration: 0.48,
          ease: "power3.out",
          stagger: 0.06,
        }
      );
    },
    { dependencies: [filteredProducts.length, query, reduceMotion, statusFilter], scope: catalogRef, revertOnUpdate: true }
  );

  return (
    <main className="opx-products-page">
      <section
        aria-labelledby="products-heading"
        className="relative overflow-hidden border-b border-[#e2e8f0] bg-[#f8fafc]"
      >
        <div aria-hidden className="absolute inset-0">
          <div className="absolute left-1/2 top-[-180px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(91,33,182,0.14),transparent_68%)] blur-3xl" />
          <div className="absolute right-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(246,130,31,0.12),transparent_68%)] blur-3xl" />
        </div>

        <div className="opx-layout-shell relative pb-16 pt-24 lg:pb-20 lg:pt-32">
          <div className="max-w-[900px]">
            <h1
              id="products-heading"
              className="max-w-[850px] text-balance text-[44px] font-semibold leading-[0.96] tracking-[-0.045em] text-[#0f172a] sm:text-[64px] lg:text-[78px]"
            >
              {ui.heroTitle}
            </h1>
            <p className="mt-7 max-w-[720px] text-[17px] leading-8 text-[#475569] sm:text-[18px]">
              {ui.heroDescription}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contacto" size="lg" variant="primary">
                {ui.heroCta}
              </ButtonLink>
              <ButtonLink href="/status" size="lg" variant="inverse">
                {ui.secondaryCta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e2e8f0] bg-white">
        <div className="opx-layout-shell py-12">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.42fr)] lg:items-end">
            <div>
              <h2 className="text-balance text-[34px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#0f172a] sm:text-[48px]">
                {ui.catalogTitle}
              </h2>
              <p className="mt-4 max-w-[760px] text-[16px] leading-7 text-[#64748b]">{ui.catalogDescription}</p>
            </div>

            <Input
              label={ui.searchLabel}
              aria-label={ui.searchLabel}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={ui.searchPlaceholder}
              className="w-full"
              type="search"
              size="lg"
            />
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-2" role="group" aria-label={ui.filterLabel}>
            <span className="mr-1 text-[13px] font-semibold text-[#64748b]">
              {ui.filterLabel}
            </span>
            <Button
              type="button"
              onClick={() => setStatusFilter("all")}
              aria-pressed={statusFilter === "all"}
              size="lg"
              variant={statusFilter === "all" ? "primary" : "secondary"}
            >
              {ui.filterAll}
            </Button>
            {statuses.map((status) => (
              <Button
                key={status}
                type="button"
                onClick={() => setStatusFilter(status)}
                aria-pressed={statusFilter === status}
                size="lg"
                variant={statusFilter === status ? "primary" : "secondary"}
              >
                {status}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc]">
        <div className="opx-layout-shell py-14 lg:py-20">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-[13px] font-semibold text-[#64748b]">
              {ui.resultsPrefix} {filteredProducts.length} / {copy.products.length}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div ref={catalogRef} className="grid gap-5 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <article
                  key={product.name}
                  data-product-card
                  className="group relative flex min-h-[500px] flex-col overflow-hidden rounded-[15px] bg-kumo-elevated text-base ring ring-kumo-hairline transition hover:-translate-y-0.5"
                  style={
                    {
                      "--product-accent": product.meta.accent,
                      "--product-soft": product.meta.accentSoft,
                    } as CSSProperties
                  }
                >
                  <GlowingEffect
                    blur={0}
                    borderWidth={2}
                    spread={72}
                    glow
                    proximity={64}
                    inactiveZone={0.01}
                    disabled={false}
                  />
                  <div className="-my-2 relative isolate flex flex-col gap-6 overflow-hidden bg-kumo-elevated p-4 text-base font-medium text-kumo-subtle">
                    <img
                      src="/images/opendex-card-outline-logo.png"
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute right-[-22px] top-[-24px] z-[-1] h-[180px] w-[180px] object-contain opacity-[0.18] mix-blend-multiply"
                    />
                    <div className="flex items-start justify-end gap-4">
                      <Badge
                        variant={getStatusBadgeVariant(product.meta.slug)}
                        className={getStatusBadgeClassName(product.meta.slug)}
                      >
                        {product.status}
                      </Badge>
                    </div>
                    <h3 className="mt-7 max-w-[320px] text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#0f172a]">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-[14px] font-medium text-[#64748b]">{product.tagline}</p>
                  </div>

                  <div className="relative flex flex-1 flex-col gap-2 overflow-hidden rounded-[13px] bg-kumo-base p-4 pr-3 text-inherit no-underline ring ring-kumo-fill">
                    <p className="text-[15px] leading-7 text-[#475569]">{product.desc}</p>

                    <dl className="mt-7 grid gap-4 border-y border-[#e2e8f0] py-5">
                      <div>
                        <dt className="text-[12px] font-semibold text-[#64748b]">{copy.labels.signal}</dt>
                        <dd className="mt-1 text-[14px] font-semibold leading-6 text-[#0f172a]">{product.signal}</dd>
                      </div>
                      <div>
                        <dt className="text-[12px] font-semibold text-[#64748b]">{copy.labels.scope}</dt>
                        <dd className="mt-1 text-[14px] leading-6 text-[#475569]">{product.scope}</dd>
                      </div>
                    </dl>

                    <div className="mt-6 grid gap-2">
                      {product.features.slice(0, 4).map((feature) => (
                        <p key={feature} className="text-[13px] leading-5 text-[#475569]">
                          {feature}
                        </p>
                      ))}
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-2 pt-8">
                      <Link href={`/productos/${product.meta.slug}`} className="btn btn-primary min-h-[40px] px-3 text-[12px]">
                        {copy.labels.detail}
                      </Link>
                      <Link href="/contacto" className="btn btn-ghost min-h-[40px] px-3 text-[12px]">
                        {copy.labels.request}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[28px] border border-[#e2e8f0] bg-white p-8">
              <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-[#0f172a]">{ui.emptyTitle}</h3>
              <p className="mt-2 text-[15px] leading-7 text-[#64748b]">{ui.emptyDescription}</p>
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-[#e2e8f0] bg-white">
        <div className="opx-layout-shell py-16">
          <div className="grid gap-6 lg:grid-cols-[0.44fr_0.76fr] lg:items-end">
            <h2 className="text-balance text-[34px] font-semibold leading-[1.03] tracking-[-0.035em] text-[#0f172a] sm:text-[52px]">
              {ui.comparisonTitle}
            </h2>
            <p className="max-w-[690px] text-[16px] leading-7 text-[#64748b]">{ui.comparisonDescription}</p>
          </div>

          <div className="mt-9 overflow-hidden rounded-[30px] border border-[#e2e8f0] bg-white shadow-[0_24px_80px_-66px_rgba(15,23,42,0.48)]">
            <div className="hidden grid-cols-[0.7fr_0.82fr_1.12fr_0.42fr] border-b border-[#e2e8f0] bg-[#f8fafc] text-[13px] font-semibold text-[#64748b] lg:grid">
              {ui.tableHeaders.map((header) => (
                <div key={header} className="border-r border-[#e2e8f0] px-5 py-4 last:border-r-0">
                  {header}
                </div>
              ))}
            </div>
            {products.map((product) => (
              <div key={product.name} className="grid gap-4 border-b border-[#e2e8f0] bg-white p-5 last:border-b-0 lg:grid-cols-[0.7fr_0.82fr_1.12fr_0.42fr] lg:gap-0 lg:p-0">
                <div className="lg:border-r lg:border-[#e2e8f0] lg:p-5">
                  <p className="text-[15px] font-semibold text-[#0f172a]">{product.name}</p>
                  <p className="mt-1 text-[12px] font-semibold text-[var(--product-accent)]" style={{ "--product-accent": product.meta.accent } as CSSProperties}>
                    {product.meta.domain}
                  </p>
                </div>
                <div className="text-[14px] leading-6 text-[#475569] lg:border-r lg:border-[#e2e8f0] lg:p-5">{product.signal}</div>
                <div className="text-[14px] leading-6 text-[#475569] lg:border-r lg:border-[#e2e8f0] lg:p-5">{product.scope}</div>
                <div className="lg:p-5">
                  <Badge
                    variant={getStatusBadgeVariant(product.meta.slug)}
                    className={getStatusBadgeClassName(product.meta.slug)}
                  >
                    {product.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc]">
        <div className="opx-layout-shell py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <h2 className="text-balance text-[34px] font-semibold leading-[1.03] tracking-[-0.035em] text-[#0f172a] sm:text-[54px]">
                {ui.adoptionTitle}
              </h2>
              <p className="mt-4 max-w-[590px] text-[16px] leading-7 text-[#64748b]">{ui.adoptionDescription}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {ui.processSteps.map((step, index) => (
                <article key={step.title} className="rounded-[28px] border border-[#e2e8f0] bg-white p-6 shadow-[0_20px_70px_-60px_rgba(15,23,42,0.48)]">
                  <p className="text-[13px] font-semibold text-[#64748b]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-7 text-[22px] font-semibold tracking-[-0.025em] text-[#0f172a]">{step.title}</h3>
                  <p className="mt-3 text-[14px] leading-6 text-[#64748b]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="opx-layout-shell py-14">
          <div className="grid gap-8 rounded-[34px] border border-[#e2e8f0] bg-[#f8fafc] p-7 shadow-[0_24px_90px_-68px_rgba(15,23,42,0.52)] sm:p-9 lg:grid-cols-[minmax(0,0.9fr)_auto] lg:items-center">
            <div>
              <h2 className="max-w-[800px] text-balance text-[32px] font-semibold leading-[1.04] tracking-[-0.035em] text-[#0f172a] sm:text-[46px]">
                {ui.finalTitle}
              </h2>
              <p className="mt-4 max-w-[700px] text-[16px] leading-7 text-[#64748b]">{ui.finalDescription}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ButtonLink href="/contacto" size="lg" variant="primary">
                {ui.heroCta}
              </ButtonLink>
              <ButtonLink href="/status" size="lg" variant="secondary">
                {ui.secondaryCta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
