export const siteConfig = {
  name: "Opendex Web Services",
  shortName: "Opendex",
  url: "https://opendex.com",
  locale: "es_MX",
  description:
    "Infraestructura para productos SaaS: autenticacion con passkeys, facturacion CFDI 4.0 Mexico y punto de venta moderno para equipos que necesitan operar con trazabilidad.",
  email: "hola@opendex.com",
  social: {
    x: "https://x.com/opendexhq",
    github: "https://github.com/opendex",
    linkedin: "https://linkedin.com/company/opendex",
  },
  keywords: [
    "Opendex",
    "infraestructura SaaS",
    "autenticacion passkeys",
    "facturacion CFDI 4.0",
    "punto de venta retail",
    "SaaS B2B Mexico",
    "seguridad operativa",
    "trazabilidad empresarial",
  ],
} as const;

export type SiteRoute = {
  path: string;
  title: string;
  description: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly";
};

export const siteRoutes: SiteRoute[] = [
  {
    path: "/",
    title: "Infraestructura clara para operar sin perder contexto",
    description:
      "Opendex conecta acceso, evidencia y trabajo diario en una base empresarial para equipos SaaS, retail y operaciones sensibles.",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/productos",
    title: "Productos de Opendex",
    description:
      "Explora Identity Platform, Factur Workspaces y Kiosko Workspaces con estado, alcance y capacidades de cada linea.",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/productos/auth",
    title: "Opendex Identity Platform",
    description:
      "Autenticacion empresarial con passkeys, SSO, MFA, sesiones y auditoria para productos SaaS modernos.",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/productos/invoice",
    title: "Factur Workspaces",
    description:
      "Workspace fiscal para ordenar documentos, estados, validaciones y seguimiento administrativo de CFDI 4.0.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/productos/kiosko",
    title: "Opendex Kiosko Workspaces",
    description:
      "Punto de venta para retail con inventario, caja, tickets, cortes y lectura operativa por sucursal.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/soluciones/saas",
    title: "Soluciones SaaS B2B",
    description:
      "Arquitectura para organizaciones, roles, soporte por cuenta y trazabilidad en productos SaaS B2B.",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/soluciones/fintech",
    title: "Soluciones Fintech",
    description:
      "Gobierno de acceso, evidencia operativa y controles para flujos financieros sensibles.",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/soluciones/retail",
    title: "Soluciones Retail",
    description:
      "Operacion por sucursal, caja, inventario y documentos para equipos retail y e-commerce.",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/precios",
    title: "Precios de Opendex",
    description:
      "Modelo comercial en preparacion por producto, basado en disponibilidad real, volumen y soporte requerido.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/seguridad",
    title: "Seguridad en Opendex",
    description:
      "Principios de seguridad, privacidad, control de acceso y operacion responsable para productos Opendex.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/documentacion",
    title: "Documentacion de Opendex",
    description:
      "Guias, contratos, recursos y patrones de integracion preparados para las lineas de producto Opendex.",
    priority: 0.7,
    changeFrequency: "weekly",
  },
  {
    path: "/faq",
    title: "Preguntas frecuentes de Opendex",
    description:
      "Respuestas sobre productos, estado, privacidad, acceso, disponibilidad y contacto con Opendex Web Services.",
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/contacto",
    title: "Contacto Opendex",
    description:
      "Solicita informacion comercial, contexto tecnico o cotizacion para implementar productos y sitios con Opendex.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/empresa",
    title: "Empresa Opendex",
    description:
      "Vision, enfoque y roadmap de Opendex Web Services como empresa de infraestructura digital en Mexico.",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/blog",
    title: "Blog de Opendex",
    description:
      "Notas de arquitectura, producto y operacion sobre identidad, documentos y flujos empresariales.",
    priority: 0.6,
    changeFrequency: "weekly",
  },
  {
    path: "/status",
    title: "Status de Opendex",
    description:
      "Estado publico de preparacion, disponibilidad y lineas internas de producto de Opendex.",
    priority: 0.6,
    changeFrequency: "weekly",
  },
  {
    path: "/comunidad",
    title: "Comunidad Opendex",
    description:
      "Canales y espacios para builders, operadores y equipos interesados en las lineas de Opendex.",
    priority: 0.5,
    changeFrequency: "monthly",
  },
  {
    path: "/legal/privacidad",
    title: "Aviso de privacidad",
    description: "Aviso de privacidad y lineamientos legales de Opendex Web Services.",
    priority: 0.4,
    changeFrequency: "monthly",
  },
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
