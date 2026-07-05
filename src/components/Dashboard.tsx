import {
  BellRing,
  ChevronRight,
  Search,
} from "@/components/icons";
import IdentityIcon, { type IdentityIconName } from "@/components/IdentityIcon";

const nav = [
  { iconName: "audit", label: "Overview", active: true },
  { iconName: "identity", label: "Users", badge: "18.2k" },
  { iconName: "session", label: "Sessions" },
  { iconName: "policy", label: "Risk policies", badge: "3" },
  { iconName: "workspace", label: "SSO connections" },
  { iconName: "integration", label: "Webhooks" },
  { iconName: "access", label: "API keys" },
] satisfies Array<{ iconName: IdentityIconName; label: string; active?: boolean; badge?: string }>;

const kpis = [
  { label: "Active users", value: "18,240", note: "+8.4% this week" },
  { label: "Auth success", value: "99.97%", note: "last 24 hours" },
  { label: "Passkey share", value: "71%", note: "+12 pts in 30 days" },
  { label: "Blocked risk", value: "184", note: "automated decisions" },
];

const bars = [42, 56, 61, 48, 72, 68, 82, 78, 88, 74, 92, 86];

const sessions = [
  ["ada@opendex.com", "Passkey", "Mexico City", "8 ms", "trusted"],
  ["platform@acme.com", "SAML", "Ashburn", "12 ms", "trusted"],
  ["billing@plata.mx", "OIDC", "Queretaro", "15 ms", "review"],
  ["root@forge.dev", "GitHub", "Frankfurt", "18 ms", "trusted"],
];

const policies = [
  ["New device", "MFA required", "active"],
  ["High velocity login", "block", "active"],
  ["Restricted country", "block", "active"],
  ["Admin role elevation", "step-up", "draft"],
];

const events = [
  ["14:08", "passkey.verified", "ada@opendex.com"],
  ["14:05", "saml.metadata.updated", "acme.com"],
  ["13:58", "webhook.delivered", "sessions.created"],
  ["13:44", "risk.blocked", "unknown device"],
  ["13:39", "api_key.rotated", "production"],
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="opx-json-section">
      <div className="opx-json-shell">
        <div className="opx-json-split">
          <div className="opx-json-copy">
            <div className="opx-json-eyebrow">
              Console
            </div>
            <h2 className="opx-json-section-title">
              Operacion de identidad en una sola pantalla.
            </h2>
          </div>
          <p className="opx-json-text">
            Supervisa usuarios, sesiones, conexiones SSO, reglas de riesgo,
            webhooks y claves API sin saltar entre herramientas.
          </p>
        </div>

        <div className="opx-json-card opx-json-card-plain">
          <div className="opx-json-toolbar">
            <div className="opx-json-card-row">
              <IdentityIcon name="identity" size={32} />
              <div className="opx-json-card-row">
                <span>opendex</span>
                <ChevronRight aria-hidden />
                <span>auth</span>
                <ChevronRight aria-hidden />
                <span>production</span>
              </div>
            </div>
            <div className="opx-json-card-row">
              <div className="opx-json-badge">
                <Search aria-hidden />
                Search users, sessions, keys
              </div>
              <span className="opx-json-badge">
                Operational
              </span>
              <button type="button" className="opx-json-tab">
                <BellRing aria-hidden />
              </button>
            </div>
          </div>

          <div className="opx-json-dashboard-grid">
            <aside className="opx-json-sidebar">
              <div className="opx-json-label">
                Identity
              </div>
              {nav.map(({ iconName, label, active, badge }) => (
                <button
                  key={label}
                  type="button"
                  className={`opx-json-nav-button ${active ? "opx-json-nav-button-active" : ""}`}
                >
                  <span className="opx-json-card-row">
                    <IdentityIcon name={iconName} size={20} />
                    {label}
                  </span>
                  {badge ? (
                    <span className="opx-json-label">
                      {badge}
                    </span>
                  ) : null}
                </button>
              ))}

              <div className="opx-json-card">
                <div className="opx-json-label">Workspace</div>
                <div className="opx-json-card-title">Business</div>
                <div className="opx-json-progress">
                  <div className="opx-json-progress-fill" />
                </div>
                <div className="opx-json-label">62% monthly auth volume</div>
              </div>
            </aside>

            <div className="opx-json-card-body">
              <div className="opx-json-metrics">
                {kpis.map((item) => (
                  <div key={item.label} className="opx-json-metric">
                    <div className="opx-json-label">
                      {item.label}
                    </div>
                    <div className="opx-json-value">
                      {item.value}
                    </div>
                    <div className="opx-json-label">{item.note}</div>
                  </div>
                ))}
              </div>

              <div className="opx-json-split">
                <div className="opx-json-card opx-json-card-plain">
                  <div className="opx-json-card-header">
                    <h3 className="opx-json-card-title">
                      Authentication volume
                    </h3>
                    <span className="opx-json-label">12 hour window</span>
                  </div>
                  <div className="opx-json-bar-chart">
                    {bars.map((height, index) => (
                      <div key={index} className="opx-json-bar-track">
                        <div
                          className="opx-json-bar"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="opx-json-card opx-json-card-plain">
                  <div className="opx-json-card-header">
                    <h3 className="opx-json-card-title">
                      Risk policies
                    </h3>
                    <span className="opx-json-label">production</span>
                  </div>
                  <div>
                    {policies.map(([name, action, status]) => (
                      <div key={name} className="opx-json-card-header">
                        <span>{name}</span>
                        <span className="opx-json-label">{action}</span>
                        <span className="opx-json-status-accent">
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="opx-json-split">
                <div className="opx-json-card opx-json-card-plain">
                  <div className="opx-json-card-header">
                    <h3 className="opx-json-card-title">
                      Recent sessions
                    </h3>
                    <span className="opx-json-label">live</span>
                  </div>
                  <div className="opx-json-table-wrap">
                    <table className="opx-json-table">
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>Method</th>
                          <th>Region</th>
                          <th>Latency</th>
                          <th>Decision</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sessions.map(([user, method, region, latency, decision]) => (
                          <tr key={user}>
                            <td>{user}</td>
                            <td>{method}</td>
                            <td>{region}</td>
                            <td>{latency}</td>
                            <td className="opx-json-status-accent">
                              {decision}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="opx-json-card opx-json-card-plain">
                  <div className="opx-json-card-header">
                    <h3 className="opx-json-card-title">
                      Event stream
                    </h3>
                  </div>
                  <div>
                    {events.map(([time, event, actor]) => (
                      <div key={`${time}-${event}`} className="opx-json-card-header">
                        <span className="opx-json-label">{time}</span>
                        <div>
                          <div>{event}</div>
                          <div className="opx-json-label">{actor}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="opx-json-footer-row">
            <div className="opx-json-card-row">
              <span>region: global-edge</span>
              <span>tenant: opx-prod</span>
              <span>uptime: 99.997%</span>
            </div>
            <div>sync: 2s ago</div>
          </div>
        </div>
      </div>
    </section>
  );
}
