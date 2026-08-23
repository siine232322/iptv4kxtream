import Link from "next/link";
import { trustValues } from "@/lib/data";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <SectionHeading title="Pourquoi nos clients nous choisissent" />
          <p className="text-sm text-muted">
            Ces principes guident chaque décision que nous prenons —{" "}
            <Link href="/about" className="font-semibold text-blue underline underline-offset-2">
              découvrez notre approche et notre histoire
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {trustValues.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-white p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue/10 text-blue">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
