import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { siteConfig } from "@/lib/site";
import { pageSocial, breadcrumbJsonLd } from "@/lib/seo";

const title = "Politique de Confidentialité";
const description = `Comment ${siteConfig.siteName} collecte, utilise et protège vos informations.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  ...pageSocial({ title, description, path: "/privacy" }),
};

export default function PrivacyPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Politique de Confidentialité", path: "/privacy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <LegalLayout title="Politique de Confidentialité" updated="21 août 2026">
      <h2>Aperçu</h2>
      <p>
        Cette politique de confidentialité explique comment {siteConfig.siteName}{" "}
        (« nous ») collecte, utilise et protège les informations lorsque vous
        utilisez notre site et nos services. Ce document est un modèle et
        devrait être revu par un professionnel du droit avant sa mise en
        production.
      </p>

      <h2>Informations Collectées</h2>
      <p>
        Nous pouvons collecter les informations que vous fournissez
        directement, comme votre nom, votre adresse email et vos informations
        de paiement lorsque vous nous contactez ou souscrivez à une offre.
        Nous pouvons également collecter des informations techniques de base,
        comme le type de navigateur, pour améliorer le site.
      </p>

      <h2>Utilisation des Informations</h2>
      <p>
        Les informations sont utilisées pour fournir et améliorer nos
        services, répondre aux demandes de support, traiter les paiements et
        communiquer des informations importantes sur votre compte.
      </p>

      <h2>Partage des Données</h2>
      <p>
        Nous ne vendons pas d&apos;informations personnelles. Nous pouvons les
        partager avec des prestataires qui nous aident à exploiter la
        plateforme, comme les processeurs de paiement, dans le respect
        d&apos;obligations de confidentialité appropriées.
      </p>

      <h2>Conservation des Données</h2>
      <p>
        Nous conservons les informations aussi longtemps que nécessaire pour
        fournir nos services et respecter nos obligations légales.
      </p>

      <h2>Vos Droits</h2>
      <p>
        Selon votre localisation, vous pouvez disposer de droits d&apos;accès,
        de rectification ou de suppression de vos données personnelles.
        Contactez-nous à {siteConfig.email} pour toute demande.
      </p>

      <h2>Contact</h2>
      <p>Pour toute question sur cette politique, écrivez à {siteConfig.email}.</p>
      </LegalLayout>
    </>
  );
}
