"use client";

import Image from "next/image";
import Link from "next/link";
import Sidenav from "@/components/Sidenav";
import MobileHeader from "@/components/MobileHeader";
import MenuOverlay from "@/components/MenuOverlay";
import { useState } from "react";

export default function ResumeView() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Sidenav */}
      <Sidenav />

      {/* Mobile Header */}
      <MobileHeader onMenuOpen={() => setMenuOpen(true)} />

      {/* Mobile Menu Overlay */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Main Content Area */}
      <main className="lg:ml-[280px] pt-16 lg:pt-0">
        {/* Header Section */}
        <div className="border-b border-divider px-6 lg:px-16 py-6 lg:py-8 bg-white">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-xs font-semibold tracking-widest uppercase text-text-secondary">
                RESUME
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/resume.docx"
                download
                className="text-sm text-primary-navy underline"
              >
                Download Resume →
              </Link>
            </div>
          </div>
        </div>

        {/* Resume Display Section */}
        <section className="px-6 lg:px-16 py-8 lg:py-12">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-white border border-divider shadow-sm">
              <div className="relative w-full">
                <Image
                  src="/resume-ss.png"
                  alt="Atharva Kharwadkar Resume"
                  width={1200}
                  height={1556}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
