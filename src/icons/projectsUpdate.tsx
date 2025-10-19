import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function ProjectsUpdateIcon(props: IconProps) {
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
        title: { text: "ProjectsUpdate", id: "projectsUpdateTitle" },
        desc: {
          text: "A vector outline of a gantt chart with a monotone pencil super imposed.",
          id: "projectsUpdateDesc",
        },
        className: props?.svgClassName || undefined,
      }}
    >
      <path d="M146 32c-9.9 0-18 8.1-18 18v108c0 9.9 8.1 18 18 18h327.673c6.78-4.375 15.27-7.496 24.828-7.295h.001c1.971.042 3.99.229 6.045.571 5.942.98 13.302 3.003 21.104 6.724H526c9.9 0 18-8.1 18-18V50c0-9.9-8.1-18-18-18H146zm14 32h352v80H160V64zM18 224c-9.9 0-18 8.1-18 18v108c0 9.9 8.1 18 18 18h78v94c0 9.9 8.1 18 18 18h120.82c-2.359-8.057-2.389-17.009.73-25.347l.002-.01 2.492-6.643H127.999v-80h152.104l32-32H288v-94c0-9.9-8.1-18-18-18H18zm14 32h224v80H32v-80zm352 195.536l-18.201 18.2-.004.007A73.715 73.715 0 01352.929 480H366c9.9 0 18-8.1 18-18v-10.464z" />
      <path d="M282.255 412.411l-19.638 52.369a11.209 11.209 0 0014.437 14.422l52.354-19.638a44.836 44.836 0 0015.961-10.268l151.65-151.65s-5.29-15.857-21.132-31.714c-15.842-15.842-31.714-21.133-31.714-21.133l-151.65 151.65a44.836 44.836 0 00-10.268 15.962zm183.065-188.76l20.67-20.668c3.706-3.707 8.653-6.068 13.824-5.201 7.279 1.195 18.413 4.812 28.904 15.318 10.507 10.507 14.124 21.626 15.32 28.905.866 5.17-1.495 10.118-5.202 13.824l-20.684 20.67s-5.276-15.843-21.133-31.685c-15.842-15.871-31.699-21.147-31.699-21.147z" />
    </SVG>
  );
}
