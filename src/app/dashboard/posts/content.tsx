// externals
import Link from "next/link";

// components
import Icon from "@/components/icon";
import PostList from "@/components/postList";
import DashboardLayoutPageWrapper from "@/components/dashboard/dashboardLayoutPage";
import DashboardHeaderStickyLinks from "@/components/dashboard/dashboardHeaderStickyLinks";

// types
import type { PostType } from "@/types/PostTypes";

export default function DashboardPostsContent(props: { posts: PostType[] }) {
  return (
    <DashboardLayoutPageWrapper
      props={{
        header: {
          title: "Posts",
          action: { icon: "articleNew", href: "/dashboard/posts/new" },
        },
      }}
    >
      <DashboardHeaderStickyLinks>
        <section className="flex-row gap-16 squish-8 align-items-center">
          <figure className="flex-row align-items-center gap-4">
            <Icon type="article" opts={{ height: "1rem", width: "1rem" }} />
          </figure>
          <Link href={`/dashboard/posts`} className="text-color-white">
            Published
          </Link>
          <Link href={`/dashboard/posts/drafts`} className="text-color-cyan">
            Drafts
          </Link>
        </section>
      </DashboardHeaderStickyLinks>
      <main className="flex-column squish-24 gap-24 align-items-center justify-content-start font-orbitron">
        <PostList posts={props.posts} dashboard={true} />
      </main>
    </DashboardLayoutPageWrapper>
  );
}
