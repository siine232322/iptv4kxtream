import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { blogPosts } from "@/lib/data";

const routePriority: Record<string, number> = {
  "": 1,
  "/pricing": 0.9,
  "/features": 0.9,
  "/iptv-smart-tv": 0.8,
  "/iptv-firestick": 0.8,
  "/iptv-android": 0.8,
  "/iptv-iphone": 0.8,
  "/faq": 0.7,
  "/blog": 0.7,
  "/contact": 0.6,
  "/about": 0.4,
  "/support": 0.4,
  "/privacy": 0.3,
  "/terms": 0.3,
  "/refund": 0.3,
};

const routeChangeFrequency: Record<string, MetadataRoute.Sitemap[number]["changeFrequency"]> = {
  "": "weekly",
  "/pricing": "weekly",
  "/features": "monthly",
  "/iptv-smart-tv": "monthly",
  "/iptv-firestick": "monthly",
  "/iptv-android": "monthly",
  "/iptv-iphone": "monthly",
  "/faq": "monthly",
  "/blog": "weekly",
  "/contact": "yearly",
  "/about": "yearly",
  "/support": "monthly",
  "/privacy": "yearly",
  "/terms": "yearly",
  "/refund": "yearly",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.keys(routePriority).map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: routeChangeFrequency[route],
    priority: routePriority[route],
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
