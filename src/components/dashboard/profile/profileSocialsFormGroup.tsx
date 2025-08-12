import {Dispatch, SetStateAction} from "react";
import ProfileSocialInputField from "@/components/dashboard/profile/profileSocialInputField";
import {classes} from "@/utils";

export default function ProfileSocialsFormGroup({
  values,
}: {
  values: {
    getter: string | null;
    type: "bluesky" | "github" | "linkedin" | "youtube" | "twitch" | "mastodon";
    setter: Dispatch<SetStateAction<string | null>>;
  }[];
}) {
  return (
    <section className="full-width" style={{maxWidth: 800}}>
      <div className={socialsClassName}>
        <h2 className="stack-16">Socials</h2>
        {values.map((value) => (
          <ProfileSocialInputField
            key={value.type}
            value={value.getter}
            setValue={value.setter}
            type={value.type}
          />
        ))}
      </div>
    </section>
  );
}

const socialsClassName = classes([
  "border-left-width-0",
  "border-right-width-0",
  "border-color-gray",
  "border-rounded-0",
  "border-style-outset",
  "border-style-solid",
  "border-width-1",
  "flex-column",
  "full-width",
  "grid",
  "justify-content-space-evenly",
  "overflow-x-hidden",
  "squeeze-32",
  "squish-24",
  "surface-char",
]);
