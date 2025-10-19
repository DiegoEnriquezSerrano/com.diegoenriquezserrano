// components
import DashboardLayoutPageWrapper from "@/components/dashboard/dashboardLayoutPage";
import DashboardHeaderStickyLinks from "@/components/dashboard/dashboardHeaderStickyLinks";
import { PostCard } from "@/components/postCard";

// types
import type { PostType } from "@/types/PostTypes";
import type { CommentType } from "@/types/CommentTypes";
import type { NotificationType } from "@/types/NotificationTypes";
import type { AuthorStats } from "@/types/AuthorTypes";

export default function DashboardContent({
  posts,
  comments,
  notifications,
  stats,
}: {
  posts: PostType[];
  comments: CommentType[];
  notifications: NotificationType[];
  stats: AuthorStats;
}) {
  return (
    <DashboardLayoutPageWrapper props={{ header: { title: "Home" } }}>
      <DashboardHeaderStickyLinks>
        <span></span>
      </DashboardHeaderStickyLinks>
      <main className="flex-column gap-32 align-items-center justify-content-start font-orbitron stack-64 squeeze-24">
        <h1 className="flex-row full-width justify-content-start stack-8 drop-24 text-extra-large line-height-extra-large">
          All posts
        </h1>
        <section className="grid posts-list gap-24">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} dashboard={true} />
          ))}
        </section>
      </main>
    </DashboardLayoutPageWrapper>
  );
}
