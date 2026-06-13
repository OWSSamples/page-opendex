"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, CheckCircle2, Terminal } from "@/components/icons";
import { useEffect, useMemo, useState } from "react";

const commands = [
  {
    command: "bun add @opendex/sdk",
    result: "sdk instalado · tipos sincronizados · adapters listos",
    mode: "install",
  },
  {
    command: "opendex identity link --workspace prod_mx_01",
    result: "workspace enlazado · passkeys activadas · sesiones auditables",
    mode: "identity",
  },
  {
    command: "opendex events tail --product identity",
    result: "stream conectado · 4 eventos · riesgo bajo",
    mode: "events",
  },
];

const logs = [
  ["10:14:02", "policy.evaluate", "allow", "passkey trusted device"],
  ["10:14:03", "session.rotate", "ok", "cookie httpOnly renewed"],
  ["10:14:05", "webhook.deliver", "queued", "identity.session.created"],
  ["10:14:08", "audit.write", "ok", "workspace trace stored"],
];

const metrics = [
  ["latency", "10 ms"],
  ["risk", "low"],
  ["events", "4"],
];

function useTypedText(text: string, enabled: boolean) {
  const [visible, setVisible] = useState(enabled ? "" : text);

  useEffect(() => {
    if (!enabled) {
      setVisible(text);
      return;
    }

    setVisible("");
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setVisible(text.slice(0, index));
      if (index >= text.length) window.clearInterval(interval);
    }, 24);

    return () => window.clearInterval(interval);
  }, [enabled, text]);

  return visible;
}

export default function AnimatedTerminal() {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const item = commands[active];
  const typed = useTypedText(item.command, !reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % commands.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  const activeLogs = useMemo(
    () => logs.slice(0, active + 2 > logs.length ? logs.length : active + 2),
    [active]
  );

  return (
    <div className="cf-tech-terminal relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(246,130,31,0.16),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(75,116,255,0.12),transparent_32%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.34] [background-image:linear-gradient(rgba(29,29,27,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(29,29,27,0.06)_1px,transparent_1px)] [background-size:28px_28px]"
      />

      <div className="relative flex items-center justify-between border-b border-[#e7e4dc] bg-white/62 px-5 py-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="flex items-center gap-2 font-mono text-[12px] text-[#6b6258]">
            <Terminal className="h-3.5 w-3.5 text-[#f6821f]" aria-hidden />
            ~/opendex/console
          </span>
        </div>
        <span className="cf-tech-chip cf-tech-chip-cyan">{item.mode}</span>
      </div>

      <div className="relative p-5">
        <div className="rounded-xl border border-[#e7e4dc] bg-[#111114] p-4 shadow-[0_22px_60px_-32px_rgba(17,17,20,0.8)] min-h-[180px] flex flex-col">
          <div className="flex items-center justify-between border-b border-white/8 pb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
              live execution
            </span>
            <span className="flex items-center gap-2 font-mono text-[11px] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
              connected
            </span>
          </div>

          <div className="mt-4 flex-1 font-mono text-[13px] leading-7">
            <div className="text-white/42"># prepara una integración de identidad</div>
            <div className="flex min-w-0 items-center text-white">
              <span className="mr-2 text-[#78dce8]">$</span>
              <span className="break-all">{typed}</span>
              <motion.span
                aria-hidden
                className="ml-1 inline-block h-4 w-2 bg-[#f6821f]"
                animate={reducedMotion ? undefined : { opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
              />
            </div>
          </div>

          <motion.div
            key={item.result}
            initial={reducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-3 flex items-center gap-2 rounded-lg border border-emerald-300/15 bg-emerald-300/8 px-3 py-2.5 font-mono text-[12px] text-emerald-200"
          >
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
            {item.result}
          </motion.div>

          <div className="mt-4 grid gap-2">
            {activeLogs.map(([time, event, state, detail], index) => (
              <motion.div
                key={`${time}-${event}`}
                initial={reducedMotion ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.32, delay: index * 0.05 }}
                className="grid grid-cols-[64px_1fr_58px] gap-3 font-mono text-[11.5px] text-white/58"
              >
                <span className="text-white/30">{time}</span>
                <span className="truncate">
                  <span className="text-white/78">{event}</span>
                  <span className="text-white/28"> · {detail}</span>
                </span>
                <span className={state === "ok" || state === "allow" ? "text-emerald-300" : "text-[#ffb066]"}>
                  {state}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {metrics.map(([label, value], index) => (
            <motion.div
              key={label}
              className="rounded-xl border border-[#e7e4dc] bg-white/70 px-3 py-3 backdrop-blur"
              animate={reducedMotion ? undefined : { y: index === active ? [-1, 1, -1] : 0 }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9a8f82]">{label}</div>
              <div className="mt-1 flex items-center gap-2 text-[16px] font-semibold text-[#1d1d1b]">
                {index === 0 ? <Activity className="h-3.5 w-3.5 text-[#f6821f]" aria-hidden /> : null}
                {value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
