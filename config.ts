// GitHub + contact configuration for the portfolio site.

// GitHub username used as the single source of truth.
// This must match your GitHub handle exactly (case-sensitive).
const GITHUB_USER = "acostajs";

// Base URL for the GitHub user profile API.
// Used to fetch your main GitHub user data (name, avatar, bio, etc.).
// GET https://api.github.com/users/{GITHUB_USER}
export const GITHUB_URL = `https://api.github.com/users/${GITHUB_USER}`;

// URL to fetch a list of your repositories.
// `sort=updated` returns repos ordered by latest activity.
// `per_page=8` limits how many repos are shown on your portfolio.
export const GITHUB_REPOS = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&direction=desc&per_page=6`;

// Helper to build the URL for a single repository by name.
// Usage: GITHUB_SINGLE_REPO("example_repo_name")
// → https://api.github.com/repos/{GITHUB_USER}/example_repo_name
export function GITHUB_SINGLE_REPO(repoName: string): string {
  return `https://api.github.com/repos/${GITHUB_USER}/${repoName}`;
}

export const GITHUB_README = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_USER}/readme`;

export const GITHUB_JSON = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_USER}/portfolio.json`;
// Public contact email shown in the portfolio (e.g. in the footer/contact section).
// This is NOT a secret; it's public-facing configuration.
export const profile_email = "acosta.juan@icloud.com";
export const profile_linkedin = "juan-acosta-pinilla";
export const profile_linkedin_url = `https://www.linkedin.com/in/${profile_linkedin}/`;
export const profile_github_url = `https://github.com/${GITHUB_USER}/`;
