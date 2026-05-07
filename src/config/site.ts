import { cargoExpertiseItems } from "../data/home/cargo-expertise";
import { fleetOverviewGroups } from "../data/home/fleet-overview";
import { latestNewsItems } from "../data/home/latest-news";
import { projectOverviewItems } from "../data/home/project-overview";
import type {
  CargoExpertiseSection,
  FleetOverviewSection,
  LatestNewsSection,
  ProjectOverviewSection,
} from "../data/home/types";

const fleetOverview: FleetOverviewSection = {
  eyebrow: "Fleet",
  title: "Overview",
  sectionId: "fleet-overview",
  returnQueryKey: "returnTo",
  storageKey: "homeSection",
  videoMp4:
    "https://res.cloudinary.com/druseaf0p/video/upload/q_auto/f_auto/v1776007388/HML_video_website_gef0ny.mp4",
  videoWebm:
    "https://res.cloudinary.com/druseaf0p/video/upload/q_auto/f_auto/v1776007388/HML_video_website_gef0ny.mp4",
  groups: fleetOverviewGroups,
};

const cargoExpertise: CargoExpertiseSection = {
  sectionId: "cargo-expertise",
  sideLabel: "Our Cargo Expertise",
  items: cargoExpertiseItems,
};

const projectOverview: ProjectOverviewSection = {
  sectionId: "project-overview",
  eyebrow: "PROJECTS",
  title: "OVERVIEW",
  items: projectOverviewItems,
};

const latestNews: LatestNewsSection = {
  sectionId: "latest-news",
  returnQueryKey: "returnTo",
  storageKey: "homeSection",
  backgroundImage: "/news/background/newsbackground.jpeg",
  pageSize: 10,
  items: latestNewsItems,
};

const fleet = {
  descriptionParagraphs: [
    "At HML, we deliver flexible and cost-effective transport solutions by leveraging the expansive deck space of our vessels, maximizing cargo capacity in a single shipment. Designed with high deck load strength and an open-stern configuration, our vessels enable loading and discharging from both the stern and sides. A key advantage of the HML fleet is the shallow vessel draft, allowing access to ports with limited water depth, eliminating the need for spacer barges or additional floating equipment.",
    "All vessels operated by HML adhere to international ship and crew management standards, including ISM, OSAS, and CMID. They are asbestos-free and meet the highest quarantine and environmental regulations, ensuring safe, efficient, and sustainable operations.",
  ],
  visibleTabs: [
    { value: "megacaravan", label: "MEGA CARAVAN", weight: "16,200mt" },
    { value: "megacaravan2", label: "MEGA CARAVAN 2", weight: "17,700mt" },
    { value: "cydf", label: "CYDF", weight: "25,163mt" },
    { value: "nb", label: "NB", weight: "22,745mt" },
  ],
  specificationLabels: {
    ballastcapacity: "Ballast capacity",
    breadth: "Breadth",
    deadweight: "Deadweight",
    depth: "Depth",
    draft: "Draft",
    freedeck: "Free deck",
    loa: "LOA",
    propulsion: "Propulsion",
    speed: "Speed",
  },
  items: [
    {
      id: "megacaravan",
      name: "Mega Caravan",
      weight: "16,200mt",
      image: "https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754558777/VESSELS-01_zeu8rn.png",
      loa: "163.8m",
      breadth: "54.0m",
      freedeck: "140.0m x 54.0m",
      depth: "10.5m (wide deck)",
      draft: "6.0m",
      deadweight: "16,200mt",
      speed: "12.0 knot",
      propulsion: "3,900 kw x 2 set",
      ballastcapacity: "Pump 4 ea x 2,500 m3/hr",
      ga: "/MC_GA.pdf",
      description:
        "Mega Caravan is a highly efficient vessel with expansive deck space and shallow draft for challenging ports.",
      fleetProjects: [
        { projectName: "Ship Block Transportation (CVC)", projectId: "11" },
        { projectName: "Equinor Gina Krog", projectId: "14" },
        { projectName: "East Anglia ONE", projectId: "10" },
        { projectName: "Chevron Gorgon LNG", projectId: "16" },
      ],
    },
    {
      id: "megacaravan2",
      name: "Mega Caravan 2",
      weight: "17,700mt",
      image: "https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754558777/VESSELS-02_gpugbp.png",
      loa: "163.8m",
      breadth: "42.0m (mld) / 47.0m (max)",
      freedeck: "140.0m x 47.0m",
      depth: "9.5m",
      draft: "6.0m",
      deadweight: "17,700mt",
      speed: "12.0 knot",
      propulsion: "3,900 kw x 2 set",
      ballastcapacity: "Pump 4 ea x 2,500 m3/hr",
      ga: "/MC2_GA.pdf",
      description:
        "Mega Caravan 2 offers enhanced deck load strength and side-loading capabilities.",
      fleetProjects: [
        { projectName: "Linde Project", projectId: "8" },
        { projectName: "DEME CVOW Project", projectId: "3", image: "/projects/DEME_CVOW_Project.webp" },
        { projectName: "Gallaf 1 Project", projectId: "9" },
        { projectName: "Gallaf 3 Project", projectId: "5" },
        { projectName: "Marjan Project", projectId: "6" },
        { projectName: "RTG Transportation", projectId: "7" },
        { projectName: "P78 Project", projectId: "4", image: "/projects/P78_Project.webp" },
        { projectName: "P83 Project", projectId: "2", image: "/projects/P83PROJECT.jpg" },
        { projectName: "Empire Wind 1", projectId: "1", image: "/projects/EmpireWind1.jpg" },
      ],
    },
    {
      id: "megatrust",
      name: "Mega Trust",
      weight: "19,200mt",
      image: "https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754558777/VESSELS-04_sagdrk.png",
      loa: "148.0m",
      breadth: "50.0m",
      freedeck: "124.0m x 50.0m",
      depth: "9.5m",
      draft: "5.8m",
      deadweight: "19,200mt",
      speed: "12.0 knot",
      propulsion: "3,900 kw x 2 set",
      ballastcapacity: "Pump 6 ea x 2,500 m3/hr",
      ga: "/MT_GA.pdf",
      description:
        "Mega Trust is designed for flexible and cost-efficient marine transportation.",
      fleetProjects: [
        { projectName: "Ship Block Transportation (CVC)", projectId: "11" },
        { projectName: "Equinor Johan Sverdrup Project", projectId: "12" },
        { projectName: "Brazil Petrobras Tupi FPSO", projectId: "13" },
        { projectName: "Dismantled Crane Project" },
      ],
    },
    {
      id: "megapassion",
      name: "Mega Passion",
      weight: "52,300mt",
      image: "https://res.cloudinary.com/dkxoyiqfj/image/upload/v1754558776/VESSELS-03_mta5gv.png",
      loa: "203.0m",
      breadth: "63.0m",
      freedeck: "170.7m x 63.0m",
      depth: "11.0m",
      draft: "8.2m (23.7m)",
      deadweight: "52,300mt",
      speed: "12.0 knot",
      propulsion: "4,000 kw x 2 set",
      ballastcapacity: "Pump 8 ea x 3,000 m3/hr",
      ga: "/MEPA_GA.pdf",
      description:
        "Mega Passion delivers safe, sustainable, and reliable services across diverse ports.",
      fleetProjects: [
        { projectName: "Chevron Wheatstone LNG", projectId: "15" },
        { projectName: "Ship Block Transportation (CVC)", projectId: "11" },
        { projectName: "Floating Dock Project" },
        { projectName: "Multi Ring Block Project" },
      ],
    },
    {
      id: "cydf",
      name: "Chang Yang Dong Fang",
      weight: "25,163mt",
      image: "https://res.cloudinary.com/dl28pqkb2/image/upload/v1760067462/25.04_HML_website_design_draft_9-21_lhmumd.png",
      loa: "156m",
      breadth: "41.98m",
      freedeck: "135m x 42m",
      depth: "10.1m",
      draft: "6.8m",
      deadweight: "25,163mt",
      speed: "13.3 knot",
      propulsion: "3906kw x 2 sets",
      ballastcapacity: "Pump 4 ea x 1,900 m3/hr",
      ga: "/CYDF_GA.pdf",
      description:
        "Chang Yang Dong Fang strengthens HML's long-term chartering portfolio with high-capacity deck transport capability.",
      fleetProjects: [{ projectName: "CYDF Chartering", image: "/news/cydf/1.jpeg" }],
    },
    {
      id: "nb",
      name: "NB",
      weight: "22,745mt",
      image: "/news/nb/NB.png",
      loa: "165m",
      breadth: "Max with sponson 45.00m / MLD 42.00m",
      freedeck: "140m x 45m",
      depth: "10.00m",
      draft: "6.60m",
      deadweight: "22,745mt",
      speed: "11.5 knots",
      propulsion: "3,800kw x 2",
      ballastcapacity: "2,500 x 4 m3/h",
      ga: "/nb_ga.pdf",
      description:
        "NB expands the fleet profile with a broad deck arrangement and competitive deadweight capacity.",
      fleetProjects: [{ projectName: "NB", image: "/news/nb/NB.png" }],
    },
  ],
} as const;

export const siteConfig = {
  name: "HML",
  url: "https://hml.com",
  tagline: "Heavy Marine Logistics",
  description:
    "Global heavy marine transport and project cargo logistics with specialized engineering support and deck carrier operations.",
  primaryCta: {
    label: "Start a project",
    href: "mailto:hello@hmlstudio.dev",
  },
  secondaryCta: {
    label: "View services",
    href: "#services",
  },
  contact: {
    email: "marketing@hi-megaline.com",
    location:
      "11th Floor, Kwanghwamoon Building, 149 Sejong-daero, Jongno-gu, Seoul, Republic of Korea 03186",
  },
  hero: {
    eyebrow: "The Icon of",
    title: "HEAVY MARINE LOGISTICS",
    videoMp4:
      "https://res.cloudinary.com/dl28pqkb2/video/upload/v1768561030/Landing_Video_Ver_6._3_tnmbaw.mp4",
    videoWebm:
      "https://res.cloudinary.com/dl28pqkb2/video/upload/v1768561030/Landing_Video_Ver_6._3_tnmbaw.mp4",
    posterImage:
      "https://res.cloudinary.com/dl28pqkb2/image/upload/v1760583437/Sequence_0103_p2ryme.jpg",
    stats: [
      {
        icon: "/icons/shipping.png",
        label: "Specialized Deck Carrier \nFleet",
      },
      {
        icon: "/icons/transportation.png",
        label: "Project Logistics \nExpertise",
      },
      {
        icon: "/icons/shield.png",
        label: "High Safety & Global \nStandards",
      },
      {
        icon: "/icons/engineering.png",
        label: "In-House Transport \nEngineering",
      },
    ],
  },
  aboutHero: {
    title: "ABOUT US",
    backgroundImage: "/about/about_background.webp",
    paragraphs: [
      "HML, headquartered in Seoul, South Korea, is a leading provider of heavy marine transportation services. We own and operate two specialized heavy transport vessels and work in close partnership with two additional vessels to enhance our global project capacity.",
      "Since our founding in 2009, HML has become one of the most trusted names in the marine transport industry. Our project-based operations and commitment to client satisfaction have made us a reliable partner across complex and large-scale logistics.",
      "We have also developed in-house engineering capabilities by hiring cross-disciplinary experts and investing in high-end engineering software, allowing us to provide precise, customized solutions for even the most technical challenges.",
    ],
  },
  aboutMissionVision: {
    ceo: {
      image: "/about/ceo_image.png",
      alt: "Kwang Bae Park, CEO of HI-MEGALINE",
      eyebrow: "CEO Message",
      title: "Your Dedicated Partner, Safely Connecting Customer Value.",
      paragraphs: [
        "Greetings,",
        "I am Kwang Bae Park, CEO of HI-MEGALINE.",
        "Amidst the rapidly changing global logistics landscape, Hi-Megaline has always placed \"Customer Trust\" as our highest priority. Beyond simply transporting cargo, our mission is to provide optimal solutions that ensure our customers' business continuity remains seamless and uninterrupted.",
        "Building on a foundation of rigorous safety management and seasoned expertise, Hi-Megaline will continue to serve as a reliable bridge connecting Korea to the rest of the world. We promise to be your premier logistics partner, delivering excellence and inspiration through constant innovation.",
        "Thank you.",
      ],
    },
    mission: {
      prefix: "OUR",
      highlight: "MISSION",
      body: "To deliver safe, reliable, and project-driven heavy marine transportation and engineering solutions that meet the unique needs of our global clients.",
    },
    vision: {
      prefix: "OUR",
      highlight: "VISION",
      body: "To be the world's most trusted and innovative partner in heavy marine logistics, setting standards in performance, service, and engineering excellence.",
    },
  },
  aboutCompanyHistory: {
    eyebrow: "COMPANY",
    title: "HISTORY",
    description:
      "HML remains committed to pursuing new challenges in its journey to become a global leader in logistics",
    items: [
      {
        year: "2026",
        events: [
          {
            month: "MAR",
            text: "RTG Crane Transportation to India with DONGBANG",
          },
        ],
      },
      {
        year: "2025",
        events: [
          {
            month: "JUN",
            text: "Jacket and Topside transportation for Empire Wind Project to US with HMC",
          },
          {
            month: "AUG",
            text: "Modules transportation for P83 Project to Singapore with Seatrium/Petrobras",
          },
          {
            month: "SEP",
            text: "Jacket transportation for Feng Miao Offshore Wind Farm to Taiwan with SKOP",
          },
          {
            month: "OCT",
            text: "Topside transportation for Empire Wind Project to US with HMC/Equinor",
          },
        ],
      },
      {
        year: "2024",
        events: [
          {
            month: "APR",
            text: "Company began rebranding as HML: The Icon of Heavy Marine Logistics, reflecting its evolution and leadership in the industry",
          },
          {
            month: "APR",
            text: "Monopiles transportation for Coast Virginia Offshore Wind Project to US with DEME",
          },
        ],
      },
      {
        year: "2023",
        events: [
          {
            month: "JAN",
            text: "Jacket transportation for Gallaf 3 Project to Qatar with HMC/NOC",
          },
          {
            month: "SEP",
            text: "Jacket transportation for Marjan Project to Saudi Arabia with HMC",
          },
          {
            month: "NOV",
            text: "Topside modules transportation for P78 Project to Singapore with Seatrium/Petrobras",
          },
        ],
      },
      {
        year: "2021",
        events: [
          {
            month: "MAY",
            text: "HML established a separate identity as Hi-Megaline",
          },
          {
            month: "MAY",
            text: "Renewed long-term contract with SHI (Samsung Heavy Industry)",
          },
        ],
      },
      {
        year: "2020",
        events: [
          {
            month: "JUN",
            text: "Renewed long-term contract with Hanwha Ocean (ex.DSMC)",
          },
        ],
      },
      {
        year: "2019",
        events: [
          {
            month: "APR",
            text: "Offshore platform transportation for Gallaf 1 to Qatar with HMC/NOC",
          },
          {
            month: "JUL",
            text: "Awarded the transportation of module for Linde's New Pitch Gasification Plant Project",
          },
        ],
      },
      {
        year: "2018",
        events: [
          {
            month: "MAY",
            text: "Long-term contract signed with SHI (Samsung Heavy Industry) for ship blocks transportation",
          },
          {
            month: "JUL",
            text: "Mega Trust is hired long term chartered by SHI",
          },
        ],
      },
      {
        year: "2017",
        events: [
          {
            month: "JUN",
            text: "OWF Jackets transportation for East Anglia Project to North Sea with Lamprell",
          },
        ],
      },
      {
        year: "2016",
        events: [
          {
            month: "FEB",
            text: "Successfully completed 4 years of Gorgon LNG Project",
          },
          {
            month: "MAY",
            text: "FPSO modules transportation of TUPI FPSO (P75, P77) Project",
          },
          {
            month: "JUN",
            text: "Offshore modules transportation for Gina Krog Project to Norway with Equinor",
          },
        ],
      },
      {
        year: "2015",
        events: [
          {
            month: "JUN",
            text: "Awarded as Best Company for Safety Management and PSC control by Korean Register of Shipping. Also Awarded as Best Company for Maritime safety by Korean Ministry of Oceans and Fisheries.",
          },
        ],
      },
      {
        year: "2014",
        events: [
          {
            month: "FEB",
            text: "Awarded the Best Vessel & Quarantine by Chevron",
          },
          {
            month: "MAR",
            text: "Completed major offshore installation in North Sea",
          },
          {
            month: "AUG",
            text: "Semisub platform of Wheatstone LNG Project to Australia with Chevron",
          },
          {
            month: "DEC",
            text: "Expanded global office network across Europe and Asia",
          },
        ],
      },
      {
        year: "2013",
        events: [
          {
            month: "JAN",
            text: "Developed new LNG transportation capabilities",
          },
          {
            month: "SEP",
            text: "Initiated joint venture for offshore wind installations",
          },
        ],
      },
      {
        year: "2012",
        events: [
          {
            month: "MAR",
            text: "Modules transportation for Gorgon LNG Project to Australia with Chervon",
          },
          {
            month: "APR",
            text: "Completed first deep-sea pipeline installation project",
          },
          {
            month: "NOV",
            text: "Achieved 1 million man-hours accident-free milestone",
          },
        ],
      },
      {
        year: "2011",
        events: [
          {
            month: "APR",
            text: "MV. MEGA CARAVAN delivered",
          },
          {
            month: "JUN",
            text: "Entered into long term agreement with offshore energy giant",
          },
          {
            month: "AUG",
            text: "MV. MEGA CARAVAN 2 delivered",
          },
          {
            month: "DEC",
            text: "Launched new state-of-the-art heavy lift vessel",
          },
        ],
      },
      {
        year: "2010",
        events: [
          {
            month: "JAN",
            text: "ITW Megaline Co.,Ltd established",
          },
          {
            month: "FEB",
            text: "Awarded first offshore construction contract",
          },
          {
            month: "JUN",
            text: "Long-term contract signed with Hanwha Ocean (ex.DSME) for ship blocks transportation",
          },
          {
            month: "AUG",
            text: "Achieved ISM code certification across the fleet",
          },
        ],
      },
      {
        year: "2009",
        events: [
          {
            month: "MAR",
            text: "Entered global offshore market with first major contract",
          },
          {
            month: "OCT",
            text: "HMT Megaline Co.,Ltd established",
          },
          {
            month: "DEC",
            text: "Achieved first multi-national offshore transport milestone",
          },
        ],
      },
    ],
  },
  mediaHero: {
    titlePrefix: "DISCOVER MORE",
    titleHighlight: "ABOUT US",
    backgroundImage: "/media/HeroImage.webp",
    backgroundAlt: "Abstract marine themed background",
    brochure: {
      href: "/HML%20Brochure.pdf",
      image: "/media/BrochureProfileImage.webp",
      imageAlt: "HML brochure cover",
      caption: "HML Brochure",
      actionLabel: "Download Brochure",
    },
    videos: [
      {
        url: "https://youtu.be/XvJzr7KGHGE?si=hPt-P-KnlSR5tGtf",
        caption: "Certified Excellent Shipping Company (CESS) by KOBC",
      },
      {
        url: "https://youtu.be/5_nIWxfYQFs?si=tEMxUCC-bsFBHmjG",
        caption: "Introducing Our Vessels - Mega Caravan & Mega Caravan 2",
      },
      {
        url: "https://youtu.be/VJfGfXICVGU?si=rYdYgfZRQKs-Vn4H",
        caption: "HML 16th Anniversary",
      },
      {
        url: "https://youtu.be/fzpXsJbiZnE?si=hn0PSlmEnkHbA6q2",
        caption: "Petrobras P78 FPSO Topside Module Transportation Project by HML",
      },
      {
        url: "https://youtu.be/npUCdVeALwM?si=5I647Mz0uRNK-riM",
        caption: "Successful completion of Marjan Project",
      },
      {
        url: "https://youtu.be/E2L_AYqTRyw?si=Fngs64ot7NKEBkAm",
        caption: "HI-MEGALINE New Logo Intro",
      },
      {
        url: "https://youtu.be/bPI7AO1OO6I?si=NtphxcNpPTczMy3z",
        caption: "New Logo Intro of HI-MEGALINE",
      },
    ],
  },
  fleet,
  fleetOverview,
  cargoExpertise,
  projectOverview,
  latestNews,
  stats: [
    {
      value: "3 weeks",
      label: "Average homepage sprint",
    },
    {
      value: "12+",
      label: "Reusable section patterns",
    },
    {
      value: "1 system",
      label: "Shared tokens and components",
    },
  ],
  process: [
    {
      title: "Content-led layout",
      description:
        "Sections are driven by message hierarchy first, then composed from reusable primitives.",
    },
    {
      title: "Token-based styling",
      description:
        "Color, typography, and surface styles are centralized so the UI stays coherent as it grows.",
    },
    {
      title: "Production-ready structure",
      description:
        "Routing stays in `app`, shared logic lives in `config`, `components`, and `lib`, and page code remains thin.",
    },
  ],
  services: [
    {
      category: "Foundation",
      title: "Design system setup",
      description:
        "Create reusable UI primitives and sensible content sections before more pages are added.",
      detail:
        "Buttons, cards, containers, and section headings become the base language for the rest of the site.",
      tags: ["UI primitives", "Section patterns", "Tailwind tokens"],
    },
    {
      category: "Messaging",
      title: "Conversion-focused pages",
      description:
        "Build landing pages that explain the offer clearly and guide users into the next action.",
      detail:
        "Hero, services, proof, and CTA sections are structured to keep the page readable on both mobile and desktop.",
      tags: ["Copy hierarchy", "Responsive layout", "CTA flow"],
    },
    {
      category: "Scale",
      title: "Clean project architecture",
      description:
        "Keep styling and layout decisions predictable so future features do not degrade the codebase.",
      detail:
        "Configuration, content, and shared UI are separated cleanly, which makes future additions faster to ship.",
      tags: ["App Router", "Shared config", "Maintainable code"],
    },
  ],
  testimonials: [
    {
      quote:
        "The new structure gave us a homepage we could actually keep extending instead of rewriting every sprint.",
      author: "Maya Chen",
      role: "Growth Lead",
      company: "Northstar Labs",
    },
    {
      quote:
        "We finally had a visual system that marketing and engineering could both work with without friction.",
      author: "Adrian Wells",
      role: "Product Marketing Director",
      company: "Signal Harbor",
    },
    {
      quote:
        "The launch looked sharper, but the bigger win was that the next page took a fraction of the time to build.",
      author: "Sara Ibrahim",
      role: "Founder",
      company: "Studio Meridian",
    },
  ],
} as const;
