/* THE NINTH FOUNDRY — MASTER DATA MANIFEST
   Identity: Sreeshanth Namireddy
   Location: Hyderabad, India
   Verified Content Payload & Archival Record */

window.NF = {
  // Verified contact channels. Sourced directly from Git repository configuration.
  // Missing or unverified channels are strictly null and omitted from the interface.
  links: {
    email: 'namireddysreeshanth@gmail.com', // Verified Git commit author email
    github: 'https://github.com/theninthfoundry', // Verified Git repository owner
    linkedin: null, // Omitted until verified personal URL is supplied
    instagram: null // Omitted until verified personal URL is supplied
  },

  // 02 — SELECTED WORK: Four curated flagship systems.
  // Each project features a distinctive spatial layout, verified description, and destination.
  featuredProjects: [
    {
      n: '001',
      t: 'Veri.fy',
      c: 'AI Systems / Software Verification',
      d: 'A behavioural verification system exploring how changes in AI-generated software can be inspected, compared, and validated.',
      img: 'projects/veri-fy.jpg',
      cls: 'p1',
      year: '2025',
      status: 'Prototype Investigation',
      url: 'https://github.com/theninthfoundry/the-ninth-foundry'
    },
    {
      n: '002',
      t: 'Overcharge Desk',
      c: 'Financial Systems / Evidence',
      d: 'An evidence-driven investigation workflow for identifying, documenting, and resolving potential financial overcharges.',
      img: 'projects/overcharge-desk.jpg',
      cls: 'p2',
      year: '2025',
      status: 'System Architecture',
      url: 'https://github.com/theninthfoundry/the-ninth-foundry'
    },
    {
      n: '003',
      t: 'Veil',
      c: 'AI Agents / Browser Security',
      d: 'An experimental browser-agent perception and safety system designed to examine browser interactions and potential information leakage.',
      img: 'projects/veil.jpg',
      cls: 'p3',
      year: '2025',
      status: 'Security Research',
      url: 'https://github.com/theninthfoundry/the-ninth-foundry'
    },
    {
      n: '004',
      t: 'SatQuery',
      c: 'GEOINT / Satellite Intelligence',
      d: 'An AI-assisted satellite intelligence project exploring geospatial information and multi-spectral change detection.',
      img: 'projects/satquery.jpg',
      cls: 'p4',
      year: '2025',
      status: 'Exploratory Prototype',
      url: 'https://github.com/theninthfoundry/the-ninth-foundry'
    }
  ],

  // 03 — THE INDEX: Complete catalog of secondary projects, tools, and prototypes.
  // ZERO duplication with Selected Work.
  archiveProjects: [
    {
      n: '005',
      t: 'BHOW',
      c: 'Identity / Reunification Registry',
      year: '2024',
      status: 'Concept Prototype',
      img: 'projects/bhow.jpg',
      url: 'https://github.com/theninthfoundry/the-ninth-foundry'
    },
    {
      n: '006',
      t: 'Dreaming Machine',
      c: 'Creative Technology / Experiments',
      year: '2024',
      status: 'Interactive Canvas',
      img: 'projects/dreaming-machine.jpg',
      url: 'https://github.com/theninthfoundry/the-ninth-foundry'
    },
    {
      n: '007',
      t: 'Raksha AI',
      c: 'Cybersecurity & Digital Safety',
      year: '2024',
      status: 'Research Project',
      img: 'projects/raksha.jpg',
      url: 'https://github.com/theninthfoundry/the-ninth-foundry'
    },
    {
      n: '008',
      t: 'CampusBite',
      c: 'Product Engineering & Logistics',
      year: '2023',
      status: 'Application Prototype',
      img: 'projects/campusbite.jpg',
      url: 'https://github.com/theninthfoundry/the-ninth-foundry'
    },
    {
      n: '009',
      t: 'Ride Registry',
      c: 'Database Systems & Fleet Routing',
      year: '2023',
      status: 'Database Schema',
      img: 'projects/rideregistry.jpg',
      url: 'https://github.com/theninthfoundry/the-ninth-foundry'
    }
  ],

  // 04 — THE WORKBENCH: Technical investigations, active studies, and systems under examination.
  workbench: [
    {
      title: '01 — Vector Calibration & Geometry',
      desc: 'SVG calibration blueprint examining dimensional calipers, focal radii, and responsive coordinate mapping.',
      type: 'Active Study',
      blueprint: true
    },
    {
      title: '02 — AI & Intelligent Systems',
      desc: 'Local model quantization, tool use architectures, and behavioral evaluation of agentic reasoning.',
      type: 'Investigation',
      blueprint: false
    },
    {
      title: '03 — Systems Engineering',
      desc: 'Software verification, resilience patterns, fault tolerance, and deterministic execution boundaries.',
      type: 'Research Focus',
      blueprint: false
    },
    {
      title: '04 — Interface Experiments',
      desc: 'Kinematic scroll coupling, vernier physics, micro-interactions, and non-linear archival navigation.',
      type: 'Exploration',
      blueprint: false
    },
    {
      title: '05 — Continuous Investigation',
      desc: 'Raw engineering workshop. Concepts and prototypes are analyzed as active explorations before graduation.',
      type: 'Workbench Policy',
      blueprint: false
    }
  ],

  // 05 — THE COLLECTION: Curated objects, influences, motorsports, and physical curiosities.
  collection: [
    {
      k: 'A',
      t: 'Machines',
      desc: 'Formula 1 suspension geometry, motorsport telemetry, and precision mechanical engineering.',
      cat: 'Motorsport & Mechanical',
      img: 'automotive/machine-01.jpg',
      r: '3:2'
    },
    {
      k: 'B',
      t: 'Visual culture',
      desc: 'Swiss international typography, brutalist architectural monographs, and grid discipline.',
      cat: 'Typography & Form',
      img: 'collection/visual-01.jpg',
      r: '4:5'
    },
    {
      k: 'C',
      t: 'Objects',
      desc: 'Minimalist industrial artifacts, mechanical stopwatches, and functional physical instruments.',
      cat: 'Industrial Design',
      img: 'collection/object-01.jpg',
      r: '1:1'
    },
    {
      k: 'D',
      t: 'Curiosities',
      desc: 'Optical light refraction, computing artifacts, and unconventional physical prototypes.',
      cat: 'Archival Curiosities',
      img: 'collection/curiosity-01.jpg',
      r: '3:2'
    }
  ],

  // Standardized 8-Stage Navigation Model (00 to 07)
  nav: [
    ['Home', '#hero'],
    ['Work', '#work'],
    ['Index', '#archive'],
    ['Workbench', '#workbench'],
    ['Collection', '#collection'],
    ['Human', '#person'],
    ['Contact', '#contact']
  ],

  index: [
    ['00 Intro', '#hero'],
    ['01 Hero', '#hero'],
    ['02 Selected Work', '#work'],
    ['03 Index', '#archive'],
    ['04 Workbench', '#workbench'],
    ['05 Collection', '#collection'],
    ['06 Human', '#person'],
    ['07 Transmission', '#contact']
  ]
};
