// externals
import Link from "next/link";

// components
import Icon from "@/components/icon";
import DashboardLayoutPageWrapper from "@/components/dashboard/dashboardLayoutPage";
import DashboardHeaderStickyLinks from "@/components/dashboard/dashboardHeaderStickyLinks";
import ProjectEditForm from "@/components/dashboard/projects/projectEditForm";

// types
import type { ProjectType } from "@/types/ProjectTypes";

export default function DashboardEditProject({
  project,
}: {
  project: ProjectType;
}) {
  return (
    <DashboardLayoutPageWrapper
      props={{
        header: {
          title: "Edit project",
        },
      }}
    >
      <DashboardHeaderStickyLinks>
        <section className="flex-row gap-16 align-items-center squish-8">
          <figure className="flex-row align-items-center gap-4">
            <Icon type="article" opts={{ height: "1rem", width: "1rem" }} />
          </figure>
          <Link href={`/dashboard/projects`} className="text-color-white">
            Published
          </Link>
          <Link href={`/dashboard/projects/drafts`} className="text-color-cyan">
            Drafts
          </Link>
        </section>
      </DashboardHeaderStickyLinks>
      <main className="flex-column squish-24 gap-24 align-items-center justify-content-start font-orbitron">
        <ProjectEditForm project={project} />
      </main>
    </DashboardLayoutPageWrapper>
  );
}
