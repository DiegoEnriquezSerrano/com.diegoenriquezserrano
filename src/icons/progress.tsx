import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function ProgressIcon(props: IconProps) {
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
        viewBox: "0 0 32 32",
        title: { text: "Progress", id: "progressTitle" },
        desc: {
          text: "A vector outline of a pie chart with a partial fill.",
          id: "progressDesc",
        },
        className: props?.svgClassName || undefined,
      }}
    >
      <path d="M16 2a14 14 0 1014 14A14.016 14.016 0 0016 2zm0 26a12 12 0 010-24v12l8.481 8.481A11.963 11.963 0 0116 28z" />
    </SVG>
  );
}
