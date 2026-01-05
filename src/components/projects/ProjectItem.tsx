import { ForkIcon, IssueIcon, LicenseIcon, StarIcon, WatcherIcon } from "@/components/icons";
import { formatRelativeDate } from "@/lib/utils";
import type { Repository } from "@/types";
import type { ReactElement } from "react";
import { TopicAnchor } from "../ui";

type ProjectItemProps = {
  repo: Repository;
  key: string;
};

export function ProjectItem({ repo, key }: ProjectItemProps): ReactElement {
  return (
    <li key={key}>
      <article className="project-item">
        <ul className="flex flex-column gap-sm">
          <li className="flex-left flex-wrap gap-md">
            <a href={repo.html_url}>
              <h2 className="project-title">{repo.name}</h2>
            </a>

            <span className="project-visibility muted">{repo.visibility}</span>
            <ul className="flex gap-sm flex-wrap">
              <li></li>
              {repo.forks_count
                ? (
                  <li className="flex gap-sm">
                    <ForkIcon size={20} />
                    {repo.forks_count}
                  </li>
                )
                : (
                  ""
                )}
              {repo.stargazers_count
                ? (
                  <li className="flex gap-sm">
                    <StarIcon size={20} />
                    {repo.stargazers_count}
                  </li>
                )
                : (
                  ""
                )}
              {repo.watchers_count
                ? (
                  <li className="flex gap-sm">
                    <WatcherIcon size={20} />
                    {repo.watchers_count}
                  </li>
                )
                : (
                  ""
                )}
              {repo.open_issues_count
                ? (
                  <li className="flex gap-sm">
                    <IssueIcon size={20} /> {repo.open_issues_count}
                  </li>
                )
                : (
                  ""
                )}
            </ul>
          </li>
          <li></li>
          <li>
            <p>{repo.description}</p>
          </li>
          <li>
            <ul className="flex flex-wrap gap-sm">
              {repo.language
                ? (
                  <li className="flex-left gap-sm">
                    <div className="language-decorator"></div>
                    <span>{repo.language}</span>
                  </li>
                )
                : (
                  ""
                )}

              <li className="muted">
                Last Update: {formatRelativeDate(repo.updated_at)}
              </li>
              {repo.license
                ? (
                  <li className="flex gap-sm">
                    <LicenseIcon size={20} />
                    {repo.license.name}
                  </li>
                )
                : (
                  ""
                )}
            </ul>
          </li>

          <li>
            <TopicAnchor repo={repo} />
          </li>
        </ul>
      </article>
    </li>
  );
}
