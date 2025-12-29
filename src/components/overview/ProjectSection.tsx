import type { ReactElement } from "react";
import type { GitHubRepo } from "../../pages/types";
import { ProjectCard } from "./ProjectCard";

type ProjectSectionProps = {
  repos: GitHubRepo[];
};

export function ProjectSection({ repos }: ProjectSectionProps): ReactElement {
  return (
    <ul className="repo-grid" id="projects">
      {repos.map((repo) => (
        <li key={repo.id}>
          <ProjectCard repo={repo} />
        </li>
      ))}
    </ul>
  );
}
