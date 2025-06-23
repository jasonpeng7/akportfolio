import ProjectCategory from "@/components/ProjectCategory";

/* 
***enter project data here***
example:
  {
    category: "Name of Project",
    parts: [
      {
        name: "name of part",
        slug: "this is the link to the part.... MAKE SURE SLUGS ARE UNIQUE",
        imageUrl: "this is the image of the part, add relevant images to public folder",
      },
     ***add more if needed***
    ],
  },
*/
const projectData = [
  {
    category: "Type of Projects #1: Prototypes",
    parts: [
      {
        name: "Part 1",
        slug: "",
        imageUrl: "/filler.jpg",
      },
    ],
  },
  {
    category: "Type of Projects #2: Designs",
    parts: [
      {
        name: "Part 1",
        slug: "",
        imageUrl: "/filler.jpg",
      },
    ],
  },
  {
    category: "Type of Projects #3: Machining",
    parts: [
      {
        name: "Part 1",
        slug: "",
        imageUrl: "/filler.jpg",
      },
    ],
  },
  {
    category: "Type of Projects #4: Simulations",
    parts: [
      {
        name: "Part 1",
        slug: "",
        imageUrl: "/filler.jpg",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-4xl lato-regular tracking-tight text-primary-navy mb-8">
        Projects
      </h1>
      <div>
        {projectData.map((category) => (
          <ProjectCategory
            key={category.category}
            title={category.category}
            parts={category.parts}
          />
        ))}
      </div>
    </div>
  );
}
