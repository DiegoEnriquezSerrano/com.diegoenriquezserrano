import { Dispatch, SetStateAction } from "react";
import { classes } from "@/utils";
import Icon from "@/components/icon";

export default function ProfileSocialInputField({
  type,
  value,
  setValue,
}: {
  type: "twitch" | "youtube" | "bluesky" | "github" | "linkedin" | "mastodon";
  value: string | null;
  setValue: Dispatch<SetStateAction<string | null>>;
}) {
  return (
    <fieldset
      className="squeeze-4 squish-4 grid align-items-center"
      style={{ gridTemplateColumns: "2rem 1fr" }}
    >
      <label htmlFor={type}>
        <Icon type={type} />
      </label>
      <input
        className={socialsInputClassName}
        value={value || ""}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        id={type}
        name={type}
      />
    </fieldset>
  );
}

const socialsInputClassName = classes([
  "border-color-cyan",
  "border-rounded-8",
  "border-style-inset",
  "border-width-1",
  "full-width",
  "letter-spacing-2",
  "overflow-x-auto",
  "squeeze-8",
  "squish-8",
  "surface-char",
  "text-color-cyan",
]);
