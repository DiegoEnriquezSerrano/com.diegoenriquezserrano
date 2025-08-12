import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function ProfileIcon(props: IconProps) {
  const width = props.width ? props.width : "1.25rem";
  const height = props.height ? props.height : "1.25rem";
  const color = props.color ? props.color : "currentColor";

  return (
    <SVG
      opts={{
        width,
        height,
        fillColor: color,
        strokeColor: "none",
        strokeWidth: 0,
        viewBox: "-351 153 246.8 246.8",
        title: { text: "Profile", id: "profileTitle" },
        desc: {
          text: "A vector outline of an identification card.",
          id: "profileDesc",
        },
        className: props?.svgClassName || undefined,
      }}
    >
      <path d="M-277.4 285.15c-11.8 0-21.1-9.4-21.1-21.1 0-11.7 9.4-21.1 21.1-21.1 11.4 0 21.1 9.4 21.1 21.1 0 11.7-9.4 21.1-21.1 21.1zm-45.7 27.5v8.3h91.7v-8.3c0-13.5-9.7-21.1-23.2-21.1h-45.3c-13.2-.1-23.2 7.6-23.2 21.1zm184.7-65h-74.9v14.2h74.9zm0 29.5h-74.9v14.3h74.9zm0 29.8h-74.9v14.3h74.9zm-192-107.7h205.6c11.3 0 20.6 9.2 20.6 20.6v113.1c0 11.3-9.2 20.6-20.6 20.6h-205.6c-11.3 0-20.6-9.2-20.6-20.6v-113.2c.1-11.3 9.3-20.5 20.6-20.5zm-6.8 133.6c0 3.8 3.1 6.9 6.9 6.9h205.6c3.8 0 6.9-3.1 6.9-6.9v-113.1c0-3.8-3.1-6.9-6.9-6.9h-205.6c-3.8 0-6.9 3.1-6.9 6.9z" />
    </SVG>
  );
}
