import type { ReactElement } from "react";
import type { GitHubRepo } from "../../pages/types";

type ProjectCardProp = {
  repo: GitHubRepo;
};

export function ProjectCard({ repo }: ProjectCardProp): ReactElement {
  return (
    <article className="card flex flex-column gap-sm">
      <div className="flex-between">
        <a href={repo.html_url} className="card-title">
          <h3>{repo.name}</h3>
        </a>
        <span className="card-visibility muted">{repo.visibility}</span>
      </div>
      <div className="card-text">
        <p>{repo.description}</p>
      </div>

      <span className="card-language flex-left gap-sm">
        <div className="card-language-decorator"></div>
        {repo.language}
      </span>

      <ul className="card-topics muted flex gap-sm">
        {repo.topics.slice(0, 3).map((topic) => (
          <li key={topic} className="repo-card__topic">
            {topic}
          </li>
        ))}
      </ul>
    </article>
  );
}
