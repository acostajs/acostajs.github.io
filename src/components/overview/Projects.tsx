import type { ReactElement } from "react";
import type { GitHubRepo } from "../../pages/types";

type ProjectsProps = {
  repos: GitHubRepo[];
};

export function Projects({ repos }: ProjectsProps): ReactElement {
  return (
    <ul className="repo-grid" id="projects">
      {repos.map((repo) => (
        <li key={repo.id}>
          <article className="card">
            <div className="card-title">
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <h3>{repo.name}</h3>
              </a>
              <span className="muted">
                Updated {new Date(repo.pushed_at).toLocaleDateString()}
              </span>
            </div>

            {repo.description && <p className="repo-card__description">{repo.description}</p>}

            <div className="repo-card__footer">
              <div className="repo-card__stats">
                {repo.language && (
                  <span className="repo-card__stat">
                    <span className="repo-card__language-dot" />
                    {repo.language}
                  </span>
                )}

                {repo.open_issues_count > 0 && (
                  <span className="repo-card__stat">
                    Issues: {repo.open_issues_count}
                  </span>
                )}
                {repo.license && (
                  <span className="repo-card__stat">
                    License: {repo.license.spdx_id}
                  </span>
                )}
              </div>
            </div>

            {repo.topics && repo.topics.length > 0 && (
              <ul className="repo-card__topics">
                {repo.topics.slice(0, 3).map((topic) => (
                  <li key={topic} className="repo-card__topic">
                    {topic}
                  </li>
                ))}
              </ul>
            )}
          </article>
        </li>
      ))}
    </ul>
  );
}
