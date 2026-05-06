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
