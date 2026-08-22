import Image from "next/image";
import { LucideIcon } from "lucide-react";

export default function CategoryCard({
  icon: Icon,
  title,
  image,
  alt,
}: {
  icon: LucideIcon;
  title: string;
  image: string;
  alt: string;
}) {
  return (
    <div
      className="group relative mx-auto w-full max-w-[180px] overflow-hidden rounded-2xl shadow-[0_8px_24px_-12px_rgba(6,59,115,0.25)] transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_16px_32px_-14px_rgba(6,59,115,0.35)]"
      style={{ aspectRatio: "9 / 13" }}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 180px"
        loading="lazy"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
      />
      <span className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm">
        <Icon className="h-3.5 w-3.5" strokeWidth={2} />
      </span>
      <span className="absolute bottom-3 left-3 text-sm font-bold text-white drop-shadow">
        {title}
      </span>
    </div>
  );
}
