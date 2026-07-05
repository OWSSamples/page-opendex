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
    <section id="docs" className="opx-json-section">
      <div className="opx-json-shell">
        <div className="opx-json-split">
          <div className="opx-json-copy">
            <div className="opx-json-eyebrow">
              <Terminal aria-hidden />
              Developers
            </div>
            <h2 className="opx-json-section-title">
              Integra identidad sin convertirla en un proyecto interno.
            </h2>
          </div>
          <p className="opx-json-text">
            SDKs tipados, middleware listo para Next.js y webhooks verificables
            para mantener usuarios, sesiones y auditoria sincronizados.
          </p>
        </div>

        <div className="opx-json-docs-grid">
          <aside className="opx-json-list">
            <div className="opx-json-card">
              <div className="opx-json-card-title">
                Production checklist
              </div>
              <div className="opx-json-list">
                {checklist.map((item) => (
                  <div key={item} className="opx-json-check">
                    <span className="opx-json-check-icon">
                      <Check aria-hidden />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="opx-json-card">
              <div className="opx-json-card-title">API surface</div>
              <div className="opx-json-list">
                {endpoints.map(([method, path, purpose]) => (
                  <div key={path} className="opx-json-card opx-json-card-plain">
                    <div className="opx-json-card-body">
                      <span className="opx-json-status-accent">{method}</span>
                      <span> {path}</span>
                      <div className="opx-json-label">{purpose}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="opx-json-card opx-json-card-plain">
            <div className="opx-json-toolbar">
              <div className="opx-json-tab-list">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActive(tab.key)}
                    className={`opx-json-tab ${active === tab.key ? "opx-json-tab-active" : ""}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="opx-json-card-row">
                <span className="opx-json-label">{current.file}</span>
                <button
                  type="button"
                  onClick={onCopy}
                  className="opx-json-button opx-json-button-secondary"
                >
                  {copied ? (
                    <>
                      <Check aria-hidden />
                      copied
                    </>
                  ) : (
                    <>
                      <Copy aria-hidden />
                      copy
                    </>
                  )}
                </button>
              </div>
            </div>

            <pre className="opx-json-code">
              <code>{current.code}</code>
            </pre>

            <div className="opx-json-metrics">
              {["Type safe", "Edge ready", "Webhook verified"].map((item) => (
                <div key={item} className="opx-json-metric">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="opx-json-actions">
          <a href="#cta" className="opx-json-button opx-json-button-primary">
            Crear proyecto
            <ArrowRight aria-hidden />
          </a>
          <a href="#dashboard" className="opx-json-button opx-json-button-secondary">
            Ver consola
          </a>
        </div>
      </div>
    </section>
  );
}
