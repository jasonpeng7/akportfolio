"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ExperienceList from "@/components/ExperienceStack";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fullText = {
    section1:
      "As an engineering intern and undergraduate research assistant, I apply my skills in design and manufacturing to develop innovative solutions. I have experience with CNC machines, CAM, CAD, and FEA from my work at ARMS Lab and Carrier HVAC.",
    section2:
      "I am also developing an AI-powered tool for automating PMI/3D-CAD to accelerate design processes, demonstrating my interest in leveraging technology to solve engineering challenges. My experience with Formula Racing at UC Davis has further honed my design and manufacturing techniques for electric vehicles.",
  };

  return (
    <div className="flex flex-col items-center w-full min-w-[350px] pb-[30px]">
      <div className="flex flex-col p-4 sm:p-6 lg:p-8 mb-[15px] w-full max-w-[800px]">
        <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-8 items-center lg:items-start justify-center">
          <div className="lg:pr-8 lg:border-r-2 lg:border-primary-gold">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64">
              <Image
                src="/atharva.png"
                alt="Atharva Kharwadkar"
                layout="fill"
                objectFit="cover"
                className="rounded-full lg:rounded-lg"
              />
            </div>
          </div>

          <div className="w-full text-center lg:text-left flex flex-col">
            <div className="flex-1">
              <h1 className="poppins-bold text-4xl text-primary-navy mb-4">
                Hi, I&apos;m Atharva.
              </h1>
              <p className="poppins-regular text-lg text-medium-blue mb-6 break-words">
                As an engineering intern and undergraduate researcher, I apply
                design and manufacturing skills to create practical, innovative
                solutions.
              </p>
              <p className="poppins-regular text-lg mb-1 text-medium-blue break-words">
                I&apos;m also building an AI-powered tool to automate PMI/3D-CAD
                workflows, streamlining the design process through technology.
              </p>
              <div className="flex justify-center lg:justify-end mb-6">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="poppins-regular text-primary-grey rounded-lg hover:text-yellow-600 transition-colors duration-300 text-sm"
                >
                  Read More
                </button>
              </div>
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

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        Built by{" "}
        <a
          href="https://vbedesign.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-navy hover:text-primary-gold transition-colors duration-200"
        >
          Vibe Design
        </a>{" "}
        © {new Date().getFullYear()}
      </footer>

      {/* Side Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 z-50">
          <div
            className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
              isModalOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="h-full flex flex-col">
              <div className="p-[7.8px] flex justify-between items-end border-b-2 border-primary-gold">
                <div className="pt-7 flex-shrink min-w-0">
                  <p className="text-xl sm:text-3xl poppins-bold text-primary-navy tracking-tighter uppercase">
                    <span className="text-2xl sm:text-3xl">A</span>
                    <span className="text-md sm:text-2xl">bout</span>{" "}
                    <span className="text-2xl sm:text-3xl">M</span>
                    <span className="text-md sm:text-2xl">e</span>
                  </p>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-xs poppins-regular"
                >
                  Collapse
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  <p className="poppins-regular text-lg text-medium-blue leading-relaxed">
                    {fullText.section1}
                  </p>
                  <p className="poppins-regular text-lg text-medium-blue leading-relaxed">
                    {fullText.section2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
