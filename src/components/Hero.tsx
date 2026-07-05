"use client";

import IdentityIcon from "@/components/IdentityIcon";
import { ArrowRight, Check } from "@/components/icons";
import { useEffect, useState } from "react";

const metrics = [
  ["Auth pass rate", "99.97%"],
  ["p95 latency", "10 ms"],
  ["Regions", "MX / US / EU"],
  ["Free MAU", "10K"],
];

const events = [
  ["14:08", "passkey.challenge", "success", "8 ms"],
  ["14:07", "saml.acme.com", "verified", "12 ms"],
  ["14:05", "risk.policy", "mfa_skipped", "low"],
  ["14:02", "session.rotate", "complete", "global"],
];

const checks = [
  "Passkeys, magic links y MFA adaptativo",
  "SAML, OIDC, Google Workspace y GitHub Enterprise",
  "Audit logs, webhooks y residencia regional",
];

export default function Hero() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStage((value) => (value + 1) % 4), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="opx-json-section">
      <div className="opx-json-shell">
        <div className="opx-json-hero-grid">
          <div className="opx-json-copy">
            <div className="opx-json-eyebrow">
              <IdentityIcon name="identity" size={20} />
              Opendex Auth v2026.06
            </div>

            <h1 className="opx-json-title">
              Opendex Identity Cloud
            </h1>

            <p className="opx-json-lead">
              Una capa de autenticacion para productos SaaS que necesitan
              passkeys, SSO empresarial, sesiones seguras y control operativo
              sin construir infraestructura de identidad desde cero.
            </p>

            <div className="opx-json-actions">
              <a href="#cta" className="opx-json-button opx-json-button-primary">
                Crear cuenta
                <ArrowRight aria-hidden />
              </a>
              <a href="#docs" className="opx-json-button opx-json-button-secondary">
                Revisar documentacion
              </a>
            </div>

            <ul className="opx-json-check-list">
              {checks.map((item) => (
                <li key={item} className="opx-json-check">
                  <span className="opx-json-check-icon">
                    <Check aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="opx-json-card opx-json-card-plain">
              <div className="opx-json-card-header">
                <div className="opx-json-card-row">
                  <IdentityIcon name="identity" size={32} />
                  <div>
                    <div className="opx-json-card-title">Auth Gateway</div>
                    <div className="opx-json-label">production / global edge</div>
                  </div>
                </div>
                <div className="opx-json-badge">
                  Operational
                </div>
              </div>

              <div className="opx-json-metrics">
                {metrics.map(([label, value]) => (
                  <div key={label} className="opx-json-metric">
                    <div className="opx-json-label">{label}</div>
                    <div className="opx-json-value">{value}</div>
                  </div>
                ))}
              </div>

              <div className="opx-json-docs-grid">
                <div className="opx-json-card-body">
                  <div className="opx-json-card-row">
                    <div className="opx-json-label">Live authentication events</div>
                    <div className="opx-json-label">last 5 min</div>
                  </div>
                  <div className="opx-json-card opx-json-card-plain">
                    {events.map(([time, event, status, latency]) => (
                      <div
                        key={`${time}-${event}`}
                        className="opx-json-card-header"
                      >
                        <span className="opx-json-label">{time}</span>
                        <span className="opx-json-label">{event}</span>
                        <span className="opx-json-status-accent">{status}</span>
                        <span className="opx-json-label">{latency}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="opx-json-card-body">
                  <div className="opx-json-card-row">
                    <IdentityIcon name="policy" size={20} />
                    Policy decision
                  </div>
                  <div className="opx-json-list">
                    <div>
                      <div className="opx-json-card-row">
                        <span>Risk score</span>
                        <span>{stage === 2 ? "32" : "08"}/100</span>
                      </div>
                      <div className="opx-json-progress">
                        <div
                          className="opx-json-progress-fill"
                          style={{ width: stage === 2 ? "32%" : "8%" }}
                        />
                      </div>
                    </div>
                    <div className="opx-json-card">
                      <div className="opx-json-card-row">
                        <IdentityIcon name="lock" size={18} />
                        MFA {stage === 2 ? "required" : "not required"}
                      </div>
                      <p className="opx-json-text">
                        Device trusted, region allowed, session rotated after
                        successful challenge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="opx-json-metrics">
              {["SOC 2 controls", "99.99% SLA", "Data residency"].map((item) => (
                <div key={item} className="opx-json-metric">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
