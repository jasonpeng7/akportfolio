"use client";
import ExperienceCard from "@/components/features/ExperienceCard";

export default function ExperienceList() {
  const experiences = [
    {
      logoSrc: "/jcockerill.png",
      companyName: "John Cockerill",
      title: "Engineering Intern",
      startDate: "June 2025 - September 2025",
      description: "Developed an Automated Proposal Tool",
    },
    {
      logoSrc: "/arms_lab.png",
      companyName: "ARMS Lab UC Davis",
      title: "Undergraduate Research Assistant",
      startDate: "September 2024 - Present",
      description:
        "Acquiring and applying manufacturing expertise in support of Graduate research projects using CNC machines and Computer-Aided Manufacturing (CAM). Currently also working on an AI powered PMI/3D-CAD automation tool for generating useful models using worded prompts to accelerate design processes.",
    },
    {
      logoSrc: "/frucd.png",
      companyName: "Formula Racing at UC Davis",
      title: "Powertrain Engineer",
      startDate: "September 2023 - Present",
      description:
        "Team based practice on various design and manufacturing techniques in the development of an electric vehicle for racing.",
    },
    {
      logoSrc: "/carrier_hvac.png",
      companyName: "Carrier HVAC",
      title: "Engineer Intern",
      startDate: "July 2022 – August 2022",
      description:
        "Shadowed the Design Engineers at the Carrier Shanghai R&D department, exposing me to the use of CAD, FEA, and Coding in their HVAC development process. I was also very lucky to access their testing lab where I learned of manufacturing and assembly processes.",
    },
    {
      logoSrc: "/tech_mahindra.png",
      companyName: "Tech Mahindra",
      title: "Financial Analyst Intern",
      startDate: "August 2022 – August 2022",
      description:
        "Worked as an intern on a project involving the analysis and rectification of large data samples with Python and Microsoft Excel.",
    },
  ];

  return (
    <div className="w-[350px] sm:w-[500px] lg:w-[600px] xl:w-[800px]  mx-auto space-y-[15px] ">
      {experiences.map((exp, idx) => (
        <ExperienceCard
          key={idx}
          logoSrc={exp.logoSrc}
          companyName={exp.companyName}
          title={exp.title}
          startDate={exp.startDate}
          description={exp.description}
        />
      ))}
    </div>
  );
}
