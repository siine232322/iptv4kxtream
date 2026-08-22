import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { devices } from "@/lib/data";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Infrastructure() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Choisissez votre abonnement IPTV
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Découvrez une expérience IPTV premium pensée pour profiter de vos
            contenus préférés sur vos appareils compatibles, que vous
            regardiez sur{" "}
            <Link href="/iptv-smart-tv" className="font-semibold text-blue underline underline-offset-2">
              IPTV Smart TV
            </Link>
            ,{" "}
            <Link href="/iptv-firestick" className="font-semibold text-blue underline underline-offset-2">
              IPTV Firestick
            </Link>{" "}
            ou{" "}
            <Link href="/iptv-android" className="font-semibold text-blue underline underline-offset-2">
              IPTV Android
            </Link>
            . Une configuration simple, une tarification transparente, et un
            service qui évolue régulièrement pour rester fiable. Des
            questions avant de vous lancer ? Consultez notre{" "}
            <Link href="/faq" className="font-semibold text-blue underline underline-offset-2">
              FAQ
            </Link>
            .
          </p>
          <Button href="/pricing" variant="primary" className="text-sm">
            Voir les Offres
          </Button>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
          {devices.map((device) => {
            const rowClass =
              "flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm transition-colors" +
              (device.href ? " hover:bg-blue/5" : "");
            const rowContent = (
              <>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue/10 text-blue">
                  <device.icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-foreground">{device.name}</span>
                <CheckCircle2 className="ml-auto h-5 w-5 text-blue" />
              </>
            );

            return device.href ? (
              <Link key={device.name} href={device.href} className={rowClass}>
                {rowContent}
              </Link>
            ) : (
              <div key={device.name} className={rowClass}>
                {rowContent}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
