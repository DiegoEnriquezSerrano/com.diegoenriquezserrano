import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function ProjectsCreateIcon(props: IconProps) {
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
        title: { text: "ProjectsCreate", id: "projectsCreateTitle" },
        desc: {
          text: "A vector outline of a gantt chart with a monotone plus sign super imposed.",
          id: "projectsCreateDesc",
        },
        className: props?.svgClassName || undefined,
      }}
    >
      <path d="M146 32c-9.9 0-18 8.1-18 18v108c0 9.9 8.1 18 18 18h225.547c9.924-5.357 20.861-7.81 31.601-7.81 10.74 0 21.678 2.453 31.602 7.81H526c9.9 0 18-8.1 18-18V50c0-9.9-8.1-18-18-18H146zm14 32h352v80H160V64zM18 224c-9.9 0-18 8.1-18 18v108c0 9.9 8.1 18 18 18h78v94c0 9.9 8.1 18 18 18h235.228c-5.845-9.21-9.54-20.325-10.19-32h-211.04v-80h111.797c-4.659-9.398-6.804-19.612-6.804-29.655 0-.78.012-1.563.038-2.345H32v-80h224v32.35c8.778-7.04 19.962-11.91 32-13.582V242c0-9.9-8.1-18-18-18H18z" />
      <path d="M509.09 303.032h-70.628v-70.628c0-47.086-70.628-47.086-70.628 0v70.628h-70.628c-47.085 0-47.085 70.628 0 70.628h70.628v70.628c0 47.085 70.628 47.085 70.628 0V373.66h70.628c47.085 0 47.085-70.628 0-70.628" />
    </SVG>
  );
}
