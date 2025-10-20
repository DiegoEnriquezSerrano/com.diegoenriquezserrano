// externals
import Link from "next/link";
import Markdown from "react-markdown";

// components
import BaseLayoutPageWrapper from "@/components/baseLayoutPageWrapper";
import Icon from "@/components/icon";

// services
import ProjectService from "@/services/ProjectService";

// types
import type { ProjectType } from "@/types/ProjectTypes";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let project: ProjectType | undefined;

  const { getProjectByUsernameAndSlug } = ProjectService.Api;

  try {
    const [projectRequest] = await Promise.all([
      getProjectByUsernameAndSlug(
        {
          username: String(process.env.NEXT_PUBLIC_PRIMARY_USERNAME),
          slug,
        },
        {},
      ),
    ]);

    if (projectRequest.response.ok) project = projectRequest.json;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }

  if (process.env.VITE_DEBUG) {
    console.log("project: ", project);
  }

  return (
    <BaseLayoutPageWrapper props={{ showCategories: true }}>
      <div className="flex-row dim-70 text-color-white full-width drop-24 stack-24">
        <Link
          className="flex-row align-items-center gap-4 hover-decoration-none"
          href="/projects"
        >
          <figure className="transform-rotate-90">
            <Icon type="angle" />
          </figure>
          Projects
        </Link>
      </div>
      <main
        className="display-flex flex-column align-items-center full-width squish-0"
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
          className="markdown flex-column align-items-stretch justify-content-start full-width squeeze-24 white-space-pre-line line-height-large stack-64"
          style={{ maxWidth: 800 }}
        >
          <Markdown>{project?.body}</Markdown>
        </section>
      </main>
    </BaseLayoutPageWrapper>
  );
}
