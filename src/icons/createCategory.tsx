import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function CreateCategoryIcon(props: IconProps) {
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
        title: { text: "Create Category", id: "createCategoryTitle" },
        desc: {
          text: "A vector outline of a price tag and a plus sign.",
          id: "createCategoryDesc",
        },
        className: props?.svgClassName || undefined,
      }}
    >
      <path d="M1,22V8a1,1,0,0,1,.349-.759l7-6a1,1,0,0,1,1.3,0l7,6A1,1,0,0,1,17,8v7a1,1,0,0,1-2,0V8.46L9,3.317,3,8.46V21H15a1,1,0,0,1,0,2H2A1,1,0,0,1,1,22ZM7,9A2,2,0,1,0,9,7,2,2,0,0,0,7,9ZM23,19a1,1,0,0,0-1-1H20V16a1,1,0,0,0-2,0v2H16a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V20h2A1,1,0,0,0,23,19Z" />
    </SVG>
  );
}
