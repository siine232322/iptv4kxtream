import Image from "next/image";
import { Sparkles, Tv, Radio, Clapperboard, Film } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";

const tiles = [
  {
    icon: Tv,
    label: "Interface Smart TV",
    image: "/images/intro-smarttv-interface.svg",
    alt: "Aperçu de l'interface IPTV sur Smart TV avec vignettes de contenu",
    offset: "",
  },
  {
    icon: Radio,
    label: "Live TV",
    image: "/images/intro-livetv-interface.svg",
    alt: "Aperçu de l'interface Live TV de l'application IPTV",
    offset: "mt-8",
  },
  {
    icon: Clapperboard,
    label: "Navigation Films",
    image: "/images/intro-movies-interface.svg",
    alt: "Aperçu de l'interface de navigation dans les films sur IPTV",
    offset: "",
  },
  {
    icon: Film,
    label: "Navigation Séries",
    image: "/images/intro-series-interface.svg",
    alt: "Aperçu de l'interface de navigation dans les séries sur IPTV",
    offset: "mt-8",
  },
];

const badges = ["4K", "EPG", "Multi-appareils", "HD Streaming"];

export default function IntroSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-5">
          <span className="inline-flex items-center rounded-full bg-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue">
            Meilleur IPTV France
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Meilleur IPTV France — Streaming Premium 4K
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Notre service IPTV a été conçu pour les foyers français qui
            veulent une expérience de streaming simple, fiable et complète.
            Sport, cinéma, séries, documentaires et divertissement jeunesse
            sont réunis sur une interface claire, accessible depuis votre
            Smart TV, votre Fire TV Stick, votre smartphone Android ou votre
            iPhone. La qualité de lecture s&apos;adapte à votre appareil et à
            votre connexion, pour profiter d&apos;un rendu HD ou 4K selon les
            conditions. Notre priorité reste la simplicité : une{" "}
            <a href="/features" className="font-semibold text-blue underline underline-offset-2">
              configuration guidée
            </a>
            , une{" "}
            <a href="/pricing" className="font-semibold text-blue underline underline-offset-2">
              tarification transparente
            </a>
            , et une équipe de support disponible pour vous accompagner à
            chaque étape.
          </p>
          <Button href="/pricing" variant="primary" className="mt-2 text-sm">
            Choisir Mon Abonnement
          </Button>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {tiles.map((tile) => (
              <div
                key={tile.label}
                className={`relative flex aspect-square flex-col justify-between overflow-hidden rounded-2xl p-5 ${tile.offset}`}
              >
                <Image
                  src={tile.image}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 1024px) 45vw, 260px"
                  loading="lazy"
                  className="object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-black/10" />
                <tile.icon className="relative h-7 w-7 text-white drop-shadow" strokeWidth={1.75} />
                <span className="relative text-sm font-bold text-white drop-shadow">{tile.label}</span>
              </div>
            ))}
          </div>

          <div className="absolute -top-3 -right-3 hidden flex-col gap-2 sm:flex">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border bg-white px-3 py-1 text-xs font-bold text-blue-dark shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="absolute -bottom-6 left-1/2 flex w-[85%] -translate-x-1/2 items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-[0_20px_50px_-15px_rgba(6,59,115,0.35)]">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-foreground">Votre expérience IPTV ultime</p>
              <p className="text-xs text-muted">Tout votre divertissement, un seul accès</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
