"use client";
import ExperienceCard from "@/components/features/ExperienceCard";

export default function ExperienceList() {
  const experiences = [
    {
      logoSrc: "/filler.jpg",
      companyName: "Company1",
      title: "Role",
      startDate: "September 2024",
      description: "Worked on...",
    },
    {
      logoSrc: "/filler.jpg",
      companyName: "Company2",
      title: "Role",
      startDate: "September 2024",
      description: "Worked on...",
    },
    {
      logoSrc: "/filler.jpg",
      companyName: "Company3",
      title: "Role",
      startDate: "August 2023",
      description: "Worked on...",
    },
  ];

  return (
    <div className="w-[400px] sm:w-[500px] lg:w-[600px] xl:w-[800px]  mx-auto space-y-[15px] ">
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
