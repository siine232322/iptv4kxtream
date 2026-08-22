import { siteConfig } from "./site";

/** Per-page Open Graph + Twitter metadata, so shared links show the actual page content
 * instead of falling back to the homepage title/description defined in the root layout. */
export function pageSocial({
  title,
  description,
  path,
  type = "website",
  image,
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
}) {
  const url = `${siteConfig.siteUrl}${path}`;
  const fullTitle = `${title} | ${siteConfig.siteName}`;

  return {
    openGraph: {
      type,
      url,
      siteName: siteConfig.siteName,
      title: fullTitle,
      description,
      ...(image ? { images: [{ url: image }] } : {}),
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

/** BreadcrumbList JSON-LD. Always starts from "Accueil" (the homepage). */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${siteConfig.siteUrl}${item.path}`,
      })),
    ],
  };
}
