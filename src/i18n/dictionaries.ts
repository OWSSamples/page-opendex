import type { Locale } from "./config";

export type FooterColumn = { title: string; links: [string, string][] };

export const dictionaries = {
  es: {
    language: {
      aria: "Cambiar idioma",
      current: "Idioma actual",
    },
    navbar: {
      announcement: "Opendex Web Services prepara su siguiente generación de plataformas",
      contact: "Contactar",
      login: "Inicio de sesión",
    },
    footer: {
      description:
        "Infraestructura crítica para construir y escalar productos en LATAM: identidad, fiscal y retail bajo una sola plataforma.",
      columns: [
        {
          title: "Productos",
          links: [
            ["Identity Platform", "/productos/auth"],
            ["Factur Workspaces", "/productos/invoice"],
            ["Kiosko Workspaces", "/productos/kiosko"],
            ["Portafolio", "/productos"],
            ["Precios", "/precios"],
          ],
        },
        {
          title: "Soluciones",
          links: [
            ["Fintech", "/soluciones/fintech"],
            ["SaaS B2B", "/soluciones/saas"],
            ["Retail", "/soluciones/retail"],
            ["Empresas en México", "/empresa"],
          ],
        },
        {
          title: "Recursos",
          links: [
            ["Documentación", "/documentacion"],
            ["Guías", "/documentacion#guides"],
            ["API", "/documentacion#api"],
            ["SDKs", "/documentacion#sdks"],
            ["Blog", "/blog"],
            ["FAQ", "/faq"],
          ],
        },
        {
          title: "Empresa",
          links: [
            ["Sobre Opendex", "/empresa"],
            ["Comunidad", "/comunidad"],
            ["Contacto", "/contacto"],
            ["Status", "/status"],
            ["Blog", "/blog"],
          ],
        },
        {
          title: "Seguridad",
          links: [
            ["Principios", "/seguridad"],
            ["Privacidad", "/legal/privacidad"],
            ["DPA", "/empresa#dpa"],
            ["Contacto técnico", "/contacto"],
          ],
        },
        {
          title: "Acceso",
          links: [
            ["Login reservado", "/login"],
            ["Solicitar información", "/contacto"],
            ["Soporte técnico", "/contacto"],
            ["Estado público", "/status"],
          ],
        },
      ] satisfies FooterColumn[],
    },
    productsPage: {
      eyebrow: "Portafolio operativo",
      title: "Alcance, estado y siguiente paso en una sola vista.",
      description:
        "La distribución prioriza comparación y lectura rápida: qué resuelve cada línea, qué señales la sostienen, qué capacidades incluye y hacia dónde continuar sin depender de elementos decorativos.",
      stats: [
        ["03", "líneas de trabajo"],
        ["01", "mapa operativo"],
        ["UX", "lectura responsive"],
        ["AA", "contraste objetivo"],
      ] as [string, string][],
      labels: {
        signal: "Señal",
        scope: "Alcance",
        detail: "Ver detalle",
        request: "Solicitar información",
      },
      products: [
        {
          name: "Opendex Identity Platform",
          tagline: "Control de acceso",
          desc: "Capa de identidad pensada para usuarios, sesiones, permisos y auditoría dentro del ecosistema Opendex.",
          status: "Prelanzamiento",
          features: ["Usuarios y sesiones", "Políticas de acceso", "Eventos de auditoría", "Workspaces"],
          signal: "Acceso · riesgo · auditoría",
          scope: "Control de identidad para entornos con permisos y sesiones trazables.",
        },
        {
          name: "Factur Workspaces",
          tagline: "Operación fiscal",
          desc: "Workspace para ordenar documentos, estados, validaciones y seguimiento administrativo.",
          status: "No disponible",
          features: ["Estados documentales", "Validaciones", "Roles administrativos", "Evidencia"],
          signal: "Documentos · revisión · evidencia",
          scope: "Orden fiscal para equipos que necesitan saber qué falta, qué cambió y quién intervino.",
        },
        {
          name: "Opendex Kiosko Workspaces",
          tagline: "Retail y sucursales",
          desc: "Entorno para caja, inventario, cortes y lectura operativa por punto de venta.",
          status: "Beta aislada",
          features: ["Inventario y SKUs", "Tickets y cortes", "Multi-sucursal", "Entorno aislado"],
          signal: "Sucursal · caja · inventario",
          scope: "Lectura operativa para puntos de venta, actividad diaria y seguimiento por sucursal.",
        },
      ],
    },
    contactPage: {
      header: {
        eyebrow: "Contacto",
        title: "Hablemos sobre lo que necesitas construir o cotizar.",
        description:
          "Usa esta página para solicitar contexto técnico, estado de una línea interna o una cotización para creación de página web.",
      },
      form: {
        kicker: "Cotización web",
        title: "Define el alcance desde el primer mensaje.",
        description:
          "Para cotizar una página web necesitamos entender objetivo, contenido, secciones, prioridad y referencias. Con eso podemos responder con una propuesta más precisa.",
        available: "Disponible para cotizar",
        sentTitle: "Mensaje recibido",
        sentDescription:
          "Revisaremos el contexto y responderemos con el siguiente paso según el alcance que seleccionaste.",
        sendAnother: "Enviar otro mensaje",
        name: "Nombre",
        namePlaceholder: "Nombre completo",
        company: "Empresa o proyecto",
        companyPlaceholder: "Nombre de la marca",
        email: "Email de trabajo",
        emailHelp: "Usaremos este correo para responderte.",
        emailPlaceholder: "tu@empresa.com",
        timeline: "Fecha objetivo",
        timelinePlaceholder: "Ej. 3 a 5 semanas",
        requestType: "Tipo de solicitud",
        options: ["Página web corporativa", "Landing page", "Rediseño de sitio", "Mantenimiento web", "Consultoría técnica"],
        message: "Mensaje",
        messageHelp: "Incluye objetivo, páginas necesarias, contenido disponible, referencias y prioridad.",
        messagePlaceholder:
          "Queremos cotizar una página web corporativa con secciones de inicio, servicios, portafolio y contacto...",
        note: "Si todavía no tienes todo definido, envía el contexto general. Podemos ordenar el alcance antes de cotizar.",
        submit: "Solicitar cotización",
      },
      sidebar: {
        kicker: "Para cotizar mejor",
        title: "Información que acelera la propuesta.",
        checklist: [
          "Objetivo comercial del sitio",
          "Secciones y contenido disponible",
          "Referencias visuales o marca existente",
          "Fecha objetivo y prioridad",
        ],
        highlights: [
          ["Sitios responsive", "Diseños claros para móvil, tablet y escritorio, con estructura preparada para crecer."],
          ["Alcance definido", "Cotización basada en objetivos, número de secciones, contenido y nivel de personalización."],
          ["Entrega cuidada", "Jerarquía visual, accesibilidad básica, rendimiento y mensajes alineados al negocio."],
        ],
        channels: "Canales directos",
        channelTitles: ["Cotizaciones", "Empresas", "Contexto técnico"],
        productLines: "Ver líneas internas de Opendex",
      },
    },
  },
  en: {
    language: {
      aria: "Change language",
      current: "Current language",
    },
    navbar: {
      announcement: "Opendex Web Services is preparing its next generation of platforms",
      contact: "Contact",
      login: "Sign in",
    },
    footer: {
      description:
        "Critical infrastructure to build and scale products in LATAM: identity, fiscal workflows and retail operations under one platform.",
      columns: [
        { title: "Products", links: [["Identity Platform", "/productos/auth"], ["Factur Workspaces", "/productos/invoice"], ["Kiosko Workspaces", "/productos/kiosko"], ["Portfolio", "/productos"], ["Pricing", "/precios"]] },
        { title: "Solutions", links: [["Fintech", "/soluciones/fintech"], ["B2B SaaS", "/soluciones/saas"], ["Retail", "/soluciones/retail"], ["Companies in Mexico", "/empresa"]] },
        { title: "Resources", links: [["Documentation", "/documentacion"], ["Guides", "/documentacion#guides"], ["API", "/documentacion#api"], ["SDKs", "/documentacion#sdks"], ["Blog", "/blog"], ["FAQ", "/faq"]] },
        { title: "Company", links: [["About Opendex", "/empresa"], ["Community", "/comunidad"], ["Contact", "/contacto"], ["Status", "/status"], ["Blog", "/blog"]] },
        { title: "Security", links: [["Principles", "/seguridad"], ["Privacy", "/legal/privacidad"], ["DPA", "/empresa#dpa"], ["Technical contact", "/contacto"]] },
        { title: "Access", links: [["Reserved login", "/login"], ["Request information", "/contacto"], ["Technical support", "/contacto"], ["Public status", "/status"]] },
      ] satisfies FooterColumn[],
    },
    productsPage: {
      eyebrow: "Operational portfolio",
      title: "Scope, status and next step in one view.",
      description:
        "The layout prioritizes comparison and fast reading: what each line solves, which signals support it, which capabilities it includes and where to continue.",
      stats: [["03", "work lines"], ["01", "operational map"], ["UX", "responsive reading"], ["AA", "contrast target"]] as [string, string][],
      labels: { signal: "Signal", scope: "Scope", detail: "View detail", request: "Request information" },
      products: [
        { name: "Opendex Identity Platform", tagline: "Access control", desc: "Identity layer for users, sessions, permissions and auditability inside the Opendex ecosystem.", status: "Pre-launch", features: ["Users and sessions", "Access policies", "Audit events", "Workspaces"], signal: "Access · risk · audit", scope: "Identity control for environments with traceable permissions and sessions." },
        { name: "Factur Workspaces", tagline: "Fiscal operations", desc: "Workspace to organize documents, states, validations and administrative follow-up.", status: "Unavailable", features: ["Document states", "Validations", "Administrative roles", "Evidence"], signal: "Documents · review · evidence", scope: "Fiscal order for teams that need to know what is missing, what changed and who intervened." },
        { name: "Opendex Kiosko Workspaces", tagline: "Retail and branches", desc: "Environment for checkout, inventory, closing reports and operational reading per point of sale.", status: "Isolated beta", features: ["Inventory and SKUs", "Tickets and closing", "Multi-branch", "Isolated environment"], signal: "Branch · checkout · inventory", scope: "Operational reading for points of sale, daily activity and branch-level follow-up." },
      ],
    },
    contactPage: {
      header: { eyebrow: "Contact", title: "Let's talk about what you need to build or quote.", description: "Use this page to request technical context, status for an internal line or a quote for website creation." },
      form: { kicker: "Website quote", title: "Define scope from the first message.", description: "To quote a website we need to understand objective, content, sections, priority and references. With that we can respond with a more precise proposal.", available: "Available for quotes", sentTitle: "Message received", sentDescription: "We will review the context and respond with the next step based on the selected scope.", sendAnother: "Send another message", name: "Name", namePlaceholder: "Full name", company: "Company or project", companyPlaceholder: "Brand name", email: "Work email", emailHelp: "We will use this email to reply.", emailPlaceholder: "you@company.com", timeline: "Target date", timelinePlaceholder: "E.g. 3 to 5 weeks", requestType: "Request type", options: ["Corporate website", "Landing page", "Website redesign", "Website maintenance", "Technical consulting"], message: "Message", messageHelp: "Include objective, required pages, available content, references and priority.", messagePlaceholder: "We want to quote a corporate website with home, services, portfolio and contact sections...", note: "If you do not have everything defined yet, send the general context. We can organize the scope before quoting.", submit: "Request quote" },
      sidebar: { kicker: "To quote better", title: "Information that speeds up the proposal.", checklist: ["Business objective of the site", "Sections and available content", "Visual references or existing brand", "Target date and priority"], highlights: [["Responsive sites", "Clear designs for mobile, tablet and desktop, with structure prepared to grow."], ["Defined scope", "Quote based on objectives, number of sections, content and level of customization."], ["Careful delivery", "Visual hierarchy, basic accessibility, performance and business-aligned messaging."]], channels: "Direct channels", channelTitles: ["Quotes", "Companies", "Technical context"], productLines: "View Opendex internal lines" },
    },
  },
  pt: {
    language: { aria: "Alterar idioma", current: "Idioma atual" },
    navbar: { announcement: "A Opendex Web Services prepara sua próxima geração de plataformas", contact: "Contato", login: "Entrar" },
    footer: {
      description: "Infraestrutura crítica para criar e escalar produtos na LATAM: identidade, fiscal e varejo em uma só plataforma.",
      columns: [
        { title: "Produtos", links: [["Identity Platform", "/productos/auth"], ["Factur Workspaces", "/productos/invoice"], ["Kiosko Workspaces", "/productos/kiosko"], ["Portfólio", "/productos"], ["Preços", "/precios"]] },
        { title: "Soluções", links: [["Fintech", "/soluciones/fintech"], ["SaaS B2B", "/soluciones/saas"], ["Varejo", "/soluciones/retail"], ["Empresas no México", "/empresa"]] },
        { title: "Recursos", links: [["Documentação", "/documentacion"], ["Guias", "/documentacion#guides"], ["API", "/documentacion#api"], ["SDKs", "/documentacion#sdks"], ["Blog", "/blog"], ["FAQ", "/faq"]] },
        { title: "Empresa", links: [["Sobre Opendex", "/empresa"], ["Comunidade", "/comunidad"], ["Contato", "/contacto"], ["Status", "/status"], ["Blog", "/blog"]] },
        { title: "Segurança", links: [["Princípios", "/seguridad"], ["Privacidade", "/legal/privacidad"], ["DPA", "/empresa#dpa"], ["Contato técnico", "/contacto"]] },
        { title: "Acesso", links: [["Login reservado", "/login"], ["Solicitar informações", "/contacto"], ["Suporte técnico", "/contacto"], ["Status público", "/status"]] },
      ] satisfies FooterColumn[],
    },
    productsPage: {
      eyebrow: "Portfólio operacional",
      title: "Escopo, status e próximo passo em uma só visão.",
      description: "A distribuição prioriza comparação e leitura rápida: o que cada linha resolve, quais sinais a sustentam, quais capacidades inclui e onde continuar.",
      stats: [["03", "linhas de trabalho"], ["01", "mapa operacional"], ["UX", "leitura responsiva"], ["AA", "meta de contraste"]] as [string, string][],
      labels: { signal: "Sinal", scope: "Escopo", detail: "Ver detalhe", request: "Solicitar informações" },
      products: [
        { name: "Opendex Identity Platform", tagline: "Controle de acesso", desc: "Camada de identidade para usuários, sessões, permissões e auditoria dentro do ecossistema Opendex.", status: "Pré-lançamento", features: ["Usuários e sessões", "Políticas de acesso", "Eventos de auditoria", "Workspaces"], signal: "Acesso · risco · auditoria", scope: "Controle de identidade para ambientes com permissões e sessões rastreáveis." },
        { name: "Factur Workspaces", tagline: "Operação fiscal", desc: "Workspace para organizar documentos, estados, validações e acompanhamento administrativo.", status: "Indisponível", features: ["Estados documentais", "Validações", "Funções administrativas", "Evidência"], signal: "Documentos · revisão · evidência", scope: "Ordem fiscal para equipes que precisam saber o que falta, o que mudou e quem interveio." },
        { name: "Opendex Kiosko Workspaces", tagline: "Varejo e filiais", desc: "Ambiente para caixa, inventário, fechamentos e leitura operacional por ponto de venda.", status: "Beta isolada", features: ["Inventário e SKUs", "Tickets e fechamentos", "Multi-filial", "Ambiente isolado"], signal: "Filial · caixa · inventário", scope: "Leitura operacional para pontos de venda, atividade diária e acompanhamento por filial." },
      ],
    },
    contactPage: {
      header: { eyebrow: "Contato", title: "Vamos falar sobre o que você precisa construir ou cotar.", description: "Use esta página para solicitar contexto técnico, status de uma linha interna ou uma cotação para criação de site." },
      form: { kicker: "Cotação web", title: "Defina o escopo desde a primeira mensagem.", description: "Para cotar um site precisamos entender objetivo, conteúdo, seções, prioridade e referências. Com isso podemos responder com uma proposta mais precisa.", available: "Disponível para cotação", sentTitle: "Mensagem recebida", sentDescription: "Vamos revisar o contexto e responder com o próximo passo conforme o escopo selecionado.", sendAnother: "Enviar outra mensagem", name: "Nome", namePlaceholder: "Nome completo", company: "Empresa ou projeto", companyPlaceholder: "Nome da marca", email: "Email profissional", emailHelp: "Usaremos este email para responder.", emailPlaceholder: "voce@empresa.com", timeline: "Data objetivo", timelinePlaceholder: "Ex. 3 a 5 semanas", requestType: "Tipo de solicitação", options: ["Site corporativo", "Landing page", "Redesign de site", "Manutenção web", "Consultoria técnica"], message: "Mensagem", messageHelp: "Inclua objetivo, páginas necessárias, conteúdo disponível, referências e prioridade.", messagePlaceholder: "Queremos cotar um site corporativo com seções de início, serviços, portfólio e contato...", note: "Se ainda não tiver tudo definido, envie o contexto geral. Podemos organizar o escopo antes da cotação.", submit: "Solicitar cotação" },
      sidebar: { kicker: "Para cotar melhor", title: "Informações que aceleram a proposta.", checklist: ["Objetivo comercial do site", "Seções e conteúdo disponível", "Referências visuais ou marca existente", "Data objetivo e prioridade"], highlights: [["Sites responsivos", "Designs claros para celular, tablet e desktop, com estrutura preparada para crescer."], ["Escopo definido", "Cotação baseada em objetivos, número de seções, conteúdo e nível de personalização."], ["Entrega cuidadosa", "Hierarquia visual, acessibilidade básica, desempenho e mensagens alinhadas ao negócio."]], channels: "Canais diretos", channelTitles: ["Cotações", "Empresas", "Contexto técnico"], productLines: "Ver linhas internas da Opendex" },
    },
  },
  fr: {
    language: { aria: "Changer de langue", current: "Langue actuelle" },
    navbar: { announcement: "Opendex Web Services prépare sa prochaine génération de plateformes", contact: "Contact", login: "Connexion" },
    footer: {
      description: "Infrastructure critique pour créer et faire évoluer des produits en LATAM : identité, fiscalité et retail sur une seule plateforme.",
      columns: [
        { title: "Produits", links: [["Identity Platform", "/productos/auth"], ["Factur Workspaces", "/productos/invoice"], ["Kiosko Workspaces", "/productos/kiosko"], ["Portefeuille", "/productos"], ["Tarifs", "/precios"]] },
        { title: "Solutions", links: [["Fintech", "/soluciones/fintech"], ["SaaS B2B", "/soluciones/saas"], ["Retail", "/soluciones/retail"], ["Entreprises au Mexique", "/empresa"]] },
        { title: "Ressources", links: [["Documentation", "/documentacion"], ["Guides", "/documentacion#guides"], ["API", "/documentacion#api"], ["SDKs", "/documentacion#sdks"], ["Blog", "/blog"], ["FAQ", "/faq"]] },
        { title: "Entreprise", links: [["À propos d'Opendex", "/empresa"], ["Communauté", "/comunidad"], ["Contact", "/contacto"], ["Status", "/status"], ["Blog", "/blog"]] },
        { title: "Sécurité", links: [["Principes", "/seguridad"], ["Confidentialité", "/legal/privacidad"], ["DPA", "/empresa#dpa"], ["Contact technique", "/contacto"]] },
        { title: "Accès", links: [["Connexion réservée", "/login"], ["Demander des informations", "/contacto"], ["Support technique", "/contacto"], ["Status public", "/status"]] },
      ] satisfies FooterColumn[],
    },
    productsPage: {
      eyebrow: "Portefeuille opérationnel",
      title: "Portée, statut et prochaine étape dans une seule vue.",
      description: "La mise en page privilégie la comparaison et la lecture rapide : ce que chaque ligne résout, quels signaux la soutiennent, quelles capacités elle inclut et où continuer.",
      stats: [["03", "lignes de travail"], ["01", "carte opérationnelle"], ["UX", "lecture responsive"], ["AA", "objectif de contraste"]] as [string, string][],
      labels: { signal: "Signal", scope: "Portée", detail: "Voir le détail", request: "Demander des informations" },
      products: [
        { name: "Opendex Identity Platform", tagline: "Contrôle d'accès", desc: "Couche d'identité pour utilisateurs, sessions, permissions et auditabilité dans l'écosystème Opendex.", status: "Pré-lancement", features: ["Utilisateurs et sessions", "Politiques d'accès", "Événements d'audit", "Workspaces"], signal: "Accès · risque · audit", scope: "Contrôle d'identité pour des environnements avec permissions et sessions traçables." },
        { name: "Factur Workspaces", tagline: "Opération fiscale", desc: "Workspace pour organiser documents, états, validations et suivi administratif.", status: "Indisponible", features: ["États documentaires", "Validations", "Rôles administratifs", "Évidence"], signal: "Documents · révision · évidence", scope: "Ordre fiscal pour les équipes qui doivent savoir ce qui manque, ce qui a changé et qui est intervenu." },
        { name: "Opendex Kiosko Workspaces", tagline: "Retail et succursales", desc: "Environnement pour caisse, inventaire, clôtures et lecture opérationnelle par point de vente.", status: "Bêta isolée", features: ["Inventaire et SKUs", "Tickets et clôtures", "Multi-succursale", "Environnement isolé"], signal: "Succursale · caisse · inventaire", scope: "Lecture opérationnelle pour points de vente, activité quotidienne et suivi par succursale." },
      ],
    },
    contactPage: {
      header: { eyebrow: "Contact", title: "Parlons de ce que vous devez construire ou chiffrer.", description: "Utilisez cette page pour demander du contexte technique, le statut d'une ligne interne ou un devis pour la création de site web." },
      form: { kicker: "Devis web", title: "Définissez la portée dès le premier message.", description: "Pour chiffrer un site web, nous devons comprendre l'objectif, le contenu, les sections, la priorité et les références. Cela permet une proposition plus précise.", available: "Disponible pour devis", sentTitle: "Message reçu", sentDescription: "Nous examinerons le contexte et répondrons avec la prochaine étape selon la portée sélectionnée.", sendAnother: "Envoyer un autre message", name: "Nom", namePlaceholder: "Nom complet", company: "Entreprise ou projet", companyPlaceholder: "Nom de la marque", email: "Email professionnel", emailHelp: "Nous utiliserons cet email pour répondre.", emailPlaceholder: "vous@entreprise.com", timeline: "Date cible", timelinePlaceholder: "Ex. 3 à 5 semaines", requestType: "Type de demande", options: ["Site web corporate", "Landing page", "Refonte de site", "Maintenance web", "Conseil technique"], message: "Message", messageHelp: "Incluez l'objectif, les pages nécessaires, le contenu disponible, les références et la priorité.", messagePlaceholder: "Nous voulons chiffrer un site corporate avec accueil, services, portefeuille et contact...", note: "Si tout n'est pas encore défini, envoyez le contexte général. Nous pouvons organiser la portée avant le devis.", submit: "Demander un devis" },
      sidebar: { kicker: "Pour mieux chiffrer", title: "Informations qui accélèrent la proposition.", checklist: ["Objectif commercial du site", "Sections et contenu disponible", "Références visuelles ou marque existante", "Date cible et priorité"], highlights: [["Sites responsive", "Designs clairs pour mobile, tablette et desktop, avec une structure prête à évoluer."], ["Portée définie", "Devis basé sur les objectifs, le nombre de sections, le contenu et le niveau de personnalisation."], ["Livraison soignée", "Hiérarchie visuelle, accessibilité de base, performance et messages alignés au business."]], channels: "Canaux directs", channelTitles: ["Devis", "Entreprises", "Contexte technique"], productLines: "Voir les lignes internes d'Opendex" },
    },
  },
  zh: {
    language: { aria: "切换语言", current: "当前语言" },
    navbar: { announcement: "Opendex Web Services 正在准备下一代平台", contact: "联系", login: "登录" },
    footer: {
      description: "面向 LATAM 产品构建与扩展的关键基础设施：身份、财税流程与零售运营整合在同一平台下。",
      columns: [
        { title: "产品", links: [["Identity Platform", "/productos/auth"], ["Factur Workspaces", "/productos/invoice"], ["Kiosko Workspaces", "/productos/kiosko"], ["作品集", "/productos"], ["价格", "/precios"]] },
        { title: "解决方案", links: [["金融科技", "/soluciones/fintech"], ["B2B SaaS", "/soluciones/saas"], ["零售", "/soluciones/retail"], ["墨西哥企业", "/empresa"]] },
        { title: "资源", links: [["文档", "/documentacion"], ["指南", "/documentacion#guides"], ["API", "/documentacion#api"], ["SDK", "/documentacion#sdks"], ["博客", "/blog"], ["FAQ", "/faq"]] },
        { title: "公司", links: [["关于 Opendex", "/empresa"], ["社区", "/comunidad"], ["联系", "/contacto"], ["状态", "/status"], ["博客", "/blog"]] },
        { title: "安全", links: [["原则", "/seguridad"], ["隐私", "/legal/privacidad"], ["DPA", "/empresa#dpa"], ["技术联系", "/contacto"]] },
        { title: "访问", links: [["保留登录", "/login"], ["索取信息", "/contacto"], ["技术支持", "/contacto"], ["公开状态", "/status"]] },
      ] satisfies FooterColumn[],
    },
    productsPage: {
      eyebrow: "运营作品集",
      title: "在一个视图中查看范围、状态与下一步。",
      description: "页面布局优先支持快速比较和阅读：每条产品线解决什么问题、由哪些信号支撑、包含哪些能力，以及下一步该去哪里。",
      stats: [["03", "工作线"], ["01", "运营地图"], ["UX", "响应式阅读"], ["AA", "对比度目标"]] as [string, string][],
      labels: { signal: "信号", scope: "范围", detail: "查看详情", request: "索取信息" },
      products: [
        { name: "Opendex Identity Platform", tagline: "访问控制", desc: "面向 Opendex 生态中用户、会话、权限与审计能力的身份层。", status: "预发布", features: ["用户与会话", "访问策略", "审计事件", "工作区"], signal: "访问 · 风险 · 审计", scope: "适用于需要可追踪权限和会话的环境的身份控制。" },
        { name: "Factur Workspaces", tagline: "财税运营", desc: "用于整理文档、状态、校验和行政跟进的工作区。", status: "暂不可用", features: ["文档状态", "校验", "管理角色", "证据"], signal: "文档 · 审查 · 证据", scope: "帮助团队了解缺少什么、发生了什么变化以及谁参与处理的财税秩序。" },
        { name: "Opendex Kiosko Workspaces", tagline: "零售与门店", desc: "面向收银、库存、结算和按销售点读取运营状态的环境。", status: "隔离测试版", features: ["库存与 SKU", "票据与结算", "多门店", "隔离环境"], signal: "门店 · 收银 · 库存", scope: "用于销售点、日常活动和门店级跟进的运营视图。" },
      ],
    },
    contactPage: {
      header: { eyebrow: "联系", title: "聊聊你需要构建或报价的内容。", description: "通过此页面请求技术背景、内部产品线状态，或获取网站创建服务报价。" },
      form: { kicker: "网站报价", title: "从第一条消息开始明确范围。", description: "为了给网站项目报价，我们需要了解目标、内容、页面区块、优先级和参考资料。这样可以给出更准确的方案。", available: "可接受报价咨询", sentTitle: "消息已收到", sentDescription: "我们会查看背景信息，并根据你选择的范围回复下一步。", sendAnother: "发送另一条消息", name: "姓名", namePlaceholder: "完整姓名", company: "公司或项目", companyPlaceholder: "品牌名称", email: "工作邮箱", emailHelp: "我们将使用此邮箱回复你。", emailPlaceholder: "you@company.com", timeline: "目标日期", timelinePlaceholder: "例如 3 到 5 周", requestType: "请求类型", options: ["企业网站", "落地页", "网站改版", "网站维护", "技术咨询"], message: "消息", messageHelp: "请包含目标、所需页面、现有内容、参考资料和优先级。", messagePlaceholder: "我们想为企业网站报价，包含首页、服务、作品集和联系页面...", note: "如果还没有全部确定，可以先发送整体背景。我们可以在报价前一起整理范围。", submit: "请求报价" },
      sidebar: { kicker: "为了更准确报价", title: "能加快方案推进的信息。", checklist: ["网站的商业目标", "已有页面结构与内容", "视觉参考或现有品牌资料", "目标日期与优先级"], highlights: [["响应式网站", "面向手机、平板和桌面的清晰设计，并预留可扩展结构。"], ["范围明确", "基于目标、页面数量、内容和定制程度进行报价。"], ["交付严谨", "关注视觉层级、基础可访问性、性能和贴合业务的信息表达。"]], channels: "直接渠道", channelTitles: ["报价", "企业", "技术背景"], productLines: "查看 Opendex 内部产品线" },
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
