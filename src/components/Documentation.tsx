"use client";

import { useState } from "react";
import { ArrowRight, Check, Copy, Terminal } from "@/components/icons";

const tabs = [
  {
    key: "install",
    label: "Install",
    file: "terminal",
    code: `npm install @opendex/auth

opx init --project production
opx env pull`,
  },
  {
    key: "middleware",
    label: "Middleware",
    file: "app/middleware.ts",
    code: `import { OpendexAuth } from "@opendex/auth";

const auth = new OpendexAuth({
  projectId: process.env.OPENDEX_PROJECT_ID,
  passkeys: true,
  sso: ["google", "github", "saml"],
});

export async function middleware(req: Request) {
  const session = await auth.verify(req);
  if (!session) return auth.redirect("/login");
  return auth.next(session);
}`,
  },
  {
    key: "webhook",
    label: "Webhook",
    file: "app/api/webhooks/opendex.ts",
    code: `import { verifyWebhook } from "@opendex/auth";

export async function POST(req: Request) {
  const event = await verifyWebhook(req);

  if (event.type === "session.created") {
    await syncUser(event.data.user);
  }

  return Response.json({ received: true });
}`,
  },
];

const endpoints = [
  ["POST", "/v1/sessions/verify", "Verify request session"],
  ["POST", "/v1/passkeys/challenge", "Create WebAuthn challenge"],
  ["GET", "/v1/audit/events", "Query audit trail"],
  ["POST", "/v1/webhooks/test", "Send test delivery"],
];

const checklist = [
  "Create production project",
  "Configure allowed origins",
  "Enable passkeys and SSO providers",
  "Register webhook signing secret",
  "Export audit logs to your SIEM",
];

export default function Documentation() {
  const [active, setActive] = useState(tabs[1].key);
  const [copied, setCopied] = useState(false);
  const current = tabs.find((item) => item.key === active)!;

  const onCopy = () => {
    navigator.clipboard?.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <section id="docs" className="relative border-t border-white/10 bg-[#080a12] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-[12px] font-semibold uppercase text-[#ff9900]">
              <Terminal className="h-4 w-4" aria-hidden />
              Developers
            </div>
            <h2 className="mt-4 max-w-xl font-heading text-[34px] font-semibold leading-[1.08] text-white sm:text-[46px]">
              Integra identidad sin convertirla en un proyecto interno.
            </h2>
          </div>
          <p className="max-w-2xl text-[15px] leading-7 text-white/58 lg:justify-self-end">
            SDKs tipados, middleware listo para Next.js y webhooks verificables
            para mantener usuarios, sesiones y auditoria sincronizados.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">
          <aside className="grid content-start gap-5">
            <div className="border border-white/10 bg-[#0d0f13] p-5">
              <div className="text-[13px] font-semibold text-white">
                Production checklist
              </div>
              <div className="mt-4 divide-y divide-white/[0.06] border border-white/10">
                {checklist.map((item) => (
                  <div key={item} className="flex items-start gap-3 px-3 py-3 text-[12.5px] text-white/62">
                    <Check className="mt-0.5 h-3.5 w-3.5 text-emerald-300" aria-hidden />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 bg-[#0d0f13] p-5">
              <div className="text-[13px] font-semibold text-white">API surface</div>
              <div className="mt-4 divide-y divide-white/[0.06] border border-white/10">
                {endpoints.map(([method, path, purpose]) => (
                  <div key={path} className="px-3 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#ff9900]">{method}</span>
                      <span className="font-mono text-[12px] text-white/78">{path}</span>
                    </div>
                    <div className="mt-1 text-[12px] text-white/42">{purpose}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="overflow-hidden border border-white/10 bg-[#0d0f13]">
            <div className="flex flex-col gap-3 border-b border-white/10 bg-black/24 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActive(tab.key)}
                    className={`px-3 py-2 text-[12px] font-semibold transition ${
                      active === tab.key
                        ? "bg-white text-ink-950"
                        : "text-white/56 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-white/36">{current.file}</span>
                <button
                  type="button"
                  onClick={onCopy}
                  className="inline-flex items-center gap-1.5 border border-white/10 px-2.5 py-1.5 text-[11px] text-white/65 transition hover:bg-white/[0.05] hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-300" aria-hidden />
                      copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" aria-hidden />
                      copy
                    </>
                  )}
                </button>
              </div>
            </div>

            <pre className="code-block min-h-[420px] overflow-x-auto px-5 py-5 text-white/88 sm:px-6">
              <code>{current.code}</code>
            </pre>

            <div className="grid gap-px border-t border-white/10 bg-white/10 sm:grid-cols-3">
              {["Type safe", "Edge ready", "Webhook verified"].map((item) => (
                <div key={item} className="bg-[#0d0f13] px-4 py-3 text-[12px] text-white/54">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#cta"
            className="inline-flex h-11 items-center justify-center gap-2 bg-white px-5 text-[14px] font-semibold text-ink-950 transition hover:bg-white/90"
          >
            Crear proyecto
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="#dashboard"
            className="inline-flex h-11 items-center justify-center border border-white/14 bg-white/[0.04] px-5 text-[14px] font-semibold text-white/82 transition hover:bg-white/[0.08]"
          >
            Ver consola
          </a>
        </div>
      </div>
    </section>
  );
}
