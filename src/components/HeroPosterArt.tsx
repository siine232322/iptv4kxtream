import Image from "next/image";

export default function HeroPosterArt() {
  return (
    <div className="mx-auto w-full max-w-[720px] lg:mx-0 lg:ml-auto">
      <Image
        src="/images/hero-tv-full.jpg"
        alt="Smart TV affichant l'interface StreamCrest TV avec le contenu vedette Action Night et les recommandations Live TV, Films, Séries, Sport, Documentaires et Enfants"
        width={1536}
        height={1024}
        priority
        sizes="(max-width: 1024px) 90vw, 720px"
        className="h-auto w-full"
      />
    </div>
  );
}
