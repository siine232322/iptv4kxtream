import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { siteConfig } from "@/lib/site";
import { pageSocial, breadcrumbJsonLd } from "@/lib/seo";

const title = "Conditions Générales";
const description = `Les conditions qui régissent l'utilisation de ${siteConfig.siteName}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  ...pageSocial({ title, description, path: "/terms" }),
};

export default function TermsPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Conditions Générales", path: "/terms" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <LegalLayout title="Conditions Générales" updated="21 août 2026">
      <h2>Acceptation des Conditions</h2>
      <p>
        En accédant à {siteConfig.siteName} ou en l&apos;utilisant, vous
        acceptez ces conditions générales. Ce document est un modèle et
        devrait être revu par un professionnel du droit avant sa mise en
        production.
      </p>

      <h2>Utilisation du Service</h2>
      <p>
        Vous vous engagez à utiliser le service uniquement à des fins légales
        et conformément à la réglementation locale applicable en matière de
        streaming et d&apos;abonnements.
      </p>

      <h2>Abonnements et Facturation</h2>
      <p>
        Les offres sont facturées pour la durée choisie au moment du paiement
        (1, 3, 6 ou 12 mois). Les tarifs peuvent évoluer ; toute modification
        n&apos;affecte pas une période déjà payée.
      </p>

      <h2>Responsabilité du Compte</h2>
      <p>
        Vous êtes responsable de la confidentialité de vos identifiants et de
        toute activité effectuée depuis votre compte.
      </p>

      <h2>Disponibilité du Service</h2>
      <p>
        Nous nous efforçons de maintenir un service fiable, sans toutefois
        garantir une disponibilité ininterrompue. Une maintenance ou des
        facteurs externes peuvent occasionnellement affecter l&apos;accès.
      </p>

      <h2>Résiliation</h2>
      <p>
        Nous pouvons suspendre ou résilier l&apos;accès en cas de violation de
        ces conditions. Vous pouvez annuler votre abonnement à tout moment
        conformément à notre{" "}
        <a href="/refund" className="text-blue underline">
          Politique de Remboursement
        </a>
        .
      </p>

      <h2>Contact</h2>
      <p>Pour toute question, écrivez à {siteConfig.email}.</p>
      </LegalLayout>
    </>
  );
}
