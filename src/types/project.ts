export type Project = {
  files: Array<ProjectItem>;
};

export type ProjectItem = {
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
  personality: BioSection;
  background: BioSection;
  key_projects: BioSection;
  core_skills: {
    headline: string;
    "front-end": Array<string>;
    "back-end": Array<string>;
    tools: Array<string>;
    databases: Array<string>;
  };
  development_process: BioSection;
  influences: BioSection;
  career_goals: BioSection;
};
