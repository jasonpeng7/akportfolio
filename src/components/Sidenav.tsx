"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/", icon: "→" },
  { label: "About", href: "/#about", icon: "→" },
  { label: "Projects", href: "/#projects", icon: "→" },
  { label: "Skills", href: "/#skills", icon: "→" },
  { label: "Contact", href: "/#contact", icon: "→" },
];

export default function Sidenav() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:w-[280px] lg:border-r border-divider bg-white flex-col justify-between">
      {/* Top Section */}
      <div className="pt-10 px-8">
        <div className="mb-12">
          <h1 className="text-sm font-bold tracking-widest uppercase text-primary-navy">
            ATHARVA KHARWADKAR
          </h1>
        </div>

        {/* Navigation List */}
        <nav>
          <ul className="space-y-3">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between h-12 px-4 ${
                      isActive
                        ? "font-bold text-primary-navy border-l-2 border-primary-navy -ml-[2px]"
                        : "font-normal text-text-secondary"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-primary-grey">{item.icon}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Bottom Utility Block */}
      <div className="pb-10 px-8 space-y-6">
        <div className="space-y-4">
          {/* Availability Status */}
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 bg-green"></span>
            <span className="text-xs text-text-secondary">
              Available for Work
            </span>
          </div>

          {/* View Resume Link */}
          <Link
            href="/pages/resume-view"
            className="block text-sm text-primary-navy underline"
          >
            View Resume →
          </Link>

          {/* Contact prompt */}
          <p className="text-xs text-text-secondary leading-relaxed">
            Have a project in mind? Let&apos;s chat
          </p>

          <Link
            href="/#contact"
            className="block text-sm text-primary-navy underline"
          >
            Contact →
          </Link>
        </div>

        {/* Social Link */}
        <div className="pt-4">
          <a
            href="https://www.linkedin.com/in/atharvakharwadkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 border border-primary-grey text-primary-navy"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
