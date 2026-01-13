import { PROFILE } from "@/lib/api";
import type { Repository } from "@/types";
import type { ReactElement } from "react";

import { ProjectActions, ProjectDescription, ProjectFooter, ProjectHeader, ProjectStats } from "./";

type ProjectItemProps = {
  repo: Repository;
};

export function ProjectItem({ repo }: ProjectItemProps): ReactElement | null {
  if (repo.name === PROFILE.github.username) {
    return null;
  }

  return (
    <li className="project-item">
      <ul className="flex flex-column gap-sm">
        <ProjectHeader repo={repo} />
        <ProjectStats repo={repo} />
        <ProjectDescription repo={repo} />
        <ProjectActions repo={repo} />
        <ProjectFooter repo={repo} />
      </ul>
    </li>
  );
}
