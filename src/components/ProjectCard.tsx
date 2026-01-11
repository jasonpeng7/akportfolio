import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  slug: string;
  name: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ slug, name, imageUrl }) => {
  return (
    <Link href={`/pages/projects/${slug}`} className="group block">
      <div className="space-y-4">
        {/* Image */}
        <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold uppercase tracking-wide text-primary-navy">
          {name}
        </h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
