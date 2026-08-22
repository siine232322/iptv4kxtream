import type { Metadata } from "next";
import { SearchX } from "lucide-react";
import Container from "@/components/ui/Container";
import GlowBackground from "@/components/ui/GlowBackground";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "Cette page n'existe pas ou a été déplacée.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <GlowBackground className="-z-10" />
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue/10 text-blue">
          <SearchX className="h-8 w-8" strokeWidth={1.75} />
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Page introuvable
        </h1>
        <p className="max-w-md text-base text-muted">
          Cette page n&apos;existe pas ou a été déplacée. Retrouvez notre
          service IPTV, nos offres ou notre FAQ ci-dessous.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="primary">
            Retour à l&apos;accueil
          </Button>
          <Button href="/pricing" variant="secondary">
            Voir les Offres
          </Button>
          <Button href="/faq" variant="secondary">
            Consulter la FAQ
          </Button>
        </div>
      </Container>
    </section>
  );
}
