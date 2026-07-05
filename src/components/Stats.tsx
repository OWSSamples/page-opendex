const stats = [
  { value: "10K", label: "MAU gratis", sub: "antes de cobrar" },
  { value: "10 ms", label: "latencia p95", sub: "global" },
  { value: "99.99%", label: "uptime SLA", sub: "últimos 12 meses" },
  { value: "< 5 min", label: "tiempo a integrar", sub: "desde npm install" },
];

export default function Stats() {
  return (
    <section className="opx-json-section">
      <div className="opx-json-shell">
        <div className="opx-json-metrics">
          {stats.map((s) => (
            <div key={s.label} className="opx-json-metric">
              <div className="opx-json-value">
                {s.value}
              </div>
              <div className="opx-json-card-title">{s.label}</div>
              <div className="opx-json-label">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
