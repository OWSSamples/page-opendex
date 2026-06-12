import type { Locale } from "./config";

export type CommonLabelKey =
  | "requestInfo"
  | "requestAccess"
  | "contactUs"
  | "careers"
  | "viewDocs"
  | "viewDocumentStatus"
  | "publicStatus"
  | "community"
  | "joinEarlyCircle"
  | "readNotes"
  | "viewIdentity"
  | "exploreIdentity"
  | "viewKiosko"
  | "viewSpec"
  | "interactiveDemo"
  | "prelaunchBadge"
  | "unavailableBadge"
  | "isolatedBetaBadge"
  | "privacyOptions"
  | "talkSales"
  | "viewProducts"
  | "shortcut"
  | "live"
  | "version"
  | "lastBuild"
  | "platformOperation"
  | "controlPlaneProduct"
  | "enterpriseStack"
  | "identity"
  | "fiscal"
  | "retail"
  | "commonModel"
  | "navDevelopers"
  | "navDocumentation"
  | "navProduct"
  | "navSolutions"
  | "navBlog"
  | "navPricing"
  | "register"
  | "connect"
  | "viewStatus";

export const commonLabels: Record<Locale, Record<CommonLabelKey, string>> = {
  es: {
    requestInfo: "Solicitar información",
    requestAccess: "Solicitar acceso",
    contactUs: "Contáctanos",
    careers: "Carreras",
    viewDocs: "Ver documentación",
    viewDocumentStatus: "Ver estado documental",
    viewStatus: "Ver status",
    publicStatus: "Estado público",
    community: "Comunidad",
    joinEarlyCircle: "Unirme al círculo inicial",
    readNotes: "Leer notas",
    viewIdentity: "Ver Identity Platform",
    exploreIdentity: "Explorar identidad",
    viewKiosko: "Ver Kiosko Workspaces",
    viewSpec: "Ver especificación",
    interactiveDemo: "Demo interactivo",
    prelaunchBadge: "Prelanzamiento · sin fecha pública",
    unavailableBadge: "No disponible · mejoras finales",
    isolatedBetaBadge: "Beta aislada · sin fecha pública",
    privacyOptions: "Tus opciones de privacidad",
    talkSales: "Hablar con ventas",
    viewProducts: "Ver productos",
    shortcut: "Atajo",
    live: "LIVE",
    version: "Versión",
    lastBuild: "Última build",
    platformOperation: "PLATAFORMA · OPERACIÓN",
    controlPlaneProduct: "CONTROL PLANE · PRODUCTO",
    enterpriseStack: "Enterprise stack",
    identity: "Identidad",
    fiscal: "Fiscal",
    retail: "Retail",
    commonModel: "Eventos + auditoría",
    navDevelopers: "Desarrolladores",
    navDocumentation: "Documentación",
    navProduct: "Producto",
    navSolutions: "Soluciones",
    navBlog: "Blog",
    navPricing: "Precios",
    register: "Registrarse",
    connect: "Conectarse",
  },
  en: {
    requestInfo: "Request information",
    requestAccess: "Request access",
    contactUs: "Contact us",
    careers: "Careers",
    viewDocs: "View documentation",
    viewDocumentStatus: "View documentation status",
    viewStatus: "View status",
    publicStatus: "Public status",
    community: "Community",
    joinEarlyCircle: "Join early circle",
    readNotes: "Read notes",
    viewIdentity: "View Identity Platform",
    exploreIdentity: "Explore identity",
    viewKiosko: "View Kiosko Workspaces",
    viewSpec: "View specification",
    interactiveDemo: "Interactive demo",
    prelaunchBadge: "Pre-launch · no public date",
    unavailableBadge: "Unavailable · final improvements",
    isolatedBetaBadge: "Isolated beta · no public date",
    privacyOptions: "Your privacy options",
    talkSales: "Talk with sales",
    viewProducts: "View products",
    shortcut: "Shortcut",
    live: "LIVE",
    version: "Version",
    lastBuild: "Last build",
    platformOperation: "PLATFORM · OPERATION",
    controlPlaneProduct: "CONTROL PLANE · PRODUCT",
    enterpriseStack: "Enterprise stack",
    identity: "Identity",
    fiscal: "Fiscal",
    retail: "Retail",
    commonModel: "Events + audit",
    navDevelopers: "Developers",
    navDocumentation: "Documentation",
    navProduct: "Product",
    navSolutions: "Solutions",
    navBlog: "Blog",
    navPricing: "Pricing",
    register: "Register",
    connect: "Sign in",
  },
  pt: {
    requestInfo: "Solicitar informações",
    requestAccess: "Solicitar acesso",
    contactUs: "Fale conosco",
    careers: "Carreiras",
    viewDocs: "Ver documentação",
    viewDocumentStatus: "Ver status documental",
    viewStatus: "Ver status",
    publicStatus: "Status público",
    community: "Comunidade",
    joinEarlyCircle: "Entrar no círculo inicial",
    readNotes: "Ler notas",
    viewIdentity: "Ver Identity Platform",
    exploreIdentity: "Explorar identidade",
    viewKiosko: "Ver Kiosko Workspaces",
    viewSpec: "Ver especificação",
    interactiveDemo: "Demo interativa",
    prelaunchBadge: "Pré-lançamento · sem data pública",
    unavailableBadge: "Indisponível · melhorias finais",
    isolatedBetaBadge: "Beta isolada · sem data pública",
    privacyOptions: "Suas opções de privacidade",
    talkSales: "Falar com vendas",
    viewProducts: "Ver produtos",
    shortcut: "Atalho",
    live: "AO VIVO",
    version: "Versão",
    lastBuild: "Última build",
    platformOperation: "PLATAFORMA · OPERAÇÃO",
    controlPlaneProduct: "CONTROL PLANE · PRODUTO",
    enterpriseStack: "Enterprise stack",
    identity: "Identidade",
    fiscal: "Fiscal",
    retail: "Varejo",
    commonModel: "Eventos + auditoria",
    navDevelopers: "Desenvolvedores",
    navDocumentation: "Documentação",
    navProduct: "Produto",
    navSolutions: "Soluções",
    navBlog: "Blog",
    navPricing: "Preços",
    register: "Registrar",
    connect: "Entrar",
  },
  fr: {
    requestInfo: "Demander des informations",
    requestAccess: "Demander l'accès",
    contactUs: "Nous contacter",
    careers: "Carrières",
    viewDocs: "Voir la documentation",
    viewDocumentStatus: "Voir le statut documentaire",
    viewStatus: "Voir le status",
    publicStatus: "Status public",
    community: "Communauté",
    joinEarlyCircle: "Rejoindre le cercle initial",
    readNotes: "Lire les notes",
    viewIdentity: "Voir Identity Platform",
    exploreIdentity: "Explorer l'identité",
    viewKiosko: "Voir Kiosko Workspaces",
    viewSpec: "Voir la spécification",
    interactiveDemo: "Démo interactive",
    prelaunchBadge: "Pré-lancement · aucune date publique",
    unavailableBadge: "Indisponible · dernières améliorations",
    isolatedBetaBadge: "Bêta isolée · aucune date publique",
    privacyOptions: "Vos options de confidentialité",
    talkSales: "Parler aux ventes",
    viewProducts: "Voir les produits",
    shortcut: "Raccourci",
    live: "LIVE",
    version: "Version",
    lastBuild: "Dernière build",
    platformOperation: "PLATEFORME · OPÉRATION",
    controlPlaneProduct: "CONTROL PLANE · PRODUIT",
    enterpriseStack: "Enterprise stack",
    identity: "Identité",
    fiscal: "Fiscal",
    retail: "Retail",
    commonModel: "Événements + audit",
    navDevelopers: "Développeurs",
    navDocumentation: "Documentation",
    navProduct: "Produit",
    navSolutions: "Solutions",
    navBlog: "Blog",
    navPricing: "Tarifs",
    register: "S'inscrire",
    connect: "Se connecter",
  },
  zh: {
    requestInfo: "索取信息",
    requestAccess: "申请访问",
    contactUs: "联系我们",
    careers: "招聘",
    viewDocs: "查看文档",
    viewDocumentStatus: "查看文档状态",
    viewStatus: "查看状态",
    publicStatus: "公开状态",
    community: "社区",
    joinEarlyCircle: "加入早期圈子",
    readNotes: "阅读笔记",
    viewIdentity: "查看 Identity Platform",
    exploreIdentity: "探索身份能力",
    viewKiosko: "查看 Kiosko Workspaces",
    viewSpec: "查看规格",
    interactiveDemo: "交互演示",
    prelaunchBadge: "预发布 · 无公开日期",
    unavailableBadge: "暂不可用 · 最终改进中",
    isolatedBetaBadge: "隔离测试版 · 无公开日期",
    privacyOptions: "你的隐私选项",
    talkSales: "联系销售",
    viewProducts: "查看产品",
    shortcut: "快捷键",
    live: "LIVE",
    version: "版本",
    lastBuild: "最新构建",
    platformOperation: "平台 · 运营",
    controlPlaneProduct: "CONTROL PLANE · 产品",
    enterpriseStack: "Enterprise stack",
    identity: "身份",
    fiscal: "财税",
    retail: "零售",
    commonModel: "事件 + 审计",
    navDevelopers: "开发者",
    navDocumentation: "文档",
    navProduct: "产品",
    navSolutions: "解决方案",
    navBlog: "博客",
    navPricing: "价格",
    register: "注册",
    connect: "登录",
  },
};
