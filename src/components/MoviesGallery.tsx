import { moviesGallery } from "@/lib/data";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import ArtCard from "./ui/ArtCard";

export default function MoviesGallery() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Films & Séries"
          title="Films & Séries en streaming"
          description="Des genres variés pour tous les goûts, avec une lecture adaptée à votre appareil."
        />

        <div className="no-scrollbar -mx-5 flex gap-4 overflow-x-auto px-5 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-8">
          {moviesGallery.map((movie) => (
            <ArtCard
              key={movie.title}
              icon={movie.icon}
              title={movie.title}
              image={movie.image}
              alt={movie.alt}
              aspect="aspect-[2/3]"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
