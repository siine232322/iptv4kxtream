import { qualityStats } from "@/lib/data";
import Container from "./ui/Container";

export default function StatsBar() {
  return (
    <section className="bg-[#F5F8FF] py-10 sm:py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {qualityStats.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center gap-2 text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue shadow-sm">
                <stat.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="text-base font-extrabold leading-tight text-foreground sm:text-lg">
                {stat.value}
              </span>
              <span className="text-xs leading-tight text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
