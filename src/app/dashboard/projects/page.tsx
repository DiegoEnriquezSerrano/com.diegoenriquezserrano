"use server";

// utils
import { getSessionCookie } from "@/utils/serverUtils";

// services
import ProjectService from "@/services/ProjectService";

// components
import DashboardProjectsContent from "./content";

const { getDashboardProjects } = ProjectService.Api;

export default async function DashboardCategories() {
  const session = await getSessionCookie();

  try {
    const [projectsRequest] = await Promise.all([
      getDashboardProjects({ session }),
    ]);

    const projects = projectsRequest.response.ok ? projectsRequest.json : [];

    if (process.env.VITE_DEBUG) {
      console.log("projects: ", projects);
    }

    return <DashboardProjectsContent projects={projects} />;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }
}
