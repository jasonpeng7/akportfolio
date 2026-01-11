"use client";

import { useState } from "react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";

interface ExperienceCardProps {
  logoSrc: string | ComponentType;
  companyName: string;
  title: string;
  startDate: string;
  description: ReactNode;
}

export default function ExperienceCard({
  logoSrc,
  companyName,
  title,
  startDate,
  description,
}: ExperienceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const LogoElement =
    typeof logoSrc === "string"
      ? () => (
          <Image
            src={logoSrc}
            alt={`${companyName} logo`}
            className="w-12 h-12 object-contain"
            width={100}
            height={100}
          />
        )
      : logoSrc;

  return (
    <div className="w-full py-4 px-4 bg-white border border-gray-200">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex-shrink-0">
          <LogoElement />
        </div>

        <div className="flex-1 mx-4">
          <div className="font-semibold text-primary-navy text-sm md:text-base">
            {companyName}
          </div>
          <div className="text-text-secondary text-xs md:text-sm">{title}</div>
        </div>

        <div className="flex items-center space-x-2 text-text-secondary text-xs md:text-sm">
          <span className="hidden sm:inline">{startDate}</span>
          <svg
            className={`w-4 h-4 ${isOpen ? "transform rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {isOpen && description && (
        <div className="mt-4 px-4 md:px-6">
          <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
}
