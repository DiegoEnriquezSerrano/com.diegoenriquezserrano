import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function BellIcon(props: IconProps) {
  const width = props.width ? props.width : "1.25rem";
  const height = props.height ? props.height : "1.25rem";
  const color = props.color ? props.color : "currentColor";

  return (
    <SVG
      opts={{
        width,
        height,
        fillColor: "none",
        strokeColor: color,
        strokeWidth: 2,
        viewBox: "0 0 24 24",
        title: { text: "Notifications", id: "notificationTitle" },
        desc: { text: "A vector outline of a bell.", id: "notificationDesc" },
      }}
    >
      <path d="M12 5.5C14.7614 5.5 17 7.73858 17 10.5V12.7396C17 13.2294 17.1798 13.7022 17.5052 14.0683L18.7808 15.5035C19.6407 16.4708 18.954 18 17.6597 18H6.34025C5.04598 18 4.35927 16.4708 5.21913 15.5035L6.4948 14.0683C6.82022 13.7022 6.99998 13.2294 6.99998 12.7396L7 10.5C7 7.73858 9.23858 5.5 12 5.5ZM12 5.5V3M10.9999 21H12.9999" />
    </SVG>
  );
}
