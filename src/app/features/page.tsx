import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Features from "@/components/Features";
import Infrastructure from "@/components/Infrastructure";
import Devices from "@/components/Devices";
import MoviesGallery from "@/components/MoviesGallery";
import CTA from "@/components/CTA";
import GlowBackground from "@/components/ui/GlowBackground";
import { pageSocial, breadcrumbJsonLd as buildBreadcrumb } from "@/lib/seo";

const title = "IPTV — Fonctionnalités";
const description =
  "Découvrez le streaming HD/4K, la compatibilité multi-appareils (Smart TV, Firestick, Android), le guide TV et l'infrastructure de notre service IPTV.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/features" },
  ...pageSocial({ title, description, path: "/features" }),
};

export default function FeaturesPage() {
  const breadcrumbJsonLd = buildBreadcrumb([{ name: "Fonctionnalités", path: "/features" }]);

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
            eyebrow="IPTV"
            title="Un service IPTV pensé pour vous"
            description="De la configuration à l'usage quotidien, chaque partie de l'expérience est pensée pour être claire et fiable."
          />
        </Container>
      </section>
      <Features />
      <Infrastructure />
      <Devices />
      <MoviesGallery />
      <CTA />
    </>
  );
}
