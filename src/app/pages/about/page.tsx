"use client";

import Image from "next/image";
import Link from "next/link";
import ExperienceList from "@/components/ExperienceStack";
import { motion } from "framer-motion";

// animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col p-4 sm:p-6 lg:p-8 mb-[15px] max-w-[800px]">
        <motion.div
          className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-8 items-center lg:items-start justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="lg:pr-8 lg:border-r-2 lg:border-primary-gold"
            variants={itemVariants}
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-64 md:h-64">
              <Image
                src="/atharva.png"
                alt="Atharva Kharwadkar"
                layout="fill"
                objectFit="cover"
                className="rounded-full lg:rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            className="max-w-[300px] md:max-w-[400px] min-h-64 text-center lg:text-left  flex flex-col"
            variants={itemVariants}
          >
            <div className="flex-1">
              <h1 className="lato-bold text-4xl text-primary-navy mb-4">
                Hi, I&apos;m Atharva.
              </h1>
              <p className="text-lg text-medium-blue mb-6 break-words">
                Insert first block for about me here
                dkjasdsadadlsajddsadasdasdsdsadad
              </p>
              <p className="text-lg text-medium-blue mb-6 break-words">
                Insert second block for about me here
                dasdsadjashdjkashdjkasdajhdhkjasjdh
              </p>
            </div>
            <div className="flex justify-center lg:justify-end mt-auto">
              <Link
                href="/resume.pdf"
                className="inline-block bg-primary-gold text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-300 shadow-md"
                download
              >
                Download Resume
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <ExperienceList />
    </main>
  );
}
