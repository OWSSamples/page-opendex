const capabilities = [
  ["Regions", "Mexico, US, EU"],
  ["Protocols", "SAML, OIDC, WebAuthn"],
  ["Session model", "httpOnly, rotation, revocation"],
  ["Telemetry", "Audit logs, webhooks, SIEM export"],
];

export default function Marquee() {
  return (
    <section className="relative border-y border-ink-200 bg-white">
      <div className="mx-auto grid max-w-7xl divide-y divide-ink-200 px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-8">
        {capabilities.map(([label, value]) => (
          <div key={label} className="py-5 sm:px-5 first:sm:pl-0 last:sm:pr-0">
            <div className="text-[11px] font-semibold uppercase text-ink-400">{label}</div>
            <div className="mt-1 text-[14px] font-medium text-ink-900">{value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
