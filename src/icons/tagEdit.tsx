import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function CategoriesUpdateIcon(props: IconProps) {
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
        title: { text: "CategoriesUpdate", id: "categoriesUpdateTitle" },
        desc: {
          text: "A vector outline of a tag with a monotone pencil super imposed.",
          id: "categoriesUpdateDesc",
        },
        className: props?.svgClassName || undefined,
      }}
    >
      <path d="M11.997 2a1 1 0 00-.71.29l-8.41 8.42v.05a3 3 0 000 4.24l6.17 6.12a3 3 0 002.222.876l.497-1.326c.158-.423.405-.807.724-1.127l6.914-6.914.04-.04 1.204-1.204c.306-.306.78-.587 1.35-.6V3a1 1 0 00-1-1h-9zm.41 2h7.59v7.59l-8.12 8.11a1 1 0 01-1.41 0l-6.18-6.17a1 1 0 01-.29-.7 1 1 0 01.29-.71L12.407 4zm4.09 2a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 101.5-1.5zM12.96 21.117l-.828 2.208a.473.473 0 00.609.608l2.207-.828a1.89 1.89 0 00.673-.433l6.395-6.394s-.223-.669-.891-1.337c-.668-.668-1.338-.891-1.338-.891l-6.394 6.394a1.89 1.89 0 00-.433.673zm7.72-7.96l.87-.87c.157-.157.366-.257.584-.22.307.05.776.203 1.218.646.443.443.596.912.646 1.219.037.218-.063.426-.219.583l-.872.871s-.223-.668-.891-1.336c-.668-.67-1.337-.892-1.337-.892z" />
    </SVG>
  );
}
