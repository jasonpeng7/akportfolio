export const allProjects = [
  {
    name: "Formula Racing UC Davis",
    overview:
      "Design, manufacturing, and optimization of high-performance Formula SAE vehicle components with emphasis on precision machining, structural efficiency, and drivetrain innovation.",
    description: [
      {
        title: "Manufacturing Optimization",
        text: "Introduced CNC machining workflows that reduced component production time by up to 92%, decreasing manufacturing cycles from hours to minutes.",
      },
      {
        title: "Structural Design & Simulation",
        text: "Designed lightweight components with up to 10% mass reduction while maintaining a Factor of Safety above 2 using SolidWorks FEA and topology optimization.",
      },
      {
        title: "Precision Machining",
        text: "Manufactured critical components on manual lathe and mill within tolerances as tight as 0.005” to ensure accurate assembly and performance reliability.",
      },
      {
        title: "Technical Documentation",
        text: "Created GD&T-controlled production drawings submitted to Formula SAE design competitions evaluated by the Society of Automotive Engineers.",
      },
      {
        title: "Drivetrain Development",
        text: "Led drivetrain sub-team collaboration on research and implementation of a 4-wheel drive hub motor system, resulting in a ~1 second improvement in endurance and autocross lap time simulations.",
      },
    ],
    imageUrl: "/formula-racing.jpg",
    slug: "formula-racing-ucd",
    galleryImages: ["/formula-racing-1.jpg"],
  },
  {
    name: "Computer Vision Arcade Machine",
    overview:
      "Development of a mechanically complex, computer vision–enabled arcade system integrating precision mechanisms, embedded hardware, and optimized prototyping workflows.",
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
    name: "Hub Motor Project",
    overview:
      "Design and simulation of a high-performance electric hub motor system emphasizing electromagnetic efficiency, manufacturability, and future control integration.",
    description: [
      {
        title: "Electromagnetic Design",
        text: "Engineered hub motor components in CAD and utilized Ansys Maxwell to simulate torque generation and minimize magnetic disturbances.",
      },
      {
        title: "Simulation-to-Manufacturing Workflow",
        text: "Developed an iterative design-to-manufacture process leveraging rapid prototyping to validate simulation results through physical testing.",
      },
      {
        title: "Control Architecture",
        text: "Architected a hardware control strategy supporting future torque-vectoring capabilities through microcontroller-based power distribution.",
      },
    ],
    slug: "hub-motor-project",
    imageUrl: "/hub-motor.jpg",
  },
  {
    name: "Metal Gyroscope",
    overview:
      "Design and fabrication of a high-precision metal gyroscope assembly focused on tolerance control, mass distribution, and rotational performance.",
    description: [
      {
        title: "Mechanical Design",
        text: "Designed the complete gyroscope assembly in SolidWorks, performing interference checks and tolerance analysis.",
      },
      {
        title: "Production Drawings",
        text: "Created GD&T-standardized production drawings to ensure seamless assembly between press-fit spindle and machined frame.",
      },
      {
        title: "CAM Programming",
        text: "Programmed complex Fusion 360 CAM toolpaths for a vacated frame geometry and custom-banked rotor surface to optimize mass distribution.",
      },
      {
        title: "Fabrication & Testing",
        text: "Executed CNC milling, precision turning, and structural welding to produce a gyroscope achieving over 2 minutes of continuous spin time.",
      },
    ],
    slug: "metal-gyroscope",
    imageUrl: "/metal-gyroscope.jpg",
    galleryImages: [
      "/metal-gyroscope-1.png",
      "/metal-gyroscope-2.png",
      "/metal-gyroscope-3.jpg",
    ],
  },
  {
    name: "Precision Manufacturing",
    overview:
      "Application of advanced machining, CAM automation, and simulation techniques to produce high-accuracy mechanical components.",
    description: [
      {
        title: "Hands-On Machining",
        text: "Applied CNC machining alongside manual lathe and mill operations to fabricate precision components.",
      },
      {
        title: "CAM Automation",
        text: "Implemented CAM workflows to enhance production accuracy and automate manufacturing processes.",
      },
      {
        title: "Simulation-Guided Optimization",
        text: "Applied FEA to components under load to identify opportunities for material reduction while maintaining high safety factors.",
      },
    ],
    slug: "precision-manufacturing",
    imageUrl: "/precision-manufacturing.jpg",
  },
  {
    name: "Signal Conditioning",
    overview:
      "Design and implementation of a signal conditioning system converting analog sensor data into calibrated digital outputs.",
    description: [
      {
        title: "Circuit Design",
        text: "Designed and assembled a precision signal conditioning circuit utilizing a Wheatstone Bridge and operational amplifiers.",
      },
      {
        title: "Calibration & Accuracy",
        text: "Calibrated the hardware assembly to map small analog voltage changes to a visible digital 7-segment LED output.",
      },
      {
        title: "Embedded Logic",
        text: "Implemented Boolean logic in Python on a Raspberry Pi to control and display conditioned sensor data.",
      },
    ],
    slug: "signal-conditioning",
    imageUrl: "/signal-conditioning.jpg",
  },
  {
    name: "Micro-Vu Precision Measurement",
    overview:
      "Execution of high-precision measurement and data analysis workflows supporting graduate-level Directed Energy Deposition research.",
    description: [
      {
        title: "Precision Measurement",
        text: "Performed precision measurement workflows to validate geometric accuracy and material transformations in metal additive manufacturing.",
      },
      {
        title: "Data Analysis & Visualization",
        text: "Synthesized raw DED process data into high-fidelity visualizations for comparative analysis.",
      },
      {
        title: "Research Validation",
        text: "Contributed validated results supporting cross-institutional research presentations.",
      },
    ],
    slug: "micro-vu-precision-measurement",
    imageUrl: "/microvu.jpg",
    galleryImages: ["/microvu-1.jpg"],
  },

  {
    name: "FER2013 Machine Learning Coding Competition Attempt",
    overview:
      "Development and evaluation of a facial expression classification model with emphasis on preprocessing, diagnostics, and visualization.",
    description: [
      {
        title: "Model Development",
        text: "Engineered a facial expression classifier using Python and NumPy, achieving 97% training accuracy on the FER2013 dataset.",
      },
      {
        title: "Performance Analysis",
        text: "Analyzed confusion matrices and loss curves to diagnose overfitting and identify a 42% validation accuracy gap.",
      },
      {
        title: "Visualization Tools",
        text: "Developed custom visualization tools to display predictive certainty and randomized validation samples.",
      },
    ],
    slug: "fer2013-ml-competition",
    imageUrl: "/machine-learning.jpg",
  },
];
