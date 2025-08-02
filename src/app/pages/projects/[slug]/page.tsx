"use client";

import { useParams } from "next/navigation";
import { allProjects } from "@/data/projects";
import Image from "next/image";

export default function ProjectPartPage() {
  const params = useParams();
  const { slug } = params;

  const project = allProjects.find(
    (p) => p.slug === (Array.isArray(slug) ? slug.join("-") : slug)
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  const displayName = project.name.replace(/\(.*\)\s*/, "");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <h1 className="text-center text-3xl sm:text-4xl poppins-bold tracking-tight text-primary-navy mb-12">
        {displayName}
      </h1>

      {/* Overview Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12 border border-primary-gold p-3">
        <div className="flex flex-row">
          {/* Image */}
          <div className="w-full md:w-64 md:flex-shrink-0 flex items-center justify-center">
            <div className="relative h-32 w-full md:h-full">
              <Image
                src={project.imageUrl}
                alt={displayName}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          {/* Text */}
          <div className="p-6 sm:p-8 flex-grow">
            <h2 className="text-lg sm:text-xl poppins-semibold text-primary-navy mb-2">
              Project Overview
            </h2>
            <p className="text-base text-gray-600 max-w-[150px] sm:max-w-[300px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]">
              {project.overview}
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-8">
        {Array.isArray(project.description) ? (
          <div className="relative border-l-2 border-gray-200 ml-4">
            {project.description.map((desc, index) => (
              <div key={index} className="mb-8 ml-8">
                <span className="absolute -left-[11px] top-1 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-4 ring-white">
                  <svg
                    className="w-3 h-3 text-blue-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 10a10 10 0 11-20 0 10 10 0 0120 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h2 className="text-xl poppins-semibold text-primary-navy">
                  {desc.title}
                </h2>
                <p className="mt-2 text-gray-600 ">{desc.text}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p className="text-lg text-gray-600">{project.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
