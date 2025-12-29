export const allProjects = [
  {
    name: "DUEN Fall 2025 Cohort Project",
    overview: "Computer Vision–Enabled Interactive Tabling Machine",
    description: [
      {
        title: "Mechanical Design (Lead)",
        text: "Led mechanical design of a portable tabling machine, including chassis layout, access panels, and internal mounting for electronics. Designed for easy transport, maintenance access, and reliable assembly.",
      },
      {
        title: "CAD & Prototyping",
        text: "Created CAD models for the enclosure, door system, prize wheel, and flyer dispensing mechanism. Iterated across multiple prototypes to resolve tolerance issues, print failures, and assembly constraints.",
      },
      {
        title: "Manufacturing & Materials",
        text: "Selected PLA for structural panels and PETG for load-bearing and moving components. Optimized print orientation and tolerances to reduce cracking, warping, and reprints.",
      },
      {
        title: "Mechanisms",
        text: "Designed and implemented a rack-and-pinion flyer dispensing system and motor-driven prize wheel, balancing reliability, simplicity, and space constraints.",
      },
      {
        title: "Integration & Testing",
        text: "Worked closely with electrical and software teams to integrate motors, wiring paths, camera placement, and emergency shutoff features. Supported mechanical troubleshooting during system testing and demos.",
      },
    ],
    slug: "duen-fall-2025-cohort-project",
    imageUrl: "/duen_arcade_machine.png",
    galleryImages: [
      "/duen_arcade_machine.png",
      "/duen_finishing_touches.png",
      "/duen_arty_build.png",
    ],
    pdfUrl: [
      {
        name: "F25 Tabling Assistance Instruction Manual",
        url: "duen_pdf1.pdf",
      },
      { name: "F25 Final Presentations", url: "duen_pdf2.pdf" },
    ],
  },
  {
    name: "(Personal) Hub Motor Project",
    overview:
      "Transferring interest from electro-mechanical engineering into real world applications.",
    description: [
      {
        title: "Design",
        text: "Designing the hub motor components using CAD software, focusing on manufacturability and performance.",
      },
      {
        title: "Simulation",
        text: "Performing FEA and thermal simulations to analyze structural integrity and heat dissipation under load.",
      },
      {
        title: "Prototyping",
        text: "Utilizing 3D printing and manual machining to create functional prototypes for real-world testing and validation.",
      },
    ],
    slug: "hub-motor-project",
    imageUrl: "/hub_motor.png",
  },
  {
    name: "(ARMS) NVD1500 DCG 3-axis CNC Mill Servicing",
    overview:
      "Restoring a DMG Mori CNC mill to full operational status for graduate/undergraduate research opportunities.",
    description: [
      {
        title: "Vice Prototyping",
        text: "Measuring the needs of a vice and testing the efficacy of a 3D-printed prototype.",
      },
      {
        title: "Vice CAM and Machining",
        text: "Machining the Vice on a CNC mill using irregular stock requiring advanced workholding.",
      },
      {
        title: "Repairs & Maintenance",
        text: "Coolant tank cleaning and refilling, as well as system maintenance.",
      },
    ],
    slug: "arms-nvd1500-dcg-3-axis-cnc-mill-servicing",
    imageUrl: "/mill-service.png",
  },
  {
    name: "(ARMS) MicroVu Measurement Systems",
    overview:
      "Applying precision measurement techniques in aid of graduate level manufacturing research at ARMS lab.",
    slug: "microvu-measurement-systems",
    imageUrl: "/microvu.png",
  },
  {
    name: "(FSAE) Machined Parts",
    overview:
      "Applying manual Lathe and Bridgeport Mill manufacturing skills to create steel and aluminum vehicle parts.",
    slug: "machined_parts",
    imageUrl: "/machined-parts.png",
  },
];
