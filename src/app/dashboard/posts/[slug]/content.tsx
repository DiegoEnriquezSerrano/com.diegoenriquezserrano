import Markdown from "react-markdown";
import DashboardLayoutPageWrapper from "@/components/dashboard/dashboardLayoutPage";
import DashboardHeaderStickyLinks from "@/components/dashboard/dashboardHeaderStickyLinks";
import DraftHeader from "@/components/dashboard/posts/draftHeader";
import type { PostType } from "@/types/PostTypes";

type PostPageProps = { post: PostType };

export default async function DashboardPostContent({ post }: PostPageProps) {
  return (
    <DashboardLayoutPageWrapper
      props={{
        header: {
          title: post.title,
          action: {
            icon: "articleEdit",
            href: `/dashboard/posts/${post.slug}/edit`,
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
      <DraftHeader post={post} />
      <main
        className="display-flex flex-column align-items-center full-width squish-24"
        style={{ gridRowStart: 2 }}
      >
        <h1 className="flex-row full-width justify-content-center stack-48 drop-0 text-extra-large line-height-extra-large align-items-center gap-8">
          {post?.title}
        </h1>
        <figure className="flex-row full-width squeeze-0 stack-48 justify-content-center">
          <img
            className="full-width"
            src={post?.cover_image_url}
            style={{ maxWidth: 1280 }}
          />
        </figure>
        <section
          className="markdown flex-column align-items-stretch justify-content-start full-width squeeze-24 white-space-pre-line line-height-large stack-64"
          style={{ maxWidth: 800 }}
        >
          <Markdown>{post?.body}</Markdown>
        </section>
      </main>
    </DashboardLayoutPageWrapper>
  );
}
