"use client";

import { motion } from "framer-motion";
import { ArrowRight, MonitorSmartphone, Sparkles, Headset, Zap } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import HeroPosterArt from "./HeroPosterArt";

const heroStats = [
  { icon: Sparkles, value: "4K / FHD / HD", label: "Qualité adaptative" },
  { icon: MonitorSmartphone, value: "Multi-appareils", label: "Smart TV, Android, iOS" },
  { icon: Zap, value: "Configuration rapide", label: "Guidée en quelques minutes" },
  { icon: Headset, value: "Support réactif", label: "Une équipe à l'écoute" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-16 sm:pt-16 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(60%_60%_at_75%_10%,rgba(8,120,217,0.10),transparent_70%)]"
      />
      <Container className="grid items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-blue" />
            Le Meilleur Service IPTV en 2026
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem]">
            Vivez la Meilleure
            <br />
            Expérience <span className="text-blue">IPTV 4K</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted">
            Un service IPTV pensé pour la France : streaming en qualité
            HD/FHD/4K selon votre connexion, compatible Smart TV, Fire TV,
            Android et iPhone, avec une configuration simple et un support
            qui répond vraiment.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/pricing" variant="primary" className="text-sm">
              Voir les Offres
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary" className="text-sm">
              Essayer 24H Gratuit
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-5 pt-4 sm:grid-cols-4 lg:grid-cols-2">
            {heroStats.map((stat) => (
              <div key={stat.value} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue">
                  <stat.icon className="h-4 w-4" strokeWidth={2} />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-extrabold leading-tight text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs leading-tight text-muted">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <HeroPosterArt />
        </motion.div>
      </Container>
    </section>
  );
}
