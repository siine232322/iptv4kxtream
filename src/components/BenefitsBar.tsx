import { heroBenefitsBar } from "@/lib/data";
import Container from "./ui/Container";

export default function BenefitsBar() {
  return (
    <section className="relative -mt-6 pb-4 sm:-mt-10">
      <Container>
        <div className="grid grid-cols-1 gap-6 rounded-3xl border border-border bg-white p-6 shadow-[0_25px_70px_-30px_rgba(6,59,115,0.35)] sm:grid-cols-2 sm:gap-4 sm:p-8 lg:grid-cols-5 lg:divide-x lg:divide-border">
          {heroBenefitsBar.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start gap-2.5 lg:px-5 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue">
                <item.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
              <p className="text-xs leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
