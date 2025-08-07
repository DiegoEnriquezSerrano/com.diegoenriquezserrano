import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function EditIcon(props: IconProps) {
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
        title: { text: "Edit", id: "editTitle" },
        desc: {
          text: "A vector outline of a pencil and pad.",
          id: "editDesc",
        },
      }}
    >
      <g>
        <g>
          <g>
            <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" />
            <polygon points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" />
          </g>
        </g>
      </g>
    </SVG>
  );
}
