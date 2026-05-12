import { notFound } from "next/navigation";
import ProjectDetailView from "@/components/projects/ProjectDetailView";
import { HomeProject } from "@/data/project";

export const dynamicParams = false;

export async function generateStaticParams() {
  return HomeProject.map((project) => ({ projectId: String(project.id) }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  const projectData = HomeProject.find(
    (project) => String(project.id) === projectId,
  );

  if (!projectData) {
    return notFound();
  }

  return <ProjectDetailView project={projectData} />;
}
