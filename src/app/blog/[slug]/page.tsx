import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import GlowBackground from "@/components/ui/GlowBackground";
import CTA from "@/components/CTA";
import { blogPosts } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { pageSocial, breadcrumbJsonLd as buildBreadcrumb } from "@/lib/seo";

/** Strings starting with "## " render as an H2; consecutive "- " lines group into a <ul>. */
function renderContent(content: string[]): ReactNode[] {
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = (key: string) => {
    if (listItems.length === 0) return;
    blocks.push(
      <ul key={key} className="flex flex-col gap-2">
        {listItems.map((item, j) => (
          <li key={j} className="flex gap-2.5">
            <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
    listItems = [];
  };

  content.forEach((block, i) => {
    if (block.startsWith("## ")) {
      flushList(`list-before-${i}`);
      blocks.push(
        <h2 key={i} className="mt-2 text-xl font-bold text-foreground">
          {block.slice(3)}
        </h2>
      );
    } else if (block.startsWith("- ")) {
      listItems.push(block.slice(2));
    } else {
      flushList(`list-before-${i}`);
      blocks.push(<p key={i}>{block}</p>);
    }
  });
  flushList("list-end");

  return blocks;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    ...pageSocial({
      title: post.title,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
      type: "article",
      image: post.image,
      publishedTime: post.date,
    }),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: siteConfig.siteName },
    publisher: { "@type": "Organization", name: siteConfig.siteName },
    mainEntityOfPage: `${siteConfig.siteUrl}/blog/${post.slug}`,
  };

  const breadcrumbJsonLd = buildBreadcrumb([
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article className="relative overflow-hidden bg-white py-14 sm:py-20">
        <GlowBackground className="-z-10" />
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-blue"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au Blog
          </Link>

          <div className="mt-6 flex items-center gap-3 text-xs text-muted">
            <span className="rounded-full bg-blue/10 px-2.5 py-1 font-semibold text-blue">
              {post.category}
            </span>
            <span>{post.readTime}</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted">
            {renderContent(post.content)}
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8 text-sm">
            {post.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 font-semibold text-muted transition-colors hover:border-blue/40 hover:text-blue"
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </Container>
      </article>
      <CTA />
    </>
  );
}
