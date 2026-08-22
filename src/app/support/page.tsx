import type { Metadata } from "next";
import Link from "next/link";
import { LifeBuoy, Mail, HelpCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowBackground from "@/components/ui/GlowBackground";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { pageSocial, breadcrumbJsonLd } from "@/lib/seo";

const title = "Support";
const description = "Obtenez de l'aide pour la configuration, la facturation ou la compatibilité des appareils.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/support" },
  ...pageSocial({ title, description, path: "/support" }),
};

const options = [
  {
    icon: HelpCircle,
    title: "Consulter la FAQ",
    text: "Trouvez rapidement des réponses aux questions les plus courantes.",
    href: "/faq",
    cta: "Voir la FAQ",
  },
  {
    icon: Mail,
    title: "Contacter le Support",
    text: "Envoyez-nous un message, notre équipe vous répondra rapidement.",
    href: "/contact",
    cta: "Nous Contacter",
  },
  {
    icon: LifeBuoy,
    title: "Guides de Configuration",
    text: "Consultez nos guides pratiques sur les appareils et la configuration.",
    href: "/blog",
    cta: "Lire les Guides",
  },
];

export default function SupportPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Support", path: "/support" }]);

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
          eyebrow="Support"
          title="Comment pouvons-nous vous aider ?"
          description={`Contactez notre équipe directement, ou trouvez une réponse rapide ci-dessous. Nous sommes disponibles à ${siteConfig.email}.`}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {options.map((opt) => (
            <div
              key={opt.title}
              className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-white p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue">
                <opt.icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold text-foreground">{opt.title}</h3>
              <p className="flex-1 text-sm text-muted">{opt.text}</p>
              <Button href={opt.href} variant="secondary" className="w-full">
                {opt.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted">
          Vous préférez l&apos;email ? Écrivez-nous directement à{" "}
          <Link href={`mailto:${siteConfig.email}`} className="font-semibold text-blue underline">
            {siteConfig.email}
          </Link>
        </p>
      </Container>
    </section>
  );
}
