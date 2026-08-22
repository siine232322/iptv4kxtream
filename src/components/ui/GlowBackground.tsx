import clsx from "clsx";

export default function GlowBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={clsx("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-blue/15 blur-[100px]" />
      <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-purple/15 blur-[110px]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink/10 blur-[100px]" />
    </div>
  );
}
