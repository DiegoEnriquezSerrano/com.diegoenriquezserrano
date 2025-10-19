import { SVG } from "@/components/svg";
import type { IconProps } from "@/types/IconTypes";

export function TwitchIcon(props: IconProps) {
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
        viewBox: "0 0 32 32",
        title: { text: "Twitch", id: "twitchTitle" },
        desc: {
          text: "An outline vector of the Twitch logo.",
          id: "twitchDesc",
        },
        className: props?.svgClassName || undefined,
      }}
    >
      <path d="M26.711 14.929l-4.284 4.284h-4.285l-3.749 3.749v-3.749h-4.82V3.146h17.138zM8.502 1.004L3.146 6.36v19.279h6.427v5.356l5.356-5.356h4.284l9.641-9.64V1.003zm12.854 5.891h2.142v6.427h-2.142zm-5.892 0h2.143v6.427h-2.144z" />
    </SVG>
  );
}
