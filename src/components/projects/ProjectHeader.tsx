import type { Repository } from "@/types";
import type { ReactElement } from "react";

type ProjectHeaderProps = {
  repo: Repository;
};

export function ProjectHeader({ repo }: ProjectHeaderProps): ReactElement {
  return (
    <li className="flex-left flex-wrap gap-md">
      <h2 className="project-title">{repo.name}</h2>
      <span className="project-visibility muted">{repo.visibility}</span>
    </li>
  );
}
