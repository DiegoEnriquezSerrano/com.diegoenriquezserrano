import {classes} from "@/utils";
import Icon from "./icon";
import type {ProfileType} from "@/types/UserTypes";

export default function ProfileSocials({profile}: {profile?: ProfileType}) {
  return (
    <div className={socialsClassName}>
      <h2 className="stack-16">Connect with me!</h2>
      <a
        href={`https://bsky.app/profile/${profile?.bluesky}`}
        className="squeeze-4 squish-4 grid"
        style={{gridTemplateColumns: "2rem 1fr"}}
        target="_blank"
      >
        <Icon type="bluesky" />
        <p className="overflow-x-auto">{profile?.bluesky}</p>
      </a>
      <a
        href={`https://github.com/${profile?.github}`}
        className="squeeze-4 squish-4 grid"
        style={{gridTemplateColumns: "2rem 1fr"}}
        target="_blank"
      >
        <Icon type="github" />
        <p className="overflow-x-auto">{profile?.github}</p>
      </a>
      <a
        href={`https://www.linkedin.com/in/${profile?.linkedin}`}
        className="squeeze-4 squish-4 grid"
        style={{gridTemplateColumns: "2rem 1fr"}}
        target="_blank"
      >
        <Icon type="linkedin" />
        <p className="overflow-x-auto">{profile?.linkedin}</p>
      </a>
    </div>
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
