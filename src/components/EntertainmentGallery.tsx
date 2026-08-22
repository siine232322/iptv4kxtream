import { entertainmentCategories } from "@/lib/data";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import CategoryCard from "./ui/CategoryCard";

export default function EntertainmentGallery() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Contenus"
          title="Regardez vos contenus préférés à tout moment"
          description="Une sélection variée de catégories, organisées pour être trouvées en quelques secondes."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 xl:grid-cols-8">
          {entertainmentCategories.map((cat) => (
            <CategoryCard
              key={cat.title}
              icon={cat.icon}
              title={cat.title}
              image={cat.image}
              alt={cat.alt}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
