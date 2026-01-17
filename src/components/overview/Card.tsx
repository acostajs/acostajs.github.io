import { GITHUB_REPO_URL } from "@/lib/api";
import type { PinnedRepository, Repository } from "@/types";
import type { ReactElement } from "react";
import { DetailsBtn } from "../ui/DetailsBtn";

type CardProp = {
  repo: PinnedRepository;
};

export function Card({ repo }: CardProp): ReactElement {
  return (
    <article className="card flex flex-column gap-sm">
      <h3 className="card-title">{repo.name}</h3>

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
      <div className="flex gap-sm">
        <DetailsBtn repoName={repo.name} />
        <a href={GITHUB_REPO_URL(repo.name)} className="btn">
          View Code
        </a>
      </div>
    </article>
  );
}
