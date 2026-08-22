import clsx from "clsx";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: As = "h2",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
  light?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider",
            light ? "bg-white/15 text-white" : "bg-blue/10 text-blue"
          )}
        >
          {eyebrow}
        </span>
      )}
      <As
        className={clsx(
          "font-extrabold tracking-tight",
          light ? "text-white" : "text-foreground",
          As === "h1"
            ? "text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08]"
            : "text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight"
        )}
      >
        {title}
      </As>
      {description && (
        <p
          className={clsx(
            "max-w-2xl text-base sm:text-lg leading-relaxed",
            light ? "text-white/85" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
