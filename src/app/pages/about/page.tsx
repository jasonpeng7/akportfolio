"use client";

import Image from "next/image";
import Link from "next/link";
import ExperienceList from "@/components/ExperienceStack";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col p-4 sm:p-6 lg:p-8 mb-[15px] max-w-[800px]">
        <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-8 items-center lg:items-start justify-center">
          <div className="lg:pr-8 lg:border-r-2 lg:border-primary-gold">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-64 md:h-64">
              <Image
                src="/atharva.png"
                alt="Atharva Kharwadkar"
                layout="fill"
                objectFit="cover"
                className="rounded-full lg:rounded-lg"
              />
            </div>
          </div>

          <div className="max-w-[300px] md:max-w-[400px] min-h-64 text-center lg:text-left  flex flex-col">
            <div className="flex-1">
              <h1 className="poppins-bold text-4xl text-primary-navy mb-4">
                Hi, I&apos;m Atharva.
              </h1>
              <p className="poppins-regular text-lg text-medium-blue mb-6 break-words">
                Insert first block for about me here
              </p>
              <p className="poppins-regular text-lg text-medium-blue mb-6 break-words">
                Insert second block for about me here
              </p>
            </div>
            <div className="flex justify-center lg:justify-end mt-auto">
              <Link
                href="/resume.pdf"
                className="poppins-semibold inline-block bg-primary-gold text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-300 shadow-md"
                download
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ExperienceList />
    </main>
  );
}
