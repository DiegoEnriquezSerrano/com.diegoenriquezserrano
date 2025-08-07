import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function HomeIcon(props: IconProps) {
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
        strokeWidth: "0",
        viewBox: "0 0 44 44",
        title: { text: "Home", id: "homeTitle" },
        desc: { text: "A vector outline of a house.", id: "homeDesc" },
      }}
    >
      <path d="M37.125 44H30.25c-2.338 0-4.125-1.823-4.125-4.207v-5.61c0-1.122-.55-2.384-1.375-3.085-.825-.841-2.063-1.122-3.163-1.122-2.062.14-3.712 2.104-3.712 4.488v5.329c0 2.384-1.788 4.207-4.125 4.207H6.875c-2.2 0-4.125-1.823-4.125-4.067L0 18.757c0-1.262.55-2.524 1.512-3.226L19.387.947c1.513-1.263 3.575-1.263 5.088 0L42.35 15.53c1.1.702 1.65 1.824 1.65 3.226v.14l-2.75 21.036c0 2.244-1.925 4.067-4.125 4.067zM22 27.171c1.65 0 3.437.702 4.675 1.823 1.375 1.263 2.2 3.226 2.2 5.19v5.609c0 .841.55 1.402 1.375 1.402h6.875c.825 0 1.375-.56 1.375-1.402v-.14l2.75-21.036c0-.421-.138-.701-.55-.982L22.825 3.05c-.55-.42-1.238-.42-1.65 0L3.3 17.635c-.275.28-.55.561-.55.982L5.5 39.793c0 .841.55 1.402 1.375 1.402h6.875c.825 0 1.375-.56 1.375-1.402v-5.33c0-3.645 2.75-6.871 6.187-7.151.275-.14.413-.14.688-.14z" />
    </SVG>
  );
}
