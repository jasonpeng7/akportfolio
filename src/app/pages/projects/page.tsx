import ProjectCard from "@/components/ProjectCard";

const allProjects = [
  { name: "Project1", slug: "test-1", imageUrl: "/filler.jpg" },
  { name: "Project2", slug: "test-2", imageUrl: "/filler.jpg" },
  { name: "Project3", slug: "test-3", imageUrl: "/filler.jpg" },
  { name: "Project4", slug: "test-4", imageUrl: "/filler.jpg" },
];

export default function ProjectsPage() {
  return (
    <div className="">
      <h1 className="w-fit poppins-semibold text-primary-grey uppercase tracking-regular mt-0 mb-1 border-b-1 pb-1 border-primary-grey">
        All Projects
      </h1>
      <div className="grid grid-cols-1 sm:flex sm:flex-row gap-6">
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
  );
}
