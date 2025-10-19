import Link from "next/link";
import Icon from "@/components/icon";
import DashboardLayoutPageWrapper from "@/components/dashboard/dashboardLayoutPage";
import DashboardHeaderStickyLinks from "@/components/dashboard/dashboardHeaderStickyLinks";
import PostEditForm from "@/components/dashboard/posts/postEditForm";
import type { CategoryType } from "@/types/CategoryTypes";
import type { PostType } from "@/types/PostTypes";

export default function DashboardEditPost({
  categories,
  post,
}: {
  categories: CategoryType[];
  post: PostType;
}) {
  return (
    <DashboardLayoutPageWrapper
      props={{
        header: {
          title: "Edit post",
        },
      }}
    >
      <DashboardHeaderStickyLinks>
        <figure className="flex-row align-items-center gap-4">
          <Icon type="article" opts={{ height: "1rem", width: "1rem" }} />
        </figure>
        <Link href={`/dashboard/posts`} className="text-color-white">
          Published
        </Link>
        <Link href={`/dashboard/posts/drafts`} className="text-color-cyan">
          Drafts
        </Link>
      </DashboardHeaderStickyLinks>
      <main className="flex-column squish-24 gap-24 align-items-center justify-content-start font-orbitron">
        <PostEditForm post={post} categories={categories} />
      </main>
    </DashboardLayoutPageWrapper>
  );
}
