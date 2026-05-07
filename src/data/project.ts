import type { ProjectOverviewItem } from "./home/types";
import { projectOverviewItems } from "./home/project-overview";

const projectImageOverrides: Record<string, string> = {
  "1": "/projects/EmpireWind1.jpg",
  "2": "/projects/P83PROJECT.jpg",
  "3": "/projects/DEME_CVOW_Project.webp",
  "4": "/projects/P78_Project.webp",
};

export type ProjectDetailData = ProjectOverviewItem;

export const HomeProject = projectOverviewItems.map((project) => ({
  ...project,
  image: projectImageOverrides[project.id] ?? project.image,
})) satisfies readonly ProjectOverviewItem[];
