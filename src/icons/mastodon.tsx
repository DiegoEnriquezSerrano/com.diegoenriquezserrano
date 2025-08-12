import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function MastodonIcon(props: IconProps) {
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
        title: { text: "Mastodon", id: "mastodonTitle" },
        desc: {
          text: "An outline vector of the Mastodon logo.",
          id: "mastodonDesc",
        },
        className: props?.svgClassName || undefined,
      }}
    >
      <path d="M8 7v5a1 1 0 11-2 0V7c.005-1.879 1.76-3 3.5-3 1.13 0 1.944.34 2.5.835.556-.494 1.37-.835 2.5-.835 1.739 0 3.494 1.12 3.5 2.999V12a1 1 0 11-2 0V6.999C15.94 6.24 15.16 6 14.5 6c-.649 0-1.433.247-1.5.999V10a1 1 0 11-2 0V7c-.06-.76-.847-1-1.5-1-.648 0-1.433.248-1.5 1z" />
      <path d="M16 1H8C4.073 1 1.086 4.024 1 7.99V13c0 5.115 3.558 10 9 10h5.48A2.52 2.52 0 0018 20.48c0-1.367-1.134-2.446-2.5-2.48a29.92 29.92 0 00-.985 0c-2.079.022-5.247.055-6.232-1.704C12.808 17.126 23 18.5 23 11V8c-.093-3.965-3.066-7-7-7zM3 13V7.99C3.116 5.113 5.139 3 8 3h8c2.867 0 4.878 2.126 5 5v3c0 6-10.656 3.805-13.757 3.03A1.01 1.01 0 006 15c0 1.084.275 2.011.86 2.755 1.675 2.136 5.036 2.169 7.658 2.194.34.003.668.007.977.014a.517.517 0 01.505.517.52.52 0 01-.52.52H10c-4.346 0-7-3.984-7-8z" />
    </SVG>
  );
}
