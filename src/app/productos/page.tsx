import ProductsClient from "./ProductsClient";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Productos de Opendex",
  description:
    "Explora Identity Platform, Factur Workspaces y Kiosko Workspaces con estado, alcance y capacidades de cada linea.",
  path: "/productos",
  keywords: ["productos SaaS", "identity platform", "facturacion CFDI", "POS retail"],
});

export default function Productos() {
  return <ProductsClient />;
}
