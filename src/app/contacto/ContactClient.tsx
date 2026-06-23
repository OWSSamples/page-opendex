'use client'

import { useState, type FormEvent } from "react";
import { Mail, Phone, MessageCircle } from "@/components/icons";
import CorporateButton from "@/components/ui/corporate/Button";
import CorporateCard from "@/components/ui/corporate/Card";
import CorporateSection from "@/components/ui/corporate/Section";
import CorporateContainer from "@/components/ui/corporate/Container";

const contactChannels = [
  { type: "Email", value: "hola@opendex.com", Icon: Mail },
  { type: "Telefono", value: "+52 (55) 1234 5678", Icon: Phone },
  { type: "Mensaje", value: "Formulario abajo", Icon: MessageCircle },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <CorporateSection light maxWidth="xl">
        <CorporateContainer narrow>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Contactanos</h1>
            <p className="text-lg text-gray-600 mb-8">
              Responderemos en menos de 24 horas laborales.
            </p>
          </div>
        </CorporateContainer>
      </CorporateSection>

      <CorporateSection maxWidth="xl">
        <CorporateContainer>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <CorporateCard className="border-gray-200" hover={false}>
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-6">Formulario de contacto</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                        Nombre completo
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B21B6] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                        Correo electronico
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B21B6] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                        Mensaje
                      </label>
                      <textarea
                        id="contact-message"
                        value={formData.message}
                        onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B21B6] focus:border-transparent resize-none"
                        required
                      />
                    </div>
                    <CorporateButton type="submit" variant="primary" size="lg" className="w-full">
                      Enviar mensaje
                    </CorporateButton>
                  </form>
                </div>
              </CorporateCard>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Canales directos</h2>
              <div className="space-y-4">
                {contactChannels.map((channel) => (
                  <CorporateCard key={channel.type} className="border-gray-200" hover>
                    <div className="flex items-center gap-3">
                      <channel.Icon className="h-5 w-5 text-[#5B21B6]" aria-hidden />
                      <div>
                        <p className="font-medium">{channel.type}</p>
                        <p className="text-sm text-gray-600">{channel.value}</p>
                      </div>
                    </div>
                  </CorporateCard>
                ))}
              </div>
            </div>
          </div>
        </CorporateContainer>
      </CorporateSection>

      {sent && (
        <CorporateSection light maxWidth="md">
          <CorporateContainer>
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center" role="status">
              <h2 className="text-xl font-semibold mb-2">Mensaje enviado</h2>
              <p className="text-gray-600">Te responderemos pronto.</p>
            </div>
          </CorporateContainer>
        </CorporateSection>
      )}

      <CorporateSection light maxWidth="lg">
        <CorporateContainer narrow>
          <div className="bg-gray-50 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Listo para empezar</h2>
            <p className="text-gray-600 mb-8">
              Cada minuto cuenta. Vamos a construir algo profesional juntos.
            </p>
            <CorporateButton href="/contacto" variant="primary" size="lg">
              Enviar mensaje
            </CorporateButton>
          </div>
        </CorporateContainer>
      </CorporateSection>
    </>
  );
}
