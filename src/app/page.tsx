"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidenav from "@/components/Sidenav";
import MobileHeader from "@/components/MobileHeader";
import MenuOverlay from "@/components/MenuOverlay";
import { allProjects } from "@/data/projects";
import ExperienceList from "@/components/ExperienceStack";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const featuredProjects = allProjects.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Desktop Sidenav */}
      <Sidenav />

      {/* Mobile Header */}
      <MobileHeader onMenuOpen={() => setMenuOpen(true)} />

      {/* Mobile Menu Overlay */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Main Content Area */}
      <main className="lg:ml-[280px] pt-16 lg:pt-0">
        {/* Top Utility Line */}
        <div className="border-b border-divider px-6 lg:px-16 py-6 lg:py-8">
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary">
              MECHANICAL ENGINEERING STUDENT
            </span>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 bg-green"></span>
              <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary">
                OPEN TO NEW OPPORTUNITIES
              </span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="px-6 lg:px-16 py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-[860px]">
              <h1 className="text-3xl sm:text-5xl lg:text-[56px] leading-[1.2] text-primary-navy mb-12">
                <span className="font-normal">
                  3rd year Mechanical Engineer at UC Davis bridging{" "}
                  <span className="font-bold">precision manufacturing</span>{" "}
                  with <span className="font-bold">ML-driven automation</span>{" "}
                  and controls to develop intelligent, high-performance
                  mechatronic systems. 
                </span>
              </h1>

              {/* CTA Row */}
              <div className="flex flex-wrap gap-6">
                <Link
                  href="#contact"
                  className="text-base text-primary-navy underline"
                >
                  Contact →
                </Link>
                <Link
                  href="/pages/resume-view"
                  className="text-base text-primary-navy underline"
                >
                  View Resume →
                </Link>
                <Link
                  href="/pages/portfolio-view"
                  className="text-base text-primary-navy underline"
                >
                  View Portfolio →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section
          id="projects"
          className="px-6 lg:px-16 py-16 lg:py-24 border-t border-divider"
        >
          <div className="max-w-[1200px] mx-auto">
            {/* Section Header */}
            <div className="flex items-center space-x-4 mb-12">
              <span className="text-xs text-text-secondary">(001)</span>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-text-secondary">
                SELECTED WORK
              </h2>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {featuredProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/pages/projects/${project.slug}`}
                  className="group block"
                >
                  <div className="space-y-4">
                    {/* Image */}
                    <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.name}
                        width={800}
                        height={450}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold uppercase tracking-wide text-primary-navy">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.overview}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Link */}
            <div className="mt-12">
              <Link
                href="/pages/projects"
                className="text-base text-primary-navy underline"
              >
                View All Projects →
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="px-6 lg:px-16 py-16 lg:py-24 border-t border-divider bg-gray-50"
        >
          <div className="max-w-[1200px] mx-auto">
            {/* Section Header */}
            <div className="flex items-center space-x-4 mb-12">
              <span className="text-xs text-text-secondary">(002)</span>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-text-secondary">
                CORE COMPETENCIES
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-primary-navy">
                  CNC Manufacturing
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  High-precision CNC and manual machining to ±0.005&quot; for
                  research and FSAE components.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-primary-navy">
                  SolidWorks
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Parametric CAD for complex mechanical systems with
                  manufacturability in mind.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-primary-navy">GD&T</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Applied GD&T to control variation and ensure functional,
                  reliable assemblies.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-primary-navy">
                  Python
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Automation and engineering tools, including ML-based CAD and
                  rapid quoting systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About/Experience Section */}
        <section
          id="about"
          className="px-6 lg:px-16 py-16 lg:py-24 border-t border-divider"
        >
          <div className="max-w-[1200px] mx-auto">
            {/* Section Header */}
            <div className="flex items-center space-x-4 mb-12">
              <span className="text-xs text-text-secondary">(003)</span>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-text-secondary">
                ABOUT & EXPERIENCE
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 lg:w-64 lg:h-64 overflow-hidden">
                  <Image
                    src="/atharva.png"
                    alt="Atharva Kharwadkar"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* About Text */}
              <div className="flex-1 max-w-[860px]">
                <p className="text-lg text-text-secondary leading-relaxed">
                  A dedicated Mechanical Engineering student with practical
                  experience in CNC machining, CAD design, and research
                  applications. I aim to combine technical programming
                  capabilities with my manufacturing and hardware expertise to
                  optimize processes and performance while meeting precise
                  specifications.
                </p>
              </div>
            </div>

            <div className="">
              <ExperienceList />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="px-6 lg:px-16 py-16 lg:py-24 border-t border-divider"
        >
          <div className="max-w-[1200px] mx-auto">
            {/* Section Header */}
            <div className="flex items-center space-x-4 mb-12">
              <span className="text-xs text-text-secondary">(004)</span>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-text-secondary">
                GET IN TOUCH
              </h2>
            </div>

            <div className="max-w-[600px]">
              <p className="text-2xl text-primary-navy mb-8 leading-relaxed">
                Have a project in mind or want to collaborate? Let&apos;s
                connect.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:atharva.kharwadkar@outlook.com"
                  className="block text-base text-primary-navy underline"
                >
                  atharva.kharwadkar@outlook.com
                </a>
                <a
                  href="tel:+14156881534"
                  className="block text-base text-primary-navy underline"
                >
                  +1 (415) 688-1534
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 lg:px-16 py-8 border-t border-divider">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-xs text-text-secondary">
              © {new Date().getFullYear()}{" "}
              <span className="font-bold">
                <a
                  href="https://vbedesign.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VBE Designs
                </a>
              </span>
              . All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
