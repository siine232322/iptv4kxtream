import type { Metadata } from "next";
import Hero from "@/components/Hero";
import BenefitsBar from "@/components/BenefitsBar";
import StatsBar from "@/components/StatsBar";
import TrustStrip from "@/components/TrustStrip";
import IntroSection from "@/components/IntroSection";
import Benefits from "@/components/Benefits";
import EntertainmentGallery from "@/components/EntertainmentGallery";
import Features from "@/components/Features";
import Infrastructure from "@/components/Infrastructure";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import MoviesGallery from "@/components/MoviesGallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { faqs } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { pageSocial } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${siteConfig.siteName} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  ...pageSocial({
    title: siteConfig.tagline,
    description: siteConfig.description,
    path: "/",
  }),
};

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <BenefitsBar />
      <StatsBar />
      <TrustStrip />
      <IntroSection />
      <Benefits />
      <EntertainmentGallery />
      <Features />
      <Infrastructure />
      <Pricing compact title="Choisissez l'offre qui vous convient" />
      <HowItWorks />
      <MoviesGallery />
      <Testimonials />
      <FAQ compact withContact />
      <CTA />
    </>
  );
}
