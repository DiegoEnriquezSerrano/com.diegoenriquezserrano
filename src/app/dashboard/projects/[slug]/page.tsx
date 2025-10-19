"use server";

// externals
import { cookies } from "next/headers";

// services
import ProjectService from "@/services/ProjectService";

// components
import DashboardPostContent from "./content";

const { getDashboardProject } = ProjectService.Api;

export default async function DashboardCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const cookieStore = await cookies();
  const accessToken = process.env.VITE_JWT_COOKIE_NAME
    ? cookieStore.get(process.env.VITE_JWT_COOKIE_NAME)
    : null;

  try {
    const [projectRequest] = await Promise.all([
      getDashboardProject(slug, { session: accessToken?.value }),
    ]);

    if (projectRequest.response.ok) {
      const project = projectRequest.json;

      if (process.env.VITE_DEBUG) {
        console.log("project: ", project);
      }

      return <DashboardPostContent project={project} />;
    }
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }
}
