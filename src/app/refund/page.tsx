import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { siteConfig } from "@/lib/site";
import { pageSocial, breadcrumbJsonLd } from "@/lib/seo";

const title = "Politique de Remboursement";
const description = `Détails sur les annulations et l'éligibilité au remboursement pour les offres ${siteConfig.siteName}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/refund" },
  ...pageSocial({ title, description, path: "/refund" }),
};

export default function RefundPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Politique de Remboursement", path: "/refund" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <LegalLayout title="Politique de Remboursement" updated="21 août 2026">
      <h2>Aperçu</h2>
      <p>
        Cette politique décrit comment les annulations et demandes de
        remboursement sont traitées pour les offres {siteConfig.siteName}. Ce
        document est un modèle et devrait être finalisé avant sa mise en
        production.
      </p>

      <h2>Demander un Remboursement</h2>
      <p>
        En cas de problème avec votre abonnement, contactez notre équipe
        support à {siteConfig.email} dès que possible afin que nous puissions
        vous aider.
      </p>

      <h2>Éligibilité</h2>
      <p>
        L&apos;éligibilité dépend de facteurs tels que le délai depuis
        l&apos;achat et l&apos;utilisation effective du service. Les
        conditions précises doivent être définies ici avant le lancement.
      </p>

      <h2>Délai de Traitement</h2>
      <p>
        Les remboursements approuvés sont généralement traités sur le moyen
        de paiement d&apos;origine dans un délai raisonnable après
        approbation.
      </p>

      <h2>Contact</h2>
      <p>Pour toute question de facturation, contactez {siteConfig.email}.</p>
      </LegalLayout>
    </>
  );
}
