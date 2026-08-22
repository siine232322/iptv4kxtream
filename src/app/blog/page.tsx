import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowBackground from "@/components/ui/GlowBackground";
import { blogPosts } from "@/lib/data";
import { pageSocial, breadcrumbJsonLd } from "@/lib/seo";

const title = "Nos Guides";
const description = "Guides et astuces sur la configuration IPTV, les appareils compatibles et une expérience de streaming fiable.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  ...pageSocial({ title, description, path: "/blog" }),
};

export default function BlogPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Blog", path: "/blog" }]);

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <GlowBackground className="-z-10" />
      <Container className="flex flex-col gap-12">
        <SectionHeading
          as="h1"
          eyebrow="Blog"
          title="Nos Guides"
          description="Des articles pratiques et concrets sur la configuration IPTV et les appareils."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(8,120,217,0.35)]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="rounded-full bg-blue/10 px-2.5 py-1 font-semibold text-blue">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-lg font-bold text-foreground">{post.title}</h2>
                <p className="flex-1 text-sm text-muted">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-blue">
                  Lire l&apos;article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
