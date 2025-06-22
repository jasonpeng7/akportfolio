"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/pages/about", label: "About" },
    { href: "/pages/experience", label: "Experience" },
    { href: "/pages/projects", label: "Projects" },
    { href: "/pages/contact", label: "More Contact" },
  ];

  return (
    <>
      {/* mobile view */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-1/2 left-0 z-50 md:hidden p-2 bg-gray-700 text-white rounded-r-md transform -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-64" : "translate-x-0"
        }`}
        aria-label="Toggle sidenav"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </button>

      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-primary-grey z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="pt-6 px-2 lg:px-4 h-full">
          <h2 className="text-sm lato-regular text-primary-navy uppercase tracking-wider mb-4 border-b-2 pb-6 border-primary-grey">
            Choose a category
          </h2>
          <nav>
            <ul>
              {links.map((link) => (
                <li key={link.href} className="mb-2">
                  <Link
                    href={link.href}
                    className={`lato-thin block py-2 rounded-md transition duration-200 text-base ${
                      pathname === link.href
                        ? "text-primary-gold "
                        : "text-primary-navy hover:text-light-blue"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidenav;
