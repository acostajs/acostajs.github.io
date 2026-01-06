export type PortfolioItem = {
  name: string;
  download_url: string;
  type: "file";
};

export type ProjectJSON = {
  title: string;
  description: string;
  technologies?: string[];
};

type BioSection = {
  headline: string;
  story: string;
};

export type AboutJSON = {
  bio: BioSection;
  working_style: BioSection;
  current_focus: BioSection;
  key_projects: BioSection;
  core_skills: BioSection;
  development_process: BioSection;
  motivations: BioSection;
  career_goals: BioSection;
};
