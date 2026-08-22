import { AlertTriangle } from "lucide-react";

export type TroubleshootItem = { problem: string; solution: string };

export default function TroubleshootList({ items }: { items: TroubleshootItem[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div key={item.problem} className="rounded-2xl border border-border bg-surface p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-blue" strokeWidth={2} />
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-bold text-foreground">{item.problem}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.solution}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
