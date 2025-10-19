import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function MenuIcon(props: IconProps) {
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
        viewBox: "58 58 400 400",
        title: { text: "Menu", id: "menuTitle" },
        desc: {
          text: "A vector hamburger icon.",
          id: "menuDesc",
        },
      }}
    >
      <path
        fill={color}
        d="M390.7 188.6H121.3c-7.4 0-13.5-6-13.5-13.5 0-7.4 6-13.5 13.5-13.5h269.5c7.4 0 13.5 6 13.5 13.5-.1 7.5-6.1 13.5-13.6 13.5zM390.7 269.5H121.3c-7.4 0-13.5-6-13.5-13.5s6-13.5 13.5-13.5h269.5c7.4 0 13.5 6 13.5 13.5s-6.1 13.5-13.6 13.5zM390.7 350.3H121.3c-7.4 0-13.5-6-13.5-13.5s6-13.5 13.5-13.5h269.5c7.4 0 13.5 6 13.5 13.5s-6.1 13.5-13.6 13.5z"
      />
    </SVG>
  );
}
