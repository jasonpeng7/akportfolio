import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  slug: string;
  name: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ slug, name, imageUrl }) => {
  return (
    <Link href={`/pages/projects/${slug}`}>
      <div className="max-w-[75px] max-h-[75px] group block ">
        <div className=" w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            width={50}
            height={50}
            className="h-full w-full object-cover object-center aspect-square border border-primary-grey"
          />
        </div>
        <p className="lato-regular mt-2 block truncate text-sm font-medium text-primary-grey">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
