import type { Locale } from "./config";

export type PageHeaderKey =
  | "pricing"
  | "docs"
  | "company"
  | "security"
  | "status"
  | "blog"
  | "community"
  | "login"
  | "privacy"
  | "solutionFintech"
  | "solutionSaas"
  | "solutionRetail"
  | "productAuth"
  | "productInvoice"
  | "productKiosko";

type HeaderCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

type PageHeaderDictionary = Record<PageHeaderKey, HeaderCopy>;

export const pageHeaders: Record<Locale, PageHeaderDictionary> = {
  es: {
    pricing: {
      eyebrow: "Precios",
      title: "Modelo comercial en preparación.",
      description:
        "Opendex no ofrece autoservicio ni planes públicos activos. Esta página explica cómo se pensará el modelo comercial cuando cada producto avance.",
    },
    docs: {
      eyebrow: "Documentación",
      title: "Documentación técnica organizada por producto.",
      description:
        "La documentación pública se publicará por etapas. Hoy esta página ordena arquitectura, contratos y guías internas sin prometer disponibilidad que todavía no existe.",
    },
    company: {
      eyebrow: "Empresa",
      title: "Una empresa mexicana construyendo infraestructura digital desde cero.",
      description:
        "Opendex Web Services está creando productos propios para identidad, operación fiscal y retail cloud con una base técnica clara y honesta.",
    },
    security: {
      eyebrow: "Seguridad",
      title: "Seguridad como base operativa, no como sección decorativa.",
      description:
        "Principios de control de acceso, trazabilidad, privacidad y comunicación clara del estado real de cada producto.",
    },
    status: {
      eyebrow: "Status",
      title: "Estado público sin maquillar disponibilidad.",
      description:
        "El status actual reporta el estado de preparación de cada línea de producto, no incidentes de una plataforma abierta al público.",
    },
    blog: {
      eyebrow: "Blog",
      title: "Bitácora técnica para pensar productos de infraestructura con más claridad.",
      description:
        "Un espacio para explicar sistemas, modelos de datos, experiencia operativa, seguridad y decisiones de diseño.",
    },
    community: {
      eyebrow: "Comunidad",
      title: "Un entorno para builders, operadores y empresas que quieren crecer con Opendex.",
      description:
        "La comunidad pública todavía está en preparación. Primero estamos diseñando conversaciones técnicas, validación privada y notas de arquitectura.",
    },
    login: {
      eyebrow: "Acceso",
      title: "Inicio de sesión reservado.",
      description:
        "Opendex no tiene autoservicio público activo. El acceso a entornos privados se coordina directamente con el equipo.",
    },
    privacy: {
      eyebrow: "Legal",
      title: "Privacidad y cookies.",
      description:
        "Los documentos legales se publicarán con el alcance correspondiente conforme avance la disponibilidad de los productos.",
    },
    solutionFintech: {
      eyebrow: "Soluciones / Fintech",
      title: "Identidad y trazabilidad para operaciones reguladas.",
      description:
        "En fintech, Opendex se enfoca en control de acceso, evidencia y separación operativa.",
    },
    solutionSaas: {
      eyebrow: "Soluciones / SaaS B2B",
      title: "Estructura para productos que venden a empresas.",
      description:
        "La necesidad principal es administrar organizaciones, permisos, sesiones, evidencia y soporte por cuenta.",
    },
    solutionRetail: {
      eyebrow: "Soluciones / Retail",
      title: "Operaciones de tienda con contexto por turno y sucursal.",
      description:
        "Retail exige continuidad operativa: vender, registrar, corregir, cerrar caja y entender diferencias sin perder trazabilidad.",
    },
    productAuth: {
      eyebrow: "Opendex Identity Platform",
      title: "Control de identidad para productos que necesitan operar con confianza.",
      description:
        "Acceso, sesiones, riesgo y auditoría. Su disponibilidad pública sigue cerrada mientras se validan integraciones.",
    },
    productInvoice: {
      eyebrow: "Factur Workspaces",
      title: "Operación fiscal organizada como workspace, no como formulario aislado.",
      description:
        "Estados, documentos, roles y evidencia administrativa. Aún no está disponible públicamente porque faltan mejoras finales.",
    },
    productKiosko: {
      eyebrow: "Opendex Kiosko Workspaces",
      title: "Operación de tienda pensada por sucursal, turno y caja.",
      description:
        "Flujos de POS, inventario, roles y cortes en una beta aislada. No existe disponibilidad pública ni fecha anunciada.",
    },
  },
  en: {
    pricing: { eyebrow: "Pricing", title: "Commercial model in preparation.", description: "Opendex does not offer active self-service or public plans. This page explains how pricing will be approached as each product advances." },
    docs: { eyebrow: "Documentation", title: "Technical documentation organized by product.", description: "Public documentation will be released in stages. Today this page organizes architecture, contracts and internal guides without promising availability that does not exist yet." },
    company: { eyebrow: "Company", title: "A Mexican company building digital infrastructure from the ground up.", description: "Opendex Web Services is creating products for identity, fiscal operations and retail cloud with a clear and honest technical foundation." },
    security: { eyebrow: "Security", title: "Security as an operational base, not a decorative section.", description: "Principles for access control, traceability, privacy and clear communication of each product's real status." },
    status: { eyebrow: "Status", title: "Public status without masking availability.", description: "The current status reports preparation for each product line, not incidents from a public platform." },
    blog: { eyebrow: "Blog", title: "Technical notes for thinking about infrastructure products with more clarity.", description: "A space to explain systems, data models, operational experience, security and design decisions." },
    community: { eyebrow: "Community", title: "An environment for builders, operators and companies that want to grow with Opendex.", description: "The public community is still in preparation. We are first designing technical conversations, private validation and architecture notes." },
    login: { eyebrow: "Access", title: "Reserved sign-in.", description: "Opendex does not have active public self-service. Access to private environments is coordinated directly with the team." },
    privacy: { eyebrow: "Legal", title: "Privacy and cookies.", description: "Legal documents will be published with the corresponding scope as product availability advances." },
    solutionFintech: { eyebrow: "Solutions / Fintech", title: "Identity and traceability for regulated operations.", description: "In fintech, Opendex focuses on access control, evidence and operational separation." },
    solutionSaas: { eyebrow: "Solutions / B2B SaaS", title: "Structure for products that sell to companies.", description: "The main need is managing organizations, permissions, sessions, evidence and account-level support." },
    solutionRetail: { eyebrow: "Solutions / Retail", title: "Store operations with context by shift and branch.", description: "Retail requires operational continuity: sell, record, correct, close checkout and understand differences without losing traceability." },
    productAuth: { eyebrow: "Opendex Identity Platform", title: "Identity control for products that need to operate with confidence.", description: "Access, sessions, risk and auditability. Public availability remains closed while integrations are validated." },
    productInvoice: { eyebrow: "Factur Workspaces", title: "Fiscal operations organized as a workspace, not an isolated form.", description: "States, documents, roles and administrative evidence. It is not publicly available yet while final improvements are completed." },
    productKiosko: { eyebrow: "Opendex Kiosko Workspaces", title: "Store operations designed around branch, shift and checkout.", description: "POS, inventory, roles and closing flows in an isolated beta. There is no public availability or announced date." },
  },
  pt: {
    pricing: { eyebrow: "Preços", title: "Modelo comercial em preparação.", description: "A Opendex não oferece autosserviço nem planos públicos ativos. Esta página explica como o modelo comercial será pensado conforme cada produto avance." },
    docs: { eyebrow: "Documentação", title: "Documentação técnica organizada por produto.", description: "A documentação pública será publicada por etapas. Hoje esta página organiza arquitetura, contratos e guias internas sem prometer disponibilidade que ainda não existe." },
    company: { eyebrow: "Empresa", title: "Uma empresa mexicana construindo infraestrutura digital do zero.", description: "A Opendex Web Services cria produtos próprios para identidade, operação fiscal e retail cloud com uma base técnica clara e honesta." },
    security: { eyebrow: "Segurança", title: "Segurança como base operacional, não como seção decorativa.", description: "Princípios de controle de acesso, rastreabilidade, privacidade e comunicação clara do status real de cada produto." },
    status: { eyebrow: "Status", title: "Status público sem maquiar disponibilidade.", description: "O status atual reporta a preparação de cada linha de produto, não incidentes de uma plataforma pública." },
    blog: { eyebrow: "Blog", title: "Notas técnicas para pensar produtos de infraestrutura com mais clareza.", description: "Um espaço para explicar sistemas, modelos de dados, experiência operacional, segurança e decisões de design." },
    community: { eyebrow: "Comunidade", title: "Um ambiente para builders, operadores e empresas que querem crescer com a Opendex.", description: "A comunidade pública ainda está em preparação. Primeiro estamos desenhando conversas técnicas, validação privada e notas de arquitetura." },
    login: { eyebrow: "Acesso", title: "Login reservado.", description: "A Opendex não tem autosserviço público ativo. O acesso a ambientes privados é coordenado diretamente com a equipe." },
    privacy: { eyebrow: "Legal", title: "Privacidade e cookies.", description: "Os documentos legais serão publicados com o escopo correspondente conforme avance a disponibilidade dos produtos." },
    solutionFintech: { eyebrow: "Soluções / Fintech", title: "Identidade e rastreabilidade para operações reguladas.", description: "Em fintech, a Opendex foca em controle de acesso, evidência e separação operacional." },
    solutionSaas: { eyebrow: "Soluções / SaaS B2B", title: "Estrutura para produtos que vendem para empresas.", description: "A principal necessidade é administrar organizações, permissões, sessões, evidência e suporte por conta." },
    solutionRetail: { eyebrow: "Soluções / Varejo", title: "Operações de loja com contexto por turno e filial.", description: "O varejo exige continuidade operacional: vender, registrar, corrigir, fechar caixa e entender diferenças sem perder rastreabilidade." },
    productAuth: { eyebrow: "Opendex Identity Platform", title: "Controle de identidade para produtos que precisam operar com confiança.", description: "Acesso, sessões, risco e auditoria. A disponibilidade pública segue fechada enquanto integrações são validadas." },
    productInvoice: { eyebrow: "Factur Workspaces", title: "Operação fiscal organizada como workspace, não como formulário isolado.", description: "Estados, documentos, funções e evidência administrativa. Ainda não está disponível publicamente porque faltam melhorias finais." },
    productKiosko: { eyebrow: "Opendex Kiosko Workspaces", title: "Operação de loja pensada por filial, turno e caixa.", description: "Fluxos de POS, inventário, funções e fechamentos em beta isolada. Não há disponibilidade pública nem data anunciada." },
  },
  fr: {
    pricing: { eyebrow: "Tarifs", title: "Modèle commercial en préparation.", description: "Opendex ne propose pas de self-service ni de plans publics actifs. Cette page explique comment le modèle commercial sera pensé à mesure que chaque produit avance." },
    docs: { eyebrow: "Documentation", title: "Documentation technique organisée par produit.", description: "La documentation publique sera publiée par étapes. Aujourd'hui cette page organise architecture, contrats et guides internes sans promettre une disponibilité qui n'existe pas encore." },
    company: { eyebrow: "Entreprise", title: "Une entreprise mexicaine qui construit une infrastructure numérique depuis zéro.", description: "Opendex Web Services crée ses propres produits pour l'identité, les opérations fiscales et le retail cloud avec une base technique claire et honnête." },
    security: { eyebrow: "Sécurité", title: "La sécurité comme base opérationnelle, pas comme section décorative.", description: "Principes de contrôle d'accès, traçabilité, confidentialité et communication claire du statut réel de chaque produit." },
    status: { eyebrow: "Status", title: "Statut public sans maquiller la disponibilité.", description: "Le statut actuel indique la préparation de chaque ligne produit, pas les incidents d'une plateforme publique." },
    blog: { eyebrow: "Blog", title: "Notes techniques pour penser les produits d'infrastructure avec plus de clarté.", description: "Un espace pour expliquer systèmes, modèles de données, expérience opérationnelle, sécurité et décisions de design." },
    community: { eyebrow: "Communauté", title: "Un environnement pour builders, opérateurs et entreprises qui veulent grandir avec Opendex.", description: "La communauté publique est encore en préparation. Nous concevons d'abord des conversations techniques, une validation privée et des notes d'architecture." },
    login: { eyebrow: "Accès", title: "Connexion réservée.", description: "Opendex n'a pas de self-service public actif. L'accès aux environnements privés se coordonne directement avec l'équipe." },
    privacy: { eyebrow: "Légal", title: "Confidentialité et cookies.", description: "Les documents légaux seront publiés avec la portée correspondante à mesure que la disponibilité des produits avance." },
    solutionFintech: { eyebrow: "Solutions / Fintech", title: "Identité et traçabilité pour opérations régulées.", description: "Dans la fintech, Opendex se concentre sur le contrôle d'accès, les preuves et la séparation opérationnelle." },
    solutionSaas: { eyebrow: "Solutions / SaaS B2B", title: "Structure pour les produits vendus aux entreprises.", description: "Le besoin principal est d'administrer organisations, permissions, sessions, preuves et support par compte." },
    solutionRetail: { eyebrow: "Solutions / Retail", title: "Opérations de magasin avec contexte par équipe et succursale.", description: "Le retail exige une continuité opérationnelle : vendre, enregistrer, corriger, fermer la caisse et comprendre les écarts sans perdre la traçabilité." },
    productAuth: { eyebrow: "Opendex Identity Platform", title: "Contrôle d'identité pour produits qui doivent fonctionner avec confiance.", description: "Accès, sessions, risque et auditabilité. La disponibilité publique reste fermée pendant la validation des intégrations." },
    productInvoice: { eyebrow: "Factur Workspaces", title: "Opération fiscale organisée comme workspace, pas comme formulaire isolé.", description: "États, documents, rôles et preuves administratives. Pas encore disponible publiquement pendant les dernières améliorations." },
    productKiosko: { eyebrow: "Opendex Kiosko Workspaces", title: "Opération de magasin pensée par succursale, équipe et caisse.", description: "Flux POS, inventaire, rôles et clôtures en bêta isolée. Aucune disponibilité publique ni date annoncée." },
  },
  zh: {
    pricing: { eyebrow: "价格", title: "商业模型正在准备中。", description: "Opendex 目前没有公开自助服务或有效套餐。此页面说明各产品推进后将如何设计商业模型。" },
    docs: { eyebrow: "文档", title: "按产品组织的技术文档。", description: "公开文档将分阶段发布。当前页面整理架构、合约和内部指南，不承诺尚不存在的可用性。" },
    company: { eyebrow: "公司", title: "一家从零构建数字基础设施的墨西哥公司。", description: "Opendex Web Services 正在以清晰、诚实的技术基础构建身份、财税运营和零售云产品。" },
    security: { eyebrow: "安全", title: "安全是运营基础，不是装饰性板块。", description: "访问控制、可追踪性、隐私以及每条产品线真实状态的清晰沟通原则。" },
    status: { eyebrow: "状态", title: "不粉饰可用性的公开状态。", description: "当前状态展示每条产品线的准备阶段，而不是公开平台的事故报告。" },
    blog: { eyebrow: "博客", title: "更清晰地思考基础设施产品的技术笔记。", description: "用于解释系统、数据模型、运营体验、安全和设计决策的空间。" },
    community: { eyebrow: "社区", title: "面向 builders、运营者和希望与 Opendex 一起成长的企业环境。", description: "公开社区仍在准备中。我们先设计技术对话、私有验证和架构笔记。" },
    login: { eyebrow: "访问", title: "保留登录。", description: "Opendex 当前没有公开自助访问。私有环境访问由团队直接协调。" },
    privacy: { eyebrow: "法律", title: "隐私与 Cookie。", description: "法律文件会随着产品可用性推进，按对应范围发布。" },
    solutionFintech: { eyebrow: "解决方案 / 金融科技", title: "面向受监管运营的身份与可追踪性。", description: "在金融科技场景中，Opendex 聚焦访问控制、证据和运营隔离。" },
    solutionSaas: { eyebrow: "解决方案 / B2B SaaS", title: "面向企业销售产品的结构。", description: "核心需求是管理组织、权限、会话、证据和按账户支持。" },
    solutionRetail: { eyebrow: "解决方案 / 零售", title: "按班次和门店保留上下文的店铺运营。", description: "零售需要运营连续性：销售、记录、纠正、收银结算并理解差异，同时保持可追踪性。" },
    productAuth: { eyebrow: "Opendex Identity Platform", title: "为需要可信运营的产品提供身份控制。", description: "访问、会话、风险与审计。公开可用性仍关闭，集成还在验证中。" },
    productInvoice: { eyebrow: "Factur Workspaces", title: "把财税运营组织成 workspace，而不是孤立表单。", description: "状态、文档、角色和行政证据。最终改进完成前尚未公开可用。" },
    productKiosko: { eyebrow: "Opendex Kiosko Workspaces", title: "围绕门店、班次和收银设计的店铺运营。", description: "POS、库存、角色和结算流程处于隔离测试版。没有公开可用性或发布日期。" },
  },
};
