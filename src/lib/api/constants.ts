import { CONFIG } from "@/config/profile";

export const PROFILE = {
  github: {
    username: CONFIG.github.username,
    url: `https://github.com/${CONFIG.github.username}/`,
  },

  email: CONFIG.profile.email,

  linkedin: {
    username: CONFIG.profile.linkedin,
    url: `https://www.linkedin.com/in/${CONFIG.profile.linkedin}/`,
  },
  resume: {
    url: `https://github.com/${CONFIG.github.username}/${CONFIG.github.username}/raw/main/portfolio/resume.pdf`,
  },
} as const;

export const OVERVIEW_FEATURES = {
  featuredReposCount: CONFIG.overview_features.repos_count,
} as const;

export const WEB3FORMS = {
  access_key: CONFIG.web3forms.access_key,
} as const;

export const PROJECTS_FEATURES = {
  repository_count_per_page: CONFIG.projects_features.repository_count_per_page,
} as const;
