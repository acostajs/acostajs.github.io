import { CONFIG } from "profile.config";

export const GITHUB_URL = `https://api.github.com/users/${CONFIG.github.username}`;

export const GITHUB_REPOS =
  `https://api.github.com/users/${CONFIG.github.username}/repos?sort=${CONFIG.github.repos.sort_by}&direction=${CONFIG.github.repos.direction}&per_page=${CONFIG.github.repos.number_of_repos_to_display}`;

export function GITHUB_PORTFOLIO_FOLDER(
  repoName: string,
  folderPath: string = "portfolio",
): string {
  return `https://api.github.com/repos/${CONFIG.github.username}/${repoName}/contents/${folderPath}?ref=main`;
}

export const GITHUB_README = `https://api.github.com/repos/${CONFIG.github.username}/${CONFIG.github.username}/readme`;

export const profile_email = CONFIG.profile.email;
export const profile_linkedin = CONFIG.profile.linkedin;
export const profile_linkedin_url = `https://www.linkedin.com/in/${CONFIG.profile.linkedin}/`;
export const profile_github_url = `https://github.com/${CONFIG.github.username}/`;
