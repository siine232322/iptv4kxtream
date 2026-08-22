import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import { whyChooseUs } from "@/lib/data";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

export default function Benefits() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading title="Pourquoi choisir notre service IPTV ?" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className={clsx(
                "flex flex-col gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1",
                item.highlight
                  ? "bg-gradient-brand text-white shadow-[0_20px_50px_-15px_rgba(139,43,190,0.45)]"
                  : "border border-border bg-white shadow-[0_10px_30px_-18px_rgba(16,35,63,0.25)]"
              )}
            >
              <span
                className={clsx(
                  "flex h-12 w-12 items-center justify-center rounded-xl",
                  item.highlight ? "bg-white/20 text-white" : "bg-blue/10 text-blue"
                )}
              >
                <item.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className={clsx("text-lg font-bold", item.highlight ? "text-white" : "text-foreground")}>
                {item.title}
              </h3>
              <p className={clsx("text-sm leading-relaxed", item.highlight ? "text-white/85" : "text-muted")}>
                {item.text}
              </p>
              <Link
                href={item.href}
                className={clsx(
                  "mt-auto inline-flex items-center gap-1.5 text-sm font-bold",
                  item.highlight ? "text-white" : "text-blue"
                )}
              >
                {item.linkText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
