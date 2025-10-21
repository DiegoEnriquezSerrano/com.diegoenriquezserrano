import Link from "next/link";
import Icon from "@/components/icon";
import DashboardLayoutPageWrapper from "@/components/dashboard/dashboardLayoutPage";
import DashboardHeaderStickyLinks from "@/components/dashboard/dashboardHeaderStickyLinks";
import PostCreateForm from "@/components/dashboard/posts/postCreateForm";
import type { CategoryType } from "@/types/CategoryTypes";

export default function DashboardNewPost({
  categories,
}: {
  categories: CategoryType[];
}) {
  return (
    <DashboardLayoutPageWrapper
      props={{
        header: {
          title: "New post",
        },
      }}
    >
      <DashboardHeaderStickyLinks>
        <section className="flex-row gap-16 align-items-center squish-8">
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
        <PostCreateForm categories={categories} />
      </main>
    </DashboardLayoutPageWrapper>
  );
}
