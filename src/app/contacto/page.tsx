import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import ContactClient from "./ContactClient";

export const metadata = createMetadata({
  title: "Contacto Opendex",
  description:
    "Solicita informacion comercial, contexto tecnico o cotizacion para implementar productos y sitios con Opendex.",
  path: "/contacto",
  keywords: ["contacto Opendex", "cotizacion web", "consultoria tecnica"],
});

export default function Contacto() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Contacto", path: "/contacto" },
        ])}
      />
      <ContactClient />
    </>
  );
}
