// externals
import Link from "next/link";

// utils
import { classes } from "@/utils";

// components
import DashboardLayoutPageWrapper from "@/components/dashboard/dashboardLayoutPage";
import DashboardHeaderStickyLinks from "@/components/dashboard/dashboardHeaderStickyLinks";
import Icon from "@/components/icon";

// types
import type { ProjectType } from "@/types/ProjectTypes";

export default function DashboardProjectsContent({
  projects,
}: {
  projects: ProjectType[];
}) {
  return (
    <DashboardLayoutPageWrapper
      props={{
        header: {
          title: "Projects",
          action: {
            icon: "projectsCreate",
            href: "/dashboard/projects/new",
            label: "New",
          },
        },
      }}
    >
      <DashboardHeaderStickyLinks>
        <span></span>
      </DashboardHeaderStickyLinks>
      <main
        id="projects-container"
        className="flex-column squish-24 gap-24 align-items-center justify-content-start squeeze-16"
      >
        {projects.map((project) => (
          <section key={project.slug} className={projectCardClassName}>
            <img
              style={{ gridArea: "project-image" }}
              src={project.cover_image_url}
              className="border-rounded-8 border-style-outset border-width-1 border-color-cyan raised-1 overflow-hidden"
            />
            <Link
              href={`/dashboard/projects/${project.slug}`}
              className="text-large font-weight-400 drop-8 squish-0 stack-0"
              style={{ gridArea: "project-title" }}
            >
              {project.title}
            </Link>
            <p
              className="full-height"
              style={{ gridArea: "project-description" }}
            >
              {project.description}
            </p>
            <p
              className="flex-row overflow-x-auto white-space-nowrap full-width text-color-light"
              style={{ gridArea: "project-tools" }}
            >
              {project.tools.join(", ")}
            </p>
            <p
              className="text-color-cyan flex-row align-items-center gap-4 justify-content-end full-width"
              style={{ gridArea: "project-status" }}
            >
              {project.status} <Icon type={project.status} />
            </p>
          </section>
        ))}
      </main>
    </DashboardLayoutPageWrapper>
  );
}

const projectCardClassName = classes([
  "project-card",
  "border-color-cyan",
  "border-rounded-16",
  "border-style-outset",
  "border-width-2",
  "squeeze-16",
  "squish-16",
  "surface-featured-post",
  "grid",
  "gap-16",
  "justify-items-start",
]);
