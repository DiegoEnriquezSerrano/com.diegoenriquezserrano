export type UserType = {
  username: string;
};

export type ProfileType = {
  banner: string | null;
  bio: string | null;
  bluesky: string | null;
  description: string | null;
  display_name: string | null;
  github: string | null;
  image: string | null;
  linkedin: string | null;
  mastodon: string | null;
  subscribed_count: number;
  subscribers_count: number;
  twitch: string | null;
  username: UserType["username"];
  youtube: string | null;
};
