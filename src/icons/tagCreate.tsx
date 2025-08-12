import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function CategoriesCreateIcon(props: IconProps) {
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
        title: { text: "CategoriesCreate", id: "categoriesCreateTitle" },
        desc: {
          text: "A vector outline of a tag with a monotone plus sign super imposed.",
          id: "categoriesCreateDesc",
        },
        className: props?.svgClassName || undefined,
      }}
    >
      <path d="M11.997 2a1 1 0 00-.71.29l-8.41 8.42v.05a3 3 0 000 4.24l6.17 6.12a3 3 0 004.24 0l.316-.315h-.042c-.805 0-1.568-.343-2.051-.873a1 1 0 01-1.043-.232l-6.18-6.17a1 1 0 01-.29-.7 1 1 0 01.29-.71L12.407 4h7.59v7.59l-.001.002c.487.485.797 1.214.797 1.98v.051l.914-.913a1 1 0 00.29-.71V3a1 1 0 00-1-1h-9zm4.5 4a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 101.5-1.5z" />
      <path d="M22.496 16.55h-2.979v-2.977a1.49 1.49 0 10-2.978 0v2.978h-2.978a1.49 1.49 0 100 2.978h2.978v2.978a1.49 1.49 0 102.978 0V19.53h2.979a1.49 1.49 0 100-2.978" />
    </SVG>
  );
}
