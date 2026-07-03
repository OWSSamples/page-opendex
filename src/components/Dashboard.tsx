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
    <section id="dashboard" className="relative border-t border-white/[0.06] bg-[#0a0b0d]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="text-[12px] font-semibold uppercase text-[#ff9900]">
              Console
            </div>
            <h2 className="mt-4 max-w-xl font-heading text-[34px] font-semibold leading-[1.08] text-white sm:text-[46px]">
              Operacion de identidad en una sola pantalla.
            </h2>
          </div>
          <p className="max-w-2xl text-[15px] leading-7 text-white/56 lg:justify-self-end">
            Supervisa usuarios, sesiones, conexiones SSO, reglas de riesgo,
            webhooks y claves API sin saltar entre herramientas.
          </p>
        </div>

        <div className="mt-10 overflow-hidden border border-white/10 bg-[#0d0f13] shadow-[0_34px_100px_-52px_rgba(0,0,0,0.9)]">
          <div className="flex flex-col gap-3 border-b border-white/10 bg-black/28 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 place-items-center bg-[#ff9900] text-[11px] font-black text-[#111827]">
                O
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/52">
                <span className="text-white/82">opendex</span>
                <ChevronRight className="h-3 w-3 opacity-45" aria-hidden />
                <span>auth</span>
                <ChevronRight className="h-3 w-3 opacity-45" aria-hidden />
                <span className="text-white/82">production</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/45 sm:flex">
                <Search className="h-3 w-3" aria-hidden />
                Search users, sessions, keys
              </div>
              <span className="inline-flex items-center gap-1.5 border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                <span className="h-1.5 w-1.5 bg-emerald-300" />
                Operational
              </span>
              <button type="button" className="relative grid h-8 w-8 place-items-center border border-white/10 text-white/65 hover:text-white">
                <BellRing className="h-3.5 w-3.5" aria-hidden />
                <span className="absolute -right-px -top-px h-2 w-2 bg-[#ff9900]" />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[232px_1fr]">
            <aside className="border-b border-white/10 bg-black/18 p-4 lg:border-b-0 lg:border-r">
              <div className="mb-3 px-2 text-[10px] font-bold uppercase text-white/35">
                Identity
              </div>
              {nav.map(({ iconName, label, active, badge }) => (
                <button
                  key={label}
                  type="button"
                  className={`mb-1 flex w-full items-center justify-between px-3 py-2.5 text-[13px] transition ${
                    active ? "bg-white/[0.08] text-white" : "text-white/55 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <IdentityIcon name={iconName} size={20} className="h-5 w-5 object-contain" />
                    {label}
                  </span>
                  {badge ? (
                    <span className="border border-white/10 px-1.5 py-0.5 text-[10px] text-white/50">
                      {badge}
                    </span>
                  ) : null}
                </button>
              ))}

              <div className="mt-6 border border-white/10 bg-white/[0.03] p-4">
                <div className="text-[10px] font-bold uppercase text-white/38">Workspace</div>
                <div className="mt-2 text-[13px] font-semibold text-white">Business</div>
                <div className="mt-4 h-1.5 bg-white/10">
                  <div className="h-full w-[62%] bg-[#ff9900]" />
                </div>
                <div className="mt-2 text-[10px] text-white/46">62% monthly auth volume</div>
              </div>
            </aside>

            <div className="p-5 sm:p-6">
              <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
                {kpis.map((item) => (
                  <div key={item.label} className="bg-[#0d0f13] p-5">
                    <div className="text-[10px] font-semibold uppercase text-white/38">
                      {item.label}
                    </div>
                    <div className="mt-2 font-heading text-[26px] font-semibold text-white">
                      {item.value}
                    </div>
                    <div className="mt-1 text-[11px] text-white/45">{item.note}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="border border-white/10 bg-[#0d0f13]">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <h3 className="font-heading text-[14px] font-semibold text-white">
                      Authentication volume
                    </h3>
                    <span className="text-[11px] text-white/42">12 hour window</span>
                  </div>
                  <div className="flex h-56 items-end gap-2 px-5 pb-5 pt-8">
                    {bars.map((height, index) => (
                      <div key={index} className="flex min-w-0 flex-1 items-end bg-white/[0.04]">
                        <div
                          className="w-full bg-[#ff9900]"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-white/10 bg-[#0d0f13]">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <h3 className="font-heading text-[14px] font-semibold text-white">
                      Risk policies
                    </h3>
                    <span className="text-[11px] text-white/42">production</span>
                  </div>
                  <div className="divide-y divide-white/[0.06]">
                    {policies.map(([name, action, status]) => (
                      <div key={name} className="grid grid-cols-[1fr_86px_64px] gap-3 px-4 py-3 text-[12px]">
                        <span className="text-white/78">{name}</span>
                        <span className="font-mono text-white/48">{action}</span>
                        <span className={status === "active" ? "text-emerald-300" : "text-white/38"}>
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
                <div className="overflow-hidden border border-white/10 bg-[#0d0f13]">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <h3 className="font-heading text-[14px] font-semibold text-white">
                      Recent sessions
                    </h3>
                    <span className="text-[11px] text-white/42">live</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[620px] text-left text-[12px]">
                      <thead className="border-b border-white/10 text-[10px] uppercase text-white/36">
                        <tr>
                          <th className="px-4 py-3 font-semibold">User</th>
                          <th className="px-4 py-3 font-semibold">Method</th>
                          <th className="px-4 py-3 font-semibold">Region</th>
                          <th className="px-4 py-3 font-semibold">Latency</th>
                          <th className="px-4 py-3 font-semibold">Decision</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sessions.map(([user, method, region, latency, decision]) => (
                          <tr key={user} className="border-b border-white/[0.06] last:border-b-0">
                            <td className="px-4 py-3 font-mono text-white/78">{user}</td>
                            <td className="px-4 py-3 text-white/58">{method}</td>
                            <td className="px-4 py-3 text-white/58">{region}</td>
                            <td className="px-4 py-3 font-mono text-white/48">{latency}</td>
                            <td className={decision === "trusted" ? "px-4 py-3 text-emerald-300" : "px-4 py-3 text-[#ff9900]"}>
                              {decision}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="border border-white/10 bg-[#0d0f13]">
                  <div className="border-b border-white/10 px-4 py-3">
                    <h3 className="font-heading text-[14px] font-semibold text-white">
                      Event stream
                    </h3>
                  </div>
                  <div className="divide-y divide-white/[0.06]">
                    {events.map(([time, event, actor]) => (
                      <div key={`${time}-${event}`} className="grid grid-cols-[42px_1fr] gap-3 px-4 py-3 text-[12px]">
                        <span className="font-mono text-white/34">{time}</span>
                        <div>
                          <div className="font-mono text-white/72">{event}</div>
                          <div className="mt-1 text-white/42">{actor}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-black/28 px-4 py-2 font-mono text-[10px] text-white/42">
            <div className="flex items-center gap-4">
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
