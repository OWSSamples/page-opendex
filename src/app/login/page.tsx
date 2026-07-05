import Link from "next/link";
import IdentityIcon from "@/components/IdentityIcon";
import { ArrowRight } from "@/components/icons";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";

export const metadata = { title: "Inicio de sesion" };

export default function Login() {
  return (
    <>
      <LocalizedPageHeader pageKey="login">
        <Link href="/contacto" className="opx-json-button opx-json-button-primary">
          <LocalizedLabel labelKey="requestAccess" /> <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </LocalizedPageHeader>
      <section className="opx-json-section">
        <div className="opx-json-shell">
          <div className="opx-json-card opx-json-copy">
            <IdentityIcon name="lock" size={34} className="opx-json-identity-icon" />
            <h2 className="opx-json-section-title">Acceso controlado</h2>
            <p className="opx-json-text">
              Cuando exista disponibilidad publica, esta pagina cambiara a un flujo de autenticacion real.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
