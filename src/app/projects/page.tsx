"use server";

// utils
import { getSessionCookie } from "@/utils/serverUtils";

// services
import ProjectService from "@/services/ProjectService";

// components
import ProjectsContent from "@/app/projects/content";

const { getProjectsByUsername } = ProjectService.Api;

export default async function ProjectsPage() {
  const session = await getSessionCookie();

  try {
    const [projectsRequest] = await Promise.all([
      getProjectsByUsername(
        { username: String(process.env.NEXT_PUBLIC_PRIMARY_USERNAME) },
        { session },
      ),
    ]);

    const projects = projectsRequest.response.ok ? projectsRequest.json : [];

    if (process.env.VITE_DEBUG) {
      console.log("projects: ", projects);
    }

    return <ProjectsContent projects={projects} />;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }
}
