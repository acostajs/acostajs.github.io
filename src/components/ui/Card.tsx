import { Link } from "@/lib/router";
import type { Repository } from "@/types";
import type { ReactElement } from "react";
import { ProjectDetails } from "../projects";

type CardProp = {
  repo: Repository;
};

export function Card({ repo }: CardProp): ReactElement {
  return (
    <article className="card flex flex-column gap-sm">
      <a href={repo.html_url} className="card-link">
        <h3 className="card-title">{repo.name}</h3>
      </a>

      <Link to={`/details/${repo.name}`}>See Details ...</Link>
      <ProjectDetails repoName={repo.name} />
      <p>{repo.description}</p>
      {repo.language
        ? (
          <span className="card-language flex-left gap-sm">
            <div className="language-decorator"></div>
            {repo.language}
          </span>
        )
        : (
          ""
        )}
    </article>
  );
}
