#!/usr/bin/env node
/**
 * SEO / indexability validation for a deployed Next.js site.
 *
 * Read-only: makes GET requests to the live (or local) site and reports
 * on sitemap health, canonical correctness, indexability, and internal
 * linking. Does NOT call Google's Indexing API, does NOT modify anything.
 *
 * Usage:
 *   npm run validate:seo
 *   BASE_URL=http://localhost:3000 npm run validate:seo   (test before deploy)
 */

const BASE_URL = (process.env.BASE_URL || "https://www.iptv4kxtream.com").replace(/\/$/, "");
const CANONICAL_HOST = "https://www.iptv4kxtream.com";

const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}
function warn(message) {
  warnings.push(message);
}

async function fetchRaw(url) {
  // Follow redirects manually so we can report them, rather than silently
  // resolving through them like `fetch`'s default redirect: "follow".
  const res = await fetch(url, { redirect: "manual" });
  return res;
}

async function fetchFollowing(url, maxHops = 5) {
  let current = url;
  const chain = [];
  for (let i = 0; i < maxHops; i++) {
    const res = await fetch(current, { redirect: "manual" });
    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get("location");
      chain.push({ from: current, to: location, status: res.status });
      current = new URL(location, current).toString();
      continue;
    }
    const body = await res.text();
    return { finalUrl: current, status: res.status, body, redirectChain: chain };
  }
  return { finalUrl: current, status: 0, body: "", redirectChain: chain };
}

function extract(html, regex) {
  const m = html.match(regex);
  return m ? m[1] : null;
}

function extractAllHrefs(html) {
  return [...html.matchAll(/href="([^"#?]+)/g)].map((m) => m[1]);
}

async function main() {
  console.log(`# SEO INDEXING VALIDATION\n`);
  console.log(`Target: ${BASE_URL}\n`);

  // --- 1. robots.txt ---
  const robotsRes = await fetchRaw(`${BASE_URL}/robots.txt`);
  if (robotsRes.status !== 200) {
    fail(`robots.txt returned ${robotsRes.status} (expected 200)`);
  }
  const robotsText = robotsRes.status === 200 ? await robotsRes.text() : "";
  if (!/Sitemap:\s*\S+/i.test(robotsText)) {
    fail("robots.txt has no Sitemap: directive");
  }
  const disallowLines = robotsText
    .split("\n")
    .filter((l) => /^Disallow:/i.test(l.trim()))
    .map((l) => l.split(":")[1]?.trim())
    .filter(Boolean);
  const importantPaths = ["/", "/pricing", "/features", "/faq", "/blog"];
  for (const path of importantPaths) {
    for (const rule of disallowLines) {
      if (rule && path.startsWith(rule) && rule !== "") {
        fail(`robots.txt blocks important path "${path}" via rule "Disallow: ${rule}"`);
      }
    }
  }

  // --- 2. sitemap.xml ---
  const sitemapRes = await fetchRaw(`${BASE_URL}/sitemap.xml`);
  if (sitemapRes.status !== 200) {
    fail(`sitemap.xml returned ${sitemapRes.status} (expected 200)`);
    printReport();
    process.exit(1);
  }
  const sitemapXml = await sitemapRes.text();
  const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

  // Sitemap <loc> entries are always absolute production URLs (siteConfig.siteUrl),
  // even when this script is pointed at a local/staging BASE_URL for a pre-deploy
  // check. Crawl against BASE_URL by swapping the origin, while still asserting
  // that each page's own canonical tag resolves to the real production URL below.
  const toFetchUrl = (productionUrl) =>
    BASE_URL === CANONICAL_HOST ? productionUrl : productionUrl.replace(CANONICAL_HOST, BASE_URL);

  const duplicates = urls.filter((u, i) => urls.indexOf(u) !== i);
  const uniqueDuplicates = [...new Set(duplicates)];
  if (uniqueDuplicates.length > 0) {
    fail(`Duplicate URLs in sitemap: ${uniqueDuplicates.join(", ")}`);
  }

  // --- 3. Per-URL checks ---
  const titles = new Map();
  const linkGraph = new Map(urls.map((u) => [u, new Set()]));
  let httpOkCount = 0;
  let redirectCount = 0;
  let noindexCount = 0;
  let canonicalMismatchCount = 0;
  let missingTitleCount = 0;
  let missingDescriptionCount = 0;
  let invalidH1Count = 0;

  for (const url of urls) {
    const { status, body, redirectChain } = await fetchFollowing(toFetchUrl(url));

    if (redirectChain.length > 0) {
      redirectCount++;
      fail(`${url} redirects (${redirectChain.map((r) => `${r.status} -> ${r.to}`).join(", ")})`);
    }

    if (status !== 200) {
      fail(`${url} returned HTTP ${status}`);
      continue;
    }
    httpOkCount++;

    const canonical = extract(body, /<link rel="canonical" href="([^"]*)"/);
    if (!canonical) {
      fail(`${url} has no canonical tag`);
    } else {
      if (canonical !== url) {
        canonicalMismatchCount++;
        fail(`${url} canonical mismatch: canonical is "${canonical}"`);
      }
      if (!canonical.startsWith(CANONICAL_HOST)) {
        canonicalMismatchCount++;
        fail(`${url} canonical does not use ${CANONICAL_HOST}: "${canonical}"`);
      }
    }

    const robotsMeta = extract(body, /<meta name="robots" content="([^"]*)"/);
    if (robotsMeta && /noindex/i.test(robotsMeta)) {
      noindexCount++;
      fail(`${url} has unexpected noindex directive`);
    }

    const title = extract(body, /<title>([^<]*)<\/title>/);
    if (!title) {
      missingTitleCount++;
      fail(`${url} is missing a <title>`);
    } else {
      if (!titles.has(title)) titles.set(title, []);
      titles.get(title).push(url);
    }

    const description = extract(body, /<meta name="description" content="([^"]*)"/);
    if (!description) {
      missingDescriptionCount++;
      fail(`${url} is missing a meta description`);
    }

    const h1Count = (body.match(/<h1[\s>]/g) || []).length;
    if (h1Count !== 1) {
      invalidH1Count++;
      fail(`${url} has ${h1Count} <h1> tags (expected exactly 1)`);
    }

    // Build internal link graph for orphan detection. Hrefs are resolved against
    // `url` (the page's production identity, from the sitemap), so they always
    // come out as production-absolute — compare against CANONICAL_HOST here,
    // not BASE_URL, or every page looks orphaned when crawling a local/staging origin.
    const hrefs = extractAllHrefs(body)
      .map((h) => {
        try {
          return new URL(h, url).toString().replace(/\/$/, "") || CANONICAL_HOST;
        } catch {
          return null;
        }
      })
      .filter((h) => h && h.startsWith(CANONICAL_HOST));
    for (const href of hrefs) {
      const normalized = href.endsWith("/") ? href : href;
      if (linkGraph.has(normalized) && normalized !== url) {
        linkGraph.get(normalized).add(url);
      }
    }
  }

  const duplicateTitleGroups = [...titles.entries()].filter(([, list]) => list.length > 1);
  for (const [title, list] of duplicateTitleGroups) {
    fail(`Duplicate title "${title}" used by: ${list.join(", ")}`);
  }

  const orphans = urls.filter((u) => {
    const home = urls[0];
    if (u === home) return false;
    return linkGraph.get(u)?.size === 0;
  });
  for (const o of orphans) {
    warn(`Potential orphan page (no inbound internal links found among crawled pages): ${o}`);
  }

  printReport({
    sitemapCount: urls.length,
    httpOkCount,
    errorCount: urls.length - httpOkCount,
    redirectCount,
    noindexCount,
    canonicalMismatchCount,
    duplicateCount: uniqueDuplicates.length + duplicateTitleGroups.length,
    missingTitleCount,
    missingDescriptionCount,
    invalidH1Count,
    orphanCount: orphans.length,
  });

  if (errors.length > 0) {
    process.exit(1);
  }
}

function printReport(counts) {
  if (counts) {
    console.log(`Sitemap URLs: ${counts.sitemapCount}`);
    console.log(`HTTP 200: ${counts.httpOkCount}`);
    console.log(`Errors: ${counts.errorCount}`);
    console.log(`Redirects: ${counts.redirectCount}`);
    console.log(`Noindex: ${counts.noindexCount}`);
    console.log(`Canonical mismatches: ${counts.canonicalMismatchCount}`);
    console.log(`Duplicate URLs: ${counts.duplicateCount}`);
    console.log(`Missing titles: ${counts.missingTitleCount}`);
    console.log(`Missing descriptions: ${counts.missingDescriptionCount}`);
    console.log(`Invalid H1 counts: ${counts.invalidH1Count}`);
    console.log(`Potential orphan pages: ${counts.orphanCount}`);
  }

  if (warnings.length > 0) {
    console.log(`\n--- Warnings (non-blocking) ---`);
    warnings.forEach((w) => console.log(`  ⚠ ${w}`));
  }

  if (errors.length > 0) {
    console.log(`\n--- Errors ---`);
    errors.forEach((e) => console.log(`  ✗ ${e}`));
  }

  console.log(`\nSTATUS: ${errors.length === 0 ? "PASS" : "FAIL"}`);
}

main().catch((err) => {
  console.error("Validation script crashed:", err);
  process.exit(1);
});
