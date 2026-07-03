import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { isLocale, type Locale } from "@/i18n/config";

const maxMessageLength = 600;
const groqModel = process.env.GROQ_MODEL ?? "groq/compound";
const groqTimeoutMs = 10_000;

// --- Rate Limiter Configuration ---
const RATE_LIMIT_MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX ?? "10", 10);
const RATE_LIMIT_WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS ?? "60000", 10);
const RATE_LIMIT_CLEANUP_INTERVAL_MS = 5 * 60 * 1000;

type RateLimitEntry = {
  count: number;
  windowStart: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function cleanupExpiredEntries() {
  const now = Date.now();
  const entries = Array.from(rateLimitStore.entries());
  for (const [key, entry] of entries) {
    if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
      rateLimitStore.delete(key);
    }
  }
}

if (typeof setInterval !== "undefined") {
  setInterval(cleanupExpiredEntries, RATE_LIMIT_CLEANUP_INTERVAL_MS);
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }
  return "unknown";
}

function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  retryAfterMs: number;
} {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      retryAfterMs: 0,
    };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    const retryAfterMs = RATE_LIMIT_WINDOW_MS - (now - entry.windowStart);
    return {
      allowed: false,
      remaining: 0,
      retryAfterMs,
    };
  }

  entry.count++;
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - entry.count,
    retryAfterMs: 0,
  };
}

type SupportIntent = "demo" | "documentation" | "general" | "pricing" | "technical";

type SupportChatRequest = {
  locale?: unknown;
  message?: unknown;
};

const replies: Record<Locale, Record<SupportIntent, string>> = {
  es: {
    demo:
      "Perfecto. Para una demo conviene definir primero el equipo, el flujo principal y el resultado que quieres validar. Puedo ayudarte a preparar esa conversación.",
    documentation:
      "Puedo orientarte hacia documentación útil. Dime si necesitas guías de integración, seguridad, APIs, despliegue o arquitectura.",
    general:
      "Puedo ayudarte a ordenar esa solicitud. Dime si necesitas soporte técnico, información comercial, documentación o ayuda para planear una integración.",
    pricing:
      "Para precios necesito entender el tamaño del equipo, módulos requeridos y nivel de operación. Puedo ayudarte a preparar esos datos antes de hablar con ventas.",
    technical:
      "Para soporte técnico, comparte el flujo afectado, el mensaje de error y cuándo empezó. Evita enviar claves, tokens, contraseñas o datos sensibles.",
  },
  en: {
    demo:
      "Understood. For a demo, it helps to define the team, main workflow, and outcome you want to validate. I can help prepare that conversation.",
    documentation:
      "I can point you toward useful documentation. Tell me whether you need integration, security, API, deployment, or architecture guidance.",
    general:
      "I can help you organize that request. Tell me whether you need technical support, sales information, documentation, or help planning an integration.",
    pricing:
      "For pricing, I need to understand team size, required modules, and operating level. I can help prepare those details before you talk to sales.",
    technical:
      "For technical support, share the affected flow, the error message, and when it started. Avoid sending keys, tokens, passwords, or sensitive data.",
  },
  pt: {
    demo:
      "Perfeito. Para uma demonstração, vale definir a equipe, o fluxo principal e o resultado que você quer validar. Posso ajudar a preparar essa conversa.",
    documentation:
      "Posso apontar documentação útil. Diga se você precisa de integração, segurança, APIs, implantação ou arquitetura.",
    general:
      "Posso ajudar a organizar essa solicitação. Diga se você precisa de suporte técnico, informação comercial, documentação ou ajuda para planejar uma integração.",
    pricing:
      "Para preços, preciso entender o tamanho da equipe, módulos necessários e nível operacional. Posso ajudar a preparar esses dados antes de falar com vendas.",
    technical:
      "Para suporte técnico, compartilhe o fluxo afetado, a mensagem de erro e quando começou. Evite enviar chaves, tokens, senhas ou dados sensíveis.",
  },
  fr: {
    demo:
      "Pour une démonstration, il est utile de définir l'équipe, le flux principal et le résultat à valider. Je peux vous aider à préparer cette conversation.",
    documentation:
      "Je peux vous orienter vers la documentation utile. Indiquez si vous cherchez intégration, sécurité, API, déploiement ou architecture.",
    general:
      "Je peux vous aider à organiser cette demande. Indiquez si vous avez besoin de support technique, d'informations commerciales, de documentation ou d'aide pour planifier une intégration.",
    pricing:
      "Pour les prix, il faut comprendre la taille de l'équipe, les modules requis et le niveau d'exploitation. Je peux vous aider à préparer ces éléments.",
    technical:
      "Pour le support technique, partagez le flux concerné, le message d'erreur et le moment où cela a commencé. N'envoyez pas de clés, jetons, mots de passe ou données sensibles.",
  },
  zh: {
    demo:
      "可以。演示前最好先明确团队、主要流程以及要验证的结果。我可以帮你整理这些信息。",
    documentation:
      "我可以帮你定位相关文档。请说明你需要集成、安全、API、部署还是架构方面的资料。",
    general:
      "我可以帮你整理这个请求。请说明你需要技术支持、销售信息、文档，还是集成规划方面的帮助。",
    pricing:
      "关于价格，需要先了解团队规模、所需模块和运营级别。我可以帮你在联系销售前整理这些信息。",
    technical:
      "如果是技术支持，请提供受影响流程、错误信息和开始时间。请不要发送密钥、令牌、密码或敏感数据。",
  },
};

function detectIntent(message: string): SupportIntent {
  const normalizedMessage = message.toLowerCase();

  if (/(precio|pricing|price|costo|cost|plan|quote|cotiza|orçamento|preço)/.test(normalizedMessage)) {
    return "pricing";
  }

  if (/(demo|meeting|reunión|reunion|agendar|ventas|sales|trial|prueba)/.test(normalizedMessage)) {
    return "demo";
  }

  if (/(doc|documentación|documentation|guía|guide|api|sdk|manual)/.test(normalizedMessage)) {
    return "documentation";
  }

  if (/(error|bug|fallo|issue|problema|login|sesión|session|token|webhook|deploy|build)/.test(normalizedMessage)) {
    return "technical";
  }

  return "general";
}

function parseSupportChatRequest(body: unknown) {
  if (!body || typeof body !== "object") {
    return null;
  }

  const payload = body as SupportChatRequest;
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const locale = typeof payload.locale === "string" && isLocale(payload.locale) ? payload.locale : "es";

  if (message.length === 0 || message.length > maxMessageLength) {
    return null;
  }

  return { locale, message };
}

function buildSystemPrompt(locale: Locale) {
  const localeInstruction: Record<Locale, string> = {
    es: "Responde en español claro y profesional.",
    en: "Respond in clear, professional English.",
    pt: "Responda em português claro e profissional.",
    fr: "Répondez en français clair et professionnel.",
    zh: "请用清晰、专业的中文回答。",
  };

  return [
    "Eres Melissa, asistente de soporte y ventas de Opendex.",
    "Ayudas con identidad digital, acceso, documentos, operación, integraciones, precios, demos y soporte inicial.",
    "No inventes capacidades, precios, contratos, SLA ni disponibilidad.",
    "No pidas ni aceptes secretos, contraseñas, tokens, claves privadas, cookies, datos financieros completos o información sensible.",
    "Si el usuario reporta un problema técnico, pide flujo afectado, error visible, entorno y momento en que empezó.",
    "Si el usuario pide ventas o precios, orienta a preparar alcance, módulos, tamaño del equipo y una conversación comercial.",
    "Mantén la respuesta breve: máximo 65 palabras.",
    localeInstruction[locale],
  ].join(" ");
}

const groqClient = process.env.GROQ_API_KEY
  ? new Groq({ apiKey: process.env.GROQ_API_KEY })
  : null;

async function getGroqReply(payload: { locale: Locale; message: string }) {
  if (!groqClient) return null;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), groqTimeoutMs);

  try {
    const completion = await groqClient.chat.completions.create(
      {
        model: groqModel,
        messages: [
          {
            role: "system",
            content: buildSystemPrompt(payload.locale),
          },
          {
            role: "user",
            content: payload.message,
          },
        ],
        temperature: 0.4,
        max_tokens: 180,
      },
      { signal: controller.signal }
    );
    const content = completion.choices[0]?.message?.content;

    return typeof content === "string" && content.trim().length > 0 ? content.trim() : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  const clientIp = getClientIp(request);
  const rateLimitResult = checkRateLimit(clientIp);

  if (!rateLimitResult.allowed) {
    const retryAfterSeconds = Math.ceil(rateLimitResult.retryAfterMs / 1000);
    return NextResponse.json(
      {
        error: "Too many requests. Please try again later.",
        retryAfter: retryAfterSeconds,
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfterSeconds),
          "X-RateLimit-Limit": String(RATE_LIMIT_MAX_REQUESTS),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(Math.ceil((Date.now() + rateLimitResult.retryAfterMs) / 1000)),
        },
      }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const payload = parseSupportChatRequest(body);

  if (!payload) {
    return NextResponse.json(
      { error: "Message must be a non-empty string with 600 characters or fewer." },
      { status: 400 }
    );
  }

  const intent = detectIntent(payload.message);
  const groqReply = await getGroqReply(payload);

  return NextResponse.json(
    {
      intent,
      reply: groqReply ?? replies[payload.locale][intent],
    },
    {
      headers: {
        "X-RateLimit-Limit": String(RATE_LIMIT_MAX_REQUESTS),
        "X-RateLimit-Remaining": String(rateLimitResult.remaining),
        "X-RateLimit-Reset": String(Math.ceil((Date.now() + RATE_LIMIT_WINDOW_MS) / 1000)),
      },
    }
  );
}
