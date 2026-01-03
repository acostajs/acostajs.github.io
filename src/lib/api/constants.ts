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
} as const;

export const OVERVIEW_FEATURES = {
  featuredReposCount: CONFIG.overview_features.repos_count,
} as const;
