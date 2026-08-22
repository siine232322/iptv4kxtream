import { ReactNode } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import GlowBackground from "./ui/GlowBackground";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20">
      <GlowBackground className="-z-10" />
      <Container className="max-w-3xl">
        <SectionHeading as="h1" title={title} align="left" />
        <p className="mt-4 text-sm text-muted">Dernière mise à jour : {updated}</p>
        <div className="mt-10 flex flex-col gap-6 text-sm leading-relaxed text-muted [&_h2]:mt-4 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-foreground [&_p]:text-muted">
          {children}
        </div>
      </Container>
    </section>
  );
}
