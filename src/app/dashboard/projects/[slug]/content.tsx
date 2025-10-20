// externals
import Markdown from "react-markdown";

// components
import DashboardLayoutPageWrapper from "@/components/dashboard/dashboardLayoutPage";
import DashboardHeaderStickyLinks from "@/components/dashboard/dashboardHeaderStickyLinks";

// types
import type { ProjectType } from "@/types/ProjectTypes";

type PostPageProps = { project: ProjectType };

export default async function DashboardProjectContent({
  project,
}: PostPageProps) {
  return (
    <DashboardLayoutPageWrapper
      props={{
        header: {
          title: project.title,
          action: {
            icon: "projectsUpdate",
            href: `/dashboard/projects/${project.slug}/edit`,
            label: "Edit",
          },
        },
      }}
    >
      <DashboardHeaderStickyLinks>
        <section className="flex-row full-width justify-content-space-between align-items-center">
          <span></span>
        </section>
      </DashboardHeaderStickyLinks>
      <main
        className="display-flex flex-column align-items-center full-width squish-24"
        style={{ gridRowStart: 2 }}
      >
        <h1 className="flex-row full-width justify-content-center stack-48 drop-0 text-extra-large line-height-extra-large align-items-center gap-8">
          {project?.title}
        </h1>
        <figure className="flex-row full-width squeeze-0 stack-48 justify-content-center">
          <img
            className="full-width"
            src={project?.cover_image_url}
            style={{ maxWidth: 1280 }}
          />
        </figure>
        <section
          className="markdown flex-column align-items-stretch justify-content-start full-width squeeze-24 line-height-large stack-64"
          style={{ maxWidth: 800 }}
        >
          <Markdown>{project?.body}</Markdown>
        </section>
      </main>
    </DashboardLayoutPageWrapper>
  );
}
