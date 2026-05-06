export type FleetVessel = {
  vesselName: string;
  vecelID: string;
};

export type FleetOverviewGroup = {
  title: string;
  vessels: readonly FleetVessel[];
};

export type FleetOverviewSection = {
  eyebrow: string;
  title: string;
  sectionId: string;
  returnQueryKey: string;
  storageKey: string;
  videoMp4: string;
  videoWebm: string;
  groups: readonly FleetOverviewGroup[];
};

export type CargoExpertiseItem = {
  id: number;
  title: string;
  image: string;
  subtitle: string;
  viewMore: string;
};

export type CargoExpertiseSection = {
  sectionId: string;
  sideLabel: string;
  items: readonly CargoExpertiseItem[];
};

export type ProjectOverviewItem = {
  id: string | number;
  name: string;
  description?: string;
  image?: string;
  client?: string;
  cargo?: string;
  pol?: string;
  pod?: string;
  duration?: string;
  vessel?: string;
  projectDetails?: string;
  year?: string | number;
  projectYear?: string | number;
  completionYear?: string | number;
  startYear?: string | number;
  endYear?: string | number;
  date?: string | number | Date;
  publishedAt?: string | number | Date;
  createdAt?: string | number | Date;
  updatedAt?: string | number | Date;
};

export type ProjectOverviewSection = {
  sectionId: string;
  eyebrow: string;
  title: string;
  items: readonly ProjectOverviewItem[];
};

export type LatestNewsItem = {
  id: string;
  title: string;
  subtitle?: string;
  body: string;
  image?: string;
  images?: readonly string[];
  date: {
    month: string;
    day: string;
  };
};

export type LatestNewsSection = {
  sectionId: string;
  returnQueryKey: string;
  storageKey: string;
  backgroundImage: string;
  pageSize: number;
  items: readonly LatestNewsItem[];
};
