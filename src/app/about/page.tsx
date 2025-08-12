// components
import BaseLayoutPageWrapper from "@/components/baseLayoutPageWrapper";
import ProfileSocials from "@/components/profileSocials";

// services
import UserService from "@/services/UserService";

// types
import type { ProfileType } from "@/types/UserTypes";

const { getProfileByUsername } = UserService.Api;

export default async function AboutPage() {
  let profile: ProfileType | undefined;

  try {
    const [profileRequest] = await Promise.all([
      getProfileByUsername(
        { username: String(process.env.NEXT_PUBLIC_PRIMARY_USERNAME) },
        {},
      ),
    ]);

    if (profileRequest.response.ok) profile = profileRequest.json;
  } catch (e) {
    if (process.env.VITE_DEBUG) console.error(e);
  }

  if (process.env.VITE_DEBUG) {
    console.log("profile: ", profile);
  }

  return (
    <BaseLayoutPageWrapper props={{ showCategories: true }}>
      <section className="flex-row full-width justify-content-center stack-0">
        <section
          className="border-width-0 border-left-width-1 border-right-width-1 border-style-solid border-color-gray full-height raised-1"
          style={{ maxWidth: 800 }}
          id="profile-container"
        >
          <section className="display-block stack-16">
            <div
              className="background-size-cover background-repeat-no-repeat background-position-center"
              style={{
                backgroundImage: `url(${profile?.banner})`,
                minHeight: 75,
                height: "calc(18vw)",
                maxHeight: 205,
              }}
            />
            <div className="full-width justify-items-start justify-content-start">
              <figure
                className="flex-row align-items-start float-left pull-16 push-16"
                style={{ height: 125, width: 125, marginTop: -50 }}
              >
                <img
                  className="border-rounded-circle overflow-hidden raised-1 border-style-outset border-color-cyan border-width-1"
                  src={String(profile?.image)}
                />
              </figure>
              <p className="squeeze-16 stack-16 drop-16">{profile?.username}</p>
              <p className="squeeze-24">{profile?.description}</p>
            </div>
          </section>
          <section
            className="squeeze-24 flex-row justify-content-center align-items-start white-space-pre-line stack-24"
            style={{ maxWidth: 800 }}
          >
            {profile?.bio}
          </section>
          <section className="full-width" style={{ maxWidth: 800 }}>
            <ProfileSocials profile={profile} />
          </section>
        </section>
      </section>
    </BaseLayoutPageWrapper>
  );
}
