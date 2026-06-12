"use client";

import { Minus, Plus, MessageCircle } from "@/components/icons";
import { useState } from "react";

const faqs = [
  {
    q: "¿Opendex ofrece actualmente un programa para startups?",
    a: "No. Opendex Web Services no esta ofreciendo un programa de startups. Nuestro objetivo actual es construir plataformas tecnologicas solidas y destacar en la industria.",
  },
  {
    q: "¿Cual es el estado de los productos?",
    a: "Opendex Identity Platform esta en prelanzamiento, Opendex Kiosko Workspaces esta en beta aislada y Factur Workspaces aun no esta disponible publicamente.",
  },
  {
    q: "¿Hay fechas de lanzamiento?",
    a: "No tenemos fechas publicas de lanzamiento para Identity Platform ni Kiosko Workspaces. Factur Workspaces esta listo en su base, pero quedan mejoras antes de abrirlo.",
  },
  {
    q: "¿Puedo solicitar informacion tecnica?",
    a: "Si. Puedes contactarnos para conocer el enfoque tecnico, el roadmap y los escenarios que estamos validando antes de abrir disponibilidad publica.",
  },
  {
    q: "¿Kiosko Workspaces ya se puede usar?",
    a: "No de forma publica. Actualmente esta en beta dentro de un entorno aislado, sin fecha de lanzamiento anunciada.",
  },
  {
    q: "¿Factur Workspaces ya esta disponible?",
    a: "Todavia no. La base del producto esta preparada, pero se estan cerrando mejoras antes de hacerlo disponible.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-dashed border-[#e7e4dc] bg-[#faf8f4] cf-section">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <div className="cf-eyebrow">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden /> Preguntas frecuentes
            </div>
            <h2 className="cf-display cf-display-md mt-5 text-balance">
              Preguntas sobre el
              <br />
              estado actual.
            </h2>
            <p className="cf-body mt-5 text-[#3d3d3a]">
              Informacion directa sobre Opendex Web Services, sus productos en
              preparacion y lo que aun no esta disponible publicamente.
            </p>
          </div>

          <div className="mt-8 lg:mt-0 overflow-hidden rounded-2xl border border-[#e7e4dc] bg-white shadow-[0_20px_40px_-20px_rgba(29,29,27,0.08)]">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className={i > 0 ? "border-t border-[#e7e4dc]" : ""}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-[#faf8f4] sm:px-8 sm:py-6"
                    aria-expanded={isOpen}
                  >
                    <div className="pr-4">
                      <div className="text-[16px] font-semibold text-[#1d1d1b]">
                        {item.q}
                      </div>
                    </div>
                    <span
                      className={`grid h-9 w-9 flex-none place-items-center rounded-full transition ${
                        isOpen
                          ? "bg-[#fff3e0] text-[#f6821f]"
                          : "bg-[#faf8f4] text-[#9a9a93] hover:bg-[#e7e4dc]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" aria-hidden />
                      ) : (
                        <Plus className="h-4 w-4" aria-hidden />
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="px-6 pb-6 pr-16 text-[15px] leading-7 text-[#4a4a47] sm:px-8">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
