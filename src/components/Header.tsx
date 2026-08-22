"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Tv, ArrowRight } from "lucide-react";
import clsx from "clsx";
import { siteConfig } from "@/lib/site";
import Container from "./ui/Container";
import Button from "./ui/Button";

const WHATSAPP_URL = "https://wa.me/message/LGAJJMCZOAZYI1";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "border-border shadow-[0_4px_20px_-8px_rgba(16,35,63,0.15)]" : "border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-extrabold text-lg text-foreground"
          aria-label={`${siteConfig.siteName} accueil`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-white">
            <Tv className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span>{siteConfig.siteName}</span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Principal">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={clsx(
                  "relative py-1.5 text-sm font-semibold transition-colors hover:text-blue",
                  active ? "text-blue" : "text-foreground/80"
                )}
              >
                {item.label}
                <span
                  className={clsx(
                    "absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-blue transition-transform duration-200",
                    active && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Button href={WHATSAPP_URL} external variant="primary" className="text-xs px-5 py-3.5">
            Essayer 24H Gratuitement
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground xl:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <div
        className={clsx(
          "grid overflow-hidden border-t border-border bg-white transition-all duration-300 xl:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-foreground/80 hover:bg-surface hover:text-blue"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-border pt-4">
              <Button
                href={WHATSAPP_URL}
                external
                variant="primary"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Essayer 24H Gratuitement
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
