import Icon from "./icon";
import type { NotificationType } from "@/types/NotificationTypes";

export function NotificationBell(props: {
  notifications?: NotificationType[];
}) {
  let hasNotifications = !!props.notifications?.length;

  return (
    <div className="flex-row align-items-center squeeze-16 squish-16 cursor-pointer">
      {hasNotifications ? (
        <div
          className="position-absolute text-small surface-scarlet border-rounded-circle squeeze-4 raised-1"
          style={{
            marginLeft: "var(--spacing-16)",
            marginBottom: "var(--spacing-16)",
          }}
        >
          {props.notifications?.length}
        </div>
      ) : null}
      <Icon opts={{ height: "2rem", width: "2rem" }} type="bell" />
    </div>
  );
}
