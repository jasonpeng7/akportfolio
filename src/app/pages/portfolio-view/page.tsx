"use client";

import Image from "next/image";
import Link from "next/link";
import Sidenav from "@/components/Sidenav";
import MobileHeader from "@/components/MobileHeader";
import MenuOverlay from "@/components/MenuOverlay";
import { useState } from "react";

export default function PortfolioView() {
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
                PORTFOLIO
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/portfolio.pdf"
                download
                className="text-sm text-primary-navy underline"
              >
                Download Portfolio →
              </Link>
            </div>
          </div>
        </div>

        {/* Portfolio Display Section */}
        <section className="px-6 lg:px-16 py-8 lg:py-12">
          <div className="max-w-[1200px] mx-auto space-y-8">
            {/* First Portfolio Image */}
            <div className="bg-white border border-divider shadow-sm">
              <div className="relative w-full">
                <Image
                  src="/portfolio-ss1.png"
                  alt="Atharva Kharwadkar Portfolio - Page 1"
                  width={1200}
                  height={1556}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Second Portfolio Image */}
            <div className="bg-white border border-divider shadow-sm">
              <div className="relative w-full">
                <Image
                  src="/portfolio-ss2.png"
                  alt="Atharva Kharwadkar Portfolio - Page 2"
                  width={1200}
                  height={1556}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

