"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 border-b-2 border-primary-gold ">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-end justify-between h-20 pb-2">
          <div className="flex-shrink-0">
            <p className="text-3xl poppins-bold text-primary-navy tracking-tighter uppercase">
              <span className="text-3xl">A</span>
              <span className="text-2xl">tharva</span>{" "}
              <span className="text-3xl">K</span>
              <span className="text-2xl">harwadkar</span>
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center space-x-4">
              <a
                href="tel:+14156881534"
                className="text-primary-grey poppins-light text-xs"
              >
                (415) 688-1534
              </a>
              <span className="text-primary-grey text-xs poppins-light">|</span>
              <a
                href="mailto:atharva.kharwadkar@example.com"
                className="text-primary-grey poppins-light text-xs"
              >
                Email me
              </a>
            </div>
            <h3 className="poppins-semibold text-primary-navy text-sm uppercase tracking-wider mb-1">
              Contact Me
            </h3>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a
              href="tel:+911234567890"
              className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              +91 12345 67890
            </a>
            <a
              href="mailto:atharva.kharwadkar@example.com"
              className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
            >
              Email me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
