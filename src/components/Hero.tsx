"use client";

import { ArrowRight, Check, Fingerprint, LockKeyhole, ShieldCheck } from "@/components/icons";
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
    <section id="top" className="relative isolate overflow-hidden bg-[#080a12] pt-28 text-white">
      <div className="hero-grid opacity-70" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-20 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-white/72">
              <span className="h-1.5 w-1.5 bg-[#ff9900]" />
              Opendex Auth v2026.06
            </div>

            <h1 className="mt-7 font-heading text-[44px] font-semibold leading-[1.04] text-white sm:text-[58px] lg:text-[66px]">
              Opendex Identity Cloud
            </h1>

            <p className="mt-6 max-w-xl text-[17px] leading-8 text-white/68">
              Una capa de autenticacion para productos SaaS que necesitan
              passkeys, SSO empresarial, sesiones seguras y control operativo
              sin construir infraestructura de identidad desde cero.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex h-11 items-center justify-center gap-2 bg-[#ff9900] px-5 text-[14px] font-bold text-[#111827] transition hover:bg-[#ffb84d]"
              >
                Crear cuenta
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="#docs"
                className="inline-flex h-11 items-center justify-center border border-white/14 bg-white/[0.04] px-5 text-[14px] font-semibold text-white/86 transition hover:bg-white/[0.08]"
              >
                Revisar documentacion
              </a>
            </div>

            <div className="mt-9 grid gap-2 text-[13px] text-white/72">
              {checks.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="grid h-5 w-5 place-items-center border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden border border-white/10 bg-[#0c101a] shadow-[0_34px_120px_-50px_rgba(0,0,0,0.9)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 place-items-center bg-[#4f46e5]">
                    <Fingerprint className="h-4 w-4" aria-hidden />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-white">Auth Gateway</div>
                    <div className="text-[11px] text-white/42">production / global edge</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 bg-emerald-300" />
                  Operational
                </div>
              </div>

              <div className="grid border-b border-white/10 sm:grid-cols-4">
                {metrics.map(([label, value]) => (
                  <div key={label} className="border-b border-white/10 p-4 sm:border-b-0 sm:border-r last:sm:border-r-0">
                    <div className="text-[10px] font-semibold uppercase text-white/38">
                      {label}
                    </div>
                    <div className="mt-2 font-heading text-[23px] font-semibold text-white">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-0 lg:grid-cols-[1fr_280px]">
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-[11px] font-semibold uppercase text-white/40">
                      Live authentication events
                    </div>
                    <div className="text-[11px] text-white/36">last 5 min</div>
                  </div>
                  <div className="overflow-hidden border border-white/8">
                    {events.map(([time, event, status, latency]) => (
                      <div
                        key={`${time}-${event}`}
                        className="grid grid-cols-[54px_1fr_86px_54px] items-center border-b border-white/[0.07] px-3 py-3 text-[12px] last:border-b-0"
                      >
                        <span className="font-mono text-white/38">{time}</span>
                        <span className="font-mono text-white/78">{event}</span>
                        <span className="text-emerald-300">{status}</span>
                        <span className="text-right font-mono text-white/42">{latency}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 bg-black/18 p-5 lg:border-l lg:border-t-0">
                  <div className="flex items-center gap-2 text-[12px] font-semibold text-white">
                    <ShieldCheck className="h-4 w-4 text-emerald-300" aria-hidden />
                    Policy decision
                  </div>
                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="flex justify-between text-[11px] uppercase text-white/38">
                        <span>Risk score</span>
                        <span>{stage === 2 ? "32" : "08"}/100</span>
                      </div>
                      <div className="mt-2 h-1.5 bg-white/10">
                        <div
                          className="h-1.5 bg-[#ff9900] transition-all duration-500"
                          style={{ width: stage === 2 ? "32%" : "8%" }}
                        />
                      </div>
                    </div>
                    <div className="border border-white/8 bg-white/[0.03] p-3">
                      <div className="flex items-center gap-2 text-[12px] text-white/76">
                        <LockKeyhole className="h-3.5 w-3.5 text-atoll-300" aria-hidden />
                        MFA {stage === 2 ? "required" : "not required"}
                      </div>
                      <p className="mt-2 text-[12px] leading-5 text-white/48">
                        Device trusted, region allowed, session rotated after
                        successful challenge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
              {["SOC 2 controls", "99.99% SLA", "Data residency"].map((item) => (
                <div key={item} className="bg-[#0c101a] px-4 py-3 text-[12px] text-white/62">
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
