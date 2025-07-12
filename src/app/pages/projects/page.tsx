import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="w-fit poppins-regular text-primary-navy tracking-regular mt-0 mb-1 border-b-1 pb-1 border-primary-grey">
          All Projects
        </h1>
      </div>

      <div className="">
        <h2 className="text-3xl poppins-semibold text-primary-gold mb-6">
          Dive into my experience
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-10 lg:grid-cols-3 xl:grid-cols-4">
          {allProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              name={project.name}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
