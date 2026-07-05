import Link from "next/link";
import type { LegalMarkdownBlock, LegalPolicyDocument } from "@/lib/legalPolicies";

const policyContacts = [
  ["Global", "ows-policy@opendex.dev"],
  ["Mexico", "ows-policy-mexico@opendex.dev"],
  ["Brazil", "ows-policy-brazil@opendex.dev"],
  ["United States", "ows-policy-united-states@opendex.dev"],
  ["Colombia", "ows-policy-colombia@opendex.dev"],
  ["Chile", "ows-policy-chile@opendex.dev"],
  ["Argentina", "ows-policy-argentina@opendex.dev"],
  ["Peru", "ows-policy-peru@opendex.dev"],
  ["Spain", "ows-policy-spain@opendex.dev"],
] as const;

function getSectionLinks(blocks: LegalMarkdownBlock[]) {
  return blocks.filter(
    (block): block is Extract<LegalMarkdownBlock, { type: "heading" }> =>
      block.type === "heading" && block.level === 2
  );
}

function getSafeInternalHref(value: string | undefined, fallback = "/legal") {
  if (!value?.startsWith("/")) return fallback;
  if (value.startsWith("//")) return fallback;
  return value;
}

function LegalMarkdownBlockView({ block }: { block: LegalMarkdownBlock }) {
  if (block.type === "heading") {
    if (block.level === 3) {
      return <h3 id={block.id}>{block.text}</h3>;
    }

    return <h2 id={block.id}>{block.text}</h2>;
  }

  if (block.type === "paragraph") {
    return <p>{block.text}</p>;
  }

  if (block.type === "list") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "component") {
    if (block.name === "LegalButton") {
      return (
        <Link href={getSafeInternalHref(block.props.href, "/contacto")} className="opx-json-button opx-json-button-primary opx-legal-mdx-button">
          {block.props.label ?? "Contactar"}
        </Link>
      );
    }

    if (block.name === "LegalCallout") {
      return (
        <aside className="opx-legal-mdx-callout">
          {block.props.title ? <h3>{block.props.title}</h3> : null}
          {block.props.description ? <p>{block.props.description}</p> : null}
        </aside>
      );
    }

    if (block.name === "LegalGrid") {
      const items = (block.props.items ?? "")
        .split(";")
        .map((item) => item.trim())
        .filter(Boolean);

      return (
        <div className="opx-legal-mdx-grid">
          {items.map((item) => {
            const [title, description = ""] = item.split(":").map((part) => part.trim());
            return (
              <div key={item} className="opx-legal-mdx-mini-card">
                <h3>{title}</h3>
                {description ? <p>{description}</p> : null}
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <Link href={getSafeInternalHref(block.props.href)} className="opx-legal-mdx-card">
        <h3>{block.props.title ?? "Documento legal"}</h3>
        {block.props.description ? <p>{block.props.description}</p> : null}
        <span>{block.props.label ?? "Ver documento"}</span>
      </Link>
    );
  }

  return (
    <div className="opx-cookie-policy-table" role="table">
      <div role="row" className="opx-cookie-policy-table-head">
        {block.headers.map((header) => (
          <span key={header} role="columnheader">
            {header}
          </span>
        ))}
      </div>
      {block.rows.map((row) => (
        <div key={row.join("-")} role="row" className="opx-cookie-policy-table-row">
          {row.map((cell) => (
            <span key={cell} role="cell">
              {cell}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function LegalPolicyPage({ policy }: { policy: LegalPolicyDocument }) {
  const sectionLinks = getSectionLinks(policy.blocks);

  return (
    <main className="opx-cookie-policy-page">
      <section className="opx-cookie-policy-hero">
        <div className="opx-cookie-policy-shell">
          <p className="opx-cookie-policy-kicker">{policy.eyebrow}</p>
          <h1>{policy.title}</h1>
          <p>{policy.updatedAt}</p>
          {policy.description ? <p>{policy.description}</p> : null}
        </div>
      </section>

      <section className="opx-cookie-policy-content">
        <div className="opx-cookie-policy-shell opx-cookie-policy-layout">
          <aside className="opx-cookie-policy-aside" aria-label={`Indice de ${policy.title}`}>
            <nav>
              <p>En esta politica</p>
              <ul>
                {sectionLinks.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.text}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {policy.slug === "support" ? (
              <div className="opx-cookie-policy-contact">
                <p>Soporte de politica</p>
                {policyContacts.map(([country, email]) => (
                  <a key={email} href={`mailto:${email}`}>
                    {country}: {email}
                  </a>
                ))}
                <span>Otros paises: ows-policy-[pais]@opendex.dev</span>
              </div>
            ) : null}
          </aside>

          <article className="opx-cookie-policy-article opx-legal-markdown">
            {policy.blocks.map((block, index) => (
              <LegalMarkdownBlockView
                key={`${block.type}-${"id" in block ? block.id : index}`}
                block={block}
              />
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
