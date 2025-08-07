import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function CategoriesDestroyIcon(props: IconProps) {
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
        title: { text: "CategoriesDestroy", id: "categoriesDestroyTitle" },
        desc: {
          text: "A vector outline of a tag with a monotone delete icon super imposed.",
          id: "categoriesDestroyDesc",
        },
        className: props?.svgClassName || undefined,
      }}
    >
      <path d="M11.997 2a1 1 0 00-.71.29l-8.41 8.42v.05a3 3 0 000 4.24l6.17 6.12a3 3 0 003.333.621l-1.044-1.343a2.24 2.24 0 01-.254-.411 1 1 0 01-.615-.287l-6.18-6.17a1 1 0 01-.29-.7 1 1 0 01.29-.71L12.407 4h7.59v7.59l-1.173 1.172h2.832l.051-.052a1 1 0 00.29-.71V3a1 1 0 00-1-1h-9zm4.5 4a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 101.5-1.5z" />
      <path d="M15.136 14.805a1.987 1.987 0 011.568-.767h5.73c.415 0 .8.186 1.074.494a1.69 1.69 0 01.416 1.12v6.708a1.69 1.69 0 01-.416 1.12 1.438 1.438 0 01-1.074.494h-5.73a1.987 1.987 0 01-1.568-.767l-2.794-3.591a.994.994 0 010-1.22zm1.957 1.738a.497.497 0 01.703 0l1.405 1.405 1.405-1.405a.497.497 0 01.703 0l.35.351a.497.497 0 010 .703l-1.404 1.405 1.405 1.405a.497.497 0 010 .703l-.351.351a.497.497 0 01-.703 0l-1.405-1.405-1.405 1.405a.497.497 0 01-.703 0l-.351-.351a.497.497 0 010-.703l1.405-1.405-1.405-1.405a.497.497 0 010-.703z" />
    </SVG>
  );
}
