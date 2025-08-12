import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function AngleIcon(props: IconProps) {
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
        viewBox: "-96 0 512 512",
        title: { text: "Angle", id: "angleTitle" },
        desc: {
          text: "A vector outline of an angle. Useful for representing direction.",
          id: "angleDesc",
        },
      }}
    >
      <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
    </SVG>
  );
}
