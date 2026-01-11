import type { Repository } from "@/types";
import type { ReactElement } from "react";

type ProjectHeaderProps = {
  repo: Repository;
};

export function ProjectHeader({ repo }: ProjectHeaderProps): ReactElement {
  return (
    <li className="flex-left flex-wrap gap-md">
      <a href={repo.html_url}>
        <h2 className="project-title">{repo.name}</h2>
      </a>
      <span className="project-visibility muted">{repo.visibility}</span>
    </li>
  );
}
