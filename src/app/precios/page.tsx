import CorporateButton from "@/components/ui/corporate/Button";
import CorporateCard from "@/components/ui/corporate/Card";
import CorporateSection from "@/components/ui/corporate/Section";
import CorporateContainer from "@/components/ui/corporate/Container";
import { ArrowRight } from "@/components/icons";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Precios de Opendex",
  description:
    "Modelo comercial en preparacion por producto, basado en disponibilidad real, volumen, soporte y alcance confirmado.",
  path: "/precios",
  keywords: ["precios SaaS", "cotizacion software", "planes empresariales"],
});

const pricingInfo = [
  {
    title: "Identity Platform",
    description: "Autenticación con passkeys, SSO y MFA. Escalable para miles de usuarios.",
  },
  {
    title: "Factur Workspaces",
    description: "Facturación CFDI 4.0 automatizada. Timbrado, cancelación y contabilidad integrada.",
  },
  {
    title: "Kiosko Workspaces",
    description: "Punto de venta moderno con inventario, pagos y reportes en tiempo real.",
  },
];

const commercialPrinciples = [
  "Sin planes publicados antes de disponibilidad real",
  "Separación clara entre producto, soporte y volumen",
  "Precios basados en métricas reales, no en promesas",
  "Actualización transparente cuando el producto está listo",
];

export default function Precios() {
  return (
    <>
      {/* HEADER */}
      <CorporateSection light maxWidth="xl">
        <CorporateContainer narrow>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Precios</h1>
            <p className="text-lg text-gray-600 mb-8">
              Cada producto tiene su propio modelo basado en métricas reales.
            </p>
            <CorporateButton
              href="/contacto"
              variant="primary"
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="end"
            >
              Solicitar información
            </CorporateButton>
          </div>
        </CorporateContainer>
      </CorporateSection>

      {/* PRODUCTS */}
      <CorporateSection maxWidth="xl">
        <CorporateContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingInfo.map((item, index) => (
              <CorporateCard
                key={index}
                title={item.title}
                subtitle={item.description}
                className="border-gray-200"
                hover
              />
            ))}
          </div>
        </CorporateContainer>
      </CorporateSection>

      {/* PRINCIPLES */}
      <CorporateSection light maxWidth="lg">
        <CorporateContainer narrow>
          <CorporateCard className="border-gray-200" hover={false}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Principios comerciales</h3>
              <p className="text-gray-600">
                La transparencia es clave. Cada precio se basa en métricas reales y disponibilidad confirmada.
              </p>
              <ul className="space-y-3 mt-6">
                {commercialPrinciples.map((principle, index) => (
                  <li key={index} className="border-t border-gray-200 pt-3 text-gray-700">
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </CorporateCard>
        </CorporateContainer>
      </CorporateSection>
    </>
  );
}
