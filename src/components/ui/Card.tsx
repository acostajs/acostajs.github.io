import type { Repository } from "@/types";
import type { ReactElement } from "react";

type ProjectCardProp = {
  repo: Repository;
};

export function Card({ repo }: ProjectCardProp): ReactElement {
  return (
    <article className="card flex flex-column gap-sm">
      <a href={repo.html_url} className="card-title">
        <h3>{repo.name}</h3>
      </a>

      <p>{repo.description}</p>

      {
        /* <span className="card-language flex-left gap-sm">
				<div className="card-language-decorator"></div>
				{repo.language}
			</span> */
      }

      {
        /* <ul className="card-topics muted flex gap-sm">
				{repo.topics.slice(0, 3).map((topic) => (
					<li key={topic}>{topic}</li>
				))}
			</ul> */
      }
    </article>
  );
}
