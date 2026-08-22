import { Trophy, Clapperboard, Film, Tv } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function CTA() {
  const icons = [Trophy, Clapperboard, Film, Tv];

  return (
    <section className="relative overflow-hidden bg-gradient-brand py-16 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="grid h-full grid-cols-6 gap-4 p-6">
          {Array.from({ length: 24 }).map((_, i) => {
            const Icon = icons[i % icons.length];
            return <Icon key={i} className="h-full w-full text-white" strokeWidth={1} />;
          })}
        </div>
      </div>
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Prêt à découvrir une meilleure expérience IPTV ?
        </h2>
        <p className="max-w-xl text-lg text-white/85">
          Choisissez votre offre et commencez en quelques minutes.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/pricing" variant="white" className="text-sm">
            Voir les Offres
          </Button>
          <Button href="/contact" variant="ghost" className="border-2 border-white/40 text-white hover:text-white hover:bg-white/10 text-sm normal-case font-bold tracking-normal px-6 py-3.5 rounded-full">
            Contacter le Support
          </Button>
        </div>
      </Container>
    </section>
  );
}
