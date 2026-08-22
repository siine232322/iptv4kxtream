import type { Metadata } from "next";
import { Mail, MessageCircle, Clock, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowBackground from "@/components/ui/GlowBackground";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";
import { pageSocial, breadcrumbJsonLd } from "@/lib/seo";

const title = "Contact";
const description = "Contactez notre équipe support pour toute question sur la configuration, la facturation ou la compatibilité.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  ...pageSocial({ title, description, path: "/contact" }),
};

export default function ContactPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Contact", path: "/contact" }]);

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <GlowBackground className="-z-10" />
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Besoin d'aide ?"
          description="Une question sur la configuration, la facturation ou la compatibilité ? Envoyez-nous un message, nous répondons rapidement."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_10px_40px_-20px_rgba(16,35,63,0.25)] sm:p-8">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <InfoCard
              icon={Mail}
              title="Email"
              text={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <InfoCard
              icon={Phone}
              title="Téléphone"
              text="+44 7446 198654"
              href="tel:+447446198654"
            />
            <InfoCard
              icon={MessageCircle}
              title="Espace Client"
              text="Gérez votre abonnement et vos informations de configuration."
              href="/contact"
            />
            <InfoCard
              icon={Clock}
              title="Délai de réponse"
              text="Nous visons à répondre à toutes les demandes rapidement pendant les heures d'ouverture."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
  href,
}: {
  icon: typeof Mail;
  title: string;
  text: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 transition-colors hover:border-blue/40">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="text-sm font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted">{text}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
