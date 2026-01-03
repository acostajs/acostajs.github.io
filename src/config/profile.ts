/**
 * Portfolio Configuration
 * Edit values here → All API endpoints auto-update instantly
 * Deployed to GitHub Pages - public data only
 */

export const CONFIG = {
  github: {
    // REQUIRED: Your exact GitHub username (case-sensitive)
    username: "acostajs",

    repos: {
      // Number of repos to show (1-100, GitHub API max per_page)
      number_of_repos_to_display: 20,

      // Sort by recent activity:
      // "updated" (last commit/push - RECOMMENDED)
      // "created" (newest repos first)
      // "pushed" (last push date)
      // "full_name" (alphabetical by repo name)
      // "size" (largest repos first)
      // "stargazers_count" (most starred)
      sort_by: "updated", //

      // Sort direction:
      // "desc" (newest/highest first - RECOMMENDED)
      // "asc" (oldest/lowest first)
      direction: "desc",
    },
  },

  profile: {
    // Public contact info (shown in footer/contact section)
    email: "acosta.juan@icloud.com", //

    // LinkedIn username (no https://linkedin.com/in/ prefix)
    linkedin: "juan-acosta-pinilla",
    // Optional: Add more socials later
    // twitter: "yourhandle",
    // website: "https://your-site.com",
  },
  // Folder in which all repositories contain portfolio related information, like portfolio.json and portfolio-img-?.avif
  github_folder: "portfolio",
  // Amount of projects to show in latest projects in overview page
  overview_features: {
    repos_count: 2,
  },
};

export type ConfigType = typeof CONFIG;
