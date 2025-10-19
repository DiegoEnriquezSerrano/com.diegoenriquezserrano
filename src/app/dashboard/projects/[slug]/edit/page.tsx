"use server";

// utils
import { getSessionCookie } from "@/utils/serverUtils";

// services
import ProjectService from "@/services/ProjectService";

// components
import DashboardEditProject from "./content";

const { getDashboardProject } = ProjectService.Api;

export default async function DashboardCategories({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const session = await getSessionCookie();

  try {
    const [projectRequest] = await Promise.all([
      getDashboardProject(slug, { session }),
    ]);

    const project = projectRequest.response.ok
      ? projectRequest.json
      : undefined;

    if (process.env.VITE_DEBUG) {
      console.log("project: ", project);
    }

    return <DashboardEditProject project={project} />;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }
}
