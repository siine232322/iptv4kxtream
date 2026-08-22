import Link from "next/link";
import { Tv, Mail, AtSign, Users, Camera, Send } from "lucide-react";
import { siteConfig } from "@/lib/site";
import Container from "./ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: AtSign, href: siteConfig.socialLinks.twitter, label: "Twitter" },
    { icon: Users, href: siteConfig.socialLinks.facebook, label: "Facebook" },
    { icon: Camera, href: siteConfig.socialLinks.instagram, label: "Instagram" },
    { icon: Send, href: siteConfig.socialLinks.telegram, label: "Telegram" },
  ];

  return (
    <footer className="bg-gradient-blue text-white">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-extrabold text-lg text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                <Tv className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span>{siteConfig.siteName}</span>
            </Link>
            <p className="max-w-xs text-sm text-white/75">{siteConfig.description}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/85 transition-colors hover:border-white/50 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Navigation" links={siteConfig.footerLinks.navigation} />
          <FooterColumn title="Informations" links={siteConfig.footerLinks.information} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 border-t border-white/15 pt-8 sm:grid-cols-2">
          <FooterColumn title="Légal" links={siteConfig.footerLinks.legal} inline />
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-8 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {siteConfig.siteName}. Tous droits réservés.</p>
          <p>Service IPTV premium pensé pour une expérience simple et transparente.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  inline = false,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
  inline?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <ul className={inline ? "flex flex-wrap gap-x-6 gap-y-2" : "flex flex-col gap-2"}>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
