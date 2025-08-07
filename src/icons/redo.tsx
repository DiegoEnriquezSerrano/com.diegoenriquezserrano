import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function RedoIcon(props: IconProps) {
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
        viewBox: "0 0 16 16",
        title: { text: "Redo", id: "redoTitle" },
        desc: {
          text: "A vector outline of a circular arrow.",
          id: "redoDesc",
        },
        className: props?.svgClassName || undefined,
      }}
    >
      <path d="M10.767.494a8 8 0 00-8.22 1.652l-.84-.84C1.077.676 0 1.122 0 2.013V6h3.987c.891 0 1.337-1.077.707-1.707l-.731-.732a6 6 0 11-1.378 7.024 1 1 0 00-1.805.861A8 8 0 1010.767.494z" />
    </SVG>
  );
}
