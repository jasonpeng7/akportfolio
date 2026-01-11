"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { allProjects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import Sidenav from "@/components/Sidenav";
import MobileHeader from "@/components/MobileHeader";
import MenuOverlay from "@/components/MenuOverlay";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const params = useParams();
  const { slug } = params;

  const project = allProjects.find(
    (p) => p.slug === (Array.isArray(slug) ? slug.join("-") : slug)
  ) as ProjectWithGallery | undefined;

  if (!project) {
    return (
      <div className="min-h-screen">
        <Sidenav />
        <MobileHeader onMenuOpen={() => setMenuOpen(true)} />
        <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        
        <div className="lg:ml-[280px] pt-16 lg:pt-0">
          <div className="flex flex-col items-center justify-center min-h-[50vh] px-6">
            <h1 className="text-2xl font-bold text-primary-navy">Project not found</h1>
            <Link
              href="/pages/projects"
              className="mt-4 text-primary-navy underline"
            >
              Back to Projects
            </Link>
          </div>
        </div>
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
    <div className="min-h-screen">
      <Sidenav />
      <MobileHeader onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <main className="lg:ml-[280px] pt-16 lg:pt-0">
        <div className="px-6 lg:px-16 py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto">
            {/* Back Link */}
            <div className="mb-12">
              <Link
                href="/pages/projects"
                className="text-sm text-primary-navy underline"
              >
                ← Back to all projects
              </Link>
            </div>

            {/* Header Section */}
            <header className="mb-16">
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-xs text-text-secondary">(PROJECT)</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-navy mb-4">
                {displayName}
              </h1>
              <div className="h-px w-24 bg-primary-gold"></div>
            </header>

            {/* Main Image */}
            <div className="mb-12">
              <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={displayName}
                  width={1200}
                  height={675}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Overview */}
            {project.overview && (
              <div className="mb-12 max-w-[860px]">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-text-secondary mb-4">
                  PROJECT OVERVIEW
                </h2>
                <p className="text-lg text-primary-navy leading-relaxed">
                  {project.overview}
                </p>
              </div>
            )}

            {/* PDF Downloads */}
            {pdfResources.length > 0 && (
              <div className="mb-12 max-w-[860px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pdfResources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={`/${resource.url.replace(/^\//, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-4 bg-white border border-gray-200 text-primary-navy underline"
                    >
                      <span className="text-sm font-medium">{resource.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Description / Key Highlights */}
            <div className="mb-20 max-w-[860px]">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-text-secondary mb-8 border-l-2 border-primary-gold pl-4">
                KEY HIGHLIGHTS
              </h3>

              {Array.isArray(project.description) ? (
                <div className="space-y-10">
                  {project.description.map((desc, index) => (
                    <div key={index} className="border-l-2 border-gray-200 pl-8">
                      <h4 className="text-lg font-bold text-primary-navy mb-2">
                        {desc.title}
                      </h4>
                      <p className="text-text-secondary leading-relaxed">
                        {desc.text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 border border-gray-100">
                  <p className="text-base text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>
              )}
            </div>

            {/* Gallery Section */}
            {galleryImages && galleryImages.length > 0 && (
              <div className="pt-16 border-t border-divider">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-text-secondary mb-8">
                  PROJECT GALLERY
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {galleryImages.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] bg-gray-100 overflow-hidden"
                    >
                      <Image
                        src={imgSrc}
                        alt={`${displayName} gallery image ${idx + 1}`}
                        width={600}
                        height={450}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
