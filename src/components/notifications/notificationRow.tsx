import LikeRow from "@/components/notifications/likeRow";
import CommentRow from "@/components/notifications/commentRow";
import type { NotificationType } from "@/types/NotificationTypes";

export default function NotificationRow({
  notification,
}: {
  notification: NotificationType;
}) {
  switch (notification.type) {
    case "comment":
      return <CommentRow notification={notification} />;
    case "like":
      return <LikeRow notification={notification} />;
  }
}
