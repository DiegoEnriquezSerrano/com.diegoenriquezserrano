import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function ProjectsIcon(props: IconProps) {
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
        title: { text: "Projects", id: "projectsTitle" },
        desc: {
          text: "A vector outline of a gantt chart.",
          id: "projectsDesc",
        },
        className: props?.svgClassName || undefined,
      }}
    >
      <path d="M146 32h380c9.9 0 18 8.1 18 18v108c0 9.9-8.1 18-18 18H146c-9.9 0-18-8.1-18-18V50c0-9.9 8.1-18 18-18zm14 32v80h352V64H160zM32 256v80h224v-80H32zm96 112v80h224v-80H128zM18 224h252c9.9 0 18 8.1 18 18v94h78c9.9 0 18 8.1 18 18v108c0 9.9-8.1 18-18 18H114c-9.9 0-18-8.1-18-18v-94H18c-9.9 0-18-8.1-18-18V242c0-9.9 8.1-18 18-18z" />
    </SVG>
  );
}
