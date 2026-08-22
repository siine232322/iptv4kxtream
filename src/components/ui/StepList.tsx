export type Step = { title: string; text: string };

export default function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="flex flex-col gap-5">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4 rounded-2xl border border-border bg-white p-5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue text-sm font-extrabold text-white">
            {i + 1}
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-bold text-foreground">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
