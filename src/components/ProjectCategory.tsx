import ProjectCard from "./ProjectCard";

interface Part {
  name: string;
  slug: string;
  imageUrl: string;
}

interface ProjectCategoryProps {
  title: string;
  parts: Part[];
}

const ProjectCategory: React.FC<ProjectCategoryProps> = ({ title, parts }) => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl lato-regular tracking-tight text-primary-navy mb-2">
        {title}
      </h2>
      <div className="w-24 h-1 bg-primary-gold mb-8"></div>
      <div className="flex flex-row gap-2 md:gap-6">
        {parts.map((part) => (
          <ProjectCard
            key={part.slug}
            slug={part.slug}
            name={part.name}
            imageUrl={part.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectCategory;
