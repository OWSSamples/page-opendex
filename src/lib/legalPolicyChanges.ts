export type LegalPolicyChangeType = "Agregado" | "Cambiado" | "Separado" | "Quitado";

export type LegalPolicyChange = {
  date: string;
  policy: string;
  href: string;
  type: LegalPolicyChangeType;
  summary: string;
  added: string[];
  removed: string[];
};

export const legalPolicyChanges: LegalPolicyChange[] = [
  {
    date: "2026-07-04",
    policy: "Todas las politicas legales",
    href: "/legal",
    type: "Cambiado",
    summary: "Se amplio el contenido legal para pasar de documentos basicos a politicas con alcance, criterios, controles, limites y responsabilidades mas detalladas.",
    added: [
      "Secciones operativas adicionales en privacidad, cookies, publicidad, servicios, seguridad, datos, soporte, SLA, retencion, incidentes, subprocesadores y uso aceptable.",
      "Tablas de categorias, responsabilidades, controles, prioridades y criterios de retencion.",
      "Lenguaje de seguridad para evitar promesas no verificadas, secretos en formularios y compromisos contractuales no firmados.",
    ],
    removed: [
      "Resumenes demasiado cortos que no explicaban alcance, limites ni responsabilidades con suficiente detalle.",
    ],
  },
  {
    date: "2026-07-04",
    policy: "Privacidad",
    href: "/legal/privacy",
    type: "Separado",
    summary: "La politica de privacidad quedo enfocada en datos personales, derechos, proveedores, retencion y contacto.",
    added: [
      "Correos globales y regionales de politica.",
      "Tabla de categorias de informacion tratada.",
      "Referencia clara a documentos legales separados.",
    ],
    removed: [
      "Contenido de cookies dentro de privacidad.",
      "Duplicacion de seguridad y servicios dentro del mismo documento.",
    ],
  },
  {
    date: "2026-07-04",
    policy: "Cookies",
    href: "/legal/cookies",
    type: "Separado",
    summary: "Cookies se publico como politica independiente para consentimiento, categorias y preferencias.",
    added: [
      "Categorias necesarias, funcionales, rendimiento y medicion.",
      "Instrucciones para administrar preferencias desde el footer.",
      "Limites sobre secretos, credenciales y datos sensibles.",
    ],
    removed: [
      "Dependencia de la politica general de privacidad para explicar cookies.",
    ],
  },
  {
    date: "2026-07-04",
    policy: "Publicidad y medicion",
    href: "/legal/ads",
    type: "Agregado",
    summary: "Se creo una politica separada para campanas, medicion comercial y personalizacion limitada.",
    added: [
      "Criterios para campanas, comunicacion comercial y plataformas externas.",
      "Condiciones de consentimiento y control del usuario.",
    ],
    removed: [
      "Mezcla de publicidad con la politica de cookies.",
    ],
  },
  {
    date: "2026-07-04",
    policy: "Servicios",
    href: "/legal/services",
    type: "Cambiado",
    summary: "Se aclaro el alcance publico de servicios frente a contratos, ordenes y anexos empresariales.",
    added: [
      "Tabla de documentos relacionados.",
      "Criterios de uso aceptable, soporte, continuidad y propiedad.",
    ],
    removed: [
      "Promesas operativas no respaldadas por contrato.",
      "Contenido que pertenece a privacidad, cookies o datos.",
    ],
  },
  {
    date: "2026-07-04",
    policy: "Seguridad",
    href: "/legal/security",
    type: "Cambiado",
    summary: "La politica de seguridad se concentro en controles, reporte responsable, incidentes y responsabilidades compartidas.",
    added: [
      "Criterios de minimo privilegio, registro de eventos y revocacion.",
      "Llamado de reporte responsable para vulnerabilidades.",
    ],
    removed: [
      "Detalle operativo que corresponde a respuesta a incidentes.",
      "Contenido duplicado de privacidad y tratamiento de datos.",
    ],
  },
  {
    date: "2026-07-04",
    policy: "Tratamiento de datos",
    href: "/legal/data-processing",
    type: "Agregado",
    summary: "Se agrego una politica dedicada a roles, instrucciones, confidencialidad, subprocesadores y transferencias.",
    added: [
      "Correos regionales de politica y patron ows-policy-[pais]@opendex.dev.",
      "Criterios para instrucciones, finalidad, retencion y eliminacion.",
    ],
    removed: [
      "Duplicacion del contenido de privacidad dentro de tratamiento de datos.",
    ],
  },
  {
    date: "2026-07-04",
    policy: "Subprocesadores",
    href: "/legal/subprocessors",
    type: "Agregado",
    summary: "Se documento una politica publica para categorias de proveedores y responsabilidades.",
    added: [
      "Categorias de infraestructura, seguridad, comunicaciones y observabilidad.",
      "Criterios de evaluacion y cambios de proveedores.",
    ],
    removed: [
      "Lista cerrada de proveedores no verificada.",
    ],
  },
  {
    date: "2026-07-04",
    policy: "Uso aceptable",
    href: "/legal/acceptable-use",
    type: "Agregado",
    summary: "Se agregaron reglas publicas para actividades permitidas, prohibidas, aplicacion y reporte.",
    added: [
      "Tabla de conductas, riesgos y respuestas posibles.",
      "Lenguaje sobre abuso automatizado, suplantacion y acceso no autorizado.",
    ],
    removed: [
      "Contenido redundante que corresponde a seguridad.",
    ],
  },
  {
    date: "2026-07-04",
    policy: "Soporte",
    href: "/legal/support",
    type: "Cambiado",
    summary: "Se definieron criterios de soporte sin convertir la pagina en un SLA contractual.",
    added: [
      "Prioridades de soporte con ejemplos.",
      "Informacion recomendada para diagnostico seguro.",
    ],
    removed: [
      "Lenguaje que podia confundirse con compromisos de SLA.",
    ],
  },
  {
    date: "2026-07-04",
    policy: "Disponibilidad y SLA",
    href: "/legal/sla",
    type: "Cambiado",
    summary: "Se aclaro que los compromisos finales dependen del contrato o anexo aplicable.",
    added: [
      "Criterios generales de disponibilidad, mantenimiento y degradacion.",
      "Exclusiones por cliente, abuso, proveedores externos o fuerza mayor.",
    ],
    removed: [
      "Promesas numericas no respaldadas por contrato.",
    ],
  },
  {
    date: "2026-07-04",
    policy: "Retencion y eliminacion",
    href: "/legal/retention",
    type: "Agregado",
    summary: "Se agregaron criterios para conservar, anonimizar, eliminar o bloquear informacion.",
    added: [
      "Categorias de retencion y cierre esperado.",
      "Criterios para solicitudes de eliminacion o limitacion.",
    ],
    removed: [
      "Plazos especificos no confirmados por contrato o sistema.",
    ],
  },
  {
    date: "2026-07-04",
    policy: "Respuesta a incidentes",
    href: "/legal/incident-response",
    type: "Agregado",
    summary: "Se documento el proceso publico para clasificar, contener, comunicar y aprender de incidentes.",
    added: [
      "Severidades, fases de respuesta y criterios de comunicacion.",
      "Guia para reporte externo responsable.",
    ],
    removed: [
      "Detalle explotable que no debe publicarse en una politica abierta.",
    ],
  },
];
