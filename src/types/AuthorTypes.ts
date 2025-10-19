export type AuthorStats = {
  bookmarks: number;
  likes: number;
  posts: number;
};

export type AuthorStatsResponseType = {
  json: AuthorStats;
  response: Response;
};
