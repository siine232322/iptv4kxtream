import { howItWorks } from "@/lib/data";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Démarrage"
          title="Comment ça marche"
          description="De la sélection de l'offre au visionnage, un processus pensé pour être rapide et clair."
        />

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          />
          {howItWorks.map((step) => (
            <div key={step.step} className="relative flex flex-col items-start gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-lg font-extrabold text-white">
                {step.step}
              </span>
              <h3 className="text-base font-bold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
