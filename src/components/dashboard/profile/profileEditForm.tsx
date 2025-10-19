"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { classes } from "@/utils";
import UserService from "@/services/UserService";
import Icon from "@/components/icon";
import TextareaWithCounter from "@/components/form/textareaWithCounter";
import ProfileSocialsFormGroup from "./profileSocialsFormGroup";
import type { ProfileType } from "@/types/UserTypes";
import TextInputWithCounter from "@/components/form/textInputWithCounter";

export default function ProfileEditForm({ profile }: { profile: ProfileType }) {
  const [banner, setBanner] = useState(profile.banner);
  const [bio, setBio] = useState(profile.bio);
  const [bluesky, setBluesky] = useState(profile.bluesky);
  const [description, setDescription] = useState(profile.description);
  const [displayName, setDisplayName] = useState(profile.display_name);
  const [github, setGithub] = useState(profile.github);
  const [image, setImage] = useState(profile.image);
  const [linkedin, setLinkedin] = useState(profile.linkedin);
  const [mastodon, setMastodon] = useState(profile.mastodon);
  const [twitch, setTwitch] = useState(profile.twitch);
  const [youtube, setYoutube] = useState(profile.youtube);

  return (
    <section className="flex-row full-width justify-content-center stack-0">
      <form
        className="border-width-0 border-left-width-1 border-right-width-1 border-style-solid border-color-gray full-height raised-1 full-width"
        style={{ maxWidth: 800 }}
        id="profile-container"
      >
        <section className="display-block stack-16">
          <div
            className="background-size-cover background-repeat-no-repeat background-position-center"
            style={{
              backgroundImage: `url(${banner})`,
              minHeight: 75,
              height: "calc(18vw)",
              maxHeight: 205,
            }}
          />
          <div className="full-width justify-items-start justify-content-start squeeze-24">
            <figure
              className="flex-row align-items-start float-left pull-16"
              style={{ height: 125, width: 125, marginTop: -50 }}
            >
              <img
                className="border-rounded-circle overflow-hidden raised-1 border-style-outset border-color-cyan border-width-2"
                src={image || ""}
              />
            </figure>
            <div className="flex-row gap-8 squish-8 flex-wrap-wrap justify-content-end">
              <button className="flex-row gap-8 cursor-pointer align-items-center surface-char raised-1 letter-spacing-2 text-color-cyan dim-80 flash-100 squish-4 border-color-cyan border-style-outset border-width-1 border-rounded-16 squeeze-8">
                <Icon type="edit" />
                <span>banner</span>
              </button>
              <button className="flex-row gap-8 cursor-pointer align-items-center surface-char raised-1 letter-spacing-2 text-color-cyan dim-80 flash-100 squish-4 border-color-cyan border-style-outset border-width-1 border-rounded-16 squeeze-8">
                <Icon type="edit" />
                <span>avatar</span>
              </button>
            </div>
            <div className="full-width" style={{ clear: "both" }}>
              <TextInputWithCounter
                name={"displayName"}
                maxCount={70}
                setValue={setDisplayName}
                label={"Display name"}
                value={displayName || ""}
                className="drop-16 letter-spacing-2 display-block surface-char border-color-cyan border-style-inset border-width-1 border-rounded-8 text-color-cyan squeeze-8 squish-8"
              />
            </div>
            <div
              className="full-width display-block"
              style={{ clear: "both", paddingTop: "1rem" }}
            >
              <TextareaWithCounter
                name={"description"}
                rows={3}
                maxCount={200}
                setValue={setDescription}
                label={"Description"}
                value={description || ""}
                className={textAreaClassName}
              />
            </div>
          </div>
        </section>
        <section
          className="squeeze-24 flex-column full-width justify-content-center align-items-start white-space-pre-line stack-24"
          style={{ maxWidth: 800 }}
        >
          <TextareaWithCounter
            name={"bio"}
            rows={8}
            maxCount={null}
            setValue={setBio}
            label={"Bio"}
            value={bio || ""}
            className={textAreaClassName}
          />
        </section>
        <ProfileSocialsFormGroup
          values={[
            { setter: setBluesky, getter: bluesky, type: "bluesky" },
            { setter: setGithub, getter: github, type: "github" },
            { setter: setLinkedin, getter: linkedin, type: "linkedin" },
            { setter: setMastodon, getter: mastodon, type: "mastodon" },
            { setter: setYoutube, getter: youtube, type: "youtube" },
            { setter: setTwitch, getter: twitch, type: "twitch" },
          ]}
        />
      </form>
    </section>
  );
}

const textAreaClassName = classes([
  "border-color-cyan",
  "border-rounded-8",
  "border-style-ouset",
  "border-width-1",
  "display-block",
  "full-width",
  "letter-spacing-2",
  "squeeze-8",
  "squish-8",
  "surface-char",
  "text-color-cyan",
  "overflow-visible",
]);
