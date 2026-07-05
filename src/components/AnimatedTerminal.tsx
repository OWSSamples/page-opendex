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
  const [visible, setVisible] = useState("");

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let index = 0;
    const interval = window.setInterval(() => {
      setVisible(text.slice(0, index));
      index += 1;
      if (index >= text.length) window.clearInterval(interval);
    }, 24);

    return () => window.clearInterval(interval);
  }, [enabled, text]);

  return enabled ? visible : text;
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
    <div className="opx-json-card opx-json-card-plain">
      <div className="opx-json-toolbar">
        <div className="opx-json-card-row">
          <span className="opx-json-card-row">
            <Terminal aria-hidden />
            ~/opendex/console
          </span>
        </div>
        <span className="opx-json-badge">{item.mode}</span>
      </div>

      <div className="opx-json-card-body">
        <div className="opx-json-card">
          <div className="opx-json-card-header">
            <span className="opx-json-label">
              live execution
            </span>
            <span className="opx-json-status-accent">
              connected
            </span>
          </div>

          <div className="opx-json-card-body">
            <div className="opx-json-label">prepara una integración de identidad</div>
            <div className="opx-json-card-row">
              <span className="opx-json-status-accent">$</span>
              <span className="break-all">{typed}</span>
              <motion.span
                aria-hidden
                className="opx-json-cursor"
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
            className="opx-json-card-row"
          >
            <CheckCircle2 aria-hidden />
            {item.result}
          </motion.div>

          <div className="opx-json-list">
            {activeLogs.map(([time, event, state, detail], index) => (
              <motion.div
                key={`${time}-${event}`}
                initial={reducedMotion ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.32, delay: index * 0.05 }}
                className="opx-json-card-header"
              >
                <span className="opx-json-label">{time}</span>
                <span>
                  <span>{event}</span>
                  <span className="opx-json-label"> {detail}</span>
                </span>
                <span className="opx-json-status-accent">
                  {state}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="opx-json-metrics">
          {metrics.map(([label, value], index) => (
            <motion.div
              key={label}
              className="opx-json-metric"
              animate={reducedMotion ? undefined : { y: index === active ? [-1, 1, -1] : 0 }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="opx-json-label">{label}</div>
              <div className="opx-json-card-row">
                {index === 0 ? <Activity aria-hidden /> : null}
                {value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
