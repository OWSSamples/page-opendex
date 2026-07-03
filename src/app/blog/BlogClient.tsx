"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
} from "@/components/icons";
import IdentityIcon, { type IdentityIconName } from "@/components/IdentityIcon";
import { useI18n } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/config";

type BlogArticle = {
  iconName: IdentityIconName;
  category: string;
  title: string;
  description: string;
  meta: string;
};

type BlogCopy = {
  topics: string[];
  hero: {
    label: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    editorialLabel: string;
    editorialBody: string;
  };
  featuredLabel: string;
  featuredTitle: string;
  primaryFeaturedPost: {
    eyebrow: string;
    title: string;
    description: string;
    meta: string;
  };
  secondaryFeaturedPosts: Array<{
    eyebrow: string;
    title: string;
    description: string;
    meta: string;
  }>;
  allPostsLabel: string;
  allPostsTitle: string;
  searchLabel: string;
  searchPlaceholder: string;
  filterLabel: string;
  emptyTitle: string;
  emptyBody: string;
  articles: BlogArticle[];
};

const blogCopy: Record<Locale, BlogCopy> = {
  es: {
    topics: ["Todos", "Identidad", "Seguridad", "Documentos", "Operación", "Arquitectura", "APIs"],
    hero: {
      label: "Opendex Blog",
      title: "Ideas para construir infraestructura empresarial con más claridad.",
      description:
        "Publicamos notas sobre identidad, documentos, seguridad, APIs y operación cuando existe una decisión técnica que vale la pena explicar con rigor.",
      primaryCta: "Leer destacados",
      secondaryCta: "Explorar temas",
      editorialLabel: "Editorial desk",
      editorialBody:
        "No buscamos llenar un feed. Cada publicación debe mejorar una lectura: por qué existe una decisión, qué riesgo reduce y cómo ayuda a operar con más confianza.",
    },
    featuredLabel: "Featured blog posts",
    featuredTitle: "Lecturas destacadas",
    primaryFeaturedPost: {
      eyebrow: "Infraestructura",
      title: "Diseñar sistemas que expliquen su propio estado.",
      description:
        "La operación empresarial necesita superficies que revelen contexto, responsable, evidencia y próximo paso sin depender de conversaciones dispersas.",
      meta: "Ensayo principal · 8 min",
    },
    secondaryFeaturedPosts: [
      {
        eyebrow: "Seguridad",
        title: "Permisos claros antes de escalar equipos.",
        description:
          "Una plataforma preparada no solo valida acceso; deja visibles las razones, límites y señales que sostienen cada decisión sensible.",
        meta: "Guía técnica · 6 min",
      },
      {
        eyebrow: "Producto",
        title: "El software empresarial no debe ocultar la operación.",
        description:
          "Los flujos internos ganan valor cuando se pueden auditar, pausar, revisar y explicar sin reconstruir la historia manualmente.",
        meta: "Product ops · 5 min",
      },
    ],
    allPostsLabel: "Browse all blog posts",
    allPostsTitle: "Explora notas por criterio operativo",
    searchLabel: "Buscar publicaciones",
    searchPlaceholder: "Buscar por tema, sistema o decisión",
    filterLabel: "Temas",
    emptyTitle: "No encontramos notas con ese criterio.",
    emptyBody: "Prueba con otro tema o limpia la búsqueda para volver al listado completo.",
    articles: [
      {
        iconName: "shield",
        category: "Identidad",
        title: "El login no debería ser el centro del sistema.",
        description:
          "La identidad moderna vive en sesiones, políticas, eventos, dispositivos, permisos y auditoría. La pantalla de acceso es solo una puerta.",
        meta: "Lectura técnica · 6 min",
      },
      {
        iconName: "organization",
        category: "Arquitectura",
        title: "Modelar entidades antes de diseñar pantallas.",
        description:
          "Usuarios, sesiones, documentos, tickets y webhooks necesitan forma clara antes de que la interfaz intente vender simplicidad.",
        meta: "Arquitectura · 8 min",
      },
      {
        iconName: "audit",
        category: "Operación",
        title: "Los logs son producto cuando ayudan a decidir.",
        description:
          "Una bitácora útil no es una lista infinita; es una superficie para soporte, seguridad, auditoría y explicación.",
        meta: "Product ops · 6 min",
      },
      {
        iconName: "lock",
        category: "Seguridad",
        title: "Privacidad por diseño para equipos que todavía crecen.",
        description:
          "No hace falta esperar a ser enterprise para separar permisos, reducir exposición y documentar decisiones sensibles.",
        meta: "Criterio técnico · 5 min",
      },
      {
        iconName: "document",
        category: "Documentos",
        title: "Documentación operativa que reduce conversaciones repetidas.",
        description:
          "Un documento útil no solo informa; ordena responsabilidades, decisiones, límites y evidencia para revisión posterior.",
        meta: "Documentación · 7 min",
      },
      {
        iconName: "workspace",
        category: "APIs",
        title: "Contratos de API que se entienden antes de integrarse.",
        description:
          "Los endpoints empresariales necesitan estados, errores, auditoría y ejemplos que eviten ambigüedad desde la primera integración.",
        meta: "API thinking · 6 min",
      },
    ],
  },
  en: {
    topics: ["All", "Identity", "Security", "Documents", "Operations", "Architecture", "APIs"],
    hero: {
      label: "Opendex Blog",
      title: "Ideas for building enterprise infrastructure with more clarity.",
      description:
        "We publish notes about identity, documents, security, APIs and operations when a technical decision deserves a clear explanation.",
      primaryCta: "Read featured",
      secondaryCta: "Explore topics",
      editorialLabel: "Editorial desk",
      editorialBody:
        "We are not filling a feed. Every post should improve a reading: why a decision exists, what risk it reduces and how it helps teams operate with more confidence.",
    },
    featuredLabel: "Featured blog posts",
    featuredTitle: "Featured reads",
    primaryFeaturedPost: {
      eyebrow: "Infrastructure",
      title: "Design systems that explain their own state.",
      description:
        "Enterprise operations need surfaces that reveal context, owner, evidence and next step without depending on scattered conversations.",
      meta: "Main essay · 8 min",
    },
    secondaryFeaturedPosts: [
      {
        eyebrow: "Security",
        title: "Clear permissions before teams scale.",
        description:
          "A prepared platform does more than validate access; it exposes the reasons, limits and signals behind every sensitive decision.",
        meta: "Technical guide · 6 min",
      },
      {
        eyebrow: "Product",
        title: "Enterprise software should not hide the operation.",
        description:
          "Internal flows become more valuable when they can be audited, paused, reviewed and explained without rebuilding the story manually.",
        meta: "Product ops · 5 min",
      },
    ],
    allPostsLabel: "Browse all blog posts",
    allPostsTitle: "Explore notes by operational criteria",
    searchLabel: "Search posts",
    searchPlaceholder: "Search by topic, system or decision",
    filterLabel: "Topics",
    emptyTitle: "No notes match that criteria.",
    emptyBody: "Try another topic or clear the search to return to the full list.",
    articles: [
      {
        iconName: "shield",
        category: "Identity",
        title: "Login should not be the center of the system.",
        description:
          "Modern identity lives in sessions, policies, events, devices, permissions and audit trails. The access screen is only one door.",
        meta: "Technical read · 6 min",
      },
      {
        iconName: "organization",
        category: "Architecture",
        title: "Model entities before designing screens.",
        description:
          "Users, sessions, documents, tickets and webhooks need a clear shape before the interface tries to sell simplicity.",
        meta: "Architecture · 8 min",
      },
      {
        iconName: "audit",
        category: "Operations",
        title: "Logs are product when they help teams decide.",
        description:
          "A useful log is not an endless list; it is a surface for support, security, audit and explanation.",
        meta: "Product ops · 6 min",
      },
      {
        iconName: "lock",
        category: "Security",
        title: "Privacy by design for teams that are still growing.",
        description:
          "You do not need to wait for enterprise scale to separate permissions, reduce exposure and document sensitive decisions.",
        meta: "Technical criteria · 5 min",
      },
      {
        iconName: "document",
        category: "Documents",
        title: "Operational documentation that reduces repeated conversations.",
        description:
          "Useful documentation does more than inform; it organizes owners, decisions, limits and evidence for later review.",
        meta: "Documentation · 7 min",
      },
      {
        iconName: "workspace",
        category: "APIs",
        title: "API contracts that are understood before integration.",
        description:
          "Enterprise endpoints need states, errors, audit trails and examples that reduce ambiguity from the first integration.",
        meta: "API thinking · 6 min",
      },
    ],
  },
  pt: {
    topics: ["Todos", "Identidade", "Segurança", "Documentos", "Operação", "Arquitetura", "APIs"],
    hero: {
      label: "Opendex Blog",
      title: "Ideias para construir infraestrutura empresarial com mais clareza.",
      description:
        "Publicamos notas sobre identidade, documentos, segurança, APIs e operação quando uma decisão técnica merece explicação rigorosa.",
      primaryCta: "Ler destaques",
      secondaryCta: "Explorar temas",
      editorialLabel: "Mesa editorial",
      editorialBody:
        "Não buscamos preencher um feed. Cada publicação deve melhorar uma leitura: por que uma decisão existe, qual risco reduz e como ajuda a operar com mais confiança.",
    },
    featuredLabel: "Posts em destaque",
    featuredTitle: "Leituras destacadas",
    primaryFeaturedPost: {
      eyebrow: "Infraestrutura",
      title: "Projetar sistemas que expliquem o próprio estado.",
      description:
        "Operações empresariais precisam de superfícies que revelem contexto, responsável, evidência e próximo passo sem depender de conversas dispersas.",
      meta: "Ensaio principal · 8 min",
    },
    secondaryFeaturedPosts: [
      {
        eyebrow: "Segurança",
        title: "Permissões claras antes de escalar equipes.",
        description:
          "Uma plataforma preparada não apenas valida acesso; ela mostra razões, limites e sinais por trás de cada decisão sensível.",
        meta: "Guia técnico · 6 min",
      },
      {
        eyebrow: "Produto",
        title: "Software empresarial não deve esconder a operação.",
        description:
          "Fluxos internos ganham valor quando podem ser auditados, pausados, revisados e explicados sem reconstruir a história manualmente.",
        meta: "Product ops · 5 min",
      },
    ],
    allPostsLabel: "Ver todos os posts",
    allPostsTitle: "Explore notas por critério operacional",
    searchLabel: "Buscar publicações",
    searchPlaceholder: "Buscar por tema, sistema ou decisão",
    filterLabel: "Temas",
    emptyTitle: "Não encontramos notas com esse critério.",
    emptyBody: "Tente outro tema ou limpe a busca para voltar à lista completa.",
    articles: [
      {
        iconName: "shield",
        category: "Identidade",
        title: "O login não deveria ser o centro do sistema.",
        description:
          "A identidade moderna vive em sessões, políticas, eventos, dispositivos, permissões e auditoria. A tela de acesso é apenas uma porta.",
        meta: "Leitura técnica · 6 min",
      },
      {
        iconName: "organization",
        category: "Arquitetura",
        title: "Modele entidades antes de desenhar telas.",
        description:
          "Usuários, sessões, documentos, tickets e webhooks precisam de forma clara antes que a interface tente vender simplicidade.",
        meta: "Arquitetura · 8 min",
      },
      {
        iconName: "audit",
        category: "Operação",
        title: "Logs são produto quando ajudam a decidir.",
        description:
          "Um log útil não é uma lista infinita; é uma superfície para suporte, segurança, auditoria e explicação.",
        meta: "Product ops · 6 min",
      },
      {
        iconName: "lock",
        category: "Segurança",
        title: "Privacidade por design para equipes que ainda crescem.",
        description:
          "Não é preciso esperar escala enterprise para separar permissões, reduzir exposição e documentar decisões sensíveis.",
        meta: "Critério técnico · 5 min",
      },
      {
        iconName: "document",
        category: "Documentos",
        title: "Documentação operacional que reduz conversas repetidas.",
        description:
          "Um documento útil não apenas informa; ele organiza responsáveis, decisões, limites e evidências para revisão posterior.",
        meta: "Documentação · 7 min",
      },
      {
        iconName: "workspace",
        category: "APIs",
        title: "Contratos de API entendidos antes da integração.",
        description:
          "Endpoints empresariais precisam de estados, erros, auditoria e exemplos que evitem ambiguidade desde a primeira integração.",
        meta: "API thinking · 6 min",
      },
    ],
  },
  fr: {
    topics: ["Tous", "Identité", "Sécurité", "Documents", "Opérations", "Architecture", "APIs"],
    hero: {
      label: "Opendex Blog",
      title: "Des idées pour construire une infrastructure d'entreprise plus claire.",
      description:
        "Nous publions des notes sur l'identité, les documents, la sécurité, les APIs et les opérations lorsqu'une décision technique mérite une explication rigoureuse.",
      primaryCta: "Lire les articles",
      secondaryCta: "Explorer les thèmes",
      editorialLabel: "Bureau éditorial",
      editorialBody:
        "Nous ne cherchons pas à remplir un flux. Chaque publication doit améliorer une lecture: pourquoi une décision existe, quel risque elle réduit et comment elle aide les équipes à opérer avec plus de confiance.",
    },
    featuredLabel: "Articles à la une",
    featuredTitle: "Lectures à la une",
    primaryFeaturedPost: {
      eyebrow: "Infrastructure",
      title: "Concevoir des systèmes qui expliquent leur propre état.",
      description:
        "Les opérations d'entreprise ont besoin de surfaces qui révèlent contexte, responsable, preuve et prochaine étape sans dépendre de conversations dispersées.",
      meta: "Essai principal · 8 min",
    },
    secondaryFeaturedPosts: [
      {
        eyebrow: "Sécurité",
        title: "Des permissions claires avant de faire évoluer les équipes.",
        description:
          "Une plateforme préparée ne valide pas seulement l'accès; elle rend visibles les raisons, limites et signaux de chaque décision sensible.",
        meta: "Guide technique · 6 min",
      },
      {
        eyebrow: "Produit",
        title: "Le logiciel d'entreprise ne doit pas cacher l'opération.",
        description:
          "Les flux internes gagnent en valeur lorsqu'ils peuvent être audités, suspendus, revus et expliqués sans reconstruire l'histoire manuellement.",
        meta: "Product ops · 5 min",
      },
    ],
    allPostsLabel: "Parcourir tous les articles",
    allPostsTitle: "Explorer les notes par critère opérationnel",
    searchLabel: "Rechercher des publications",
    searchPlaceholder: "Rechercher par thème, système ou décision",
    filterLabel: "Thèmes",
    emptyTitle: "Aucune note ne correspond à ce critère.",
    emptyBody: "Essayez un autre thème ou effacez la recherche pour revenir à la liste complète.",
    articles: [
      {
        iconName: "shield",
        category: "Identité",
        title: "La connexion ne devrait pas être le centre du système.",
        description:
          "L'identité moderne vit dans les sessions, politiques, événements, appareils, permissions et journaux d'audit. L'écran d'accès n'est qu'une porte.",
        meta: "Lecture technique · 6 min",
      },
      {
        iconName: "organization",
        category: "Architecture",
        title: "Modéliser les entités avant de concevoir les écrans.",
        description:
          "Utilisateurs, sessions, documents, tickets et webhooks ont besoin d'une forme claire avant que l'interface promette la simplicité.",
        meta: "Architecture · 8 min",
      },
      {
        iconName: "audit",
        category: "Opérations",
        title: "Les logs deviennent produit lorsqu'ils aident à décider.",
        description:
          "Un journal utile n'est pas une liste infinie; c'est une surface pour le support, la sécurité, l'audit et l'explication.",
        meta: "Product ops · 6 min",
      },
      {
        iconName: "lock",
        category: "Sécurité",
        title: "Confidentialité par conception pour les équipes en croissance.",
        description:
          "Il n'est pas nécessaire d'attendre l'échelle enterprise pour séparer les permissions, réduire l'exposition et documenter les décisions sensibles.",
        meta: "Critère technique · 5 min",
      },
      {
        iconName: "document",
        category: "Documents",
        title: "Une documentation opérationnelle qui réduit les conversations répétées.",
        description:
          "Un document utile ne se contente pas d'informer; il organise responsables, décisions, limites et preuves pour une révision ultérieure.",
        meta: "Documentation · 7 min",
      },
      {
        iconName: "workspace",
        category: "APIs",
        title: "Des contrats API compris avant l'intégration.",
        description:
          "Les endpoints enterprise ont besoin d'états, d'erreurs, d'audit et d'exemples qui réduisent l'ambiguïté dès la première intégration.",
        meta: "API thinking · 6 min",
      },
    ],
  },
  zh: {
    topics: ["全部", "身份", "安全", "文档", "运营", "架构", "APIs"],
    hero: {
      label: "Opendex 博客",
      title: "用更清晰的方式构建企业基础设施。",
      description:
        "当一个技术决策值得被严谨解释时，我们会发布关于身份、文档、安全、API 和运营的笔记。",
      primaryCta: "阅读精选",
      secondaryCta: "浏览主题",
      editorialLabel: "编辑台",
      editorialBody:
        "我们不是为了填满信息流。每篇文章都应该说明一个决策为何存在、降低什么风险，以及如何帮助团队更有信心地运营。",
    },
    featuredLabel: "精选文章",
    featuredTitle: "推荐阅读",
    primaryFeaturedPost: {
      eyebrow: "基础设施",
      title: "设计能够解释自身状态的系统。",
      description:
        "企业运营需要能够显示上下文、负责人、证据和下一步的界面，而不是依赖分散的对话。",
      meta: "主文章 · 8 分钟",
    },
    secondaryFeaturedPosts: [
      {
        eyebrow: "安全",
        title: "团队扩展之前先明确权限。",
        description:
          "准备充分的平台不只验证访问，还会让每个敏感决策背后的原因、边界和信号清晰可见。",
        meta: "技术指南 · 6 分钟",
      },
      {
        eyebrow: "产品",
        title: "企业软件不应该隐藏运营过程。",
        description:
          "当内部流程可以被审计、暂停、复核和解释时，它们就不再需要手动重建整个过程。",
        meta: "产品运营 · 5 分钟",
      },
    ],
    allPostsLabel: "浏览全部文章",
    allPostsTitle: "按运营标准探索笔记",
    searchLabel: "搜索文章",
    searchPlaceholder: "按主题、系统或决策搜索",
    filterLabel: "主题",
    emptyTitle: "没有找到符合条件的笔记。",
    emptyBody: "请尝试其他主题，或清空搜索返回完整列表。",
    articles: [
      {
        iconName: "shield",
        category: "身份",
        title: "登录不应该是系统的中心。",
        description:
          "现代身份存在于会话、策略、事件、设备、权限和审计中。访问页面只是其中一扇门。",
        meta: "技术阅读 · 6 分钟",
      },
      {
        iconName: "organization",
        category: "架构",
        title: "先建模实体，再设计界面。",
        description:
          "用户、会话、文档、工单和 webhook 都需要清晰的结构，然后界面才能表达简单。",
        meta: "架构 · 8 分钟",
      },
      {
        iconName: "audit",
        category: "运营",
        title: "当日志帮助决策时，它就是产品。",
        description:
          "有用的日志不是无尽列表，而是服务于支持、安全、审计和解释的工作界面。",
        meta: "产品运营 · 6 分钟",
      },
      {
        iconName: "lock",
        category: "安全",
        title: "为仍在增长的团队进行隐私设计。",
        description:
          "不必等到企业规模，才开始分离权限、降低暴露并记录敏感决策。",
        meta: "技术标准 · 5 分钟",
      },
      {
        iconName: "document",
        category: "文档",
        title: "减少重复沟通的运营文档。",
        description:
          "有用的文档不只是告知，还会组织负责人、决策、边界和后续复核所需的证据。",
        meta: "文档 · 7 分钟",
      },
      {
        iconName: "workspace",
        category: "APIs",
        title: "集成之前就能理解的 API 契约。",
        description:
          "企业接口需要状态、错误、审计和示例，从第一次集成开始减少歧义。",
        meta: "API 思考 · 6 分钟",
      },
    ],
  },
};

const blogSectionLabels: Record<
  Locale,
  {
    resourcesTitle: string;
    resourcesEyebrow: string;
    focusTitle: string;
    focusDescription: string;
    knowledgeTitle: string;
    topicLibraryTitle: string;
    topicLibraryDescription: string;
    latestTitle: string;
    latestDescription: string;
    resultsLabel: string;
    readArticle: string;
    exploreTopic: string;
    sortLabel: string;
  }
> = {
  es: {
    resourcesTitle: "Recursos recientes para decisiones operativas",
    resourcesEyebrow: "Últimas lecturas",
    focusTitle: "Temas que ayudan a operar con más criterio",
    focusDescription:
      "Una biblioteca editorial para equipos que necesitan entender arquitectura, identidad, seguridad y continuidad sin perder contexto.",
    knowledgeTitle: "Conocimiento base para equipos en crecimiento",
    topicLibraryTitle: "Explora contenido por especialidad",
    topicLibraryDescription:
      "Organiza la lectura por responsabilidades reales: seguridad, documentación, operación, arquitectura e integración.",
    latestTitle: "Todas las publicaciones",
    latestDescription: "Filtra por tema o busca una decisión técnica específica.",
    resultsLabel: "resultados",
    readArticle: "Leer artículo",
    exploreTopic: "Explorar tema",
    sortLabel: "Ordenar: recientes",
  },
  en: {
    resourcesTitle: "Recent resources for operational decisions",
    resourcesEyebrow: "Latest reads",
    focusTitle: "Topics that help teams operate with better judgment",
    focusDescription:
      "An editorial library for teams that need to understand architecture, identity, security and continuity without losing context.",
    knowledgeTitle: "Foundational knowledge for growing teams",
    topicLibraryTitle: "Explore content by specialty",
    topicLibraryDescription:
      "Organize reading by real responsibilities: security, documentation, operations, architecture and integration.",
    latestTitle: "All posts",
    latestDescription: "Filter by topic or search for a specific technical decision.",
    resultsLabel: "results",
    readArticle: "Read article",
    exploreTopic: "Explore topic",
    sortLabel: "Sort: latest",
  },
  pt: {
    resourcesTitle: "Recursos recentes para decisões operacionais",
    resourcesEyebrow: "Leituras recentes",
    focusTitle: "Temas que ajudam equipes a operar com mais critério",
    focusDescription:
      "Uma biblioteca editorial para equipes que precisam entender arquitetura, identidade, segurança e continuidade sem perder contexto.",
    knowledgeTitle: "Conhecimento base para equipes em crescimento",
    topicLibraryTitle: "Explore conteúdo por especialidade",
    topicLibraryDescription:
      "Organize a leitura por responsabilidades reais: segurança, documentação, operação, arquitetura e integração.",
    latestTitle: "Todas as publicações",
    latestDescription: "Filtre por tema ou busque uma decisão técnica específica.",
    resultsLabel: "resultados",
    readArticle: "Ler artigo",
    exploreTopic: "Explorar tema",
    sortLabel: "Ordenar: recentes",
  },
  fr: {
    resourcesTitle: "Ressources récentes pour les décisions opérationnelles",
    resourcesEyebrow: "Lectures récentes",
    focusTitle: "Sujets qui aident les équipes à mieux décider",
    focusDescription:
      "Une bibliothèque éditoriale pour comprendre architecture, identité, sécurité et continuité sans perdre le contexte.",
    knowledgeTitle: "Connaissances de base pour équipes en croissance",
    topicLibraryTitle: "Explorer le contenu par spécialité",
    topicLibraryDescription:
      "Organisez la lecture par responsabilités réelles : sécurité, documentation, opérations, architecture et intégration.",
    latestTitle: "Toutes les publications",
    latestDescription: "Filtrez par sujet ou recherchez une décision technique précise.",
    resultsLabel: "résultats",
    readArticle: "Lire l’article",
    exploreTopic: "Explorer le sujet",
    sortLabel: "Trier : récent",
  },
  zh: {
    resourcesTitle: "面向运营决策的最新资源",
    resourcesEyebrow: "最新阅读",
    focusTitle: "帮助团队更有判断力地运营的主题",
    focusDescription:
      "面向团队的编辑型知识库，用于理解架构、身份、安全与连续性，同时保留上下文。",
    knowledgeTitle: "成长团队的基础知识",
    topicLibraryTitle: "按专业领域浏览内容",
    topicLibraryDescription:
      "按真实责任组织阅读：安全、文档、运营、架构与集成。",
    latestTitle: "所有文章",
    latestDescription: "按主题筛选，或搜索具体技术决策。",
    resultsLabel: "个结果",
    readArticle: "阅读文章",
    exploreTopic: "浏览主题",
    sortLabel: "排序：最新",
  },
};

export default function BlogClient() {
  const { locale } = useI18n();
  const copy = blogCopy[locale];
  const labels = blogSectionLabels[locale];
  const allTopic = copy.topics[0] ?? "Todos";
  const [activeTopic, setActiveTopic] = React.useState(allTopic);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    setActiveTopic(allTopic);
  }, [allTopic]);

  const visibleArticles = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return copy.articles.filter((article) => {
      const matchesTopic = activeTopic === allTopic || article.category === activeTopic;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [article.category, article.title, article.description, article.meta]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesTopic && matchesQuery;
    });
  }, [activeTopic, allTopic, copy, query]);

  const resourceArticles = copy.articles.slice(0, 3);
  const focusArticles = copy.articles.slice(3, 6);
  const knowledgeArticles = copy.articles.slice(0, 6);
  const catalogArticles = visibleArticles;

  return (
    <main className="opx-blog">
      <section className="opx-blog-hero" aria-labelledby="blog-title">
        <div className="opx-blog-shell">
          <div className="opx-blog-hero-panel">
            <div className="opx-blog-hero-copy">
              <span className="opx-blog-label opx-blog-label-light">{copy.hero.label}</span>
              <h1 id="blog-title">{copy.hero.title}</h1>
              <p>{copy.hero.description}</p>
              <div className="opx-blog-actions" aria-label={copy.hero.secondaryCta}>
                <Link href="#featured-posts" className="btn btn-primary">
                  {copy.hero.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link href="#all-posts" className="btn btn-ghost">
                  {copy.hero.secondaryCta}
                </Link>
              </div>
            </div>

            <aside className="opx-blog-editorial-card" aria-label={copy.hero.editorialLabel}>
              <span>{copy.hero.editorialLabel}</span>
              <p>{copy.hero.editorialBody}</p>
              <div className="opx-blog-editorial-metrics" aria-hidden>
                <strong>{copy.topics.length - 1}</strong>
                <small>{copy.filterLabel}</small>
              </div>
            </aside>
          </div>

          <nav className="opx-blog-topics" aria-label={copy.filterLabel}>
            {copy.topics.map((topic) => (
              <button
                key={topic}
                type="button"
                aria-pressed={activeTopic === topic}
                onClick={() => setActiveTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <section className="opx-blog-resources" aria-labelledby="blog-resources-title">
        <div className="opx-blog-shell">
          <div className="opx-blog-resources-head">
            <span>{labels.resourcesEyebrow}</span>
            <h2 id="blog-resources-title">{labels.resourcesTitle}</h2>
          </div>

          <div className="opx-blog-resource-strip">
            {resourceArticles.map(({ iconName, category, title }, index) => (
              <article key={title} className="opx-blog-resource-card">
                <div>
                  <span>{category}</span>
                  <h3>{title}</h3>
                </div>
                <div className="opx-blog-resource-visual" aria-hidden>
                  <IdentityIcon name={iconName} size={28} className="h-7 w-7 object-contain" />
                  <small>{String(index + 1).padStart(2, "0")}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-posts" className="opx-blog-featured" aria-labelledby="featured-title">
        <div className="opx-blog-shell">
          <div className="opx-blog-section-head">
            <span className="opx-blog-label">{copy.featuredLabel}</span>
            <h2 id="featured-title">{copy.featuredTitle}</h2>
          </div>

          <div className="opx-blog-featured-layout">
            <article className="opx-blog-featured-primary">
              <span>{copy.primaryFeaturedPost.eyebrow}</span>
              <h3>{copy.primaryFeaturedPost.title}</h3>
              <p>{copy.primaryFeaturedPost.description}</p>
              <Link href="#all-posts" aria-label={labels.readArticle}>
                {labels.readArticle} <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>

            <div className="opx-blog-featured-side">
              {copy.secondaryFeaturedPosts.map((post) => (
                <article key={post.title} className="opx-blog-featured-secondary">
                  <div>
                    <span>{post.eyebrow}</span>
                    <small>{post.meta}</small>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="opx-blog-focus" aria-labelledby="blog-focus-title">
        <div className="opx-blog-shell">
          <div className="opx-blog-wide-head">
            <h2 id="blog-focus-title">{labels.focusTitle}</h2>
            <p>{labels.focusDescription}</p>
          </div>
          <div className="opx-blog-focus-grid">
            {focusArticles.map(({ iconName, category, title, description }, index) => (
              <article key={title} className="opx-blog-focus-card">
                <div className="opx-blog-focus-visual" aria-hidden>
                  <IdentityIcon name={iconName} size={34} className="h-[34px] w-[34px] object-contain" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <span>{category}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href="#all-posts">
                  {labels.exploreTopic} <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-blog-knowledge" aria-labelledby="blog-knowledge-title">
        <div className="opx-blog-shell">
          <h2 id="blog-knowledge-title">{labels.knowledgeTitle}</h2>
          <div className="opx-blog-knowledge-grid">
            {knowledgeArticles.map((article) => (
              <Link key={article.title} href="#all-posts" className="opx-blog-knowledge-link">
                <strong>{article.title}</strong>
                <span>{labels.readArticle} <ArrowRight className="h-4 w-4" aria-hidden /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-blog-topic-library" aria-labelledby="blog-topic-library-title">
        <div className="opx-blog-shell">
          <div>
            <h2 id="blog-topic-library-title">{labels.topicLibraryTitle}</h2>
            <p>{labels.topicLibraryDescription}</p>
          </div>
          <div className="opx-blog-topic-grid">
            {copy.topics.slice(1).map((topic) => (
              <button
                key={topic}
                type="button"
                aria-pressed={activeTopic === topic}
                onClick={() => {
                  setActiveTopic(topic);
                  document.getElementById("all-posts")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <span>{topic}</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="all-posts" className="opx-blog-index" aria-labelledby="all-posts-title">
        <div className="opx-blog-shell">
          <div className="opx-blog-index-head">
            <div>
              <span className="opx-blog-label">{copy.allPostsLabel}</span>
              <h2 id="all-posts-title">{labels.latestTitle}</h2>
              <p>{labels.latestDescription}</p>
            </div>
            <div className="opx-blog-index-tools">
              <label className="opx-blog-search">
                <Search className="h-4 w-4" aria-hidden />
                <span className="sr-only">{copy.searchLabel}</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={copy.searchPlaceholder}
                />
              </label>
              <span>{labels.sortLabel}</span>
            </div>
          </div>

          <div className="opx-blog-results-line">
            {catalogArticles.length} {labels.resultsLabel}
          </div>

          {catalogArticles.length > 0 ? (
            <div className="opx-blog-catalog" aria-live="polite">
              {catalogArticles.map(({ iconName, category, title, description, meta }) => (
                <article key={title} className="opx-blog-card">
                  <div className="opx-blog-card-visual" aria-hidden>
                    <IdentityIcon name={iconName} size={34} className="h-[34px] w-[34px] object-contain" />
                  </div>
                  <div className="opx-blog-row-meta">
                    <span>{category}</span>
                    <small>{meta}</small>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Link href="#all-posts" aria-label={`${labels.readArticle}: ${title}`}>
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="opx-blog-empty">
              <strong>{copy.emptyTitle}</strong>
              <p>{copy.emptyBody}</p>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
