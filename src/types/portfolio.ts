export type PortfolioItem = {
  name: string;
  download_url: string;
  type: "file";
};

export type ProjectJSON = {
  meta: {
    title: string;
    role: string;
    type: string;
    audience: string[];
    status: string;
  };
  overview: {
    summary: string;
    problem: string;
    solution: string;
  };
  responsibilities: string[];
  tech_stack: string[];
  architecture: {
    approach: string;
    data_flow: string;
    deployment: string;
  };
  key_features: string[];
  challenges_and_learnings: string[];
  skills_demonstrated: string[];
  future_improvements: string[];
  links: {
    live_demo: string;
    source_code: string;
  };
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
