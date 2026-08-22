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

const title = "IPTV Android — Installer l'IPTV sur Android TV, Box et Mobile";
const description =
  "Comment installer l'IPTV sur Android TV, boîtier Android ou smartphone : compatibilité, configuration et résolution des problèmes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/iptv-android" },
  ...pageSocial({ title, description, path: "/iptv-android" }),
};

const steps = [
  {
    title: "Identifiez votre type d'appareil Android",
    text: "Android TV / Google TV (intégré à certaines TV ou box officielles) donne accès au Google Play Store directement. Un boîtier Android générique peut utiliser une version modifiée d'Android nécessitant l'installation manuelle d'un fichier APK. Un smartphone ou tablette Android utilise simplement le Play Store.",
  },
  {
    title: "Installez une application de lecture IPTV",
    text: "Sur Android TV ou mobile, recherchez une application compatible directement sur le Google Play Store. Sur un boîtier générique sans Play Store fiable, téléchargez le fichier APK depuis une source fiable et autorisez son installation dans Paramètres > Sécurité > Sources inconnues.",
  },
  {
    title: "Ouvrez l'application et sélectionnez la méthode de connexion",
    text: "Choisissez entre une URL de playlist M3U ou une connexion par identifiants Xtream Codes (serveur, nom d'utilisateur, mot de passe), selon ce qui vous a été communiqué.",
  },
  {
    title: "Entrez vos identifiants d'abonnement",
    text: "Saisissez les informations reçues après votre achat. Sur mobile, l'application peut aussi proposer de scanner un code ou de coller un lien directement.",
  },
  {
    title: "Patientez pendant le chargement des chaînes",
    text: "La liste de contenus et, si disponible, le guide des programmes se synchronisent automatiquement. La durée dépend de la taille de la liste et de votre connexion.",
  },
  {
    title: "Ajustez les réglages de lecture si nécessaire",
    text: "Certaines applications permettent de choisir un lecteur vidéo par défaut ou d'ajuster la mémoire tampon (buffer) pour une lecture plus stable, particulièrement utile sur les boîtiers d'entrée de gamme.",
  },
];

const troubleshoot = [
  {
    problem: "Mon Android affiche un avertissement Play Protect à l'installation",
    solution:
      "C'est normal pour des applications qui ne viennent pas du Play Store. Vérifiez que la source du fichier APK est fiable avant de poursuivre l'installation.",
  },
  {
    problem: "La vidéo saccade sur un boîtier Android d'entrée de gamme",
    solution:
      "Les boîtiers économiques ont parfois un processeur ou une mémoire limités. Fermez les applications inutilisées en arrière-plan et réduisez la qualité de lecture si l'option est disponible.",
  },
  {
    problem: "L'application installée manuellement disparaît après un redémarrage",
    solution:
      "Certains boîtiers Android à mémoire limitée ferment ou suppriment des applications pour libérer de l'espace. Vérifiez les paramètres de gestion de la mémoire ou réinstallez l'application.",
  },
  {
    problem: "Pas de son ou image déformée",
    solution:
      "Vérifiez les paramètres de sortie audio/vidéo de l'appareil (résolution, format HDMI) et essayez un lecteur vidéo alternatif si votre application le permet.",
  },
];

const faqItems = [
  {
    question: "Quelle est la différence entre Android TV et un boîtier Android générique ?",
    answer:
      "Android TV est une version officielle d'Android certifiée par Google, avec accès au Play Store. Un boîtier Android générique utilise souvent une version modifiée du système, ce qui peut nécessiter l'installation manuelle d'applications.",
  },
  {
    question: "Puis-je utiliser l'IPTV sur mon téléphone Android ?",
    answer:
      "Oui, une application de lecture IPTV compatible s'installe et se configure de la même façon sur smartphone et tablette Android que sur Android TV.",
  },
  {
    question: "Faut-il un boîtier Android puissant pour l'IPTV ?",
    answer:
      "Un appareil avec des performances modestes suffit pour un usage courant, mais un processeur et une mémoire plus performants offrent une navigation plus fluide, surtout en 4K.",
  },
  {
    question: "Comment mettre à jour l'application IPTV sur Android ?",
    answer:
      "Depuis le Play Store, les mises à jour se font automatiquement ou manuellement selon vos réglages. Pour une application installée via APK, il faut généralement retélécharger la dernière version depuis la même source.",
  },
];

export default function IptvAndroidPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "IPTV Android", path: "/iptv-android" }]);
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
              eyebrow="IPTV Android"
              title="IPTV sur Android : Smartphone, Box et Android TV"
              description="Comment installer et configurer l'IPTV sur Android TV, un boîtier Android ou un téléphone, et résoudre les problèmes les plus courants."
            />
            <p className="text-sm leading-relaxed text-muted">
              L&apos;écosystème Android est le plus flexible : Play Store sur
              les appareils certifiés, ou installation manuelle sur les
              boîtiers génériques. Ce guide couvre les deux méthodes.
            </p>
            <Button href="/pricing" variant="primary">
              Voir les Offres IPTV
            </Button>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/device-android-tv.jpg"
              alt="Interface IPTV affichée sur un boîtier Android TV"
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
            L&apos;IPTV est compatible avec les téléviseurs et box sous{" "}
            <strong>Android TV</strong> ou <strong>Google TV</strong>, les{" "}
            <strong>boîtiers Android génériques</strong>, ainsi que les{" "}
            <strong>smartphones et tablettes Android</strong>. La méthode
            d&apos;installation varie selon que votre appareil dispose ou non
            du Google Play Store.
          </p>

          <h2 className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
            Ce qu&apos;il faut préparer
          </h2>
          <ul className="flex flex-col gap-2 text-base leading-relaxed text-muted">
            <li>• Un appareil Android connecté à internet.</li>
            <li>
              • Vos identifiants d&apos;abonnement (URL M3U ou Xtream Codes)
              reçus après votre achat.
            </li>
            <li>
              • Sur un boîtier générique : l&apos;autorisation
              d&apos;installer des applications hors Play Store.
            </li>
          </ul>

          <h2 className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
            Installation étape par étape
          </h2>
          <StepList steps={steps} />

          <h2 className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
            Conseils pour une meilleure expérience
          </h2>
          <ul className="flex flex-col gap-2 text-base leading-relaxed text-muted">
            <li>• Fermez les applications inutilisées pour libérer de la mémoire.</li>
            <li>• Utilisez un adaptateur Ethernet USB sur les boîtiers pour plus de stabilité.</li>
            <li>• Gardez votre application à jour dès qu&apos;une nouvelle version est disponible.</li>
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
        eyebrow="FAQ Android"
        title="Questions Fréquentes — IPTV Android"
        description="Les réponses aux questions les plus courantes sur l'installation IPTV sur Android."
      />

      <section className="bg-white py-12">
        <Container className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 text-sm">
          <span className="text-muted">Voir aussi :</span>
          <Link href="/iptv-firestick" className="font-semibold text-blue underline underline-offset-2">
            installer IPTV sur Firestick
          </Link>
          <Link href="/iptv-smart-tv" className="font-semibold text-blue underline underline-offset-2">
            IPTV sur Smart TV
          </Link>
          <Link
            href="/blog/bien-choisir-sa-configuration-streaming"
            className="font-semibold text-blue underline underline-offset-2"
          >
            bien choisir sa configuration de streaming
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
