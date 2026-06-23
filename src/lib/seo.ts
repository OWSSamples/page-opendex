import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/opengraph-image",
  noIndex = false,
  keywords = [],
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    applicationName: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    keywords: [...siteConfig.keywords, ...keywords],
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: [siteConfig.social.x, siteConfig.social.github, siteConfig.social.linkedin],
    description: siteConfig.description,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "es-MX",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/productos?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function productJsonLd({
  name,
  description,
  path,
  category,
}: {
  name: string;
  description: string;
  path: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: category,
    operatingSystem: "Web",
    url: absoluteUrl(path),
    description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      priceCurrency: "MXN",
      price: "0",
      url: absoluteUrl("/contacto"),
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
