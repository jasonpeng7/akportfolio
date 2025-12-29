"use client";

import { useParams } from "next/navigation";
import { allProjects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

// Define interface for PDF object
interface PdfResource {
  name: string;
  url: string;
}

// Define interface for Project type extension
interface ProjectWithGallery {
  name: string;
  slug: string;
  imageUrl: string;
  overview?: string;
  description: string | { title: string; text: string }[];
  galleryImages?: string[];
  pdfUrl?: string | string[] | PdfResource[];
}

export default function ProjectPartPage() {
  const params = useParams();
  const { slug } = params;

  const project = allProjects.find(
    (p) => p.slug === (Array.isArray(slug) ? slug.join("-") : slug)
  ) as ProjectWithGallery | undefined;

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold text-gray-800">Project not found</h1>
        <Link
          href="/pages/projects"
          className="mt-4 text-primary-navy hover:text-primary-gold underline"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  // Helper to remove parenthetical prefixes for display
  const displayName = project.name.replace(/\(.*\)\s*/, "");

  // Helper to check if galleryImages exists on the project object
  const galleryImages = project.galleryImages;

  // Normalize pdfUrl to an array of PdfResource objects
  const pdfResources: PdfResource[] = project.pdfUrl
    ? Array.isArray(project.pdfUrl)
      ? project.pdfUrl.map((item) =>
          typeof item === "string"
            ? { name: "View PDF", url: item }
            : (item as PdfResource)
        )
      : typeof project.pdfUrl === "string"
      ? [{ name: "View PDF", url: project.pdfUrl }]
      : []
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/pages/projects"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary-navy transition-colors duration-200"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to all projects
        </Link>
      </div>

      {/* Header Section */}
      <header className="mb-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl poppins-bold tracking-tight text-primary-navy mb-6">
          {displayName}
        </h1>
        <div className="h-1 w-24 bg-primary-gold mx-auto rounded-full"></div>
      </header>

      {/* Main Content (Image & Overview & PDF) */}
      <div className="flex flex-col items-center mb-20 max-w-6xl mx-auto">
        {/* Project Image */}
        <div className="w-full max-w-4xl mb-8">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden ring-1 ring-gray-900/5 bg-gray-50">
            <Image
              src={project.imageUrl}
              alt={displayName}
              layout="fill"
              className="object-cover md:object-contain"
              priority
            />
          </div>
        </div>

        {/* Overview and PDF Container */}
        <div className="w-full max-w-4xl space-y-6">
          {/* Project Overview */}
          <div className="w-full">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h2 className="text-sm font-bold tracking-widest text-primary-gold uppercase mb-3">
                Project Overview
              </h2>
              <p className="text-lg md:text-xl text-primary-navy leading-relaxed font-medium">
                {project.overview}
              </p>
            </div>
          </div>

          {/* PDF Download Tabs */}
          {pdfResources.length > 0 && (
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pdfResources.map((resource, idx) => (
                  <a
                    key={idx}
                    href={`/${resource.url.replace(/^\//, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-14 flex flex-row items-center justify-center px-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-primary-gold hover:text-primary-gold transition-all duration-200 group"
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-gray-400 group-hover:text-primary-gold transition-colors duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="font-semibold text-primary-navy group-hover:text-primary-gold truncate">
                      {resource.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Description / Timeline Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <h3 className="text-2xl poppins-bold text-primary-navy mb-10 border-l-4 border-primary-gold pl-4">
          Key Highlights
        </h3>

        {Array.isArray(project.description) ? (
          <div className="relative border-l-2 border-gray-200 ml-3 sm:ml-6 space-y-12">
            {project.description.map((desc, index) => (
              <div key={index} className="relative pl-8 sm:pl-12">
                {/* Timeline Dot (Static, no hover effects) */}
                <span className="absolute -left-[9px] top-1.5 h-5 w-5 rounded-full border-4 border-white bg-primary-gold shadow-sm ring-1 ring-gray-300"></span>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                  <h4 className="text-xl poppins-bold text-primary-navy">
                    {desc.title}
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {desc.text}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl border border-gray-100">
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>
        )}
      </div>

      {/* Gallery Section - Only renders if images exist */}
      {galleryImages && galleryImages.length > 0 && (
        <div className="max-w-7xl mx-auto mt-20 pt-16 border-t border-gray-200">
          <h3 className="text-3xl poppins-bold text-primary-navy mb-12 text-center">
            Project Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((imgSrc, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={imgSrc}
                  alt={`${displayName} gallery image ${idx + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-navy/0 group-hover:bg-primary-navy/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
