export type EngineeringCapabilityItem = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export const engineeringCapabilityData: readonly EngineeringCapabilityItem[] = [
  {
    title: "Transport Analysis",
    subtitle: "Capability 01",
    description:
      "Integrated engineering review covering motion response, load arrangement, and heavy transport methodology for complex cargo campaigns.",
    image: "/projects/EmpireWind1.jpg",
  },
  {
    title: "Sea Fastening Design",
    subtitle: "Capability 02",
    description:
      "Detailed grillage and fastening development built around vessel geometry, cargo interface conditions, and execution practicality.",
    image: "/projects/DEME_CVOW_Project.webp",
  },
  {
    title: "Loadout Planning",
    subtitle: "Capability 03",
    description:
      "Operational planning for ballast sequences, support reactions, deck loading, and interface control during cargo positioning.",
    image: "/projects/P78_Project.webp",
  },
  {
    title: "Voyage Monitoring",
    subtitle: "Capability 04",
    description:
      "Continuous routing support, weather review, and engineering follow-up to maintain cargo integrity throughout transit.",
    image: "/projects/P83PROJECT.jpg",
  },
  {
    title: "Marine Assurance",
    subtitle: "Capability 05",
    description:
      "Technical documentation, approval support, and close coordination with client teams, class, and marine warranty surveyors.",
    image: "/about/about_background.webp",
  },
] as const;

export const engineeringStandards = [
  {
    name: "DNV-OS / DNV-RP",
    src: "/rules/DNV.png",
    alt: "DNV Logo",
  },
  {
    name: "GL-Noble Denton",
    src: "/rules/GL.png",
    alt: "GL Logo",
  },
  {
    name: "ISO 19901-6",
    src: "/rules/ISO.png",
    alt: "ISO Logo",
  },
  {
    name: "KR",
    src: "/rules/KR.png",
    alt: "KR Logo",
  },
  {
    name: "ABS",
    src: "/rules/ABS.png",
    alt: "ABS Logo",
  },
  {
    name: "AISC",
    src: "/rules/AISC.png",
    alt: "AISC Logo",
  },
  {
    name: "OCIMF",
    src: "/rules/OCIMF.png",
    alt: "OCIMF Logo",
  },
  {
    name: "IMO",
    src: "/rules/IMO.png",
    alt: "IMO Logo",
  },
] as const;
