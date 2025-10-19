import DashboardLayoutPageWrapper from "@/components/dashboard/dashboardLayoutPage";
import DashboardHeaderStickyLinks from "@/components/dashboard/dashboardHeaderStickyLinks";
import CategoryForm from "@/components/dashboard/categories/categoryForm";

export default function DashboardNewCategory() {
  return (
    <DashboardLayoutPageWrapper
      props={{
        header: {
          title: "New category",
        },
      }}
    >
      <DashboardHeaderStickyLinks>
        <span></span>
      </DashboardHeaderStickyLinks>
      <main className="flex-column squish-24 gap-24 align-items-center justify-content-start font-orbitron">
        <CategoryForm />
      </main>
    </DashboardLayoutPageWrapper>
  );
}
