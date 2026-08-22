import Image from "next/image";
import { LucideIcon } from "lucide-react";
import clsx from "clsx";

export default function ArtCard({
  icon: Icon,
  title,
  image,
  alt,
  aspect = "aspect-[3/4]",
  size = "md",
}: {
  icon: LucideIcon;
  title: string;
  image: string;
  alt: string;
  aspect?: string;
  size?: "sm" | "md";
}) {
  return (
    <div
      className={clsx(
        "group relative shrink-0 overflow-hidden rounded-2xl shadow-[0_16px_40px_-16px_rgba(6,59,115,0.35)] transition-transform duration-300 hover:-translate-y-1.5 sm:w-full",
        aspect,
        size === "sm" ? "w-32" : "w-40"
      )}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 640px) 40vw, (max-width: 1024px) 22vw, 12vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-between p-4">
        <Icon className="h-7 w-7 text-white/90 drop-shadow" strokeWidth={1.75} />
        <span className="text-sm font-bold text-white drop-shadow">{title}</span>
      </div>
    </div>
  );
}
