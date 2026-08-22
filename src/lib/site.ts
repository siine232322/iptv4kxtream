export const siteConfig = {
  siteName: "StreamCrest",
  tagline: "Le Meilleur IPTV France Premium",
  siteUrl: "https://www.streamcrest.fr",
  description:
    "StreamCrest est un service IPTV premium en France : streaming HD/4K, compatibilité multi-appareils (Smart TV, Fire TV, Android, iPhone), configuration simple et support réactif.",
  email: "support@streamcrest.fr",
  supportUrl: "/contact",
  socialLinks: {
    twitter: "https://twitter.com/streamcrest",
    facebook: "https://facebook.com/streamcrest",
    instagram: "https://instagram.com/streamcrest",
    telegram: "https://t.me/streamcrest",
  },
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Abonnements", href: "/pricing" },
    { label: "Fonctionnalités", href: "/features" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: {
    navigation: [
      { label: "Accueil", href: "/" },
      { label: "IPTV", href: "/features" },
      { label: "Abonnements", href: "/pricing" },
      { label: "Guides", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ],
    information: [
      { label: "À propos", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Support", href: "/support" },
      { label: "Blog", href: "/blog" },
    ],
    legal: [
      { label: "Politique de confidentialité", href: "/privacy" },
      { label: "Conditions générales", href: "/terms" },
      { label: "Politique de remboursement", href: "/refund" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
