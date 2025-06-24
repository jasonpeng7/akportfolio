"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/pages/about", label: "About" },
    { href: "/pages/projects", label: "Projects" },
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
          <Image
            src="/sidenav-left.svg"
            alt="sidenav-left"
            width={24}
            height={24}
          />
        ) : (
          <Image
            src="/sidenav-right.svg"
            alt="sidenav-right"
            width={24}
            height={24}
          />
        )}
      </button>

      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-primary-grey z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="pt-2 px-2 lg:px-4 h-full">
          <h2 className="poppins-semibold text-primary-grey uppercase tracking-regular mb-1 border-b-1 pb-1 border-primary-grey">
            Choose a category
          </h2>
          <nav>
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-1 transition duration-200 text-sm tracking-tight hover:bg-amber-200 hover:text-black ${
                      pathname === link.href
                        ? "text-primary-grey font-semibold"
                        : "text-primary-grey font-thin"
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
