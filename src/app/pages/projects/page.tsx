"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/data/projects";
import Sidenav from "@/components/Sidenav";
import MobileHeader from "@/components/MobileHeader";
import MenuOverlay from "@/components/MenuOverlay";

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Sidenav />
      <MobileHeader onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <main className="lg:ml-[280px] pt-16 lg:pt-0">
        <div className="px-6 lg:px-16 py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-xs text-text-secondary">(001)</span>
                <h1 className="text-xs font-semibold tracking-widest uppercase text-text-secondary">
                  ALL PROJECTS
                </h1>
              </div>
              <h2 className="text-3xl font-bold text-primary-navy mb-4">
                Dive into my project experience.
              </h2>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
      </main>
    </div>
  );
}
