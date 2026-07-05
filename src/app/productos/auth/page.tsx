import Link from "next/link";
import { Badge } from "@cloudflare/kumo/components/badge";
import IdentityIcon, { type IdentityIconName } from "@/components/IdentityIcon";
import LocalizedPageHeader from "@/components/LocalizedPageHeader";
import LocalizedLabel from "@/components/LocalizedLabel";
import AuthFlow3D from "@/components/three/AuthFlow3DClient";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, createMetadata, productJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Opendex Identity Platform",
  description:
    "Autenticacion empresarial con passkeys, SSO, MFA, sesiones y auditoria para productos SaaS modernos.",
  path: "/productos/auth",
  keywords: ["passkeys", "SSO", "MFA", "autenticacion SaaS", "identity platform"],
});

const features = [
  {
    iconName: "access",
    title: "Autenticacion sin contrasenas",
    desc: "Flujos pensados para passkeys, magic links y recuperacion segura sin depender de passwords fragiles.",
  },
  {
    iconName: "identity",
    title: "Identidad empresarial",
    desc: "Conexiones SSO y reglas por workspace para separar clientes, equipos internos y administradores.",
  },
  {
    iconName: "session",
    title: "Gobierno de sesiones",
    desc: "Politicas para expiracion, rotacion, revocacion y control de alcance por aplicacion.",
  },
  {
    iconName: "config",
    title: "Integracion guiada",
    desc: "La prioridad no es prometer una linea de codigo, sino reducir decisiones peligrosas durante la implementacion.",
  },
  {
    iconName: "integration",
    title: "Residencia por proyecto",
    desc: "Preparado para definir donde viven datos, logs y eventos segun el contexto del cliente.",
  },
  {
    iconName: "audit",
    title: "Auditoria operativa",
    desc: "Eventos de acceso, cambios de configuracion y decisiones de riesgo listos para trazabilidad.",
  },
] satisfies Array<{ iconName: IdentityIconName; title: string; desc: string }>;

const codeTS = `import { OpendexIdentity } from "@opendex/identity";

const identity = new OpendexIdentity({
  projectId: process.env.OPENDEX_PROJECT_ID!,
  passkeys: true,
  sso: ["google", "github", "saml"],
});

export async function middleware(req: Request) {
  const session = await identity.verify(req);
  if (!session) return identity.redirect("/login");
  return identity.next(session);
}`;

export default function Auth() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Productos", path: "/productos" },
            { name: "Opendex Identity Platform", path: "/productos/auth" },
          ]),
          productJsonLd({
            name: "Opendex Identity Platform",
            description:
              "Autenticacion empresarial con passkeys, SSO, MFA, sesiones y auditoria para productos SaaS modernos.",
            path: "/productos/auth",
            category: "SecurityApplication",
          }),
        ]}
      />
      <LocalizedPageHeader pageKey="productAuth">
        <Link href="/contacto" className="opx-json-button opx-json-button-primary">
          <LocalizedLabel labelKey="requestInfo" />
        </Link>
        <Link href="/status" className="opx-json-button opx-json-button-secondary">
          <LocalizedLabel labelKey="publicStatus" />
        </Link>
        <Badge variant="warning">
          <LocalizedLabel labelKey="prelaunchBadge" />
        </Badge>
      </LocalizedPageHeader>

      <section className="opx-json-section">
        <div className="opx-json-shell opx-json-split">
          <div className="opx-json-copy">
            <p className="opx-json-eyebrow">Cómo funciona</p>
            <h2 className="opx-json-section-title">De challenge a sesión con control de confianza.</h2>
            <p className="opx-json-text">
              El flujo se piensa como una decisión de confianza: dispositivo, origen, usuario, tenant y política antes de emitir una sesión.
            </p>
            <div className="opx-json-inline-list">
              <span className="opx-json-badge">Cliente</span>
              <span className="opx-json-badge">Passkey challenge</span>
              <span className="opx-json-badge">JWT firmado</span>
              <span className="opx-json-badge">Sesión activa</span>
            </div>
          </div>
          <div className="opx-json-card">
            <AuthFlow3D height={340} />
          </div>
        </div>
      </section>

      <section className="opx-json-section">
        <div className="opx-json-shell opx-json-split">
          <div className="opx-json-card opx-json-copy">
            <div className="opx-json-card-header">
              <IdentityIcon name="identity" size={30} className="opx-json-identity-icon" />
              <Badge variant="warning">prelaunch</Badge>
            </div>
            <h2 className="opx-json-panel-title">Integración guiada</h2>
            <p className="opx-json-text">
              La prioridad no es prometer una línea de código, sino reducir decisiones peligrosas durante la implementación.
            </p>
          </div>

          <pre className="opx-json-code">
            <code dangerouslySetInnerHTML={{ __html: highlight(codeTS) }} />
          </pre>
        </div>
      </section>

      <section className="opx-json-section">
        <div className="opx-json-shell">
          <div className="opx-json-copy">
            <p className="opx-json-eyebrow">Funciones</p>
            <h2 className="opx-json-section-title">Todo lo que necesitas para autenticación empresarial.</h2>
          </div>

          <div className="opx-json-control-grid">
            {features.map(({ iconName, title, desc }) => (
              <div key={title} className="opx-json-card opx-json-copy">
                <IdentityIcon name={iconName} size={38} className="opx-json-identity-icon" />
                <h3 className="opx-json-card-title">{title}</h3>
                <p className="opx-json-text">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="opx-json-section">
        <div className="opx-json-shell">
          <div className="opx-json-card opx-json-footer-row">
            <div className="opx-json-copy">
              <h2 className="opx-json-section-title">¿Quieres conocer Opendex Identity Platform?</h2>
              <p className="opx-json-text">
                Está en prelanzamiento y no tiene fecha pública. Podemos contarte el estado actual.
              </p>
            </div>
            <div className="opx-json-actions">
              <Link href="/contacto" className="opx-json-button opx-json-button-primary">
                Contactar
              </Link>
              <Link href="/precios" className="opx-json-button opx-json-button-secondary">
                Ver precios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function highlight(src: string) {
  return src
    .replace(/(\".*?\")/g, '<span class="tok-str">$1</span>')
    .replace(/\b(import|from|const|export|async|function|return|if|new|true|false)\b/g, '<span class="tok-key">$1</span>')
    .replace(/\b(OpendexIdentity|process|env|identity|req|session)\b/g, '<span class="tok-fn">$1</span>');
}
