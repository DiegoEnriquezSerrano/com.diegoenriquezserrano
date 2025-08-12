import { ProfileType } from "./UserTypes";

export type ProjectType = {
  body: string;
  cover_image_url: string;
  created_at: string;
  description: string;
  finished_at: string;
  profile: ProfileType;
  slug: string;
  started_at: string;
  status: "ongoing" | "completed";
  title: string;
  tools: string[];
  url: string;
};

export type ProjectsResponseType = {
  json: ProjectType[];
  response: Response;
};

export type ProjectResponseType = {
  json: ProjectType;
  response: Response;
};

export type ProjectStatus = "ongoing" | "completed";

export type ProjectFormValues = {
  body: string;
  coverImageUrl: string;
  description: string;
  finishedAt: string;
  startedAt: string;
  status: ProjectStatus;
  title: string;
  tools: string;
  url: string;
};

export type CreateProjectParams = {
  body: string;
  cover_image_url: string;
  description: string;
  finished_at: string | null;
  started_at: string;
  status: ProjectStatus;
  title: string;
  tools: string[];
  url: string;
};
