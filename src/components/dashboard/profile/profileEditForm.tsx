"use client";

import { FocusEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { classes } from "@/utils";
import UserService from "@/services/UserService";
import Icon from "@/components/icon";
import ProfileSocialsFormGroup from "@/components/dashboard/profile/profileSocialsFormGroup";
import SmallModal from "@/components/smallModal";
import TextareaWithCounter from "@/components/form/textareaWithCounter";
import TextInputWithCounter from "@/components/form/textInputWithCounter";
import type { ProfileType } from "@/types/UserTypes";

export default function ProfileEditForm({ profile }: { profile: ProfileType }) {
  const router = useRouter();

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
  const [openBannerModal, setOpenBannerModal] = useState(false);
  const [showBannerModal, setShowBannerModal] = useState(false);
  const [openAvatarModal, setOpenAvatarModal] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [bannerPreview, setBannerPreview] = useState(profile.banner);
  const [avatarPreview, setAvatarPreview] = useState(profile.image);

  function openModal() {
    setShowBannerModal(true);
    setTimeout(() => setOpenBannerModal(true), 1);
  }

  function openImageModal() {
    setShowAvatarModal(true);
    setTimeout(() => setOpenAvatarModal(true), 1);
  }

  function close(_event: FocusEvent<HTMLButtonElement>): void {
    setOpenBannerModal(false);
    setShowAvatarModal(false);
  }

  async function attemptUpdateProfile(e: React.MouseEvent): Promise<void> {
    e.preventDefault();

    const response = await UserService.Api.putProfile({
      params: {
        bio,
        bluesky,
        description,
        display_name: displayName,
        github,
        image,
        linkedin,
        mastodon,
        twitch,
        youtube,
      },
    });

    if (response.response.ok) {
      router.push("/dashboard/profile");
    }
  }

  async function updateBanner(): Promise<void> {
    const result = await UserService.Api.patchProfile({
      params: { banner: bannerPreview },
    });

    if (result.response.ok) {
      setBanner(bannerPreview);
    }
  }

  async function updateAvatar(): Promise<void> {
    const result = await UserService.Api.patchProfile({
      params: { image: avatarPreview },
    });

    if (result.response.ok) {
      setImage(avatarPreview);
    }
  }

  return (
    <section className="flex-row full-width justify-content-center stack-0">
      <form
        className="border-width-0 border-left-width-1 border-right-width-1 border-style-solid border-color-gray full-height raised-1 full-width"
        id="profile-container"
        style={{ maxWidth: 800 }}
      >
        <section className="display-block stack-16">
          <div
            className="background-size-cover background-repeat-no-repeat background-position-center"
            style={{
              backgroundImage: `url(${banner})`,
              height: "calc(18vw)",
              maxHeight: 205,
              minHeight: 75,
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
              <button
                onClick={openModal}
                type="button"
                className="flex-row gap-8 cursor-pointer align-items-center surface-char raised-1 letter-spacing-2 text-color-cyan dim-80 flash-100 squish-4 border-color-cyan border-style-outset border-width-1 border-rounded-16 squeeze-8"
              >
                <Icon type="edit" />
                <span>banner</span>
              </button>
              <button
                onClick={openImageModal}
                type="button"
                className="flex-row gap-8 cursor-pointer align-items-center surface-char raised-1 letter-spacing-2 text-color-cyan dim-80 flash-100 squish-4 border-color-cyan border-style-outset border-width-1 border-rounded-16 squeeze-8"
              >
                <Icon type="edit" />
                <span>avatar</span>
              </button>
              <button
                onClick={attemptUpdateProfile}
                type="submit"
                style={{ position: "fixed", top: "1rem", right: "1rem" }}
                className="flex-row cursor-pointer align-items-center surface-cyan raised-1 letter-spacing-2 text-color-char dim-80 flash-100 squish-4 border-color-cyan border-style-outset border-width-1 border-rounded-16 squeeze-8"
              >
                <span>Save</span>
              </button>
            </div>
            <div className="full-width" style={{ clear: "both" }}>
              <TextInputWithCounter
                className="drop-16 letter-spacing-2 display-block surface-char border-color-cyan border-style-inset border-width-1 border-rounded-8 text-color-cyan squeeze-8 squish-8"
                label={"Display name"}
                maxCount={70}
                name={"displayName"}
                setValue={setDisplayName}
                value={displayName || ""}
              />
            </div>
            <div
              className="full-width display-block"
              style={{ clear: "both", paddingTop: "1rem" }}
            >
              <TextareaWithCounter
                className={textAreaClassName}
                label={"Description"}
                maxCount={200}
                name={"description"}
                rows={3}
                setValue={setDescription}
                value={description || ""}
              />
            </div>
          </div>
        </section>
        <section
          className="squeeze-24 flex-column full-width justify-content-center align-items-start white-space-pre-line stack-24"
          style={{ maxWidth: 800 }}
        >
          <TextareaWithCounter
            className={textAreaClassName}
            label={"Bio"}
            maxCount={null}
            name={"bio"}
            rows={8}
            setValue={setBio}
            value={bio || ""}
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
      {showBannerModal ? (
        <SmallModal open={openBannerModal} close={close}>
          <section className="stack-32 flex-column gap-16 full-width">
            <div
              className="background-size-cover background-repeat-no-repeat background-position-center full-width full-height"
              style={{
                backgroundImage: `url(${bannerPreview ? bannerPreview : undefined})`,
                height: "calc(18vw)",
                maxHeight: 205,
                minHeight: 75,
              }}
            />
            <form className="border-width-0 full-height full-width flex-column align-items-center gap-24">
              <input
                className={inputClassName}
                type="url"
                value={bannerPreview || ""}
                onChange={(e) => setBannerPreview(e.target.value)}
              />
              <button
                type="button"
                onClick={updateBanner}
                className="squish-8 squeeze-16 cursor-pointer surface-cyan text-color-black border-style-outset border-width-2 border-color-cyan border-rounded-16"
              >
                Update banner
              </button>
            </form>
          </section>
        </SmallModal>
      ) : (
        <></>
      )}
      {showAvatarModal ? (
        <SmallModal open={openAvatarModal} close={close}>
          <section className="stack-32">
            <div
              className="background-size-cover background-repeat-no-repeat background-position-center full-width full-height overflow-hidden border-rounded-circle stack-24"
              style={{
                backgroundImage: `url(${avatarPreview ? avatarPreview : undefined})`,
                maxHeight: 125,
                minHeight: 125,
                maxWidth: 125,
                minWidth: 125,
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              .
            </div>
            <form className="border-width-0 full-height full-width flex-column align-items-center gap-24">
              <input
                className={inputClassName}
                type="url"
                value={avatarPreview || ""}
                onChange={(e) => setAvatarPreview(e.target.value)}
              />
              <button
                type="button"
                onClick={updateAvatar}
                className="squish-8 squeeze-16 cursor-pointer surface-cyan text-color-black border-style-outset border-width-2 border-color-cyan border-rounded-16"
              >
                Update avatar
              </button>
            </form>
          </section>
        </SmallModal>
      ) : (
        <></>
      )}
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
  "overflow-visible",
  "squeeze-8",
  "squish-8",
  "surface-char",
  "text-color-cyan",
]);

const inputClassName = classes([
  "surface-char",
  "border-color-cyan",
  "border-style-inset",
  "border-width-1",
  "border-rounded-16",
  "text-color-cyan",
  "squeeze-16",
  "squish-16",
]);
