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
    <section id="faq" className="opx-json-section">
      <div className="opx-json-shell">
        <div className="opx-json-split">
          <div className="opx-json-copy">
            <div className="opx-json-eyebrow">
              <MessageCircle aria-hidden /> Preguntas frecuentes
            </div>
            <h2 className="opx-json-section-title">
              Preguntas sobre el
              <br />
              estado actual.
            </h2>
            <p className="opx-json-text">
              Informacion directa sobre Opendex Web Services, sus productos en
              preparacion y lo que aun no esta disponible publicamente.
            </p>
          </div>

          <div className="opx-json-card opx-json-card-plain">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="opx-json-faq-button"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <div className="opx-json-card-title">
                        {item.q}
                      </div>
                    </div>
                    <span className="opx-json-check-icon">
                      {isOpen ? (
                        <Minus aria-hidden />
                      ) : (
                        <Plus aria-hidden />
                      )}
                    </span>
                  </button>
                  <div className={isOpen ? "opx-json-faq-panel opx-json-faq-panel-open" : "opx-json-faq-panel"}>
                    <div>
                      <p className="opx-json-text">
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
