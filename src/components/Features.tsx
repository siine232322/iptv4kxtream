import { features } from "@/lib/data";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

export default function Features() {
  return (
    <section id="features" className="bg-surface py-16 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading title="Les meilleures fonctionnalités pour une expérience ultime" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(8,120,217,0.35)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue/10 text-blue">
                <f.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{f.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
