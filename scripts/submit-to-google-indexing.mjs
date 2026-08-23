/**
 * Submits site URLs to the Google Indexing API so new/updated pages
 * (especially blog articles) get crawled faster than waiting for the
 * normal sitemap crawl cycle.
 *
 * Setup (one-time, in Google Cloud Console — see README below the code):
 *   1. Create a GCP project, enable the "Web Search Indexing API".
 *   2. Create a service account, generate a JSON key.
 *   3. Add the service account's email as an Owner in Search Console
 *      (Settings > Users and permissions > Add user).
 *   4. Save the key file locally, e.g. ./gcp-indexing-key.json
 *      (already gitignored — never commit this file).
 *
 * Usage:
 *   GOOGLE_APPLICATION_CREDENTIALS=./gcp-indexing-key.json node scripts/submit-to-google-indexing.mjs
 *   GOOGLE_APPLICATION_CREDENTIALS=./gcp-indexing-key.json node scripts/submit-to-google-indexing.mjs https://www.iptv4kxtream.com/blog/mon-article
 *
 * With no URL argument, it fetches every URL currently in /sitemap.xml
 * (defaults to siteConfig.siteUrl; override with SITE_URL env var, useful
 * for testing against http://localhost:3000 first).
 */

import { GoogleAuth } from "google-auth-library";

const SITE_URL = process.env.SITE_URL || "https://www.iptv4kxtream.com";
const KEY_FILE = process.env.GOOGLE_APPLICATION_CREDENTIALS;

if (!KEY_FILE) {
  console.error(
    "Missing GOOGLE_APPLICATION_CREDENTIALS.\n" +
      "Set it to the path of your service account JSON key, e.g.:\n" +
      "  GOOGLE_APPLICATION_CREDENTIALS=./gcp-indexing-key.json node scripts/submit-to-google-indexing.mjs"
  );
  process.exit(1);
}

async function getUrlsFromSitemap() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${SITE_URL}/sitemap.xml (${res.status})`);
  }
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  return matches;
}

async function submitUrl(client, url, type = "URL_UPDATED") {
  const res = await client.request({
    url: "https://indexing.googleapis.com/v3/urlNotifications:publish",
    method: "POST",
    data: { url, type },
  });
  return res.data;
}

async function main() {
  const auth = new GoogleAuth({
    keyFile: KEY_FILE,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });
  const client = await auth.getClient();

  const argUrl = process.argv[2];
  const urls = argUrl ? [argUrl] : await getUrlsFromSitemap();

  console.log(`Submitting ${urls.length} URL(s) to the Google Indexing API...\n`);

  for (const url of urls) {
    try {
      const result = await submitUrl(client, url);
      console.log(`✓ ${url}`);
      console.log(`  notifyTime: ${result.urlNotificationMetadata?.latestUpdate?.notifyTime ?? "n/a"}`);
    } catch (err) {
      const message = err?.response?.data?.error?.message || err.message;
      console.error(`✗ ${url}\n  ${message}`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
