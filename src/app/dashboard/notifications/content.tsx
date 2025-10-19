// externals
import Link from "next/link";

// components
import DashboardLayoutPageWrapper from "@/components/dashboard/dashboardLayoutPage";
import DashboardHeaderStickyLinks from "@/components/dashboard/dashboardHeaderStickyLinks";
import NotificationRow from "@/components/notifications/notificationRow";

// types
import type { NotificationType } from "@/types/NotificationTypes";

export default function DashboardNotificationContent(props: {
  notifications: NotificationType[];
}) {
  return (
    <DashboardLayoutPageWrapper
      props={{
        header: {
          title: "Notifications",
        },
      }}
    >
      <DashboardHeaderStickyLinks>
        <section className="flex-row full-width justify-content-space-between">
          <Link href="/dashboard/notifications">New</Link>
          <Link href="/dashboard/notifications/all" className="text-color-cyan">
            All
          </Link>
        </section>
      </DashboardHeaderStickyLinks>
      <section className="flex-column stack-24 squish-0">
        {props.notifications.map((notification) => (
          <NotificationRow key={notification.id} notification={notification} />
        ))}
      </section>
    </DashboardLayoutPageWrapper>
  );
}
