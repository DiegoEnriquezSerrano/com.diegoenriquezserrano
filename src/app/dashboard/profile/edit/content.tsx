// components
import DashboardLayoutPageWrapper from "@/components/dashboard/dashboardLayoutPage";
import DashboardHeaderStickyLinks from "@/components/dashboard/dashboardHeaderStickyLinks";
import ProfileEditForm from "@/components/dashboard/profile/profileEditForm";

// types
import type { ProfileType } from "@/types/UserTypes";

export default async function DashboardProfileEditContent({
  profile,
}: {
  profile: ProfileType;
}) {
  return (
    <DashboardLayoutPageWrapper
      props={{
        header: {
          title: "Edit profile",
        },
      }}
    >
      <DashboardHeaderStickyLinks>
        <section className="flex-row full-width justify-content-space-between align-items-center">
          <span></span>
        </section>
      </DashboardHeaderStickyLinks>
      <ProfileEditForm profile={profile} />
    </DashboardLayoutPageWrapper>
  );
}
