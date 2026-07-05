import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

export type LegalPolicyMeta = {
  slug: string;
  title: string;
  eyebrow: string;
  updatedAt: string;
  description: string;
  order: number;
};

export type LegalMarkdownBlock =
  | { type: "heading"; id: string; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "component"; name: LegalMdxComponentName; props: Record<string, string> };

export type LegalMdxComponentName =
  | "LegalCard"
  | "LegalButton"
  | "LegalCallout"
  | "LegalGrid";

export type LegalPolicyDocument = LegalPolicyMeta & {
  blocks: LegalMarkdownBlock[];
};

const legalContentDir = path.join(process.cwd(), "src/content/legal");

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseFrontmatter(source: string) {
  if (!source.startsWith("---\n")) {
    return { frontmatter: {} as Record<string, string>, body: source };
  }

  const end = source.indexOf("\n---", 4);
  if (end === -1) {
    return { frontmatter: {} as Record<string, string>, body: source };
  }

  const rawFrontmatter = source.slice(4, end).trim();
  const body = source.slice(end + 4).trim();
  const frontmatter = rawFrontmatter.split("\n").reduce<Record<string, string>>((current, line) => {
    const separator = line.indexOf(":");
    if (separator === -1) return current;

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^"|"$/g, "");
    current[key] = value;
    return current;
  }, {});

  return { frontmatter, body };
}

function parseMarkdownTable(lines: string[]) {
  const parseRow = (line: string) =>
    line
      .trim()
      .replace(/^\||\|$/g, "")
      .split("|")
      .map((cell) => cell.trim());

  const headers = parseRow(lines[0]);
  const rows = lines.slice(2).map(parseRow).filter((row) => row.some(Boolean));
  return { type: "table" as const, headers, rows };
}

function parseComponentProps(rawProps: string) {
  const props: Record<string, string> = {};
  const propPattern = /([A-Za-z][A-Za-z0-9]*)="([^"]*)"/g;
  let match: RegExpExecArray | null;

  while ((match = propPattern.exec(rawProps))) {
    props[match[1]] = match[2];
  }

  return props;
}

function parseLegalMdxComponent(line: string): LegalMarkdownBlock | null {
  const match = line.match(/^<(LegalCard|LegalButton|LegalCallout|LegalGrid)\s*([^>]*)\/>$/);
  if (!match) return null;

  return {
    type: "component",
    name: match[1] as LegalMdxComponentName,
    props: parseComponentProps(match[2] ?? ""),
  };
}

function parseMarkdownBlocks(markdown: string): LegalMarkdownBlock[] {
  const blocks: LegalMarkdownBlock[] = [];
  const lines = markdown.split(/\r?\n/);
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push({ type: "paragraph", text: paragraph.join(" ").trim() });
    paragraph = [];
  };

  const flushList = () => {
    if (!list.length) return;
    blocks.push({ type: "list", items: list });
    list = [];
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    const component = parseLegalMdxComponent(trimmed);
    if (component) {
      flushParagraph();
      flushList();
      blocks.push(component);
      continue;
    }

    if (trimmed.startsWith("|") && lines[index + 1]?.trim().startsWith("|")) {
      flushParagraph();
      flushList();
      const tableLines = [trimmed];
      index += 1;
      tableLines.push(lines[index].trim());
      while (lines[index + 1]?.trim().startsWith("|")) {
        index += 1;
        tableLines.push(lines[index].trim());
      }
      blocks.push(parseMarkdownTable(tableLines));
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      const text = trimmed.replace(/^##\s+/, "");
      blocks.push({ type: "heading", id: slugify(text), level: 2, text });
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      const text = trimmed.replace(/^###\s+/, "");
      blocks.push({ type: "heading", id: slugify(text), level: 3, text });
      continue;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      list.push(trimmed.replace(/^-\s+/, ""));
      continue;
    }

    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  return blocks;
}

export function getLegalPolicy(slug: string): LegalPolicyDocument | null {
  const mdxFilePath = path.join(legalContentDir, `${slug}.mdx`);
  const mdFilePath = path.join(legalContentDir, `${slug}.md`);

  try {
    let source: string;
    try {
      source = readFileSync(mdxFilePath, "utf8");
    } catch {
      source = readFileSync(mdFilePath, "utf8");
    }

    const { frontmatter, body } = parseFrontmatter(source);

    return {
      slug,
      title: frontmatter.title ?? slug,
      eyebrow: frontmatter.eyebrow ?? "Legal",
      updatedAt: frontmatter.updatedAt ?? "Ultima actualizacion pendiente",
      description: frontmatter.description ?? "",
      order: Number(frontmatter.order ?? "999"),
      blocks: parseMarkdownBlocks(body),
    };
  } catch {
    return null;
  }
}

export function getLegalPolicySlugs() {
  try {
    return readdirSync(legalContentDir)
      .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
      .map((file) => file.replace(/\.mdx?$/, ""));
  } catch {
    return [];
  }
}

export function getAllLegalPolicies() {
  return getLegalPolicySlugs()
    .map((slug) => getLegalPolicy(slug))
    .filter((policy): policy is LegalPolicyDocument => Boolean(policy))
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}
