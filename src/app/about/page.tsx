import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowBackground from "@/components/ui/GlowBackground";
import CTA from "@/components/CTA";
import { trustValues } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { pageSocial, breadcrumbJsonLd } from "@/lib/seo";

const title = "À propos";
const description = `Découvrez ${siteConfig.siteName} et les principes qui guident notre service IPTV.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  ...pageSocial({ title, description, path: "/about" }),
};

export default function AboutPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "À propos", path: "/about" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <section className="relative overflow-hidden bg-white py-14 sm:py-20">
        <GlowBackground className="-z-10" />
        <Container className="max-w-3xl">
          <SectionHeading
            as="h1"
            eyebrow="À propos"
            align="left"
            title={`${siteConfig.siteName}, pensé pour la simplicité`}
          />
          <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted">
            <p>
              {siteConfig.siteName} est né d&apos;une idée simple : l&apos;accès
              IPTV doit être facile à configurer, simple à utiliser sur tous
              vos appareils, et soutenu par une équipe qui répond vraiment
              quand vous en avez besoin.
            </p>
            <p>
              Plutôt que de multiplier les fonctionnalités, nous nous
              concentrons sur ce qui compte au quotidien — une infrastructure
              fiable, des instructions de configuration claires, et un
              support qui prend votre temps au sérieux.
            </p>
            <p>
              Nous continuons d&apos;améliorer la plateforme à partir des
              retours réels de nos utilisateurs, avec une attention
              particulière portée à la transparence sur les tarifs, les
              capacités et le support.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16">
        <Container className="flex flex-col gap-10">
          <SectionHeading title="Ce qui nous guide" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {trustValues.map((item) => (
              <div key={item.title} className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue/10 text-blue">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
