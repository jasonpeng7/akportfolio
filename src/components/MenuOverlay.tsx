"use client";

import Link from "next/link";
import { useEffect } from "react";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Home", href: "/", icon: "→" },
  { label: "About", href: "/#about", icon: "→" },
  { label: "Projects", href: "/#projects", icon: "→" },
  { label: "Skills", href: "/#skills", icon: "→" },
  { label: "Contact", href: "/#contact", icon: "→" },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("menu-open");
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-white z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="h-full flex flex-col p-8">
        {/* Close Button */}
        <div className="flex justify-end mb-12">
          <button
            onClick={onClose}
            className="text-sm font-medium text-primary-navy uppercase px-4 py-2 border border-primary-grey min-h-[44px]"
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between text-xl font-medium text-primary-navy"
                >
                  <span>{item.label}</span>
                  <span className="text-primary-grey">{item.icon}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Links */}
        <div className="pt-8 space-y-4">
          {/* Resume Link */}
          <Link
            href="/pages/resume-view"
            onClick={onClose}
            className="block text-sm text-primary-navy underline"
          >
            View Resume →
          </Link>

          {/* Social Link */}
          <div>
            <a
              href="https://www.linkedin.com/in/atharva-kharwadkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border border-primary-grey text-primary-navy"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
