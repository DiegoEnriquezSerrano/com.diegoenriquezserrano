import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function ProfileEditIcon(props: IconProps) {
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
        title: { text: "Profile Edit", id: "profileEditTitle" },
        desc: {
          text: "A vector outline of an identification card with a monotone pencil overlaid.",
          id: "profileEditDesc",
        },
        className: props?.svgClassName || undefined,
      }}
    >
      <path d="M-330.4 199.25c-11.3 0-20.5 9.2-20.6 20.5v113.2c0 11.4 9.3 20.6 20.6 20.6h101.409c.334-.366.677-.724 1.028-1.076l.002-.001 12.722-12.723H-330.3c-3.8 0-6.9-3.1-6.9-6.9v-113.1c0-3.8 3.1-6.9 6.9-6.9h205.6c3.8 0 6.9 3.1 6.9 6.9v39.658a38.447 38.447 0 0113.6 7.288V219.85c0-11.4-9.3-20.6-20.6-20.6h-205.6zm53 43.7c-11.7 0-21.1 9.4-21.1 21.1 0 11.7 9.3 21.1 21.1 21.1 11.7 0 21.1-9.4 21.1-21.1 0-11.7-9.7-21.1-21.1-21.1zm64.1 4.7v14.2h74.9v-14.2h-74.9zm0 29.5v14.3h46.361l13.476-13.476.322-.322.503-.502H-213.3zm-86.6 14.4c-13.2-.1-23.2 7.6-23.2 21.1v8.3h91.7v-8.3c0-13.5-9.7-21.1-23.2-21.1h-45.3zm86.6 15.4v14.3h16.561l14.3-14.3H-213.3zm109.1 8.225l-5.706 5.702.002.008-7.896 7.896v4.069c0 3.8-3.1 6.9-6.9 6.9h-4.07l-13.8 13.8h17.77c11.4 0 20.6-9.3 20.6-20.6v-17.775z" />
      <path d="M-223.004 369.335l-8.919 23.784a5.09 5.09 0 006.557 6.55l23.777-8.92a20.363 20.363 0 007.249-4.662l68.874-68.874s-2.403-7.202-9.598-14.403c-7.195-7.195-14.403-9.598-14.403-9.598l-68.874 68.874a20.363 20.363 0 00-4.663 7.249zm83.141-85.727l9.387-9.388c1.684-1.683 3.93-2.755 6.279-2.362 3.306.543 8.362 2.186 13.127 6.958 4.772 4.771 6.414 9.821 6.957 13.127.394 2.348-.678 4.595-2.362 6.278l-9.394 9.388s-2.396-7.195-9.597-14.39c-7.195-7.208-14.397-9.605-14.397-9.605z" />
    </SVG>
  );
}
