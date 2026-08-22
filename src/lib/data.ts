import {
  Cable,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Headset,
  RefreshCw,
  Tv,
  Zap,
  Globe2,
  LayoutGrid,
  MonitorSmartphone,
  Tablet,
  Laptop,
  Radio,
  Trophy,
  Clapperboard,
  Film,
  BookOpen,
  Baby,
  Gamepad2,
  Drama,
  Flame,
  Rocket,
  Ghost,
  Laugh,
  Users,
  MonitorCheck,
} from "lucide-react";

export const trustStrip = [
  { icon: Trophy, label: "Sport" },
  { icon: Clapperboard, label: "Cinéma" },
  { icon: Film, label: "Séries" },
  { icon: BookOpen, label: "Documentaires" },
  { icon: Baby, label: "Jeunesse" },
  { icon: Globe2, label: "International" },
];

export const heroBenefitsBar = [
  { icon: Cable, title: "Installation facile", text: "Guides simples et rapides" },
  { icon: MonitorSmartphone, title: "Multi-appareils", text: "Smart TV, Android, Fire TV, iOS" },
  { icon: Headset, title: "Support réactif", text: "Assistance rapide et professionnelle" },
  { icon: RefreshCw, title: "Mises à jour régulières", text: "Améliorations continues" },
  { icon: ShieldCheck, title: "Paiement sécurisé", text: "Transactions sécurisées" },
];

export const qualityStats = [
  { icon: Sparkles, value: "HD / FHD / 4K", label: "Qualité adaptative" },
  { icon: MonitorSmartphone, value: "Multi-appareils", label: "Smart TV, Android, iOS, Fire TV" },
  { icon: Globe2, value: "France", label: "Service pensé pour le marché français" },
  { icon: RefreshCw, value: "Mises à jour régulières", label: "Compatibilité maintenue à jour" },
  { icon: Headset, value: "7j/7", label: "Support disponible" },
];

export const whyChooseUs = [
  {
    icon: LayoutGrid,
    title: "Grande variété de contenus",
    text: "Un large éventail de divertissement — sport, cinéma, séries et plus — organisé pour être facile à parcourir.",
    href: "/features",
    linkText: "Découvrir les contenus IPTV",
  },
  {
    icon: Sparkles,
    title: "Qualité HD & 4K",
    text: "Une lecture en haute qualité, selon votre appareil et la qualité de votre connexion internet.",
    href: "/features",
    linkText: "Voir la qualité IPTV 4K",
    highlight: true,
  },
  {
    icon: MonitorSmartphone,
    title: "Multi-appareils",
    text: "Compatible Smart TV, Android, iOS, Fire TV et ordinateur — changez d'écran librement.",
    href: "/features",
    linkText: "Compatibilité IPTV Smart TV",
  },
  {
    icon: Headset,
    title: "Support réactif",
    text: "Une équipe disponible pour vous accompagner lors de la configuration et au quotidien.",
    href: "/contact",
    linkText: "Contacter le support IPTV",
  },
];

export const entertainmentCategories = [
  {
    icon: Trophy,
    title: "Sport",
    image: "/images/category-sport.jpg",
    alt: "Illustration IPTV représentant la catégorie sport en direct",
  },
  {
    icon: Rocket,
    title: "Football",
    image: "/images/category-football.jpg",
    alt: "Illustration IPTV représentant la catégorie football",
  },
  {
    icon: Clapperboard,
    title: "Films",
    image: "/images/category-films.jpg",
    alt: "Illustration IPTV représentant la catégorie films en streaming",
  },
  {
    icon: Film,
    title: "Séries",
    image: "/images/category-series.jpg",
    alt: "Illustration IPTV représentant la catégorie séries en streaming",
  },
  {
    icon: BookOpen,
    title: "Documentaires",
    image: "/images/category-documentaires.jpg",
    alt: "Illustration IPTV représentant la catégorie documentaires",
  },
  {
    icon: Drama,
    title: "Divertissement",
    image: "/images/category-divertissement.jpg",
    alt: "Illustration IPTV représentant la catégorie divertissement",
  },
  {
    icon: Baby,
    title: "Jeunesse",
    image: "/images/category-jeunesse.jpg",
    alt: "Illustration IPTV représentant la catégorie jeunesse",
  },
  {
    icon: Globe2,
    title: "International",
    image: "/images/category-international.jpg",
    alt: "Illustration IPTV représentant la catégorie chaînes internationales",
  },
];

export const moviesGallery = [
  {
    icon: Flame,
    title: "Action",
    image: "/images/movie-action.jpg",
    alt: "Affiche originale de genre pour les films d'action en streaming",
  },
  {
    icon: Laugh,
    title: "Comédie",
    image: "/images/movie-comedie.jpg",
    alt: "Affiche originale de genre pour les films de comédie en streaming",
  },
  {
    icon: Ghost,
    title: "Thriller",
    image: "/images/movie-thriller.jpg",
    alt: "Affiche originale de genre pour les films thriller en streaming",
  },
  {
    icon: Rocket,
    title: "Science-Fiction",
    image: "/images/movie-science-fiction.jpg",
    alt: "Affiche originale de genre pour les films de science-fiction en streaming",
  },
  {
    icon: Drama,
    title: "Drame",
    image: "/images/movie-drame.jpg",
    alt: "Affiche originale de genre pour les films dramatiques en streaming",
  },
  {
    icon: Users,
    title: "Famille",
    image: "/images/movie-famille.jpg",
    alt: "Affiche originale de genre pour les films familiaux en streaming",
  },
  {
    icon: Trophy,
    title: "Aventure",
    image: "/images/movie-aventure.jpg",
    alt: "Affiche originale de genre pour les films d'aventure en streaming",
  },
  {
    icon: Gamepad2,
    title: "Animation",
    image: "/images/movie-animation.svg",
    alt: "Affiche originale de genre pour les films d'animation en streaming",
  },
];

export const features = [
  {
    icon: MonitorCheck,
    title: "Streaming HD / 4K",
    text: "Une lecture haute qualité, adaptée à votre appareil et à votre connexion.",
  },
  {
    icon: MonitorSmartphone,
    title: "Multi-appareils",
    text: "Compatible avec plusieurs catégories d'appareils modernes.",
  },
  {
    icon: LayoutGrid,
    title: "Guide TV / EPG",
    text: "Informations de programmation organisées, lorsque disponibles.",
  },
  {
    icon: Zap,
    title: "Interface simple",
    text: "Une expérience de visionnage pensée pour être claire et intuitive.",
  },
  {
    icon: Headset,
    title: "Support client",
    text: "Une assistance disponible en cas de besoin.",
  },
  {
    icon: RefreshCw,
    title: "Mises à jour régulières",
    text: "Des améliorations continues de compatibilité et de service.",
  },
];

export const devices = [
  {
    icon: Tv,
    name: "Smart TV",
    image: "/images/device-smart-tv.jpg",
    alt: "IPTV compatible Smart TV — interface de streaming sur téléviseur connecté",
    href: "/iptv-smart-tv",
  },
  {
    icon: Radio,
    name: "Fire TV Stick",
    image: "/images/device-firestick.jpg",
    alt: "IPTV compatible Fire TV Stick — clé de streaming connectée à la télévision",
    href: "/iptv-firestick",
  },
  {
    icon: Smartphone,
    name: "Android",
    image: "/images/device-android-tv.jpg",
    alt: "IPTV compatible Android et Android TV",
    href: "/iptv-android",
  },
  {
    icon: Smartphone,
    name: "iPhone / iPad",
    image: "/images/device-smartphone.jpg",
    alt: "IPTV compatible iPhone et iPad sur mobile",
    href: "/iptv-iphone",
  },
  {
    icon: Tablet,
    name: "Tablette",
    image: "/images/device-tablet.jpg",
    alt: "IPTV compatible tablette pour regarder en mobilité",
  },
  {
    icon: Laptop,
    name: "Ordinateur",
    image: "/images/device-computer.jpg",
    alt: "IPTV compatible ordinateur via navigateur web",
  },
];

export const trustValues = [
  { icon: Cable, title: "Installation simplifiée", text: "Des instructions claires pour démarrer rapidement." },
  { icon: Headset, title: "Support réactif", text: "Une équipe à l'écoute pour vous accompagner." },
  { icon: MonitorSmartphone, title: "Compatible multi-appareils", text: "Smart TV, mobile, tablette et ordinateur." },
  { icon: Sparkles, title: "Expérience utilisateur simple", text: "Une interface pensée pour la clarté." },
  { icon: ShieldCheck, title: "Informations claires", text: "Une tarification transparente, sans surprise." },
];

export type DurationPlan = {
  id: string;
  name: string;
  months: number;
  price: string;
  perMonth?: string;
  popular?: boolean;
};

export type DeviceTier = {
  id: string;
  devices: number;
  label: string;
  description: string;
  features: string[];
  durations: DurationPlan[];
};

export const deviceTiers: DeviceTier[] = [
  {
    id: "1-device",
    devices: 1,
    label: "1 Appareil",
    description: "Idéal pour un usage individuel sur un seul écran à la fois.",
    features: [
      "1 connexion simultanée",
      "Qualité HD/FHD/4K selon connexion",
      "Guide des programmes disponible",
      "Mises à jour régulières",
    ],
    durations: [
      { id: "1-device-1m", name: "1 Mois", months: 1, price: "20,99€" },
      { id: "1-device-3m", name: "3 Mois", months: 3, price: "35,99€", perMonth: "11,99€ / mois" },
      { id: "1-device-6m", name: "6 Mois", months: 6, price: "40,99€", perMonth: "6,83€ / mois" },
      { id: "1-device-12m", name: "12 Mois", months: 12, price: "55,99€", perMonth: "4,67€ / mois", popular: true },
    ],
  },
  {
    id: "2-devices",
    devices: 2,
    label: "2 Appareils",
    description: "Pour deux écrans utilisés en même temps, comme un foyer à deux.",
    features: [
      "2 connexions simultanées",
      "Qualité HD/FHD/4K selon connexion",
      "Guide des programmes disponible",
      "Mises à jour régulières",
    ],
    durations: [
      { id: "2-devices-1m", name: "1 Mois", months: 1, price: "35,99€" },
      { id: "2-devices-3m", name: "3 Mois", months: 3, price: "55,99€", perMonth: "18,66€ / mois" },
      { id: "2-devices-6m", name: "6 Mois", months: 6, price: "70,99€", perMonth: "11,83€ / mois" },
      { id: "2-devices-12m", name: "12 Mois", months: 12, price: "125,99€", perMonth: "10,50€ / mois", popular: true },
    ],
  },
  {
    id: "3-devices",
    devices: 3,
    label: "3 Appareils",
    description: "Pour trois écrans utilisés en même temps, adapté aux familles.",
    features: [
      "3 connexions simultanées",
      "Qualité HD/FHD/4K selon connexion",
      "Guide des programmes disponible",
      "Mises à jour régulières",
    ],
    durations: [
      { id: "3-devices-1m", name: "1 Mois", months: 1, price: "65,99€" },
      { id: "3-devices-3m", name: "3 Mois", months: 3, price: "95,99€", perMonth: "32,00€ / mois" },
      { id: "3-devices-6m", name: "6 Mois", months: 6, price: "110,99€", perMonth: "18,50€ / mois" },
      { id: "3-devices-12m", name: "12 Mois", months: 12, price: "165,99€", perMonth: "13,83€ / mois", popular: true },
    ],
  },
  {
    id: "4-devices",
    devices: 4,
    label: "4 Appareils",
    description: "Pour quatre écrans utilisés en même temps, notre offre la plus large.",
    features: [
      "4 connexions simultanées",
      "Qualité HD/FHD/4K selon connexion",
      "Guide des programmes disponible",
      "Mises à jour régulières",
    ],
    durations: [
      { id: "4-devices-1m", name: "1 Mois", months: 1, price: "70,99€" },
      { id: "4-devices-3m", name: "3 Mois", months: 3, price: "110,99€", perMonth: "37,00€ / mois" },
      { id: "4-devices-6m", name: "6 Mois", months: 6, price: "150,99€", perMonth: "25,17€ / mois" },
      { id: "4-devices-12m", name: "12 Mois", months: 12, price: "200,99€", perMonth: "16,75€ / mois", popular: true },
    ],
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "Qu'est-ce que l'IPTV ?",
    answer:
      "L'IPTV (Internet Protocol Television) est une technologie qui permet de diffuser des contenus télévisés via une connexion internet, plutôt que par voie satellite ou câble traditionnel.",
  },
  {
    question: "Comment fonctionne l'abonnement ?",
    answer:
      "Après avoir choisi une offre, vous recevez vos informations d'activation par email, ainsi qu'un guide de configuration simple à suivre sur votre appareil.",
  },
  {
    question: "Quels appareils sont compatibles ?",
    answer:
      "Le service est compatible avec les Smart TV récentes, Android, iOS, Fire TV Stick, ainsi que les ordinateurs. La compatibilité peut varier selon le modèle et la version logicielle.",
  },
  {
    question: "L'IPTV fonctionne-t-il sur Smart TV ?",
    answer:
      "Oui, notre IPTV est compatible avec la plupart des Smart TV récentes, dont Samsung et LG. Selon le modèle, l'installation peut se faire directement via une application ou via un boîtier externe comme une Fire TV Stick.",
  },
  {
    question: "Comment installer l'IPTV sur Firestick ou Android ?",
    answer:
      "Sur Fire TV Stick comme sur Android, la configuration se fait en quelques étapes simples détaillées dans le guide envoyé après votre achat. Aucune compétence technique particulière n'est nécessaire.",
  },
  {
    question: "Comment configurer mon service ?",
    answer:
      "Un guide de configuration détaillé vous est envoyé après votre achat. La plupart des utilisateurs terminent l'installation en quelques minutes.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Plusieurs moyens de paiement sécurisés sont disponibles au moment du paiement. Les options précises sont indiquées lors du passage en caisse.",
  },
  {
    question: "Combien de temps faut-il pour recevoir les informations ?",
    answer:
      "Les délais peuvent varier, mais la majorité des comptes sont activés peu de temps après la confirmation du paiement.",
  },
  {
    question: "Puis-je utiliser plusieurs appareils ?",
    answer:
      "Oui. Chaque offre est pensée pour fonctionner sur les appareils que vous possédez déjà, que ce soit votre télévision, votre mobile ou votre ordinateur.",
  },
  {
    question: "Comment contacter le support ?",
    answer:
      "Vous pouvez nous contacter via la page contact ou par email — notre équipe répond aussi rapidement que possible.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  /** Strings starting with "## " render as an H2 in the article body. */
  content: string[];
  relatedLinks: { label: string; href: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "bien-choisir-sa-configuration-streaming",
    title: "Bien choisir sa configuration IPTV à la maison",
    excerpt:
      "Un guide pratique pour adapter vos appareils, votre réseau et vos habitudes de visionnage IPTV à une expérience fiable en HD/4K.",
    date: "2026-06-02",
    readTime: "5 min de lecture",
    category: "Guides",
    image: "/images/blog-streaming-setup.jpg",
    imageAlt: "Illustration d'une interface de streaming IPTV affichée sur un grand écran",
    content: [
      "Avant de choisir une configuration pour votre service IPTV, il est utile de réfléchir à la façon dont votre foyer regarde réellement du contenu. Un utilisateur seul sur une Smart TV n'a pas les mêmes besoins qu'un foyer qui diffuse sur plusieurs pièces à la fois.",
      "## Commencer par le réseau",
      "Une connexion filaire vers votre téléviseur principal est souvent plus stable que le Wi-Fi, surtout dans les foyers avec de nombreux appareils connectés. Si le filaire n'est pas possible, placer votre routeur dans un endroit central et dégagé fait déjà une réelle différence pour la qualité HD/4K.",
      "## Choisir le bon appareil",
      "Les Smart TV sont pratiques car rien à brancher, mais les box ou clés de streaming dédiées comme une Fire TV Stick sont souvent mises à jour plus régulièrement et peuvent surpasser les fonctions intégrées d'une TV plus ancienne. Notre service IPTV reste compatible avec ces deux approches, ainsi qu'avec Android et iPhone.",
      "## Adapter la configuration à votre usage",
      "Enfin, réfléchissez au nombre d'appareils que vous utiliserez réellement en simultané. Adapter votre configuration à vos habitudes réelles, plutôt qu'à l'usage maximal possible, offre généralement le meilleur équilibre entre coût et performance.",
    ],
    relatedLinks: [
      { label: "Comparer nos abonnements IPTV", href: "/pricing" },
      { label: "Smart TV ou boîtier de streaming ?", href: "/blog/smart-tv-ou-boitier-streaming" },
    ],
  },
  {
    slug: "ameliorer-la-fiabilite-du-streaming",
    title: "Cinq façons d'améliorer la fiabilité de votre streaming IPTV",
    excerpt:
      "Des ajustements simples de réseau et d'appareils qui peuvent nettement améliorer la qualité de votre IPTV au quotidien.",
    date: "2026-05-14",
    readTime: "4 min de lecture",
    category: "Astuces",
    image: "/images/blog-network-reliability.jpg",
    imageAlt: "Illustration abstraite représentant un signal réseau stable pour l'IPTV",
    content: [
      "La fiabilité du streaming IPTV dépend souvent d'une poignée de facteurs : la force du réseau, l'état de l'appareil et le nombre d'usages simultanés de la bande passante.",
      "## Cinq ajustements simples",
      "1. Redémarrez régulièrement votre routeur et votre appareil — cela résout de petits problèmes de mémoire et de connexion qui s'accumulent avec le temps.",
      "2. Gardez vos applications et le firmware de votre appareil à jour. Les mises à jour incluent souvent des corrections de compatibilité et de stabilité.",
      "3. Réduisez le nombre d'appareils qui utilisent la bande passante en même temps aux heures de visionnage, notamment les téléchargements ou appels vidéo.",
      "4. Si possible, privilégiez la bande Wi-Fi 5GHz ou une connexion filaire pour votre appareil principal — utile pour profiter pleinement de la qualité 4K.",
      "5. Placez votre routeur dans un endroit central, loin des murs épais ou des grands appareils électroménagers qui peuvent perturber le signal.",
      "## Et si le problème persiste ?",
      "Si la qualité reste instable malgré ces ajustements, notre équipe support peut vous aider à identifier la cause, qu'elle vienne de votre réseau ou de votre appareil.",
    ],
    relatedLinks: [
      { label: "Contacter le support", href: "/contact" },
      { label: "Voir les questions fréquentes", href: "/faq" },
    ],
  },
  {
    slug: "smart-tv-ou-boitier-streaming",
    title: "IPTV sur Smart TV ou boîtier de streaming : quelle différence ?",
    excerpt:
      "Un aperçu des compromis entre les applications intégrées des Smart TV et les boîtiers IPTV comme Fire TV Stick ou Android TV.",
    date: "2026-04-27",
    readTime: "6 min de lecture",
    category: "Appareils",
    image: "/images/blog-smarttv-vs-stick.jpg",
    imageAlt: "Comparaison illustrée entre une Smart TV et une clé de streaming pour l'IPTV",
    content: [
      "La plupart des téléviseurs modernes intègrent des fonctions connectées, il est donc utile de savoir quand cela suffit pour votre IPTV et quand un boîtier ou une clé de streaming dédiée apporte une réelle valeur ajoutée.",
      "## Smart TV : la simplicité intégrée",
      "Les plateformes intégrées aux Smart TV sont pratiques — rien à acheter ni à brancher en plus — mais leur support logiciel varie selon le fabricant et peut ralentir ou s'arrêter après quelques années.",
      "## Fire TV Stick et Android TV : la flexibilité",
      "Les box et clés de streaming dédiées, comme une Fire TV Stick ou un boîtier Android TV, sont généralement plus faciles à remplacer et reçoivent souvent des mises à jour plus fréquentes, ce qui peut se traduire par une meilleure compatibilité IPTV à long terme.",
      "## Notre recommandation",
      "Si votre Smart TV semble lente ou que ses applications sont dépassées, ajouter une clé de streaming est souvent une solution plus simple que de remplacer le téléviseur. Notre service IPTV reste compatible avec les deux options.",
    ],
    relatedLinks: [
      { label: "Vérifier la compatibilité des appareils", href: "/features" },
      { label: "Bien choisir sa configuration IPTV", href: "/blog/bien-choisir-sa-configuration-streaming" },
    ],
  },
];

export const howItWorks = [
  { step: "01", title: "Choisissez votre offre", text: "Comparez les durées et sélectionnez l'option adaptée à votre usage." },
  { step: "02", title: "Recevez vos informations d'activation", text: "Vos instructions de configuration sont envoyées directement par email." },
  { step: "03", title: "Configurez votre appareil", text: "Suivez le guide pas à pas selon votre appareil." },
  { step: "04", title: "Profitez de votre expérience", text: "Votre service est prêt — installez-vous confortablement." },
];
