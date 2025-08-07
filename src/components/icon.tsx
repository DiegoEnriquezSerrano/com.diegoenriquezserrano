import { AngleIcon } from "@/icons/angleDown";
import { ArticleAddIcon } from "@/icons/articleAdd";
import { ArticleEditIcon } from "@/icons/articleEdit";
import { ArticleIcon } from "@/icons/article";
import { BellIcon } from "@/icons/bell";
import { BlueskyIcon } from "@/icons/bluesky";
import { BookmarkIcon } from "@/icons/bookmark";
import { CategoriesCreateIcon } from "@/icons/tagCreate";
import { CategoriesDestroyIcon } from "@/icons/tagDestroy";
import { CategoriesUpdateIcon } from "@/icons/tagEdit";
import { CommentIcon } from "@/icons/comment";
import { CompletedIcon } from "@/icons/circleCheck";
import { ContactIcon } from "@/icons/contact";
import { CreateCategoryIcon } from "@/icons/createCategory";
import { CreatePostIcon } from "@/icons/createPost";
import { EditIcon } from "@/icons/edit";
import { GithubIcon } from "@/icons/github";
import { GitIcon } from "@/icons/git";
import { HeartIcon } from "@/icons/heart";
import { HomeIcon } from "@/icons/home";
import { LinkedinIcon } from "@/icons/linkedin";
import { MastodonIcon } from "@/icons/mastodon";
import { MenuIcon } from "@/icons/menu";
import { ProfileEditIcon } from "@/icons/profileEdit";
import { ProfileIcon } from "@/icons/profile";
import { ProgressIcon } from "@/icons/progress";
import { ProjectsCreateIcon } from "@/icons/projectsCreate";
import { ProjectsDestroyIcon } from "@/icons/projectsDestroy";
import { ProjectsIcon } from "@/icons/projects";
import { ProjectsUpdateIcon } from "@/icons/projectsUpdate";
import { RedoIcon } from "@/icons/redo";
import { TagNewIcon } from "@/icons/addTag";
import { TagsIcon } from "@/icons/tags";
import { TwitchIcon } from "@/icons/twitch";
import { UserIcon } from "@/icons/user";
import { XIcon } from "@/icons/x";
import { YoutubeIcon } from "@/icons/youtube";
import type { IconProps, IconType } from "@/types/IconTypes";

export default function Icon(props: { type: IconType; opts?: IconProps }) {
  const iconProps = { ...props.opts };

  switch (props.type) {
    case "article":
      return <ArticleIcon {...iconProps} />;
    case "articleNew":
      return <ArticleAddIcon {...iconProps} />;
    case "articleEdit":
      return <ArticleEditIcon {...iconProps} />;
    case "angle":
      return <AngleIcon {...iconProps} />;
    case "bell":
      return <BellIcon {...iconProps} />;
    case "bluesky":
      return <BlueskyIcon {...iconProps} />;
    case "bookmark":
      return <BookmarkIcon {...iconProps} />;
    case "categoriesCreate":
      return <CategoriesCreateIcon {...iconProps} />;
    case "categoriesUpdate":
      return <CategoriesUpdateIcon {...iconProps} />;
    case "categoriesDestroy":
      return <CategoriesDestroyIcon {...iconProps} />;
    case "comment":
      return <CommentIcon {...iconProps} />;
    case "completed":
      return <CompletedIcon {...iconProps} />;
    case "contact":
      return <ContactIcon {...iconProps} />;
    case "createCategory":
      return <CreateCategoryIcon {...iconProps} />;
    case "createPost":
      return <CreatePostIcon {...iconProps} />;
    case "edit":
      return <EditIcon {...iconProps} />;
    case "heart":
      return <HeartIcon {...iconProps} />;
    case "home":
      return <HomeIcon {...iconProps} />;
    case "git":
      return <GitIcon {...iconProps} />;
    case "github":
      return <GithubIcon {...iconProps} />;
    case "linkedin":
      return <LinkedinIcon {...iconProps} />;
    case "mastodon":
      return <MastodonIcon {...iconProps} />;
    case "menu":
      return <MenuIcon {...iconProps} />;
    case "ongoing":
      return <ProgressIcon {...iconProps} />;
    case "profile":
      return <ProfileIcon {...iconProps} />;
    case "profileEdit":
      return <ProfileEditIcon {...iconProps} />;
    case "projects":
      return <ProjectsIcon {...iconProps} />;
    case "projectsCreate":
      return <ProjectsCreateIcon {...iconProps} />;
    case "projectsUpdate":
      return <ProjectsUpdateIcon {...iconProps} />;
    case "projectsDestroy":
      return <ProjectsDestroyIcon {...iconProps} />;
    case "progress":
      return <ProgressIcon {...iconProps} />;
    case "redo":
      return <RedoIcon {...iconProps} />;
    case "tagNew":
      return <TagNewIcon {...iconProps} />;
    case "tags":
      return <TagsIcon {...iconProps} />;
    case "twitch":
      return <TwitchIcon {...iconProps} />;
    case "user":
      return <UserIcon {...iconProps} />;
    case "youtube":
      return <YoutubeIcon {...iconProps} />;
    case "x":
      return <XIcon {...iconProps} />;
  }
}
