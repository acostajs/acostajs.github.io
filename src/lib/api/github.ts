import { CONFIG } from "@/config";

export const GITHUB_USERNAME = CONFIG.github.username;

export const GITHUB_URL = `https://api.github.com/users/${CONFIG.github.username}`;

export const GITHUB_REPOS =
  `https://api.github.com/users/${CONFIG.github.username}/repos?sort=${CONFIG.github.repos.sort_by}&direction=${CONFIG.github.repos.direction}&per_page=${CONFIG.github.repos.number_of_repos_to_display}`;

export const GITHUB_PINNED_REPOS = `https://pinned.berrysauce.dev/get/${CONFIG.github.username}`;

export function GITHUB_REPO_URL(repoName: string): string {
  return `https://github.com/acostajs/${repoName}`;
}

export function GITHUB_PORTFOLIO_FOLDER(repoName: string): string {
  return `https://api.github.com/repos/${CONFIG.github.username}/${repoName}/contents/${CONFIG.github_folder}?ref=main`;
}

export const GITHUB_README = `https://api.github.com/repos/${CONFIG.github.username}/${CONFIG.github.username}/readme`;
