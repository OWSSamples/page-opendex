import type { Locale } from "./config";

export type FaqCategory = "general" | "facturacion" | "cuenta" | "tecnico";

export type LocalizedFaq = {
  cat: FaqCategory;
  q: string;
  a: string;
};

export const faqContent: Record<
  Locale,
  {
    header: {
      eyebrow: string;
      titleStart: string;
      titleAccent: string;
      description: string;
    };
    search: {
      placeholder: string;
      aria: string;
      clear: string;
      filtersAria: string;
      emptyTitle: string;
      emptyDescription: string;
    };
    filters: Record<"all" | FaqCategory, string>;
    cta: {
      kicker: string;
      title: string;
      description: string;
      contact: string;
      docs: string;
      routes: string;
      routeItems: [string, string][];
    };
    faqs: LocalizedFaq[];
  }
> = {
  es: {
    header: {
      eyebrow: "Centro de ayuda",
      titleStart: "Preguntas",
      titleAccent: "frecuentes",
      description:
        "Respuestas claras sobre Opendex Web Services, el estado de sus productos, privacidad, acceso, documentación e integración técnica.",
    },
    search: {
      placeholder: "Busca: passkeys, CFDI, webhooks, cuenta, privacidad...",
      aria: "Buscar en las preguntas frecuentes",
      clear: "Limpiar búsqueda",
      filtersAria: "Filtrar por categoría",
      emptyTitle: "No encontramos resultados",
      emptyDescription: "Intenta con otra palabra o cambia el filtro.",
    },
    filters: {
      all: "Todas",
      general: "General",
      facturacion: "Productos",
      cuenta: "Cuenta",
      tecnico: "Técnico",
    },
    cta: {
      kicker: "Soporte contextual",
      title: "Cuéntanos qué estás intentando construir.",
      description:
        "Para responder mejor, incluye producto de interés, etapa de tu proyecto, volumen esperado y si buscas contexto técnico, comercial o de disponibilidad.",
      contact: "Contactar equipo",
      docs: "Revisar documentación",
      routes: "Rutas recomendadas",
      routeItems: [["Estado de productos", "/status"], ["Integración técnica", "/docs"], ["Contacto directo", "/contacto"]],
    },
    faqs: [],
  },
  en: {
    header: {
      eyebrow: "Help center",
      titleStart: "Frequently asked",
      titleAccent: "questions",
      description:
        "Clear answers about Opendex Web Services, product status, privacy, access, documentation and technical integration.",
    },
    search: {
      placeholder: "Search: passkeys, CFDI, webhooks, account, privacy...",
      aria: "Search frequently asked questions",
      clear: "Clear search",
      filtersAria: "Filter by category",
      emptyTitle: "No results found",
      emptyDescription: "Try another term or change the filter.",
    },
    filters: { all: "All", general: "General", facturacion: "Products", cuenta: "Account", tecnico: "Technical" },
    cta: {
      kicker: "Contextual support",
      title: "Tell us what you are trying to build.",
      description:
        "To respond better, include the product, project stage, expected volume and whether you need technical, commercial or availability context.",
      contact: "Contact team",
      docs: "Review documentation",
      routes: "Recommended routes",
      routeItems: [["Product status", "/status"], ["Technical integration", "/docs"], ["Direct contact", "/contacto"]],
    },
    faqs: [
      { cat: "general", q: "What is Opendex Web Services?", a: "Opendex Web Services is the parent company building its own digital infrastructure products for identity, fiscal workflows and retail operations." },
      { cat: "general", q: "Are there public launch dates?", a: "No. Each product communicates its real stage: pre-launch, isolated beta or preparation. Public dates will only be shared when there is a surface ready to support them." },
      { cat: "facturacion", q: "What is the status of Identity Platform?", a: "It is in pre-launch while access, sessions, passkeys, SSO, MFA and audit controls are validated." },
      { cat: "facturacion", q: "What is the status of Factur Workspaces?", a: "It is not publicly available yet. The base is prepared, but final improvements are still being closed." },
      { cat: "facturacion", q: "What is the status of Kiosko Workspaces?", a: "It remains in an isolated beta for controlled POS, inventory, roles and closing-flow validation." },
      { cat: "cuenta", q: "Can I create an account from the website?", a: "Not yet. There is no public self-service flow. Contact the team with your project context if you need information." },
      { cat: "cuenta", q: "How is privacy handled?", a: "Privacy is treated as part of the technical foundation. Legal documents are published as product availability advances." },
      { cat: "tecnico", q: "Will Opendex publish SDKs and documentation?", a: "Yes, as each product moves toward public availability. The site avoids presenting docs as if an open offer already existed." },
    ],
  },
  pt: {
    header: { eyebrow: "Central de ajuda", titleStart: "Perguntas", titleAccent: "frequentes", description: "Respostas claras sobre Opendex Web Services, status dos produtos, privacidade, acesso, documentação e integração técnica." },
    search: { placeholder: "Busque: passkeys, CFDI, webhooks, conta, privacidade...", aria: "Buscar nas perguntas frequentes", clear: "Limpar busca", filtersAria: "Filtrar por categoria", emptyTitle: "Nenhum resultado encontrado", emptyDescription: "Tente outra palavra ou altere o filtro." },
    filters: { all: "Todas", general: "Geral", facturacion: "Produtos", cuenta: "Conta", tecnico: "Técnico" },
    cta: { kicker: "Suporte contextual", title: "Conte-nos o que você está tentando construir.", description: "Para responder melhor, inclua produto de interesse, etapa do projeto, volume esperado e se busca contexto técnico, comercial ou de disponibilidade.", contact: "Contatar equipe", docs: "Revisar documentação", routes: "Rotas recomendadas", routeItems: [["Status dos produtos", "/status"], ["Integração técnica", "/docs"], ["Contato direto", "/contacto"]] },
    faqs: [
      { cat: "general", q: "O que é Opendex Web Services?", a: "É a empresa matriz que constrói produtos próprios de infraestrutura digital para identidade, fluxos fiscais e operações de varejo." },
      { cat: "general", q: "Há datas públicas de lançamento?", a: "Não. Cada produto comunica seu estágio real e datas públicas só serão compartilhadas quando houver uma superfície pronta." },
      { cat: "facturacion", q: "Qual é o status da Identity Platform?", a: "Está em pré-lançamento enquanto acesso, sessões, passkeys, SSO, MFA e auditoria são validados." },
      { cat: "facturacion", q: "Qual é o status da Factur Workspaces?", a: "Ainda não está disponível publicamente. A base está preparada, mas melhorias finais seguem em andamento." },
      { cat: "facturacion", q: "Qual é o status da Kiosko Workspaces?", a: "Permanece em beta isolada para validação controlada de POS, inventário, funções e fechamentos." },
      { cat: "cuenta", q: "Posso criar uma conta pelo site?", a: "Ainda não. Não há fluxo público de autosserviço. Entre em contato com contexto do projeto se precisar de informações." },
      { cat: "cuenta", q: "Como a privacidade é tratada?", a: "A privacidade faz parte da base técnica. Documentos legais são publicados conforme a disponibilidade avança." },
      { cat: "tecnico", q: "A Opendex publicará SDKs e documentação?", a: "Sim, conforme cada produto avance para disponibilidade pública." },
    ],
  },
  fr: {
    header: { eyebrow: "Centre d'aide", titleStart: "Questions", titleAccent: "fréquentes", description: "Réponses claires sur Opendex Web Services, le statut des produits, la confidentialité, l'accès, la documentation et l'intégration technique." },
    search: { placeholder: "Rechercher : passkeys, CFDI, webhooks, compte, confidentialité...", aria: "Rechercher dans les questions fréquentes", clear: "Effacer la recherche", filtersAria: "Filtrer par catégorie", emptyTitle: "Aucun résultat trouvé", emptyDescription: "Essayez un autre mot ou changez le filtre." },
    filters: { all: "Toutes", general: "Général", facturacion: "Produits", cuenta: "Compte", tecnico: "Technique" },
    cta: { kicker: "Support contextuel", title: "Dites-nous ce que vous essayez de construire.", description: "Pour mieux répondre, incluez le produit, l'étape du projet, le volume attendu et le type de contexte recherché.", contact: "Contacter l'équipe", docs: "Voir la documentation", routes: "Routes recommandées", routeItems: [["Statut des produits", "/status"], ["Intégration technique", "/docs"], ["Contact direct", "/contacto"]] },
    faqs: [
      { cat: "general", q: "Qu'est-ce qu'Opendex Web Services ?", a: "C'est l'entreprise mère qui construit des produits d'infrastructure numérique pour l'identité, les flux fiscaux et les opérations retail." },
      { cat: "general", q: "Existe-t-il des dates publiques de lancement ?", a: "Non. Chaque produit communique son étape réelle et les dates publiques ne seront partagées que lorsqu'une surface sera prête." },
      { cat: "facturacion", q: "Quel est le statut d'Identity Platform ?", a: "Elle est en pré-lancement pendant la validation de l'accès, des sessions, passkeys, SSO, MFA et contrôles d'audit." },
      { cat: "facturacion", q: "Quel est le statut de Factur Workspaces ?", a: "Pas encore disponible publiquement. La base est prête, mais les dernières améliorations sont en cours." },
      { cat: "facturacion", q: "Quel est le statut de Kiosko Workspaces ?", a: "Il reste en bêta isolée pour valider POS, inventaire, rôles et clôtures dans un environnement contrôlé." },
      { cat: "cuenta", q: "Puis-je créer un compte depuis le site ?", a: "Pas encore. Il n'y a pas de self-service public. Contactez l'équipe avec le contexte de votre projet." },
      { cat: "cuenta", q: "Comment la confidentialité est-elle traitée ?", a: "La confidentialité fait partie de la base technique. Les documents légaux sont publiés à mesure que la disponibilité avance." },
      { cat: "tecnico", q: "Opendex publiera-t-il des SDKs et de la documentation ?", a: "Oui, à mesure que chaque produit évolue vers une disponibilité publique." },
    ],
  },
  zh: {
    header: { eyebrow: "帮助中心", titleStart: "常见", titleAccent: "问题", description: "关于 Opendex Web Services、产品状态、隐私、访问、文档和技术集成的清晰回答。" },
    search: { placeholder: "搜索：passkeys、CFDI、webhooks、账户、隐私...", aria: "搜索常见问题", clear: "清除搜索", filtersAria: "按类别筛选", emptyTitle: "未找到结果", emptyDescription: "请尝试其他关键词或更换筛选条件。" },
    filters: { all: "全部", general: "常规", facturacion: "产品", cuenta: "账户", tecnico: "技术" },
    cta: { kicker: "上下文支持", title: "告诉我们你正在尝试构建什么。", description: "为了更好回复，请包含感兴趣的产品、项目阶段、预期规模，以及你需要技术、商业还是可用性背景。", contact: "联系团队", docs: "查看文档", routes: "推荐路径", routeItems: [["产品状态", "/status"], ["技术集成", "/docs"], ["直接联系", "/contacto"]] },
    faqs: [
      { cat: "general", q: "什么是 Opendex Web Services？", a: "它是母公司，正在构建面向身份、财税流程和零售运营的数字基础设施产品。" },
      { cat: "general", q: "有公开发布日期吗？", a: "没有。每个产品只沟通真实阶段，只有当公开能力准备好时才会共享日期。" },
      { cat: "facturacion", q: "Identity Platform 当前状态是什么？", a: "它处于预发布阶段，正在验证访问、会话、passkeys、SSO、MFA 和审计控制。" },
      { cat: "facturacion", q: "Factur Workspaces 当前状态是什么？", a: "尚未公开可用。基础已经准备好，但最终改进仍在完成中。" },
      { cat: "facturacion", q: "Kiosko Workspaces 当前状态是什么？", a: "它仍处于隔离测试版，用于验证 POS、库存、角色和结算流程。" },
      { cat: "cuenta", q: "我可以从网站创建账户吗？", a: "暂时不可以。目前没有公开自助注册流程。如需信息，请带着项目背景联系团队。" },
      { cat: "cuenta", q: "隐私如何处理？", a: "隐私被视为技术基础的一部分。法律文件会随着产品可用性推进而发布。" },
      { cat: "tecnico", q: "Opendex 会发布 SDK 和文档吗？", a: "会，随着每个产品向公开可用推进而发布。" },
    ],
  },
};
