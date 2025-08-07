import { SVGAttributes } from "react";

export type IconType =
  | "article"
  | "articleNew"
  | "articleEdit"
  | "angle"
  | "bell"
  | "bluesky"
  | "bookmark"
  | "categoriesCreate"
  | "categoriesDestroy"
  | "categoriesUpdate"
  | "comment"
  | "completed"
  | "contact"
  | "createPost"
  | "createCategory"
  | "edit"
  | "heart"
  | "home"
  | "git"
  | "github"
  | "linkedin"
  | "mastodon"
  | "menu"
  | "ongoing"
  | "progress"
  | "profile"
  | "profileEdit"
  | "projects"
  | "projectsCreate"
  | "projectsDestroy"
  | "projectsUpdate"
  | "redo"
  | "tags"
  | "tagNew"
  | "twitch"
  | "youtube"
  | "user"
  | "x";

export type IconProps = {
  height?: SVGAttributes<SVGAElement>["height"];
  width?: SVGAttributes<SVGAElement>["width"];
  color?: SVGAttributes<SVGAElement>["fill"];
  title?: { text: string; id: string };
  desc?: { text: string; id: string };
  svgClassName?: SvgProps["className"];
};

export type SvgProps = {
  className?: string;
  desc: IconProps["desc"];
  fillColor: SVGAttributes<SVGAElement>["fill"];
  height: IconProps["height"];
  strokeColor: SVGAttributes<SVGAElement>["stroke"];
  strokeWidth: SVGAttributes<SVGAElement>["strokeWidth"];
  title: IconProps["title"];
  viewBox: SVGAttributes<SVGAElement>["viewBox"];
  width: IconProps["width"];
};
