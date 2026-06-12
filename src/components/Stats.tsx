const stats = [
  { value: "10K", label: "MAU gratis", sub: "antes de cobrar" },
  { value: "10 ms", label: "latencia p95", sub: "global" },
  { value: "99.99%", label: "uptime SLA", sub: "últimos 12 meses" },
  { value: "< 5 min", label: "tiempo a integrar", sub: "desde npm install" },
];

export default function Stats() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl border-y border-ink-200 px-6 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-start ${
                i > 0 ? "sm:border-l sm:border-ink-200 sm:pl-8" : ""
              }`}
            >
              <div className="font-heading text-[34px] font-semibold leading-none text-ink-950 sm:text-[42px]">
                {s.value}
              </div>
              <div className="mt-3 text-[13px] font-semibold text-ink-900">{s.label}</div>
              <div className="text-[12px] text-ink-500">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
