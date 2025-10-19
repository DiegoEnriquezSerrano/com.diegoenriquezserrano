import DashboardLayoutPageWrapper from "@/components/dashboard/dashboardLayoutPage";
import DashboardHeaderStickyLinks from "@/components/dashboard/dashboardHeaderStickyLinks";
import ProjectCreateForm from "@/components/dashboard/projects/projectCreateForm";

export default function DashboardNewPost() {
  return (
    <DashboardLayoutPageWrapper
      props={{
        header: {
          title: "New project",
        },
      }}
    >
      <DashboardHeaderStickyLinks>
        <span></span>
      </DashboardHeaderStickyLinks>
      <main className="flex-column squish-24 gap-24 align-items-center justify-content-start font-orbitron">
        <ProjectCreateForm />
      </main>
    </DashboardLayoutPageWrapper>
  );
}
