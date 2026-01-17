export type User = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

export type Repository = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;

  description: string | null;
  language: string | null;
  topics: string[];

  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;

  visibility: string;
  fork: boolean;
  archived: boolean;
  disabled: boolean;
  has_issues: boolean;
  has_pages: boolean;

  homepage: string | null;

  created_at: string;
  updated_at: string;
  pushed_at: string;

  default_branch: string;

  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string | null;
    node_id: string;
  } | null;
};

export type PinnedRepository = {
  author: string;
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
};

export type File = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: "file";
  content: string;
  encoding: "base64";
  _links: {
    self: string;
    git: string;
    html: string;
  };
};
