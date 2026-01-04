import type { Repository } from "@/types";
import type { ReactElement } from "react";
// import { SeeDetailsButton } from "@/components/ui";

type CardProp = {
  repo: Repository;
};

export function Card({ repo }: CardProp): ReactElement {
  return (
    <article className="card flex flex-column gap-sm">
      <h3 className="card-title">{repo.name}</h3>

      <a href={repo.html_url} className="card-link">
        {" "}
        Go to Repository{" "}
      </a>

      {/* <SeeDetailsButton repo={repo} /> */}
      <p>{repo.description}</p>
      {repo.language
        ? (
          <span className="card-language flex-left gap-sm">
            <div className="card-language-decorator"></div>
            {repo.language}
          </span>
        )
        : (
          ""
        )}

      <ul className="card-topics muted flex gap-xs">
        {repo.topics.slice(0, 3).map((topic) => <li key={topic}>{topic}</li>)}
      </ul>
    </article>
  );
}
