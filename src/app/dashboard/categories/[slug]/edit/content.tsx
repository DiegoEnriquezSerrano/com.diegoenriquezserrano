// components
import DashboardLayoutPageWrapper from "@/components/dashboard/dashboardLayoutPage";
import DashboardHeaderStickyLinks from "@/components/dashboard/dashboardHeaderStickyLinks";
import CategoryEditForm from "@/components/dashboard/categories/categoryEditForm";

// types
import type { CategoryType } from "@/types/CategoryTypes";

type CategoryPageProps = { category: CategoryType };

export default function DashboardEditCategory({ category }: CategoryPageProps) {
  return (
    <DashboardLayoutPageWrapper
      props={{
        header: {
          title: "Edit category",
        },
      }}
    >
      <DashboardHeaderStickyLinks>
        <span></span>
      </DashboardHeaderStickyLinks>
      <main className="flex-column squish-24 gap-24 align-items-center justify-content-start font-orbitron">
        <CategoryEditForm category={category} />
      </main>
    </DashboardLayoutPageWrapper>
  );
}
