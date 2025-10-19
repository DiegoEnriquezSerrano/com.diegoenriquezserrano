import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function YoutubeIcon(props: IconProps) {
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
        viewBox: "0 -4 32 32",
        title: { text: "Youtube", id: "youtubeTitle" },
        desc: {
          text: "An outline vector of the Youtube logo.",
          id: "youtubeDesc",
        },
        className: props?.svgClassName || undefined,
      }}
    >
      <path d="M30.722 20.579c-.585 1.315-2.094 2.506-3.511 2.769-.145.027-3.608.652-11.201.652h-.02c-7.592 0-11.058-.625-11.202-.651-1.417-.264-2.927-1.455-3.513-2.771C1.223 20.461.001 17.647.001 12c0-5.647 1.222-8.462 1.274-8.579C1.861 2.105 3.371.915 4.788.652 4.932.625 8.398 0 15.99 0c7.613 0 11.076.625 11.22.651 1.418.264 2.927 1.454 3.513 2.769C30.775 3.538 32 6.353 32 12s-1.225 8.461-1.278 8.579zM28.893 4.23c-.312-.701-1.29-1.471-2.048-1.612C26.813 2.612 23.386 2 16.01 2c-7.395 0-10.825.612-10.858.618-.758.141-1.735.911-2.048 1.616-.01.021-1.102 2.595-1.102 7.766 0 5.17 1.092 7.744 1.104 7.77.311.701 1.288 1.471 2.047 1.612.032.006 3.462.618 10.837.618h.02c7.376 0 10.803-.612 10.836-.618.758-.141 1.735-.911 2.048-1.616.01-.022 1.104-2.596 1.104-7.766s-1.094-7.745-1.105-7.77zM13.541 17.846a.994.994 0 01-1.016.029 1 1 0 01-.517-.875V7a.999.999 0 011.526-.851l8.019 4.956a.999.999 0 01.007 1.696l-8.019 5.045zm.468-9.052v6.395l5.128-3.226-5.128-3.169z" />
    </SVG>
  );
}
