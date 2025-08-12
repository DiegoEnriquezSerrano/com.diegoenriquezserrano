import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function XIcon(props: IconProps) {
  const width = props.width ? props.width : "1.25rem";
  const height = props.height ? props.height : "1.25rem";
  const color = props.color ? props.color : "currentColor";

  return (
    <SVG
      opts={{
        width,
        height,
        fillColor: color,
        strokeColor: color,
        strokeWidth: 1,
        viewBox: "0 0 24 24",
        title: { text: "Close", id: "closeTitle" },
        desc: { text: "A vector of an 'X'.", id: "closeDesc" },
      }}
    >
      <path
        d="M12.018 10L21 18.554 19.481 20 10.5 11.446 1.518 20 0 18.554 8.981 10 0 1.446 1.518 0 10.5 8.554 19.481 0 21 1.446z"
        fill="inherit"
        fillRule="evenodd"
      />
    </SVG>
  );
}
