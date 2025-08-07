import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function TagNewIcon(props: IconProps) {
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
        viewBox: "0 0 24 24",
        title: { text: "Create category", id: "createCategoryTitle" },
        desc: {
          text: "A vector outline of a price and a plus sign.",
          id: "createCategoryDesc",
        },
      }}
    >
      <path d="M11.57 18.678a1 1 0 001 1h2v2c.001 1.332 2.001 1.332 2 0v-2h2c1.333 0 1.333-2 0-2h-2v-2c0-1.334-2-1.334-2 0v2h-2a1 1 0 00-1 1zM14.116 5.336c-1.26 1.26-.367 3.414 1.415 3.414 1.781 0 2.674-2.154 1.414-3.414a2 2 0 00-2.829 0z" />
      <path d="M1.135 11.848l9.9-9.9a1 1 0 01.783-.29l9.192.707a1 1 0 01.92.92l.706 9.192a1 1 0 01-.288.785l-2.935 2.783c-.903.857-1.775-.61-1.364-1.061l2.56-2.811-.607-7.88-7.879-.605-8.867 8.867 8.485 8.485c.943.943-.471 2.357-1.414 1.414l-9.192-9.192a1 1 0 010-1.414z" />
    </SVG>
  );
}
