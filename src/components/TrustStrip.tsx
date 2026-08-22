import { trustStrip } from "@/lib/data";
import Container from "./ui/Container";

export default function TrustStrip() {
  return (
    <section className="bg-gradient-brand py-6">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:justify-between">
          {trustStrip.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-white">
              <item.icon className="h-5 w-5" strokeWidth={2} />
              <span className="text-sm font-bold uppercase tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
