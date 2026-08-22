import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowBackground from "@/components/ui/GlowBackground";
import Button from "@/components/ui/Button";
import StepList from "@/components/ui/StepList";
import TroubleshootList from "@/components/ui/TroubleshootList";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { pageSocial, breadcrumbJsonLd } from "@/lib/seo";

const title = "IPTV Smart TV — Installation sur Samsung, LG et Android TV";
const description =
  "Comment installer et configurer l'IPTV sur votre Smart TV (Samsung, LG, Android TV) : compatibilité, étapes d'installation et solutions aux problèmes courants.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/iptv-smart-tv" },
  ...pageSocial({ title, description, path: "/iptv-smart-tv" }),
};

const steps = [
  {
    title: "Vérifiez la compatibilité de votre TV",
    text: "La plupart des Smart TV récentes (Samsung avec Tizen, LG avec webOS, ou les téléviseurs sous Android TV / Google TV) peuvent installer une application de lecture IPTV. Les modèles plus anciens peuvent avoir un choix d'applications plus limité selon leur boutique intégrée.",
  },
  {
    title: "Connectez votre TV à internet",
    text: "Une connexion filaire (Ethernet) est recommandée pour une lecture stable, surtout en HD/4K. Le Wi-Fi fonctionne aussi, idéalement en 5 GHz et à proximité du routeur.",
  },
  {
    title: "Installez une application de lecture IPTV",
    text: "Depuis le magasin d'applications de votre TV (Samsung Apps, LG Content Store, ou Google Play sur Android TV), recherchez et installez une application compatible avec les flux IPTV (connexion par identifiants Xtream Codes ou par URL M3U).",
  },
  {
    title: "Ouvrez l'application et choisissez la méthode de connexion",
    text: "Au premier lancement, l'application demande généralement soit une URL de playlist M3U, soit les identifiants Xtream Codes (adresse du serveur, nom d'utilisateur, mot de passe).",
  },
  {
    title: "Entrez les informations transmises à l'activation",
    text: "Saisissez les identifiants reçus par email après votre abonnement. Utilisez la télécommande ou l'application mobile de votre TV pour taper plus rapidement si la saisie au clavier virtuel est lente.",
  },
  {
    title: "Patientez pendant la synchronisation des chaînes",
    text: "L'application télécharge la liste des chaînes et, si disponible, le guide des programmes (EPG). Ce chargement peut prendre de quelques secondes à quelques minutes selon la taille de la liste.",
  },
];

const troubleshoot = [
  {
    problem: "L'application n'est pas disponible sur le magasin de ma TV",
    solution:
      "La disponibilité varie selon le fabricant et le pays. Sur les modèles plus anciens qui ne proposent pas d'application adaptée, une clé Fire TV Stick ou un boîtier Android peut être une alternative pratique.",
  },
  {
    problem: "Les chaînes ne se chargent pas",
    solution:
      "Vérifiez d'abord votre connexion internet, puis que les identifiants saisis sont corrects et toujours actifs. Redémarrer l'application ou la TV résout souvent un blocage temporaire.",
  },
  {
    problem: "L'image se fige ou le flux met du temps à charger (buffering)",
    solution:
      "Cela vient généralement de la connexion réseau. Rapprochez la TV du routeur, passez en Ethernet si possible, ou libérez de la bande passante en réduisant l'usage d'autres appareils en simultané.",
  },
  {
    problem: "L'application se ferme ou plante après une mise à jour",
    solution:
      "Videz le cache de l'application depuis les paramètres de la TV, ou désinstallez puis réinstallez-la depuis le magasin d'applications.",
  },
];

const faqItems = [
  {
    question: "Qu'est-ce qu'un abonnement IPTV Smart TV ?",
    answer:
      "C'est un accès à des contenus en streaming diffusés via internet, consultés directement depuis une application installée sur votre téléviseur connecté, sans box satellite ni câble traditionnel.",
  },
  {
    question: "L'IPTV fonctionne-t-il sur toutes les TV Samsung et LG ?",
    answer:
      "Sur la majorité des modèles récents équipés de Tizen (Samsung) ou webOS (LG), oui. Sur les modèles plus anciens, la disponibilité d'applications compatibles dans le magasin intégré peut être limitée.",
  },
  {
    question: "Ai-je besoin d'un boîtier supplémentaire ?",
    answer:
      "Non, si votre Smart TV peut installer une application de lecture IPTV compatible. Un boîtier externe (Fire TV Stick, Android TV Box) devient utile si votre TV ne le permet pas ou si son application est obsolète.",
  },
  {
    question: "Pourquoi l'image est-elle parfois en moins bonne qualité ?",
    answer:
      "La qualité de lecture s'adapte à votre connexion internet et aux performances de votre TV. Une connexion plus stable et rapide permet généralement une meilleure qualité disponible.",
  },
];

export default function IptvSmartTvPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "IPTV Smart TV", path: "/iptv-smart-tv" }]);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative overflow-hidden bg-white py-14 sm:py-20">
        <GlowBackground className="-z-10" />
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-5">
            <SectionHeading
              as="h1"
              align="left"
              eyebrow="IPTV Smart TV"
              title="IPTV sur Smart TV : Installation et Configuration"
              description="Comment installer une application IPTV sur Samsung, LG ou Android TV, configurer votre abonnement, et résoudre les problèmes les plus courants."
            />
            <p className="text-sm leading-relaxed text-muted">
              Ce guide s&apos;applique à la plupart des Smart TV récentes. Les
              étapes précises (noms de menus, emplacement du magasin
              d&apos;applications) peuvent varier légèrement selon la marque,
              le modèle et la version logicielle de votre téléviseur.
            </p>
            <Button href="/pricing" variant="primary">
              Voir les Offres IPTV
            </Button>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/device-smart-tv.jpg"
              alt="Smart TV affichant une interface IPTV avec une liste de contenus"
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              priority
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-14 sm:py-20">
        <Container className="mx-auto flex max-w-3xl flex-col gap-6">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">Compatibilité</h2>
          <p className="text-base leading-relaxed text-muted">
            L&apos;IPTV fonctionne sur une Smart TV dès lors que celle-ci peut
            installer une application capable de lire un flux M3U ou de se
            connecter via des identifiants Xtream Codes. C&apos;est le cas de
            la grande majorité des <strong>TV Samsung récentes (Tizen)</strong>,{" "}
            <strong>TV LG (webOS)</strong>, et des téléviseurs fonctionnant
            sous <strong>Android TV ou Google TV</strong>. Sur des modèles
            plus anciens ou des Smart TV d&apos;entrée de gamme, le magasin
            d&apos;applications intégré peut proposer moins de choix : dans ce
            cas, une clé ou un boîtier externe reste une solution simple.
          </p>

          <h2 className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
            Ce qu&apos;il faut préparer
          </h2>
          <ul className="flex flex-col gap-2 text-base leading-relaxed text-muted">
            <li>• Une Smart TV connectée à internet (Wi-Fi ou Ethernet).</li>
            <li>
              • Vos identifiants d&apos;abonnement (URL M3U, ou serveur /
              utilisateur / mot de passe Xtream Codes), reçus après votre
              achat.
            </li>
            <li>• Un accès au magasin d&apos;applications de votre TV.</li>
          </ul>

          <h2 className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
            Installation étape par étape
          </h2>
          <StepList steps={steps} />

          <h2 className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
            Conseils pour une meilleure expérience
          </h2>
          <ul className="flex flex-col gap-2 text-base leading-relaxed text-muted">
            <li>• Privilégiez une connexion Ethernet pour la stabilité, surtout en 4K.</li>
            <li>• Gardez l&apos;application à jour depuis le magasin de votre TV.</li>
            <li>
              • Redémarrez périodiquement votre TV et votre routeur pour
              éviter les ralentissements accumulés.
            </li>
          </ul>

          <h2 className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
            Problèmes fréquents
          </h2>
          <TroubleshootList items={troubleshoot} />
        </Container>
      </section>

      <FAQ
        compact
        items={faqItems}
        eyebrow="FAQ Smart TV"
        title="Questions Fréquentes — IPTV Smart TV"
        description="Les réponses aux questions les plus courantes sur l'installation IPTV sur Smart TV."
      />

      <section className="bg-white py-12">
        <Container className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 text-sm">
          <span className="text-muted">Voir aussi :</span>
          <Link href="/features" className="font-semibold text-blue underline underline-offset-2">
            fonctionnalités de notre service IPTV
          </Link>
          <Link href="/iptv-firestick" className="font-semibold text-blue underline underline-offset-2">
            installer IPTV sur Firestick
          </Link>
          <Link
            href="/blog/smart-tv-ou-boitier-streaming"
            className="font-semibold text-blue underline underline-offset-2"
          >
            Smart TV ou boîtier de streaming ?
          </Link>
          <Link href="/faq" className="font-semibold text-blue underline underline-offset-2">
            FAQ générale
          </Link>
          <Link href="/support" className="font-semibold text-blue underline underline-offset-2">
            contacter le support
          </Link>
        </Container>
      </section>

      <CTA />
    </>
  );
}
