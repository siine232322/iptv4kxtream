import Image from "next/image";
import Link from "next/link";
import { devices } from "@/lib/data";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

export default function Devices() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Compatibilité"
          title="Regardez sur vos appareils préférés"
          description="Passez d'un écran à l'autre sans reconfiguration complexe."
        />

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {devices.map((d) => {
            const cardClass =
              "group flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-border bg-white text-center transition-all hover:-translate-y-1 hover:shadow-[0_15px_35px_-15px_rgba(8,120,217,0.35)]";
            const cardContent = (
              <>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.alt}
                    fill
                    sizes="(max-width: 640px) 45vw, 180px"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-blue shadow-sm">
                    <d.icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                </div>
                <span className="pb-4 text-sm font-semibold text-foreground">{d.name}</span>
              </>
            );

            return d.href ? (
              <Link key={d.name} href={d.href} className={cardClass}>
                {cardContent}
              </Link>
            ) : (
              <div key={d.name} className={cardClass}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
