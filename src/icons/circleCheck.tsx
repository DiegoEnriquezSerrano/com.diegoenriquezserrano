import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function CompletedIcon(props: IconProps) {
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
        viewBox: "0 0 1024 1024",
        title: { text: "Completed", id: "completedTitle" },
        desc: {
          text: "A monotone vector of a circle with a checkmark cutout.",
          id: "completedDesc",
        },
        className: props?.svgClassName || undefined,
      }}
    >
      <path d="M512 64a448 448 0 110 896 448 448 0 010-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 10-54.336 54.336l126.72 126.72a38.272 38.272 0 0054.336 0l262.4-262.464a38.4 38.4 0 10-54.272-54.336L456.192 600.384z" />
    </SVG>
  );
}
