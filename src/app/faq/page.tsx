import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import GlowBackground from "@/components/ui/GlowBackground";
import { faqs } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { pageSocial } from "@/lib/seo";

const title = "FAQ — Questions Fréquentes";
const description =
  "Réponses aux questions les plus courantes sur l'IPTV, la configuration, la compatibilité des appareils et le support.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  ...pageSocial({ title, description, path: "/faq" }),
};

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteConfig.siteUrl}/faq` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="relative overflow-hidden bg-white py-14 sm:py-20">
        <GlowBackground className="-z-10" />
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Support"
            title="Questions Fréquentes"
            description="Vous ne trouvez pas votre réponse ? Contactez-nous directement."
          />
        </Container>
      </section>
      <FAQ withContact />
      <CTA />
    </>
  );
}
