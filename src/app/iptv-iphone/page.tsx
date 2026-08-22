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

const title = "IPTV iPhone — Installer l'IPTV sur iOS et iPad";
const description =
  "Guide pour installer et configurer l'IPTV sur iPhone et iPad : compatibilité iOS, étapes d'installation et diffusion vers votre TV avec AirPlay.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/iptv-iphone" },
  ...pageSocial({ title, description, path: "/iptv-iphone" }),
};

const steps = [
  {
    title: "Ouvrez l'App Store",
    text: "Sur votre iPhone ou iPad, ouvrez l'App Store et recherchez une application de lecture compatible avec les flux IPTV (connexion par URL M3U ou identifiants Xtream Codes).",
  },
  {
    title: "Installez l'application",
    text: "Téléchargez et installez l'application. Au premier lancement, iOS peut demander l'autorisation d'accéder au réseau local : acceptez-la pour permettre la lecture des flux.",
  },
  {
    title: "Choisissez votre méthode de connexion",
    text: "Sélectionnez soit une playlist M3U (via une URL), soit une connexion Xtream Codes (adresse du serveur, nom d'utilisateur, mot de passe).",
  },
  {
    title: "Entrez vos identifiants d'abonnement",
    text: "Saisissez les informations reçues après votre achat. Le clavier tactile d'iOS facilite la copie-collage si vous avez reçu vos identifiants par email sur le même appareil.",
  },
  {
    title: "Laissez l'application charger les contenus",
    text: "La liste des chaînes et le guide des programmes, si disponible, se synchronisent automatiquement selon la taille de la liste et votre connexion.",
  },
  {
    title: "Diffusez vers votre TV avec AirPlay (optionnel)",
    text: "Si votre téléviseur ou boîtier est compatible AirPlay, utilisez le bouton de diffusion dans l'application ou le Centre de contrôle iOS pour envoyer la lecture sur grand écran.",
  },
];

const troubleshoot = [
  {
    problem: "L'application demandée n'est plus disponible sur l'App Store",
    solution:
      "La disponibilité des applications tierces peut évoluer selon les politiques de l'App Store. Il est utile de connaître une deuxième application compatible en solution de secours.",
  },
  {
    problem: "La lecture saccade en 4G/5G",
    solution:
      "Le streaming consomme davantage de données en cellulaire, où la connexion est aussi plus variable. Privilégiez le Wi-Fi lorsque c'est possible, surtout en qualité HD ou 4K.",
  },
  {
    problem: "AirPlay ne trouve pas ma TV",
    solution:
      "Vérifiez que l'iPhone ou l'iPad et le téléviseur (ou boîtier compatible AirPlay) sont connectés au même réseau Wi-Fi.",
  },
  {
    problem: "L'application consomme beaucoup de batterie",
    solution:
      "La lecture vidéo prolongée sollicite fortement l'écran et le processeur. Réduisez la luminosité de l'écran ou branchez l'appareil pendant un visionnage long.",
  },
];

const faqItems = [
  {
    question: "L'IPTV fonctionne-t-il sur iPhone et iPad ?",
    answer:
      "Oui, via une application de lecture compatible disponible sur l'App Store, configurée avec vos identifiants d'abonnement (URL M3U ou Xtream Codes).",
  },
  {
    question: "Puis-je regarder sur ma TV depuis mon iPhone ?",
    answer:
      "Oui, en utilisant AirPlay si votre téléviseur ou boîtier le prend en charge, ou en connectant votre appareil iOS à la TV avec un adaptateur compatible.",
  },
  {
    question: "L'IPTV fonctionne-t-il sans Wi-Fi ?",
    answer:
      "Oui, via une connexion cellulaire (4G/5G), mais la consommation de données est plus élevée et la qualité peut varier davantage qu'avec une connexion Wi-Fi stable.",
  },
  {
    question: "Une seule application suffit-elle pour iPhone et iPad ?",
    answer:
      "La plupart des applications de lecture compatibles fonctionnent sur les deux appareils avec les mêmes identifiants, puisqu'iOS et iPadOS partagent le même écosystème d'applications.",
  },
];

export default function IptvIphonePage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "IPTV iPhone", path: "/iptv-iphone" }]);
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
              eyebrow="IPTV iPhone"
              title="IPTV sur iPhone et iPad : Guide d'Installation"
              description="Comment installer et configurer l'IPTV sur iOS, diffuser vers votre TV avec AirPlay, et résoudre les problèmes courants."
            />
            <p className="text-sm leading-relaxed text-muted">
              Les étapes ci-dessous s&apos;appliquent aussi bien à
              l&apos;iPhone qu&apos;à l&apos;iPad, puisqu&apos;ils partagent
              le même App Store et le même écosystème d&apos;applications.
            </p>
            <Button href="/pricing" variant="primary">
              Voir les Offres IPTV
            </Button>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/device-smartphone.jpg"
              alt="Interface IPTV affichée sur un iPhone"
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
            L&apos;IPTV est compatible avec les <strong>iPhone</strong> et{" "}
            <strong>iPad</strong> exécutant une version récente d&apos;
            <strong>iOS ou iPadOS</strong>, via une application de lecture
            disponible sur l&apos;App Store. La disponibilité de certaines
            applications tierces peut varier selon les politiques de l&apos;App
            Store et évoluer avec le temps.
          </p>

          <h2 className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
            Ce qu&apos;il faut préparer
          </h2>
          <ul className="flex flex-col gap-2 text-base leading-relaxed text-muted">
            <li>• Un iPhone ou iPad connecté à internet (Wi-Fi ou cellulaire).</li>
            <li>
              • Vos identifiants d&apos;abonnement (URL M3U ou Xtream Codes)
              reçus après votre achat.
            </li>
            <li>• Un identifiant Apple pour accéder à l&apos;App Store.</li>
          </ul>

          <h2 className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
            Installation étape par étape
          </h2>
          <StepList steps={steps} />

          <h2 className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
            Conseils pour une meilleure expérience
          </h2>
          <ul className="flex flex-col gap-2 text-base leading-relaxed text-muted">
            <li>• Préférez le Wi-Fi au réseau cellulaire pour économiser vos données.</li>
            <li>• Gardez l&apos;application à jour via l&apos;App Store.</li>
            <li>• Fermez les autres applications en arrière-plan pour une lecture plus fluide.</li>
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
        eyebrow="FAQ iPhone"
        title="Questions Fréquentes — IPTV iPhone"
        description="Les réponses aux questions les plus courantes sur l'installation IPTV sur iOS."
      />

      <section className="bg-white py-12">
        <Container className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 text-sm">
          <span className="text-muted">Voir aussi :</span>
          <Link href="/iptv-smart-tv" className="font-semibold text-blue underline underline-offset-2">
            IPTV sur Smart TV
          </Link>
          <Link
            href="/blog/ameliorer-la-fiabilite-du-streaming"
            className="font-semibold text-blue underline underline-offset-2"
          >
            améliorer la fiabilité de votre streaming
          </Link>
          <Link href="/features" className="font-semibold text-blue underline underline-offset-2">
            fonctionnalités de notre service IPTV
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
