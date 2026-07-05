const capabilities = [
  ["Regions", "Mexico, US, EU"],
  ["Protocols", "SAML, OIDC, WebAuthn"],
  ["Session model", "httpOnly, rotation, revocation"],
  ["Telemetry", "Audit logs, webhooks, SIEM export"],
];

export default function Marquee() {
  return (
    <section className="opx-json-section">
      <div className="opx-json-shell">
        <div className="opx-json-metrics">
        {capabilities.map(([label, value]) => (
          <div key={label} className="opx-json-metric">
            <div className="opx-json-label">{label}</div>
            <div className="opx-json-card-title">{value}</div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
