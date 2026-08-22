import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "white";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold tracking-wide uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-blue text-white shadow-[0_10px_30px_-10px_rgba(8,120,217,0.55)] hover:bg-blue-dark hover:-translate-y-0.5",
  secondary:
    "border-2 border-blue text-blue bg-white hover:bg-blue/5 hover:-translate-y-0.5",
  ghost: "text-foreground hover:text-blue normal-case font-semibold tracking-normal",
  white:
    "bg-white text-blue-dark shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] hover:-translate-y-0.5",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type,
  external,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}) {
  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
