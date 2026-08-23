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

const title = "IPTV Apple TV — Installation et Configuration";
const description =
  "Guide pour installer et configurer l'IPTV sur Apple TV : compatibilité tvOS, étapes d'installation via l'App Store et problèmes courants.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/iptv-apple-tv" },
  ...pageSocial({ title, description, path: "/iptv-apple-tv" }),
};

const steps = [
  {
    title: "Ouvrez l'App Store sur votre Apple TV",
    text: "Depuis l'écran d'accueil de votre Apple TV, ouvrez l'application App Store et recherchez une application de lecture compatible avec les flux IPTV (connexion par URL M3U ou identifiants Xtream Codes).",
  },
  {
    title: "Installez l'application",
    text: "Sélectionnez l'application avec la télécommande Siri Remote et lancez l'installation. Le téléchargement se fait directement sur le boîtier, sans passer par un autre appareil.",
  },
  {
    title: "Choisissez votre méthode de connexion",
    text: "Au premier lancement, sélectionnez soit une playlist M3U (via une URL), soit une connexion Xtream Codes (adresse du serveur, nom d'utilisateur, mot de passe).",
  },
  {
    title: "Entrez vos identifiants d'abonnement",
    text: "Saisissez les informations reçues après votre achat à l'aide du clavier à l'écran. Si la saisie au clavier virtuel est fastidieuse, l'application Télécommande de l'iPhone permet souvent de taper plus rapidement.",
  },
  {
    title: "Laissez l'application charger les contenus",
    text: "La liste des chaînes et le guide des programmes, si disponible, se synchronisent automatiquement. Le temps de chargement dépend de la taille de la liste et de votre connexion internet.",
  },
  {
    title: "Naviguez avec la Siri Remote",
    text: "Une fois les contenus chargés, utilisez la Siri Remote pour naviguer entre les chaînes, accéder au guide des programmes et régler le volume via votre téléviseur ou système audio.",
  },
];

const troubleshoot = [
  {
    problem: "L'application demandée n'est plus disponible sur l'App Store",
    solution:
      "La disponibilité des applications tierces peut évoluer selon les politiques de l'App Store. Contrairement à Android, il n'est pas possible d'installer une application en dehors de l'App Store sur Apple TV : il est donc utile de connaître une deuxième application compatible en solution de secours.",
  },
  {
    problem: "L'image reste figée ou l'application se ferme seule",
    solution:
      "Sur les générations plus anciennes d'Apple TV, la mémoire disponible est plus limitée. Fermez les autres applications ouvertes en arrière-plan (double-appui sur le bouton d'accueil de la Siri Remote, puis balayage vers le haut) avant de relancer l'application IPTV.",
  },
  {
    problem: "La Siri Remote ne répond plus correctement",
    solution:
      "Vérifiez que la télécommande est chargée et à portée de l'Apple TV. Un redémarrage du boîtier (Réglages > Général > Redémarrer) résout la plupart des pertes de connexion Bluetooth.",
  },
  {
    problem: "Le son ne sort pas de la bonne source",
    solution:
      "Vérifiez la sortie audio dans Réglages > Vidéo et Audio de l'Apple TV, surtout si votre installation passe par une barre de son ou un ampli connecté en HDMI.",
  },
];

const faqItems = [
  {
    question: "L'IPTV fonctionne-t-il sur toutes les générations d'Apple TV ?",
    answer:
      "L'IPTV fonctionne sur les générations d'Apple TV capables d'installer des applications depuis l'App Store, c'est-à-dire l'Apple TV HD et les modèles Apple TV 4K, à condition d'exécuter une version de tvOS à jour.",
  },
  {
    question: "Peut-on installer une application en dehors de l'App Store ?",
    answer:
      "Non. Contrairement à Android, tvOS ne permet pas l'installation d'applications en dehors de l'App Store, ce qui limite le choix aux applications de lecture disponibles officiellement.",
  },
  {
    question: "Faut-il un compte Apple pour installer une application IPTV ?",
    answer:
      "Oui, un identifiant Apple est nécessaire pour accéder à l'App Store et installer une application, même si celle-ci est gratuite.",
  },
  {
    question: "L'IPTV consomme-t-il beaucoup de données sur Apple TV ?",
    answer:
      "La consommation dépend de la qualité de diffusion (HD ou 4K). Une connexion filaire ou un Wi-Fi stable est recommandée pour profiter de la meilleure qualité sans coupures.",
  },
];

export default function IptvAppleTvPage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "IPTV Apple TV", path: "/iptv-apple-tv" }]);
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
              eyebrow="IPTV Apple TV"
              title="IPTV sur Apple TV : Installation et Configuration"
              description="Comment installer et configurer l'IPTV sur Apple TV via l'App Store, naviguer avec la Siri Remote, et résoudre les problèmes courants."
            />
            <p className="text-sm leading-relaxed text-muted">
              Le fonctionnement décrit ci-dessous s&apos;applique à l&apos;Apple
              TV HD et aux modèles Apple TV 4K, tant que le boîtier exécute
              une version récente de tvOS.
            </p>
            <Button href="/pricing" variant="primary">
              Voir les Offres IPTV
            </Button>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/hero-tv-full.jpg"
              alt="Interface de streaming IPTV affichée sur un téléviseur connecté à un boîtier Apple TV"
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
            L&apos;IPTV est compatible avec l&apos;<strong>Apple TV HD</strong>{" "}
            et les modèles <strong>Apple TV 4K</strong>, via une application de
            lecture disponible sur l&apos;App Store tvOS. Contrairement à
            Android, tvOS ne permet pas d&apos;installer une application en
            dehors de l&apos;App Store : le choix se limite donc aux
            applications compatibles publiées officiellement, et leur
            disponibilité peut évoluer selon les politiques d&apos;Apple.
          </p>

          <h2 className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
            Ce qu&apos;il faut préparer
          </h2>
          <ul className="flex flex-col gap-2 text-base leading-relaxed text-muted">
            <li>• Un boîtier Apple TV connecté à internet (Wi-Fi ou Ethernet).</li>
            <li>
              • Vos identifiants d&apos;abonnement (URL M3U ou Xtream Codes)
              reçus après votre achat.
            </li>
            <li>• Un identifiant Apple pour accéder à l&apos;App Store.</li>
            <li>• La Siri Remote fournie avec le boîtier, chargée ou avec des piles.</li>
          </ul>

          <h2 className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
            Installation étape par étape
          </h2>
          <StepList steps={steps} />

          <h2 className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
            Conseils pour une meilleure expérience
          </h2>
          <ul className="flex flex-col gap-2 text-base leading-relaxed text-muted">
            <li>• Privilégiez une connexion Ethernet si votre Apple TV le permet, pour une stabilité maximale en 4K.</li>
            <li>• Gardez tvOS et l&apos;application à jour depuis l&apos;App Store.</li>
            <li>• Fermez les applications inutilisées en arrière-plan sur les modèles plus anciens.</li>
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
        eyebrow="FAQ Apple TV"
        title="Questions Fréquentes — IPTV Apple TV"
        description="Les réponses aux questions les plus courantes sur l'installation IPTV sur Apple TV."
      />

      <section className="bg-white py-12">
        <Container className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 text-sm">
          <span className="text-muted">Voir aussi :</span>
          <Link href="/iptv-iphone" className="font-semibold text-blue underline underline-offset-2">
            IPTV sur iPhone et iPad
          </Link>
          <Link href="/iptv-smart-tv" className="font-semibold text-blue underline underline-offset-2">
            IPTV sur Smart TV
          </Link>
          <Link
            href="/blog/application-iptv-player"
            className="font-semibold text-blue underline underline-offset-2"
          >
            comprendre les applications IPTV
          </Link>
          <Link href="/features" className="font-semibold text-blue underline underline-offset-2">
            fonctionnalités de notre service IPTV
          </Link>
          <Link href="/faq" className="font-semibold text-blue underline underline-offset-2">
            FAQ générale
          </Link>
        </Container>
      </section>

      <CTA />
    </>
  );
}
