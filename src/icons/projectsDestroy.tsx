import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function ProjectsDestroyIcon(props: IconProps) {
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
        viewBox: "0 -16 544 544",
        title: { text: "ProjectsDestroy", id: "projectsDestroyTitle" },
        desc: {
          text: "A vector outline of a gantt chart with a monotone delete icon super imposed.",
          id: "projectsDestroyDesc",
        },
        className: props?.svgClassName || undefined,
      }}
    >
      <path d="M146 32c-9.9 0-18 8.1-18 18v108c0 9.9 8.1 18 18 18h380c9.9 0 18-8.1 18-18V50c0-9.9-8.1-18-18-18H146zm14 32h352v80H160V64zM18 224c-9.9 0-18 8.1-18 18v108c0 9.9 8.1 18 18 18h78v94c0 9.9 8.1 18 18 18h184.22a79.603 79.603 0 01-1.834-2.236L272.865 448H127.999v-80h86.994c-2.894-10.471-2.597-21.682.891-32H32v-80h224v24.245l31.878-40.335v-.002C286.833 230.984 279.193 224 270 224H18z" />
      <path d="M319.06 247.063a51.136 50.327 0 0140.358-19.426h147.437c10.688 0 20.583 4.718 27.627 12.519a43.465 42.778 0 0110.725 28.371V438.38a43.465 42.778 0 01-10.725 28.371 36.997 36.411 0 01-27.627 12.519H359.418a51.136 50.327 0 01-40.359-19.426l-71.871-90.94a25.568 25.163 0 010-30.9zm50.368 44.023a12.784 12.582 0 0118.076 0l36.153 35.581 36.166-35.58a12.784 12.582 0 0118.077 0l9.038 8.895a12.784 12.582 0 010 17.79l-36.153 35.593 36.153 35.581a12.784 12.582 0 010 17.79l-9.038 8.896a12.784 12.582 0 01-18.077 0l-36.166-35.58-36.153 35.58a12.784 12.582 0 01-18.076 0l-9.038-8.895a12.784 12.582 0 010-17.79l36.153-35.582-36.153-35.593a12.784 12.582 0 010-17.79z" />
    </SVG>
  );
}
