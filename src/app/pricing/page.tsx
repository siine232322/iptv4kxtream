import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import GlowBackground from "@/components/ui/GlowBackground";
import { pageSocial, breadcrumbJsonLd as buildBreadcrumb } from "@/lib/seo";

const title = "Abonnement IPTV — Tarifs";
const description =
  "Comparez nos offres IPTV 1, 3, 6 et 12 mois. Tarifs simples et transparents, accès multi-appareils inclus.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  ...pageSocial({ title, description, path: "/pricing" }),
};

export default function PricingPage() {
  const breadcrumbJsonLd = buildBreadcrumb([{ name: "Abonnement IPTV", path: "/pricing" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="relative overflow-hidden bg-white py-14 sm:py-20">
        <GlowBackground className="-z-10" />
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Abonnement IPTV"
            title="Des offres pensées pour votre façon de regarder"
            description="Chaque offre inclut l'accès multi-appareils, les mises à jour régulières et le support."
          />
        </Container>
      </section>
      <Pricing compact />
      <CTA />
    </>
  );
}
