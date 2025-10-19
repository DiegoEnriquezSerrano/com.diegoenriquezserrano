// components
import DashboardLayoutPageWrapper from "@/components/dashboard/dashboardLayoutPage";
import DashboardHeaderStickyLinks from "@/components/dashboard/dashboardHeaderStickyLinks";
import Icon from "@/components/icon";
import PostList from "@/components/postList";

// types
import type { CategoryType } from "@/types/CategoryTypes";
import type { PostType } from "@/types/PostTypes";

type CategoryPageProps = { category: CategoryType; posts: PostType[] };

export default async function DashboardCategoryContent({
  category,
  posts,
}: CategoryPageProps) {
  return (
    <DashboardLayoutPageWrapper
      props={{
        header: {
          title: category.name,
          action: {
            href: `/dashboard/categories/${category.slug}/edit`,
            icon: "categoriesUpdate",
          },
        },
      }}
    >
      <DashboardHeaderStickyLinks>
        <section className="flex-row full-width justify-content-space-between align-items-center">
          <span></span>
          <span></span>
        </section>
      </DashboardHeaderStickyLinks>
      <section className="flex-column full-width justify-content-center stack-0">
        <section
          className="border-width-0 border-style-solid border-color-gray full-height full-width"
          style={{ maxWidth: 800 }}
          id="category-container"
        >
          <div className="flex-column full-width gap-0 justify-content-center squish-24">
            <p className="flex-row align-items-center justify-content-center stack-8 text-large gap-8">
              <Icon type="tags" />
              <span>{category.name}</span>
            </p>
            <p className="flex-row align-items-center justify-content-center text-color-light gap-8">
              <span>#{category.slug}</span>
              <span>({category.post_count})</span>
            </p>
          </div>
        </section>
        <p className="squeeze-24 stack-24">Related posts</p>
        <PostList posts={posts} dashboard={true} />
      </section>
    </DashboardLayoutPageWrapper>
  );
}
