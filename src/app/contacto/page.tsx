"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Building2,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Target,
} from "@/components/icons";
import {
  KumoInput,
  KumoTextarea,
  KumoField,
} from "@/components/KumoUI";
import { useI18n } from "@/i18n/LanguageProvider";

const channels = [
  { Icon: Mail, value: "hola@opendex.com", href: "mailto:hola@opendex.com" },
  { Icon: Building2, value: "producto@opendex.com", href: "mailto:producto@opendex.com" },
  { Icon: MessageCircle, value: "tech@opendex.com", href: "mailto:tech@opendex.com" },
];

const serviceHighlights = [
  { Icon: Globe2 },
  { Icon: Target },
  { Icon: ShieldCheck },
];

export default function Contacto() {
  const [sent, setSent] = useState(false);
  const { dictionary } = useI18n();
  const copy = dictionary.contactPage;

  return (
    <>
      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-ink-200 bg-white">
        <div className="hero-glow" aria-hidden />
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow">{copy.header.eyebrow}</span>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.035em] text-ink-950 sm:text-5xl lg:text-6xl">
              {copy.header.title}
            </h1>
            <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-ink-600">
              {copy.header.description}
            </p>
          </div>
        </div>
      </section>

      {/* FORM + CHANNELS */}
      <section className="relative overflow-hidden border-b border-[#e7e4dc] bg-[#faf8f4]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(29,29,27,0.045) 1px, transparent 1px), linear-gradient(0deg, rgba(29,29,27,0.035) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_390px] lg:items-start">
            <div className="overflow-hidden border border-[#d8d4c8] bg-white shadow-[0_28px_80px_-48px_rgba(29,29,27,0.45)]">
              <div className="grid gap-6 border-b border-[#e7e4dc] bg-[#fffaf3] px-6 py-6 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a9a93]">
                    {copy.form.kicker}
                  </span>
                  <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-[-0.035em] text-[#1d1d1b] sm:text-[34px]">
                    {copy.form.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-[14.5px] leading-7 text-[#4a4a47]">
                    {copy.form.description}
                  </p>
                </div>
                <div className="inline-flex w-fit items-center gap-2 border border-emerald-200 bg-emerald-50 px-3 py-2 text-[12px] font-semibold text-emerald-800">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {copy.form.available}
                </div>
              </div>

              {sent ? (
                <div className="px-6 py-14 text-center sm:px-8">
                  <span className="mx-auto grid h-14 w-14 place-items-center border border-emerald-200 bg-emerald-50 text-emerald-700">
                    <CheckCircle2 className="h-7 w-7" aria-hidden />
                  </span>
                  <h2 className="mt-5 text-[24px] font-semibold tracking-tight text-ink-950">
                    {copy.form.sentTitle}
                  </h2>
                  <p className="mx-auto mt-2 max-w-md text-[14px] leading-6 text-ink-600">
                    {copy.form.sentDescription}
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-7 inline-flex min-h-11 items-center justify-center border border-ink-300 px-4 text-[13px] font-semibold text-ink-900 transition hover:border-ink-950 hover:bg-ink-950 hover:text-white"
                  >
                    {copy.form.sendAnother}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="grid gap-6 px-6 py-7 sm:px-8 sm:py-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <KumoField label={copy.form.name} required>
                      <KumoInput name="name" placeholder={copy.form.namePlaceholder} required />
                    </KumoField>
                    <KumoField label={copy.form.company}>
                      <KumoInput name="company" placeholder={copy.form.companyPlaceholder} />
                    </KumoField>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <KumoField
                      label={copy.form.email}
                      required
                      description={copy.form.emailHelp}
                    >
                      <KumoInput
                        type="email"
                        name="email"
                        placeholder={copy.form.emailPlaceholder}
                        required
                      />
                    </KumoField>
                    <KumoField label={copy.form.timeline}>
                      <KumoInput type="text" name="timeline" placeholder={copy.form.timelinePlaceholder} />
                    </KumoField>
                  </div>

                  <fieldset>
                    <legend className="text-[12.5px] font-semibold text-ink-700">
                      {copy.form.requestType}
                    </legend>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {copy.form.options.map((option) => (
                        <label
                          key={option}
                          className="flex min-h-11 cursor-pointer items-center gap-3 border border-[#e7e4dc] bg-[#fffaf3]/70 px-3.5 py-2.5 text-[13px] font-medium text-[#3d3d3a] transition hover:border-[#d8d4c8] hover:bg-white"
                        >
                          <input type="checkbox" className="h-4 w-4 accent-[#f6821f]" />
                          {option}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <KumoField
                    label={copy.form.message}
                    description={copy.form.messageHelp}
                  >
                    <KumoTextarea
                      name="message"
                      rows={5}
                      placeholder={copy.form.messagePlaceholder}
                    />
                  </KumoField>

                  <div className="grid gap-4 border-t border-[#e7e4dc] pt-6 md:grid-cols-[1fr_auto] md:items-center">
                    <p className="text-[12.5px] leading-6 text-[#6b6b66]">
                      {copy.form.note}
                    </p>
                    <button
                      type="submit"
                      className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[#1d1d1b] px-6 text-[14px] font-semibold text-white transition hover:bg-[#2d2d2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6821f] focus-visible:ring-offset-2 md:w-auto"
                    >
                      {copy.form.submit}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <aside className="grid gap-4">
              <div className="border border-[#1d1d1b] bg-[#1d1d1b] p-6 text-white">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  {copy.sidebar.kicker}
                </span>
                <h2 className="mt-3 text-[24px] font-semibold tracking-[-0.03em]">
                  {copy.sidebar.title}
                </h2>
                <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
                  {copy.sidebar.checklist.map((item, index) => (
                    <li key={item} className="flex items-start gap-3 py-3 text-[13.5px] leading-6 text-white/78">
                      <span className="mt-1 font-mono text-[11px] text-[#ff9910]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-px overflow-hidden border border-[#e7e4dc] bg-[#e7e4dc]">
                {serviceHighlights.map(({ Icon }, index) => {
                  const [title, desc] = copy.sidebar.highlights[index];

                  return (
                  <article key={title} className="bg-white p-5">
                    <div className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center border border-[#e7e4dc] bg-[#fffaf3] text-[#f6821f]">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-[14px] font-semibold text-[#1d1d1b]">{title}</h3>
                        <p className="mt-1 text-[12.5px] leading-5 text-[#6b6b66]">{desc}</p>
                      </div>
                    </div>
                  </article>
                  );
                })}
              </div>

              <div className="border border-[#e7e4dc] bg-white p-5">
                <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a9a93]">
                  {copy.sidebar.channels}
                </div>
                <div className="mt-4 grid gap-2">
                  {channels.map(({ Icon, value, href }, index) => {
                    const title = copy.sidebar.channelTitles[index];

                    return (
                    <a
                      key={title}
                      href={href}
                      className="group flex min-h-12 items-center gap-3 border border-[#e7e4dc] bg-[#faf8f4] px-3 py-2 transition hover:border-[#d8d4c8] hover:bg-white"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center text-[#f6821f]">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[13px] font-semibold text-[#1d1d1b]">{title}</span>
                        <span className="block truncate text-[12px] text-[#6b6b66]">{value}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#9a9a93] transition group-hover:translate-x-0.5 group-hover:text-[#f6821f]" aria-hidden />
                    </a>
                    );
                  })}
                </div>
              </div>

              <Link href="/productos" className="inline-flex min-h-11 items-center justify-between border border-[#e7e4dc] bg-white px-4 text-[13px] font-semibold text-[#1d1d1b] transition hover:border-[#d8d4c8] hover:bg-[#fffaf3]">
                {copy.sidebar.productLines}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
