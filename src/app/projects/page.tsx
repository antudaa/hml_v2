import type { Metadata } from "next";
import ProjectsPage from "@/components/projects/ProjectsPage";

export const metadata: Metadata = {
  title: "PROJECTS - HML",
};

export default function ProjectPage() {
  return <ProjectsPage />;
}
