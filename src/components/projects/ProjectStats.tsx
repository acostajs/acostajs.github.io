import { ForkIcon, IssueIcon, StarIcon, WatcherIcon } from "@/components/icons";
import type { Repository } from "@/types";
import type { ReactElement, ReactNode } from "react";

type ProjectStatsProps = {
  repo: Repository;
};

export function ProjectStats({ repo }: ProjectStatsProps): ReactElement {
  return (
    <ul className="flex gap-sm flex-wrap">
      {repo.forks_count && repo.forks_count > 0
        ? (
          <li>
            <ForkIcon size={20} /> {repo.forks_count}
          </li>
        )
        : null}

      {repo.stargazers_count && repo.stargazers_count > 0
        ? (
          <li>
            <StarIcon size={20} /> {repo.stargazers_count}
          </li>
        )
        : null}

      {repo.watchers_count && repo.watchers_count > 0
        ? (
          <li>
            <WatcherIcon size={20} /> {repo.watchers_count}
          </li>
        )
        : null}

      {repo.open_issues_count && repo.open_issues_count > 0
        ? (
          <li>
            <IssueIcon size={20} /> {repo.open_issues_count}
          </li>
        )
        : null}
    </ul>
  );
}
