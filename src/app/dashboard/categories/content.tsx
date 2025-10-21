// externals
import Link from "next/link";

// components
import CategoryRow from "@/components/categoryRow";
import DashboardLayoutPageWrapper from "@/components/dashboard/dashboardLayoutPage";
import DashboardHeaderStickyLinks from "@/components/dashboard/dashboardHeaderStickyLinks";

// types
import type { CategoryType } from "@/types/CategoryTypes";

export default function DashboardCategoriesContent(props: {
  categories: CategoryType[];
}) {
  return (
    <DashboardLayoutPageWrapper
      props={{
        header: {
          title: "Categories",
          action: {
            href: "/dashboard/categories/new",
            icon: "categoriesCreate",
            label: "New",
          },
        },
      }}
    >
      <DashboardHeaderStickyLinks>
        <section className="flex-row full-width justify-content-space-between squish-8 align-items-center">
          <Link href="/dashboard/categories">All</Link>
          <Link href="/dashboard/categories/new" className="text-color-cyan">
            New
          </Link>
        </section>
      </DashboardHeaderStickyLinks>
      <main className="display-flex flex-column align-items-center full-width squish-48">
        {props.categories.map((category) => (
          <CategoryRow key={category.id} category={category} />
        ))}
      </main>
    </DashboardLayoutPageWrapper>
  );
}
