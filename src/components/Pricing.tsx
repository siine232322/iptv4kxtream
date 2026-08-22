"use client";

import { useState } from "react";
import { Check, MonitorSmartphone } from "lucide-react";
import clsx from "clsx";
import { deviceTiers } from "@/lib/data";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

const WHATSAPP_URL = "https://wa.me/message/LGAJJMCZOAZYI1";

export default function Pricing({
  compact = false,
  title = "Choisissez Votre Abonnement IPTV",
}: {
  compact?: boolean;
  title?: string;
}) {
  const [tierId, setTierId] = useState(deviceTiers[0].id);
  const tier = deviceTiers.find((t) => t.id === tierId) ?? deviceTiers[0];

  return (
    <section id="pricing" className={clsx("bg-surface", compact ? "py-16 sm:py-24" : "py-12 sm:py-16")}>
      <Container className="flex flex-col gap-10">
        {compact && (
          <SectionHeading
            eyebrow="Tarifs"
            title={title}
            description="Chaque offre inclut la qualité HD/FHD/4K selon connexion, les mises à jour et le support."
          />
        )}

        <div
          role="tablist"
          aria-label="Nombre d'appareils"
          className="mx-auto flex w-full max-w-xl flex-wrap items-center justify-center gap-2 rounded-full border border-border bg-white p-1.5"
        >
          {deviceTiers.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={t.id === tierId}
              onClick={() => setTierId(t.id)}
              className={clsx(
                "flex-1 rounded-full px-4 py-2.5 text-sm font-bold transition-colors",
                t.id === tierId ? "bg-blue text-white" : "text-muted hover:text-foreground"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <p className="mx-auto -mt-4 flex items-center gap-1.5 text-sm text-muted">
          <MonitorSmartphone className="h-4 w-4 text-blue" />
          {tier.description}
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tier.durations.map((plan) => (
            <div
              key={plan.id}
              className={clsx(
                "relative flex flex-col gap-5 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5",
                plan.popular
                  ? "bg-gradient-brand text-white shadow-[0_25px_60px_-15px_rgba(139,43,190,0.5)] lg:scale-105"
                  : "border border-border bg-white shadow-[0_10px_30px_-20px_rgba(16,35,63,0.3)]"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-purple">
                  Meilleur Rapport Qualité/Prix
                </span>
              )}

              <div className="flex flex-col gap-1">
                <h3 className={clsx("text-lg font-extrabold", plan.popular ? "text-white" : "text-foreground")}>
                  {plan.name}
                </h3>
                <p className={clsx("text-sm", plan.popular ? "text-white/85" : "text-muted")}>
                  {tier.label} · {tier.devices > 1 ? "connexions simultanées" : "connexion simultanée"}
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className={clsx("text-4xl font-extrabold tracking-tight", plan.popular ? "text-white" : "text-foreground")}>
                  {plan.price}
                </span>
                {plan.perMonth && (
                  <span className={clsx("text-sm", plan.popular ? "text-white/80" : "text-muted")}>
                    {plan.perMonth}
                  </span>
                )}
              </div>

              <ul className="flex flex-1 flex-col gap-2.5">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className={clsx("flex items-start gap-2 text-sm", plan.popular ? "text-white/90" : "text-muted")}
                  >
                    <Check className={clsx("mt-0.5 h-4 w-4 shrink-0", plan.popular ? "text-white" : "text-blue")} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={WHATSAPP_URL}
                external
                variant={plan.popular ? "white" : "primary"}
                className="w-full"
              >
                Choisir {plan.name}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted">
          Prix affichés à titre indicatif et susceptibles d&apos;être modifiés.
          Consultez la{" "}
          <a href="/pricing" className="font-semibold text-blue underline">
            page tarifs complète
          </a>{" "}
          avant achat.
        </p>
      </Container>
    </section>
  );
}
