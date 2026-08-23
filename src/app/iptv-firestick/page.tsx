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

const title = "IPTV Firestick — Installer l'IPTV sur Fire TV Stick";
const description =
  "Guide complet pour installer et configurer l'IPTV sur Amazon Fire TV Stick : prérequis, étapes d'installation et dépannage.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/iptv-firestick" },
  ...pageSocial({ title, description, path: "/iptv-firestick" }),
};

const steps = [
  {
    title: "Autorisez les applications de sources inconnues",
    text: "Sur votre Fire TV Stick, allez dans Paramètres > Ma Fire TV (ou Appareil) > Options pour développeurs, et activez « Applications de sources inconnues ». Cette étape est nécessaire car les applications de lecture IPTV ne passent pas toutes par l'Amazon Appstore.",
  },
  {
    title: "Installez l'application Downloader",
    text: "Depuis l'Amazon Appstore, recherchez et installez l'application gratuite « Downloader ». Elle permet de télécharger et d'installer un fichier d'application (APK) à partir d'une adresse web.",
  },
  {
    title: "Téléchargez une application de lecture IPTV compatible",
    text: "Ouvrez Downloader, entrez l'adresse de téléchargement de l'application IPTV que vous souhaitez utiliser, puis lancez le téléchargement et l'installation directement depuis l'interface.",
  },
  {
    title: "Ouvrez l'application et entrez vos identifiants",
    text: "Au premier lancement, choisissez la méthode de connexion (URL M3U ou Xtream Codes) et saisissez les informations transmises après votre abonnement à l'aide de la télécommande.",
  },
  {
    title: "Laissez l'application charger la liste des chaînes",
    text: "Le temps de synchronisation dépend de la taille de la liste et de la vitesse de votre connexion. Une fois terminé, les chaînes et contenus disponibles apparaissent dans l'application.",
  },
];

const troubleshoot = [
  {
    problem: "Downloader ne trouve pas l'adresse saisie",
    solution:
      "Vérifiez qu'il n'y a pas de faute de frappe dans l'URL. Les adresses longues sont plus faciles à saisir avec le clavier à l'écran en mode texte plutôt qu'en navigation lettre par lettre.",
  },
  {
    problem: "L'application plante ou se ferme toute seule",
    solution:
      "Les modèles de Firestick plus anciens (1ère et 2ème génération) ont peu de mémoire disponible. Désinstallez les applications inutilisées et videz le cache depuis Paramètres > Applications.",
  },
  {
    problem: "La télécommande répond avec du retard",
    solution:
      "Cela indique souvent que l'appareil est proche de sa limite de mémoire ou de stockage. Un redémarrage complet du Fire TV Stick résout généralement le problème.",
  },
  {
    problem: "L'image saccade ou met du temps à charger",
    solution:
      "Utilisez une connexion Wi-Fi 5 GHz si votre routeur le permet, ou un adaptateur Ethernet USB pour Fire TV Stick, disponible séparément, afin de stabiliser la connexion.",
  },
];

const faqItems = [
  {
    question: "Puis-je installer l'IPTV directement depuis l'Amazon Appstore ?",
    answer:
      "Certaines applications de lecture sont disponibles directement sur l'Amazon Appstore, mais beaucoup nécessitent une installation via Downloader, comme décrit dans ce guide.",
  },
  {
    question: "Le Fire TV Stick de première génération fonctionne-t-il ?",
    answer:
      "Il peut fonctionner, mais sa mémoire limitée peut entraîner des ralentissements. Les modèles plus récents (Fire TV Stick 4K ou plus) offrent une expérience plus fluide.",
  },
  {
    question: "Ai-je besoin d'un compte Amazon pour configurer mon Firestick ?",
    answer:
      "Oui, un compte Amazon est nécessaire pour configurer l'appareil initialement et accéder à l'Amazon Appstore, y compris pour installer Downloader.",
  },
  {
    question: "Comment savoir si mon Firestick est bien connecté à internet ?",
    answer:
      "Vous pouvez vérifier l'état de la connexion dans Paramètres > Réseau. Un signal Wi-Fi faible est une cause fréquente de mise en mémoire tampon (buffering).",
  },
];

export default function IptvFirestickPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "IPTV Firestick", path: "/iptv-firestick" }]);
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
              eyebrow="IPTV Firestick"
              title="IPTV sur Firestick : Guide d'Installation Complet"
              description="Comment installer une application IPTV sur Amazon Fire TV Stick via Downloader, configurer votre abonnement et résoudre les problèmes courants."
            />
            <p className="text-sm leading-relaxed text-muted">
              Ce guide couvre l&apos;installation par sideload, nécessaire car
              les applications de lecture IPTV ne sont pas toutes proposées
              directement sur l&apos;Amazon Appstore.
            </p>
            <Button href="/pricing" variant="primary">
              Voir les Offres IPTV
            </Button>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/device-firestick.jpg"
              alt="Clé Amazon Fire TV Stick connectée à un téléviseur pour l'IPTV"
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
            L&apos;IPTV fonctionne sur tous les modèles de{" "}
            <strong>Fire TV Stick</strong>, y compris le Fire TV Stick Lite,
            le Fire TV Stick 4K et le Fire TV Cube. Les modèles plus récents
            offrent davantage de mémoire et de puissance, ce qui se traduit
            par une navigation plus fluide et un chargement plus rapide des
            applications.
          </p>

          <h2 className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
            Ce qu&apos;il faut préparer
          </h2>
          <ul className="flex flex-col gap-2 text-base leading-relaxed text-muted">
            <li>• Un Fire TV Stick configuré avec un compte Amazon.</li>
            <li>• Une connexion internet stable (Wi-Fi ou adaptateur Ethernet).</li>
            <li>
              • Vos identifiants d&apos;abonnement (URL M3U ou Xtream Codes)
              reçus après votre achat.
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
            <li>• Libérez régulièrement de l&apos;espace de stockage sur les modèles plus anciens.</li>
            <li>• Redémarrez le Fire TV Stick après une longue période d&apos;utilisation.</li>
            <li>• Utilisez le Wi-Fi 5 GHz ou un adaptateur Ethernet pour plus de stabilité.</li>
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
        eyebrow="FAQ Firestick"
        title="Questions Fréquentes — IPTV Firestick"
        description="Les réponses aux questions les plus courantes sur l'installation IPTV sur Fire TV Stick."
      />

      <section className="bg-white py-12">
        <Container className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 text-sm">
          <span className="text-muted">Voir aussi :</span>
          <Link
            href="/blog/buffering-iptv-firestick"
            className="font-semibold text-blue underline underline-offset-2"
          >
            IPTV qui buffer sur Firestick : solutions
          </Link>
          <Link href="/iptv-smart-tv" className="font-semibold text-blue underline underline-offset-2">
            installer IPTV sur Smart TV
          </Link>
          <Link href="/iptv-android" className="font-semibold text-blue underline underline-offset-2">
            IPTV sur Android
          </Link>
          <Link
            href="/blog/ameliorer-la-fiabilite-du-streaming"
            className="font-semibold text-blue underline underline-offset-2"
          >
            améliorer la fiabilité de votre streaming
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
